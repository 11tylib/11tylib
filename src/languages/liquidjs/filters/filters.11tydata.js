module.exports = {
  categories: [
    {
      name: "Array",
      filters: [
        { name: "first", desc: "Returns the first item of an array." },
        {
          name: "join",
          desc:
            "Combines the items in an array into a single string using the argument as a separator.",
        },
        { name: "last", desc: "Returns the last item of an array." },
        {
          name: "map",
          desc:
            "Creates an array of values by extracting the values of a named property from another object.",
        },
        {
          name: "reverse",
          desc:
            "Reverses the order of the items in an array. reverse cannot reverse a string.",
        },
        {
          name: "size",
          desc:
            "Returns the number of characters in a string or the number of items in an array.",
        },
        {
          name: "slice",
          desc:
            "Returns a substring of 1 character beginning at the index specified by the first argument. An optional second argument specifies the length of the substring to be returned. String indices are numbered starting from 0.",
        },
        {
          name: "sort",
          desc: "Sorts items in an array in case-sensitive order.",
        },
        {
          name: "sort_natural",
          desc: "Sorts items in an array in case-insensitive order.",
        },
        { name: "uniq", desc: "Removes any duplicate elements in an array." },
        {
          name: "where",
          desc:
            "Creates an array including only the objects with a given property value, or any [truthy](https://liquidjs.com/tutorials/truthy-and-falsy.html) value by default.",
        },
      ],
    },
    {
      name: "Date",
      filters: [
        {
          name: "date",
          desc:
            "Converts a timestamp into another date format. LiquidJS tries to be conformant with Shopify/Liquid which is using Ruby’s core [Time#strftime(string)](http://www.ruby-doc.org/core/Time.html#method-i-strftime). The input is firstly converted to Date object via [`new Date()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date).",
        },
      ],
    },
    {
      name: "General",
      filters: [
        {
          name: "default",
          desc:
            "Allows you to specify a fallback in case a value doesn’t exist. `default` will show its value if the left side is [falsy](https://liquidjs.com/tutorials/truthy-and-falsy.html) or empty (string or Array).",
        },
        {
          name: "json",
          desc:
            "Convert values to string via `JSON.stringify()`, for debug purposes.",
        },
      ],
    },
    {
      name: "HTML/URI",
      filters: [
        {
          name: "escape",
          desc:
            "Escapes a string by replacing HTML special characters with escape sequences. It doesn’t change strings that don’t have anything to escape.",
        },
        {
          name: "escape_once",
          desc:
            "Escapes a string without changing existing escaped entities. It doesn’t change strings that don’t have anything to escape.",
        },
        {
          name: "newline_to_br",
          desc:
            "Replaces every newline (`\n`) in a string with an HTML line break (`<br/>`).",
        },
        { name: "strip_html", desc: "Removes any HTML tags from a string." },
        {
          name: "url_decode",
          desc: "Decodes a string that has been encoded as a URL.",
        },
        {
          name: "url_encode",
          desc:
            "Converts any URL-unsafe characters in a string into percent-encoded characters.",
        },
      ],
    },
    {
      name: "Math",
      filters: [
        {
          name: "abs",
          desc: "Liquid filter that returns the absolute value of a number.",
        },
        { name: "at_least", desc: "Limits a number to a minimum value." },
        { name: "at_most", desc: "Limits a number to a maximum value." },
        {
          name: "ceil",
          desc:
            "Rounds the input up to the nearest whole number. LiquidJS tries to convert the input to a number before the filter is applied.",
        },
        {
          name: "divided_by",
          desc:
            "Divides a number by another number. The result is the string obtained by JavaScript `.toString()` of the result number.",
        },
        {
          name: "floor",
          desc:
            "Rounds the input down to the nearest whole number. LiquidJS tries to convert the input to a number before the filter is applied.",
        },
        { name: "minus", desc: "Subtracts a number from another number." },
        {
          name: "modulo",
          desc: "Returns the remainder of a division operation.",
        },
        { name: "plus", desc: "Adds a number to another number." },
        {
          name: "round",
          desc:
            "Rounds a number to the nearest integer or, if a number is passed as an argument, to that number of decimal places.",
        },
        { name: "times", desc: "Multiplies a number by another number." },
      ],
    },
    {
      name: "Object",
      filters: [
        {
          name: "map",
          desc:
            "Creates an array of values by extracting the values of a named property from another object.",
        },
      ],
    },
    {
      name: "String",
      filters: [
        {
          name: "append",
          desc: "Concatenates two strings and returns the concatenated value.",
        },
        {
          name: "capitalize",
          desc: "Makes the first character of a string capitalized.",
        },
        {
          name: "downcase",
          desc:
            "Makes each character in a string lowercase. It has no effect on strings which are already all lowercase.",
        },
        {
          name: "lstrip",
          desc:
            "Removes all whitespace (tabs, spaces, and newlines) from the left side of a string. It does not affect spaces between words.",
        },
        {
          name: "prepend",
          desc: "Adds the specified string to the beginning of another string.",
        },
        {
          name: "remove",
          desc:
            "Removes every occurrence of the specified substring from a string.",
        },
        {
          name: "remove_first",
          desc:
            "Removes only the first occurrence of the specified substring from a string.",
        },
        {
          name: "replace",
          desc:
            "Replaces every occurrence of the first argument in a string with the second argument.",
        },
        {
          name: "replace_first",
          desc:
            "Replaces only the first occurrence of the first argument in a string with the second argument.",
        },
        {
          name: "rstrip",
          desc:
            "Removes all whitespace (tabs, spaces, and newlines) from the right side of a string. It does not affect spaces between words.",
        },
        {
          name: "size",
          desc:
            "Returns the number of characters in a string or the number of items in an array.",
        },
        {
          name: "split",
          desc:
            "Divides a string into an array using the argument as a separator. `split` is commonly used to convert comma-separated items from a string to an array.",
        },
        {
          name: "strip_newlines",
          desc: "Removes any newline characters (line breaks) from a string.",
        },
        {
          name: "strip",
          desc:
            "Removes all whitespace (tabs, spaces, and newlines) from both the left and right sides of a string. It does not affect spaces between words.",
        },
        {
          name: "truncate",
          desc:
            "Shortens a string down to the number of characters passed as an argument. If the specified number of characters is less than the length of the string, an ellipsis (…) is appended to the string and is included in the character count.",
        },
        {
          name: "truncatewords",
          desc:
            "Shortens a string down to the number of words passed as an argument. If the specified number of words is less than the number of words in the string, an ellipsis (…) is appended to the string.",
        },
        {
          name: "upcase",
          desc:
            "Makes each character in a string uppercase. It has no effect on strings which are already all uppercase.",
        },
      ],
    },
  ],
};
