import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		completed: {
			type: Boolean,
			default: false,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		subTodo: [  // Array of sub Todos
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "SubTodo",
			},
		],
	},
	{ timeStamp: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
