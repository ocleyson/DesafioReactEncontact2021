import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom"

interface ILi {
    isMarked: boolean
}

export const Ul = styled.ul`
    list-style: none;
`;

export const Li = styled.li<ILi>`
    display: inline;
    padding: 5px;
    margin: 0 5px 0 5px;
    border-bottom: ${props => props.isMarked ? `3px solid ${colors.primary}` : 'none'};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;
