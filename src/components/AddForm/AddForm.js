import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

export default function AddForm(props) {
    const handleChange = (newValue) => {
        // setValue(newValue);
    };

    return (
       <Box sx={{ p: 5, pb: 0 }}>
            <form action="#">
                <Typography variant="h6" gutterBottom component="div">
                    Add a new task
                </Typography>
                <TextField
                    sx={{width: '100%', mb: 2}}
                    id="filled-select-priority"
                    select
                    label="Select"
                    helperText="Please select your priority"
                    variant="filled"
                >
                    <MenuItem value='low'>Low</MenuItem>
                    
                </TextField>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateTimePicker
                        sx={{width: '100%', mt: 5}}
                        label="Due Date"
                        // value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            
                <TextField
                    sx={{width: '100%', mt: 5}}
                    id="filled-multiline-static"
                    label="What?"
                    multiline
                    rows={4}
                    variant="filled"
                    helperText="Please text what do you want to do"
                />
               <Button color="secondary" variant="outlined"  sx={{width: '100%', mt: 5}}> 
                    <AddIcon/>
                    Add
               </Button>

            </form>
       </Box>
    );
}