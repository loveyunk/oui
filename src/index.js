import Avatar from './components/avatar';
import Button from './components/button';

const components = {
  Avatar,
  Button
};

const oui = {
  ...components
};

const install = function(Vue, opts) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

oui.install = install;

module.exports = oui;
