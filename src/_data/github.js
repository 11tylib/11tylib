const axios = require("axios");

module.exports = async () => {
  const eleventy = await get11tyPackageJson();

  return {
    eleventy,
    liquidjs: { version: eleventy._deps.liquidjs },
    nunjucks: { version: eleventy._deps.nunjucks },
  };
};

async function get11tyPackageJson() {
  const res = await axios.get(
    "https://raw.githubusercontent.com/11ty/eleventy/master/package.json"
  );
  const pkg = res.data;
  pkg._deps = Object.assign({}, pkg.dependencies, pkg.devDependencies);
  return pkg;
}
