---
layout: docs
title: Variables
description: Implant dynamic data in your queries
group: queries
aliases:
  - "/docs/queries/variables"
tableOfContents: true
---

## Dynamic Variables

More often than not, when working with queries, you'll often want to pass variables into your query. One of the largest upsides of Pave, that has been mentioned previously, is the fact that every query is in the form of a Plain Ol' Javascript Object.

The implication this has, in the context of dynamically inserting variables into queries, is that it's as simple as assigning an argument object key to a previously defined variable.

#### Example

```js
// Query createUser, pass variables to the query
const totallyLegitUserData = { name: 'John Doe', email: 'jdoe@example.com' };
query: {
  createUser: { 
    _args: { ...totallyLegitUserData }
  }
}
```
<br><br>