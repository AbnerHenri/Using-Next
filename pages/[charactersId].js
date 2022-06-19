import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'


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

export async function getStaticProps(context) {

  const { params } = context

  const data = await fetch(`https://rickandmortyapi.com/api/character/${params.charactersId}`)
  const character = await data.json()

  return {
    props : { character }
  }

}

function Character({ character }) {

  const router = useRouter()
  const charactersId = router.query.charactersId

  return(
    <div>
        <Link href='/'><strong style={{ cursor : 'pointer' }}>Voltar</strong></Link>
        
    </div>
  );
}

export default Character;