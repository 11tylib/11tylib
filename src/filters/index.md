---
title: Eleventy Filters
---

Eleventy **v0.11.1** includes **6** default {% docs "filters/universal-filters", "universal filters" %}:

- {% docs "filters/url", "`url`" %}: Works with the {% docs "config/#deploy-to-a-subdirectory-with-a-path-prefix", "`pathPrefix`" %} configuration option to properly normalize absolute paths in your content with the `pathPrefix` added.
- {% docs "filters/slug", "`slug`" %}: Uses the {% npm "slugify" %} npm package to convert a string into a URL slug. Can be used in pagination or permalinks.
- {% docs "filters/log", "`log`" %}: An easy way to `console.log` anything from inside of a template file.
- {% docs "filters/collection-items", "`getPreviousCollectionItem`" %}: Fetch the previous item in a collection when you pass in the current `page` object.
- {% docs "filters/collection-items", "`getNextCollectionItem`" %}: Fetch the next item in a collection when you pass in the current `page` object.
- {% docs "filters/collection-items", "`getCollectionItem`" %}: Fetches the current page from a collection.

Custom filters can be added using the universal {% docs "filters/universal-filters", "`.addFilter()`" %} which will make the filter available to the following template engines:

- {% docs "languages/liquid", "Liquid" %}
- {% docs "languages/nunjucks", "Nunjucks" %}
- {% docs "languages/javascript", "JavaScript (.11ty.js)" %}
- {% docs "languages/handlebars", "Handlebars" %}

Or, filters can be added for a _specific_ template engines using the following methods in your .eleventy.js configuration file:

- `.addLiquidFilter()`
- `.addNunjucksFilter()`
- `.addJavaScriptFunction()`
- `.addHandlebarsHelper()`

Existing filters can be accessed from within custom shortcodes via {% docs "filters/access-existing-filters", "`.getFilter(name)()`" %}.
