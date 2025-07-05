import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import { FiMinusSquare } from "react-icons/fi";
import { FaRegSquarePlus } from "react-icons/fa6";

const CategoryCollapse = () => {
  const [submenuIndex, setSubmenuIndex] = useState(0);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(0);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const innerOpenSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };
  return (
    <div className="scroll">
      <ul className="w-full">
        <li className="list-none flex items-center relative flex-col">
          <Link to="/" className="w-full">
            <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
              Fashion
            </Button>
          </Link>
          {submenuIndex === 0 ? (
            <FiMinusSquare
              className="absolute right-[15px] cursor-pointer"
              onClick={() => openSubmenu(0)}
            />
          ) : (
            <FaRegSquarePlus
              className="absolute right-[15px] cursor-pointer"
              onClick={() => openSubmenu(0)}
            />
          )}
          {submenuIndex === 0 && (
            <ul className="submenu w-full pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    Apparel
                  </Button>
                </Link>
                {innerSubmenuIndex === 0 ? (
                  <FiMinusSquare
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => innerOpenSubmenu(0)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => innerOpenSubmenu(0)}
                  />
                )}
                {innerSubmenuIndex === 0 && (
                  <ul className="inner_submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !justify-start !px-3 transition text-[14px]"
                      >
                        Smart Tablet
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !justify-start !px-3 transition text-[14px]"
                      >
                        Crepe t-Shirt
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !justify-start !px-3 transition text-[14px]"
                      >
                        Leather Watch
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !justify-start !px-3 transition text-[14px]"
                      >
                        Rolling Diamond
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li className="list-none flex items-center relative flex-col">
          <Link to="/" className="w-full">
            <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
              Fashion
            </Button>
          </Link>
          {submenuIndex === 1 ? (
            <FiMinusSquare
              className="absolute right-[15px] cursor-pointer"
              onClick={() => openSubmenu(1)}
            />
          ) : (
            <FaRegSquarePlus
              className="absolute right-[15px] cursor-pointer"
              onClick={() => openSubmenu(1)}
            />
          )}
          {submenuIndex === 1 && (
            <ul className="submenu w-full pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    Apparel
                  </Button>
                </Link>
                {innerSubmenuIndex === 1 ? (
                  <FiMinusSquare
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => innerOpenSubmenu(1)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => innerOpenSubmenu(1)}
                  />
                )}
                {innerSubmenuIndex === 1 && (
                  <ul className="inner_submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !justify-start !px-3 transition text-[14px]"
                      >
                        Smart Tablet
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !justify-start !px-3 transition text-[14px]"
                      >
                        Crepe t-Shirt
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !justify-start !px-3 transition text-[14px]"
                      >
                        Leather Watch
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !justify-start !px-3 transition text-[14px]"
                      >
                        Rolling Diamond
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default CategoryCollapse;
