import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: "1",
			title: "Estudar React",
			completed: false,
		},
		{
			id: "2",
			title: "Ler livros",
			completed: true,
		},
	]);

	const handleTaskClick = (taskID) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskID)
				return { ...task, completed: !task.completed };

			return task;
		});

		setTasks(newTasks);
	};

	const handleTaskAddition = (taskTitle) => {
		const newTasks = [
			...tasks,
			{
				title: taskTitle,
				id: uuidv4(),
				completed: false,
			},
		];

		setTasks(newTasks);
	};

	return (
		<>
			<div className="container">
				<AddTask handleTaskAddition={handleTaskAddition} />
				<Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
			</div>
		</>
	);
};

export default App;
