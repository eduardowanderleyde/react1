import React, { useState } from "react";
import "./App.css";

// zerar o bulls e cows//
var bulls = 0;
var cows = 0;
var m = 0;
var n = 0;
var o = 0;
var p = 0;
var q = 0;
var r = 0;
var s = 0;
var t = 0;

//função pra pegar a senha e dividir em 4 variáveis mnop//
function getsecret(str1) {
  var m = str1.texto[0];
  var n = str1.texto[1];
  var o = str1.texto[2];
  var p = str1.texto[3];
  return m === null ? 0 : m.length;
}

// função pra pegar a tentativa qrst//
function gettry(str2) {
  var q = str2.texto2[0];
  var r = str2.texto2[1];
  var s = str2.texto2[2];
  var t = str2.texto2[3];
  return q === null ? 0 : q.length;
}
if (m === q) {
  bulls = bulls++;
} else {
  let result = text.contains(texto2);
  cows = cows++;
}
if (n === r) {
  bulls = bulls++;
} else {
  let result = text.contains(texto2);
  cows = cows++;
}
if (o === s) {
  bulls = bulls++;
} else {
  let result = text.contains(texto2);
  cows = cows++;
}
if (p === t) {
  bulls = bulls++;
} else {
  let result = text.contains(texto2);
  cows = cows++;
}
function App() {
  //declarando constante e mudar texto  //
  const [textos, setTextos] = useState([]);
  const [texto, setTexto] = useState("");
  const handleChangeTexto = (evt) => {
    setTexto(evt.target.value);
  };

  const handleClickBtInserir = () => {
    let textoTrim = texto.trim();
    if (textoTrim) {
      setTextos([...textos, textoTrim]);
    }
  };
  //declarando constante e mudar texto2  //
  const [textos2, setTextos2] = useState([]);
  const [texto2, setTexto2] = useState("");
  const handleChangeTexto2 = (evt) => {
    setTexto2(evt.target.value);
  };
  const handleClickBtInserir2 = () => {
    let textoTrim = texto.trim();
    if (textoTrim) {
      setTextos([...textos, textoTrim]);
    }
  };

  return (
    <div className="App">
      <p>
        <label htmlFor="texto">Digite a senha: </label>
        <input
          id="texto"
          type="text"
          value={texto}
          onChange={handleChangeTexto}
        />{" "}
        <button onClick={handleClickBtInserir}>Inserir</button>
      </p>

      <p>
        <label htmlFor="texto2">Digite a tentativa: </label>
        <input
          id="texto2"
          type="text"
          value={texto2}
          onChange={handleChangeTexto2}
        />{" "}
        <button onClick={handleClickBtInserir2}>Inserir</button>
      </p>
      {textos.length > 0 && (
        <table>
          <tr>
            <th>Texto</th>
            <th>Bulls</th>
            <th>Cows</th>
          </tr>
          {textos.map((umTexto, index) => (
            <tr key={index}>
              <td>{umTexto}</td>
              <td>{getbulls(umTexto)}</td>
              <td>{getcows(umTexto2)}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}

export default App;
