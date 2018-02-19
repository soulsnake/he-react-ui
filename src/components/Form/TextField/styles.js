import styled from 'styled-components'
import * as colors from '../../../styles/colors'
import * as sizes from '../../../styles/sizes'

const StyledTextField = styled.div`
    font-size: ${sizes.fontsize_body};
    display: inline-block;
    position: relative;
    background-color: transparent;
    cursor: auto;
    color: ${colors.navy_2};

    .input-floating-label{
        position: absolute;
        top: 25px;
        transition: transform 250ms ease;
        z-index: 1;
        transform: scale(1) translate(0px, 0px);
        transform-origin: left top 0px;
        pointer-events: none;
        user-select: none;
        color: ${colors.navy_2};
        &.focused{
            position: absolute;
            top: 28px;
            transform: scale(0.875) translate(0px, -20px);
            transform-origin: left top 0px;
            pointer-events: none;
            user-select: none;
        }
    }
    input{
        padding: 0px;
        position: relative;
        width: 100%;
        border: none;
        outline: none;
        background-color: rgba(0, 0, 0, 0);
        color: rgba(0, 0, 0, 0.87);
        opacity: 1;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        height: 24px;
        box-sizing: border-box;
        margin-top: 0px;
        font-size: ${sizes.fontsize_body};
        &.focused{
            margin-top: 10px;
        }
    }
    .input-invalid-text{
        color: ${colors.sp_red};
    }
`

export const StyledTextFieldBlock = styled.div`
    border: thin solid ${colors.n_grey_3};
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    height: 64px;
    &.focused{
        border-color: ${colors.teal_1};
        .input-floating-label{
            color: ${colors.teal_1};
        }
    }
    &.invalid{
        border-color: ${colors.sp_red};
        background-color: ${colors.sp_light_red};
        .input-floating-label{
            color: ${colors.sp_red};
        }
    }
    &.disabled{
        border-color: ${colors.n_grey_3};
        background-color: ${colors.n_grey_4};
        .input-floating-label{
            color: ${colors.n_grey_1};
        }
    }
`
export default StyledTextField
