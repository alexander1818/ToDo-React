import React from 'react';
import CreateItem from './CreateItem'

function CreateList(props) {

  console.log(props.value);
  return (
    <ul className="">
      {props.value && props.value.map((todo) => <CreateItem key={todo.id} {...todo} />)}
    </ul>
  );
}

export default CreateList;
