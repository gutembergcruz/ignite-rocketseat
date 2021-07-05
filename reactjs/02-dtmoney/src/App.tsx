import styled from 'styled-components'

const Title = styled.h1`
  color: #8257e6;
  font-size: 25px;
  font-family: sans-serif;
  span{
    color: red;
  }
`

export function App() {
  return (
    <div className="App">
      <Title>
        Hello World
        <span>!</span>
        </Title>
    </div>
  );
}
