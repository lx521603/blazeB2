/*
 * @Author: Harry
 * @Date: 2022-06-24 16:09:24
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-07-04 21:33:59
 * @FilePath: \web\src\plugin\elements.js
 */
/***
 * @Description:
 * @Author: Harry
 * @Date: 2021-09-22 21:36:25
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-03 16:56:48
 * @LastEditors: Harry
 */
// 导入自己需要的组件
import {
  MessageBox,
  Dialog,
  Upload,
  Pagination,
  Input,
  Button,
  Form,
  Select,
  Option,
  Collapse,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  CollapseItem,
  Menu,
  MenuItem,
  Submenu,
  RadioGroup,
  Tooltip,
  FormItem,
  RadioButton,
  Message
} from 'element-ui'

const element = {
  install: function (Vue) {
    Vue.use(Dialog)
    Vue.use(Upload)
    Vue.use(Select)
    Vue.use(Tooltip)
    Vue.use(Dropdown)
    Vue.use(DropdownItem)
    Vue.use(DropdownMenu)
    Vue.use(Option)
    Vue.use(Menu)
    Vue.use(Collapse)
    Vue.use(CollapseItem)
    Vue.use(MenuItem)
    Vue.use(Submenu)
    Vue.use(Pagination)
    Vue.use(Input)
    Vue.use(RadioGroup)
    Vue.use(RadioButton)
    Vue.use(Form)
    Vue.use(Button)
    Vue.use(FormItem)
  },
  other: {
    Message, MessageBox
  }
}
export default element
