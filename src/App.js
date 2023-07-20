import React, { useState } from "react";
import FriendList from "./component/FriendList";
import FormAddFriend from "./component/FormAddFriend";
import Button from "./component/Button";
import FormSplitBill from "./component/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [isAddFriend, setIsAddFriend] = useState(true);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleIsAddFriend = () => {
    setIsAddFriend(!isAddFriend);
    setSelectedFriend(null);
  };
  const addFriend = (newFriend) => {
    setFriends((friends) => [...friends, newFriend]);
    setIsAddFriend(false);
  };
  const handleSelectedFriend = (friend) => {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
    setIsAddFriend(false);
  };
  const handleSplitValue = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          handleSelectedFriend={handleSelectedFriend}
        />
        {isAddFriend && <FormAddFriend addFriend={addFriend} />}
        <Button onClick={handleIsAddFriend}>
          {isAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitValue={handleSplitValue}
        />
      )}
    </div>
  );
};

export default App;
