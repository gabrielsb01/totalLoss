const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('../webpack.config')
const chalk = require('chalk')

const port = 3333;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  open: `http://localhost:${port}`,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}).listen(port, 'localhost', (err) => {

  if (err) {
    console.log(chalk.red(err))
  }

  console.log(chalk.green(`Listening at port ${port}, in ${process.env.NODE_ENV} mode.`))
})

