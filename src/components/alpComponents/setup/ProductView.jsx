import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductView = ({ setScreen, setProductNumber,setProductScreen }) => {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:7890/getAllProduct`, { method: 'GET' }).then(response => {
            if (response.ok) {
                response.json().then(result => {
                    setProducts(result);
                })
            }
        })
    },)
    return (
        <>
            <div class="container mt-5">
                <h2 className="text-center headingFont">Products</h2>
                <Link className="text-danger" onClick={() => { setScreen("") }}><i className="fa-solid fa-arrow-left px-2"></i>Back to Corporate</Link>
                <table id="" className="table table-striped text-center mt-4 m-auto">
                    <thead className="thead">
                        <tr>
                            <th>Product Name</th>
                            <th>Product Code</th>
                            <th>Manufacturer Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((x, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td><Link className="text-danger" onClick={()=>{setProductScreen("productDetail");setProductNumber(x.productId)}}>{x.productName}</Link></td>
                                        <td>{x.ndc}</td>
                                        <td>{x.manufacturer}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductView
