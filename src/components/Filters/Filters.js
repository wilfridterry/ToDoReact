import Box from "@mui/material/Box";
import PrioritySelect from "./PrioritySelect";

export default function Filters(props) {
    return (
        <Box sx={{ p: 2, pb: 0 }}>
            <PrioritySelect 
                width="50%" 
                filter={props.filter}
                onSelectFilter={props.onSelectFilter} 
                />
        </Box>
    );
}