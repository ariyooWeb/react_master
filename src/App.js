import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display:flex;
`;

const Emoji = styled.span`
  font-size:50px;
  color: ${(props) => props.theme.textColor}
`

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    border-radius: 50%;
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.backgroundColor};
  animation: ${animation} 1s linear infinite;
  ${Emoji} {
    font-size:50px;
    &:hover {
      font-size:70px;
    }
  }
`;


function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>asdasd</Emoji>
      </Box>
      <Emoji>🎗</Emoji>
    </Wrapper>
  );
}

export default App;
