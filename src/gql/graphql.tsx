import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
export type GetCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoryQuery = { __typename?: 'query_root', Category: Array<{ __typename?: 'Category', name: string, Sub_category: Array<{ __typename?: 'Sub_category', name: string, id: any }> }> };


export const GetCategoryDocument = gql`
    query GetCategory {
  Category {
    name
    Sub_category {
      name
      id
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
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
  category_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  slug: Scalars['String'];
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

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

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
  Sub_category: Array<Sub_Category>;
  /** fetch data from the table: "Sub_category" using primary key columns */
  Sub_category_by_pk?: Maybe<Sub_Category>;
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

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Category" */
  Category: Array<Category>;
  /** fetch data from the table: "Category" using primary key columns */
  Category_by_pk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "Category" */
  Category_stream: Array<Category>;
  /** An array relationship */
  Sub_category: Array<Sub_Category>;
  /** fetch data from the table: "Sub_category" using primary key columns */
  Sub_category_by_pk?: Maybe<Sub_Category>;
  /** fetch data from the table in a streaming manner: "Sub_category" */
  Sub_category_stream: Array<Sub_Category>;
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
            }
          ],
          "interfaces": []
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
    String_Comparison_Exp: String_Comparison_Exp,
    Sub_Category: Sub_Category,
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
    Mutation_Root: Mutation_Root,
    Mutation_Root_Insert_CategoryArgs: Mutation_Root_Insert_CategoryArgs,
    Mutation_Root_Insert_Category_OneArgs: Mutation_Root_Insert_Category_OneArgs,
    Mutation_Root_Insert_Sub_CategoryArgs: Mutation_Root_Insert_Sub_CategoryArgs,
    Mutation_Root_Insert_Sub_Category_OneArgs: Mutation_Root_Insert_Sub_Category_OneArgs,
    Query_Root: Query_Root,
    Query_Root_CategoryArgs: Query_Root_CategoryArgs,
    Query_Root_Category_By_PkArgs: Query_Root_Category_By_PkArgs,
    Query_Root_Sub_CategoryArgs: Query_Root_Sub_CategoryArgs,
    Query_Root_Sub_Category_By_PkArgs: Query_Root_Sub_Category_By_PkArgs,
    Subscription_Root: Subscription_Root,
    Subscription_Root_CategoryArgs: Subscription_Root_CategoryArgs,
    Subscription_Root_Category_By_PkArgs: Subscription_Root_Category_By_PkArgs,
    Subscription_Root_Category_StreamArgs: Subscription_Root_Category_StreamArgs,
    Subscription_Root_Sub_CategoryArgs: Subscription_Root_Sub_CategoryArgs,
    Subscription_Root_Sub_Category_By_PkArgs: Subscription_Root_Sub_Category_By_PkArgs,
    Subscription_Root_Sub_Category_StreamArgs: Subscription_Root_Sub_Category_StreamArgs,
    Uuid_Comparison_Exp: Uuid_Comparison_Exp
  }
}