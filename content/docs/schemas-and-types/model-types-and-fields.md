---
layout: docs
title: Model Types and Fields
description: Declare your models and their properties
group: schemas-and-types
aliases:
  - "/docs/schemas-and-types/types-and-fields"
tableOfContents: true
---

## Basic Models

Beyond your basic scalar and other types, your schema will need to have a notion of the different types of models you have available, and their respective fields, in order to have context when processing your query. This is why, as we'll get into in further sections, all [functions](/docs/schemas-and-types/functions) must describe what **type** of model they return.

Because of this, your unique models must be defined in your schema as well, if you intend on referencing them or returning them in any manner through Pave.

## Fields

Fields are the most important characteristic of all non-fundamental types. These fields tell Pave what is queriable in your model, and what type each field is expected to be.

When building your model, there are several potential cases of interesting fields which we'll exhaustively go over just to cover all of our bases.

### Scalars

The first, most common, example is a scalar type. These are pretty straightforward, so we'll keep the example brief

#### Example

```js
// Inside of a user model
export default {
  fields: {
    name: 'string' // Declare a name field, of type string
  }
}
```
<br>

### Complex Types

### Nullables

Nullable vs non-nullable is an important concept in programming at large. Pave is much the same way. As one would want, every Pave model must be incredibly explicit about the potential values of each field, in order to reduce unexpected input or output. The way this is managed in the case of Pave is very simple. Wrapping any value in a `{ nullable: [insert type here] }` object, declares to Pave that the field is nullable.

#### Example
```js
// Inside of a user model
export default {
  fields: {
    name: 'string'
    description: { nullable: 'string' } // Declare a nullable field 'description'
  }
}
```
<br>

### Optionals

Optionals really only have context on functions, and not so much models where usually you'll have the value, it'll either just be null or N. Regardless, if there was some unique case that I'm not thinking of right now where you want a field that's optional, you're technically able to by wrapping the field type in a `{ optional: [insert type here] }` object.

## Advanced Models

As with all other aspects of Pave, the key is customizability, and models are no different. While fields are required for models, there is nothing to say that other fields can be added to suite specific use cases.

A popular use case might be, rate limiting via query costing. In this case, one might assign a unique `cost: [some fixed or computable cost]` property to each model, and check that field on their resolver to implement throttling. 

Another popular use case is to build out some type of dynamically generated documentation site for your API. In order to do this, one might assign a description field to each model, letting the docs generator know what each model is, in some more detail. While these two examples are the most prominent and common types of extra fields added onto models, the potential here is limitless to do with each model as you see fit.


