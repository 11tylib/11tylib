const axios = require("axios");

main();

async function main() {
  const eleventy = await get11tyPackageJson();
  const deps = Object.assign({}, eleventy.dependencies, eleventy.devDependencies);

  return {
    eleventy: eleventy.version,
    liquidjs: deps.liquidjs,
    nunjucks: deps.nunjucks,
  };
}

async function get11tyPackageJson() {
  const res = await axios.get("https://raw.githubusercontent.com/11ty/eleventy/master/package.json");
  return res.data;
}
