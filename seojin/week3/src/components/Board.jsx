/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import axios from "axios";
import { useState, useEffect } from "react";

function formatTitle(title) {
    const maxLength = 21;

    if (title.length <= maxLength) return title;
    else return title.slice(0, maxLength);
}

function formatTime(time) {
    const nowTime = new Date("2026-05-05T12:30:00");
    const createdTime = new Date(time);

    const timeElapsed = Math.floor((nowTime - createdTime) / (1000 * 60));

    if (timeElapsed < 60) return `${timeElapsed}분 전`;
    else {
        const month = createdTime.getMonth() + 1;
        const date = createdTime.getDate();
        const hour = createdTime.getHours();
        const minute = createdTime.getMinutes();

        return `${month}/${date} ${hour}:${minute}`;
    }
}

export function Board() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const featchPosts = async () => {
            try {
                const res = await axios.get('http://localhost:5173/data/boardData.json');
                setPosts(res.data);
            } catch (err) {
                console.log("데이터 가져오기 실패:", err);
            }
        };

        featchPosts();
    }, []);



    return (
        <Boards>
            <BoardSection>
                <BoardHeader>자유 게시판</BoardHeader>
                <ul>
                    {posts.slice(0, 4).map((post) => (
                    <BoardContent key={post.id}>
                        <span>{formatTitle(post.title)}</span>
                        <time>{formatTime(post.createdAt)}</time>
                    </BoardContent>        
                    ))}
                </ul>
                    
                
            </BoardSection>
            
            <BoardSection>
                <BoardHeader>장터 게시판</BoardHeader>
                <ul>
                    {posts.slice(4, 8).map((post) => (
                    <BoardContent key={post.id}>
                        <span>{formatTitle(post.title)}</span>
                        <time>{formatTime(post.createdAt)}</time>
                    </BoardContent>        
                    ))}
                </ul>
                    

            </BoardSection>
        </Boards>
    )

}

const Boards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

const BoardSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 24.25rem;
    border: 1px solid #E3E3E3;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;

const BoardHeader = styled.header`
    display: flex;
    height: 2.5rem;
    padding: 0.625rem;
    align-items: center;
    border-bottom: 1px solid #E3E3E3;
    background-color: #FFF;

    color: #F91F15;
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: 0.01rem;
`;

const BoardContent = styled.li`
    display: flex;
    height: 2.4375rem;
    padding: 0.625rem;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #E3E3E3;
    background-color: #FFF;

    &:last-child {
        border: none;
    }

    span {
        overflow: hidden;
        color: #444;

        font-size: 0.9375rem;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: 0.01875rem;
    }

    time {
        color: #A6A6A6;
        font-size: 0.6875rem;
        font-weight: 500;
        line-height: 130%;
    }
`;