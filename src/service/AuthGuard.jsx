// components/AuthGuard.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, requiredPermission }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkPermission = async () => {
            try {
                // Replace with your actual API call to check permissions
                const response = await fetch("/api/check-permission", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ permission: requiredPermission }),
                });

                const data = await response.json();
                setHasPermission(data.hasPermission);
            } catch (error) {
                console.error("Permission check failed:", error);
                setHasPermission(false);
            } finally {
                setIsLoading(false);
            }
        };

        checkPermission();
    }, [requiredPermission]);

    if (isLoading) {
        // You can return a loading spinner here if you want
        return <div>Loading...</div>;
    }

    return hasPermission ? (
        children
    ) : (
        <Navigate to="/hindi-qpr-branch-2-updated" replace />
    );
};

export default AuthGuard;
