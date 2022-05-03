import React from "react";

function CreateArea(props) {
  // function handleChange(event) {
  //   const { value, name } = event.target;

  //   setTextItem((prevValue) => {
  //     return {
  //       ...prevValue, [name] : value
  //     }
  //   });
  // }
  //  function submitNote(event) {
  //     props.onAdd(textItem);
  //     setTextItem({
  //         title:"",
  //         content:""
  //     });
  //     event.preventDefault();
  //
  // }

  return (
    <div>
      <form method="post" action="">
        <input
          onChange={props.change}
          name="title"
          placeholder="Bucket List"
          value={props.title}
        />
        <textarea
          onChange={props.change}
          name="content"
          placeholder="Where you want to do it ..."
          rows="3"
          value={props.content}
        />
        <button onKeyDown={props.keyDown} onClick={props.onAdd}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
