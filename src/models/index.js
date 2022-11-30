// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Recruiter, Match, User } = initSchema(schema);

export {
  Recruiter,
  Match,
  User
};