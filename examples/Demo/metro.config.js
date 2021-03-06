/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const libSourceDir = path.resolve(__dirname, '../../src/');
console.log(`======, ${libSourceDir}`);

module.exports = {
  watchFolders: [libSourceDir],

  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          // console.log('= ', name);
          return path.join(__dirname, `node_modules/${name}`);
        },
      },
    ),
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
