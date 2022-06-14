import React from 'react'
import "./PrimeiroBanner.css";

const PrimeiroBanner = () => {
  return (
    <section className='SectionGiftCard'>

      <div className='SectionGiftCardWrapper'>
      <div class="column">
    
      <div className='title-SectionGiftCard'>
        <p className='first-title'>
          cartão <b>Presente</b>
        </p>
        <h4 className='FontTokeStok'>tok&amp;Stok
        </h4>
        <div className='Textinfocard'>
        <p>Um jeito prático de presentear quem você gosta.<br />
          Esse é o <span><b>Cartão Presente Tok&amp;Stok,</b></span> um cartão pré-
          <br />pago para presentear sem complicações.</p>
      
          </div>
          </div>
          <div className='buttons-SectionGiftCard'>
           <a href="https://cartaopresente.tokstok.com.br/#/purchase"> <button className='buttons-SectionGiftCard1'>Comprar</button></a>
           <a href="https://vendacorporativa.todoincomm.com.br/marca/tokstok"> <button className='buttons-SectionGiftCard2'>Compras Corporativas</button></a>
          </div>
          </div>
      <div className='Img-SectionGiftCard'>

        <img src="./assets/imagens/infocard1.png" alt="" />
      </div>
      </div>
    </section>
  )
}

export default PrimeiroBanner