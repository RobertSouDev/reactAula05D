
"use client";
import Button from './componets/Button';
import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState("light")
  const [result, setResult] = useState(0)
  const [fieldCalc, setFieldCalc] = useState("")

  function changeTheme(){
    setTheme(theme === "light" ? "dark" : "light")

  }

  function onChangeField(event){
    setFieldCalc(event.target.value)
  }

  function calculate(){
    // eslint-disable-next-line no-eval
    setResult(eval(fieldCalc))
  }

  return (
    <div className={`container ${theme}`}>
        <div className="eachCol left">
            <div>
                <div className="textHeader">simples cal</div>
                <div onClick={changeTheme} id="themeButton" className="containerIcon">
                  <p>☽</p>
                </div>
            </div>
            <input onChange={onChangeField} id="inputCalc" placeholder="240x30" />
            <Button funcao={calculate} texto='calcular' />
            <Button  />

            <div>*press enter to find out the total</div>
        </div>
        <div className="eachCol right">
            <div id="historicButton" className="containerIcon">
                <i id="iconTheme" className="fas fa-history buttonRight"></i>
            </div>
            <div id="historicView" className="containerHistoric">
              
            </div>
            <div id="result" className="resultText">{result}</div>
            <div>→ view keyboard shortcuts</div>
        </div>
    </div>
  );
}
