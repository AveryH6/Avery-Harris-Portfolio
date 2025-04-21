import React, { useRef } from "react";
import styled from "styled-components";
import ProjectList from "./-components/ProjectList";
import Sparkles from "./-components/Sparkles";
import TitleHeader from "./-components/TitleHeader";

import { motion, MotionValue, useScroll, useSpring, useTransform } from "motion/react";

const HomeComponent = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 4rem;
`;

const ProjectListComponent = styled.div`
    margin-top: 8rem;
    background-color: var(--ah-darkgrey);
    width: 100%;
    border-top: solid 3px var(--ah-babypink);
    border-bottom: solid 3px var(--babyyellow);
`;

const ImgContainer = styled.section`
    height: 100vh;
    scroll-snap-align: start;
    scroll-behavior: auto;
    scroll-snap-type: y proximity;
    display: flex;
    justify-content: left;
    margin-left: 8rem;
    align-items: center;
    position: relative;
`;

const ImgContainerDiv = styled.div`
    width: 500px;
    height: 400px;
    overflow: hidden;

    @media (max-width: 500px) {
        width: 150px;
        height: 200px;
    }
`;

const H2 = styled(motion.h2)`
    color: var(--ah-babyyellow);
    margin: 0;
    font-family: "Azeret Mono", monospace;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: -3px;
    line-height: 1.2;
    position: absolute;
    display: inline-block;
    top: calc(50% - 25px);
    left: calc(50% + 300px);
`;

const Progress = styled(motion.div)`
    position: fixed;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--ah-babyyellow);
    bottom: 50px;
    transform: scaleX(0);
`;

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Project({ id }: { id: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 200);

    return (
        <ImgContainer className="img-container">
            <ImgContainerDiv ref={ref}>
                <img src="/images/med_sparkle.png" alt="" />
                <ProjectList />
            </ImgContainerDiv>
            <H2 initial={{ visibility: "hidden" }} animate={{ visibility: "visible" }} style={{ y }}>
                {`#${id}`}
            </H2>
        </ImgContainer>
    );
}

const Home = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <HomeComponent>
            <Header>
                <TitleHeader />
                <Sparkles />
            </Header>
            <ProjectListComponent>
                <div id="example">
                    {[1, 2, 3, 4, 5].map((project) => (
                        <div key={project}>
                            <Project id={project} />
                        </div>
                    ))}
                    <Progress className="progress" style={{ scaleX }} />
                </div>
            </ProjectListComponent>
            <StyleSheet/>
        </HomeComponent>
    );
};

export default Home;


function StyleSheet() {
    return (
        <style>{`
        html {
            scroll-snap-type: y mandatory;
        }
    `}</style>
    )
}