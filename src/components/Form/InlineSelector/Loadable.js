/**
 *
 * Asynchronously loads the component for ButtonGroup
 *
 */

import Loadable from 'react-loadable'

export default Loadable({
  loader: () => import('./index'),
  loading: () => null
})
