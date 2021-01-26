import { useState } from 'react';
import { nanoid } from 'nanoid';
import './expeditionFormPage.css'

const ExpeditionInput = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    console.log('handleSubmit clicked');
  };

  return (
    <div className='inputBox'>
      <h1>Map Expedition</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder='Title'
          name='title'
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name='body'
          placeholder='Add your entry'
        ></textarea>
        <button type='submit'>Lift off</button>
      </form>
    </div>
  );
};
export default ExpeditionInput;
