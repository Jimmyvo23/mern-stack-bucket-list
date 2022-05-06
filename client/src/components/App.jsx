import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  useEffect(() => {
    getBucketList();
  }, []);
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
      content: textItem.content,
    };

    axios
      .post("http://localhost:8080/api/saved", payload)
      .then(() => {
        console.log("Data has been sent to the server");
        getBucketList();
        setTextItem({
          title: "",
          content: "",
        });
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }

  function getBucketList() {
    axios
      .get("http://localhost:8080/api")
      .then((response) => {
        const data = response.data;
        setItems(data);
      })
      .catch((err) => {
        console.log(err)
        alert("Error retreiving data!!!");
      });
  }

  function handleDelete(id) {
    axios
      .delete(`http://localhost:8080/api/${id}`)
      .then(() => {
        getBucketList();
      })
      .catch((err) => {
        console.log(err)
        console.log("Error deleting data!!!");
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
          id={todoItem._id}
          title={todoItem.title}
          content={todoItem.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
