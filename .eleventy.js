const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // Pass through static files (not HTML - those are templates)
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("menu.js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("*.pdf");
  eleventyConfig.addPassthroughCopy("*.ico");
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
  eleventyConfig.addPassthroughCopy(".htaccess");

  // Ignore README.md from being processed
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("node_modules/**");

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
    return collectionApi.getFilteredByGlob("blog/posts/*.md").sort((a, b) => {
      return b.date - a.date; // Sort by date descending
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
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
