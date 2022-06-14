import React from 'react'
import "./Header.css";

const Header = () => {
    return (
        <section className='Header'>         
            <a href="http://localhost:3000/]"><img className='LogoHome' src="https://tokstoksponsorio.vtexassets.com/assets/vtex/assets-builder/tokstoksponsorio.store-theme/0.138.0/icons/store-logo-icon___ee0b8ba758e3c21e076108ec6b13ab11.svg" alt="" /></a>
            <div className='NavBar'>
                <div className='Box-Menu'>
                    <li className='Menu'>
                        <a href="http://localhost:3000/]">Como Funciona  <i className='arrow down'></i></a>
                      
                    </li>
                    <li className='Menu'>
                        <a href="https://vendacorporativa.todoincomm.com.br">Comprar para Empresas</a>
                    </li>
                    <li className='Menu'>
                        <a href="http://localhost:3000/]">Meu Cartão</a>
                    </li>
                    <li className='BtnMenu'>
                        <a href="http://localhost:3000/]">ACESSAR CONTA</a>
                    </li>
                </div>
            </div>
        </section>
    )
}

export default Header