import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    form {
        display: flex;
        flex-direction: column;
        margin: 15px auto 0;
        width: 75%;

        input {
            background: #261d2c;
            color: #fff;
            padding-left: 10px;
            height: 50px;
            border: 0;
            border-radius: 4px;
            margin-top: 10px;
        }
        textarea {
            border: 0;
            border-radius: 4px;
            padding: 10px 10px;
            background: #261d2c;
            color: #fff;

            resize: none !important;
            height: 100px;
            margin-top: 10px;
        }

        span {
            color: red;
            padding: 10px 0 0 10px;
        }
    }
`;

export const SaveButton = styled.button`
    align-self: flex-end;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0 0;
    height: 44px;
    width: 180px;
    background: #f94d6a;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
        background-color: ${darken(0.08, '#F94D6A')};
    }
`;
