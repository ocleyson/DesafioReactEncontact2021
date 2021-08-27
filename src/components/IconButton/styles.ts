import styled from "styled-components";
import { colors } from "../../styles";

export const Button = styled.button`
    background: transparent;
    padding: 5px;
    border: none;
    cursor: pointer;
    width: 45px;

    & > svg {
        color: ${colors.text};
        height: 25px;
        width: 25px;
    }
`;
