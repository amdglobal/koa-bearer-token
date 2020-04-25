module.exports = function(api) {
    api.cache(true);
    return {
      'presets' : [ [ '@babel/preset-env', {'targets' : {'node' : 12}} ] ],
      'plugins' : [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties'
      ]
    };
}
