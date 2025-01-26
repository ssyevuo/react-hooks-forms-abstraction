import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;

    //checked value for check boxes
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      // formData is an object, so we need to copy all the key/value pairs
      ...formData,
      // we want to overwrite the lastName key with a new value
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); //prevent refreshing
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName"
        onChange={handleChange} 
        value={formData.firstName} 
      />
      <input 
        type="text" 
        name="lastName"
        onChange={handleChange} 
        value={formData.lastName}
      />
      <input 
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
