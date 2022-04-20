import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { useHistory } from "react-router";

const Navbar = () => {
  const history = useHistory();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Stack spacing={2} direction="row">
            <Button
              onClick={() => history.push("/list")}
              variant="outlined"
              color="inherit"
            >
              List Persons
            </Button>
            <Button
              onClick={() => history.push("/register")}
              variant="outlined"
              color="inherit"
            >
              New Person
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
