import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./app"
import AppStore from "stores/app_store/app_store"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "mobx-react"

const store = AppStore.create(window.INITIAL_STATE)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
