module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      librayDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
