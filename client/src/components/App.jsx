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
        alert("Data has been sent to the server");
        getBucketList();
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
      .catch(() => {
        alert("Error retreiving data!!!");
      });
  }

  //   function handleDelete(id) {
  //     axios.delete(`http://localhost8080/api/${items[0]._id}`)
  //     .then(result => {
  //       const data = result.json();
  //       setItems(data)
  //     })
  //     .catch(()=> {
  //       console.log("Error deleting data!!!")
  //     })
  //   }
  // console.log(items[1]._id)
  // }

  function handleDelete(id) {
    fetch(`http://localhost8080/api/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
  }
  console.log(items._id);

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
          id={items[0]._id}
          title={todoItem.title}
          content={todoItem.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
