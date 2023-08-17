const path = require('path');

module.exports = {
  // Your existing webpack configuration...
  resolve: {
    fallback: {
      url: require.resolve('url/'),
    },
  },
};
