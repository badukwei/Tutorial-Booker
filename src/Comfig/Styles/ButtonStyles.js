import {Link} from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 0.875rem 2.1875rem;
  background: linear-gradient(to right, #003559, #3A4855);
  font-size: 1rem;
  text-decoration: none;
  border: 0;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 400;
  color: white;
  transition: opacity 300ms ease-in-out;

  &:hover {
      opacity: 0.75;
  }
`

export const PriceTag = styled(Link)`
margin-bottom: 1rem;
padding: 0.5rem;
border-radius: 0.2rem;
background-color: #BAD7F2;
color: black;
font-size: 1rem;
font-weight: 400;
text-decoration: none;
transition: background-color 400ms ease-in-out;

&:hover, &:focus {
  color: #E5E5E5;
  background-color: #002B4E;
}
`
export const NavbarLink = styled(Link)`
color: white;
opacity: 0.8;
font-weight: 300;
text-decoration: none;
cursor: pointer;
transition: opacity 300ms ease-in-out;
&:hover, &:focus {
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
font-weight: 500;
text-decoration: none;
cursor: pointer;
&:hover, &:focus {
    color: #002B4E;
    font-size: 1.05rem;
}
&:active{
    color: #002B4E;
};
`

export const SignupLink = styled(Link)`
color: #002B4E;
opacity: 0.9;
font-weight: 500;
font-size: 1rem;
text-decoration: none;
cursor: pointer;
&:hover, &:focus {
    color: #002B4E;
    font-size: 1.05rem;
}
`
export const MenuLink = styled(Link)`
color: #3A4855;
font-size: 1rem;
font-weight: 500;
text-decoration: none;
cursor: pointer;
&:hover, &:focus {
    color: #3A4855;
    font-size: 1.2rem;
    font-weight: 600;
}
`
export const HamburgerMenuLoggIn = styled(Link)`
color: black;
font-size: 1rem;
font-weight: 500;
text-decoration: none;
cursor: pointer;
&:hover, &:focus {
    font-size: 1.2rem;
    font-weight: 600;
}
&:active{
    color: black;
};
`
export const TutorSignupLink = styled(Link)`
padding: 0.875rem 2.1875rem;
background: linear-gradient(to right, #003559, #3A4855);
font-size: 1rem;
text-decoration: none;
border: 0;
border-radius: 50px;
cursor: pointer;
font-weight: 400;
color: white;
transition: opacity 300ms ease-in-out;

&:hover {
    opacity: 0.75;
}
`

export const TuteeSignupLink = styled(Link)`
padding: 0.875rem 2.1875rem;
background: linear-gradient(to right, #BAD7F2, #E5E5E5);
font-size: 1rem;
text-decoration: none;
border: 0;
border-radius: 50px;
cursor: pointer;
font-weight: 500;
color: #003559;
transition: opacity 300ms ease-in-out;

&:hover {
    opacity: 0.75;
}
`
