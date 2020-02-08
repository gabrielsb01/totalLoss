import 'normalize.css'
import '@assets/css/general.css'
import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './core/store'
import App  from './app'



declare var module: any
const root = document.querySelector('app')


render(
  <AppContainer errorReporter={Redbox}>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  root
)

if (module.hot) {
  module.hot.accept('./pages', () => {
    render(
      <AppContainer errorReporter={Redbox}>
        <Provider store={store}>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
        </Provider>
      </AppContainer>,
      root
    )
  })
}
