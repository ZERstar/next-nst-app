import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function about() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [x, setx] = useState(null);
  const [y, sety] = useState(null);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedImg, setGeneratedImg] = useState("")
  function loadImg1(e) {
    console.log("111", e.target.files);
    setFile1(URL.createObjectURL(e.target.files[0]));
    setx(e.target.files[0]);
    console.log("test", e.target.files[0]);
  }
  function loadImg2(e) {
    console.log("222", e.target.files[0]);
    console.log("333", document.getElementById("fileSelect2").value);
    // var path = document.getElementById("fileSelect2").attr("src");
    sety(e.target.files[0]);
    console.log("path", e.target.files[0]);
    setFile2(URL.createObjectURL(e.target.files[0]));
    console.log("444", file2);
  }
  // //http://82ea-4-193-123-67.ngrok.io
  const uploadImg = async () => {
    let data = new FormData();
    data.append("content Photo", x);
    data.append("Style Photo", y);
    console.log("hi", data);

    var requestOptions = {
      method: "POST",
      body: data,
      redirect: "follow",
    };

    fetch("http://d5d2-4-193-181-223.ngrok.io/upload", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const fRes = result.split("<body>").pop().split("</body>")[0];
        console.log(fRes);
      })
      .catch((error) => console.log("error", error));
  };

  const checkStatus = async (e) => {
    // console.log("id1", document.getElementById("task_id").value.toString())
    // console.log("id2", "7d6ac1c5-735a-44af-a49a-5a8dc69dd965")
    var formdata = new FormData();
    formdata.append(
      "task_id",
      document.getElementById("task_id").value.toString()
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://c34f-4-193-181-223.ngrok.io/status", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const parsedResponse = JSON.parse(result);
        setStatus(parsedResponse.status);
        if ((parsedResponse.status = "SUCCESS")) {
          setIsSuccess(true);
        }
        // console.log(parsedResponse.status)
      })
      .catch((error) => console.log("error", error));
  };

  const downloadImg = () => {
    var formdata = new FormData();
    formdata.append("task_id", document.getElementById("task_id").value.toString());

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://c34f-4-193-181-223.ngrok.io/download", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
        setGeneratedImg(result)
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-t from-[#141E30] to-[#243B55]">
        <div className="h-[110vh]">
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
              <button className="bg-white px-6 py-2" onClick={uploadImg}>
                MINT
              </button>
            </div>

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
                  // onClick={()=>  }
                />
                UPLOAD2
              </label>
              {file2 && (
                <div>
                  <button
                    className="bg-white px-6 py-2"
                    onClick={() => {
                      setFile2(null);
                      console.log("abc\n", file2);
                    }}
                  >
                    DELETE2
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-row">
            <input
              type="text"
              id="task_id"
              className="border-2 border-blue-800"
            />
            <button className="bg-blue-300" onClick={checkStatus}>
              Check Status
            </button>
            <p>{status}</p>
            {isSuccess && (
              <button className="bg-blue-500" onClick={downloadImg}>
                DOWNLOAD
              </button>
            )}
          </div>
          <div className="flex flex-row justify-around pt-20">
            <div className={`border-2 border-white`}>
              <img src={`data:image/png;base64,${generatedImg}`} alt="abc1" className="w-60 h-60" />
            </div>
            <div>
              <p>
                abdd
                <br />
                fvfv
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
