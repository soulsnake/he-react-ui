import React from 'react'
import Popover from '../'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 220px;
  min-width: 160px;
  .menu-link {
    font-size: 13px;
    color: #595959;
    line-height: 1.1;
    padding: 7px 15px;
    background-color: transparent;
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
    cursor: pointer;
    &:hover {
      background-color: #f5f6f8;
    }
  }
`
export default {
  component: Popover,
  props: {
    placement:"bottom",
    positionLeft:200,
    positionTop: 50
  },
  children: <MenuWrapper>
    <a class="menu-link"><span>Settings</span></a>
    <a class="menu-link"><span>Feedback</span></a>
    <a class="menu-link"><span>Help</span></a>
    <a class="menu-link"><span>Logout</span></a>
    </MenuWrapper>
}
