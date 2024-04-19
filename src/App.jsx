// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
import Layout from "./components/Loyout";
// import SearchBox from "./components/SearchBox/SearchBox";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { refreshThunk } from "./redux/auth/operation";
import PrivetRoutes from "./Routes/PrivetRoutes";
import PublicRoute from "./Routes/PublicRoutes";
import { selectIsRefreshing } from "./redux/auth/slise";
import Loader from "./Loader";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivetRoutes>
                <ContactsPage />
              </PrivetRoutes>
            }
          />
        </Route>
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
