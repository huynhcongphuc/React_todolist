import './App.css';
import Todolist from './components/Todolist.js';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';

const TODO_APP_Storage_key = 'TODO_APP';

function App() {
  // state: du lieu noi tai, pros:du lieu truyen tu element cha
  const [todolist, setTodolist] = useState([]);
  const [textinput, setTextinput] = useState("");
  useEffect(() => {
    const storagedtodolist = localStorage.getItem(TODO_APP_Storage_key);
    if (storagedtodolist){
      setTodolist(JSON.parse(storagedtodolist));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TODO_APP_Storage_key, JSON.stringify(todolist));
  }, [todolist])



  const onTextinputChange = useCallback((e) => {
    setTextinput(e.target.value);
  },[]);

  const onAddBtnClick = useCallback((e) => {
    // them gia tri text inputs vao DS todolist
    setTodolist([{ id: v4(), name: textinput, isComplete: false },...todolist ]);
    setTextinput('');
  
  },[textinput,todolist]);


  const onCheckBtnClick = useCallback((id) => {
    setTodolist(prevState => prevState.map(todo => todo.id === id?{...todo, isComplete: true}:todo));
  },[]);

  return (
    <>
      <h3 style={{width:"600px"}}>Danh sách cần làm</h3>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm..."
        elemAfterInput={
          <Button
            isDisabled={!textinput}
            appearance="primary"
            onClick={onAddBtnClick}
          >Thêm
          </Button>
        }
        css={{ padding: '2px 4px 2px' }}
        value={textinput}
        onChange={onTextinputChange}
      ></Textfield>
      <Todolist todoList={todolist} onCheckBtnClick={onCheckBtnClick}/>
    </>
  );
}

export default App;
