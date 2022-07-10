import { CssBaseline } from "@mui/material";
import { Component, Fragment } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ListTasks from "../ListTasks/ListTasks";
import Header from "../Header/Header";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AddForm from "../AddForm/AddForm";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

class App extends Component {
  constructor(props) {  
    super(props);

    this.state = {tasks: [
      {
        "id": 1,
        "priority": "low",
        "dueDate": 1657467554,
        "content": "Need to do this",
        "status": "to-do"
    }
    ]};
  }

  render() {
    const tasks = this.state.tasks;

    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Header tasksLength={tasks.length}/>
              <ListTasks tasks={tasks}/>
            </Grid>
            <Grid item xs={6}>
              <AddForm/>
            </Grid>
          </Grid>

        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
