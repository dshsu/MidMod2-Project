import React from 'react';
import './App.js';

const
<div className="addtask">
  <input
    value={taskValue}
    onChange={(event) => setTaskValue(event.target.value)}
    className="addtodo"
    placeholder="What else needs to be done?"
  />
  <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
</div>;

export default AddTodo
