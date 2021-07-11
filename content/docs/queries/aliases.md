---
layout: docs
title: Aliases
description: Pave makes aliasing fields easy and straight forward
group: queries
aliases:
  - "/docs/queries/aliases"
tableOfContents: true
---

## Aliasing Fields

Because of the POJO nature of Pave, the only requirements to alias fields is simply another key on a query object. When provided, Pave will take that as the name of the queried type, as demonstrated below.

<div class="rounded border-2 border-gray-200 bg-gray-100 p-3 overflow-x-auto">
<pre>
<span class='text-green-500'>// Query user, but with an alias</span>
query: {
  myModelNameHere: { 
    _field: 'user'
    _args: { id: 123 }
    id: {},
    name: {}
  }
}</pre>
</div>
<br><br>

### Application

This is particularly useful in cases where you need to query the same field twice in the same request, at the same level. The example shown below, of how one might attempt to create two of the same model types, will **not** work as intended.

#### Invalid Example

<div class="rounded border-2 border-gray-200 bg-gray-100 p-3 overflow-x-auto">
<pre>
query: {
  createUser: { 
    _args: { 
      name: 'John Doe',
    }
  },
  createUser: { 
    _args: { 
      name: 'Jane Doe',
    }
  }
}</pre>
</div>

This same example could be requested successfully, by employing the help of aliases.

#### Valid Example

<div class="rounded border-2 border-gray-200 bg-gray-100 p-3 overflow-x-auto">
<pre>
query: {
  createUserA: { 
    _field: 'createUser',
    _args: { 
      name: 'John Doe',
    }
  },
  createUserB: { 
    _field: 'createUser',
    _args: { 
      name: 'Jane Doe',
    }
  }
}</pre>
</div>