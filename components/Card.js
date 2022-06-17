import React from 'react';

import Styles from '../styles/Components/Card.module.css'

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

  return(
      <div className={Styles.Card}>
          <img src={props.image} />

          <div className={Styles.TextImage}>
              <p>{props.name}</p>
              <p style={checkStatus(props.status)}>{props.status}</p>
              <p>{props.species}</p>
          </div>
      </div>
  );
}

export default Card;