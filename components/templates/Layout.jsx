import React, { useEffect, useState } from 'react';
import Cookie from "js-cookie";
import { string, array } from 'prop-types';

export default function Layout({ children, ...props }) {
  const [token, setToken] = useState(null);
  const { signin } = props;

  useEffect(() => {
    if(Cookie.get("googleId")) {
      setToken(Cookie.get("googleId"));
    }
  });

  return (
    <div className={(token && signin !== null) ? "w-full h-full flex flex-col" : "login h-full"}>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: array,
  signin: string 
};
