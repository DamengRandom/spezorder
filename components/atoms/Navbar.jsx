import React from 'react';
import Cookie from "js-cookie";

export default function Navbar() {
  const [user, setUser] = React.useState({
    name: '',
    imageUrl: ''
  });

  React.useEffect(() => {
    if(Cookie.get("name") && Cookie.get("imageUrl")) {
      setUser({
        name: Cookie.get("name"),
        imageUrl: Cookie.get("imageUrl")
      });
    }
    console.log("signin prop now: ", user);
  }, []);

  return (
    <nav className="flex items-center">
      <h3 className="flex-1">SPEZ Order</h3>
      <p>{user.name}</p>
      <img className="rounded-full h-16 w-16" src={user.imageUrl} alt={user.name} />
    </nav>
  )
}
