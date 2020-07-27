import React from 'react';
import Cookie from "js-cookie";

// components
import Footer from "../atoms/Footer";
import Navbar from '../atoms/Navbar';

export default function Layout({ children, ...props }) {
  const [token, setToken] = React.useState(null);
  const { signin } = props;

  React.useEffect(() => {
    if(Cookie.get("googleId")) {
      setToken(Cookie.get("googleId"));
    }
    console.log("signin prop now: ", signin);
  });
  return (
    <div className={(token && signin !== null) ? "w-full h-full flex flex-col" : "login h-full"}>
      {(token && signin !== null) && <Navbar />}
      {children}
      {(token && signin !== null) && <Footer />}
    </div>
  )
}
