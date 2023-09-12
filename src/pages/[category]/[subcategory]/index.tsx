import { GetStaticPaths, GetStaticProps } from "next";
import { apolloClient } from "../../../graphql/apolloClient";

import React from "react";
import {
  GetAllPostInSubCategoryBySlugDocument,
  GetAllPostInSubCategoryBySlugQuery,
  GetAllPostInSubCategoryBySlugQueryVariables,
  GetCategoryDocument,
  GetCategoryQuery,
} from "@/gql/graphql";
import { SubCategory } from "../../../../Types";

interface SubCategoryPageProps {
  data: SubCategory;
}

const SubCategoryPage = ({ data }: SubCategoryPageProps) => {
  return (
    <div>
      CategoryPage
      {data.Posts.map((post) => {
        return <div key={post.slug}>{post.title}</div>;
      })}
    </div>
  );
};
export default SubCategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<GetCategoryQuery>({
    query: GetCategoryDocument,
  });

  const pathsForAllCategories = data.Category.map((cat) => {
    return cat.Sub_category.map((sub) => ({
      params: {
        category: cat.slug,
        subcategory: sub.slug,
      },
    }));
  });

  const allPaths = pathsForAllCategories.flat();

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.category || !params?.subcategory) {
    return {
      props: {},
    };
  }

  const { data } = await apolloClient.query<
    GetAllPostInSubCategoryBySlugQuery,
    GetAllPostInSubCategoryBySlugQueryVariables
  >({
    query: GetAllPostInSubCategoryBySlugDocument,
    variables: {
      slug: {
        _eq: params?.subcategory.toString(),
      },
    },
  });
  return {
    props: {
      data: data.Sub_category[0],
    },
  };
};
