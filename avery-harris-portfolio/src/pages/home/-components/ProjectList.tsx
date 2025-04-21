import styled from "styled-components";

const ProjectListContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
`;

const H1 = styled.h1`
    font-size: 2rem;
`

const P = styled.p`
    font-size: 1.5rem;
`

const ProjectList = () => {
    return (
        <ProjectListContainer>
            <div id="project0">
                <H1>Animal Classification</H1>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit est repudiandae facilis dignissimos, vero deserunt unde aspernatur ipsum ducimus perferendis voluptatem, fugiat voluptas, explicabo voluptate temporibus harum rerum! Ut!</P> 
            </div>
            <div id="project1">
                <H1>Huegram</H1>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit est repudiandae facilis dignissimos, vero deserunt unde aspernatur ipsum ducimus perferendis voluptatem, fugiat voluptas, explicabo voluptate temporibus harum rerum! Ut!</P> 
            </div>
            <div id="project2">
                <H1>BeKindly</H1>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit est repudiandae facilis dignissimos, vero deserunt unde aspernatur ipsum ducimus perferendis voluptatem, fugiat voluptas, explicabo voluptate temporibus harum rerum! Ut!</P> 
            </div>
            <div id="project3">
                <H1>Masking Sentence</H1>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit est repudiandae facilis dignissimos, vero deserunt unde aspernatur ipsum ducimus perferendis voluptatem, fugiat voluptas, explicabo voluptate temporibus harum rerum! Ut!</P> 
            </div>
            <div id="project4">
                <H1>Date the Professor</H1>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit est repudiandae facilis dignissimos, vero deserunt unde aspernatur ipsum ducimus perferendis voluptatem, fugiat voluptas, explicabo voluptate temporibus harum rerum! Ut!</P> 
            </div>
            
        </ProjectListContainer>
        
    );
};

export default ProjectList;
