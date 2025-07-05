import { Button, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsWallet } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { LiaGiftSolid, LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { Link } from "react-router-dom";
import payment_1 from "/assets/Payment/payment_1.png";
import payment_2 from "/assets/Payment/payment_2.png";
import payment_3 from "/assets/Payment/payment_3.png";
import payment_4 from "/assets/Payment/payment_4.png";

const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-[#fafafa]">
        <div className="container ">
          <div className="mx-20 flex items-center justify-center gap-20 py-8">
            <div className="col flex items-center justify-center flex-col group">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[18px] font-[600]">Free Shipping</h3>
              <p className="text-[13px] font-[500]">For all order over $100</p>
            </div>
            <div className="col flex items-center justify-center flex-col group">
              <PiKeyReturn className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[18px] font-[600]">30 Days Return</h3>
              <p className="text-[13px] font-[500]">For an Exchnage Product</p>
            </div>
            <div className="col flex items-center justify-center flex-col group">
              <BsWallet className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[18px] font-[600]">Secured payment</h3>
              <p className="text-[13px] font-[500]">Payment Cards Accepted</p>
            </div>
            <div className="col flex items-center justify-center flex-col group">
              <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[18px] font-[600]">Special Gift</h3>
              <p className="text-[13px] font-[500]">Our First Product Order</p>
            </div>
            <div className="col flex items-center justify-center flex-col group">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[18px] font-[600]">24*7 Support</h3>
              <p className="text-[13px] font-[500]">Contact Us Anytime</p>
            </div>
          </div>
          <hr />
          <div className="footer flex  py-8">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-[600] mb-4">Contact Us</h2>
              <p className="text-[13px] font-[400] pb-4">
                Classyshop - Mega super store <br /> 507 - Union Trade Center
                France
              </p>
              <Link
                to="mailto:someone@example.com"
                className="link text-[13px]"
              >
                sales@yourcompany.com
              </Link>
              <span className="text-[20px] font-[600] block w-full mt-3 text-[#ff5252]">
                (+91) 987-456-1230
              </span>

              <div className="flex items-center gap-4 my-4">
                <IoChatboxOutline className="text-[40px] text-[#ff5252]" />
                <span className="text-[16px] font-[600]">
                  Online Chat <br /> Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[100%] flex justify-around pl-8">
              <div className="part2_col1">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Price Drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      New Products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Best Sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Contact Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col1">
                <h2 className="text-[18px] font-[600] mb-4">Our Company</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      About Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Secure Payment
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2 flex pl-8 flex-col pr-8">
                <h2 className="text-[18px] font-[600] mb-4">
                  Subscribe to Newsletter
                </h2>
                <p className="text-[13px]">
                  Subscribe to our latest newsletter to get news about specail
                  discounts
                </p>
                <form className="mt-5 flex flex-col gap-2">
                  <input
                    type="text"
                    className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm focus:border-[rgba(0,0,0,0.3)]"
                    placeholder="Your email address"
                  />
                  <Button className="!bg-[#ff5252] !text-white !p-2 w-50">
                    Subscribe
                  </Button>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agress to the terms and conditions and the privacy policy"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip py-3 border-t border-[rgba(0,0,0,0.2)]">
        <div className="container flex items-center justify-between">
          <div>
            <ul className="flex items-center gap-2">
              <li className="list-none">
                <Link
                  to="/"
                  className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
                >
                  <FaFacebookF className="text-[15px] group-hover:text-white" />
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
                >
                  <AiOutlineYoutube className="text-[15px] group-hover:text-white" />
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
                >
                  <FaPinterestP className="text-[15px] group-hover:text-white" />
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
                >
                  <FaInstagram className="text-[15px] group-hover:text-white" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[13px]">
              &copy; 2024 - Ecommerce Software by PrestaShop
            </p>
          </div>
          <div className="flex items-center justify-between">
            <ul className="flex items-center gap-2">
              <li>
                <img src={payment_1} alt="payments" width={50} height={50} />
              </li>
              <li>
                <img src={payment_2} alt="payments" width={50} height={50} />
              </li>
              <li>
                <img src={payment_3} alt="payments" width={50} height={50} />
              </li>
              <li>
                <img src={payment_4} alt="payments" width={50} height={50} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
