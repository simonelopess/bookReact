import {useState} from 'react';
import ValidationComponent from './components/ValidationComponent/validationComponent';
import CharComponent from './components/CharComponent/CharComponent';
function App() {
  
  const [input, setInput] = useState('');

  const onChangeHandler = (event) =>{
    setInput(event.target.value);
  }

  const deleteCharHandler = (index) => {
    const text = input.split(''); //separa string a partir de espaço
    text.splice(index, 1); //exclui
    const updatedText = text.join(''); //une a partir de espaços
    setInput(updatedText); //atribui valor novo ao estado
  }

  const charList = input.split('').map((char, index) => {
    return <CharComponent character={char} key={index} clicked={()=>deleteCharHandler(index)} />
  })

  return (
    <div className="App">
      <input type="text" onChange={onChangeHandler} value={input}/>
      <p>Nome: {input}</p>
      <ValidationComponent lengthnumber={input.length}/> <br/>
      {charList}
    </div>
  );
}

export default App;
