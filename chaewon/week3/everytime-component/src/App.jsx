import styled from '@emotion/styled'
import GlobalStyles from './styles/GlobalStyle'

export default function App() {

  return (
    <>
    <GlobalStyles />
    <Title>초기세팅 확인~~</Title>
    </>
  )

}

const Title = styled.h1 `
  font-size: 100px;
  color: red;
`

