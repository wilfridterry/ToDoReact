import Typography from "@mui/material/Typography";
import Filters from "../Filters/Filters";

export default function Header({tasksLength}) {
    return (
        <>
            <Typography variant="h5" gutterBottom component="div" sx={{ p: 5, pb: 0 }}>
                Number of tasks: {tasksLength}
            </Typography>
            <Filters/>
        </>
    );
}