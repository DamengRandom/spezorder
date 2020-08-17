import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Cookie from "js-cookie";
import { GoogleLogin } from "react-google-login";
import { configs } from "../configs"; // test only
// components
import Layout from "../components/templates/Layout";
import Dashboard from '../components/templates/Dashboard';

function Home() {
  const [loading, setLoading] = useState(true);
  const [signin, setSignin] = useState(null);

  useEffect(() => {
    if(Cookie.get('googleId')) {
      setSignin(Cookie.get('googleId'));
    }
    setLoading(false);
  }, []);

  const successResponseFromGoogle = (response) => {
    console.log(response.profileObj);
    const { profileObj: { name, googleId } } = response;
    if (response && response.profileObj) {
      Cookie.set('googleId', googleId);
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
      {(signin !== null || signin !== undefined) && 
        <main className="flex-1">
          {Cookie.get('googleId') && <Dashboard userId={Cookie.get('googleId')} setSignin={setSignin} />}
        </main>
      }
      {(signin === null || signin === undefined) &&
        <main className={"flex flex-col justify-center items-center h-full w-full"}>
          <h3 className="text-white mb-4">Make the order simpler {'&'} easier</h3>
          <GoogleLogin
            // clientId={process.env.GOOGLE_CLIENT_ID}
            clientId={configs.GOOGLE_CLIENT_ID}
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
