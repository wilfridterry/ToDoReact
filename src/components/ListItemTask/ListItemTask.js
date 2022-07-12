import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from '@mui/icons-material/Star';


export default function ListItemTask({task, onCheckTask}) {
    const {id, priority, content, status} = task;

    const labelId = `checkbox-list-label-${id}`;

    const priorityClasses = {
      low: 'primary',
      medium: 'success',
      high: 'secondary'
    };

    const priorityClass = priorityClasses[priority];

    return (
        <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
              </IconButton>
            }
            disablePadding>
            
            <ListItemButton role={undefined}  dense onClick={() => onCheckTask(id)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={status}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={content} />
              <ListItemIcon>
                <StarIcon color={priorityClass}/>
              </ListItemIcon>
            </ListItemButton>
        </ListItem>
    );
}