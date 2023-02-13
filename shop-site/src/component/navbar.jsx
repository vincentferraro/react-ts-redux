import React from 'react'
import ButtonList from './button.jsx'

function NaviguationBar() {
    const titles = ['Accueil', 'Produits', 'Contact']
    return (
        <div>
            <ul>
                <li>Case1</li>
                {titles.map((title,index )=> <ButtonList key={index} title={title} />)}
            </ul>
        </div>
    )

}
export default NaviguationBar