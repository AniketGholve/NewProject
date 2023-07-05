import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductDetails = ({setScreen,productNumber,setProductScreen}) => {
    let [productData, setProductData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:7890/getProductById/${productNumber}`).then(response => {
            if (response.ok) {
                response.json().then(result => {
                    setProductData(result)
                })
            }
        })
    }, [productNumber])
    return (
        <>
            <div className='container mt-5'>
                <h2 className="text-center headingFont">Products</h2>
                <Link className="text-danger" onClick={() => { setProductScreen("") }}><i className="fa-solid fa-arrow-left px-2"></i>Back to Products</Link>
            </div>
            <div class="d-grid container shadow mt-5 p-5">
                <div class="row text-center">
                    <div class="col-4">
                        <div><b>Product ID</b> : {productData.productId}</div>
                    </div>

                    <div class=" col-4">

                        <div> <b>Product Name</b> : {productData.productName}</div>
                    </div>

                    <div class=" col-4">
                        <div><b>Product Code</b> : {productData.ndc}</div>
                    </div>
                </div>
                <div class="row mt-3 text-center">
                    <div class="col-4">
                        <div><b>Manufacturer</b> : {productData.manufacturer}</div>
                    </div>

                    <div class="col-4">
                        <div><b>GTIN</b> : {productData.gtin}</div>
                    </div>

                    <div class=" col-4">
                        <div><b>Status</b> : {productData.active === true ? "Active" : "Discarted"}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
