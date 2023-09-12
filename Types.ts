export interface Category {
    __typename?: "Category";
    name: string;
    id: string;
    slug: string;
    Sub_category: SubCategory[];
  }

export interface SubCategory {
    __typename?: "Sub_category";
    name: string;
    id: string;
    slug: string;
    Posts: PostsProps[];

  }
  
export interface PostsProps {
    __typename?: "Posts";
    content: string;
    dislikes: any;
    likes: any;
    slug: string;
    title: string;
  }