import React, { useState } from 'react';

const List = () => {

  const [list, setList] = useState([1,2,3,4,5]);

  const addItem = () => {
    setList([...list, list[list.length - 1] + 1])
  }

  return (
    <>
      <h3>Lista</h3>
      <button onClick={addItem}>Agregar elemento</button>
      <ul>
        {
          list.map((item, index) =>
            <p key={index}>{item} - ({index})</p>
          )
        }
      </ul>
    </>
  );
}

export default List;