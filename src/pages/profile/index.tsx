import { useGetAllUsersQuery } from "@/gql/graphql";
import { SignedIn } from "@nhost/react";
import Link from "next/link";
import React from "react";

const Profil = () => {
  const { data } = useGetAllUsersQuery();

  return (
    <div>
      <SignedIn>
        {data?.users.map((user) => {
          return (
            <div>
              <li>
                <Link href={`/profile/${user.id}`}>{user.displayName}</Link>
              </li>
            </div>
          );
        })}
      </SignedIn>
    </div>
  );
};
export default Profil;
