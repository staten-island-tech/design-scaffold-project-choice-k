module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy9("styles");

  return {
    dir: {
      input: "scr",
      output: "dist",
    },
  };
};
