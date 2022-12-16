import logo from './logo.svg';
import './App.css';
import html2canvas from 'html2canvas';
import React, { useEffect, useState } from "react";

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [image, setImage] = useState('');

  const onChangeLinea1 = (valor) => {
    setLinea1(valor.target.value);
  }
  const onChangeLinea2 = (valor) => {
    setLinea2(valor.target.value);
  }
  const onChangeImage = (valor) => {
    setImage(valor.target.value);
  }
  const exportar = () => {
    let prueba = document.getElementById('imagen');
    let imageUrl =  prueba.src;
    console.log(encodeURIComponent(imageUrl));
    html2canvas(document.querySelector("#box")).then(canvas => {
      let img = canvas.toDataURL('image/png')
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
     // console.log(encodeURIComponent(img));
    });
  }

 

  return (
    <div className="App">
      <select onChange={onChangeImage}>
      <option value="fire">Casa en llamas</option>
      <option value="futurama">Futurama</option>
      <option value="history">History Channel</option>
      <option value="matrix">Matrix</option>
      <option value="smart">Smart Guy</option>
      </select> <br/>

      <input type="text"onChange={onChangeLinea1} placeholder='Linea 1'/> <br/>
      <input type="text" onChange={onChangeLinea2} placeholder='Linea 2' /> <br/>
      <button onClick={exportar}>Exportar</button>

      <div id='box' className='box'>
        <img id='imagen' src={'/img/'+image+'.jpg'} alt="" />
        <span className='topSpan'>{linea1}</span> <br/>
        <span className='bottomSpan'>{linea2}</span> <br/>
      </div>
    
    </div>


  
    
  );
}

export default App;
