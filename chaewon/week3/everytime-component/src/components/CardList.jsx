import styled from '@emotion/styled'

export default function Cardist ({lists}) {
    return (
        <ListContainer>
                {lists.map((item) => (
                    <CardWrapper key={item.id}>
                        <CardImage src={item.image} />
                        <CardItem>
                            <CardTitle>{item.title}</CardTitle>
                            <CardPrice>{item.price}원</CardPrice>
                        </CardItem>
                    </CardWrapper>
                ))}
        </ListContainer>

    )

}

const ListContainer = styled.ul `
    display: inline-flex;
    align-items: center;
    gap: 2px;
`

const CardWrapper = styled.li `
    display: flex;
    width: 152px;
    height: 273px;
    flex-direction: column;
    align-items: flex-start;
`

const CardImage = styled.img `
    display: flex;
    width: 152px;
    height: 192px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`

const CardItem = styled.div `
    display: flex;
    height: 80px;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    flex-shrink: 0;
    align-self: stretch;
    border: 1px solid ${({theme}) => theme.colors.gray['300']};
    ackground: ${({theme}) => theme.colors.white};

`

const CardTitle = styled.span `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: ${({theme}) => theme.colors.gray['700']};
    text-overflow: ellipsis;
    ${({theme}) => theme.typography.title08};
`

const CardPrice = styled.span `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: ${({theme}) => theme.colors.primary.red};
    text-overflow: ellipsis;
    ${({theme}) => theme.typography.body07};
`