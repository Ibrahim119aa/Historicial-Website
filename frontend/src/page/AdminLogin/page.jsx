import React from "react";
const AdminSign = React.lazy(() => import("../../components/AdminSignin/AdminSign"));
const AdminLoginPage = () => {
    return (
        <div>
            <AdminSign />
        </div>
    )
}
export default AdminLoginPage;