import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  const [textItem, setTextItem] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setTextItem((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addItem(e) {
    e.preventDefault();

    const payload = {
      title: textItem.title,
      content: textItem.title,
    };

    axios({
      url: "http://localhost:8080/api/saved",
      method: "POST",
      data: payload,
    })
      .then(() => {
        alert("Data has been sent to the server");
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }

  function handleDelete(id) {
    setItems((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      addItem();
    }
  }
  return (
    <div>
      <Header />

      <CreateArea
        onAdd={addItem}
        change={handleChange}
        title={textItem.title}
        content={textItem.content}
        keyDown={handleKeyPress}
      />
      {items.map((todoItem, index) => (
        <Note
          onDelete={handleDelete}
          key={index}
          id={index}
          title={todoItem.title}
          content={todoItem.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
