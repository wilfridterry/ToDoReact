import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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

                <FormControl>
                    <FormLabel id="priority">Priority</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="priority"
                        name="priority-group"
                    >
                        <FormControlLabel value="low" control={<Radio />} label="Low" />
                        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="high" control={<Radio />} label="High" />
                    </RadioGroup>
                </FormControl>
            
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