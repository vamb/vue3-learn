const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: { //配置完代理后需要重启服务
      '/api': {
        target: 'http://iwenwiki.com/',
        changeOrigin: true
      }
    }
  }
})
