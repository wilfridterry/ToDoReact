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
  #increment = 4;

  constructor(props) {  
    super(props);

    this.state = {
      tasks: [
        {
          "id": 1,
          "priority": "low",
          "content": "Lorem ipsum, dolorassumenda, blanditiis oepellendus!",
          "status": true
        },
        {
          "id": 2,
          "priority": "medium",
          "content": "Lorem ipsum, dolor sit amet consectetur adipisicing eli!",
          "status": false
        },
        {
          "id": 3,  
          "priority": "high",
          "content": "Loi assumenda, blanditiis odio? A fuga, quam iusto optio enim ut repellendus!",
          "status": false
        },
      ],
      filter: 'all'
    };
  }

  handleSelectFilter = filter =>  {
    this.setState({filter});
  }

  handleSubmit = (priority, content) => {

    this.setState(state => {
      const tasks = state.tasks.slice();

      tasks.push({
        id: this.#increment,
        priority: priority,
        content: content,
        status: false
      });

      return {tasks: tasks};
    });

    this.#increment += 1;
  }

  handleCheckTask = (id) => {
    this.setState(state => {
      const tasks = state.tasks.map(task => {
        if (task.id === id) {
          return {...task, ['status']: !task.status};
        } 

        return task;
      })

      return {tasks: tasks};
    });
  }

  filterByPriority(filter, tasks) {
    if (filter !== 'all') {
      return tasks.filter(task => task.priority === filter);
    }

    return tasks;
  }

  render() {
    const {filter, tasks} = this.state;

    const tasksFiltered = this.filterByPriority(filter, tasks);

    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Header 
                  tasksLength={tasksFiltered.length} 
                  filter={filter}
                  onSelectFilter={this.handleSelectFilter}
                  />
              <ListTasks tasks={tasksFiltered} onCheckTask={this.handleCheckTask}/>
            </Grid>
            <Grid item xs={6}>
              <AddForm onSubmit={this.handleSubmit}/>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
