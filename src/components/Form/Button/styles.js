import styled from 'styled-components'
import * as colors from '../../../styles/colors'

const StyledButton = styled.button`
  cursor: pointer;
  color: #fff;
  padding: 0px 20px 0px 20px;
  display: block;
  border: none;
  border-radius: 5px;
  text-align: left;
  height: 36px;
  margin: auto;
  position: relative;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
      margin-right: 10px;
    }
  }
  &:hover{
    filter: brightness(90%);
  }
  &.btn-white{
    background: ${colors.white};
    color: ${colors.he_black};
    border: thin solid ${colors.border_grey};
    svg{
      fill: ${colors.he_black};
    }
  }
  &.btn-default{
    background: ${colors.he_teal};
  }
  &.btn-green{
    background: ${colors.he_green};
  }
  &.btn-red{
    background: ${colors.secondary_red};
  }
  &.btn-teal{
    background: ${colors.new_teal};
  }
  &.btn-small{
    max-width: 130px;
    height: 24px;
    font-size: 12px;
  }
  &.btn-disabled{
    background: ${colors.disabled_grey};
    color: ${colors.label_grey};
    cursor: default;
    &:hover{
      filter: brightness(100%);
    }
  }
  &.btn-back-nav{
    background: transparent;
    max-width: 570px;
    font-size: 30px;
    float: left;
    justify-content: left;
    padding: 0;
    svg{
      margin-top: 2px;
      margin-right: 15px;
    }
    &:hover{
      filter: brightness(100%);
    }
  }
`;

export default StyledButton