import React from 'react'
import ProductCard from '../components/ProductCard';
import useTitle from '../hooks/useTitle';

export function Home() {
    useTitle("Home");
    const products = [
    {"id": 1, "name": "Black Printed Dress", "price": 149, "image": "/assets/images/1001.jpg"},
    {"id": 2, "name": "Blue Bodycon Dress", "price": 99, "image": "/assets/images/1002.webp"},
    {"id": 3, "name": "Black Designer Mini Dress", "price": 179, "image": "/assets/images/1003.webp"},
    {"id": 4, "name": "Brown Coat dress", "price": 89, "image": "/assets/images/1004.jpg"},
    {"id": 5, "name": "TealBlue Salwar suit", "price": 199, "image": "/assets/images/1005.webp"},
    {"id": 6, "name": "Blue and white Co-ord set", "price": 89, "image": "/assets/images/1006.jpeg"}
  ]
  return (
    <main>
        <section className='products'>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </section>
    </main>
  )
}
