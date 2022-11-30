import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

type RecruiterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MatchMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerRecruiter = {
  readonly id: string;
  readonly Company?: string | null;
  readonly Name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecruiter = {
  readonly id: string;
  readonly Company?: string | null;
  readonly Name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Recruiter = LazyLoading extends LazyLoadingDisabled ? EagerRecruiter : LazyRecruiter

export declare const Recruiter: (new (init: ModelInit<Recruiter, RecruiterMetaData>) => Recruiter) & {
  copyOf(source: Recruiter, mutator: (draft: MutableModel<Recruiter, RecruiterMetaData>) => MutableModel<Recruiter, RecruiterMetaData> | void): Recruiter;
}

type EagerMatch = {
  readonly id: string;
  readonly UserMatch?: User | null;
  readonly RecruiterMatch?: Recruiter | null;
  readonly User?: string | null;
  readonly Recruiter?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchUserMatchId?: string | null;
  readonly matchRecruiterMatchId?: string | null;
}

type LazyMatch = {
  readonly id: string;
  readonly UserMatch: AsyncItem<User | undefined>;
  readonly RecruiterMatch: AsyncItem<Recruiter | undefined>;
  readonly User?: string | null;
  readonly Recruiter?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchUserMatchId?: string | null;
  readonly matchRecruiterMatchId?: string | null;
}

export declare type Match = LazyLoading extends LazyLoadingDisabled ? EagerMatch : LazyMatch

export declare const Match: (new (init: ModelInit<Match, MatchMetaData>) => Match) & {
  copyOf(source: Match, mutator: (draft: MutableModel<Match, MatchMetaData>) => MutableModel<Match, MatchMetaData> | void): Match;
}

type EagerUser = {
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly bio?: string | null;
  readonly resume?: string | null;
  readonly school?: string | null;
  readonly year?: string | null;
  readonly Major?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly bio?: string | null;
  readonly resume?: string | null;
  readonly school?: string | null;
  readonly year?: string | null;
  readonly Major?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}