import "./App.css";
import navImg from "./assets/logo.png";
import dollar from "./assets/dollar1.png";
import bannerShadow from "./assets/bg-shadow.png";
import bannerImg from "./assets/banner-main.png";
function App() {
  return (
    <>
      {/* Navbar Start */}
      <div className="navbar">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-15 h-auto" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-14">
          <div className="flex items-center space-x-3">
            <button className="btn btn-ghost text-gray-600  hidden md:flex">
              Home
            </button>
            <button className="btn btn-ghost text-gray-600  hidden md:flex">
              Fixture
            </button>
            <button className="btn btn-ghost text-gray-600  hidden md:flex">
              Teams
            </button>
            <button className="btn btn-ghost text-gray-600  hidden md:flex">
              Schedules
            </button>
          </div>
          <div className="border-2 border-[#E7FE29] rounded-lg">
            <div className="flex items-center space-x-1 rounded-lg bg-[#E7FE29] p-2 m-1">
              <span className="font-bold">6000000000</span>
              <span className="font-bold">Coin</span>
              <span>
                <img src={dollar} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}

      {/* Banner Start */}
      <div className="w-[90%] mx-auto lg:w-full mt-8">
        <div className="relative w-full h-auto bg-[#131313] rounded-3xl overflow-hidden">
          <img
            alt=""
            src={bannerShadow}
            className="absolute w-full h-full rounded-3xl object-cover"
          />
          <div className="relative z-10 flex flex-col items-center my-7 space-y-6">
            <img className="w-auto lg:w-62.5 h-auto" src={bannerImg} alt="" />
            <h1 className="text-[#FFFFFF] text-2xl lg:text-[40px] mx-10 font-bold text-wrap text-center">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-gray-400 text-[20px] lg:text-2xl font-normal mt-0 mx-10 text-wrap text-center">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="border-2 border-[#E7FE29] rounded-xl">
              <button className="btn border-0 bg-[#E7FE29] rounded-lg m-1">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}
    </>
  );
}

export default App;
