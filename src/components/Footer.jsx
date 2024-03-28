import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="w-full p-8 bg-white">
        <div className="flex flex-row flex-wrap items-center justify-center text-center bg-white gap-y-6 gap-x-12 md:justify-between">
        <Link to='/'>
          <img src="/logo.jpg" alt="logo-ct" className="w-24" />
        </Link>
          <div className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <Link to='/challenges'>
              <p
               
                className="uppercase block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-slate-500"
              >
                Challenges
              </p>
            </Link>
          </div>
        </div>
        <span className="block my-8 border-t border-blue-gray-50" />
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-center text-blue-gray-900">
          © 2024 Frontend Challenges
        </p>
      </footer>
    </>
  );
}

export default Footer;
