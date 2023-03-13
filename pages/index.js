import Head from "next/head";
import Router from 'next/router'
export default function Index() {
  return (
    <>
        <Head>
          <title>Mint NST</title>
          <link rel="favicon" href="./favicon.ico" />
          <meta name ="viewport" content="width=device-width,
          initial-scale=1" />
        </Head>
        <div>
          <div className="nav h-[10vh] bg-slate-400 flex flex-row justify-between items-center px-16">
            <div className="text-[#141E30] text-3xl  ">
              <i>D</i>iffuse<i><b>D</b></i>rip
            </div>
            <div>
              <button className="h-10 px-4 rounded-full bg-slate-700/20 text-[#141E30] border-[#141E30] border-2 font-bold">
                Connect Wallet
              </button>
            </div>
          </div>
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
 