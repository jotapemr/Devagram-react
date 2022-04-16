import Image from "next/image"

export default function inputPublico(
imagem,
tipo,
texto,
valor="",
exibirMensagemValidacao = false,
mensagemValidacao = "",
aoAlteraValor


) {
    return(
        <div className="inputPublicoContainer">
            <div className="inputPublico">
                <Image
                    src={imagem}
                    alt="imagem do campo"
                    className="iconeInputPublico"
                    width={20}
                    height={20}               
                />

                <input
                    type={tipo}
                    placeholder={texto}     
                    value={valor} 
                    onChange={aoAlteraValor}          
                />
            </div>
         
         {exibirMensagemValidacao && <p className="mensagemValidacao">{mensagemValidacao}</p>}
        </div>
    )
}