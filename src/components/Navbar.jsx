import {Link} from 'react-router-dom'
function Navbar() {

  return (
    <>
      
        <nav className="flex flex-shrink-0 w-full  py-6 justify-between items-center navbar">
          <div className=" flex justify-start">
            <Link to='/'>
            <img
              className="w-[180px] h-[90px]"
              src="/public/logo2.png"
              alt="..."
            />
            </Link>
          </div>
          <div className="  w-full flex justify-end px-5">
            <div className="flex  md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <Link to='/challenges'>
              <p className="hover:text-gray-500 " href="#">
                  CHALLENGES
              </p>
              </Link>
            </div>
          </div>
          <div className="flex items-center px-5">
            <button className="bg-slate-950 text-white px-4 py-2 rounded-xl hover:bg-slate-800 w-20">
              Log In
            </button>
          </div>
        </nav>

    </>
  );
}

export default Navbar;
