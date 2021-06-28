import React from "react";
import "./Taskmgr.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Taskmgr() {
  const [inputs, setInputs] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {

    const a = axios.get("http://localhost:8080/demo").then((req) => {

      setInputs(req.data);
    });


  }, [])

  const deleteItems = (id) => {
    /*http://localhost:8080/delete/*/
    var url = "http://localhost:8080/delete/" + id;

    const a = axios.get(url).then((req) => {

      setInputs(req.data);
    });


    console.log(id);

  };

  function setItem(e) {
    var item = {
      taskname: e,
      done: false,
    };
    console.log(item);

    axios.post("http://localhost:8080/create", item).then((req) => {

      setInputs(req.data);
      setInput("")
    });



  }

  function checkSts(e) {
    /*http://localhost:8080/upd/*/
    console.log(e);
    var url = "http://localhost:8080/upd/" + e;
    const a = axios.get(url).then((req) => {

      setInputs(req.data);
    });



  }

  return (
    <div>
      <h2>Task</h2>
      <div className="mainHeading">
        <h1>TASK</h1>
      </div>

      <div className="input">
        <i onClick={() => setItem(input)} className="fas fa-plus fa-lg"></i>
        <input
          className="taskIn"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder=" Add a   task"
        />
      </div>
      {
        inputs.map(itm => {

          return (
            <div style={{ display: "flex" }} key={itm.id}> <p className="list">
              <input onClick={() => checkSts(itm.id)} type="checkbox" checked={itm.done} />
              <span>{itm.taskname} </span>  <button className="delete" onClick={() => deleteItems(itm.id)}>delete item</button></p> <br /> </div>
          )


        })
      }
    </div>
  );
}

export default Taskmgr;
