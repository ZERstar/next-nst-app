import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function about() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  function loadImg1(e) {
    console.log("111", e.target.files);
    setFile1(URL.createObjectURL(e.target.files[0]));
  }
  function loadImg2(e) {
    console.log("222", e.target.files);
    setFile2(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div>
    <Navbar/>
      <div className="bg-gradient-to-t from-[#141E30] to-[#243B55]">
        <div className="h-[90vh]">
          <div className="flex flex-row justify-around pt-20">
            <div className={`border-2 border-white`}>
              <img src={file1} alt="abc1" className="w-60 h-60" />
            </div>
            <div className={`border-2 border-white `}>
              <img src={file2} alt="abc2" className="w-60 h-60" />
            </div>
          </div>
          <div className="flex flex-row justify-around pt-20 px-40">
            {/* <button className="bg-white px-6 py-2">UPLOAD</button> */}
            <div>
              <label htmlFor="fileSelect1" className="bg-white px-6 py-2">
                <input
                  id="fileSelect1"
                  type="file"
                  // multiple
                  className="hidden w-64 h-60"
                  style={{ width: "100px", height: "100px" }}
                  onChange={loadImg1}
                />
                UPLOAD1
              </label>
              {file1 && (
                <div>
                  <button className="bg-white px-6 py-2" onClick={()=>setFile1(null)}>
                    DELETE1
                  </button>
                </div>
              )} 
            </div>
            <button className="bg-white px-6 py-2">GEN</button>
            <div>
              <label htmlFor="fileSelect2" className="bg-white px-6 py-2">
                <input
                  id="fileSelect2"
                  type="file"
                  // multiple
                  className="hidden w-64 h-60"
                  style={{ width: "100px", height: "100px" }}
                  onChange={loadImg2}
                />
                UPLOAD2
              </label>
              {file2 && (
                <div>
                  <button className="bg-white px-6 py-2" onClick={()=>setFile2(null)}>
                    DELETE2
                  </button>
                </div>
              )} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
