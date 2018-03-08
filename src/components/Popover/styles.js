import styled from 'styled-components'
import * as colors from '../../styles/colors'

const PopoverWrap = styled.div`
    &.top {
        margin-top: -10px
    }

    &.right {
        margin-left: 10px
    }

    &.bottom {
        margin-top: 10px
    }

    &.left {
        margin-left: -10px
    }

    >.title {
        margin: 0;
        padding: 8px 14px;
        font-size: 14px;
        background-color: #f7f7f7;
        border-bottom: 1px solid #ebebeb;
        border-radius: 5px 5px 0 0
    }

    >.content {
        padding: 9px 0
    }

    >.arrow,
    >.arrow:after {
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid
    }

    >.arrow {
        border-width: 11px
    }

    >.arrow:after {
        border-width: 10px;
        content: ""
    }

    &.top>.arrow {
        left: 50%;
        margin-left: -11px;
        border-bottom-width: 0;
        border-top-color: #999;
        border-top-color: rgba(0, 0, 0, .25);
        bottom: -11px
    }

    &.top>.arrow:after {
        content: " ";
        bottom: 1px;
        margin-left: -10px;
        border-bottom-width: 0;
        border-top-color: #fff
    }

    &.right>.arrow {
        top: 50%;
        left: -11px;
        margin-top: -11px;
        border-left-width: 0;
        border-right-color: #999;
        border-right-color: rgba(0, 0, 0, .25)
    }

    &.right>.arrow:after {
        content: " ";
        left: 1px;
        bottom: -10px;
        border-left-width: 0;
        border-right-color: #fff
    }

    &.bottom>.arrow {
        left: 50%;
        margin-left: -11px;
        border-top-width: 0;
        border-bottom-color: #999;
        border-bottom-color: rgba(0, 0, 0, .25);
        top: -11px
    }

    &.bottom>.arrow:after {
        content: " ";
        top: 1px;
        margin-left: -10px;
        border-top-width: 0;
        border-bottom-color: #fff
    }

    &.left>.arrow {
        top: 50%;
        right: -11px;
        margin-top: -11px;
        border-right-width: 0;
        border-left-color: #999;
        border-left-color: rgba(0, 0, 0, .25)
    }

    &.left>.arrow:after {
        content: " ";
        right: 1px;
        border-right-width: 0;
        border-left-color: #fff;
        bottom: -10px
    }
`
export default PopoverWrap
