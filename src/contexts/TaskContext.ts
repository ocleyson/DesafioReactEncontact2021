import React from "react";

export interface ITask {
    id: string;
    title: string;
    isDone: boolean;
}

export interface ITaskContext {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TaskContext = React.createContext<ITaskContext>({
    tasks: [],
    setTasks: () => {}
})