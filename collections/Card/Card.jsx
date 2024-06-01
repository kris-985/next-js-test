import { TfiBriefcase } from "react-icons/tfi";
import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import { FcConferenceCall } from "react-icons/fc";
import {
  CardContainer,
  Container,
  Content,
  Description,
  IconContainer,
  Title,
} from "./elements";

export const Card = ({ card }) => {
  const { firstCardProps, secondCardProps, thirdCardProps } = card;

  return (
    <Container>
      <CardContainer {...firstCardProps}>
        <IconContainer>
          <TfiBriefcase />
        </IconContainer>
        <Content>
          <Title>Brief</Title>
          <Description>
            Complete <strong>brief writing or simple guidance</strong> on what
            to include, ve got you covered.
          </Description>
        </Content>
      </CardContainer>
      <CardContainer {...secondCardProps}>
        <IconContainer>
          <TbDeviceIpadHorizontalSearch />
        </IconContainer>
        <Content>
          <Title>Search</Title>
          <Description>
            In-depth agency search covering: <strong>criteria matching</strong>,
            door knocking and due-diligence vetting.
          </Description>
        </Content>
      </CardContainer>
      <CardContainer {...thirdCardProps}>
        <IconContainer>
          <FcConferenceCall />
        </IconContainer>
        <Content>
          <Title {...thirdCardProps}>Pitch</Title>
          <Description>
            Comprehensive <strong>pitch management</strong>, including comms,
            diary management and pitch hosting.
          </Description>
        </Content>
      </CardContainer>
    </Container>
  );
};
