
export default function Navbar() {
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
        <div>
          <button className="h-10 px-4 rounded-full bg-slate-700/20 text-[#141E30] border-[#141E30] border-2 font-bold hover:bg-slate-500
           hover:text-white transition-all active:scale-90 md:text-sm md:px-4">
            Connect Wallet
          </button>
        </div>
      </div>
      </nav>
      </header>
      </>
  )
}

