import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: props.getId,
      text: input,
    });
    props.updateId();
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Edit your item'
            value={input}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add an item'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
          />
          <button onClick={handleSubmit} className='todo-button'>
            Submit
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;