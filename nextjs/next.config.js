module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?[hash]',
            emitFile: false,
            publicPath: '/',
          },
        },
      ],
    });
    return config;
  },
  images: {
    disableStaticImages: true,
  },
  exportPathMap: function () {
    return {
      '/homepage': { page: '/homepage' },
      '/page2-hello': { page: '/page2', query: { text: 'hello' } },
      '/page2-world': { page: '/page2', query: { text: 'world' } },
    };
  },
};
