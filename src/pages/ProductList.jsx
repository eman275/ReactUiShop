import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from "../responsive"
import { mobile } from "../responsive";

 const Container=styled.div``;
 const Title = styled.h1`
 margin: 20px;
 `;
 const FilterContainer = styled.div`
 display: flex;
 justify-content:space-between;

 `;
 const Filter = styled.div`
 margin: 20px;
 ${mobile({ margin:"0px 20px" , display: "flex" , flexDirection:"column" })}
 `;

const FilterText=styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ marginRight:"0px" })}
` ;
const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px"})}
`;
const Option = styled.option``;
const ProductList = () => {
    return (
        <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
             <Filter><FilterText> Filter Product:</FilterText>
             <Select>
                  <Option disabled selected>
                      Color
                  </Option>
                  <Option>Red</Option>
                  <Option>blue</Option>
                  <Option>black</Option>
                  <Option>green</Option>
                  <Option>white</Option>
                  <Option>yellow</Option>  
             </Select>
             <Select>
                  <Option disabled selected>
                      Size
                  </Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>Xl</Option>
                  <Option>XXl</Option>  
             </Select>
             </Filter>
             <Filter><FilterText> Sort Product:</FilterText>
             <Select>
                 <Option selected>Newest</Option>
                 <Option>price(asc)</Option>
                 <Option>Price(desc)</Option>

             </Select>
             </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
        </Container>
    );
};

export default  ProductList;
