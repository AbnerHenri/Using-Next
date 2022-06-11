import React from 'react';

export async function getStaticProps() {

  const data = await fetch('https://rickandmortyapi.com/api/character')
  const character = await data.json()
  const results = await character.results

  return{
    props : { results }
  }
}

function Test({ results }) {

  function checkStatus(status){
    switch (status) {
      case 'Alive':
        return  { color : 'green' }
      
      
      case 'unknown' :
        return  { color : 'gray' }
  

      case 'Dead' : 
        return  { color : 'red' }
    
      default:
        break;
    }
  }

  return(
      <div style={{ marginLeft : 15 }}>
        <h1>Página Teste</h1>
        {results.map((e)=> <h4>{e.name} - <span style={checkStatus(e.status)}>{e.status}</span></h4>)}
      </div>
  );
}

export default Test;