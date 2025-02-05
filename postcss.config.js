module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // px -> rpx
    'postcss-pxtransform': {
      platform: 'weapp',
      // 1px -> 2rpx
      designWidth: 375,
      deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
        375: 2 / 1,
      },
    },
    // rem -> rpx
    'postcss-rem-to-responsive-pixel': {
      // 1rem -> 32rpx
      rootValue: 32,
      propList: ['*'],
      transformUnit: 'rpx',
    },
  },
}
