## Switch props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| value/v-model | 指定当前是否选中，可以用 v-model 双向绑定数据 | Boolean | - | false |
| disabled | 是否禁用 | Boolean | - | false |
| true-value | 选中时的值，当使用 1 和 0 来判断是否选中时会很有用 | Boolean,Number,String | - | true |
| false-value | 没有选中时的值，当使用 1 和 0 来判断是否选中时会很有用 | Boolean,Number,String | - | false |

## Switch events

| 事件名称 | 说明 | 返回数据 |
| - | - | - |
| on-change | 开关变化时触发，返回当前的状态 | true/false |
