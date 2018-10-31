console.log('babel config')

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: false,
        },
      },
    ],
    '@babel/preset-react',
  ],
}
