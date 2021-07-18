import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { getTotos } from "../store/store";
import { useAppDispatch } from "../hooks";

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar() {
  const dispatch = useAppDispatch();

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button
        onClick={() =>
          dispatch(
            getTotos(
              "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
            )
          )
        }
      >
        Load
      </Button>
    </Grid>
  );
}

export default TopBar;
