import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

export const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const [friends, setFriends] = useState([]);
  const refInput = useRef("");
  const navigate = useNavigate();
  
  
  // Set up the proper usage of useQuery hook

  const usersQuery = useQuery(`users/`, async () => await axios.get(url), {
    refetchOnWindowFocus: false,
    enabled: false
  })

  useEffect(() => {
    // Load todos (if any) from localStorage
    
    // parse through the stored to-do's and set them in state
    
  }, []);

  useEffect(() => {
    // Save todos to localStorage
    if(usersQuery.isFetched && friends ==="")
    setTodos(usersQuery.data.data.todos)
    setFriends(usersQuery.data.data.friends)
  }, [todos,
      setTodos,
      setFriends,
      usersQuery.isFetched,
      usersQuery.data.data.todos,
      usersQuery.data.data.friends

    ]);

  const handleAddTodo = () => {
      // access the input and update the state variable "todos"
    usersQuery.refetch()
    };


  const handleFetchFriends = async () => {
    // refetch your implementation of the useQuery hook
    await usersQuery.refetch();
    
    // extract data into a new array and extract only the names from this array of objects
    setFriends(data.friends)
    
    //setFriends(friendsNamesArray);
  }

  const handleDeleteTodo = (index) => {
    // filter out the todo that was deleted from the array - hint: keep the rest of the todos in an array
  setTodos(data.todos)
    // update todos array
  };
  
  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.setItem(todos, JSON.stringify(friends))
    // route user back to sign in page
    const p = JSON.parse(localStorage.getItem(todos))
  };

  return (
    <div>
      <input
        type="text"
      />
      <button onClick={handleAddTodo}>Add to your list</button>
      <h3>To do:</h3>
      <ul id="todo-list">
        {/* Use map to return the todos here :) */}
        {todos?.map((todos, index) => {
          return(
            <li key={index}>
              {todos}
            </li>
          )
        })}
      </ul>
      <button id="get-friends-btn" onClick={handleFetchFriends}>Get friends list</button>
      <h3>Your active friends: </h3>
      <ul id="friends-list">
        {friends?.map((friend, index) => {
          return(
            <li key={index}>
              {friend}
            </li>
          )
        })}
      </ul>
      <button id="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
