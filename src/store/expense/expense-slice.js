const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
    name:'expenseSlice',
    initialState:{
        expenseList:[{name:"Apple",price : 1},{name:"Mango",price :2}]
    }
});