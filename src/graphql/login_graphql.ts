import { gql } from '@apollo/client'

export const ALL_USERS = gql`
    query {
        listUsers {
            id
            email
            password
            birthday
            tarriff
            payCardNumber
            payCardDate
            payCardBackNumber
        }
    }
`;

export const CREATE_USER = gql`
mutation CreateUser($email: String!, $password: String!, $birthday: String!, $tarriff: String!, $payCardNumber: String!,
    $payCardDate: String!, $payCardBackNumber: String!) {
    createUser(email: $email, password: $password, birthday: $birthday, tarriff: $tarriff, payCardNumber: $payCardNumber,
      payCardDate: $payCardDate, payCardBackNumber: $payCardBackNumber) {
      id
      email
      password
      birthday
      tarriff
      payCardNumber
      payCardDate
      payCardBackNumber
    }
  }
`;