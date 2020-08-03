import React from 'react';
import Cookie from "js-cookie";

export default function Layout({ children, ...props }) {
  const [token, setToken] = React.useState(null);
  const { signin } = props;

  React.useEffect(() => {
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
