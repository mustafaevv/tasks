import React from "react";
import styled from "styled-components";

import UserCard from "../components/UserCard";
import useCrud from "../hook/useCrud";
import Title from "../components/Title";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const User = () => {
  const baseUrl = "https://dummyjson.com/user";
  const { data } = useCrud(baseUrl);
  return (
    <div>
      <Title>All Users</Title>
      <Content>
        {data.users &&
          data.users.map((user, index) => <UserCard data={user} key={index} />)}
      </Content>
    </div>
  );
};

export default User;
