import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background: #19161f;
    padding: 0 30px;
`;
export const Content = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        img {
            margin-right: 20px;
            padding-right: 20px;
        }

        aside {
            display: flex;
            align-items: center;
        }
    }
`;
export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #fff;
        }

        a {
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: #999;
        }
    }

    img {
        height: 32px;
        width: 32px;
        border-radius: 50%;
    }
`;
export const LogoutButton = styled.button`
    border: 0;
    background: none;
    border-radius: 4px;
    background-color: #f94d6a;
    width: 64px;
    &:hover {
        background-color: ${darken(0.08, '#F94D6A')};
    }
`;
