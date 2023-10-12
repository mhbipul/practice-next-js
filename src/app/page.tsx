"use client"
import Image from 'next/image'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Card from './component/Card'
import {useState} from 'react'

export interface Product{
  productName:string;
  productPrice: string;
  productRating: string;
  booked: string;
}
export interface ProductList{
  products:Product[];
}

export default function Home() {
  const[product,serProduct]=useState<Product[]>([{productName:"Birani",productPrice:"300",productRating:"4*",booked:"5 times"},{productName:"teheri",productPrice:"250",productRating:"3*",booked:"6 times"}]);
  return (
    
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Card products={product}/>
    </div>
  )
}
