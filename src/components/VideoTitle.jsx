import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute text-white bg-gradient-to-r from-black pt-20 md:pt-40 px-8 md:px-16">
      <h1 className=" text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/3 ">{overview}</p>
      <div className="flex gap-3">
        <button className="flex items-center gap-1 justify-center bg-gray-100 text-black mt-2 md:mt-0 py-1 md:py-3 px-2 md:px-8 text-sm md:text-lg font-bold rounded-md hover:bg-opacity-70">
          <BsPlayFill className="text-2xl" /> Play
        </button>
        <button className=" hidden md:flex items-center gap-1 justify-center bg-gray-800 text-white py-3 px-6 text-lg font-bold rounded-md bg-opacity-95 hover:bg-opacity-60">
          <AiOutlineInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
