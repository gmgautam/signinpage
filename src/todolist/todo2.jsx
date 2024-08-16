import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const NetWebTodolist2 = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [editId, setEditId] = useState(null);
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState("");
  const [myTodo, setMyTodo] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.trim() === "") {
      alert("Please enter a task");
      return;
    }

    if (isUpdate) {
      setMyTodo((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, task: todo } : item
        )
      );
      setIsUpdate(false);
      setEditId(null);
    } else {
      setCount(count + 1);
      setMyTodo([...myTodo, { id: count, task: todo, completed: false }]);
    }

    setTodo("");
  };

  const handleEdit = (id, task) => {
    setIsUpdate(true);
    setEditId(id);
    setTodo(task);
  };

  const handleDelete = (id) => {
    setMyTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const handleComplete = (id) => {
    setMyTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{isUpdate ? "Edit Task" : "Add Task"}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "50px",
          lineHeight: "50px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="" style={{ fontSize: "20px", fontWeight: "700" }}>
            {isUpdate ? "Edit Task" : "Add Task"}
          </label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter your task"
            value={todo}
            style={{
              height: "20px",
              width: "160px",
              marginLeft: "10px",
              border: "1px solid black",
              borderRadius: "2px",
            }}
          />
          <button
            style={{
              marginLeft: "5px",
              height: "30px",
              background: "black",
              color: "white",
              borderRadius: "7px",
            }}
          >
            {isUpdate ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
      <h2>Your Tasks</h2>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {myTodo.map((work) => {
          const { id, task, completed } = work;

          return (
            <div
              key={id}
              style={{
                border: "1px solid black",
                width: "200px",
                marginTop: "5px",
                height: "30px",
                lineHeight: "30px",
                borderRadius: "5px",
                textDecoration: completed ? "line-through" : "none",
                color: completed ? "gray" : "black",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    width: "100%",
                    fontSize: "16px",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleComplete(id)}
                    style={{ marginRight: "10px" }}
                  />
                  {task}
                </div>
                <div
                  className="delete"
                  onClick={() => handleDelete(id)}
                  style={{ color: "red", width: "50px" }}
                >
                  <MdDelete />
                </div>
                <div
                  onClick={() => handleEdit(id, task)}
                  className="edit"
                  style={{ color: "blue" }}
                >
                  <FaRegEdit />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NetWebTodolist2;