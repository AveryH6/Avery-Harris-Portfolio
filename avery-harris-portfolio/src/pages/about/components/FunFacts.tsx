import styled from "styled-components";

const FunFactsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem;
    margin-top: 50rem;
    padding: 4rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
    background-color: var(--ah-darkgrey);
    border-top: solid 3px var(--ah-babypink);
    border-bottom: solid 3px var(--ah-babyyellow);
`;

const Img = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 1.5rem;
`

const FunFactContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    gap: 2rem;
`

const H1 = styled.h1`
    font-size: 3rem;
`

const P = styled.p`
    font-size: 2rem;
`

const FunFacts = () => {
    return (
        <FunFactsContainer>
            <Img src="/images/cozy coder.png" alt="" />
            <FunFactContent>
                <H1>Fun Facts!</H1>
                <P>I am a 22-year-old with a background in collegiate volleyball! I bring teamwork, discipline, and a competitive edge into every project.</P> 
                <P>Outside of tech and development, I enjoy crocheting and reading creative outlets that balance my logical mindset with a touch of artistry.</P>                
            </FunFactContent>
        </FunFactsContainer>
        
    );
};

export default FunFacts;
