import List from "@mui/material/List";
import ListItemTask from "../ListItemTask/ListItemTask";

export default function ListTasks({tasks, onCheckTask}) {
    const tasksItems = tasks.map(task => {
        return <ListItemTask key={task.id} task={task} onCheckTask={onCheckTask}/>
    });

    return (
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {tasksItems}
        </List>
    );
}