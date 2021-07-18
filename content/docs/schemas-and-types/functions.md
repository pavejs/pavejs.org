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

A type can be in two formats; a defined type from the schema, or an explicit definition of the available fields. The former is generally the correct way that you'll want to define a functions return type, but in the case of one-off functions that return a unique shape, you'll likely want to define a one-off return type and/or fields.

#### Schema Type Example

```js
// A function to query for details about a specific user
export default {
  args: { id: 'int' },
  type: { nullable: 'user' }, // Will return a user model, unless there is no user with the provided ID
  ...
}
```

#### Explicit Example

```js
// A function which calls an outside API for weather data
export default {
  args: { 
    lat: { 
      type: 'number',
      typeArgs: { gte: -90, lte: 90 }
    },
    lng: { 
      type: 'number',
      typeArgs: { gte: -180, lte: 180 }
    }
  },
  type: { 
    nullable: { // Dictates that this function can return null, in the case of invalid lat/lng
      fields: {
        average: 'number',
        high: 'number',
        low: 'number'
      }
    }
  },
  ...
}
```

### Resolve

**The actual function to process/get the arguments and return a value**

As the summary and the name of the field indicate

