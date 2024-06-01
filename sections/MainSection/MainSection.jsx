import Image from "next/image";
import {
  StyledContainer,
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledCardContainer,
} from "./elements";
import { Card } from "../../collections";

export const MainSection = ({ image, title, description, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledCardContainer {...props}>
        <StyledImageContainer>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <Card />
      </StyledCardContainer>
    </StyledContainer>
  );
};
