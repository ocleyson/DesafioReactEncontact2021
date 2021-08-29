import styled from "styled-components";
import { colors } from "../../styles";

export const Ul = styled.ul`
    list-style: none;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #FFF;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const Li = styled.li`
    --deleteButtonDisplay: none;
    display: flex;
    align-items: center;
    min-height: 45px;
    border-bottom: 1px solid ${colors.text};

    &:hover {
        --deleteButtonDisplay: block;
    }

    &:last-child {
        border: none;
    }
`;
