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
  font-size: $font-sm;
  font-weight: 400;
  color: white;
  transition: opacity 300ms ease-in-out;

  &:hover {
      opacity: 0.75;
  }
`