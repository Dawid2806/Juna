import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
export type GetCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoryQuery = { __typename?: 'query_root', Category: Array<{ __typename?: 'Category', name: string, id: any, slug: string, Sub_category: Array<{ __typename?: 'Sub_category', name: string, id: any, slug: string }> }> };

export type GetCategoryBySlugQueryVariables = Exact<{
  slug?: InputMaybe<String_Comparison_Exp>;
}>;


export type GetCategoryBySlugQuery = { __typename?: 'query_root', Category: Array<{ __typename?: 'Category', name: string, id: any, Sub_category: Array<{ __typename?: 'Sub_category', name: string, id: any, slug: string }> }> };

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'query_root', Category: Array<{ __typename?: 'Category', slug: string, name: string, id: any, Sub_category: Array<{ __typename?: 'Sub_category', id: any, name: string, slug: string, Posts: Array<{ __typename?: 'Posts', title: string, slug: string, likes: any, dislikes: any, content: string }> }> }> };

export type GetAllPostInSubCategoryBySlugQueryVariables = Exact<{
  slug?: InputMaybe<String_Comparison_Exp>;
}>;


export type GetAllPostInSubCategoryBySlugQuery = { __typename?: 'query_root', Sub_category: Array<{ __typename?: 'Sub_category', name: string, slug: string, id: any, Posts: Array<{ __typename?: 'Posts', content: string, dislikes: any, likes: any, slug: string, title: string }> }> };

export type GetPostBySlugQueryVariables = Exact<{
  slug?: InputMaybe<String_Comparison_Exp>;
}>;


export type GetPostBySlugQuery = { __typename?: 'query_root', Posts: Array<{ __typename?: 'Posts', content: string, dislikes: any, likes: any, slug: string, title: string }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, displayName: string }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'query_root', user?: { __typename?: 'users', displayName: string, avatarUrl: string, createdAt: any, email?: any | null, lastSeen?: any | null } | null };

export type GetAllPostsinSubCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsinSubCategoryQuery = { __typename?: 'query_root', Category: Array<{ __typename?: 'Category', name: string, slug: string, id: any, Sub_category: Array<{ __typename?: 'Sub_category', name: string, slug: string, id: any, Posts: Array<{ __typename?: 'Posts', content: string, dislikes: any, img: string, likes: any, slug: string, title: string }> }> }> };


export const GetCategoryDocument = gql`
    query GetCategory {
  Category {
    name
    id
    slug
    Sub_category {
      name
      id
      slug
    }
  }
}
    `;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
      }
export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
        }
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;
export const GetCategoryBySlugDocument = gql`
    query GetCategoryBySlug($slug: String_comparison_exp) {
  Category(where: {slug: $slug}) {
    name
    id
    Sub_category {
      name
      id
      slug
    }
  }
}
    `;

/**
 * __useGetCategoryBySlugQuery__
 *
 * To run a query within a React component, call `useGetCategoryBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCategoryBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>(GetCategoryBySlugDocument, options);
      }
export function useGetCategoryBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>(GetCategoryBySlugDocument, options);
        }
export type GetCategoryBySlugQueryHookResult = ReturnType<typeof useGetCategoryBySlugQuery>;
export type GetCategoryBySlugLazyQueryHookResult = ReturnType<typeof useGetCategoryBySlugLazyQuery>;
export type GetCategoryBySlugQueryResult = Apollo.QueryResult<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>;
export const GetAllPostsDocument = gql`
    query GetAllPosts {
  Category {
    slug
    name
    id
    Sub_category {
      id
      name
      slug
      Posts {
        title
        slug
        likes
        dislikes
        content
      }
    }
  }
}
    `;

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
      }
export function useGetAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetAllPostInSubCategoryBySlugDocument = gql`
    query GetAllPostInSubCategoryBySlug($slug: String_comparison_exp) {
  Sub_category(where: {slug: $slug}) {
    name
    slug
    id
    Posts {
      content
      dislikes
      likes
      slug
      title
    }
  }
}
    `;

/**
 * __useGetAllPostInSubCategoryBySlugQuery__
 *
 * To run a query within a React component, call `useGetAllPostInSubCategoryBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostInSubCategoryBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostInSubCategoryBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetAllPostInSubCategoryBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostInSubCategoryBySlugQuery, GetAllPostInSubCategoryBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostInSubCategoryBySlugQuery, GetAllPostInSubCategoryBySlugQueryVariables>(GetAllPostInSubCategoryBySlugDocument, options);
      }
export function useGetAllPostInSubCategoryBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostInSubCategoryBySlugQuery, GetAllPostInSubCategoryBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostInSubCategoryBySlugQuery, GetAllPostInSubCategoryBySlugQueryVariables>(GetAllPostInSubCategoryBySlugDocument, options);
        }
export type GetAllPostInSubCategoryBySlugQueryHookResult = ReturnType<typeof useGetAllPostInSubCategoryBySlugQuery>;
export type GetAllPostInSubCategoryBySlugLazyQueryHookResult = ReturnType<typeof useGetAllPostInSubCategoryBySlugLazyQuery>;
export type GetAllPostInSubCategoryBySlugQueryResult = Apollo.QueryResult<GetAllPostInSubCategoryBySlugQuery, GetAllPostInSubCategoryBySlugQueryVariables>;
export const GetPostBySlugDocument = gql`
    query GetPostBySlug($slug: String_comparison_exp) {
  Posts(where: {slug: $slug}) {
    content
    dislikes
    likes
    slug
    title
  }
}
    `;

/**
 * __useGetPostBySlugQuery__
 *
 * To run a query within a React component, call `useGetPostBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetPostBySlugQuery, GetPostBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostBySlugQuery, GetPostBySlugQueryVariables>(GetPostBySlugDocument, options);
      }
export function useGetPostBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostBySlugQuery, GetPostBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostBySlugQuery, GetPostBySlugQueryVariables>(GetPostBySlugDocument, options);
        }
export type GetPostBySlugQueryHookResult = ReturnType<typeof useGetPostBySlugQuery>;
export type GetPostBySlugLazyQueryHookResult = ReturnType<typeof useGetPostBySlugLazyQuery>;
export type GetPostBySlugQueryResult = Apollo.QueryResult<GetPostBySlugQuery, GetPostBySlugQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  users {
    id
    displayName
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserByID($id: uuid!) {
  user(id: $id) {
    displayName
    avatarUrl
    createdAt
    email
    lastSeen
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetAllPostsinSubCategoryDocument = gql`
    query GetAllPostsinSubCategory {
  Category {
    name
    slug
    id
    Sub_category {
      name
      slug
      id
      Posts {
        content
        dislikes
        img
        likes
        slug
        title
      }
    }
  }
}
    `;

/**
 * __useGetAllPostsinSubCategoryQuery__
 *
 * To run a query within a React component, call `useGetAllPostsinSubCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsinSubCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsinSubCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsinSubCategoryQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostsinSubCategoryQuery, GetAllPostsinSubCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsinSubCategoryQuery, GetAllPostsinSubCategoryQueryVariables>(GetAllPostsinSubCategoryDocument, options);
      }
export function useGetAllPostsinSubCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsinSubCategoryQuery, GetAllPostsinSubCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsinSubCategoryQuery, GetAllPostsinSubCategoryQueryVariables>(GetAllPostsinSubCategoryDocument, options);
        }
export type GetAllPostsinSubCategoryQueryHookResult = ReturnType<typeof useGetAllPostsinSubCategoryQuery>;
export type GetAllPostsinSubCategoryLazyQueryHookResult = ReturnType<typeof useGetAllPostsinSubCategoryLazyQuery>;
export type GetAllPostsinSubCategoryQueryResult = Apollo.QueryResult<GetAllPostsinSubCategoryQuery, GetAllPostsinSubCategoryQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Category" */
export type Category = {
  __typename?: 'Category';
  /** An array relationship */
  Sub_category: Array<Sub_Category>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  slug: Scalars['String'];
};


/** columns and relationships of "Category" */
export type Category_Sub_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Sub_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sub_Category_Order_By>>;
  where?: InputMaybe<Sub_Category_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "Category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  Sub_category?: InputMaybe<Sub_Category_Bool_Exp>;
  _and?: InputMaybe<Array<Category_Bool_Exp>>;
  _not?: InputMaybe<Category_Bool_Exp>;
  _or?: InputMaybe<Array<Category_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Category" */
export type Category_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'Category_pkey';

/** input type for inserting data into table "Category" */
export type Category_Insert_Input = {
  Sub_category?: InputMaybe<Sub_Category_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "Category" */
export type Category_Mutation_Response = {
  __typename?: 'Category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "Category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** on_conflict condition type for table "Category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns?: Array<Category_Update_Column>;
  where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "Category". */
export type Category_Order_By = {
  Sub_category_aggregate?: InputMaybe<Sub_Category_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** select columns of table "Category" */
export type Category_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'slug';

/** Streaming cursor of the table "Category" */
export type Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Category_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** placeholder for update columns of table "Category" (current role has no relevant permissions) */
export type Category_Update_Column =
  /** placeholder (do not use) */
  | '_PLACEHOLDER';

/** columns and relationships of "Posts" */
export type Posts = {
  __typename?: 'Posts';
  /** An object relationship */
  Sub_category?: Maybe<Sub_Category>;
  content: Scalars['String'];
  dislikes: Scalars['numeric'];
  img: Scalars['String'];
  likes: Scalars['numeric'];
  slug: Scalars['String'];
  sub_category_id?: Maybe<Scalars['uuid']>;
  title: Scalars['String'];
};

/** order by aggregate values of table "Posts" */
export type Posts_Aggregate_Order_By = {
  avg?: InputMaybe<Posts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Posts_Max_Order_By>;
  min?: InputMaybe<Posts_Min_Order_By>;
  stddev?: InputMaybe<Posts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Posts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Posts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Posts_Sum_Order_By>;
  var_pop?: InputMaybe<Posts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Posts_Var_Samp_Order_By>;
  variance?: InputMaybe<Posts_Variance_Order_By>;
};

/** order by avg() on columns of table "Posts" */
export type Posts_Avg_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  Sub_category?: InputMaybe<Sub_Category_Bool_Exp>;
  _and?: InputMaybe<Array<Posts_Bool_Exp>>;
  _not?: InputMaybe<Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Posts_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  dislikes?: InputMaybe<Numeric_Comparison_Exp>;
  img?: InputMaybe<String_Comparison_Exp>;
  likes?: InputMaybe<Numeric_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  sub_category_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "Posts" */
export type Posts_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  sub_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Posts" */
export type Posts_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  sub_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Posts". */
export type Posts_Order_By = {
  Sub_category?: InputMaybe<Sub_Category_Order_By>;
  content?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  sub_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "Posts" */
export type Posts_Select_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'dislikes'
  /** column name */
  | 'img'
  /** column name */
  | 'likes'
  /** column name */
  | 'slug'
  /** column name */
  | 'sub_category_id'
  /** column name */
  | 'title';

/** order by stddev() on columns of table "Posts" */
export type Posts_Stddev_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Posts" */
export type Posts_Stddev_Pop_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Posts" */
export type Posts_Stddev_Samp_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Posts" */
export type Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Posts_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']>;
  dislikes?: InputMaybe<Scalars['numeric']>;
  img?: InputMaybe<Scalars['String']>;
  likes?: InputMaybe<Scalars['numeric']>;
  slug?: InputMaybe<Scalars['String']>;
  sub_category_id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "Posts" */
export type Posts_Sum_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "Posts" */
export type Posts_Var_Pop_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Posts" */
export type Posts_Var_Samp_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Posts" */
export type Posts_Variance_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Sub_category" */
export type Sub_Category = {
  __typename?: 'Sub_category';
  /** An object relationship */
  Category?: Maybe<Category>;
  /** An array relationship */
  Posts: Array<Posts>;
  category_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  slug: Scalars['String'];
};


/** columns and relationships of "Sub_category" */
export type Sub_Category_PostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** order by aggregate values of table "Sub_category" */
export type Sub_Category_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sub_Category_Max_Order_By>;
  min?: InputMaybe<Sub_Category_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Sub_category" */
export type Sub_Category_Arr_Rel_Insert_Input = {
  data: Array<Sub_Category_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sub_Category_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Sub_category". All fields are combined with a logical 'AND'. */
export type Sub_Category_Bool_Exp = {
  Category?: InputMaybe<Category_Bool_Exp>;
  Posts?: InputMaybe<Posts_Bool_Exp>;
  _and?: InputMaybe<Array<Sub_Category_Bool_Exp>>;
  _not?: InputMaybe<Sub_Category_Bool_Exp>;
  _or?: InputMaybe<Array<Sub_Category_Bool_Exp>>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Sub_category" */
export type Sub_Category_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'sub_category_pkey';

/** input type for inserting data into table "Sub_category" */
export type Sub_Category_Insert_Input = {
  Category?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "Sub_category" */
export type Sub_Category_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Sub_category" */
export type Sub_Category_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Sub_category" */
export type Sub_Category_Mutation_Response = {
  __typename?: 'Sub_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sub_Category>;
};

/** on_conflict condition type for table "Sub_category" */
export type Sub_Category_On_Conflict = {
  constraint: Sub_Category_Constraint;
  update_columns?: Array<Sub_Category_Update_Column>;
  where?: InputMaybe<Sub_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "Sub_category". */
export type Sub_Category_Order_By = {
  Category?: InputMaybe<Category_Order_By>;
  Posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** select columns of table "Sub_category" */
export type Sub_Category_Select_Column =
  /** column name */
  | 'category_id'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'slug';

/** Streaming cursor of the table "Sub_category" */
export type Sub_Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sub_Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sub_Category_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** placeholder for update columns of table "Sub_category" (current role has no relevant permissions) */
export type Sub_Category_Update_Column =
  /** placeholder (do not use) */
  | '_PLACEHOLDER';

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** insert data into the table: "Category" */
  insert_Category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "Category" */
  insert_Category_one?: Maybe<Category>;
  /** insert data into the table: "Sub_category" */
  insert_Sub_category?: Maybe<Sub_Category_Mutation_Response>;
  /** insert a single row into the table: "Sub_category" */
  insert_Sub_category_one?: Maybe<Sub_Category>;
};


/** mutation root */
export type Mutation_Root_Insert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Insert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Insert_Sub_CategoryArgs = {
  objects: Array<Sub_Category_Insert_Input>;
  on_conflict?: InputMaybe<Sub_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Insert_Sub_Category_OneArgs = {
  object: Sub_Category_Insert_Input;
  on_conflict?: InputMaybe<Sub_Category_On_Conflict>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Category" */
  Category: Array<Category>;
  /** fetch data from the table: "Category" using primary key columns */
  Category_by_pk?: Maybe<Category>;
  /** An array relationship */
  Posts: Array<Posts>;
  /** fetch data from the table: "Posts" using primary key columns */
  Posts_by_pk?: Maybe<Posts>;
  /** An array relationship */
  Sub_category: Array<Sub_Category>;
  /** fetch data from the table: "Sub_category" using primary key columns */
  Sub_category_by_pk?: Maybe<Sub_Category>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
};


export type Query_Root_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_Root_Category_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_PostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_Root_Posts_By_PkArgs = {
  title: Scalars['String'];
};


export type Query_Root_Sub_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Sub_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sub_Category_Order_By>>;
  where?: InputMaybe<Sub_Category_Bool_Exp>;
};


export type Query_Root_Sub_Category_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_UserArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_UsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Category" */
  Category: Array<Category>;
  /** fetch data from the table: "Category" using primary key columns */
  Category_by_pk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "Category" */
  Category_stream: Array<Category>;
  /** An array relationship */
  Posts: Array<Posts>;
  /** fetch data from the table: "Posts" using primary key columns */
  Posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table in a streaming manner: "Posts" */
  Posts_stream: Array<Posts>;
  /** An array relationship */
  Sub_category: Array<Sub_Category>;
  /** fetch data from the table: "Sub_category" using primary key columns */
  Sub_category_by_pk?: Maybe<Sub_Category>;
  /** fetch data from the table in a streaming manner: "Sub_category" */
  Sub_category_stream: Array<Sub_Category>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
};


export type Subscription_Root_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_Root_Category_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_Category_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_Root_PostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_Root_Posts_By_PkArgs = {
  title: Scalars['String'];
};


export type Subscription_Root_Posts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_Root_Sub_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Sub_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sub_Category_Order_By>>;
  where?: InputMaybe<Sub_Category_Bool_Exp>;
};


export type Subscription_Root_Sub_Category_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_Sub_Category_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Sub_Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Sub_Category_Bool_Exp>;
};


export type Subscription_Root_UserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_UsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_Root_Users_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users_MetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "auth.users" */
export type Users_Select_Column =
  /** column name */
  | 'activeMfaType'
  /** column name */
  | 'avatarUrl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'currentChallenge'
  /** column name */
  | 'defaultRole'
  /** column name */
  | 'disabled'
  /** column name */
  | 'displayName'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'lastSeen'
  /** column name */
  | 'locale'
  /** column name */
  | 'metadata'
  /** column name */
  | 'newEmail'
  /** column name */
  | 'otpHash'
  /** column name */
  | 'otpHashExpiresAt'
  /** column name */
  | 'otpMethodLastUsed'
  /** column name */
  | 'passwordHash'
  /** column name */
  | 'phoneNumber'
  /** column name */
  | 'phoneNumberVerified'
  /** column name */
  | 'ticket'
  /** column name */
  | 'ticketExpiresAt'
  /** column name */
  | 'totpSecret'
  /** column name */
  | 'updatedAt';

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};


export default {
  introspection: {
    "__schema": {
      "queryType": {
        "name": "query_root"
      },
      "mutationType": {
        "name": "mutation_root"
      },
      "subscriptionType": {
        "name": "subscription_root"
      },
      "types": [
        {
          "kind": "SCALAR",
          "name": "Boolean"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Boolean_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "Category",
          "fields": [
            {
              "name": "Sub_category",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Sub_category",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "Sub_category_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "Sub_category_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Sub_category_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "slug",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Category_bool_exp",
          "inputFields": [
            {
              "name": "Sub_category",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Sub_category_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "Category_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Category_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "Category_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "Category_constraint",
          "enumValues": [
            {
              "name": "Category_pkey"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Category_insert_input",
          "inputFields": [
            {
              "name": "Sub_category",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Sub_category_arr_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "Category_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Category",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Category_obj_rel_insert_input",
          "inputFields": [
            {
              "name": "data",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Category_insert_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "on_conflict",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Category_on_conflict",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Category_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Category_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "Category_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Category_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Category_order_by",
          "inputFields": [
            {
              "name": "Sub_category_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Sub_category_aggregate_order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "Category_select_column",
          "enumValues": [
            {
              "name": "id"
            },
            {
              "name": "name"
            },
            {
              "name": "slug"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Category_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Category_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Category_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "Category_update_column",
          "enumValues": [
            {
              "name": "_PLACEHOLDER"
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "Int"
        },
        {
          "kind": "OBJECT",
          "name": "Posts",
          "fields": [
            {
              "name": "Sub_category",
              "type": {
                "kind": "OBJECT",
                "name": "Sub_category",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "content",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "dislikes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "numeric",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "img",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "likes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "numeric",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "slug",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "sub_category_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "title",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_aggregate_order_by",
          "inputFields": [
            {
              "name": "avg",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_avg_order_by",
                "ofType": null
              }
            },
            {
              "name": "count",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "max",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_max_order_by",
                "ofType": null
              }
            },
            {
              "name": "min",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_min_order_by",
                "ofType": null
              }
            },
            {
              "name": "stddev",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_stddev_order_by",
                "ofType": null
              }
            },
            {
              "name": "stddev_pop",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_stddev_pop_order_by",
                "ofType": null
              }
            },
            {
              "name": "stddev_samp",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_stddev_samp_order_by",
                "ofType": null
              }
            },
            {
              "name": "sum",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_sum_order_by",
                "ofType": null
              }
            },
            {
              "name": "var_pop",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_var_pop_order_by",
                "ofType": null
              }
            },
            {
              "name": "var_samp",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_var_samp_order_by",
                "ofType": null
              }
            },
            {
              "name": "variance",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_variance_order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_avg_order_by",
          "inputFields": [
            {
              "name": "dislikes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_bool_exp",
          "inputFields": [
            {
              "name": "Sub_category",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Sub_category_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "Posts_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "Posts_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "content",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "dislikes",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "numeric_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "img",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "numeric_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "sub_category_id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "title",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_max_order_by",
          "inputFields": [
            {
              "name": "content",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "dislikes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "img",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "sub_category_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "title",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_min_order_by",
          "inputFields": [
            {
              "name": "content",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "dislikes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "img",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "sub_category_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "title",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_order_by",
          "inputFields": [
            {
              "name": "Sub_category",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Sub_category_order_by",
                "ofType": null
              }
            },
            {
              "name": "content",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "dislikes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "img",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "sub_category_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "title",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "Posts_select_column",
          "enumValues": [
            {
              "name": "content"
            },
            {
              "name": "dislikes"
            },
            {
              "name": "img"
            },
            {
              "name": "likes"
            },
            {
              "name": "slug"
            },
            {
              "name": "sub_category_id"
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_stddev_order_by",
          "inputFields": [
            {
              "name": "dislikes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_stddev_pop_order_by",
          "inputFields": [
            {
              "name": "dislikes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_stddev_samp_order_by",
          "inputFields": [
            {
              "name": "dislikes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Posts_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "content",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "dislikes",
              "type": {
                "kind": "SCALAR",
                "name": "numeric",
                "ofType": null
              }
            },
            {
              "name": "img",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "SCALAR",
                "name": "numeric",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "sub_category_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "title",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_sum_order_by",
          "inputFields": [
            {
              "name": "dislikes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_var_pop_order_by",
          "inputFields": [
            {
              "name": "dislikes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_var_samp_order_by",
          "inputFields": [
            {
              "name": "dislikes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Posts_variance_order_by",
          "inputFields": [
            {
              "name": "dislikes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "likes",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "String"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "String_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_ilike",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_iregex",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_like",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nilike",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_niregex",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nlike",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nregex",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nsimilar",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_regex",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_similar",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "Sub_category",
          "fields": [
            {
              "name": "Category",
              "type": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "Posts",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Posts",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "Posts_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "Posts_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Posts_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "category_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "slug",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Sub_category_aggregate_order_by",
          "inputFields": [
            {
              "name": "count",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "max",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Sub_category_max_order_by",
                "ofType": null
              }
            },
            {
              "name": "min",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Sub_category_min_order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Sub_category_arr_rel_insert_input",
          "inputFields": [
            {
              "name": "data",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "Sub_category_insert_input",
                      "ofType": null
                    }
                  }
                }
              }
            },
            {
              "name": "on_conflict",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Sub_category_on_conflict",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Sub_category_bool_exp",
          "inputFields": [
            {
              "name": "Category",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Category_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "Posts",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "Sub_category_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Sub_category_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "Sub_category_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "category_id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "Sub_category_constraint",
          "enumValues": [
            {
              "name": "sub_category_pkey"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Sub_category_insert_input",
          "inputFields": [
            {
              "name": "Category",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Category_obj_rel_insert_input",
                "ofType": null
              }
            },
            {
              "name": "category_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Sub_category_max_order_by",
          "inputFields": [
            {
              "name": "category_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Sub_category_min_order_by",
          "inputFields": [
            {
              "name": "category_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "Sub_category_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Sub_category",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Sub_category_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Sub_category_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "Sub_category_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Sub_category_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Sub_category_order_by",
          "inputFields": [
            {
              "name": "Category",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Category_order_by",
                "ofType": null
              }
            },
            {
              "name": "Posts_aggregate",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Posts_aggregate_order_by",
                "ofType": null
              }
            },
            {
              "name": "category_id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "Sub_category_select_column",
          "enumValues": [
            {
              "name": "category_id"
            },
            {
              "name": "id"
            },
            {
              "name": "name"
            },
            {
              "name": "slug"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Sub_category_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Sub_category_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Sub_category_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "category_id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "slug",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "Sub_category_update_column",
          "enumValues": [
            {
              "name": "_PLACEHOLDER"
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "citext"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "citext_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_ilike",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "citext",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_iregex",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_like",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_nilike",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "citext",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_niregex",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_nlike",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_nregex",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_nsimilar",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_regex",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "_similar",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "cursor_ordering",
          "enumValues": [
            {
              "name": "ASC"
            },
            {
              "name": "DESC"
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "jsonb"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "jsonb_cast_exp",
          "inputFields": [
            {
              "name": "String",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "jsonb_comparison_exp",
          "inputFields": [
            {
              "name": "_cast",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "jsonb_cast_exp",
                "ofType": null
              }
            },
            {
              "name": "_contained_in",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_contains",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_has_key",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_has_keys_all",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_has_keys_any",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "jsonb",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "jsonb",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "mutation_root",
          "fields": [
            {
              "name": "insert_Category",
              "type": {
                "kind": "OBJECT",
                "name": "Category_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Category_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Category_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insert_Category_one",
              "type": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "Category_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Category_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insert_Sub_category",
              "type": {
                "kind": "OBJECT",
                "name": "Sub_category_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Sub_category_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Sub_category_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insert_Sub_category_one",
              "type": {
                "kind": "OBJECT",
                "name": "Sub_category",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "Sub_category_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Sub_category_on_conflict",
                    "ofType": null
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "SCALAR",
          "name": "numeric"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "numeric_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "numeric",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "numeric",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "numeric",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "numeric",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "numeric",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "numeric",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "numeric",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "numeric",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "order_by",
          "enumValues": [
            {
              "name": "asc"
            },
            {
              "name": "asc_nulls_first"
            },
            {
              "name": "asc_nulls_last"
            },
            {
              "name": "desc"
            },
            {
              "name": "desc_nulls_first"
            },
            {
              "name": "desc_nulls_last"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "query_root",
          "fields": [
            {
              "name": "Category",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Category",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "Category_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "Category_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Category_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "Category_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "Posts",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Posts",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "Posts_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "Posts_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Posts_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "Posts_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "Posts",
                "ofType": null
              },
              "args": [
                {
                  "name": "title",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "Sub_category",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Sub_category",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "Sub_category_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "Sub_category_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Sub_category_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "Sub_category_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "Sub_category",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "user",
              "type": {
                "kind": "OBJECT",
                "name": "users",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "users",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "users_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "subscription_root",
          "fields": [
            {
              "name": "Category",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Category",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "Category_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "Category_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Category_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "Category_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "Category_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Category",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "Category_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Category_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "Posts",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Posts",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "Posts_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "Posts_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Posts_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "Posts_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "Posts",
                "ofType": null
              },
              "args": [
                {
                  "name": "title",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "Posts_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Posts",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "Posts_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Posts_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "Sub_category",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Sub_category",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "Sub_category_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "Sub_category_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Sub_category_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "Sub_category_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "Sub_category",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "Sub_category_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "Sub_category",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "Sub_category_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Sub_category_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "user",
              "type": {
                "kind": "OBJECT",
                "name": "users",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "users",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "users_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "users_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "users_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "SCALAR",
          "name": "timestamptz"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "timestamptz_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "timestamptz",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "timestamptz",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "users",
          "fields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "disabled",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "displayName",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "email",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "emailVerified",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "isAnonymous",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "locale",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "metadata",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "args": [
                {
                  "name": "path",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "phoneNumberVerified",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "ticket",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "users_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "activeMfaType",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "disabled",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "displayName",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "email",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "citext_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "emailVerified",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "isAnonymous",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "locale",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "metadata",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "jsonb_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "citext_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "phoneNumberVerified",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "ticket",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamptz_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_order_by",
          "inputFields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "disabled",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "displayName",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "email",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "emailVerified",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "isAnonymous",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "locale",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "metadata",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "phoneNumberVerified",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "ticket",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "users_select_column",
          "enumValues": [
            {
              "name": "activeMfaType"
            },
            {
              "name": "avatarUrl"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "currentChallenge"
            },
            {
              "name": "defaultRole"
            },
            {
              "name": "disabled"
            },
            {
              "name": "displayName"
            },
            {
              "name": "email"
            },
            {
              "name": "emailVerified"
            },
            {
              "name": "id"
            },
            {
              "name": "isAnonymous"
            },
            {
              "name": "lastSeen"
            },
            {
              "name": "locale"
            },
            {
              "name": "metadata"
            },
            {
              "name": "newEmail"
            },
            {
              "name": "otpHash"
            },
            {
              "name": "otpHashExpiresAt"
            },
            {
              "name": "otpMethodLastUsed"
            },
            {
              "name": "passwordHash"
            },
            {
              "name": "phoneNumber"
            },
            {
              "name": "phoneNumberVerified"
            },
            {
              "name": "ticket"
            },
            {
              "name": "ticketExpiresAt"
            },
            {
              "name": "totpSecret"
            },
            {
              "name": "updatedAt"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "users_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "disabled",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "displayName",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "email",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "emailVerified",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "isAnonymous",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "locale",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "metadata",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              }
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "SCALAR",
                "name": "citext",
                "ofType": null
              }
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "phoneNumberVerified",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "ticket",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "uuid"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "uuid_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "Any"
        }
      ],
      "directives": []
    }
  } as const,
  types: {} as {
    Scalars: Scalars,
    Boolean_Comparison_Exp: Boolean_Comparison_Exp,
    Category: Category,
    Category_Sub_CategoryArgs: Category_Sub_CategoryArgs,
    Category_Bool_Exp: Category_Bool_Exp,
    Category_Insert_Input: Category_Insert_Input,
    Category_Mutation_Response: Category_Mutation_Response,
    Category_Obj_Rel_Insert_Input: Category_Obj_Rel_Insert_Input,
    Category_On_Conflict: Category_On_Conflict,
    Category_Order_By: Category_Order_By,
    Category_Stream_Cursor_Input: Category_Stream_Cursor_Input,
    Category_Stream_Cursor_Value_Input: Category_Stream_Cursor_Value_Input,
    Posts: Posts,
    Posts_Aggregate_Order_By: Posts_Aggregate_Order_By,
    Posts_Avg_Order_By: Posts_Avg_Order_By,
    Posts_Bool_Exp: Posts_Bool_Exp,
    Posts_Max_Order_By: Posts_Max_Order_By,
    Posts_Min_Order_By: Posts_Min_Order_By,
    Posts_Order_By: Posts_Order_By,
    Posts_Stddev_Order_By: Posts_Stddev_Order_By,
    Posts_Stddev_Pop_Order_By: Posts_Stddev_Pop_Order_By,
    Posts_Stddev_Samp_Order_By: Posts_Stddev_Samp_Order_By,
    Posts_Stream_Cursor_Input: Posts_Stream_Cursor_Input,
    Posts_Stream_Cursor_Value_Input: Posts_Stream_Cursor_Value_Input,
    Posts_Sum_Order_By: Posts_Sum_Order_By,
    Posts_Var_Pop_Order_By: Posts_Var_Pop_Order_By,
    Posts_Var_Samp_Order_By: Posts_Var_Samp_Order_By,
    Posts_Variance_Order_By: Posts_Variance_Order_By,
    String_Comparison_Exp: String_Comparison_Exp,
    Sub_Category: Sub_Category,
    Sub_Category_PostsArgs: Sub_Category_PostsArgs,
    Sub_Category_Aggregate_Order_By: Sub_Category_Aggregate_Order_By,
    Sub_Category_Arr_Rel_Insert_Input: Sub_Category_Arr_Rel_Insert_Input,
    Sub_Category_Bool_Exp: Sub_Category_Bool_Exp,
    Sub_Category_Insert_Input: Sub_Category_Insert_Input,
    Sub_Category_Max_Order_By: Sub_Category_Max_Order_By,
    Sub_Category_Min_Order_By: Sub_Category_Min_Order_By,
    Sub_Category_Mutation_Response: Sub_Category_Mutation_Response,
    Sub_Category_On_Conflict: Sub_Category_On_Conflict,
    Sub_Category_Order_By: Sub_Category_Order_By,
    Sub_Category_Stream_Cursor_Input: Sub_Category_Stream_Cursor_Input,
    Sub_Category_Stream_Cursor_Value_Input: Sub_Category_Stream_Cursor_Value_Input,
    Citext_Comparison_Exp: Citext_Comparison_Exp,
    Jsonb_Cast_Exp: Jsonb_Cast_Exp,
    Jsonb_Comparison_Exp: Jsonb_Comparison_Exp,
    Mutation_Root: Mutation_Root,
    Mutation_Root_Insert_CategoryArgs: Mutation_Root_Insert_CategoryArgs,
    Mutation_Root_Insert_Category_OneArgs: Mutation_Root_Insert_Category_OneArgs,
    Mutation_Root_Insert_Sub_CategoryArgs: Mutation_Root_Insert_Sub_CategoryArgs,
    Mutation_Root_Insert_Sub_Category_OneArgs: Mutation_Root_Insert_Sub_Category_OneArgs,
    Numeric_Comparison_Exp: Numeric_Comparison_Exp,
    Query_Root: Query_Root,
    Query_Root_CategoryArgs: Query_Root_CategoryArgs,
    Query_Root_Category_By_PkArgs: Query_Root_Category_By_PkArgs,
    Query_Root_PostsArgs: Query_Root_PostsArgs,
    Query_Root_Posts_By_PkArgs: Query_Root_Posts_By_PkArgs,
    Query_Root_Sub_CategoryArgs: Query_Root_Sub_CategoryArgs,
    Query_Root_Sub_Category_By_PkArgs: Query_Root_Sub_Category_By_PkArgs,
    Query_Root_UserArgs: Query_Root_UserArgs,
    Query_Root_UsersArgs: Query_Root_UsersArgs,
    Subscription_Root: Subscription_Root,
    Subscription_Root_CategoryArgs: Subscription_Root_CategoryArgs,
    Subscription_Root_Category_By_PkArgs: Subscription_Root_Category_By_PkArgs,
    Subscription_Root_Category_StreamArgs: Subscription_Root_Category_StreamArgs,
    Subscription_Root_PostsArgs: Subscription_Root_PostsArgs,
    Subscription_Root_Posts_By_PkArgs: Subscription_Root_Posts_By_PkArgs,
    Subscription_Root_Posts_StreamArgs: Subscription_Root_Posts_StreamArgs,
    Subscription_Root_Sub_CategoryArgs: Subscription_Root_Sub_CategoryArgs,
    Subscription_Root_Sub_Category_By_PkArgs: Subscription_Root_Sub_Category_By_PkArgs,
    Subscription_Root_Sub_Category_StreamArgs: Subscription_Root_Sub_Category_StreamArgs,
    Subscription_Root_UserArgs: Subscription_Root_UserArgs,
    Subscription_Root_UsersArgs: Subscription_Root_UsersArgs,
    Subscription_Root_Users_StreamArgs: Subscription_Root_Users_StreamArgs,
    Timestamptz_Comparison_Exp: Timestamptz_Comparison_Exp,
    Users: Users,
    Users_MetadataArgs: Users_MetadataArgs,
    Users_Bool_Exp: Users_Bool_Exp,
    Users_Order_By: Users_Order_By,
    Users_Stream_Cursor_Input: Users_Stream_Cursor_Input,
    Users_Stream_Cursor_Value_Input: Users_Stream_Cursor_Value_Input,
    Uuid_Comparison_Exp: Uuid_Comparison_Exp
  }
}