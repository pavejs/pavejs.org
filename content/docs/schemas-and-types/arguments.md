---
layout: docs
title: Arguments
description: Customize and santize values with custom arguments
group: schemas-and-types
aliases:
  - "/docs/schemas-and-types/arguments"
tableOfContents: true
---

## Argument Modifiers

These arguments will reappear in your resolve fn, a separate field on the function, in the format you described. In this manner, you can also define args as optional and/or nullable, with an important distinction between the two.

- Optional (optional) --- Arg can either not exist on query, or have a value.

- Nullable (nullable) --- Arg can not exist on the query, which will be interpretted as null, or have a value.

- Default Value (defaultValue) --- Arg will be given the specified default value if no value is passed. (This makes nullable redundant)

The distinction between these two is that for things such as updating functions, where you want to make a distinction between somebody wanting to update a value to null, and not wanting to update it at all, you would want to declare that argument as both optional and nullable in order to cover all cases.

As implied above, these two modifiers are chainable to define an argument as both nullable and optional, which is particular useful for cases such as updating a user, where a field such as a user's bio can be updated to be empty (nullable), or not updated in that call at all (optional).

#### Examples

Below, sticking with the common theme of a call to update a user, outlines how arguments can be specified using both optional and nullable.
```js
// update-user.js (or something similar)
export default {
  args: {
    username: { optional: 'string' } // username is optional, but if provided it must have a value
    bio: { optional: { nullable: 'string' } } // bio is also optional, but can be passed the value null
  }
}
```

Below is an example of a use case for defaultValue, where the definition is of a create user function.
```js
// create-user.js (or similar)
export default {
  args: {
    username: 'string',
    receiveEmailNotifications: { type: 'bool', defaultValue: true } // Defaults the value to be true if arg isn't passed by caller
  }
}
```


## Field Arguments

In most cases, you'll want to define arguments which are required to be passed when querying certain fields, particular create, update, or delete functions. This is handled through the `args` key on the field definitions.

#### Example

This is an example of an update field for an arbitrary "user" type, with arguments for each field that can be updated.
```js
export default {
  args: { 
    username: { optional: 'string' },
    emailAddress: { optional: 'string' },
    password: { optional: 'string' }
  }
  ...
}
```

These arguments can then be accessed in the resolve function on this imaginary update field by destructuring the `args` prop, as shown below.

```js
export default {
  ...(the args object shown above),
  resolve: ({ args: { username, emailAddress, password } }) => {
    // resolve here
  }
}
```

## Type Arguments

In the same vein of all other aspects of Pave, schema types are extensible to accept custom arguments when queried. This functionality is achieved in the same manner that it is done on fields.

#### Example

Below is an example of a schema type which accepts a few arguments:
```js
// Some string type definition, say defined in the schema as the type, "string"
export default {
  args: {
    maxLength: { nullable: 'int' },
    minLength: { nullable: 'int' },
  },
  resolve: ({ args: { maxLength, minLength }, value }) => {
    if (maxLength && value.length > maxLength) {
      throw new Error(`Expected string value to be shorter than ${maxLength} characters.`)
    }
    if (minLength && value.length < minLength) {
      throw new Error(`Expected string value to be longer than ${minLength} characters.`)
    }
    return value;
  }
}
```

#### Usage

When referencing this type in other places, in order to use these arguments, you'll pass them in via the `typeArgs` key.

Below is an example of usage of the type described above, with usage of the `maxLength` and `minLength` arguments.

```js
// Some root field to update a user, let's say
export default {
  args: {
    username: { 
      optional: { 
        type: 'string', 
        typeArgs: { minLength: 10, maxLength: 100 } 
      } 
    }
  },
  ...
}
```

