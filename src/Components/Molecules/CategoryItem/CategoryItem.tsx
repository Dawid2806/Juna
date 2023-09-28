import { Like, DisLike } from "@/Components/Atoms/SVG/Like";
import React from "react";

interface CategoryItemProps {
  img: string;
  title: string;
  likes: number;
  slug: string;
  disLiked: number;
}

export const CategoryItem = ({
  img,
  title,
  likes,
  slug,
  disLiked,
}: CategoryItemProps) => {
  return (
    <div
      key={slug}
      className="flex flex-col overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-md hover:shadow-xl"
    >
      <div className="flex-shrink-0 aspect-w-3 aspect-h-2">
        <img className="object-contain w-full h-full p-8" src={img} alt="" />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-center gap-5 flex-shrink-0">
          <div className="flex ">
            <Like />
            <p className="text-sm font-bold text-gray-900">{likes}</p>
          </div>
          <div className="flex">
            <DisLike />
            <p className="text-sm font-bold text-gray-900">{disLiked}</p>
          </div>
        </div>
        <h3 className="text-sm sm:text-base font-bold text-gray-900 mt-2.5 flex-1 hover:text-blue-600 transition-all duratin-200">
          <a href={slug} title="">
            {title}
          </a>
        </h3>
        <div className="flex items-center justify-between mt-8">
          <div className="sm:flex sm:items-center lg:flex-col xl:flex-row lg:items-start xl:items-center">
            <p className="mt-1 text-xs font-medium text-gray-400 sm:text-sm sm:mt-0 sm:ml-2 lg:ml-0 lg:mt-1 xl:ml-2 xl:mt-0">
              {likes} Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
