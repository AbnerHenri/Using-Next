import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router'


function Comments() {

    const router = useRouter()
    const testId = router.query.testId
    const commentsId = router.query.commentsId

  return(
      <>
        <h1>Teste número : {testId}</h1>
        <h3>Comentário número : {commentsId}</h3>

        <Link href={`/test/${testId}`}><a>Voltar</a></Link>
      </>
  );
}

export default Comments;