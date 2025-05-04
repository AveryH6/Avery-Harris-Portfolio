import styled from "styled-components";

const HeadTitle = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 4rem;
    max-width: 50%;
`;

const HeadText = styled.div`
    display: flex;
    position: fixed;
    background: linear-gradient(100deg, black 0%, var(--ah-pink) 100%);
    flex-direction: column;
    font-size: 2rem;
    padding: 4rem;
    max-width: 100%;
    z-index: -1;
    top: 0;
`;

const AboutTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 2rem;
    margin-top: 2.5rem;
    max-width: 100%;
    gap: 2rem;  
`

const AboutP = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin-top: 2.5rem;
    max-width: 100%;
    gap: 2rem;
`

const AboutHeader = () => {
    return (
        <HeadText>
          <AboutTop>
            <HeadTitle>
                <h1>About Avery!</h1>
                <AboutP>
                    <p>
                        I’m a web developer from the Nashville, TN area!
                    </p> 
                </AboutP>
            </HeadTitle>
          </AboutTop>
          
          <AboutP>
            <p>
                I am currently a senior at Freed-Hardeman University. I am studying Computer Science with a focus in Information Systems. I am also pursusing a minor in Artificial Intelligence. I played on the University's volleyball team all 4 years. I value good teamwork and communcations when tackling any project!
            </p> 
          </AboutP>        
          

        </HeadText>
    );
};

export default AboutHeader;

