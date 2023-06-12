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

export type GreWordOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  spelling?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
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

export type GreWordSpellingUserIdCompoundUniqueInput = {
  spelling: Scalars['String'];
  userId: Scalars['String'];
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
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type GreWordWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  spelling_userId?: InputMaybe<GreWordSpellingUserIdCompoundUniqueInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraft?: Maybe<Post>;
  createGptPrompt: GptPrompt;
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


export type MutationCreateGptPromptArgs = {
  greWordId: Scalars['String'];
  input: Scalars['String'];
  response: Scalars['String'];
};


export type MutationCreateGreWordArgs = {
  greWordTags?: InputMaybe<Array<InputMaybe<GreWordTagWhereUniqueInput>>>;
  promptInput: Scalars['String'];
  promptResponse: Scalars['String'];
  spelling: Scalars['String'];
  status?: InputMaybe<GreWordStatus>;
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
  status?: InputMaybe<GreWordStatus>;
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
  user?: Maybe<User>;
  userSession?: Maybe<UserSession>;
  userSessions: Array<UserSession>;
  userSessionsCount: Scalars['Int'];
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
  orderBy?: InputMaybe<Array<InputMaybe<GreWordOrderByWithRelationInput>>>;
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


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserSessionArgs = {
  where: UserSessionWhereUniqueInput;
};


export type QueryUserSessionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserSessionWhereInput>;
};


export type QueryUserSessionsCountArgs = {
  where?: InputMaybe<UserSessionWhereInput>;
};


export type QueryUsersArgs = {
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersCountArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

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
  notificationReceived?: Maybe<Notification>;
  truths?: Maybe<Scalars['Boolean']>;
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

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserSession = {
  __typename?: 'UserSession';
  duration?: Maybe<Scalars['Int']>;
  endedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  meta: UserSessionMetaParsedJsonValue;
  startedAt: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type UserSessionMetaParsedJsonValue = {
  __typename?: 'UserSessionMetaParsedJsonValue';
  none?: Maybe<Scalars['String']>;
};

export type UserSessionMetaParsedJsonValueInput = {
  none?: InputMaybe<Scalars['String']>;
};

export type UserSessionWhereInput = {
  id?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type UserSessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type HelloWorld = {
  __typename?: 'helloWorld';
  message: Scalars['String'];
};

export type GreWordListQueryVariables = Exact<{
  where?: InputMaybe<GreWordWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<GreWordOrderByWithRelationInput>> | InputMaybe<GreWordOrderByWithRelationInput>>;
}>;


export type GreWordListQuery = { __typename?: 'Query', total: number, greWords: Array<{ __typename?: 'GreWord', id: string, spelling: string, userId?: string | null, updatedAt: string }> };

export type GreWordListReferenceUsersQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
}>;


export type GreWordListReferenceUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string }> };

export type GreWordShowQueryVariables = Exact<{
  where?: InputMaybe<GreWordWhereUniqueInput>;
}>;


export type GreWordShowQuery = { __typename?: 'Query', greWord?: { __typename?: 'GreWord', id: string, spelling: string, gptPrompts: Array<{ __typename?: 'GptPrompt', id: string, input: string, response: string, editedResponse?: string | null, greWordId?: string | null }> } | null };

export type UserSessionListQueryVariables = Exact<{
  where?: InputMaybe<UserSessionWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type UserSessionListQuery = { __typename?: 'Query', total: number, userSessions: Array<{ __typename?: 'UserSession', id: string, startedAt: string, endedAt?: string | null, duration?: number | null, user: { __typename?: 'User', email: string, meta: { __typename?: 'UserMetaParsedJsonValue', showDefaultGreWordSearchPromptInputs?: boolean | null } } }> };

export type UserListQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>> | InputMaybe<UserOrderByWithRelationInput>>;
}>;


export type UserListQuery = { __typename?: 'Query', total: number, users: Array<{ __typename?: 'User', id: string, email: string, createdAt: string, meta: { __typename?: 'UserMetaParsedJsonValue', defaultGreWordSearchPromptInput?: string | null, showDefaultGreWordSearchPromptInputs?: boolean | null } }> };


export const GreWordListDocument = gql`
    query GreWordList($where: GreWordWhereInput, $skip: Int, $take: Int, $orderBy: [GreWordOrderByWithRelationInput]) {
  greWords(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
    id
    spelling
    userId
    updatedAt
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
 *      orderBy: // value for 'orderBy'
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
export const GreWordListReferenceUsersDocument = gql`
    query GreWordListReferenceUsers($where: UserWhereInput) {
  users(where: $where) {
    id
    email
  }
}
    `;

/**
 * __useGreWordListReferenceUsersQuery__
 *
 * To run a query within a React component, call `useGreWordListReferenceUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGreWordListReferenceUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGreWordListReferenceUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGreWordListReferenceUsersQuery(baseOptions?: Apollo.QueryHookOptions<GreWordListReferenceUsersQuery, GreWordListReferenceUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GreWordListReferenceUsersQuery, GreWordListReferenceUsersQueryVariables>(GreWordListReferenceUsersDocument, options);
      }
export function useGreWordListReferenceUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GreWordListReferenceUsersQuery, GreWordListReferenceUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GreWordListReferenceUsersQuery, GreWordListReferenceUsersQueryVariables>(GreWordListReferenceUsersDocument, options);
        }
export type GreWordListReferenceUsersQueryHookResult = ReturnType<typeof useGreWordListReferenceUsersQuery>;
export type GreWordListReferenceUsersLazyQueryHookResult = ReturnType<typeof useGreWordListReferenceUsersLazyQuery>;
export type GreWordListReferenceUsersQueryResult = Apollo.QueryResult<GreWordListReferenceUsersQuery, GreWordListReferenceUsersQueryVariables>;
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
export const UserSessionListDocument = gql`
    query UserSessionList($where: UserSessionWhereInput, $skip: Int, $take: Int) {
  userSessions(where: $where, skip: $skip, take: $take) {
    id
    user {
      email
      meta {
        showDefaultGreWordSearchPromptInputs
      }
    }
    startedAt
    endedAt
    duration
  }
  total: userSessionsCount(where: $where)
}
    `;

/**
 * __useUserSessionListQuery__
 *
 * To run a query within a React component, call `useUserSessionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSessionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSessionListQuery({
 *   variables: {
 *      where: // value for 'where'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useUserSessionListQuery(baseOptions?: Apollo.QueryHookOptions<UserSessionListQuery, UserSessionListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserSessionListQuery, UserSessionListQueryVariables>(UserSessionListDocument, options);
      }
export function useUserSessionListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserSessionListQuery, UserSessionListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserSessionListQuery, UserSessionListQueryVariables>(UserSessionListDocument, options);
        }
export type UserSessionListQueryHookResult = ReturnType<typeof useUserSessionListQuery>;
export type UserSessionListLazyQueryHookResult = ReturnType<typeof useUserSessionListLazyQuery>;
export type UserSessionListQueryResult = Apollo.QueryResult<UserSessionListQuery, UserSessionListQueryVariables>;
export const UserListDocument = gql`
    query UserList($where: UserWhereInput, $skip: Int, $take: Int, $orderBy: [UserOrderByWithRelationInput]) {
  users(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
    id
    email
    meta {
      defaultGreWordSearchPromptInput
      showDefaultGreWordSearchPromptInputs
    }
    createdAt
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
 *      orderBy: // value for 'orderBy'
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