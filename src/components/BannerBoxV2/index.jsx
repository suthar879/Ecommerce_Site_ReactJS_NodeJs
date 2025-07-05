import { Link } from "react-router-dom";

const BannerBoxV2 = ({ info, imgSrc }) => {
  return (
    <div className="bnnerBoxV2 w-full overflow-hidden rounded-md group relative">
      <img
        src={imgSrc}
        className="w-full transition-all duration-150 group-hover:scale-105"
      />

      <div
        className={`info absolute top-0 ${
          info === "left" ? "left-0" : "right-0"
        } w-[60%] h-[100%] z-50 p-5 flex items-center justify-center flex-col gap-2`}
      >
        <h2 className="text-[20px] font-[600]">Samsung Gear VR Camera</h2>
        <span className="text-[20px] text-[#ff5252] font-[600] w-full">
          $129.00
        </span>
        <div className="w-full">
          <Link to="/" className="link text-[16px] font-[600]">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;
