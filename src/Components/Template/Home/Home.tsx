import { useGetAllPostsinSubCategoryQuery } from "@/gql/graphql";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import React from "react";

export const Home = () => {
  const { data } = useGetAllPostsinSubCategoryQuery();
  if (!data) return <div>Brak danych </div>;
  console.log(data);

  const allposts = data.Sub_category.flatMap((sub) => sub.Posts);

  // Znajdź post z największą liczbą polubień
  const postWithMostLikes = allposts.reduce(
    (maxPost, currentPost) => {
      return currentPost.likes > maxPost.likes ? currentPost : maxPost;
    },
    { likes: -1, content: "", dislikes: 0, title: "", slug: "", img: "" }
  );

  console.log(postWithMostLikes);

  return (
    <div>
      <div className="my-20 py-20">
        <h1>POST KTORY JEST OBECNIE NAJBARDZIEJ LAJNKwany</h1>
        <div>
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={postWithMostLikes.img}
            width={800}
          />
          <h2>{postWithMostLikes.title}</h2>
          <span className="my-20">{postWithMostLikes.likes}</span>
          <hr />
        </div>
      </div>
      {data.Sub_category.map((sub) => {
        return (
          <div key={sub.slug}>
            {sub.Posts.length > 0 ? <h2>{sub.name}</h2> : null}
            <div className="flex">
              {sub.Posts.map((post) => {
                return (
                  <div key={post.slug}>
                    <Card className="py-4">
                      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">
                          {post.title}
                        </p>
                        <small className="text-default-500">
                          Liks : {post.likes}
                        </small>
                        <small className="text-default-500">
                          nie Liks : {post.dislikes}
                        </small>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt="Card background"
                          className="object-cover rounded-xl"
                          src={post.img}
                          width={200}
                        />
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
