import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Json: any;
};

export type EnumGreWordStatusFilter = {
  equals?: InputMaybe<GreWordStatus>;
  in?: InputMaybe<Array<GreWordStatus>>;
  not?: InputMaybe<GreWordStatus>;
  notIn?: InputMaybe<Array<GreWordStatus>>;
};

export type GptPrompt = {
  __typename?: 'GptPrompt';
  createdAt: Scalars['String'];
  editedResponse?: Maybe<Scalars['String']>;
  greWord?: Maybe<GreWord>;
  greWordId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  input: Scalars['String'];
  meta: Scalars['Json'];
  response: Scalars['String'];
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type GreConfiguration = {
  __typename?: 'GreConfiguration';
  defaultGreWordSearchPromptInputs: Array<Scalars['String']>;
};

export type GreWord = {
  __typename?: 'GreWord';
  createdAt: Scalars['String'];
  gptPrompts: Array<GptPrompt>;
  greWordTags?: Maybe<Array<GreWordTag>>;
  id: Scalars['String'];
  meta: Scalars['Json'];
  spelling: Scalars['String'];
  status: GreWordStatus;
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type GreWordSearchPromptInput = {
  __typename?: 'GreWordSearchPromptInput';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  meta: Scalars['Json'];
  text: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type GreWordSearchPromptInputWhereInput = {
  id?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum GreWordStatus {
  AlmostLearnt = 'ALMOST_LEARNT',
  FinishedLearning = 'FINISHED_LEARNING',
  Mastered = 'MASTERED',
  MemoryMode = 'MEMORY_MODE',
  StartedLearning = 'STARTED_LEARNING',
  StillLearning = 'STILL_LEARNING'
}

export type GreWordTag = {
  __typename?: 'GreWordTag';
  createdAt: Scalars['String'];
  greWords: Array<GreWord>;
  id: Scalars['String'];
  meta: Scalars['Json'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type GreWordTagListRelationFilter = {
  every?: InputMaybe<GreWordTagWhereInput>;
  none?: InputMaybe<GreWordTagWhereInput>;
  some?: InputMaybe<GreWordTagWhereInput>;
};

export type GreWordTagWhereInput = {
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type GreWordTagWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GreWordWhereInput = {
  greWordTags?: InputMaybe<GreWordTagListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  spelling?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumGreWordStatusFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type GreWordWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraft?: Maybe<Post>;
  createGreWord: GreWord;
  createGreWordSearchPromptInput: GreWordSearchPromptInput;
  createGreWordTag: GreWordTag;
  createNotification: Notification;
  createUser?: Maybe<User>;
  deleteGptPrompt?: Maybe<GptPrompt>;
  deleteGreWord?: Maybe<GreWord>;
  deleteGreWordSearchPromptInput?: Maybe<GreWordSearchPromptInput>;
  deleteGreWordTag: GreWordTag;
  publish?: Maybe<Post>;
  updateGptPrompt?: Maybe<GptPrompt>;
  updateGreWord?: Maybe<GreWord>;
  updateGreWordSearchPromptInput?: Maybe<GreWordSearchPromptInput>;
  updateUser?: Maybe<User>;
};


export type MutationCreateDraftArgs = {
  body: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreateGreWordArgs = {
  greWordTags?: InputMaybe<Array<InputMaybe<GreWordTagWhereUniqueInput>>>;
  promptInput: Scalars['String'];
  promptResponse: Scalars['String'];
  spelling: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreateGreWordSearchPromptInputArgs = {
  text: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreateGreWordTagArgs = {
  name: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreateNotificationArgs = {
  message: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  meta?: InputMaybe<UserMetaParsedJsonValueInput>;
};


export type MutationDeleteGptPromptArgs = {
  id: Scalars['String'];
};


export type MutationDeleteGreWordArgs = {
  id: Scalars['String'];
};


export type MutationDeleteGreWordSearchPromptInputArgs = {
  id: Scalars['String'];
};


export type MutationDeleteGreWordTagArgs = {
  name: Scalars['String'];
};


export type MutationPublishArgs = {
  draftId: Scalars['String'];
};


export type MutationUpdateGptPromptArgs = {
  editedResponse?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationUpdateGreWordArgs = {
  greWordTags?: InputMaybe<Array<InputMaybe<GreWordTagWhereUniqueInput>>>;
  id: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateGreWordSearchPromptInputArgs = {
  id: Scalars['String'];
  text: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<UserMetaParsedJsonValueInput>;
};

export type Notification = {
  __typename?: 'Notification';
  message: Scalars['String'];
  userId: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['String'];
  isPublished?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allPosts?: Maybe<Array<Maybe<Post>>>;
  drafts?: Maybe<Array<Maybe<Post>>>;
  gptPrompts?: Maybe<Array<Maybe<GptPrompt>>>;
  greConfiguration: GreConfiguration;
  greWord?: Maybe<GreWord>;
  greWordSearchPromptInputs: Array<GreWordSearchPromptInput>;
  greWordTags: Array<GreWordTag>;
  greWords: Array<GreWord>;
  greWordsCount: Scalars['Int'];
  hello: HelloWorld;
  posts?: Maybe<Array<Maybe<Post>>>;
  sendSinglePrompt?: Maybe<Scalars['String']>;
  users: Array<User>;
  usersCount: Scalars['Int'];
};


export type QueryAllPostsArgs = {
  isPublished: Scalars['Boolean'];
  token?: InputMaybe<Scalars['String']>;
};


export type QueryGptPromptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryGreWordArgs = {
  where?: InputMaybe<GreWordWhereUniqueInput>;
};


export type QueryGreWordSearchPromptInputsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GreWordSearchPromptInputWhereInput>;
};


export type QueryGreWordTagsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GreWordTagWhereInput>;
};


export type QueryGreWordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GreWordWhereInput>;
};


export type QueryGreWordsCountArgs = {
  where?: InputMaybe<GreWordWhereInput>;
};


export type QuerySendSinglePromptArgs = {
  input: Scalars['String'];
};


export type QueryUsersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersCountArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  greWordCreated?: Maybe<GreWord>;
  notificationReceived?: Maybe<Notification>;
  truths?: Maybe<Scalars['Boolean']>;
};


export type SubscriptionGreWordCreatedArgs = {
  userId: Scalars['String'];
};


export type SubscriptionNotificationReceivedArgs = {
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  gptPrompts: Array<GptPrompt>;
  greWordSearchPromptInputs: Array<GreWordSearchPromptInput>;
  greWordTags: Array<GreWordTag>;
  greWords: Array<GreWord>;
  id: Scalars['String'];
  meta: UserMetaParsedJsonValue;
  updatedAt: Scalars['String'];
};

export type UserMetaParsedJsonValue = {
  __typename?: 'UserMetaParsedJsonValue';
  defaultGreWordSearchPromptInput?: Maybe<Scalars['String']>;
  showDefaultGreWordSearchPromptInputs?: Maybe<Scalars['Boolean']>;
};

export type UserMetaParsedJsonValueInput = {
  defaultGreWordSearchPromptInput?: InputMaybe<Scalars['String']>;
  showDefaultGreWordSearchPromptInputs?: InputMaybe<Scalars['Boolean']>;
};

export type UserWhereInput = {
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
};

export type HelloWorld = {
  __typename?: 'helloWorld';
  message: Scalars['String'];
};

export type GreWordListQueryVariables = Exact<{
  where?: InputMaybe<GreWordWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type GreWordListQuery = { __typename?: 'Query', total: number, greWords: Array<{ __typename?: 'GreWord', id: string, spelling: string }> };

export type GreWordShowQueryVariables = Exact<{
  where?: InputMaybe<GreWordWhereUniqueInput>;
}>;


export type GreWordShowQuery = { __typename?: 'Query', greWord?: { __typename?: 'GreWord', id: string, spelling: string, gptPrompts: Array<{ __typename?: 'GptPrompt', id: string, input: string, response: string, editedResponse?: string | null, greWordId?: string | null }> } | null };

export type UserListQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type UserListQuery = { __typename?: 'Query', total: number, users: Array<{ __typename?: 'User', id: string, email: string, meta: { __typename?: 'UserMetaParsedJsonValue', defaultGreWordSearchPromptInput?: string | null, showDefaultGreWordSearchPromptInputs?: boolean | null } }> };


export const GreWordListDocument = gql`
    query GreWordList($where: GreWordWhereInput, $skip: Int, $take: Int) {
  greWords(where: $where, skip: $skip, take: $take) {
    id
    spelling
  }
  total: greWordsCount(where: $where)
}
    `;

/**
 * __useGreWordListQuery__
 *
 * To run a query within a React component, call `useGreWordListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGreWordListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGreWordListQuery({
 *   variables: {
 *      where: // value for 'where'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGreWordListQuery(baseOptions?: Apollo.QueryHookOptions<GreWordListQuery, GreWordListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GreWordListQuery, GreWordListQueryVariables>(GreWordListDocument, options);
      }
export function useGreWordListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GreWordListQuery, GreWordListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GreWordListQuery, GreWordListQueryVariables>(GreWordListDocument, options);
        }
export type GreWordListQueryHookResult = ReturnType<typeof useGreWordListQuery>;
export type GreWordListLazyQueryHookResult = ReturnType<typeof useGreWordListLazyQuery>;
export type GreWordListQueryResult = Apollo.QueryResult<GreWordListQuery, GreWordListQueryVariables>;
export const GreWordShowDocument = gql`
    query GreWordShow($where: GreWordWhereUniqueInput) {
  greWord(where: $where) {
    id
    spelling
    gptPrompts {
      id
      input
      response
      editedResponse
      greWordId
    }
  }
}
    `;

/**
 * __useGreWordShowQuery__
 *
 * To run a query within a React component, call `useGreWordShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useGreWordShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGreWordShowQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGreWordShowQuery(baseOptions?: Apollo.QueryHookOptions<GreWordShowQuery, GreWordShowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GreWordShowQuery, GreWordShowQueryVariables>(GreWordShowDocument, options);
      }
export function useGreWordShowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GreWordShowQuery, GreWordShowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GreWordShowQuery, GreWordShowQueryVariables>(GreWordShowDocument, options);
        }
export type GreWordShowQueryHookResult = ReturnType<typeof useGreWordShowQuery>;
export type GreWordShowLazyQueryHookResult = ReturnType<typeof useGreWordShowLazyQuery>;
export type GreWordShowQueryResult = Apollo.QueryResult<GreWordShowQuery, GreWordShowQueryVariables>;
export const UserListDocument = gql`
    query UserList($where: UserWhereInput, $skip: Int, $take: Int) {
  users(where: $where, skip: $skip, take: $take) {
    id
    email
    meta {
      defaultGreWordSearchPromptInput
      showDefaultGreWordSearchPromptInputs
    }
  }
  total: usersCount(where: $where)
}
    `;

/**
 * __useUserListQuery__
 *
 * To run a query within a React component, call `useUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListQuery({
 *   variables: {
 *      where: // value for 'where'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useUserListQuery(baseOptions?: Apollo.QueryHookOptions<UserListQuery, UserListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
      }
export function useUserListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
        }
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListLazyQueryHookResult = ReturnType<typeof useUserListLazyQuery>;
export type UserListQueryResult = Apollo.QueryResult<UserListQuery, UserListQueryVariables>;