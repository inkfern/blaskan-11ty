// 11ty configuration

const { DateTime } = require("luxon");
// const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");


module.exports = async function(eleventyConfig) {
    // const { DateTime } = require("luxon");
    const {EleventyRenderPlugin, EleventyI18nPlugin, EleventyHtmlBasePlugin} = await import("@11ty/eleventy");

    // Copy as is to final site
    eleventyConfig.addPassthroughCopy("./src/styles");
    eleventyConfig.addPassthroughCopy("./src/img");


    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
    });
  
  
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    // 11ty defaults
    return {
  
      dir: {
        input: 'src',
        data: "_data",
        includes: '_includes',
        output: '_site'
      },
      pathPrefix: "/blaskan-11ty/"
  
    };

    
  };
  