const { gql } = require("apollo-server-express");

//TODO: delete unnecessary typedefs and add things that are needed
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    cars: [Car]
  }

  type Car {
    make: String!
    model: String!
    year: Int
    description: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    allCars: Car
  }

  input CarDataInput {
    make: String!
    model: String!
    year: Int
    description: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveCar(carData: CarDataInput): User
    removeCar(carId: ID!): User
  }
`;

module.exports = typeDefs;
