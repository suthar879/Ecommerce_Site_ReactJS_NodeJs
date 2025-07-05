import { Button, Checkbox, Divider, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import "./style.css";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";

function valuetext(value) {
  console.log(value);
  return `${value}°C`;
}

const Sidebar = () => {
  const [isOpenedCategory, setIsOpenedCategory] = useState(false);
  const [isOpenedAvailabilty, setIsOpenedAvailabilty] = useState(false);
  const [isOpenedSize, setIsOpenedSize] = useState(false);
  const [value, setValue] = useState([10, 20]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center">
          Shop By Category
          <Button
            className="!w-[30px] !h-[30px] !rounded-full !text-black !ml-auto"
            onClick={() => setIsOpenedCategory(!isOpenedCategory)}
          >
            {!isOpenedCategory && <FaAngleDown />}
            {isOpenedCategory && <FaAngleUp />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenedCategory}>
          <div className="scroll flex flex-col max-h-[250px] overflow-y-scroll overflow-x-hidden">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electronics"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bags"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Groceries"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jwellery"
            />
          </div>
        </Collapse>
      </div>
      <Divider />
      <div className="box my-2">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center">
          Availabilty
          <Button
            className="!w-[30px] !h-[30px] !rounded-full !text-black !ml-auto"
            onClick={() => setIsOpenedAvailabilty(!isOpenedAvailabilty)}
          >
            {!isOpenedAvailabilty && <FaAngleDown />}
            {isOpenedAvailabilty && <FaAngleUp />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenedAvailabilty}>
          <div className="scroll flex flex-col max-h-[250px] overflow-y-scroll overflow-x-hidden">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Availabity"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In-Stock"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Out-Of-Stock"
            />
          </div>
        </Collapse>
      </div>
      <Divider />
      <div className="box my-2">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center">
          Sizes
          <Button
            className="!w-[30px] !h-[30px] !rounded-full !text-black !ml-auto"
            onClick={() => setIsOpenedSize(!isOpenedSize)}
          >
            {!isOpenedSize && <FaAngleDown />}
            {isOpenedSize && <FaAngleUp />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenedSize}>
          <div className="scroll flex flex-col max-h-[250px] overflow-y-scroll overflow-x-hidden">
            <FormControlLabel control={<Checkbox size="small" />} label="XXL" />
            <FormControlLabel control={<Checkbox size="small" />} label="XL" />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Kids"
            />
          </div>
        </Collapse>
      </div>
      <Divider />
      <div className="box my-2">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center">
          Filter By price
        </h3>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />

        <div className="flex pt-2 pb-2 priceRange">
          <span>
            From : <strong className="text-dark">Rs: {value}</strong>
          </span>
          <span className="ml-auto">
            To : <strong className="text-dark">Rs: {value}</strong>
          </span>
        </div>
      </div>
      <Divider />
      <div className="box my-2">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center">
          Filter By Rating
        </h3>
        <div className="flex flex-col gap-2 py-2">
          <Rating name="size-small" defaultValue={5} size="small" readOnly />
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
          <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </div>
      </div>
      <Divider />
    </aside>
  );
};

export default Sidebar;
