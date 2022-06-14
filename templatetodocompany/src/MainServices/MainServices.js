import React from 'react'
import "./MainServices.css";

const MainServices = () => {
  return (
    <section className='MainServices'>
      <div class="column">
        <h4 className='MainServicestitle'> <b>O QUE É?</b>
        </h4>
        <p className='GiftCardInfo'>O presente perfeito! <br/>
          Você escolhe o valor e usa para surpreender quem você ama</p>
      </div>
      <div class="column">
        <h4 className='MainServicestitle'><b>ONDE COMPRAR?</b>

        </h4>
        <p className='GiftCardInfo'>Compre nas lojas próprias da SHOULDER
          ou em nosso e-commerce,
          clicando <a href='https://www.tokstok.com.br/lojas'>aqui</a>.</p>
      </div>
      <div class="column">
        <h4 className='MainServicestitle'> <b>QUANTO CUSTA?</b>
        </h4>
        <p className='GiftCardInfo'>Escolha o valor que você deseja presentear.<br/>
          Ele será creditado no cartão presente para ser resgatado.
        </p>
      </div>
      <div class="column">
        <h4 className='MainServicestitle'> <b> COMO USAR?</b>
        </h4>
        <p className='GiftCardInfo'>Quem recebe o cartão, pode trocar nas lojas próprias SHOULDER ou
          em nosso e-commerce.</p>
      </div>

    </section >
  )
}

export default MainServices