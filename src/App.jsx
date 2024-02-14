import Clock from "./components/Clock";
import Timer from "./components/Timer";
import './index.css';
import { TbWorld, TbClock } from "react-icons/tb";
import { RxLapTimer } from "react-icons/rx";

function App() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 bg-neutral-700 rounded-t-lg">
        <div className="flex justify-center">
          <div className="inline-flex p-2 bg-neutral-600 text-white rounded-xl text-5xl text-center font-bold mb-4">
            <TbWorld/>
            <TbClock/>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Clock city="Stockholm" zone="Europe/Stockholm" />
          <Clock city="London" zone="Europe/London" />
          <Clock city="New York" zone="America/New_York" />
          <Clock city="Dubai" zone="Asia/Dubai" />
          <Clock city="New Delhi" zone="Asia/Kolkata" />
          <Clock city="Bangkok" zone="Asia/Bangkok" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 bg-neutral-700 rounded-b-lg">
        <div className="flex justify-center">
          <div className="inline-flex p-2 bg-neutral-600 text-white rounded-xl text-5xl text-center font-bold mb-4">
            <RxLapTimer/>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Timer seconds="30" />
          <Timer seconds="600" />
        </div>
      </div>
    </>
  );
}

export default App;
