/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import axios from "axios";
import { useState, useEffect } from "react";

function formatPrice(price) {
    return `${price.toLocaleString()}`;
}

export function BookFrame() {
    const [ imgs, setImgs ] = useState([]);

    useEffect(() => {
        const featchImgs = async () => {
            try {
                const res = await axios.get('http://localhost:5173/data/imageData.json');
                setImgs(res.data);
            } catch (err) {
                console.log("데이터 가져오기 실패:", err);
            }
        };

        featchImgs();
    }, []);

    return (
        <Frames>

                {imgs.map((img) => (
                <BookArticle key={img.id}>
                    <img src={img.bookImg}/>
                    <BookItem>
                        <h3>{img.title}</h3>
                        <p>{formatPrice(img.price)}원</p>                    
                    </BookItem>

                </BookArticle>
                ))}
                
        </Frames>
    )
}

const Frames = styled.section`
    display: inline-flex;
    align-items: center;
    gap: 0.125rem;
`;

const BookArticle = styled.article`
    display: flex;
    width: 9.5rem;
    height: 17.0625rem;
    flex-direction: column;
    align-items: flex-start;

    img {
        display: flex;
        width: 100%;
        height: 12rem;
        object-fit: cover;
    }
`;

const BookItem = styled.div`
    display: flex;
    width: 100%;
    height: 5rem;
    padding: 0.625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5625rem;
    flex-shrink: 0;

    border: 1px solid #E3E3E3;
    background: #FFF;

    h3 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #444;
        font-size: 1rem;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -0.01rem;
    }

    p {
        color: #F91F15;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -0.0075rem;
    }
`;