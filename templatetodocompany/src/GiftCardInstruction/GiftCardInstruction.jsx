import React from 'react'
import "./GiftCardInstruction.css";

const GiftCardInstruction = () => {
    return (
        <section className='GiftCardInstruction'>
            <div className='GiftCardInstructionWrapper'>
                <h1 className='InstructionTitle'>
                    <b>
                        Ganhou um cartão presente?
                    </b>
                </h1>
                <p className='GiftCardInstructionParagraph'>Consulte o valor e a validade do seu cartão seguindo os passos:
                </p>

                <ol className='GiftCardInstuctionLi'> <b>1.</b>  Acesse o site: <a id='ShoulderCard' href='https://shoulder.todocartoes.com.br/#/purchase'>shoulder.todocartoes.com.br</a></ol>
                <ol className='GiftCardInstuctionLi'><b>2.</b> Clique em "Consultar Saldo" no canto superior direito;</ol>
                <ol className='GiftCardInstuctionLi'><b>3.</b> Insira o número e a senha do cartão presente.</ol>
            </div>
            <div className='ButtonGiftCardInstruction'>
                <a href="https://shoulder.todocartoes.com.br/#/purchase">  <button className='btnconsultvalue'>Consultar Valor</button></a>
              <a href="https://whts.co/shoulder"><button className='btnwheretouse'>Onde Usar</button></a>
                
            </div>

        <div className='corporatesales'>
            <img src="../../assets/imagens/Bannervendascorporativas.webp" alt="" />
        </div>
        </section>
    )
}

export default GiftCardInstruction