import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { apolloClient } from "../../graphql/apolloClient";
import {
  GetCategoryBySlugDocument,
  GetCategoryBySlugQuery,
  GetCategoryBySlugQueryVariables,
  GetCategoryDocument,
  GetCategoryQuery,
} from "@/gql/graphql";
import { Category } from "../../../Types";

interface CategoryPageProps {
  data: Category;
}

const CategoryPage = ({ data }: CategoryPageProps) => {
  return (
    <div>
      Nazwa Strony : {data.name}
      <div>
        Wszystkie podkategorie :
        {data.Sub_category.map((sub) => {
          return (
            <div key={sub.id}>
              <hr />
              {sub.name}
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<GetCategoryQuery>({
    query: GetCategoryDocument,
  });
  return {
    paths: data.Category.map((cat) => {
      return {
        params: {
          category: cat.slug.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.category) {
    return {
      props: {},
    };
  }
  const { data } = await apolloClient.query<
    GetCategoryBySlugQuery,
    GetCategoryBySlugQueryVariables
  >({
    query: GetCategoryBySlugDocument,
    variables: {
      slug: {
        _eq: params?.category.toString(),
      },
    },
  });

  return {
    props: {
      data: data.Category[0],
    },
  };
};
