import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Product from '../components/Product'
import { publicRequest } from '../requestMethods'

const Container = styled.div`
    padding: 50px;

    .container{
      
      .product_grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        @media screen and (max-width: 1024px) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 690px) {
          grid-template-columns: 1fr;
        }
      }
    }
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 10px ;
`

const Options = styled.option`
 
`

const Products = () => {

  const [products, setProducts] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [sort, setSort] = useState("newest");

  const getProducts = async() => {
    try {
      const res = await publicRequest.get("/products/all")
      setProducts(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
  console.log(filteredProducts)

  const handleFilter = (e) => {
    
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
        <Announcement />
        <Navbar search setSearchTerm={setSearchTerm}/>
        <Container>
            <div className='container'>
              <Filter>
                  <FilterText>
                      Sort Products:
                  </FilterText> 

                  <Select name='sort' onChange={(e) => setSort(e.target.value)}>
                      <Options value="newest">Newest</Options>
                      <Options value="highest">Highest</Options>
                      <Options value="lowest">Lowest</Options>
                  </Select>   
              </Filter>
              <div className="product_grid">
                {filteredProducts?.map((product, index) => {
                  return(
                    <Product item={product} />
                  )
                })}
              </div>
            </div>
        </Container>
        <NewsLetter />
        <Footer />
    </>
  )
}

export default Products