import styled from '@emotion/styled'
import GlobalStyles from './styles/GlobalStyle'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme'

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Title>초기세팅 확인~~</Title>
    </ThemeProvider>
  )

}

const Title = styled.h1 `
  ${({theme}) => theme.typography.title03}
`

