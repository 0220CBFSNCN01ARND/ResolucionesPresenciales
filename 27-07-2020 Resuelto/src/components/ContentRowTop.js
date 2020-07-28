import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Products in Data Base',
    color: 'primary', 
    cuantity: 34,
    icon: 'fa-clipboard-list'
}

/* <!-- $$$ of all products in DB --> */

let amountOfProducts = {
    title:'Amounts in products', 
    color:'success', 
    cuantity: '$546.456',
    icon:'fa-dollar-sign'
}

/* <!-- Amount of users in DB --> */

let amountOfUsers = {
    title:'Users quantity' ,
    color:'warning',
    cuantity:'38',
    icon:'fa-user-check'
}

let cartProps = [productsInDB, amountOfProducts, amountOfUsers];

function ContentRowTop(){
    return (
    
        <div className="row">
            
            {cartProps.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowTop;