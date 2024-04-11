import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute, PublicRoute } from '../helpers';
import { Navigate } from 'react-router-dom';
import React from 'react';
import SignUp from '../pages/SignUp';
import ProfileCreation from '../pages/ProfileCreation';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import WhyDribbble from '../pages/WhyDribbble';
import Home from '../pages/Home';
import { Urls } from "../routes/url"
import Navbar from '../components/Navbar';

export function Routers() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<Navigate replace to="/sign-up" />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/profile-creation" element={<ProfileCreation />} />
          <Route path="/why-dribbble" element={<WhyDribbble />} />
          <Route path="/" element={<Navbar />} >
            <Route path="/home" element={<Home />} />
            {Urls.map(({ element, path }) => {
              return <Route key={element} path={path} element={element} />
            })}
          </Route>

        </Route>
      </Routes>
    </>
  );
}
