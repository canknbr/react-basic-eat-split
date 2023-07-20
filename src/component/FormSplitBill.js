import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend ,handleSplitValue}) => {
  const [billValue, setBillValue] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = billValue ? billValue - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!billValue || !paidByUser) return;
    handleSplitValue(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    setBillValue("");
    setPaidByUser("");
    
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        name=""
        id=""
        value={billValue}
        onChange={(e) => setBillValue(+e.target.value)}
      />

      <label htmlFor="">🧍‍♀️Your Expense</label>
      <input
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            +e.target.value > billValue ? billValue : +e.target.value
          )
        }
        type="text"
      />

      <label htmlFor="">👯‍♀️ {selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label htmlFor="">Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
        name=""
        id=""
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
