import styled from "styled-components";

import useCrud from "../hook/useCrud";

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
  const baseUrl = "https://dummyjson.com/todos";
  const { data, loading, error, setData, createItem, updateItem, deleteItem } =
    useCrud(baseUrl);
  const handleToggleCompletion = async (taskId) => {
    try {
      const updatedTodos = data.todos.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );

      await updateItem(taskId, { todos: updatedTodos });
      console.log(updatedTodos);
      setData((prevData) => ({ ...prevData, todos: updatedTodos }));
    } catch (error) {
      console.error("Toggle completion error:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteItem(taskId);
      console.log("deleted task " + taskId);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div>
      <ul>
        {data.todos &&
          data.todos.map((task, index) => (
            <List key={index}>
              <ListId>{index + 1}</ListId>
              <ListName>{task.todo}</ListName>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompletion(`${task.id}`)}
              />
              <Button onClick={() => handleDelete(`${task.id}`)}>Delete</Button>
            </List>
          ))}
      </ul>
    </div>
  );
};

export default Task;
