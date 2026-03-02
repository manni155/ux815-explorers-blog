
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("tagline", function() { 
  return '<div class="tagline">A journey across the galaxy described by a sole explorer.</div>';
 });
  eleventyConfig.addShortcode("source", function() {
    return '<div class=source> This content was generated using Google Gemini </div>';
 });
};

  