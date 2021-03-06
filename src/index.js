import ReactDOM from "react-dom"
import React, {useState} from "react";
import "./styles.css"
import App from "./App"


function Overlay() {
  const [isReady, setIsReady] = useState(false)

  return (
<>
      {isReady && <App/>}
      

        <main className="mainContent">


          <header className="header">
            <i className="earthIcon"/>
            <h1 className="logo">SGWorld</h1>
          </header>


          <div className="mobileVersion">
            <i className="iconDesktop"/>
            <p>
              The project SGWorld does not support the mobile device. This app requires a access to keyboard and mouse to control virtual reality. Please, use your laptop or PC.
            </p>
          </div>


        <section className="sectionContainers">


          <div className="firstContainer">
            <div className="welcome">
              <h2>Hello !</h2>
              <p>Welcome to the SGWorld project. It's geometric reflection of my living space and real existing things connected with fantasise elements. Before we start, check the controls.</p>
            </div>
            <div className="controls">
              <h2>Controls</h2>
              <div className="wrapperKeyboard">
                <div className="keyboardControls"/>
                <ol>
                  <li>After loaded <strong> click the left button </strong> of your mouse into the screen</li>
                  <li>To move yourself use the <strong> "W", "S", "A", "D", </strong> buttons on your keyboard</li>
                  <li>To get out of control mood and check some links click <strong>"ESC"</strong> escape on your keyboard</li>
                  <li>Enjoy !</li>
                </ol>
              </div>
            </div>
          </div>



          <div className="secContainer">
            <a className="btnEnter" onClick={() => setIsReady(true)}><i className="enterIcon"/><strong> enter</strong> </a>
          </div>


          </section>

          <div className="copyright">SGWorld&#169; created by Szymon Gonerko. All rights reserved</div>
        </main>
   
      
      </>
  )
}

ReactDOM.render(<Overlay />, document.getElementById("root"))
