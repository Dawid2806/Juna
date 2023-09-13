import { GetStaticPaths, GetStaticProps } from "next";
import { apolloClient } from "@/graphql/apolloClient";
import React from "react";
import {
  GetAllPostsDocument,
  GetAllPostsQuery,
  GetPostBySlugDocument,
  GetPostBySlugQuery,
  GetPostBySlugQueryVariables,
} from "@/gql/graphql";
import { PostsProps } from "../../../../../Types";
import Link from "next/link";

interface PostPageProps {
  data: PostsProps;
  subCategory: string;
  category: string;
}

const PostPage = ({ data, subCategory, category }: PostPageProps) => {
  return (
    <div>
      <Link className="block" href={`/${category}/${subCategory}`}>
        Back
      </Link>
      {data.title}
      <hr />
      {data.content}
      <hr />
      {data.dislikes}
      <hr />
      {data.likes}
    </div>
  );
};
export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<GetAllPostsQuery>({
    query: GetAllPostsDocument,
  });

  const paths = data.Category.flatMap((category) => {
    return category.Sub_category.flatMap((subCategory) => {
      return subCategory.Posts.map((post) => ({
        params: {
          category: category.slug,
          subcategory: subCategory.slug,
          post: post.slug,
        },
      }));
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.category || !params?.subcategory || !params?.post)
    return { props: {} };

  const { data } = await apolloClient.query<
    GetPostBySlugQuery,
    GetPostBySlugQueryVariables
  >({
    query: GetPostBySlugDocument,
    variables: {
      slug: {
        _eq: params?.post.toString(),
      },
    },
  });
  const postData = data.Posts[0];

  return {
    props: {
      category: params?.category,
      subCategory: params?.subcategory,
      data: postData,
    },
  };
};
