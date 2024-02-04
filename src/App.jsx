import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth";
import { Outlet } from "react-router-dom";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [login, logout]);

  // Render loading screen
  return !loading  ? (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block text-center">
        <Header  />
        <main className="my-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
