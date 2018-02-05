import styled from 'styled-components'
import * as colors from '../../../styles/colors'

const InputGroup = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: stretch;
  align-items: stretch;
  width: 100%;
  .form-control{
      display: block;
      width: 100%;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-image: none;
      background-clip: padding-box;
      border: 1px solid ${colors.he_grey_4};
      border-radius: .25rem;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      outline: none;
      &.has-suggestion{
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
      }
      &:focus{
          border: 1px solid ${colors.he_blue};
      }
  }
  .input-group-btn {
      position: relative;
      -ms-flex-align: stretch;
      align-items: stretch;
      font-size: 0;
      white-space: nowrap;
  }
  .btn {
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
          border-top-color: transparent;
          border-right-color: transparent;
          border-bottom-color: transparent;
          border-left-color: transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.6;
      border-radius: .25rem;
          border-top-left-radius: 0.25rem;
          border-bottom-left-radius: 0.25rem;
      transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .search-btn{
      background-color: #868e96;
      border-color: #868e96;
      margin-left: -3px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
  }
`;

export default InputGroup