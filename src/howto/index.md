---
title: How To Eleventy...
---

Full list of entries tagged with "howto".

Each example is its own folder w/ index.md and link to separate repo (need new org, or keep in pdehaan repos). I almost think a brand new 11tylib org.

- 11tylib/11tylib
- 11tylib/howto-a-b-c
  - .eleventy.js
  - src/
  - www/ (generated output, maybe published to githubpages or vercel and linked from README)
  - README.md

Curious idea, what if we scrape the remote repo's latest /README.md file via raw.github and use that Markdown as the page's contents. Preventd duplication at the cost of extreme site building speeds (unless we bake in some sort of caching using LRU-cache).
