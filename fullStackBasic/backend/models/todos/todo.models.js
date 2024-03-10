import mongoose from 'mongoose';
import { subToDo } from './sub_todo.models';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: String,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model('Todo', todoSchema);
