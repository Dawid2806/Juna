import Link from "next/link";
import React from "react";
interface CategoryListProps {
  children?: React.ReactNode;
  title: string;
  slug: string;
}
export const CategoryList = ({ children, title, slug }: CategoryListProps) => {
  return (
    <div className=" mx-auto  ">
      <div className="">
        <h3 className="text-xl font-bold text-gray-900 capitalize sm:text-1xl">
          <Link href={slug}>{title}</Link>
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4 sm:gap-6 lg:gap-8 xl:gap-12  lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
};
