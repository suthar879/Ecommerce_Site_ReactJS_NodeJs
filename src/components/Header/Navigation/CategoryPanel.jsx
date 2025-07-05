import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import "../Navigation/style.css";
import CategoryCollapse from "../../CategoryCollapse";

const CategoryPanel = ({ open, setOpen }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text=[16px] font-[500] flex items-center justify-between">
        Shop By Categories{" "}
        <IoCloseSharp
          onClick={() => setOpen(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <CategoryCollapse />
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
