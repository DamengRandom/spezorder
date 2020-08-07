import React from 'react';
import Cookie from "js-cookie";
import { GoogleLogout } from "react-google-login";
import { configs } from "../../configs"; // test only

export default function Navbar({ setSignin }) {
  const [user, setUser] = React.useState({
    name: ''
  });

  const logout = () => {
    Cookie.remove('googleId');
    // Cookie.set('googleId', googleId, { secure: true }); // for https
    setSignin(null);
  }

  React.useEffect(() => {
    if(Cookie.get("name")) {
      setUser({
        name: Cookie.get("name")
      });
    }
  }, []);

  return (
    <nav className="sticky">
      <div className="flex items-center bg-teal-400 p-6 pb-2">
        <h3 className="art-title text-2xl mr-4 text-white">EZ Order</h3>
        <span className="text-sm text-white"> : Make order menu easier ~~</span>
      </div>
      <div className="flex -ml-6 -mr-6 p-6 pl-6 pr-6 pt-0 pb-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#4fd1c5" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,85.3C672,53,768,43,864,42.7C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      <div className="flex items-center p-6 pl-6 pr-6 pt-0 pb-0">
        <p className="flex-1">Hi {user.name},</p>
        <GoogleLogout
          // clientId={process.env.GOOGLE_CLIENT_ID}
          clientId={configs.GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logout}
          render={renderProps => (
            <button onClick={renderProps.onClick} className="bg-transparent text-blue-700 font-semibold">
              Logout
            </button>
          )}
          icon={false}
        />
      </div>
    </nav>
  )
}
