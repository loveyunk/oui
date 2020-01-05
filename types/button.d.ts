import Vue from "vue";

export declare class OButton extends Vue {
  /**
   * 按钮类型，可选值为 default、primary、warning、danger、success、info、inverse或者不设置
   * @default default
   */
  type?:
    | ""
    | "default"
    | "primary"
    | "warning"
    | "danger"
    | "success"
    | "info"
    | "inverse";
  /**
   * 按钮尺寸，可选值为large、small、default或者不设置
   * @default default
   */
  size?: "" | "large" | "small" | "default";
  /**
   * 是否禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否开启block
   * @default false
   */
  block?: boolean;
}
