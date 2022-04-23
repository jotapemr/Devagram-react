export class LoadingHelper{
    //método estático não precisa estanciar o objeto pra fazer a chamada, faz a chamada direta da classe
    static exibir(){
        document.querySelector('.loadingContainer')
        ?.classList.remove('oculto')
    }
    static ocultar(){
        setTimeout(() => {
            document.querySelector('.loadingContainer')
            ?.classList.add('oculto')
        }, 500)
    }
}