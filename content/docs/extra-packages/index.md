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

<div class="rounded border-2 border-gray-200 bg-gray-100 p-3 overflow-x-auto">
<pre>
import basicTypes from 'pave-basic-types';<br/>
export default {
  ...basicTypes,
  ...(other, custom, schema types)
}</pre>
</div>
<br/>

#### Selective

<div class="rounded border-2 border-gray-200 bg-gray-100 p-3 overflow-x-auto">
<pre>
import { string, number, object } from 'pave-basic-types';<br/>
export default {
  string,
  number,
  object,
  ...(other, custom, schema types)
}</pre>
</div>
