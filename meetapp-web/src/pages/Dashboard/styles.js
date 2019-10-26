import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    header {
        margin-top: 50px;
        display: flex;
        width: 100%;
        align-self: center;
        align-items: center;
        justify-content: space-between;

        button {
            display: flex;
            align-items: center;
            justify-content: space-around;
            border: 0;
            background: none;
            border-radius: 4px;
            background-color: #f94d6a;
            height: 32px;
            width: 164px;
            font-size: 16px;
            &:hover {
                background-color: ${darken(0.08, '#F94D6A')};
            }
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;
        margin-top: 30px;
        text-align: center;

        h1,
        svg {
            color: #999;
            justify-self: center;
        }
    }
`;

export const Loading = styled.li`
    div {
        margin-bottom: 15px;
        height: 62px;
        animation: shine 1.5s ease-in-out infinite;
        background: linear-gradient(95deg, #000 8%, #383232 18%, #000 33%);
    }

    @keyframes shine {
        0% {
            background-position: -600px 0;
        }

        100% {
            background-position: 600px 0;
        }
    }
`;

export const Meetup = styled.li`
    padding: 22px;
    background: #000;
    height: 62px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    aside {
        display: flex;
        align-items: center;

        span {
            color: #999;
        }
    }
`;
