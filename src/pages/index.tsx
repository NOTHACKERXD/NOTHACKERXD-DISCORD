import Head from 'next/head';
import { useEffect, useState } from 'react';
import Profile from '../components/discord/Profile';
import Loading from '../components/Loading';
import { LanyardPresence } from '../types/lanyard';
import { lanyard } from '../utils/lanyard';

export default function Home() {
  const [status, setStatus] = useState<LanyardPresence>();

  function presenceChange(data: LanyardPresence) {
    setStatus(data ?? null);
  }

  useEffect(() => {
    lanyard.on('presence', presenceChange);

    return () => {
      lanyard.removeListener('presence', presenceChange);
    };
  }, []);

  return (
    <main className="flex mx-auto items-center justify-center h-screen w-screen">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https:/NOT.GETHACKED.XD" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/public/assets/avatar.ico" />
        <meta name="theme-color" content="#000000" />
        <title>POIMENIDIS</title>
        <meta name="description" content="POIMENIDIS's personal discord website." />
        <meta content="/images/avatar.jpg" property="og:image" />
    </Head>

      {status ? <Profile data={status} /> : <Loading />}
    </main>
  );
}
