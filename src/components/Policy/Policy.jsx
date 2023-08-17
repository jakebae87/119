import { Route, Routes } from "react-router-dom";

import ToS from "./ToS";
import Privacy from "./Privacy";
import Guide from "./Guide";
import Refund from "./Refund";

function Policy() {
    return (
        <Routes>
            <Route path="/ToS" element={<ToS />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/Guide" element={<Guide />} />
            <Route path="/Refund" element={<Refund />} />
        </Routes>
    );
}

export default Policy;