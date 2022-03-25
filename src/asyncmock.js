

const Products = [
    
    {
id:1,
name:'zapatillas',
category:'calzado',
img:'',
stock:20,
description:'calzado deportivo',

},

{

id:2,
name:'botas',
category:'calzado',
img:'',
stock:20,
description:'calzado deportivo',

},
{

id:3,
name:'borcegos',
category:'calzado',
img:'',
stock:20,
description:'entre casa',

},
    
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Products)
        }, 2000)
    })
}
