import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function DescriptionAlerts({
    severity,
    alertTitle,
    message,
    duration = 3000,
}) {
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);
        return () => clearTimeout(timer); // Cleanup on unmount
    }, [duration]);

    if (!visible) return null;

    return (
        <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity={severity}>
                <AlertTitle>{alertTitle}</AlertTitle>
                {message}
            </Alert>
        </Stack>
    );
}
