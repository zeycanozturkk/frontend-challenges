import { useRef, useState, useEffect } from "react";
import projects from "./projects.js";
import { Link } from "react-router-dom";

function Challenges() {
  const [selectedLevel, setSelectedLevel] = useState("Hepsi");
  const [showOptions, setShowOptions] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  function handleOutsideClick(e) {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      e.target !== buttonRef.current
    ) {
      setShowOptions(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const filteredProjects =
    selectedLevel === "Hepsi"
      ? projects
      : projects.filter((project) => project.diff === selectedLevel);

  function toggleOptions() {
    setShowOptions(!showOptions);
  }

  return (
    <>
      <div className="sticky z-[80] top-0 bg-neutral-50  mx-5 py-5  ">
        <section className="mx-auto my-0 justify-between sm:justify-normal">
          <div
            id="filter-wrap"
            className="flex w-full align-middle m-0 gap-10 "
          >
            <div className="text-lg px-10  py-6 items-center flex tracking-[1px]">
              Projeler
            </div>
            <div
              id="filter"
              className="flex-row pl-5 pr-0 py-0 items-center flex gap-[2rem]"
            >
              <div className="relative inline-block">
                <button
                  ref={buttonRef}
                  onClick={toggleOptions}
                  className="py-2 px-10 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  Filtrele
                </button>
                {showOptions && (
                  <div
                    ref={menuRef}
                    className="absolute mt-2 w-32 bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-lg"
                  >
                    <option
                      value="Hepsi"
                      onClick={() => setSelectedLevel("Hepsi")}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                    >
                      Hepsi
                    </option>
                    <option
                      value="Beginner"
                      onClick={() => setSelectedLevel("Beginner")}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                    >
                      Beginner
                    </option>
                    <option
                      value="Intermediate"
                      onClick={() => setSelectedLevel("Intermediate")}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                    >
                      Intermediate
                    </option>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {
        <div className="w-full">
          <ul className="grid-cols-1 sm:grid md:grid-cols-3 p-5 gap-7 ">
            {filteredProjects.map(({ id, name, desc, img, diff, sourceCode  }) => (
              <li
                key={id}
                className="p-5 mx-3 mt-6 flex flex-col items-strecth  rounded-lg  bg-white text-surface  dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 shadow-xl transition ease-in-out delay-160 hover:-translate-y-1 hover:scale-105"
              >
                <Link
                  key={id}
                  to={`/detail/${id}?name=${encodeURIComponent(
                    name
                  )}&desc=${encodeURIComponent(desc)}&img=${encodeURIComponent(
                    img
                  )}&sourceCode=${encodeURIComponent(sourceCode)}`}
                >
                  <div className="relative overflow-hidden flex flex-col">
                    <img className="rounded-t-lg" src={img} />

                    <div className="p-3 w-full block">
                      <h5 className="mb-9 text-xl font-medium leading-tight">
                        {name}
                      </h5>
                     

                      <p>{diff}</p>
                     
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  );
}

export default Challenges;
