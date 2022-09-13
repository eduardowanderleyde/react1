import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <head>Eduardo Wanderley</head>
<body>
	<h1>Jogo de Cows and Bulls</h1>
  <div class="wrapper">
	<input type="number" max="9999" min="0000" placeholder="e.g. 1234" id="try"
onkeydown = "if (event.keyCode == 13)
                        document.getElementById('submit').click()"
                        /><input type="submit" name="submit" id="submit" onclick="check()">
	<p>Console</p>
	<textarea name="console" id="console" cols="60" rows="30">REGRAS</textarea></div>

<script
  src="https://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>
</body>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
