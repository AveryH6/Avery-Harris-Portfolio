import styled from "styled-components";

const HeadTitle = styled.div`
  font-size: 4rem;
  max-width: 100%;
  margin: 4rem;
`;

const HeadText = styled.div`
  font-size: 2rem;
  margin-top: 2.5rem;
  max-width: 100%;
`;

const ContactHeader = () => {
    return (
        <HeadTitle>
        <h1>Contact me!</h1>
        <HeadText>
          <p>
            Shoot me a message below or email me at: harrisae143@gmail.com
          </p>

        </HeadText>
      </HeadTitle>
    );
};

export default ContactHeader;

