import React, { useState } from 'react'
import ProductView from './ProductView'
import ProductDetails from './ProductDetails'

const Product = ({ setScreen ,setProductNumber,productNumber}) => {
    let [productScreen,setProductScreen]=useState("")
    return (
        <>
            {productScreen==="" && <ProductView setScreen={setScreen} setProductNumber={setProductNumber} setProductScreen={setProductScreen}/>}
            {productScreen==="productDetail" && <ProductDetails setProductScreen={setProductScreen} productNumber={productNumber} />}
        </>
    )
}

export default Product