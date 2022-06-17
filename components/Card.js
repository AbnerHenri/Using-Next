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

          <div className={Styles.Back}>
              <p style={checkStatus(props.status)}><strong style={{ color : 'white' }}>Status : </strong>{props.status}</p>
              <p><strong>Specie :</strong> {props.species}</p>
              <p><strong>Gender :</strong> {props.gender}</p>
              <p><strong>Origin :</strong> {props.origin}</p>
          </div>

          <div className={Styles.Front}>
            <img src={props.image}/>
            <p className={Styles.Name}>{props.name}</p>
          </div>
      </div>
  );
}

export default Card;