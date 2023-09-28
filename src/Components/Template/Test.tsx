import { Carousel } from "flowbite-react";
import Image from "next/image";
import React, { useEffect } from "react";

export const Test = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="relative py-10  ">
        <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 xl:py-40 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
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
        </div>
        <div className="lg:absolute lg:inset-0 ">
          <div className="flex flex-col items-center justify-center overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="flex justify-start w-full gap-6 py-8  ">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Card = () => {
  return (
    <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6 ">
      <div className="relative 	 flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
        <a href="#" title="" className="flex shrink-0 aspect-w-4 aspect-h-3">
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

export const Test2 = () => {
  return (
    <Carousel>
      <Image alt="..." src="i" width={100} height={100} />
      <Image
        alt="..."
        width={100}
        src="https://fastly.picsum.photos/id/392/1024/1024.jpg?hmac=v9HbvfLrF2AktiSXKcH9ABFGBYe1up_UQxQu16VCIgc"
      />
      <Image
        alt="..."
        width={100}
        src="https://fastly.picsum.photos/id/392/1024/1024.jpg?hmac=v9HbvfLrF2AktiSXKcH9ABFGBYe1up_UQxQu16VCIgc"
      />
      <Image
        alt="..."
        width={100}
        src="https://fastly.picsum.photos/id/392/1024/1024.jpg?hmac=v9HbvfLrF2AktiSXKcH9ABFGBYe1up_UQxQu16VCIgc"
      />
      <Image
        alt="..."
        width={100}
        src="https://fastly.picsum.photos/id/392/1024/1024.jpg?hmac=v9HbvfLrF2AktiSXKcH9ABFGBYe1up_UQxQu16VCIgc"
      />
    </Carousel>
  );
};
