import {
  GetAllUsersDocument,
  GetAllUsersQuery,
  GetUserByIdDocument,
  GetUserByIdQuery,
  GetUserByIdQueryVariables,
} from "@/gql/graphql";
import { apolloClient } from "@/graphql/apolloClient";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface UserProfilPageProps {
  user: GetUserByIdQuery["user"];
}

const UserProfilPage = ({ user }: UserProfilPageProps) => {
  return <div>{user?.email}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<GetAllUsersQuery>({
    query: GetAllUsersDocument,
  });

  return {
    paths: data.users.map((user) => {
      return {
        params: {
          profile: user.displayName,
          id: user.id,
        },
      };
    }),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) return { notFound: true };
  const { data } = await apolloClient.query<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >({
    query: GetUserByIdDocument,
    variables: {
      id: params.id,
    },
  });
  return {
    props: {
      user: data.user,
    },
  };
};
export default UserProfilPage;
