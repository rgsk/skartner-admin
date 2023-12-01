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

export type AuthenticateResponse = {
  __typename?: 'AuthenticateResponse';
  message: Scalars['String'];
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type CachePrompt = {
  __typename?: 'CachePrompt';
  cacheResponses: Array<CacheResponse>;
  createdAt: Scalars['String'];
  id: Scalars['String'];
  meta: Scalars['Json'];
  text: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type CacheResponse = {
  __typename?: 'CacheResponse';
  cachePrompt: CachePrompt;
  cacheWord: CacheWord;
  createdAt: Scalars['String'];
  gptPrompts: Array<GptPrompt>;
  id: Scalars['String'];
  meta: Scalars['Json'];
  text: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type CacheWord = {
  __typename?: 'CacheWord';
  cacheResponses: Array<CacheResponse>;
  createdAt: Scalars['String'];
  id: Scalars['String'];
  meta: Scalars['Json'];
  pronunciationAudioUrl?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type CacheWordWhereInput = {
  text?: InputMaybe<StringFilter>;
};

export type EnumGreWordStatusFilter = {
  equals?: InputMaybe<GreWordStatus>;
  in?: InputMaybe<Array<GreWordStatus>>;
  not?: InputMaybe<GreWordStatus>;
  notIn?: InputMaybe<Array<GreWordStatus>>;
};

export type GenerateImagesForPromptResponse = {
  __typename?: 'GenerateImagesForPromptResponse';
  imageUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GenerateImagesForWordResponse = {
  __typename?: 'GenerateImagesForWordResponse';
  imageUrls?: Maybe<Array<Scalars['String']>>;
};

export type GptPrompt = {
  __typename?: 'GptPrompt';
  cacheResponse: CacheResponse;
  createdAt: Scalars['String'];
  editedResponse?: Maybe<Scalars['String']>;
  greWord?: Maybe<GreWord>;
  greWordId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageUrls: Array<Scalars['String']>;
  meta: Scalars['Json'];
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
  cacheWord: CacheWord;
  createdAt: Scalars['String'];
  gptPrompts: Array<GptPrompt>;
  greWordTags?: Maybe<Array<GreWordTag>>;
  id: Scalars['String'];
  meta: Scalars['Json'];
  pronunciationAudioUrl?: Maybe<Scalars['String']>;
  status: GreWordStatus;
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type GreWordOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
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

export type GreWordTagNameUserIdCompoundUniqueInput = {
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type GreWordTagWhereInput = {
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type GreWordTagWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name_userId?: InputMaybe<GreWordTagNameUserIdCompoundUniqueInput>;
};

export type GreWordWhereInput = {
  cacheWord?: InputMaybe<CacheWordWhereInput>;
  greWordTags?: InputMaybe<GreWordTagListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumGreWordStatusFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type HelloWorld = {
  __typename?: 'HelloWorld';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraft?: Maybe<Post>;
  createGptPrompt: GptPrompt;
  createGreWord: GreWord;
  createGreWordSearchPromptInput: GreWordSearchPromptInput;
  createGreWordTag: GreWordTag;
  createNotification: Notification;
  createPermission: Permission;
  createUser: User;
  deleteGptPrompt?: Maybe<GptPrompt>;
  deleteGreWord?: Maybe<GreWord>;
  deleteGreWordSearchPromptInput?: Maybe<GreWordSearchPromptInput>;
  deleteGreWordTag: GreWordTag;
  deletePermission?: Maybe<Permission>;
  deletePermissions?: Maybe<BatchPayload>;
  publish?: Maybe<Post>;
  saveImageToS3?: Maybe<SaveImageToS3Response>;
  updateGptPrompt?: Maybe<GptPrompt>;
  updateGreWord?: Maybe<GreWord>;
  updateGreWordSearchPromptInput?: Maybe<GreWordSearchPromptInput>;
  updatePermission: Permission;
  updateUser?: Maybe<User>;
};


export type MutationCreateDraftArgs = {
  body: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreateGptPromptArgs = {
  cacheResponseId: Scalars['String'];
  greWordId: Scalars['String'];
};


export type MutationCreateGreWordArgs = {
  cacheResponseId: Scalars['String'];
  greWordTags?: InputMaybe<Array<InputMaybe<GreWordTagWhereUniqueInput>>>;
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


export type MutationCreatePermissionArgs = {
  name: Scalars['String'];
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
  userId: Scalars['String'];
};


export type MutationDeletePermissionArgs = {
  id: Scalars['String'];
};


export type MutationDeletePermissionsArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationPublishArgs = {
  draftId: Scalars['String'];
};


export type MutationSaveImageToS3Args = {
  imageUrl: Scalars['String'];
  key?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateGptPromptArgs = {
  editedResponse?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  imageUrls?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationUpdateGreWordArgs = {
  greWordTags?: InputMaybe<Array<InputMaybe<GreWordTagWhereUniqueInput>>>;
  id: Scalars['String'];
  status?: InputMaybe<GreWordStatus>;
};


export type MutationUpdateGreWordSearchPromptInputArgs = {
  id: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePermissionArgs = {
  data: PermissionUpdateInput;
  id: Scalars['String'];
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

export type Permission = {
  __typename?: 'Permission';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  meta: Scalars['Json'];
  name: Scalars['String'];
  permissionHierarchyAsChild: Array<PermissionHierarchy>;
  permissionHierarchyAsParent: Array<PermissionHierarchy>;
  relationPermissionToRoleAsPermission: Array<RelationPermissionToRole>;
  relationPermissionToUserAsPermission: Array<RelationPermissionToUser>;
  updatedAt: Scalars['String'];
};

export type PermissionHierarchy = {
  __typename?: 'PermissionHierarchy';
  childPermission?: Maybe<Permission>;
  childPermissionId: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  parentPermission?: Maybe<Permission>;
  parentPermissionId: Scalars['String'];
};

export type PermissionUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type PermissionWhereInput = {
  id?: InputMaybe<StringFilter>;
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
  authenticate: AuthenticateResponse;
  drafts?: Maybe<Array<Maybe<Post>>>;
  generateImagesForPrompt?: Maybe<GenerateImagesForPromptResponse>;
  generateImagesForWord?: Maybe<GenerateImagesForWordResponse>;
  gptPrompts?: Maybe<Array<Maybe<GptPrompt>>>;
  greConfiguration: GreConfiguration;
  greWord?: Maybe<GreWord>;
  greWordSearchPromptInputs: Array<GreWordSearchPromptInput>;
  greWordTags: Array<GreWordTag>;
  greWords: Array<GreWord>;
  greWordsCount: Scalars['Int'];
  hello: HelloWorld;
  permission?: Maybe<Permission>;
  permissionHierarchies?: Maybe<Array<Maybe<PermissionHierarchy>>>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  posts?: Maybe<Array<Maybe<Post>>>;
  relationsPermissionToRole?: Maybe<Array<Maybe<RelationPermissionToRole>>>;
  relationsPermissionToUser?: Maybe<Array<Maybe<RelationPermissionToUser>>>;
  relationsRoleToUser?: Maybe<Array<Maybe<RelationRoleToUser>>>;
  roles?: Maybe<Array<Maybe<Role>>>;
  sendSinglePrompt: SendSinglePromptResponse;
  user?: Maybe<User>;
  userSession?: Maybe<UserSession>;
  userSessions: Array<UserSession>;
  userSessionsCount: Scalars['Int'];
  users: Array<User>;
  usersCount: Scalars['Int'];
  wordsAndResponsesForPrompt: Array<WordAndResponses>;
  wordsCountForGptPrompts: Array<WordsCountForGptPrompts>;
};


export type QueryAllPostsArgs = {
  isPublished: Scalars['Boolean'];
  token?: InputMaybe<Scalars['String']>;
};


export type QueryGenerateImagesForPromptArgs = {
  prompt: Scalars['String'];
};


export type QueryGenerateImagesForWordArgs = {
  word: Scalars['String'];
};


export type QueryGptPromptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryGreWordArgs = {
  where?: InputMaybe<GreWordWhereInput>;
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


export type QueryPermissionArgs = {
  where?: InputMaybe<PermissionWhereInput>;
};


export type QuerySendSinglePromptArgs = {
  indexesReturned?: InputMaybe<Array<Scalars['Int']>>;
  prompt: Scalars['String'];
  resultIndexFromCache?: InputMaybe<Scalars['Int']>;
  skipCache?: InputMaybe<Scalars['Boolean']>;
  word: Scalars['String'];
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserSessionArgs = {
  where: UserSessionWhereUniqueInput;
};


export type QueryUserSessionsArgs = {
  orderBy?: InputMaybe<Array<InputMaybe<UserSessionOrderByWithRelationInput>>>;
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


export type QueryWordsAndResponsesForPromptArgs = {
  prompt: Scalars['String'];
};


export type QueryWordsCountForGptPromptsArgs = {
  prompts: Array<Scalars['String']>;
};

export type RelationPermissionToRole = {
  __typename?: 'RelationPermissionToRole';
  grantedAt: Scalars['String'];
  granter?: Maybe<User>;
  granterId: Scalars['String'];
  id: Scalars['String'];
  isAllowed?: Maybe<Scalars['Boolean']>;
  permission?: Maybe<Permission>;
  permissionId: Scalars['String'];
  role?: Maybe<Role>;
  roleId: Scalars['String'];
};

export type RelationPermissionToUser = {
  __typename?: 'RelationPermissionToUser';
  grantedAt: Scalars['String'];
  granter?: Maybe<User>;
  granterId: Scalars['String'];
  id: Scalars['String'];
  isAllowed?: Maybe<Scalars['Boolean']>;
  permission?: Maybe<Permission>;
  permissionId: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type RelationRoleToUser = {
  __typename?: 'RelationRoleToUser';
  assignedAt: Scalars['String'];
  assigner?: Maybe<User>;
  assignerId: Scalars['String'];
  id: Scalars['String'];
  role?: Maybe<Role>;
  roleId: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  meta: Scalars['Json'];
  name: Scalars['String'];
  relationPermissionToRoleAsRole: Array<RelationPermissionToRole>;
  relationRoleToUserAsRole: Array<RelationRoleToUser>;
  updatedAt: Scalars['String'];
};

export type SaveImageToS3Response = {
  __typename?: 'SaveImageToS3Response';
  s3Url?: Maybe<Scalars['String']>;
};

export type SendSinglePromptResponse = {
  __typename?: 'SendSinglePromptResponse';
  cacheResponseId: Scalars['String'];
  result: Scalars['String'];
  resultIndex: Scalars['Int'];
  totalResultsInCache: Scalars['Int'];
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
  token: Scalars['String'];
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

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
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

export type UserSessionOrderByWithRelationInput = {
  duration?: InputMaybe<SortOrder>;
  endedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  startedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
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

export type WordAndResponses = {
  __typename?: 'WordAndResponses';
  responses: Array<Maybe<Scalars['String']>>;
  word: Scalars['String'];
};

export type WordsCountForGptPrompts = {
  __typename?: 'WordsCountForGptPrompts';
  count: Scalars['Int'];
  prompt: Scalars['String'];
};

export type GreWordQueryVariables = Exact<{
  where?: InputMaybe<GreWordWhereInput>;
}>;


export type GreWordQuery = { __typename?: 'Query', greWord?: { __typename?: 'GreWord', id: string, cacheWord: { __typename?: 'CacheWord', text: string }, gptPrompts: Array<{ __typename?: 'GptPrompt', id: string, editedResponse?: string | null, greWordId?: string | null, cacheResponse: { __typename?: 'CacheResponse', text: string, cachePrompt: { __typename?: 'CachePrompt', text: string }, cacheWord: { __typename?: 'CacheWord', text: string } } }> } | null };

export type GreWordsQueryVariables = Exact<{
  where?: InputMaybe<GreWordWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<GreWordOrderByWithRelationInput>> | InputMaybe<GreWordOrderByWithRelationInput>>;
}>;


export type GreWordsQuery = { __typename?: 'Query', total: number, greWords: Array<{ __typename?: 'GreWord', id: string, userId?: string | null, updatedAt: string, cacheWord: { __typename?: 'CacheWord', text: string } }> };

export type GreWordListReferenceUsersQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
}>;


export type GreWordListReferenceUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string }> };

export type CreatePermissionMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreatePermissionMutation = { __typename?: 'Mutation', createPermission: { __typename?: 'Permission', id: string, name: string } };

export type UpdatePermissionMutationVariables = Exact<{
  id: Scalars['String'];
  data: PermissionUpdateInput;
}>;


export type UpdatePermissionMutation = { __typename?: 'Mutation', updatePermission: { __typename?: 'Permission', id: string, name: string } };

export type PermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type PermissionsQuery = { __typename?: 'Query', permissions?: Array<{ __typename?: 'Permission', id: string, name: string, meta: any, createdAt: string, updatedAt: string } | null> | null };

export type DeletePermissionsMutationVariables = Exact<{
  ids: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeletePermissionsMutation = { __typename?: 'Mutation', deletePermissions?: { __typename?: 'BatchPayload', count: number } | null };

export type PermissionQueryVariables = Exact<{
  where?: InputMaybe<PermissionWhereInput>;
}>;


export type PermissionQuery = { __typename?: 'Query', permission?: { __typename?: 'Permission', id: string, name: string } | null };

export type DeletePermissionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePermissionMutation = { __typename?: 'Mutation', deletePermission?: { __typename?: 'Permission', id: string, name: string } | null };

export type RelationsPermissionToRoleQueryVariables = Exact<{ [key: string]: never; }>;


export type RelationsPermissionToRoleQuery = { __typename?: 'Query', relationsPermissionToRole?: Array<{ __typename?: 'RelationPermissionToRole', id: string, permissionId: string, roleId: string, granterId: string, isAllowed?: boolean | null, grantedAt: string, permission?: { __typename?: 'Permission', name: string } | null, role?: { __typename?: 'Role', name: string } | null, granter?: { __typename?: 'User', email: string } | null } | null> | null };

export type RelationsPermissionToUserQueryVariables = Exact<{ [key: string]: never; }>;


export type RelationsPermissionToUserQuery = { __typename?: 'Query', relationsPermissionToUser?: Array<{ __typename?: 'RelationPermissionToUser', id: string, userId: string, isAllowed?: boolean | null, grantedAt: string, user?: { __typename?: 'User', email: string } | null, granter?: { __typename?: 'User', email: string } | null, permission?: { __typename?: 'Permission', name: string } | null } | null> | null };

export type RelationsRoleToUserQueryVariables = Exact<{ [key: string]: never; }>;


export type RelationsRoleToUserQuery = { __typename?: 'Query', relationsRoleToUser?: Array<{ __typename?: 'RelationRoleToUser', id: string, roleId: string, userId: string, assignerId: string, assignedAt: string, role?: { __typename?: 'Role', id: string, name: string } | null, user?: { __typename?: 'User', email: string } | null, assigner?: { __typename?: 'User', email: string } | null } | null> | null };

export type RolesQueryVariables = Exact<{ [key: string]: never; }>;


export type RolesQuery = { __typename?: 'Query', roles?: Array<{ __typename?: 'Role', id: string, name: string, meta: any, createdAt: string, updatedAt: string } | null> | null };

export type UserSessionsQueryVariables = Exact<{
  where?: InputMaybe<UserSessionWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserSessionOrderByWithRelationInput>> | InputMaybe<UserSessionOrderByWithRelationInput>>;
}>;


export type UserSessionsQuery = { __typename?: 'Query', total: number, userSessions: Array<{ __typename?: 'UserSession', id: string, startedAt: string, endedAt?: string | null, duration?: number | null, user: { __typename?: 'User', email: string } }> };

export type UsersQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>> | InputMaybe<UserOrderByWithRelationInput>>;
}>;


export type UsersQuery = { __typename?: 'Query', total: number, users: Array<{ __typename?: 'User', id: string, email: string, createdAt: string, meta: { __typename?: 'UserMetaParsedJsonValue', defaultGreWordSearchPromptInput?: string | null, showDefaultGreWordSearchPromptInputs?: boolean | null } }> };


export const GreWordDocument = gql`
    query GreWord($where: GreWordWhereInput) {
  greWord(where: $where) {
    id
    cacheWord {
      text
    }
    gptPrompts {
      id
      cacheResponse {
        text
        cachePrompt {
          text
        }
        cacheWord {
          text
        }
      }
      editedResponse
      greWordId
    }
  }
}
    `;

/**
 * __useGreWordQuery__
 *
 * To run a query within a React component, call `useGreWordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGreWordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGreWordQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGreWordQuery(baseOptions?: Apollo.QueryHookOptions<GreWordQuery, GreWordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GreWordQuery, GreWordQueryVariables>(GreWordDocument, options);
      }
export function useGreWordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GreWordQuery, GreWordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GreWordQuery, GreWordQueryVariables>(GreWordDocument, options);
        }
export type GreWordQueryHookResult = ReturnType<typeof useGreWordQuery>;
export type GreWordLazyQueryHookResult = ReturnType<typeof useGreWordLazyQuery>;
export type GreWordQueryResult = Apollo.QueryResult<GreWordQuery, GreWordQueryVariables>;
export const GreWordsDocument = gql`
    query GreWords($where: GreWordWhereInput, $skip: Int, $take: Int, $orderBy: [GreWordOrderByWithRelationInput]) {
  greWords(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
    id
    cacheWord {
      text
    }
    userId
    updatedAt
  }
  total: greWordsCount(where: $where)
}
    `;

/**
 * __useGreWordsQuery__
 *
 * To run a query within a React component, call `useGreWordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGreWordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGreWordsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGreWordsQuery(baseOptions?: Apollo.QueryHookOptions<GreWordsQuery, GreWordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GreWordsQuery, GreWordsQueryVariables>(GreWordsDocument, options);
      }
export function useGreWordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GreWordsQuery, GreWordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GreWordsQuery, GreWordsQueryVariables>(GreWordsDocument, options);
        }
export type GreWordsQueryHookResult = ReturnType<typeof useGreWordsQuery>;
export type GreWordsLazyQueryHookResult = ReturnType<typeof useGreWordsLazyQuery>;
export type GreWordsQueryResult = Apollo.QueryResult<GreWordsQuery, GreWordsQueryVariables>;
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
export const CreatePermissionDocument = gql`
    mutation CreatePermission($name: String!) {
  createPermission(name: $name) {
    id
    name
  }
}
    `;
export type CreatePermissionMutationFn = Apollo.MutationFunction<CreatePermissionMutation, CreatePermissionMutationVariables>;

/**
 * __useCreatePermissionMutation__
 *
 * To run a mutation, you first call `useCreatePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPermissionMutation, { data, loading, error }] = useCreatePermissionMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreatePermissionMutation(baseOptions?: Apollo.MutationHookOptions<CreatePermissionMutation, CreatePermissionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePermissionMutation, CreatePermissionMutationVariables>(CreatePermissionDocument, options);
      }
export type CreatePermissionMutationHookResult = ReturnType<typeof useCreatePermissionMutation>;
export type CreatePermissionMutationResult = Apollo.MutationResult<CreatePermissionMutation>;
export type CreatePermissionMutationOptions = Apollo.BaseMutationOptions<CreatePermissionMutation, CreatePermissionMutationVariables>;
export const UpdatePermissionDocument = gql`
    mutation UpdatePermission($id: String!, $data: PermissionUpdateInput!) {
  updatePermission(id: $id, data: $data) {
    id
    name
  }
}
    `;
export type UpdatePermissionMutationFn = Apollo.MutationFunction<UpdatePermissionMutation, UpdatePermissionMutationVariables>;

/**
 * __useUpdatePermissionMutation__
 *
 * To run a mutation, you first call `useUpdatePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePermissionMutation, { data, loading, error }] = useUpdatePermissionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePermissionMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePermissionMutation, UpdatePermissionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePermissionMutation, UpdatePermissionMutationVariables>(UpdatePermissionDocument, options);
      }
export type UpdatePermissionMutationHookResult = ReturnType<typeof useUpdatePermissionMutation>;
export type UpdatePermissionMutationResult = Apollo.MutationResult<UpdatePermissionMutation>;
export type UpdatePermissionMutationOptions = Apollo.BaseMutationOptions<UpdatePermissionMutation, UpdatePermissionMutationVariables>;
export const PermissionsDocument = gql`
    query Permissions {
  permissions {
    id
    name
    meta
    createdAt
    updatedAt
  }
}
    `;

/**
 * __usePermissionsQuery__
 *
 * To run a query within a React component, call `usePermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePermissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePermissionsQuery(baseOptions?: Apollo.QueryHookOptions<PermissionsQuery, PermissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PermissionsQuery, PermissionsQueryVariables>(PermissionsDocument, options);
      }
export function usePermissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PermissionsQuery, PermissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PermissionsQuery, PermissionsQueryVariables>(PermissionsDocument, options);
        }
export type PermissionsQueryHookResult = ReturnType<typeof usePermissionsQuery>;
export type PermissionsLazyQueryHookResult = ReturnType<typeof usePermissionsLazyQuery>;
export type PermissionsQueryResult = Apollo.QueryResult<PermissionsQuery, PermissionsQueryVariables>;
export const DeletePermissionsDocument = gql`
    mutation DeletePermissions($ids: [String!]!) {
  deletePermissions(ids: $ids) {
    count
  }
}
    `;
export type DeletePermissionsMutationFn = Apollo.MutationFunction<DeletePermissionsMutation, DeletePermissionsMutationVariables>;

/**
 * __useDeletePermissionsMutation__
 *
 * To run a mutation, you first call `useDeletePermissionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePermissionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePermissionsMutation, { data, loading, error }] = useDeletePermissionsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeletePermissionsMutation(baseOptions?: Apollo.MutationHookOptions<DeletePermissionsMutation, DeletePermissionsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePermissionsMutation, DeletePermissionsMutationVariables>(DeletePermissionsDocument, options);
      }
export type DeletePermissionsMutationHookResult = ReturnType<typeof useDeletePermissionsMutation>;
export type DeletePermissionsMutationResult = Apollo.MutationResult<DeletePermissionsMutation>;
export type DeletePermissionsMutationOptions = Apollo.BaseMutationOptions<DeletePermissionsMutation, DeletePermissionsMutationVariables>;
export const PermissionDocument = gql`
    query Permission($where: PermissionWhereInput) {
  permission(where: $where) {
    id
    name
  }
}
    `;

/**
 * __usePermissionQuery__
 *
 * To run a query within a React component, call `usePermissionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePermissionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePermissionQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePermissionQuery(baseOptions?: Apollo.QueryHookOptions<PermissionQuery, PermissionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PermissionQuery, PermissionQueryVariables>(PermissionDocument, options);
      }
export function usePermissionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PermissionQuery, PermissionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PermissionQuery, PermissionQueryVariables>(PermissionDocument, options);
        }
export type PermissionQueryHookResult = ReturnType<typeof usePermissionQuery>;
export type PermissionLazyQueryHookResult = ReturnType<typeof usePermissionLazyQuery>;
export type PermissionQueryResult = Apollo.QueryResult<PermissionQuery, PermissionQueryVariables>;
export const DeletePermissionDocument = gql`
    mutation DeletePermission($id: String!) {
  deletePermission(id: $id) {
    id
    name
  }
}
    `;
export type DeletePermissionMutationFn = Apollo.MutationFunction<DeletePermissionMutation, DeletePermissionMutationVariables>;

/**
 * __useDeletePermissionMutation__
 *
 * To run a mutation, you first call `useDeletePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePermissionMutation, { data, loading, error }] = useDeletePermissionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePermissionMutation(baseOptions?: Apollo.MutationHookOptions<DeletePermissionMutation, DeletePermissionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePermissionMutation, DeletePermissionMutationVariables>(DeletePermissionDocument, options);
      }
export type DeletePermissionMutationHookResult = ReturnType<typeof useDeletePermissionMutation>;
export type DeletePermissionMutationResult = Apollo.MutationResult<DeletePermissionMutation>;
export type DeletePermissionMutationOptions = Apollo.BaseMutationOptions<DeletePermissionMutation, DeletePermissionMutationVariables>;
export const RelationsPermissionToRoleDocument = gql`
    query RelationsPermissionToRole {
  relationsPermissionToRole {
    id
    permissionId
    permission {
      name
    }
    roleId
    role {
      name
    }
    granterId
    granter {
      email
    }
    isAllowed
    grantedAt
  }
}
    `;

/**
 * __useRelationsPermissionToRoleQuery__
 *
 * To run a query within a React component, call `useRelationsPermissionToRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useRelationsPermissionToRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRelationsPermissionToRoleQuery({
 *   variables: {
 *   },
 * });
 */
export function useRelationsPermissionToRoleQuery(baseOptions?: Apollo.QueryHookOptions<RelationsPermissionToRoleQuery, RelationsPermissionToRoleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RelationsPermissionToRoleQuery, RelationsPermissionToRoleQueryVariables>(RelationsPermissionToRoleDocument, options);
      }
export function useRelationsPermissionToRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RelationsPermissionToRoleQuery, RelationsPermissionToRoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RelationsPermissionToRoleQuery, RelationsPermissionToRoleQueryVariables>(RelationsPermissionToRoleDocument, options);
        }
export type RelationsPermissionToRoleQueryHookResult = ReturnType<typeof useRelationsPermissionToRoleQuery>;
export type RelationsPermissionToRoleLazyQueryHookResult = ReturnType<typeof useRelationsPermissionToRoleLazyQuery>;
export type RelationsPermissionToRoleQueryResult = Apollo.QueryResult<RelationsPermissionToRoleQuery, RelationsPermissionToRoleQueryVariables>;
export const RelationsPermissionToUserDocument = gql`
    query RelationsPermissionToUser {
  relationsPermissionToUser {
    id
    userId
    user {
      email
    }
    granter {
      email
    }
    isAllowed
    permission {
      name
    }
    grantedAt
  }
}
    `;

/**
 * __useRelationsPermissionToUserQuery__
 *
 * To run a query within a React component, call `useRelationsPermissionToUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useRelationsPermissionToUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRelationsPermissionToUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useRelationsPermissionToUserQuery(baseOptions?: Apollo.QueryHookOptions<RelationsPermissionToUserQuery, RelationsPermissionToUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RelationsPermissionToUserQuery, RelationsPermissionToUserQueryVariables>(RelationsPermissionToUserDocument, options);
      }
export function useRelationsPermissionToUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RelationsPermissionToUserQuery, RelationsPermissionToUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RelationsPermissionToUserQuery, RelationsPermissionToUserQueryVariables>(RelationsPermissionToUserDocument, options);
        }
export type RelationsPermissionToUserQueryHookResult = ReturnType<typeof useRelationsPermissionToUserQuery>;
export type RelationsPermissionToUserLazyQueryHookResult = ReturnType<typeof useRelationsPermissionToUserLazyQuery>;
export type RelationsPermissionToUserQueryResult = Apollo.QueryResult<RelationsPermissionToUserQuery, RelationsPermissionToUserQueryVariables>;
export const RelationsRoleToUserDocument = gql`
    query RelationsRoleToUser {
  relationsRoleToUser {
    id
    roleId
    role {
      id
      name
    }
    userId
    user {
      email
    }
    assignerId
    assigner {
      email
    }
    assignedAt
  }
}
    `;

/**
 * __useRelationsRoleToUserQuery__
 *
 * To run a query within a React component, call `useRelationsRoleToUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useRelationsRoleToUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRelationsRoleToUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useRelationsRoleToUserQuery(baseOptions?: Apollo.QueryHookOptions<RelationsRoleToUserQuery, RelationsRoleToUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RelationsRoleToUserQuery, RelationsRoleToUserQueryVariables>(RelationsRoleToUserDocument, options);
      }
export function useRelationsRoleToUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RelationsRoleToUserQuery, RelationsRoleToUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RelationsRoleToUserQuery, RelationsRoleToUserQueryVariables>(RelationsRoleToUserDocument, options);
        }
export type RelationsRoleToUserQueryHookResult = ReturnType<typeof useRelationsRoleToUserQuery>;
export type RelationsRoleToUserLazyQueryHookResult = ReturnType<typeof useRelationsRoleToUserLazyQuery>;
export type RelationsRoleToUserQueryResult = Apollo.QueryResult<RelationsRoleToUserQuery, RelationsRoleToUserQueryVariables>;
export const RolesDocument = gql`
    query Roles {
  roles {
    id
    name
    meta
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useRolesQuery__
 *
 * To run a query within a React component, call `useRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRolesQuery(baseOptions?: Apollo.QueryHookOptions<RolesQuery, RolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RolesQuery, RolesQueryVariables>(RolesDocument, options);
      }
export function useRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RolesQuery, RolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RolesQuery, RolesQueryVariables>(RolesDocument, options);
        }
export type RolesQueryHookResult = ReturnType<typeof useRolesQuery>;
export type RolesLazyQueryHookResult = ReturnType<typeof useRolesLazyQuery>;
export type RolesQueryResult = Apollo.QueryResult<RolesQuery, RolesQueryVariables>;
export const UserSessionsDocument = gql`
    query UserSessions($where: UserSessionWhereInput, $skip: Int, $take: Int, $orderBy: [UserSessionOrderByWithRelationInput]) {
  userSessions(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
    id
    user {
      email
    }
    startedAt
    endedAt
    duration
  }
  total: userSessionsCount(where: $where)
}
    `;

/**
 * __useUserSessionsQuery__
 *
 * To run a query within a React component, call `useUserSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSessionsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useUserSessionsQuery(baseOptions?: Apollo.QueryHookOptions<UserSessionsQuery, UserSessionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserSessionsQuery, UserSessionsQueryVariables>(UserSessionsDocument, options);
      }
export function useUserSessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserSessionsQuery, UserSessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserSessionsQuery, UserSessionsQueryVariables>(UserSessionsDocument, options);
        }
export type UserSessionsQueryHookResult = ReturnType<typeof useUserSessionsQuery>;
export type UserSessionsLazyQueryHookResult = ReturnType<typeof useUserSessionsLazyQuery>;
export type UserSessionsQueryResult = Apollo.QueryResult<UserSessionsQuery, UserSessionsQueryVariables>;
export const UsersDocument = gql`
    query Users($where: UserWhereInput, $skip: Int, $take: Int, $orderBy: [UserOrderByWithRelationInput]) {
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
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;