import { useGetCategoryQuery } from "@/gql/graphql";
import { gql, useQuery } from "@apollo/client";

const GET_BOOKS = gql`
  query MyQuery {
    users_connection {
      edges {
        node {
          displayName
        }
      }
    }
  }
`;

export default function Home() {
  const { loading, data, error } = useGetCategoryQuery({});
  console.log(error);
  return (
    <main>
      <h1>elo</h1>
      {loading && <>ładowanie</>}
      {data?.Category.map((cat) => {
        return (
          <div key={cat.name}>
            {cat.name}
            <hr />
            <div>
              {cat.Sub_category.map((sub) => {
                return <p key={sub.id}>{sub.name}</p>;
              })}
              <hr />
            </div>
          </div>
        );
      })}
    </main>
  );
}
