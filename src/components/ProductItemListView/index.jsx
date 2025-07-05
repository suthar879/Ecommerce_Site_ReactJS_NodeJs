import { Link } from "react-router-dom";
import Fashion_img_1 from "/assets/Product/Fashion/fashion_img_1.webp";
import Fashion_img_2 from "/assets/Product/Fashion/fashion_img_2.webp";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

const ProductItemListView = () => {
  return (
    <div className="flex items-center productItem rounded-md overflow-hidden my-6 border-2 border-[rgba(0,0,0,.1)] shadow-lg">
      <div className="group imgWrapper w-[30%] overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img h-[250px] overflow-hidden">
            <img src={Fashion_img_1} alt="product imgage" className="w-full" />
            <img
              src={Fashion_img_2}
              alt="product imgage"
              className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
          10%
        </span>
        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Tooltip title="zoom" placement="left">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:!text-white group">
              <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </Tooltip>
          <Tooltip title="share" placement="left">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:!text-white group">
              <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </Tooltip>
          <Tooltip title="heart" placement="left">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:!text-white group">
              <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col gap-2 info p-3 py-4 mx-4">
        <h6 className="text-[13px] link">
          <Link to="/">Soylent Green</Link>
        </h6>
        <h3 className="text-[20px] title mt-2 link transition-all text-black">
          <Link to="/">
            Siril Georgette Pink Color Saree with Blouse Pieces
          </Link>
        </h3>
        <p className="text-[14px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste enim
          eveniet sunt eius placeat cum. Facilis ratione quo, enim doloremque
          perspiciatis repellendus quis cumque numquam veniam, rerum pariatur
          sunt accusamus.
        </p>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 font-500">
            $58.00
          </span>
          <span className="oldPrice text-[#ff5252] font-600">$58.00</span>
        </div>
        <Button className="btn-org w-30 bg-[#ff5252]" variant="contained">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default ProductItemListView;
