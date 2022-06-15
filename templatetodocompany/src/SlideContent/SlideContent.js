import React from 'react'
import "./SlideContent.css";

const SlideContent = () => {
    return (
        <div className='MainCardsSlideContent'>
            <h1 className='TitleSlideContent'>Vantagens do Cartão Presente Tok&amp;Stok</h1>
            <div>
            </div>
            <div className='ContainerSlideCardContent'>
                <div className='CardSlidContent'>
                    <img className='IconCardContent' src="../../assets/Slide/iconsslidecontent/calendar-days-solid.svg" alt="" />
                    <p className='TextCardSlideContent'>Válido por 12 meses</p>
                </div>
                <div className='CardSlidContent'>
                    <img className='IconCardContent' src="../../assets/Slide/iconsslidecontent/house-solid.svg" alt="" />
                    <p className='TextCardSlideContent'>Aceito no site ou nas lojas</p>
                </div>
                <div className='CardSlidContent'>
                    <img className='IconCardContent' src="../../assets/Slide/iconsslidecontent/credit-card-solid.svg" alt="" />
                    <p className='TextCardSlideContent'>Pode ser usado mais de uma vez</p>
                </div>
                <div className='CardSlidContent'>
                    <img className='IconCardContent' src="" alt="" />
                    <p className='TextCardSlideContent'>Consulta Rápida do saldo</p>
                </div>

            </div>
        </div>
    )
}

export default SlideContent