import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        
    }
);

export const Todo = mongoose.model("Todo", todoSchema);
