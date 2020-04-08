import React, { useContext } from "react";
import Context from './Context';

function CreateItem({ id, text, complete }) {
  // const {checkedTodo, removeTodo} = useContext(Context)
  const { dispatch } = useContext(Context)

  const classes = ['todo-item']

  if (complete) {
    classes.push('todo-item_completed')
  }

  console.log(text);
  return (
    <li className={classes.join(' ')}>
      <span >
        <input type="checkbox" className="todo-item__checkbox"
          checked={complete}
          //  onChange={() => checkedTodo(id)}/>
          onChange={() => dispatch({
            type: 'toggle',
            payload: id
          })} />

        <span className="todo-item__text">{text}</span>
      </span>

      <button className="remove-btn"
        // onClick={() => removeTodo(id)} 
        onClick={() => dispatch({
          type: 'remove',
          payload: id
        })}
      >&times;</button>
    </li>
  );
}

export default CreateItem;
