module.exports = {
  publicPath: process.env.CI_JOB_NAME === 'pages'
    ? '/joinpeertube/'
    : ''
}
