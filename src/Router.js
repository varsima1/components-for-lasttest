import { Route, Routes } from "react-router-dom";
import Message from './Components/Message';
import Market from './Components/Market';
import Apply from './Components/Apply';
import Scroll from './Components/Scroll';

export default function Router() {
    return (
        <Routes>
            <Route path="/message" element={<Message />} />
            <Route path="/market" element={<Market />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/scroll" element={<Scroll />} />
        </Routes>
    )
}