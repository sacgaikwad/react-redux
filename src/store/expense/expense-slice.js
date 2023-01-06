const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
    name:'expenseSlice',
    initialState:{
        expenseList:[]
    },
    reducers:{
        addExpenseAction: (currentSlice,action)=>{
            console.log(action);
            currentSlice.expenseList.push(action.payload)
        }
    }
});

export const {addExpenseAction} = expenseSlice.actions;