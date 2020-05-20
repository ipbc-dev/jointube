module.exports = {
  publicPath: process.env.CI_JOB_NAME === 'pages' ? '/joinpeertube/' : '/',

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/help',
        '/news',
        '/instances',
        '/hall-of-fame',
        '/faq',
        '/roadmap',
        '/content-selections',
        '/en_US',
        '/fr_FR',
        '/de',
        '/es',
        '/it',
        '/pl',
        '/pt_BR',
        '/ru',
        '/sv',
        '/en',
        '/fr',
        '/pt'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
