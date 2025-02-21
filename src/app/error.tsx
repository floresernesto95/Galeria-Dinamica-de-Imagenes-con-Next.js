'use client'

import { Button } from 'react-bootstrap'

interface ErrorPageProps {
   error: Error,
   reset: () => void,
}

export default function Error({ error, reset }: ErrorPageProps) {
   return (
       <div>
           <h1>Error</h1>
           <p>Ha ocurrido un error: {error.message}</p>
           <Button onClick={reset}>Intentar de nuevo</Button>
       </div>
   )
}