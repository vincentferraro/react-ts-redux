import React from 'react'
import ButtonList from './button.jsx'
import { Link } from 'react-router-dom'
function NaviguationBar() {
    const titles = ['Accueil', 'Produits', 'Contact']
    return (
        <div>
            <ul>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/goods">Goods</Link></li>
                {titles.map((title,index )=> <ButtonList key={index} title={title} />)}
            </ul>
        </div>
    )

}
export default NaviguationBar