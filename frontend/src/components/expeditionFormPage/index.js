import { useState, useEffect } from 'react';
import './expeditionFormPage.css'
import { fetch } from '../../store/csrf'

const ExpeditionInput = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [map, setMap] = useState('');

  useEffect(() => {
    homeFetch()
  }, [])

async function homeFetch() {
  const res = await fetch("/api/map")
  if(res.ok) {
    let data = await res.data
    setMap(data)
  }
}

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
