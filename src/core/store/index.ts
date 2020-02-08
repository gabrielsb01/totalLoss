import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import reducers from '@core/store/reducers'
import sagas from '@core/store/sagas'

declare var window: any

const middlewares = []

const browserHistory: any = createBrowserHistory({})

middlewares.push(routerMiddleware(browserHistory))
const sagaMiddleware: any = createSagaMiddleware()
middlewares.push(sagaMiddleware)
// add support for Redux dev tools
const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware: any = composeEnhancers(applyMiddleware(...middlewares))
const store: any = createStore(reducers, middleware)
//const history: any = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(sagas)

export { store }
