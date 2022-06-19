import React from 'react';

import Styles from '../styles/Components/Card.module.css'
import Link from 'next/link';

function Card(props) {

  function checkStatus(status){
    switch (status) {
    case 'Alive':
      return  { color : 'greenyellow' }
    
    
    case 'unknown' :
      return  { color : 'gray' }


    case 'Dead' : 
      return  { color : 'red' }
  
    default:
      break;
  }
}

  function Redirect(route) {
    const url = `http://localhost:3000/${route}`

    return url
  }

  return(
      <div className={Styles.Card}>

          <div className={Styles.Back}>
              {/* <p style={checkStatus(props.status)}><strong style={{ color : 'white' }}>Status : </strong>{props.status}</p> */}
              <p>Details...</p>
          </div>

        <Link href={Redirect(props.name)}>
            <div className={Styles.Front}>
              <img src={props.image}/>
              <p className={Styles.Name}>{props.name}</p>
            </div>
        </Link>
          
      </div>
  );
}

export default Card;