import styles from '../styles/Home.module.css'

import Head from 'next/head'

export async function getStaticProps() {

  const data = await fetch('https://rickandmortyapi.com/api/character')
  const character = await data.json()
  const results = await character.results

  return{
    props : { results }
  }
}

export default function Home({ results }) {

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

  return (
    <div>
      <Head>
        <title>Página Principal</title>
        <meta name='keywords' content='Roupas, Calçados' />
        <meta name='description' content='Encontre as melhores roupas pra você' />
      </Head>

      <div style={{ marginLeft : 15 }}>
        <h1>Página Teste</h1>
        {results.map((e)=> <h4>{e.name} - <span style={checkStatus(e.status)}>{e.status}</span></h4>)}
      </div>

    </div>
  )
}
