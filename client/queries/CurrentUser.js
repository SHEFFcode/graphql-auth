import gql from 'graphql-tag';

export default gql`
  query {
    user {
      email,
      id
    }
  }
`;