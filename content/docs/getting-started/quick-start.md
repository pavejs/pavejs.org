---
layout: docs
title: Quick Start
description: Get Pave setup in your environment in minutes
group: getting-started
aliases:
  - "/docs/getting-started/quick-start"
tableOfContents: true
---

## 5 Minute Setup

This guide will walk you through getting Pave setup and working in your project

### Installation

Getting pave setup and running your environment is easy and painless. Naturally, the first step of setup is to install Pave by declaring it in your package.json file in your project, as shown below.

<div class="rounded border-2 border-gray-200 bg-gray-100 p-3">
<pre>
<span class='text-green-500'>// In your projects package.json</span>
{
  ...
  "dependencies": {
    "pave": "0.10",
  }
}</pre>
</div>

Once this is included in your dependencies, and <strong class="py-1 px-2 bg-gray-100 rounded">npm install</strong> is ran, Pave will now be included in your project.

### Build the Schema

The cornerstore of any querying language is a rigid schema by which your project's models are well defined. This is what we'll build out in the following steps.

The first step is to define your basic scalar types. We have attempted to make this easier by providing a package which includes a lot of the run-of-the-mill scalar types you will want for your project. This package can be included in your project in much the same way as Pave itself; <strong class="py-1 px-2 bg-gray-100 rounded">"pave-basic-types": "1"</strong>

This package, when spread inside of your **/schema/index.js**, as shown below, will provide these basic types, referenced below.

As far as these basic types go, it's up to you as to whether or not you selectively pick and choose which types to use, or whether you just want to use all of them, examples of both are shown below.

#### All

<div class="rounded border-2 border-gray-200 bg-gray-100 p-3">
<pre>
import basicTypes from 'pave-basic-types';<br/>
export default {
  ...basicTypes,
  ...(other, custom, schema types)
}</pre>
</div>
<br/>

#### Selective

<div class="rounded border-2 border-gray-200 bg-gray-100 p-3">
<pre>
import { string, number, object } from 'pave-basic-types';<br/>
export default {
  string,
  number,
  object,
  ...(other, custom, schema types)
}</pre>
</div>


