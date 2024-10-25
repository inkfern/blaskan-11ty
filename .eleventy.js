// 11ty configuration

const { DateTime } = require("luxon");


module.exports = eleventyConfig => {
    // const { DateTime } = require("luxon");

    // Copy as is to final site
    eleventyConfig.addPassthroughCopy("./src/styles");
    eleventyConfig.addPassthroughCopy("./src/img");


    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
    });
  
  
    // 11ty defaults
    return {
  
      dir: {
        input: 'src',
        data: "_data",
        includes: '_includes',
        output: '_site'
      }
  
    };

    
  };
  