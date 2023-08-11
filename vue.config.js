const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://69ci238615.imdo.co',
  //       changeOrigin: true,
  //       pathRewrite: {  
  //         '^/api': 'https://69ci238615.imdo.co'  
  //       }
  //     }
  //   },
  // }
})
