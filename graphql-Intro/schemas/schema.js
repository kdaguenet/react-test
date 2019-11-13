const graphQL = require("graphql")
const lodash = require("lodash")
const axios = require("axios")
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = graphQL;

const CompagnyType = new GraphQLObjectType({
    name: 'Compagny',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        user: {
            type: GraphQLList(UserType),
            resolve(parentValue, args) {
                return axios.get("http://localhost:3000/companies/"+parentValue.id+"/users").then(response => {
                    return response.data;
                })
            }
        }
    })
})

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt},
        compagny : {
            type: CompagnyType,
            resolve(parentValue, args) {
                return axios.get("http://localhost:3000/companies/"+parentValue.companyId).then(response => {
                    return response.data;
                })
            }
        }
    }
})

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields : {
        addUser: {
            type: UserType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)},
                compagnyId: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                return axios.post("http://localhost:3000/users/", {firstName: args.firstName, age: args.age, compagnyId: args.compagnyId}).then(response => {
                    return response.data;
                })
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args) {
                return axios.delete("http://localhost:3000/users/"+args.id).then(response => {
                    return response.data;
                })
            }
        }
    }
})

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return axios.get("http://localhost:3000/users/"+args.id).then(response => {
                    return response.data;
                })
            }
        },
        company : {
            type: CompagnyType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return axios.get("http://localhost:3000/companies/"+args.id).then(response => {
                    return response.data;
                })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query : RootQueryType,
    mutation: MutationType
})