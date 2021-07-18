---
layout: docs
title: Introduction
description: Get to know Pave
group: getting-started
aliases:
  - "/docs/getting-started/introduction"
  - "/docs/getting-started"
  - "/getting-started"
tableOfContents: true
---

## Terminology

Throughout this documentation, due to either a lack of words or just a limitation of my vocabulary, certain words are used interchangeably and in multiple contexts' to mean different things. Below will cover the use cases of each term (that I'm aware of).

#### Field

- Pave Fields --- Pave has a notion of types having fields, which are covered in [models and their properties](/docs/schemas-and-types/model-types-and-fields) as well as [querying specific fields](/docs/queries/fields).

- Object fields --- Objects, which is the format that essentially every building block of a Pave schema or function are exported in, have certain fields on them, also called keys.

## The Basics

Before any queries can be written, or schemas implemented, it is important to first get an understanding for Pave and it's underlying mechanisms, in order to be able to implement a system around it which works in synergy to take full advantage of Pave's features.


### Summary

Pave is an open-ended querying language written in Javascript (with translations for select alternate languages) that intends to provide a common-ground language of communication between front-end and back-end code.

Pave works in much the same way that any other querying language such as GraphQL would work, minus the confusing classes and type declarations.


### Examples

To get a better understanding of the key differences between Pave and other querying languages, let's take a quick look at a few examples of a Pave client, and an Pave endpoint on an API.


#### Client side

```js
query: {
  user: {
    _args: { id: 123 }
    id: {},
    name: {}
  }
}
```

The key to be noticed above, is that the entire query is represented in Plain Ol' Javascript Objects. Forget translations and conversions between classes and types and whatnot, all queries are sent as an object, and returned as JSON, making ease of use a guarantee and usability painless.


#### Server side

```js
export default {
  type: 'user',
  resolve: ({ args: { id } }) => return { id };
}
```

The example above is a perfect example of Pave's versatility. Above is an example of a relatively general implementation of Pave, but by no means the required format. One could theoretically customize the queried field, arguments, returned values, and every other aspect of this example to the Nth degree to make it fit your personal needs.
