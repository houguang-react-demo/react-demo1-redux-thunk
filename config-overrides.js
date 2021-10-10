//config-overrides.js
const {override, addBabelPlugins} = require('customize-cra');

module.exports = override(
    //...

    //增加配置
    addBabelPlugins([
        "@babel/plugin-proposal-decorators",
        {
            legacy:true
        }
    ])
);