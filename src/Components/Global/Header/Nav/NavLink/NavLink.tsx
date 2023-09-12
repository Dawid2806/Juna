import { useGetCategoryQuery } from "@/gql/graphql";
import Link from "next/link";

export const NavLink = () => {
  const { data, loading, error } = useGetCategoryQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Link href="/">home</Link>
      {data?.Category.map((cat) => (
        <div className="relative group inline-block" key={cat.name}>
          <Link
            href={`/${cat.name}`}
            className="px-4 py-2 hover:bg-gray-700 rounded"
          >
            {cat.name}
          </Link>
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10 invisible group-hover:visible">
            {cat?.Sub_category.map((subCat) => (
              <Link
                key={subCat.id}
                href={`/${cat.name}/${subCat.slug}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                {subCat.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
