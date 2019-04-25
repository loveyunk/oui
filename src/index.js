import Avatar from './components/avatar';
import Button from './components/button';
import Message from './components/message';
import Badge from './components/badge';
import Icon from './components/icon';
import OSwitch from './components/switch';
import Input from './components/input';

const components = {
  Avatar,
  Button,
  Message,
  Badge,
  Icon,
  OSwitch,
  Input
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
