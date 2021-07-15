---
layout: docs
title: Fields
description: Pick and choose the data you need
group: queries
aliases:
  - "/docs/queries/fields"
tableOfContents: true
---

## Simple Fields

As with every querying language, one of the largest benefits is the ability to pick and choose what data you pull from your server, removing worries of having a bunch of data being pulled from the database without need. In Pave, defining what you would like back follows the same theme of all other aspects of Pave; it's simple.

For instance, let's assume we have a model of type `User` with available fields `name, phoneNumber, emailAddress, and address` defined on that type. In order to get, say, their name and phoneNumber, we would send the follow query.

#### Example

```js
{
  query: {
    user: {
      _args: { id: 123 },
      id: {},
      name: {},
      phoneNumber: {}
    }
  }
}
```

As can be seen, the way these fields are requested is by adding the field key onto the object, and passing an empty object along with it, which, once the query is fulfilled by the API, will be occupied by the requested content (if it exists), or null otherwise.

## Advanced Fields

As simple as basic fields are, there is certainly a skill curve to advanced fields, which are also, of course, supported in Pave. One could pass a field along to a query that is not expecting an assignment to a specific value on a model, but rather whatever data you may desire.

A good example of this type of advanced field usage would be in order to create a paginated query in your schema. You might pass, as fields to be populated with the returned list, a query as seen below.

#### Example

```js
{
  query: {
    users: {
      pageCursor: {},
      results: {
        id: {},
        name: {},
        phoneNumber: {}
      }
    }
  }
}
```

On the server side, you would be able to expect and populate these fields. While the example above is very common, the potential use cases for fields and their ability to be populated by whatever data you would like allow for several possibilities of unique use cases.