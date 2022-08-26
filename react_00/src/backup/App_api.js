import TopBanner from '../pages/TopBanner';
import ListTest from '../pages/ListTest'
import './basic.css';
import { useEffect, useState } from 'react';



const DataCunect = ({ st, ed }) => {
  const [data, setData] = useState([]);

  console.log(st, ed)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => setData(result))
  }, []);

  // axios 

  // JSON.parse()

  // console.log(Object(data[0]).id)
  // async await ????

  return (
    <div>
      {
        data.map(it => <li key={it.id}>{it.id} {it.title} </li>).slice(st, ed)
      }
    </div>
  )
}

export default DataCunect;