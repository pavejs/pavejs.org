---
layout: docs
title: Extra Packages
description: First party utility packages 
group: extra-packages
aliases:
  - "/docs/extra-packages"
tableOfContents: true
---

## List of Packages

- [pave-basic-types --- A set of basic types for your schema](/docs/extra-packages/#pave-basic-types)

<br>

## pave-basic-types

The pave-basic-types package provides a out-of-the-box set of scalar types for jumpstarting your schema construction. Instead of writing boilerplate types such as string, int, or otherwise, just import this package via your package.json and extract either all of it or just what you need.

### Examples

#### All

```js
import basicTypes from 'pave-basic-types';

export default {
  ...basicTypes,
  ...(other, custom, schema types)
}
```
<br/>

#### Selective

```js
import basicTypes from 'pave-basic-types';

const { string, number, object } = basicTypes;

export default {
  string,
  number,
  object,
  ...(other, custom, schema types)
}
```
