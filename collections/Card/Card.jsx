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

const firstCard = { width: 450 };
const secondCard = { width: 500 };
const thirdCard = { width: 550, color: '#1e90ff', textDecoration: 'underline' };

export const Card = () => {
  return (
    <Container>
      <CardContainer {...firstCard}>
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
      <CardContainer {...secondCard}>
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
      <CardContainer {...thirdCard}>
        <IconContainer>
          <FcConferenceCall />
        </IconContainer>
        <Content>
          <Title {...thirdCard}>Pitch</Title>
          <Description>
            Comprehensive <strong>pitch management</strong>, including comms,
            diary management and pitch hosting.
          </Description>
        </Content>
      </CardContainer>
    </Container>
  );
};
