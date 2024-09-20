import React, { useRef, useState } from "react";
// import Todoitems from "./Todoitems";

const Todo = () => {

    const [tasks, settasks] = useState([]);
    const [newtask, setnewtasks] = useState([]);
    const [filter, setfilter] = useState([]);
    const handleAddTask = () => {
        if (newtask) {
            settasks([...tasks, {
                text: newtask,
                completed: false
            }]);
            setnewtasks('')
        }
    };
    const checktask = (index) => {
        const updatetask = [...tasks];

        updatetask[index].completed = !updatetask[index].completed;

        settasks(updatetask)
    };

    const handleremovetask = (index) => {
        const updatetask = tasks.filter((_, i) => i !== index);
        settasks(updatetask);
    }

    const filtertask = tasks.filter(tasks => {
        if (filter === 'completed') {
            return tasks.completed;

        }
        if (filter === 'incompleted') {
            return !tasks.completed;

        }
        return true;
    })

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">To-Do List</h1>

                    <div className="flex space-x-2 mb-4">
                        <input
                            type="text"
                            value={newtask}
                            onChange={(e) => setnewtasks(e.target.value)}
                            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Add a new task"
                        />

                        <button
                            onClick={handleAddTask}
                            className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-600 transition"
                        >Add</button>
                    </div>
                    <div className="flex  space-y-2 space-x-4 mb-4">
                    <div className="flex justify-between mb-4">
                        <button
                            onClick={() => setfilter('all')}
                            className={`px-1 py-1 sm:px-2 sm:py-1 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg transition`}
                        >
                            All
                        </button>
                    </div>
                    <div className="flex justify-between mb-4">
                        <button
                            onClick={() => setfilter('completed')}
                            className={`px-1 py-1 sm:px-2 sm:py-1 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg transition`}
                        >
                            complete
                        </button>
                    </div>
                    <div className="flex justify-between mb-4">
                        <button
                            onClick={() => setfilter('incompleted')}
                            className={`px-1 py-1 sm:px-2 sm:py-1 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg transition`}
                        >
                            Incomplete
                        </button>
                    </div>
                    </div>
                    <ul>
                        {filtertask.length ? (
                            filtertask.map((task, index) => (
                                <li key={index}
                                    className="flex items-center justify-between mb-2"
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => checktask(index)}
                                            className="mr-2"
                                        />
                                        <span className={`text-sm sm:text-base ${task.completed ? 'line-through text-gray-500' : ''}`}>
                                            {task.text}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => handleremovetask(index)}
                                        className="bg-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-red-600 transition"
                                    >
                                        Remove
                                    </button>
                                </li>

                            ))
                        ) : (

                            <li className="text-gray-500">No tasks found</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )

}
export default Todo;