module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("money", (price=0, locale="en-US", currency="USD")=> `${new Intl.NumberFormat(locale, { style: 'currency', currency }).format(price)} ${currency}`);

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
