---
layout: docs
title: Scalar Types
description: The building blocks of queries and models
group: schemas-and-types
aliases:
  - "/docs/schemas-and-types/scalar-types"
tableOfContents: true
---

## Structure

All returned fields under models and even other types must be made up of basic scalar types. Scalar types are only required to possess a single field, `resolve`, which is applied to values assigned to that type to format, validate, or otherwise transform it to fit a normalized type.