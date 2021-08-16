import { gql } from '@apollo/client'

export const QUERY_SINGLE_USER = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
    }
  }
`;