const path = require('path');
module.exports = {
  runtimeCompiler: true,
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, 'js/'),
      '@': path.resolve(__dirname, "dist/"),
      'Components': path.resolve(__dirname, 'dist/components/'),
      'Constants': path.resolve(__dirname, 'dist/constants/'),
      'Container': path.resolve(__dirname, 'dist/container/'),
      'Helpers': path.resolve(__dirname, 'dist/helpers/'),
      'Assets': path.resolve(__dirname, 'dist/assets/'),
      'Themes': path.resolve(__dirname, 'dist/themes/'),
      'Views': path.resolve(__dirname, 'dist/views/'),
      'lib': path.resolve(__dirname, 'dist/lib/'),
    }
  }
}