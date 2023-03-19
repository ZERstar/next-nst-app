import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function about() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [res, setRes] = useState(null);
  function loadImg1(e) {
    console.log("111", e.target.files);
    setFile1(URL.createObjectURL(e.target.files[0]));
  }
  function loadImg2(e) {
    console.log("222", e.target.files);
    setFile2(URL.createObjectURL(e.target.files[0]));
  }
  //http://a463-4-193-85-67.ngrok.io/
  const uploadImg = async () => {
    var formdata = new FormData();
    formdata.append("task_id", "c4378c25-fb84-495b-8fa3-e02f8df7ffc3");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://a271-4-193-85-67.ngrok.io/download", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // var FormData = require("form-data");
    // // var fs = require("fs");
    // var data = new FormData();
    // data.append(
    //   "content Photo",
    //   fs.createReadStream("/C:/Users/HP/Downloads/hk_placementTraining1.png")
    // );
    // data.append(
    //   "Style Photo",
    //   fs.createReadStream(
    //     "/C:/Users/HP/Downloads/learnwebcode.github.io_practice-requests_.png"
    //   )
    // );

    // var config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: "http://5cb6-4-193-85-67.ngrok.io/upload",
    //   headers: {
    //     ...data.getHeaders(),
    //   },
    //   data: data,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <Navbar />
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
                  accept=".png,.jpg,.jpeg"
                  // multiple
                  className="hidden w-64 h-60"
                  style={{ width: "100px", height: "100px" }}
                  onChange={loadImg1}
                />
                UPLOAD1
              </label>
              {file1 && (
                <div>
                  <button
                    className="bg-white px-6 py-2"
                    onClick={() => setFile1(null)}
                  >
                    DELETE1
                  </button>
                </div>
              )}
            </div>

            <button className="bg-white px-6 py-2" onClick={uploadImg}>
              GEN
            </button>

            <div>
              <label htmlFor="fileSelect2" className="bg-white px-6 py-2">
                <input
                  id="fileSelect2"
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  // multiple
                  className="hidden w-64 h-60"
                  style={{ width: "100px", height: "100px" }}
                  onChange={loadImg2}
                />
                UPLOAD2
              </label>
              {file2 && (
                <div>
                  <button
                    className="bg-white px-6 py-2"
                    onClick={() => setFile2(null)}
                  >
                    DELETE2
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="res">
                <img src={res} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
}
