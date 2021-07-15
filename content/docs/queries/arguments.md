---
layout: docs
title: Arguments
description: Provide information to your query
group: queries
aliases:
  - "/docs/queries/arguments"
tableOfContents: true
---

## Basic Arguments

Every querying language would be a hollow shell if not for the ability to provide arguments to the query. These properties are what can be read and resolved on the server side of your queried function.

#### Example

```js
// Query createUser, with arguments
query: {
  createUser: { 
    _args: { 
      name: 'John Doe',
      address: '1600 Pennsylvania Ave.',
      emailAddress: 'jdoe@example.com'  
    }
  }
}
```
<br><br>

## Advanced Arguments

While the example above is incredible rudimentary, there is massive potential to implement several advanced features off of the back of arguments. One could, as many using Pave have, implement standardized arguments such as sortBy, filterBy, which could then be handled in your resolver on your server. Below is an example of a more advanced Pave query, demonstrating the potential that Pave arguments can have at a higher level.

#### Example

```js
// Query users, with arguments to filter and sort
query: {
  users: { 
    _args: { 
      filterBy: ['name', '!=', 'Jane Smith'],
      sortBy: { field: 'name', order: 'desc' }
    }
    id: {},
    name: {}
  }
}
```
<br><br>
