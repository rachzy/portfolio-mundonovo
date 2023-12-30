import { Box } from "@mui/material";

export default function Video() {
    return(
        <Box sx={{display: "flex", justifyContent: "center", width: "100%", marginY: 8}}>
            <Box sx={{width: "80%"}}>
                <video style={{width: "100%"}} controls />
            </Box>
        </Box>
    )
}