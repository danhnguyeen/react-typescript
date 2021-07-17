import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../store/types";
import { addTodo, setNewTodo } from "../store/actions";

function TodoAdd() {
  const todo = useSelector((state: Store) => state.newTodo);
  const dispath = useDispatch();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={todo}
        onChange={(event) => dispath(setNewTodo(event.target.value))}
      />
      <Button onClick={() => dispath(addTodo())}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
