---
title: Get started with Markdoc
description: How to get started with Markdoc
cover: /images/martin-sanchez-gD3dUQpMlvk-unsplash.jpg
---
## Get started with Markdoc
Markdoc is a static site generator that uses Markdown files as input and outputs HTML files.
Markdoc features several core concepts which include:
- **Nodes**:
 These are the elements that Markdoc inherits from Markdown
- **Tags**:
 Tags are the main syntactic extension that Markdoc adds on top of Markdown.   Similar to HTML, each tag is enclosed with `{%` and `%}` and includes the tag name, attributes, and the content body.
- **Annotations**:
 These can be added to nodes to customize how they are rendered
### Installation
To install markdoc in Next.js, run the following command:
```bash
npm install @markdoc/next.js @markdoc/markdoc
```
## Background
Markdoc was built by [Stripe](https://stripe.com/) to power their developer documentation.

{%infobox title="Hey there!" type="info"%}
Here's some info for you!
{%/infobox%}

{%infobox title="Hey there!" type="warning"%}
Here's a warning for you!
{%/infobox%}

{%infobox title="Hey there!" type="error"%}
Here's an error for you!
{%/infobox%}

> Is there such an element as a "blockquote"?

The title of this page is: **{% $markdoc.frontmatter.title %}**, after all.

{% partial file="BikePromo.md" /%}

{% if includes($markdoc.frontmatter.title, "LLamas") %}
> This page is about Llamas.
{% else /%}
> This page is not about LLamas.
{% /if %}

![image](/vercel.svg)

A button?

{% alertbutton %}
Thanks for visiting!
{% /alertbutton %}

## Test your knowledge!

{% question
   question="What is the capital of France?"
   answer="Paris"
   choices=["London", "Paris", "Berlin", "Madrid"]
/%}

## What about glossary terms?

I don't know. What is a {% glossaryterm term="glossary" /%}, anyway?