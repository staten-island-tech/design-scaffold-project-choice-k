module.exports = function {eleventyConfig} {
    eleventyConfig.addPassthroughCopy{"scr/style"}
    eleventyConfig.addPassthroughCopy{"scr/style"}
    eleventyConfig.addPassthroughCopy{"scr/style"}
    return{
        dir:{
            input: "scr",
            output: "dist",
        },
    };
};
