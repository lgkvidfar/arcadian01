import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from './app/hooks';

import Header from './components/generic/Header';
import Notification from './components/generic/notification/Notification';
import NavBar from './components/navigation/NavBar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ListAllUsersPage from './pages/listPages/ListAllUsersPage';
import LoginPage from './pages/userPages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import ProfilePage from './pages/userPages/ProfilePage';
import RegisterPage from './pages/userPages/RegisterPage';
import TodoPage from './pages/TodoPage';
import PlayGround from './pages/PlayGround';

const App = () => {
    const globalMessage = useAppSelector((state) => state.notification.message);

    return (
        <div>
            {globalMessage && <Notification />}
            <Header text="arcadian 0.1" />
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/playground" element={<PlayGround />} />
                <Route path="/user/profile" element={<ProfilePage />} />
                <Route path="/users/login" element={<LoginPage />} />
                <Route path="/users/register" element={<RegisterPage />} />
                <Route path="/users/get/all" element={<ListAllUsersPage />} />
                <Route path="about">
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>
                <Route path="/todos" element={<TodoPage />} />
                <Route path="/products/get/all" element={<ProductListPage />} />
            </Routes>
        </div>
    );
};

export default App;
