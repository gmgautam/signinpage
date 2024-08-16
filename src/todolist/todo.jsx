import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import "./todo.css";
const Todolist = () => {


  const [isUpdate, setIsUpdate] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [todo, setTodo] = useState("");
  const [myTodo, setMyTodo] = useState([]);
  //   getting the value fron the input
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  //   set task when click on the button
  const handleClick = (e) => {
    e.preventDefault();
    setIsUpdate(false);
    if (todo) {
      //   setMyTodo([...myTodo, todo]);
      setMyTodo((prev) => [...prev, todo]);
      setTimeout(() => {
        setTodo("");
      }, 200);
    } else {
      alert("please Enter the todo");
    }
  };

  // delete the task when click on delete
  const handledelete = (task) => {
    setMyTodo((prev) => prev.filter((inlist) => inlist !== task));
  };

  //   To edit the todo
  const handleEdit = (task ,index,todo) => {
          setIsUpdate(true);
      const isExist = myTodo.filter((inlist) => inlist != task);
      const isElementExists = myTodo.findIndex(todo => todo === task);
  };
  console.log(todo)
  console.log(myTodo)
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add Your Task</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "50px",
          lineHeight: "50px",
        }}
      >
        <form onSubmit={handleClick}>
          <label htmlFor="" style={{ fontSize: "20px", fontWeight: "700" }}>
            Add task
          </label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter the todo"
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
            {isUpdate ? "udate todo" : "Add Todo"}
          </button>
        </form>
      </div>
      <h2>Your Task</h2>
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
        {myTodo.map((task, index) => {
          return (
            <div
              key={index}
              style={{
                border: "1px solid black",
                width: "200px",
                marginTop: "5px",
                height: "30px",
                lineHeight: "30px",
                borderRadius: "5px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    width: "100%",
                    fontSize: "16px",
                  }}
                >
                  {task}
                </div>
                <div
                  className="delete"
                  onClick={() => handledelete(task)}
                  style={{ color: "red", width: "50px" }}
                >
                  <MdDelete />
                </div>
                <div
                  onClick={() => handleEdit(task, index,todo)}
                  className="delete"
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
export default Todolist;
