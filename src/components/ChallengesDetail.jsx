import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function ChallengesDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const desc = searchParams.get("desc");
  const img = searchParams.get("img");
  const sourceCode = searchParams.get("sourceCode");

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="pl-10">
        <button onClick={goBack}>
          <IoChevronBack size={24} />
        </button>
      </div>

      <div className="p-5 mx-3 mt-12 flex flex-col items-strecth  rounded-lg  bg-white text-surface  dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 shadow-xl">
        <div className="flex flex-col  md:flex-row  p-5 ">
          <img
            className="object-cover w-full rounded-t-lg md:h-auto md:w-1/2 md:rounded-none md:rounded-s-lg"
            src={img}
          />
          <div className="p-5 flex flex-col">
            <h5 className="mb-10 text-xl font-medium leading-tight">{name}</h5>

            <div className="pt-4 pb-0 px-0 align-middle">
              <p className="mb-4 text-base">{desc}</p>
              <div className="mt-10 text-base">
                <a className="underline text-[blue]" href={sourceCode} target="_blank">kaynak kodu</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChallengesDetail;
