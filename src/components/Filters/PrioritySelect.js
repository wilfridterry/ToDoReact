import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem"; 

export default function PrioritySelect({filter, onSelectFilter, width}) {
    const prioritiesData = [
        {value: 'all', label: 'All'},
        {value: 'low', label: 'Low'},
        {value: 'medium', label: 'Medium'},
        {value: 'high', label: 'High'},
    ];

    const priorities = prioritiesData.map(({value, label}) => {
        return <MenuItem key={label} value={value}>{label}</MenuItem>;
    });

    return (
        <FormControl variant="standard" sx={{ m: 1, width: width }}>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter}
                label="Age"
                onChange={(e) => onSelectFilter(e.target.value)}>
                {priorities}
            </Select>
        </FormControl>
    );
} 