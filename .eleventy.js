const del = require("del").sync;

const cfg = require("./src/_data/cfg.json")

module.exports = (eleventyConfig) => {
  del(cfg.dir.output);

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter("toISOString", d => new Date(d).toISOString());
  eleventyConfig.addFilter("toLocaleDateString", d => new Date(d).toLocaleDateString());
  eleventyConfig.addFilter("toLocaleTimeString", d => new Date(d).toLocaleTimeString());

  eleventyConfig.addShortcode("docs", (p, label=p) => `<a href="${ new URL(p, "https://www.11ty.dev/docs/").href }" target="_blank" rel="noopener noreferrer">${ label }</a>`);
  eleventyConfig.addShortcode("npm", name => `<a href="${ new URL(name, 'https://www.npmjs.com/package/').href }" target="_blank" rel="noopener noreferrer">${ name }</a>`);

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

  return cfg;
};
