import React from 'react';
import Cookie from "js-cookie";
import { GoogleLogout } from "react-google-login";
// import { configs } from "../../configs"; // test only

export default function Navbar({ setSignin }) {
  const [user, setUser] = React.useState({
    name: '',
    imageUrl: ''
  });

  const logout = () => {
    Cookie.remove('googleId');
    // Cookie.set('googleId', googleId, { secure: true }); // for https
    setSignin(null);
  }

  React.useEffect(() => {
    if(Cookie.get("name") && Cookie.get("imageUrl")) {
      setUser({
        name: Cookie.get("name"),
        imageUrl: Cookie.get("imageUrl")
      });
    }
  }, []);

  return (
    <nav className="flex items-center md:sticky">
      <h3 className="flex-1">SPEZ Order</h3>
      <p>{user.name}</p>
      <img className="rounded-full h-16 w-16" src={user.imageUrl} alt={user.name} />
      <GoogleLogout
        clientId={process.env.GOOGLE_CLIENT_ID}
        // clientId={configs.GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={logout}
      />
    </nav>
  )
}
