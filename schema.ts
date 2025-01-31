export const schema =`#graphql
type Contact{
    id:ID!
    name:String!
    phone:String!
    country:String!
    time:String!
}
type Query{
    getContact(id:ID!):Contact
    getContacts:[Contact!]!
}
type Mutation{
    addContact(id:ID!):Contact!
    deleteContact(id:ID!):Boolean!
    updateOne(id:ID!,name:String!,phone:String!):Contact!
}`