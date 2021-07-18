import { Button, Input, Grid } from "@chakra-ui/react";
import { addTodo, setNewTodo } from "../store/store";
import { useAppDispatch, useAppSelector } from "../hooks";

function TodoAdd() {
  const todo = useAppSelector((state) => state.totos.newTodo);
  const dispath = useAppDispatch();

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
