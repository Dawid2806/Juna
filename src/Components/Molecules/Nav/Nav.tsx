import React, { useState } from "react";
import Link from "next/link";
import { useGetAllPostsinSubCategoryQuery } from "@/gql/graphql";
import { useAuthenticationStatus } from "@nhost/react";
import { ProfilComponent } from "../Profil/Profil";
import { Arrow } from "../../Atoms/SVG/Arrow";
import { Bar } from "@/Components/Atoms/SVG/Bar";
import { Exit } from "@/Components/Atoms/SVG/Exit";
export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const { isAuthenticated } = useAuthenticationStatus();

  const { data } = useGetAllPostsinSubCategoryQuery();
  if (!data) return <div>Brak danych </div>;
  return (
    <>
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between h-16 lg:h-[72px]">
            <div className="flex items-center flex-shrink-0">
              <Link href="#" title="" className="inline-flex">
                <span className="sr-only"> Rareblocks logo </span>
                <span> Rareblocks logo </span>
              </Link>
            </div>

            <div className="hidden lg:flex lg:justify-start items-center lg:ml-16 lg:space-x-12">
              <p
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center font-sans text-sm font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent xl:text-base hover:border-gray-900 focus:outline-none focus:border-gray-900"
              >
                Category
                <Arrow />
              </p>
            </div>

            <div className="flex items-center justify-end  space-x-6">
              {/* tutaj avatar lub przycisk do logowania*/}
              {isAuthenticated ? (
                <Link color="primary" href="/login">
                  Sign Up
                </Link>
              ) : (
                <ProfilComponent />
              )}
            </div>
            <div
              className="flex items-center justify-center lg:hidden cursor-pointer"
              onClick={() => setIsOpenMobile(!isOpenMobile)}
            >
              <Bar />
            </div>
          </div>
        </div>
      </div>
      {/* dekstop nav */}
      {isOpen && (
        <div className="hidden py-12 bg-white border lg:block">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-24">
              {data.Category.map((category) => {
                return (
                  <NavList
                    key={category.slug}
                    category_title={category.name}
                    children={category.Sub_category.map((sub) => {
                      return (
                        <NavLink
                          key={sub.slug}
                          sub_slug={`/${category.slug}/${sub.slug}`}
                          sub_title={sub.name}
                        />
                      );
                    })}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mobile nav */}
      {isOpenMobile && (
        <div className="absolute bg-white w-full h-full top-0 left-0">
          <div>
            <div className="flex items-center justify-between flex-shrink-0 p-4">
              <Link href="#" title="" className="inline-flex">
                <span className="sr-only"> Rareblocks logo </span>
                <span> Rareblocks logo </span>
              </Link>
              <div
                className="cursor-pointer"
                onClick={() => setIsOpenMobile(!isOpenMobile)}
              >
                <Exit />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="">
              {data.Category.map((category) => {
                return (
                  <NavList
                    key={category.slug}
                    category_title={category.name}
                    children={category.Sub_category.map((sub) => {
                      return (
                        <NavLink
                          key={sub.slug}
                          sub_slug={`/${category.slug}/${sub.slug}`}
                          sub_title={sub.name}
                        />
                      );
                    })}
                  />
                );
              })}
            </div>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
};
interface NavListProps {
  category_title: string;
  children: React.ReactNode;
}
export const NavList = ({ category_title, children }: NavListProps) => {
  return (
    <div>
      <p className="text-base font-bold text-gray-900">{category_title} </p>
      <ul className="">{children}</ul>
    </div>
  );
};
interface NavLinkProps {
  sub_title: string;
  sub_slug: string;
}
export const NavLink = ({ sub_title, sub_slug }: NavLinkProps) => {
  return (
    <li>
      <Link
        href={sub_slug}
        title=""
        className="text-sm font-medium text-gray-700 transition-all duration-200 sm:text-base hover:text-gray-900"
      >
        {sub_title}
      </Link>
    </li>
  );
};
