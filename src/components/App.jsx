import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TweetsPage from "../pages/UsersPage";
import Layout from "./Layout";
import { Navigate } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
