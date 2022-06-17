import React from 'react';
import "./MainBannerOrder.css";

const MainBannerOrder = () => {
  return (
    <section className='MainBannerOrder'>
        <div className='bannersaldo'>
            <a href="https://autorizador.todocartoes.com.br/meucartao/login/card/tokstok">
            <img src="../../assets/imagens/bannersaldo.jpg" alt="" />
            </a>
        </div>

        <div className='bannerpedidos'>
            <a href="https://cartaopresente.tokstok.com.br/login">
            <img className='.imagem_desktop' src="../../assets/imagens/bannerpedidos.jpg" alt="" />
            </a>
        </div>
        
    </section>
  )
}

export default MainBannerOrder