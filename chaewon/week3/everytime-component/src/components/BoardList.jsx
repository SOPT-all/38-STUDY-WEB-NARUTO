import styled from '@emotion/styled'
import { listMock } from '../data/listMock'

export default function BoardList({boardTitle}) {
    return (
        <BoardContainer>
            <BoardHeader>{boardTitle}</BoardHeader>
            <ListWrapper>
                {listMock.map((item) =>
                    <ListItem key={item.id}>
                        <ListTitle>{item.title}</ListTitle>
                        <ListTime>{item.createdAt}</ListTime>
                    </ListItem>
                )}
            </ListWrapper>
        </BoardContainer>

    )

}

const BoardContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 338px;
`

const BoardHeader = styled.header `
    display: flex;
    height: 40px;
    padding: 10px;
    align-items: center;
    align-self: stretch;
    border: 1px solid ${({theme}) => theme.colors.gray['300']};
    color: ${({theme}) => theme.colors.primary.red};
    background: ${({theme}) => theme.colors.white};
    ${({theme}) => theme.typography.title03}
`
const ListWrapper = styled.ul ``

const ListItem = styled.li `
    display: flex;
    height: 39px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border: 1px solid ${({theme}) => theme.colors.gray['300']};
    background: ${({theme}) => theme.colors.white};
`

const ListTitle = styled.span `
    display: -webkit-box;
    max-width: 280px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    flex: 1 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({theme}) => theme.colors.gray['700']};
    ${({theme}) => theme.typography.body05}
`

const ListTime = styled.span `
    color: ${({theme}) => theme.colors.gray['500']};
    ${({theme}) => theme.typography.caption06}

`