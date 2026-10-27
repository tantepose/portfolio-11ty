import embedEverything from "eleventy-plugin-embed-everything";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("bilder");

    eleventyConfig.addPlugin(embedEverything, {
        add: ['soundcloud']
    });
};