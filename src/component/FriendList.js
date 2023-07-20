import React from "react";
import Friend from "./Friend";
const FriendList = ({ friends, handleSelectedFriend, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            selectedFriend={selectedFriend}
            handleSelectedFriend={handleSelectedFriend}
            key={friend.id}
            friend={friend}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
