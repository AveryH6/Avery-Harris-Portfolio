import React from "react";
import styled from "styled-components";

const HeadTitle = styled.div`
  font-size: 4rem;
  max-width: 40%;
`;

const HeadText = styled.div`
  font-size: 2rem;
  margin-top: 2.5rem;
`;

const TitleHeader = () => {
    return (
        <HeadTitle>
        <h1>Hi, I'm Avery!</h1>
        <HeadText>
          <p>
            I’m passionate about building responsive and user-friendly digital
            experiences!
          </p>
        </HeadText>
      </HeadTitle>
    );
};

export default TitleHeader;

