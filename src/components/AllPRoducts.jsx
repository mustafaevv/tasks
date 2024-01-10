import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Title from "./Title";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;
  gap: 2em;
`;

const Card = styled.div`
  max-width: 330px;
  width: 100%;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const DivPRice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const Name = styled.h5`
  font-size: 18px;
  font-weight: 500;
`;
const Brand = styled.p`
  font-size: 18px;
`;
const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
const Discount = styled.p`
  font-size: 16px;
  text-decoration: line-through;
`;

const SearchFrom = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 15px;
  color: black;
  font-size: 18px;
`;

const AllPRoducts = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const { pathname } = useLocation();

  const ProductPathname = pathname === "/search-product";

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://dummyjson.com/products");
      const card = await data.data.products;
      setData(card);
      setFilteredData(card);
    };
    getData();
  }, []);
  const handleSearch = (term) => {
    const filteredProducts = data.filter(
      (product) =>
        product.title.toLowerCase().includes(term.toLowerCase()) ||
        product.brand.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredData(filteredProducts);
  };
  return (
    <>
      {ProductPathname ? (
        <Title>Search Products</Title>
      ) : (
        <Title>All Products</Title>
      )}
      <SearchProduct onSearch={handleSearch} />
      <Content>
        {filteredData &&
          filteredData.map((product, index) => (
            <Product d={product} key={index} />
          ))}
      </Content>
    </>
  );
};

export function Product({ d }) {
  const image = d.images[0];
  return (
    <Card>
      <ImgDiv>
        <CardImg src={image} alt={d.title} />
      </ImgDiv>
      <DivPRice>
        <Name>{d.title}</Name>
        <Brand>{d.brand}</Brand>
      </DivPRice>
      <DivPRice>
        <Price>{d.price} $</Price>
        <Discount>{d.discountPercentage}</Discount>
      </DivPRice>
    </Card>
  );
}

export function SearchProduct({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <SearchFrom>
      <SearchInput
        type="text"
        placeholder="Search product name or brand"
        value={searchTerm}
        onChange={handleSearch}
      />
    </SearchFrom>
  );
}

export default AllPRoducts;
