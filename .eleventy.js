const eleventySass = require("eleventy-sass");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventySass);

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
