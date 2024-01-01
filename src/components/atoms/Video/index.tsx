import { Box, Paper } from "@mui/material";

export default function Video() {
    return(
        <Box sx={{display: "flex", justifyContent: "center", width: "100%", marginY: 8}}>
            <Paper sx={{width: "80%"}} elevation={24}>
                <video style={{width: "100%", height: "100%"}} controls />
            </Paper>
        </Box>
    )
}