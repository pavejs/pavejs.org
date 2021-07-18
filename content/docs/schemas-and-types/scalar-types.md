---
layout: docs
title: Scalar Types
description: The building blocks of queries and models
group: schemas-and-types
aliases:
  - "/docs/schemas-and-types/scalar-types"
tableOfContents: true
---

## Overview

All returned fields under models and even other types must be made up of basic scalar types. Scalar types are only required to possess a single field, `resolve`, which is applied to values assigned to that type to format, validate, or otherwise transform it to fit a normalized type.

While a `resolve` field on a scalar type schema object is all that's required, scalar types also support `typeArgs` which are arguments which can be passed to the resolve function for additional situational validation or transformation.

## Arguments (typeArgs)

While less common, certain scalar types call for the provision of arguments to bound the potential values and support additional validation. A common case of this might be in an `enum` or `array` scalar type, where you might want to limit the maximum length of the array provided.

With Pave, doing such a limitation is simple, and allowed for through this field.

In much the same way as [functions](/docs/schemas-and-types/functions) works, you can setup provided arguments, and expect them in the format described being passed to the resolve function.

#### Example

```js
export default {
  args: {
    max: { nullable: 'int' },
    min: { nullable: 'int' }
  },
  resolve: ({ args: { max, min }, value }) => {
    ...
  }
}
```

## Resolve

Scalar types, being basic by nature, only contain within the `resolve` function the required transformations and validation necessary to verify a provided value as valid.

Below is a quick example, picked from the package [pave-basic-types](/docs/extra-packages/#pave-basic-types), which displays this validation and transformation.

#### Example 1

```js
const TRUE_VALUES = ['true', 'yes', '1', 'y', 't'];
const FALSE_VALUES = ['false', 'no', '0', 'n', 'f'];

export default {
  resolve: ({ value }) => {
    if (typeof value === 'boolean') return value;

    if (typeof value === 'string') {
      value = value.trim().toLowerCase();

      if (TRUE_VALUES.indexOf(value) !== -1) return true;
      if (FALSE_VALUES.indexOf(value) !== -1) return false;
    }
    
    if (typeof value === 'number' && (value === 1 || value === 0)) return value === 1; 

    throw new Error(`Expected a value of type Boolean but was provided value ${JSON.stringify(value)}`);
  }
}
```

While the boolean type coerces other values to a simple Boolean instance, this is just referenced as an example of a more involved scalar type, that both validates, and transforms a variety of values to a normalized and consistent instance/type/value.

As a secondary example, of a more basic (and more common) scalar type resolve, here's the validation for a `time` type from the same package referenced earlier.

#### Example 2

```js
export default {
  resolve: ({ value }) => {
    if (typeof value === 'string' && !value.trim()) return null;

    const strDate = (value instanceof Date ? value : new Date(`0000-01-01T${value}`)).toJSON();
    if (strDate) return strDate.slice(11, -1);

    throw new Error(`Expected a value of type Time but was provided value ${JSON.stringify(value)}`);
  }
}
```

This example displays the more common function of the resolve function on scalar types, which is simply validation.