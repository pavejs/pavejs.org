---
layout: docs
title: Structure
description: Explanation of Pave Schema Structure
group: schemas-and-types
aliases:
  - "/docs/schemas-and-types/structure"
tableOfContents: true
---

## A System of Models

It's been quite obvious thus far that Pave, in accordance with the standard set by many other querying languages, is strongly based on the idea of intrinsic model types, and the notion that said models have fields.

### Schema Location

All externally interactive types (i.e., types which are expected to be queried and results returned) on the API are stored in a special schema type named `root`. This schema type will export all fields that will be externally interactive.

#### Root Export Example

```js
import createUser from './create-user.js';

export default {
  type: {
    fields: {
      createUser
    }
  },
  resolve: async ({ value }) => value
}
```
<br>

#### Schema Export Example

```js
import types from 'pave-basic-types';

import root from './root/index.js';

export default {
  ...types,
  root
}
```