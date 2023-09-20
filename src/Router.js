import { Route, Routes } from "react-router-dom";
import Message from './Components/Message';
import Market from './Components/Market';
import Apply from './Components/Apply';
import Scroll from './Components/Scroll';
import About from './Components/About';
import Card from './Components/Card';
import Acard from './Components/Acard';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/message" element={<Message />} />
            <Route path="/market" element={<Market />} />
            <Route path="/card" element={<Card />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/acard" element={<Acard />} />
            <Route path="/scroll" element={<Scroll />} />
        </Routes>
    )
}