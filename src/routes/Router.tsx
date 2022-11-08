import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages";
import { Layout } from "@/components";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
