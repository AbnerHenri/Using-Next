import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'

export async function getStaticProps(context) {

  const { params } = context

  const data = await fetch(`https://rickandmortyapi.com/api/character/${params.charactersId}`)
  const character = await data.json()

  return {
    props : { character }
  }

}

export async function getStaticPaths() {

  const response = await fetch('https://rickandmortyapi.com/api/character')
  const data = await response.json()
  const reformData = data.results


  const paths = reformData.map((char)=>{
    return {
      params : {
        charactersId : `${char.name}`
      }
    }
  })

  return { paths, fallback : false }
}

function Character({ character }) {

  const router = useRouter()
  const charactersId = router.query.charactersId

  return(
    <div>
        <Link href='/'>Voltar</Link>
        <h1>Exibindo o página número : {charactersId}</h1>
    </div>
  );
}

export default Character;