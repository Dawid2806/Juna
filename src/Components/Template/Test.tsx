"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import React, { useEffect } from "react";

export const Test = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <section className=" py-10 flex flex-col lg:flex-row justify-center items-center ">
        <div className=" flex ">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Sprawdź najciekawsze posty
              <span className="inline">
                <img
                  className="inline w-auto h-8 sm:h-10 lg:h-12"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg"
                  alt="shape-1"
                />
              </span>
              w ostatnich 24 godzinach
              <span className="inline">
                <img
                  className="inline w-auto h-8 sm:h-10 lg:h-11"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg"
                  alt="shape-2"
                />
              </span>
            </h1>

            <svg
              className="w-auto h-4 mt-8 text-gray-300"
              viewBox="0 0 172 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
        </div>

        <div className=" gap-6 py-8 w-full bg-black  ">
          <Carousel slide={false} pauseOnHover={true} className="mx-auto">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export const Card = () => {
  return (
    <div className=" snap-start mx-auto scroll-ml-6 first:pl-6 last:pr-6 ">
      <div className="  m-auto	 flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
        <a href="#" title="" className="flex aspect-w-4 aspect-h-3">
          <img
            className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png"
            alt="thumbnail-1"
          />
        </a>
        <div className="flex-1 px-4 py-5 sm:p-6">
          <a href="#" title="" className="">
            <p className="text-lg font-bold text-gray-900">
              How to write content about your photographs
            </p>
            <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis
              auctor odio arcu et dolor.
            </p>
          </a>
        </div>
        <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium text-gray-900">
                <a href="#" title="" className="">
                  Growth
                </a>
              </p>
              <span className="text-sm font-medium text-gray-900">•</span>
              <p className="text-sm font-medium text-gray-900">7 Mins Read</p>
            </div>
            <a href="#" title="" className="" role="button"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Elo = () => {
  return (
    <section className="max-w-[1200px] mx-auto ">
      <div className="flex ">
        <div>
          {" "}
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Sprawdź najciekawsze posty
            <span className="inline">
              <img
                className="inline w-auto h-8 sm:h-10 lg:h-12"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg"
                alt="shape-1"
              />
            </span>
            w ostatnich 24 godzinach
            <span className="inline">
              <img
                className="inline w-auto h-8 sm:h-10 lg:h-11"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg"
                alt="shape-2"
              />
            </span>
          </h1>{" "}
          <svg
            className="w-auto h-4 mt-8 text-gray-300"
            viewBox="0 0 172 16"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>
        <div className="overflow-hidden ">
          <Carousel
            style={{
              flexShrink: 1,
            }}
            slide={false}
            pauseOnHover={true}
            className="mx-auto flex-shrink"
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
