import React from 'react';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import Icon from '@atlaskit/icon';
import Todo from './Todo';

function Todolist({ todoList, onCheckBtnClick }) {
    return (
        <>
            {todoList.map(todo => (
                <Todo key={todo.id} atodo={todo} onCheckBtnClick={onCheckBtnClick}/>
            ))}
        </>
    );
}

export default Todolist;