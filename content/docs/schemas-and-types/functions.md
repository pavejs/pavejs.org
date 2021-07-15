---
layout: docs
title: Functions
description: Create, update, delete, or otherwise via functions.
group: schemas-and-types
aliases:
  - "/docs/schemas-and-types/functions"
tableOfContents: true
---

## Structure

All functions have a set of fields which are required by Pave in order to provide arguments, validate return, and resolve the function itself. These fields are as follows:

### Arguments (args)

**A dictionary of key-value pairs following field:type structure**

These arguments will reappear in your resolve fn, a separate field on the function, in the format you described. In this manner, you can also define args as optional or nullable, with an important distinction between the two.

- Optional --- Arg can either not exist on query, or have a value.

- Nullable --- Arg can not exist on the query, which will be interpretted as null, or have a value.

The distinction between these two is that for things such as updating functions, where you want to make a distinction between somebody wanting to update a value to null, and not wanting to update it at all, you would want to declare that argument as both optional and nullable in order to cover all cases.

#### Example

```js
// An update function of a user by ID
export default {
  args: { 
    id: 'int', // A simple argument and type
    name: { optional: 'string' }, // An optional field
    description: { optional: { nullable: 'string' } } // An optional and nullable field
  },
  ...
}
```
<br>

### Type

**An expected return format of the function**

This

#### Example

```js
// An update function of a user by ID
export default {
  args: { 
    id: 'int', // A simple argument and type
    name: { optional: 'string' }, // An optional field
    description: { optional: { nullable: 'string' } } // An optional and nullable field
  },
  ...
}
```