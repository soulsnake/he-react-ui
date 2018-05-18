import createRouterProxy from 'react-cosmos-router-proxy'
import { FormWrapperProxy } from './config/cosmos-proxies/FormWrapperProxy'
import { ParentLayoutProxy } from './config/cosmos-proxies/ParentLayoutProxy'
import {ButtonActionProxy} from './config/cosmos-proxies/ButtonActionProxy'

export default [FormWrapperProxy, createRouterProxy(), ParentLayoutProxy, ButtonActionProxy]
