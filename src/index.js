import ReactDOM from "react-dom"
import React, {useState} from "react";
import "./styles.css"
import earth from "./icons/earth.svg"
import App from "./App"


function Overlay() {
  const [isReady, setIsReady] = useState(false)

  return (
<>
      {isReady && <App/>}
      
      <header className="header">
        <i className="earthIcon"/>
        <h1 className="logo">SGWorld</h1>
      </header>
        <main className="mainContent">
          <div className="firstContainer">
            <div className="welcome">
              <h2>Welcome</h2>
              <p>Welcome to the SGWorld project. I'm glad you are here! Before we start, check the control system, please</p>
            </div>
            <div className="controls">
              <h2>Controls</h2>
              <div className="wrapperKeyboard">
                <div className="keyboardControls"/>
                <ol>
                  <li>After loaded <strong> click the left button </strong> of your mouse into the screen</li>
                  <li>To move yourself use the <strong> "W", "S", "A", "D", </strong> buttons on your keyboard</li>
                  <li>To get out of control mood click <strong>"ESC"</strong> escape on your keyboard</li>
                  <li>Enjoy !</li>
                </ol>
            </div>
              
              
            </div>
          </div>
          <div className="secContainer">
            <p className="knockKnock">knock...  knock...</p>
            <button className="btnEnter" onClick={() => setIsReady(true)}><strong>come in !</strong></button>
          </div>
          <div className="copyright">SGWorld&#169; created by Szymon Gonerko. All rights reserved</div>
        </main>
   
      
      </>
  )
}

ReactDOM.render(<Overlay />, document.getElementById("root"))
