/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import { Board } from "./components/Board";
import { BookFrame } from "./components/BookFrame";

function App() {
  return (
    <Page>
      <Board/>
      <BookFrame/>    
    </Page>

  )
}

const Page = styled.div`
  display: flex;
  margin: 2rem;
  gap: 5.25rem;
`;

export default App
