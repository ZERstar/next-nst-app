import Head from "next/head";
import Router from 'next/router'
import Navbar from "../components/Navbar";
export default function Index() {
  return (
    <>
        <Head>
          <title>Mint NST</title>
          <link rel="favicon" href="./favicon.ico" />
          <meta name ="viewport" content="width=device-width,
          initial-scale=1" />
        </Head>
        <Navbar/>
        <div>
          <div className="bg-gradient-to-t from-[#141E30] to-[#243B55] h-[90vh]">
            acd
            <button 
            onClick={()=>{
              Router.push('/home')
            }}
            className="bg-white"
            >
              TRY ---&gt;
            </button>
          </div>
        </div>
    </>
  )
}
 