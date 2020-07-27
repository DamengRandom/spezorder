import Head from 'next/head';
import { useRouter } from 'next/router';
import Cookie from "js-cookie";
import { GoogleLogin, GoogleLogout } from "react-google-login";
// import { configs } from "../configs";
// components
import Layout from "../components/templates/Layout";

function Home() {
  const Router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [signin, setSignin] = React.useState(null);

  React.useEffect(() => {
    if(Cookie.get('googleId')) {
      setSignin(Cookie.get('googleId'));
    }
    setLoading(false);
  }, []);

  const logout = () => {
    Cookie.remove('googleId');
    // Cookie.set('googleId', googleId, { secure: true }); // for https
    setSignin(null);
  }

  const successResponseFromGoogle = (response) => {
    console.log(response.profileObj);
    const { profileObj: { name, imageUrl, googleId } } = response;
    if (response && response.profileObj) {
      Cookie.set('googleId', googleId);
      Cookie.set('imageUrl', imageUrl);
      Cookie.set('name', name);
      // Cookie.set('googleId', googleId, { secure: true }); // for https
      setSignin(Cookie.get('googleId'));
    }
  }

  const failureResponseFromGoogle = () => {
    setSignin(null);
  }

  return loading ? <p>Loading ..</p> :
    <Layout className="container" signin={signin}>
      <Head>
        <title>SPEZ Order: Make The Order Simpler {`&`} Easier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {signin !== null && 
        <main className="flex-1">
          <GoogleLogout
            clientId={process.env.GOOGLE_CLIENT_ID}
            // clientId={configs.GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </main>
      }
      {signin === null &&
        <main className={"flex flex-col justify-center items-center h-full w-full"}>
          <h3 className="text-white mb-4">Make the order simpler {'&'} easier</h3>
          <GoogleLogin
            clientId={process.env.GOOGLE_CLIENT_ID}
            // clientId={configs.GOOGLE_CLIENT_ID}
            buttonText="Start EZ Order"
            onSuccess={successResponseFromGoogle}
            onFailure={failureResponseFromGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </main>
      }
    </Layout>
}

export default Home;
