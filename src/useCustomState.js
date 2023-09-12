import { useState, useEffect } from "react";

export const useTasks = () => {

    const tasksStorageCheck = () => JSON.parse(localStorage.getItem("tasks")) || []; /*("tasks") || [] AND ("hide") || false*/
    const [tasks, setTasks] = useState(tasksStorageCheck); /* state, setState*/
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks)) /* "tasks" (tasks) [tasks] AND "hide" (hide) [hide]*/
    }, [tasks]);
  
    const removeTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id));
    };
  
    const toggleTaskDone = (id) => {
      setTasks(tasks => tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
    };
  
    const setAllDone = () => {
      setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
    };
  
    const addNewTask = (newTaskContent) => {
      setTasks(tasks => [...tasks, {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
      ])
    };
  
    return ([tasks, removeTask, toggleTaskDone, setAllDone, addNewTask]);
  
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