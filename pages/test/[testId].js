import React from 'react';
import Link from 'next/link'

import { useRouter } from 'next/router'

function TestId() {

    const router = useRouter()
    const testId = router.query.testId

  return(
      <>
        <Link href='/test'><a>Voltar</a></Link>

        <h2>Exebindo o Teste nº {testId}</h2>
        <p>Comentario 1 : <Link href={`/test/${testId}/comments/1`}><a>Detalhes...</a></Link></p>
        <p>Comentario 2 : <Link href={`/test/${testId}/comments/2`}><a>Detalhes...</a></Link></p>
        <p>Comentario 3 : <Link href={`/test/${testId}/comments/3`}><a>Detalhes...</a></Link></p>
      </>
  )
}

export default TestId;