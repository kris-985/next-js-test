import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const StyledContainer = styled(({ height, background, ...props }) => (
  <SectionContainer {...props} />
))`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-image: url(${({ background }) =>
    background.src || "/img/mainsection/mainsectionbgr.png"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 480px) {
    height: ${({ height }) => height || "20vh"};
    width: fit-content;
  }

  @media (max-width: 768px) {
    height: ${({ height }) => height || "30vh"};
  }

  @media (max-width: 1024px) {
    height: ${({ height }) => height || "100%"};
    background-size: contain;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  font-family: sans-serif;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  color: black;
  text-align: center;
  line-height: 4rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  color: black;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const StyledCardContainer = styled(({ margin, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: ${({ margin }) => margin || 0}px;

  @media (max-width: 480px) {
    height: ${({ height }) => height || "20vh"};
    margin: 0;
    width: fit-content;
  }

  @media (max-width: 768px) {
    height: ${({ height }) => height || "30vh"};
    margin: 0;
  }

  @media (max-width: 1024px) {
    height: ${({ height }) => height || "100%"};
    margin: 0;
  }
`;

export const StyledImageContainer = styled.div`
  margin-top: 4rem;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 3.3rem;
  }
`;
