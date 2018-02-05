import styled from 'styled-components'
import * as colors from '../../../styles/colors'

const StyledSelectGroup = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    .select-group-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-image: none;
        border: 1px solid #ccc;
        white-space: nowrap;
        padding: 10px 20px;
        font-size: 14px;
        line-height: 1.42857143;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        color: #333;
        background-color: #fff;
        margin-left: -1px;
        &:first-child{
            border-radius: 4px 0 0 4px;
        }
        &:last-child{
            border-radius: 0 4px 4px 0;
        }
        &.selected{
            background-color: #008ec8;
            border: 1px solid #008ec8;
            color: #fff;
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

export default StyledSelectGroup