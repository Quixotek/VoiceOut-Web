import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type LegalResources = {
  __typename?: 'LegalResources';
  author: Scalars['String']['output'];
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  notes: Scalars['String']['output'];
  publicationDate: Scalars['DateTime']['output'];
  source: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type LegalResourcesPaginationInput = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  q?: InputMaybe<Scalars['String']['input']>;
  sort?: Scalars['String']['input'];
  sortBy?: Scalars['String']['input'];
};

export type LegalResourcesSearch = {
  __typename?: 'LegalResourcesSearch';
  item: Array<LegalResources>;
  meta: Meta;
};

export type Meta = {
  __typename?: 'Meta';
  limit: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createReport: Report;
  deleteReport: Report;
  updateReport: Report;
};


export type MutationCreateReportArgs = {
  createReportInput: ReportCreateInput;
};


export type MutationDeleteReportArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateReportArgs = {
  updateReportInput: ReportUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  reports: Scalars['String']['output'];
  viewer: User;
};


export type QueryViewerArgs = {
  id: Scalars['String']['input'];
};

export type Report = {
  __typename?: 'Report';
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isReviewed?: Maybe<Scalars['Boolean']['output']>;
  locations?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ReportCreateInput = {
  attachments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description: Scalars['String']['input'];
  isReviewed?: InputMaybe<Scalars['Boolean']['input']>;
  locations: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type ReportUpdateInput = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  isReviewed?: InputMaybe<Scalars['Boolean']['input']>;
  locations?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  legalResources?: Maybe<LegalResources>;
  legalResourcesSearch?: Maybe<LegalResourcesSearch>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};


export type UserLegalResourcesArgs = {
  id: Scalars['String']['input'];
};


export type UserLegalResourcesSearchArgs = {
  input: LegalResourcesPaginationInput;
};


export type UserUserIdArgs = {
  id: Scalars['String']['input'];
};

export type CreateReportMutationVariables = Exact<{
  createReportInput: ReportCreateInput;
}>;


export type CreateReportMutation = { __typename?: 'Mutation', createReport: { __typename?: 'Report', attachments?: Array<string | null> | null, createdAt: any, description: string, id: string, isReviewed?: boolean | null, locations?: string | null, type: string } };


export const CreateReportDocument = gql`
    mutation CreateReport($createReportInput: ReportCreateInput!) {
  createReport(createReportInput: $createReportInput) {
    attachments
    createdAt
    description
    id
    isReviewed
    locations
    type
  }
}
    `;
export type CreateReportMutationFn = Apollo.MutationFunction<CreateReportMutation, CreateReportMutationVariables>;

/**
 * __useCreateReportMutation__
 *
 * To run a mutation, you first call `useCreateReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReportMutation, { data, loading, error }] = useCreateReportMutation({
 *   variables: {
 *      createReportInput: // value for 'createReportInput'
 *   },
 * });
 */
export function useCreateReportMutation(baseOptions?: Apollo.MutationHookOptions<CreateReportMutation, CreateReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReportMutation, CreateReportMutationVariables>(CreateReportDocument, options);
      }
export type CreateReportMutationHookResult = ReturnType<typeof useCreateReportMutation>;
export type CreateReportMutationResult = Apollo.MutationResult<CreateReportMutation>;
export type CreateReportMutationOptions = Apollo.BaseMutationOptions<CreateReportMutation, CreateReportMutationVariables>;