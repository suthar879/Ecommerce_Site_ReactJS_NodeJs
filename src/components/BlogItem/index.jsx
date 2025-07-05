import { IoIosArrowForward, IoMdTime } from "react-icons/io";
import Blog_1 from "/assets/Blog/blog-1.jpg";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgwrapper w-full overflow-hidden rounded-md relative">
        <img
          src={Blog_1}
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1 cursor-pointer"
          alt="blog image"
        />
        <span className="flex items-center justify-center gap-1 text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[12px] font-[500]">
          <IoMdTime className="text-[16px]" /> 5 APRIL 2023
        </span>
      </div>
      <div className="py-4">
        <h2 className="text-[15px] font-[600] text-black">
          <Link to="/" className="link">
            {" "}
            sustainable living through cutting-edge prefabricated homes
          </Link>
        </h2>
        <p className="text-[13px] font-[400] my-4 text-[rgba(0,0,0,0.8)]">
          Give lady of they such they sure it. Me contained explained my
          education. Vulgar as hearts by garret....
        </p>
        <Link
          to="/"
          className="link font-[500] text-[14px] flex items-center gap-1"
        >
          Read More <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
