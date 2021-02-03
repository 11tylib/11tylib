// const { eleventy } = require("./src/_data/npm");

module.exports = (eleventyConfig) => {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter("toISOString", d => new Date(d).toISOString());
  eleventyConfig.addFilter("toLocaleDateString", d => new Date(d).toLocaleDateString());
  eleventyConfig.addFilter("toLocaleTimeString", d => new Date(d).toLocaleTimeString());

  eleventyConfig.addShortcode("docs", (p, label=p) => `<a href="${ new URL(p, "https://www.11ty.dev/docs/").href }">${ label }</a>`);
  eleventyConfig.addShortcode("npm", name => `<a href="${ new URL(name, 'https://www.npmjs.com/package/').href }">${ name }</a>`);

  eleventyConfig.addShortcode("gitclone", (repo) => {
    if (!repo) {
      return "";
    }
    return [
      "<aside><pre><code>",
      `git clone https://github.com/${ repo }.git`,
      "</code></pre></aside>"
    ].join("\n");
  });

  eleventyConfig.addShortcode("time", date => {
    const toISOString = eleventyConfig.getFilter("toISOString");
    const toLocaleDateString = eleventyConfig.getFilter("toLocaleDateString");
    return `<time datetime="${ toISOString(date) }">${ toLocaleDateString(date) }</time>`;
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
