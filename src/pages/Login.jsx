import React, { useState } from "react";
import styled from "styled-components";

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: white;
`;

const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Login = () => {
  const initialFormData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Log in. Username: ${formData.username} Password: ${formData.password}`
    );
    setFormData(initialFormData);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <LoginFormContainer>
      <LoginForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="username">Username:</FormLabel>
        <FormInput
          type="text"
          id="username"
          value={formData.username}
          onChange={handleInputChange}
        />

        <FormLabel htmlFor="password">Password:</FormLabel>
        <FormInput
          type="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <FormButton type="submit">Login</FormButton>
      </LoginForm>
    </LoginFormContainer>
  );
};

export default Login;
