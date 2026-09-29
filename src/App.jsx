import "./App.css";
import navImg from "./assets/logo.png";
import dollar from "./assets/dollar1.png";
import bannerShadow from './assets/bg-shadow.png'
import bannerImg from './assets/banner-main.png'
function App() {
  return (
    <>
      {/* Navbar Start */}
      <div className="navbar">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-12.5 h-auto" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-14">
          <div className="flex items-center space-x-3">
            <button className="btn btn-ghost text-gray-600">Home</button>
            <button className="btn btn-ghost text-gray-600">Fixture</button>
            <button className="btn btn-ghost text-gray-600">Teams</button>
            <button className="btn btn-ghost text-gray-600">Schedules</button>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-medium">6000000000</span>
            <span className="font-medium">Coin</span>
            <span>
              <img src={dollar} alt="" />
            </span>
          </div>
        </div>
      </div>
      {/* Navbar End */}

      {/* Banner Start */}
      <div className="w-full mt-8">
        <div className="relative w-full h-125 bg-[#131313] rounded-3xl overflow-hidden">
          <img alt="" src={bannerShadow} className="absolute w-full h-full rounded-3xl object-cover"/>
          <div className="relative z-10 flex flex-col items-center my-7 space-y-6">
            <img className="w-62.5 h-auto" src={bannerImg} alt="" />
            <h1 className="text-[#FFFFFF] text-[40px] font-bold text-wrap text-center">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-gray-400 text-2xl font-normal mt-0">Beyond Boundaries Beyond Limits</p>
            <div className="border-2 border-[#E7FE29] rounded-xl">
              <button className="btn border-0 bg-[#E7FE29] rounded-lg m-1">Claim Free Credit</button>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}
    </>
  );
}

export default App;
