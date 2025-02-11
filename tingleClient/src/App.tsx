import { useEffect, useState } from "react";
import "./index.css";
import DataView from "./components/dataView";

function App() {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState<string[][]>([]);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleClick = () => {
    setData([...data, [time, text]]);
    setText("");
  };

  return (
    <label
      className="bg-black h-screen flex justify-between items-center"
      htmlFor="thisbox"
    >
      <div className="border-r border-[#ffffff29] h-full w-20"></div>
      <div className="grow h-full flex flex-col">
        <div className="h-15 border-b border-[#ffffff29] flex justify-start items-center px-8 font-mono text-white text-base">
          Initiating... /avisekh_sabi/tingle.meow
        </div>
        <div className="grow flex flex-col font-mono p-3 justify-end">
          <div className="mb-4">
            <div className="text-slate-400 text-lg tracking-widest">
              Tingle your thoughts
            </div>
            <div className="text-slate-500 text-sm">Built by Avisekh Sabi</div>
          </div>
          {data.map((element) => {
            return <DataView time={element[0]} data={element[1]} />;
          })}
        </div>
        <div className="h-40 border-t border-[#ffffff29] flex p-3 items-start justify-start">
          <div className="font-mono text-green-300 mr-3">
            PS [avisekh_sabi\tingle.meow]$
          </div>
          <input
            id="thisbox"
            className="focus:outline-none text-white"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(event) => {
              let today = new Date();
              let hh = today.getHours();
              let mm = today.getMinutes();
              let ss = today.getSeconds();
              setTime(`${hh + ":" + mm + ":" + ss}`);
              event.key == "Enter" && handleClick();
            }}
          />
        </div>
      </div>
      <div className="border-l border-[#ffffff29] h-full w-20"></div>
    </label>
  );
}

export default App;
