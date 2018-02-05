import styled from 'styled-components'
import * as colors from '../../../styles/colors'

const StyledInlineSelector = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    .select-group-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-image: none;
        border: 1px solid ${colors.n_grey_2};
        white-space: nowrap;
        padding: 10px 20px;
        font-size: 14px;
        line-height: 1.42857143;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        color: ${colors.navy_1};
        background-color: ${colors.white};
        margin-left: -1px;
        &:first-child{
            border-radius: 4px 0 0 4px;
        }
        &:last-child{
            border-radius: 0 4px 4px 0;
        }
        &:not(.disabled):hover{
            border: 1px solid ${colors.teal_1};
            z-index: 1;
        }
        &:not(.disabled).selected{
            background-color: ${colors.teal_1};
            border: 1px solid ${colors.teal_1};
            color: ${colors.white};
            &:hover{
                background-color: ${colors.teal_2};
                border: 1px solid ${colors.teal_2};
            }
        }
    }

    &.vertical{
        flex-direction: column;
        .select-group-btn{
            margin-left: 0;
            margin-top: -1px;
            &:first-child{
                border-radius: 4px 4px 0 0;
            }
            &:last-child{
                border-radius: 0 0 4px 4px;
            }
        }
    }
`;

export default StyledInlineSelector