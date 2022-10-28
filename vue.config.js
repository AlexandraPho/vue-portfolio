const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'assets',
  chainWebpack: config => {
  config.module.rule('downloads')
      // bundle common document files
      .test(/\.(pdf|docx?|xlsx?|csv|pptx?)(\?.*)?$/)
      .use('file-loader')
        // use the file-loader
        .loader('file-loader')
        // bundle into the "downloads" directory
        .options({ name: 'downloads/[name].[hash:8].[ext]' })
  }
})

