import {Link} from "react-router-dom";
import styled from "styled-components";

export const NavbarLink = styled(Link)`
color: white;
opacity: 0.8;
font-weight: 300;
text-decoration: none;
cursor: pointer;
transition: opacity 300ms ease-in-out;
&:hover, &:focus{
    color: white;
    opacity: 1;
}
&: active{
    color: #002B4E;
};
`

export const LoginLink = styled(Link)`
color: #002B4E;
font-size: 1rem;
font-weight: bold;
text-decoration: none;
cursor: pointer;
transition: font-size 300ms ease-in-out;
&:hover, &:focus{
    color: #002B4E;
    font-size: 1.05rem;
}
&: active{
    color: #002B4E;
};
`

export const SignupLink = styled(Link)`
color: #002B4E;
opacity: 0.9;
font-weight: bold;
font-size: 1rem;
text-decoration: none;
transition: font-size 300ms ease-in-out;
cursor: pointer;
&:hover, &:focus{
    color: #002B4E;
    font-size: 1.05rem;
}
&: active{
    color: #002B4E;
};
`
