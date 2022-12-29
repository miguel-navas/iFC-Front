const proxy = [
    {
      context: '/api',
      target: 'https://localhost:5001',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;

  