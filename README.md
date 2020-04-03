# Studies on the introduction of graphQL concepts 
## TIL:
* Schemas
* Resolver
  * Query 
  * Mutations
* Inputs
* Types
* Enum

## Examples of mutations:

### Create new User
``` graphQL
newUser(
    data: {
      name: "Your Name",
      email: "yourEmail@email.com",
      age: 18
    }
  ) {
    id
    name
    email
  }

#response
# {
#   "data": {
#     "newUser": {
#       "id": 4,
#       "name": "Your Name",
#       "email": "yourEmail@email.com"
#     }
#   }
# }
```
### Change User by ID
``` graphQL
 changeUser(
    filter: {
      id: 1
    },
    data: {
      name: "Other Name",
      email:"otherEmail@email.com",
      age:18
  }
  ){
    id
    name
  }
#response:
# {
#   "data": {
#     "changeUser": {
#       "id": 1,
#       "name": "Other Name"
#     }
#   }
# }
``` 
  
### Delete User by ID
``` graphQL
deleteUser(data:{ id: 2 }) {
      id name
}
#response:
# {
#   "data": {
#     "deleteUser": {
#       "id": 2,
#       "name": "Rafael Junior"
#     }
#   }
# }
``` 
  
### Delete User by Email
``` graphQL
deleteUser(data:{ email: "rafajun@wemail.com" }) {
      id name
}

#response:
# {
#   "data": {
#     "deleteUser": {
#       "id": 2,
#       "name": "Rafael Junior"
#     }
#   }
# }
```

## Examples of mutations:
``` graphQL
  users {
    id
    name
    age
    email
    status
  }

#response
# "data": {
#   "users": [
#     {
#       "id": 1,
#       "name": "Cesar Ciello",
#       "age": 18,
#       "email": "cesarciello17@gmail.com",
#       "status": "ACTIVE"
#     },
#     ...
``` 

``` graphQL
  user(filter:{ id: 1 }) {
    id
    name
    age
    email
    status
  }
``` 
``` graphQL
user(filter:{ email: "email@email.com" }) {
    id
    name
    age
    email
    status
  }
  ``` 
