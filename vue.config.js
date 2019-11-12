module.exports = {
  publicPath: process.env.GITLAB_CI
    ? '/joinpeertube/'
    : '/'
}
