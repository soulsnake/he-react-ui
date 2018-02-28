import styled from 'styled-components'
import * as colors from '../../styles/colors'

import { Grid as stockGrid, Col as stockCol, Row as stockRow} from 'react-styled-flexboxgrid'

const StyledListContainer = styled.div`
    width: 100%;
    .list-header{
        background-color: ${colors.n_grey_1};
        padding: 10px;
    }
`
export const Grid = styled(stockGrid)`
    width: 100%;
`
export const Row = styled(stockRow)`
    padding: 10px;
    margin-left: 0px;
    margin-right: 0px;
    background-color: ${colors.white};
    border-bottom: thin solid ${colors.n_grey_2};
`
export const Col = styled(stockCol)`
    width: ${props => props.width ? props.width : 'auto'};
`
export default StyledListContainer
