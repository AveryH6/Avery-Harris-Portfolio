import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion"; // Correct import

const SparkleImg = styled.div`
  position: relative;
  width: 40%; /* Adjust as needed */
`;

const PinkSparkle = styled.div`
  top: 8rem;
  left: 0;
  position: absolute;
`;

const WhiteSparkle = styled.div`
  top: 1rem;
  left: 12rem;
  position: absolute;
`;

const YellowSparkle = styled.div`
  top: 15rem;
  left: 12rem;
  position: absolute;
`;

const Sparkles = () => {
    return (
        <SparkleImg>
            <PinkSparkle>
                <motion.img
                    src="/images/med_sparkle.png"
                    alt=""
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360}}
                    transition={{ duration: 1.5 }} // Adjust as needed
                />
            </PinkSparkle>
            <WhiteSparkle>
                <motion.img
                    src="/images/small_sparkle.png"
                    alt=""
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360 }}
                    transition={{ duration: 1 }} // Adjust as needed
                />
            </WhiteSparkle>
            <YellowSparkle>
                <motion.img
                    src="/images/big_sparkle.png"
                    alt=""
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360 }}
                    transition={{ duration: 2 }} // Adjust as needed
                />
            </YellowSparkle>
      </SparkleImg>

    );
};

export default Sparkles;