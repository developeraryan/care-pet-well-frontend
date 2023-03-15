import React, { useEffect, useState } from "react";
import axios,{setPost} from "axios";

const Data = () => {
  let [user, setUser] = useState({ name: "", gender: "" });

  console.log(user);

  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({...user, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let {name,gender}=user;
    let data = await fetch("/adduser",{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({name,gender})
    })
    // const result = await data.json()
  };

  return (
    <div>
      <form method="POST">
        <label>Name</label>
        <input value={user.name} name="name" onChange={handleInput} />
        <label>Gender</label>
        <input value={user.gender} name="gender" onChange={handleInput} />
        <button
          onClick={
            handleSubmit}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Data;
