import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import styled from 'styled-components'
import Product from './Product'



const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
`


const Products = ({ cate, sort, filters }) => {
    const [ products, setProducts ] = useState([]);
    const [ products_, setProducts_ ] = useState([]);
    const [ filteredProducts, setFilteredProducts ] = useState([]);

    const url = "https://two9server.onrender.com/api/products"

    const getProducts = async () => {
        try {
            const res = await axios.get(cate && `https://two9server.onrender.com/api/products?category=${cate}`) 
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getProductsToBeDisplayed = async () => {
        try {
            const res = await axios.get(url + "/all") 
            setProducts_(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getProducts();
        getProductsToBeDisplayed();

        cate && setFilteredProducts(
            products.filter( item => Object.entries(filteredProducts).every(([key, value]) => 
                item[key].includes(value)
            ) )
        ) 
    // eslint-disable-next-line
    }, [cate, filters]);

    useEffect(() => {
        if(sort === "newest"){
            setFilteredProducts((prev) => 
                [...[prev].sort((a, b) => a.createdAt - b.createdAt)])
        }

        else if(sort === "highest"){
            setFilteredProducts((prev) => 
                [...[prev].sort((a, b) => a.price - b.price)])
        }

        else{
            setFilteredProducts((prev) => 
                [...[prev].sort((a, b) => b.price - a.price)])
        }
    }, [sort]);
    
  return (
    <>
        <Container>
                    {
                        cate ? 
                        filteredProducts.map((item, index) => {
                            return(
                                <Product item={item} key={index}/>
                            )
                        })  : 
                        products_.slice(0, 8).map((item, index) => {
                            return(
                                <Product item={item} key={index}/>
                            )
                        })
                    }
        </Container>
    </>
  )
}

export default Products