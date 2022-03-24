module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy9("scr/styles");
  eleventyConfig.addPassthroughCopy9("scr/md");
  eleventyConfig.addPassthroughCopy9("scr/media");

  return {
    dir: {
      input: "scr",
      output: "dist",
    },
  };
};
