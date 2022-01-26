import React from "react";

//Space Object Image
import jupiter from "../images/jupiter-modified.png";
//React animation
import { motion } from "framer-motion";
//Video
//import introVideo from "../images/SocialAnimalEarth intro.mp4";

import Stars from "./Stars";

const Footer = () => {
  return (
    <section className="section section-footer section-column">
      <div className="section-container">
        <div className="top-section">
          <Stars />
          <div className="planet-image footer-planet-image">
            <motion.img
              src={jupiter}
              whileInView="visible"
              viewport={{ once: true }}
              animate={{ y: 70, opacity: 1 }}
              transition={{
                duration: 2,
                ease: [0.75, 0.75, 0.75, 0.75],
                repeat: Infinity,
                repeatType: "reverse",
              }}
              initial={{ opacity: 1 }}
              style={{
                backgroundColor: "#AC7B52",
                backgroundImage:
                  "linear-gradient(43deg,#AC7B52 0%,#AC7B52 15%,#AC7B52 100%)",
                borderRadius: "100%",
                boxShadow:
                  "#AC7B52 10px -2px 110px, #AC7B52 0 -10px 20px,5px 5px 15px 5px rgba(0, 0, 0, 0)",
              }}
            />
          </div>
          <div
            className="section-title footer-title"
            style={{ flexDirection: "column" }}
          >
            Let's create value!{" "}
            <video
              width="80%"
              height="auto"
              controls
              style={{ margin: "1rem 0" }}
            >
              <source
                src={
                  "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/bd49b2300eee7545c1697a4578c27e3b-1643013131180/SocialAnimalEarth%20intro?__cld_token__=exp=1643203505~hmac=59f7df27a6f8ed8ebcc9c318fadaff2de4e764cba22bc8ee3b1ed0021030aec9"
                }
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
