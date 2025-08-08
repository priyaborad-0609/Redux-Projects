import { createSlice } from "@reduxjs/toolkit";


const initialState = []
const todoSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        Addtodo: (state, action) => {
            state.push({ text: action.payload, completed: false })
        },
        Removetodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },

        // updateTodo: (state, action) => {
        //     const { id, newText } = action.payload;
        //     const todo = state.list.find(todo => todo.id === id);
        //     if (todo) {
        //         todo.text = newText;
        //     }
        // },
    },
});

export default todoSlice.reducer
export const { Addtodo, Removetodo, updateTodo } = todoSlice.actions;