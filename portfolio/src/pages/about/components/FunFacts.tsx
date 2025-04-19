import styled from "styled-components";

const ProjectListContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    gap: 1rem;
`;

const H1 = styled.h1`
    font-size: 2rem;
`

const P = styled.p`
    font-size: 1.5rem;
`

const FunFacts = () => {
    return (
        <ProjectListContainer>
            <H1>Animal Classification</H1>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit est repudiandae facilis dignissimos, vero deserunt unde aspernatur ipsum ducimus perferendis voluptatem, fugiat voluptas, explicabo voluptate temporibus harum rerum! Ut!</P>
        </ProjectListContainer>
        
    );
};

export default FunFacts;
