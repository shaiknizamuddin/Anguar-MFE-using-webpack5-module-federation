const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const CopyPlugin = require('copy-webpack-plugin');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "host",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      // name: "host",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './/src/app/app.component.ts',
      // },        

      // For hosts (please adjust)
      remotes: {
        // "remote1": "remote1@http://localhost:4300/remote1Entry.js",
        // "remote2": "remote2@http://localhost:4400/remote2Entry.js",
        // "remote3": "remote3@http://localhost:4500/remote3Entry.js",

      },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        ...sharedMappings.getDescriptors()
      })

    }),
    // new CopyPlugin({
    //   patterns: [
    //     // {from:'remote1/src/assets' , to:'assets'},
    //     { from: images, to: 'assets' }
    //   ]
    // }),
    sharedMappings.getPlugin()
  ],
};
