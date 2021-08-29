import styled from "styled-components";
import { colors } from "../../styles";
import { Input } from '../Input/styles'
import { Button as IconButton } from "../IconButton/styles";

export const TaskText = styled(Input)`
    display: flex;
    align-items: center;
    overflow: hidden;
`;

export const Checkbox = styled.input`
    width: 22px;
    height: 22px;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    outline: none;
    cursor: pointer;
    margin-left: 10px;

    &:checked {
        background-color: ${colors.primary};
    }
`;

export const DeleteButton = styled(IconButton)`
    display: var(--deleteButtonDisplay)
`;
