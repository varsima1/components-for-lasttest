import { Route, Routes } from 'react-router-dom';
import Login from './Components/user/Login';
import Signup from './Components/user/Signup';

export default function RouterAuth() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
    }