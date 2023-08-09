import TodoList from "./comps/todolist.js";
import Add from "./comps/add.js";
import Divider from "@mui/material/Divider";
export default function Home() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>My To Dos 📝</h1>
      <Divider sx={{ height: ".1px", bgcolor: "grey.500", my: 2, mt: -1 }} />
      <Add />
      <TodoList />
    </>
  );
}
