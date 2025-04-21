import styled from "styled-components";

const FunFactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin: 4rem;
`;

const H1 = styled.h1`
    font-size: 3rem;
`

const P = styled.p`
    font-size: 2rem;
`

const FunFacts = () => {
    return (
        <FunFactsContainer>
            <H1>Fun Facts!</H1>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit est repudiandae facilis dignissimos, vero deserunt unde aspernatur ipsum ducimus perferendis voluptatem, fugiat voluptas, explicabo voluptate temporibus harum rerum! Ut!</P>
        </FunFactsContainer>
        
    );
};

export default FunFacts;
