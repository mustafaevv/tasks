import React, { useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const FormInput = styled.input`
  flex-grow: 1;
  background: gray;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #fff;
`;

const FormBtn = styled.button`
  border-radius: 8px;
  padding: 10px 15px;
  margin-left: 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;

function AddTask() {
  const formText= useRef()
  const [formData, setFormData] = useState({
    todo: "",
    userId: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTasks = {
      todo: formText.current.value,
      completed: false,
    };
    try {
      const newTask = await axios.post(
        "https://dummyjson.com/todos/add",
        formData
      );
      console.log("POST response:", newTasks);

      setFormData(newTasks);
      formText.current.value = ""
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput type="text" ref={formText}/>
      <FormBtn type="submit">Add</FormBtn>
    </Form>
  );
}

export default AddTask;
