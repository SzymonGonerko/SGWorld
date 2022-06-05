import ReactDOM from "react-dom"
import React, {useState} from "react";
import "./styles.css"
import App from "./App"


function Overlay() {
  const [isReady, setIsReady] = useState(false)

  return (
<>
      {isReady && <App/>}
      <header>SGWorld</header>
      <button onClick={() => setIsReady(true)}>Enter VirtualWorld</button>
      </>
  )
}

ReactDOM.render(<Overlay />, document.getElementById("root"))
