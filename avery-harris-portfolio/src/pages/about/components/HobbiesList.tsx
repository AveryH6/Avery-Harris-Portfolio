import styled from "styled-components";

const GapContainer = styled.div`
    background: linear-gradient(100deg, black 0%, var(--ah-pink) 100%);
    height: 3rem;
`

const FunFactsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem;
    padding: 4rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
    background-color: var(--ah-darkgrey);
    border-top: solid 3px var(--ah-babyyellow);
    border-bottom: solid 3px var(--ah-babypink);
`;

const Img = styled.img`
    width: 700px;
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

const Hobbies = () => {
    return (
        <div>
            <GapContainer/>
            <FunFactsContainer>
                <FunFactContent>
                    <H1>Hobbies!</H1>
                    <P>I am a 22-year-old with a background in collegiate volleyball! I bring teamwork, discipline, and a competitive edge into every project.</P> 
                    <P>Outside of tech and development, I enjoy crocheting and reading creative outlets that balance my logical mindset with a touch of artistry.</P>                
                </FunFactContent>
                <Img src="/images/hooknbooks.png" alt="" />
            </FunFactsContainer>        
        </div>

        
    );
};

export default Hobbies;
