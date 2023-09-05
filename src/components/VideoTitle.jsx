import { AiOutlineInfoCircle } from "react-icons/ai";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute text-white bg-gradient-to-r from-black pt-56 px-16">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 w-1/3 text-lg">{overview}</p>
      <div className="flex gap-3">
        <button className="bg-gray-100 text-black py-3 px-8 text-lg font-bold rounded-lg hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="flex items-center gap-2 justify-center bg-gray-800 text-white py-3 px-6 text-lg font-bold rounded-lg bg-opacity-95 hover:bg-opacity-60">
          <AiOutlineInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
