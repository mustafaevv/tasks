import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const List = styled.li`
  display: flex;
  background-color: gray;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 18px;
  border-radius: 8px;
  margin: 0 0 5px 0;

  &:first-child {
    margin-top: 20px;
  }
`;

const ListId = styled.span`
  font-weight: bold;
  margin-right: 20px;
`;

const ListName = styled.p`
  flex-grow: 1;
`;

const Button = styled.button`
  border-radius: 8px;
  padding: 8px 15px;
  margin-left: 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;

const Task = () => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios("https://dummyjson.com/todos");
        setTasks(res.data.todos);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/todos/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <ul>
        {tasks &&
          tasks.map((task, index) => (
            <List key={index}>
              <ListId>{index + 1}</ListId>
              <ListName>{task.todo}</ListName>
              <input type="checkbox" />
              <Button onClick={() => handleDelete(task.id)}>Delete</Button>
            </List>
          ))}
      </ul>
    </div>
  );
};

export default Task;
