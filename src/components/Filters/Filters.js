import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

export default function Filters(props) {
    return (
        <Box sx={{ p: 5, pb: 0 }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                >
                    <MenuItem value='low'>Low</MenuItem>
                    <MenuItem value='medium'>Medium</MenuItem>
                    <MenuItem value='high'>High</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                >
                    <MenuItem value='to-do'>To do</MenuItem>
                    <MenuItem value='in-progres'>In progres</MenuItem>
                    <MenuItem value='done'>Done</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}