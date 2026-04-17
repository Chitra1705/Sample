import React from 'react'

const List = () => {
    const product = [{
        id:1,
        title:"iQOO 15R ",
        img:"https://m.media-amazon.com/images/I/61D48zQmROL._SX679_.jpg",
        price:30000,
        des:"Fastest Smartphone in the Segment - Powered"
    },
    {
        id:2,
        title:"iQOO 15R ",
        img:"https://m.media-amazon.com/images/I/61D48zQmROL._SX679_.jpg",
        price:30000,
        des:"Fastest Smartphone in the Segment - Powered"
    },
{
        id:3,
        title:"iQOO 15R ",
        img:"https://m.media-amazon.com/images/I/61D48zQmROL._SX679_.jpg",
        price:30000,
        des:"Fastest Smartphone in the Segment - Powered"
    },
{
        id:4,
        title:"iQOO 15R ",
        img:"https://m.media-amazon.com/images/I/61D48zQmROL._SX679_.jpg",
        price:30000,
        des:"Fastest Smartphone in the Segment - Powered"
    },
{
        id:5,
        title:"iQOO 15R ",
        img:"https://m.media-amazon.com/images/I/61D48zQmROL._SX679_.jpg",
        price:30000,
        des:"Fastest Smartphone in the Segment - Powered"
    },
{
        id:6,
        title:"iQOO 15R ",
        img:"https://m.media-amazon.com/images/I/61D48zQmROL._SX679_.jpg",
        price:30000,
        des:"Fastest Smartphone in the Segment - Powered"
    },
{
        id:7,
        title:"iQOO 15R ",
        img:"https://m.media-amazon.com/images/I/61D48zQmROL._SX679_.jpg",
        price:30000,
        des:"Fastest Smartphone in the Segment - Powered"
    },]
  return (
    <div>
        {product.map((item)=>(
            <div key={item.id}>
                <img src={item.img}></img>
                <h1>{item.title}</h1>
                <h4>₹{item.price}</h4>
                <p>{item.des}</p>
            </div>
        ))}

        <section>
            <div className="container">
                <div className="row">
                    {product.map((data)=>(
                        <div className='col-lg-4 col-6 ' key={data.id}>
                            <img src={data.img} width="100%"></img>
                            <h1>{data.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default List