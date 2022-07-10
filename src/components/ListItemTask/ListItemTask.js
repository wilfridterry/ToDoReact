import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

export default function ListItemTask({task}) {
    const {id, priority, dueDate, content, status} = task;

    const labelId = `checkbox-list-label-${id}`;

    return (
        <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined}  dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={status === 'done'}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={content} />
            </ListItemButton>
        </ListItem>
    );
}