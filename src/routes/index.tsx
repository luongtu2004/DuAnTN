import DashboardPage from "@/pages/(dashboard)/dashboard/page";
import LayoutAdmin from "@/pages/(dashboard)/layout";
import ErrorPage from "@/pages/(website)/404/page";
import CartPage from "@/pages/(website)/home/_components/CartPage";
import PayPage from "@/pages/(website)/home/_components/PayPage";
import Sanphambt from "@/pages/(website)/home/_components/sanphambt";
import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import { Route, Routes } from "react-router-dom";
import AddUser from "@/pages/(dashboard)/dashboard/user/add";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="spbt" element={<Sanphambt />} />
                    <Route path="pay" element={<PayPage />} />
                    <Route path="cart" element={<CartPage />} />
                </Route>
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="addUser" element={<AddUser />} />
                </Route>
                <Route path="**" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default Router;
