import styled from 'styled-components'
import * as colors from '../../../styles/colors'
import * as sizes from '../../../styles/sizes'

const StyledButton = styled.button`
  cursor: pointer;
  color: ${colors.white};
  padding: 0px ${sizes.padding_small} 0px ${sizes.padding_small};
  border: none;
  border-radius: ${sizes.btn_height};
  text-align: left;
  height: ${sizes.btn_height};
  margin: auto;
  position: relative;
  font-size: ${sizes.fontsize_body};
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
  background: ${colors.teal_1};
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
      margin-right: ${sizes.padding_extra_small};
    }
  }
  &:not(.disabled):hover{
    filter: brightness(92%);
  }
  &:not(.disabled):active{
    filter: brightness(84%);
  }
  &.btn-small{
    height: ${sizes.btn_height_small};
  }
  &.btn-red{
    background: ${colors.sp_red};
  }
  &.btn-white{
    background: ${colors.white};
    border: solid ${sizes.border_width} ${colors.teal_1};
    color: ${colors.teal_1};
  }
  &.btn-grey{
    background: ${colors.n_grey_3};
    color: ${colors.n_grey_1};
  }
  &.btn-link{
    background: none;
    border: none;
  }
`;

export default StyledButton