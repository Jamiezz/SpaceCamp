import { useState, useEffect } from 'react';
import './expeditionFormPage.css'
import { fetch } from '../../store/csrf'

const ExpeditionInput = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [map, setMap] = useState('');

  //   useEffect(() => {
  //     homeFetch()
  //   }, [])

  // async function homeFetch() {
  //   const res = await fetch("/api/map")
  //   if(res.ok) {
  //     let data = await res.data
  //     setMap(data)
  //   }
  // }

  const handleSubmit = (e) => {
    console.log('handleSubmit clicked');
  };

  return (
    <div className='inputBox'>
      <h1>Map Expedition</h1>
      <form onSubmit={handleSubmit}>
        <div className='color'>
          <input
            className="textField"
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder='Title'
            name='title'
          />
        </div>
        <div className='color'>
          <textarea
            className="textField"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            name='body'
            placeholder='Add your entry'
          ></textarea>
          <div>
            <button type='submit' className="button">Lift off</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ExpeditionInput;
