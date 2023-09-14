import { useState, useEffect } from "react";

export const useTasks = (storageItem, alternative) => {

    const storageCheck = () => JSON.parse(localStorage.getItem(storageItem)) || alternative; /*("tasks") || [] AND ("hide") || false*/
    const [state, setState] = useState(storageCheck); /* state, setState*/
    
    useEffect(() => {
      localStorage.setItem(storageItem, JSON.stringify(state)) /* "tasks" (tasks) [tasks] AND "hide" (hide) [hide]*/
    }, [state, storageItem]);
  
    const toggleHideDone = () => {
      setState(hideDone => !hideDone);
    };
  
    const removeTask = (id) => {
      setState(tasks => tasks.filter(task => task.id !== id));
    };
  
    const toggleTaskDone = (id) => {
      setState(tasks => tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
    };
  
    const setAllDone = () => {
      setState(tasks => tasks.map(task => ({ ...task, done: true })));
    };
  
    const addNewTask = (newTaskContent) => {
      setState(tasks => [...tasks, {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
      ])
    };
  
    return ([state, toggleHideDone, removeTask, toggleTaskDone, setAllDone, addNewTask]);
  
};

export const useHide = () => {

    const hideStorageCheck = () => JSON.parse(localStorage.getItem("hide")) || false;
    const [hideDone, setHideDone] = useState(hideStorageCheck);
  
    useEffect(() => {
      localStorage.setItem("hide", JSON.stringify(hideDone))
    }, [hideDone]);
  
    const toggleHideDone = () => {
      setHideDone(hideDone => !hideDone);
    };
  
    return ([hideDone, toggleHideDone]);
  };