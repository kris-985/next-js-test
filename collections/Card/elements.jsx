import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 60px;
  margin-left: 30px;
`;

export const CardContainer = styled(({ width, ...props }) => (
  <div {...props} />
))`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 25px;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: ${({ width }) => width || 450}px;
  ${({ color}) => `border: 2px solid ${color}`|| ''};
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const IconContainer = styled.div`
  font-size: 2em;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(({ color, textDecoration, ...props }) => (
    <strong {...props} />
  ))`
  font-size: 1.2em;
  margin-bottom: 5px;
  color: ${({ color }) => color || "black"};
  text-decoration: ${({ textDecoration }) => textDecoration || "none"};
`;

export const Description = styled.div`
  font-size: 1em;
`;
