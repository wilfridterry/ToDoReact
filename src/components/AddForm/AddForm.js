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
import { Component } from "react";

export default class AddForm extends Component{
    constructor(props) {
        super(props);

        this.state = {
            priority: '',
            content: ''
        };
    }


    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {priority, content} = this.state;

        if (!priority || !content) {
            return;
        }
        
        this.props.onSubmit(priority, content);
        
        this.setState({
            priority: '',
            content: ''
        });
    }

    render() {
        const radios = [
            {value: 'low', label: 'Low'},
            {value: 'medium', label: 'Medium'},
            {value: 'high', label: 'High'}
        ];

        return (
            <Box sx={{ p: 5, pb: 0 }}>
                 <form action="#" onSubmit={this.handleSubmit}>
                     <Typography variant="h6" gutterBottom component="div">
                         Add a new task
                     </Typography>
     
                     <FormControl>
                         <FormLabel id="priority">Priority</FormLabel>
                         <RadioGroup
                             row
                             aria-labelledby="priority"
                             name="priority"
                             value={this.state.priority}
                             onChange={this.handleChange}>
                         {radios.map(({value, label}) => {
                            return <FormControlLabel
                                    key={value} 
                                    value={value} 
                                    control={<Radio />} 
                                    label={label} 
                                    /> 
                         })}
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
                         name="content"
                         value={this.state.content}
                         onChange={this.handleChange}
                     />
                    <Button color="secondary" 
                            variant="outlined" 
                            sx={{width: '100%', mt: 5}}
                            type="submit"> 
                         <AddIcon/>
                         Add 
                    </Button>
                 </form>
            </Box>
         );
    }
}