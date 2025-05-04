import { useRef } from "react";
import styled from "styled-components";
import { projects } from "../../components/data/projects"; // or wherever you placed it
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
    scroll-snap-align: start;
`;

const ProjectListComponent = styled.div`
    margin-top: 10rem;
    background-color: var(--ah-darkgrey);
    width: 100%;
    border-top: solid 3px var(--ah-babypink);
    border-bottom: solid 3px var(--ah-babyyellow);
`;

const ProjectLink = styled.a`
    color: white;
`

const ImgContainer = styled.section`
    height: 100vh;
    scroll-snap-align: start;
    scroll-behavior: auto;
    display: flex;
    justify-content: left;
    margin-left: 8rem;
    align-items: center;
    position: relative;
`;

const ImgContainerDiv = styled.div`
    width: 500px;
    height: 600px;
    overflow: hidden;
    align-items: center;

    @media (max-width: 500px) {
        width: 150px;
        height: 200px;
    }
`;

const H2 = styled(motion.h2)`
    color: var(--ah-pink);
    margin: 0;
    font-family: "Azeret Mono", monospace;
    font-size: 50px;
    font-weight: 700;
    align-items: center;
    letter-spacing: -3px;
    line-height: 1.2;
    position: absolute;
    display: inline-block;
    top: calc(50% - 25px);
    left: calc(50% + 300px);
`;

const H1 = styled.h1`
    font-size: 2rem;
`

const P = styled.p`
    font-size: 1.5rem;
`

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

function Project({ id, title, description, githubLink }: { id: number; title: string; description: string; githubLink: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 200);

    return (
        <ImgContainer className="img-container">
            <ImgContainerDiv ref={ref}>
                <ProjectLink href={githubLink} target="_blank" rel="noopener noreferrer">
                    <img src="/github-mark/github-mark-white.svg" alt="" />
                </ProjectLink>
                <div>
                    <H1>{title}</H1>
                    <P>{description}</P>
                </div>
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
            <StyleSheet/>
            <Header>
                <TitleHeader />
                <Sparkles />
            </Header>
            <ProjectListComponent>
                <div id="example">
                    {projects.map((project, i) => (
                        <div key={i}>
                            <Project id={i} title={project.title} description={project.description} githubLink={project.githubLink} />
                        </div>
                    ))}
                    <Progress className="progress" style={{ scaleX }} />
                </div>
            </ProjectListComponent>
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