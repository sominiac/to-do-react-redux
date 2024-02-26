import {createSlice} from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        currentTasks: [{
            id: "Сходить в магазин",
            text: "Сходить в магазин"
        }],
        completedTasks: []
    },
    reducers: {
        toggleTaskState: (state, {payload}) => {
            if (payload.isCurrentTasks) {
                state.currentTasks = state.currentTasks.filter(({id}) => id !== payload.task.id);
                state.completedTasks = [...state.completedTasks, payload.task];
            } else {
                state.completedTasks = state.completedTasks.filter(({id}) => id !== payload.task.id);
                state.currentTasks = [...state.currentTasks, payload.task];
            }
        },
        addNewTask: (state, {payload}) => {
            state.currentTasks = [...state.currentTasks, {
                id: `${payload.taskText}${state.currentTasks.length}`,
                text: payload.taskText
            }];
        },
    },
})

export const {toggleTaskState, addNewTask} = taskSlice.actions

export default taskSlice.reducer