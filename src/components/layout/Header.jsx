import React from "react";
import { MdOutlineFastfood } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";
import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";

const HeaderIcon = ({ icon, onClick }) => (
  <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }} onClick={onClick}>
    {icon}
  </motion.div>
);

const NavigationLinks = ({ links }) => (
  <div>
    {links.map((link, index) => (
      <Link key={index} to={link.path}>
        {link.icon}
        {link.text}
      </Link>
    ))}
    <DropdownMenu />
  </div>
);

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <HeaderIcon icon={<MdOutlineFastfood />} onClick={() => navigate("/")} />
      <NavigationLinks
        links={[
          { path: "/", text: "Home" },
          { path: "/contact", text: "Contact" },
          { path: "/about", text: "About" },
          { path: "/cart", icon: <TbShoppingCart /> },
        ]}
      />
    </nav>
  );
};

export default Header;
