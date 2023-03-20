import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMetamask , useAddress , useDisconnect } from "@thirdweb-dev/react"

export default function Navbar() {
  const connectMetamask = useMetamask();
  const address = useAddress();
  const disconnectToWallet = useDisconnect();
  return (
    <>
    <header>
    <nav>
    <div className="nav h-[10vh] bg-slate-400 flex flex-row justify-between items-center px-16">
        <div className="text-[#141E30] text-3xl  ">
          <i>D</i>iffuse
          <i>
            <b>D</b>
          </i>
          rip
        </div>
        {!address ? ( <ul className="flex items-center">
        <div>
          <button className="h-10 px-4 rounded-full bg-slate-700/20 text-[#141E30] border-[#141E30] border-2 font-bold hover:bg-slate-500
           hover:text-white transition-all active:scale-90 md:text-sm md:px-4" onClick={connectMetamask}>
            Connect Wallet
          </button>
        </div>
        </ul>)  : (
          <ul>
          <button className="h-10 px-4 rounded-full bg-slate-700/20 text-[#141E30] border-[#141E30] border-2 font-bold hover:bg-slate-500
           hover:text-white transition-all active:scale-90 md:text-sm md:px-4" onClick={disconnectToWallet}>
            Connected
          </button>
          
        </ul>
      
      )}
      </div>
      </nav>
      </header>
      </>
  )
}

