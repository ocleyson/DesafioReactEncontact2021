import styled from "styled-components";
import { colors } from "../../styles";

export const Input = styled.input`
    flex-grow: 1;
    background: transparent;
    border: none;
    padding: 5px;
    font-size: 18px;
    color: ${colors.text};

    &::placeholder {
        color: ${colors.text};
    }
`;
