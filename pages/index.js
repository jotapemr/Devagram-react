import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../componentes/avatar'
import Botao from '../componentes/botao'

export default function Home() {
  return (
    <>
    <h1>Olá mundo</h1>
    <div style={{width:200}}>
      <Avatar/>
      <Botao texto={'Login'} cor='primaria' manipularClique={() => console.log('Botão clicado')}/>
    </div>
    </>
  )
}
