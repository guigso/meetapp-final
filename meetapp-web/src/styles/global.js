import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

*:focus {
    outline:0;
}

html, body, #root{
    height:100%;
}

body,input , button{
    font:14px 'Roboto', sans-serif;
    color:#fff;
}

a{
    text-decoration:none;
}

ul,li{
    list-style-type:none;
}

button {
    cursor:pointer
}

`;
