// UserCard.js
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  max-width: 330px;
  width: 100%;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 25px 0;
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

const UserCard = ({ data }) => {
  const { username, age, phone, image } = data;

  return (
    <Card>
      <ImgDiv>
        <CardImg src={image} alt={username} />
      </ImgDiv>
      <Name>{username}</Name>
      <Brand>Age: {age}</Brand>
      <Price>Phone: {phone}</Price>
    </Card>
  );
};

export default UserCard;
