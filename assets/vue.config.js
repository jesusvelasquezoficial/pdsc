const path = require('path');
module.exports = {
  runtimeCompiler: true,
  extensions: ['.js', '.json', '.vue'],
  modules: [path.join(__dirname, 'src'), 'node_modules'],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // 'vue$': 'vue/dist/vue.common.js',
      // 'src': path.resolve(__dirname, 'js/'),
      '@': path.resolve(__dirname, "src/"),
      'Components': path.resolve(__dirname, 'src/components/'),
      'Constants': path.resolve(__dirname, 'src/constants/'),
      'Container': path.resolve(__dirname, 'src/container/'),
      'Helpers': path.resolve(__dirname, 'src/helpers/'),
      'Assets': path.resolve(__dirname, 'src/assets/'),
      'Themes': path.resolve(__dirname, 'src/themes/'),
      'Template': path.resolve(__dirname, 'src/views/'),
      'lib': path.resolve(__dirname, 'src/lib/'),
    }
  }
}