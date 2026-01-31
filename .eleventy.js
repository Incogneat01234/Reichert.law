const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // Pass through static files (map src/ to root)
  eleventyConfig.addPassthroughCopy({"src/styles.css": "styles.css"});
  eleventyConfig.addPassthroughCopy({"src/menu.js": "menu.js"});
  eleventyConfig.addPassthroughCopy({"src/images": "images"});
  eleventyConfig.addPassthroughCopy({"src/*.pdf": "/"});
  eleventyConfig.addPassthroughCopy({"src/*.ico": "/"});
  eleventyConfig.addPassthroughCopy({"src/*.png": "/"});
  eleventyConfig.addPassthroughCopy({"src/*.jpg": "/"});
  eleventyConfig.addPassthroughCopy({"src/robots.txt": "robots.txt"});
  eleventyConfig.addPassthroughCopy({"src/sitemap.xml": "sitemap.xml"});
  eleventyConfig.addPassthroughCopy({"src/.htaccess": ".htaccess"});

  // Date formatting filter
  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // RSS date filter
  eleventyConfig.addFilter("dateToRfc3339", pluginRss.dateToRfc3339);

  // Create a collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("**/blog/posts/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Create a collection for tags
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tags = new Set();
    collectionApi.getAll().forEach(item => {
      if (item.data.tags) {
        item.data.tags.forEach(tag => {
          if (tag !== "posts") tags.add(tag);
        });
      }
    });
    return [...tags].sort();
  });

  return {
    dir: {
      input: "src",
      output: ".",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
