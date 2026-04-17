import React from 'react'
import { addToCart } from '../Redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Kids = () => {
    const product=[
       { id:1,
        title:"Kids Winter Wear Casual Clothing Set for Baby Boy & Girl ",
        img:"https://m.media-amazon.com/images/I/51JC6pNC-8L._SY879_.jpg",
        price:699,
        des:"Soft & Warm Fabric – Designed to keep babies warm and comfortable during winter days and nights."
    },
    {
        id:2,
        title:"Kids Winter Wear Casual Clothing Set for Baby Boy & Girl ",
        img:"https://m.media-amazon.com/images/I/51+t32KCmmL._SY879_.jpg",
        price:699,
        des:"Soft & Warm Fabric – Designed to keep babies warm and comfortable during winter days and nights."
    },
    {
        id:3,
        title:"Kids Winter Wear Casual Clothing Set for Baby Boy & Girl ",
        img:"https://m.media-amazon.com/images/I/51d836PpegL._SY879_.jpg",
        price:699,
        des:"Soft & Warm Fabric – Designed to keep babies warm and comfortable during winter days and nights."
    },
          
]
const cartProduct=useSelector((state)=>state.cart.cartItems)
const dispatch=useDispatch()
const addProduct=(item)=>{
    dispatch(addToCart(item))
}
  return (
    <div>
        <div className='container'>
            <div className='row justify-content-center'>
        
        {
            product.map((item)=>(
                <div className='col-lg-4' style={{}}  key={item.id}>
                    <h1 style={{fontSize:"15px"}}>{item.title}</h1>
                    <img src={item.img} style={{width:"250px",height:"300px"}} alt=''/>
                    <h3 >{item.price} </h3>
                    <p>{item.des}</p>
                    {cartProduct.find((items)=>items.id===item.id) ?
                    <button disabled>added to cart</button>:
                    <button onClick={()=>addProduct(item)}>Add to cart</button>
                    }   
                </div>
           ) )
        }
            </div>
        </div>
    </div>
  )
}

export default Kids