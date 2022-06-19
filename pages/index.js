import styles from '../styles/Home.module.css'

import Head from 'next/head'
import Card from '../components/Card'

export async function getStaticProps() {

  const data = await fetch('https://rickandmortyapi.com/api/character')
  const character = await data.json()
  const results = await character.results

  return{
    props : { results }
  }
}

export default function Home({ results }) {


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

      <div className={styles.Home}>
        {results.map((e)=> <Card image={e.image} name={e.name} />)}
      </div>

    </div>
  )
}
