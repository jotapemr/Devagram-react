import Image from 'next/image';
import { useState } from 'react';
import logoHorizontalImg from '../../public/imagens/logoHorizontalImg.svg';
import imagemLupa from '../../public/imagens/lupa.svg';


export default function Cabecalho() {
    return(
        <header className='cabecalhoPrincipal'>
            <div className='conteudoCabecalho'>
                <div className='logoCabecalhoPrincipal'>
                    <Image
                        src={logoHorizontalImg}
                        alt='logo devagram'
                        layout='fill'
                    
                    />
                </div>
               <div className='barraPesquisa'>
                    <div className='containerImagemLupa'>
                        <Image
                            src={imagemLupa}
                            alt='Icone lupa'
                            layout='fill'
                        />
                    </div>

                    <input
                        type='text'
                        placeholder='Pesquisar'
                        value={termoPesquisado}
                        onChange={aoPesquisar}
                    />
                </div>
            </div>
        </header>
    )   
}