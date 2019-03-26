import Button from './components/button';

const oui = {
  Button
};

const install = function(Vue) {
  Object.keys(oui).forEach(key => {
    Vue.component(key, oui[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  install
};

module.exports.default = module.exports = API; // eslint-disable-line no-undef
