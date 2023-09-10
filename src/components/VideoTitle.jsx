import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute text-white bg-gradient-to-r from-black pt-44 px-16">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 w-1/3 text-lg">{overview}</p>
      <div className="flex gap-3">
        <button className="flex items-center gap-1 justify-center bg-gray-100 text-black py-3  px-8 text-lg font-bold rounded-md hover:bg-opacity-70">
          <BsPlayFill className="text-2xl" /> Play
        </button>
        <button className="flex items-center gap-1 justify-center bg-gray-800 text-white py-3 px-6 text-lg font-bold rounded-md bg-opacity-95 hover:bg-opacity-60">
          <AiOutlineInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
