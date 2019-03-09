module.exports = config => {
  require('react-app-rewire-postcss')(config, {
     plugins: loader => [
      // require('postcss-preset-env')()
      require('rucksack-css')()
    ]
  });
  return config;
};
