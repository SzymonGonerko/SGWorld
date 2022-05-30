
import ReactDOM from "react-dom"
import React, {useState, createContext, useEffect} from "react";
import "./styles.css"
import App from "./App"

export const AppContext = createContext({})

function Overlay() {
  const [state, setState] = useState({
    ready: false
  })

  return (
    <AppContext.Provider value={{state, setState}}>
      {state.ready && <App/>}
      <div className={`fullscreen bg ${state.ready ? "ready" : "notready"} ${state.ready && "clicked"}`}>
        <div className="stack">
          <button onClick={() => setState((prev) => ({...prev, ready: true}))}>Click (needs fullscreen)</button>
        </div>
      </div>
    </AppContext.Provider>
  )
}

ReactDOM.render(<Overlay />, document.getElementById("root"))
