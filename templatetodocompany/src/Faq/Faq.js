import React from 'react'
import "./Faq.css";

const Faq = () => {
  return (

<div>
    <div className='ButtonsFaq'>
<a href="https://atendimento.tokstok.com.br/hc/pt-br"><button className='ButtonFaq1'>Perguntas Frequentes</button></a>
<a href="https://www.tokstok.com.br/empresa/termos-condicoes-do-site"><button className='ButtonFaq2'>Termos de Uso</button></a>
    </div>
    <div className='stikyfooter'>
        <img className='logotokestok' src="https://tokstoksponsorio.vtexassets.com/assets/vtex/assets-builder/tokstoksponsorio.store-theme/0.138.0/icons/store-logo-icon___ee0b8ba758e3c21e076108ec6b13ab11.svg" alt="" />
    <button className='btnAdicionaroutrocartao'>Adicionar Outro Cartão</button>
    <button className='btnProximo'> Próximo</button>
    </div>
    </div>
  )
}

export default Faq