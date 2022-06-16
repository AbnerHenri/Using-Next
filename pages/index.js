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

  function Redirect(name) {

    const str = `http://localhost:3000/${name}`

    return str
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
        {results.map((e)=> <a href={Redirect(e.name)} style={{ display : 'block' }}>{e.name} - <span style={checkStatus(e.status)}>{e.status}</span></a>)}
      </div>

    </div>
  )
}
