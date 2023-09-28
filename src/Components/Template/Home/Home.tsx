import { CategoryItem } from "@/Components/Molecules/CategoryItem/CategoryItem";
import { CategoryList } from "@/Components/Organisms/CategoryList/CategoryList";
import { useGetAllPostsinSubCategoryQuery } from "@/gql/graphql";
import Link from "next/link";

import React from "react";

export const Home = () => {
  const { data } = useGetAllPostsinSubCategoryQuery();
  if (!data) return <div>Brak danych </div>;

  return (
    <div>
      {data.Category.map((category) => {
        return (
          <section
            key={category.slug}
            className="py-12 bg-white sm:py-10 lg:py-14"
          >
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <h2 className="capitalize  text-2xl font-bold text-gray-900 sm:text-3xl">
                <Link href={`/${category.slug}`}>{category.name}</Link>
              </h2>
              {category.Sub_category.map((sub) => {
                return (
                  <CategoryList
                    key={sub.slug}
                    slug={`/${category.slug}/${sub.slug}`}
                    title={sub.name}
                    children={sub.Posts.map((post) => {
                      return (
                        <CategoryItem
                          key={post.slug}
                          img={post.img}
                          title={post.title}
                          likes={post.likes}
                          disLiked={post.dislikes}
                          slug={`/${category.slug}/${sub.slug}/${post.slug}`}
                        />
                      );
                    })}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};
