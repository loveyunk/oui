import Avatar from './components/avatar';
import Button from './components/button';
import ButtonGroup from './components/button-group';
import Message from './components/message';
import Badge from './components/badge';
import Icon from './components/icon';
import OSwitch from './components/switch';
import Input from './components/input';
import Tabs from './components/tabs';
import Form from './components/form';

const components = {
  OAvatar: Avatar,
  OButton: Button,
  OButtonGroup: ButtonGroup,
  Message,
  Badge,
  Icon,
  OSwitch,
  OInput: Input,
  OTabs: Tabs,
  OTabPane: Tabs.Pane,
  OForm: Form,
  OFormItem: Form.Item
};

const oui = {
  ...components
};

const install = function(Vue, opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

  Vue.prototype.$Message = Message;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

oui.install = install;

module.exports = oui;
