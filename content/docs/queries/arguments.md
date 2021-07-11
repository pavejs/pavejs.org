---
layout: docs
title: Arguments
description: Provide information to your query
group: queries
aliases:
  - "/docs/queries/arguments"
tableOfContents: true
---

## [Some Header]

Every querying language would be a hollow shell if not for the ability to provide arguments to the query. These properties are what can be read and resolved on the server side of your queried function.

<div class="rounded border-2 border-gray-200 bg-gray-100 p-3 overflow-x-auto">
<pre>
<span class='text-green-500'>// Query fn createUser, with arguments</span>
query: {
  createUser: { 
    _args: { 
      name: 'John Doe',
      address: '1600 Pennsylvania Ave.',
      emailAddress: 'jdoe@example.com'  
    }
  }
}</pre>
</div>