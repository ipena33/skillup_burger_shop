import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
 const options = {
   initial: {
     y: "-100%",
     opacity: 0,
   },
   animate: {
     y: 0,
     opacity: 1,
   },
   transition: {
     duration: 1,
   },
 };

 return (
   <>
     <section className="home">
       <motion.div {...options}>
         <motion.h1 {...options}>Burger Shop</motion.h1>
         <motion.p
           {...options}
           transition={{
             delay: 0.2,
           }}
         >
           Give yourself a tasty burger.
         </motion.p>
       </motion.div>
       <motion.a
         href="#menu"
         {...options}
         transition={{
           delay: 0.4,
         }}
       >
         Explore Menu
       </motion.a>
     </section>
     <Menu />
     <Founder />
   </>
 );
};

export default Home;
