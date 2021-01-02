import {useState} from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

function App() {

  const [userName, setUserName] = useState('supermaxs');

  const changeUserNameHandler = (event) =>{
    setUserName(event.target.value)
  }

  return (
    <div className="App">
      <UserInput changed={changeUserNameHandler} currentName={userName}/>
      <UserOutput userName={userName} currentName={userName}/>
    </div>
  );
}

export default App;

