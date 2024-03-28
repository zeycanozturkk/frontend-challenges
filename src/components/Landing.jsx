

function Landing() {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row  items-start sm:pt-16 py-6">
        <div className="flex  flex-col   my-10 ml-12 pl-8">
          <h1 className="text-[clamp(1rem,4vw,3rem)]   bg-gradient-to-r from-blue-500 to-indigo-600 inline-block text-transparent bg-clip-text">
            Projelerle Kendinizi Geliştirin
          </h1>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-slate-500">
              HTML, CSS ve JavaScript becerilerinizi pratik yaparak
              geliştirin. <br />
            </p>
          </div>
          <div className="md:w-40 flex items-center justify-center px-5 mt-6">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-600 w-20">
              Log In
            </button>
          </div>
        </div>

        <div className=" flex justify-center  md:my-0 my-12 relative">
       
          <img
            className="w-[90%] h-[100%] relative z-[5] "
            src="/landing-img.png"
          />
        
          
        </div>
      </div>

      <div className="flex flex-col sm:flex-row pb-10 justify-center gap-6">
        <div className="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="flex  flex-col justify-center items-start ml-4">
            <img
              className="icon block mx-auto h-12 sm:mx-0 sm:shrink-0"
              src="quotes.png"
            />

            <h1 className="text-center text-lg">
              {" "}
              Proje fikirleri aramayı atlayın ve geliştirici olarak seviye
              atlamanıza yardımcı olacak hazır projelere dalın.
            </h1>
            <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <img
                className="block  h-24 rounded-full sm:mx-0 sm:shrink-0"
                src="/face1.png"
                alt="Woman's Face"
              />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col pt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="flex  flex-col justify-center items-start ml-4">
            <img
              className="icon block mx-auto h-12 sm:mx-0 sm:shrink-0"
              src="quotes.png"
            />
            <h1 className="text-center text-lg">
              Web siteleri oluşturma becerilerinizi geliştirebilir ve iş
              bulmanıza yardımcı olmak için projeleri portföyünüze
              ekleyebilirsiniz!
            </h1>
            <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <img
                className="block mx-auto h-24 w-46 rounded-full sm:mx-0 sm:shrink-0"
                src="/face2.png"
                alt="Men's Face"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 max-w-full  mt-9 items-center flex flex-col sm:flex-row justify-center ">
        <div className="">
          <p className="text-white text-3xl py-5 pl-8">Öğrenme yolculuğunuz için projeler oluşturun <br/> ve bilginizi test edin.</p>
          <p className="text-white text-3xl py-5 pl-8">Gerçek öğrenme, sorunları kendi başınıza <br/> çözmeye başladığınızda gerçekleşir.</p>
        </div>
        <div className="">
          <img className="" src="twoperson.png" />
        </div>
      </div>
    </>
  );
}

export default Landing;
