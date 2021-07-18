import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { deleteTodo, toggleTodo, updateTodo } from "../store/store";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Todo } from "../store/types";

function TodoListItems() {
  const todos = useAppSelector((state) => state.totos.todos);
  const dispatch = useAppDispatch();

  return (
    <>
      {todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => dispatch(toggleTodo(todo.id))} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(event) =>
              dispatch(
                updateTodo({ ...todo, text: event.target.value } as Todo)
              )
            }
          />
          <Button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
