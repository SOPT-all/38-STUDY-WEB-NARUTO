// import styled from '@emotion/styled'
import GlobalStyles from './styles/GlobalStyle'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme'
import BoardList from './components/BoardList'
import CardList from './components/CardList'
import { listMock } from './data/listMock'
import { cardMock } from './data/cardMock'

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BoardList boardTitle="자유 게시판" lists={listMock} />
      <CardList lists={cardMock}></CardList>
    </ThemeProvider>
  )

}


