import Button from './components/button';

const zui = {
    Button
};

const install = function(Vue) {

    Object.keys(zui).forEach(key => {
        Vue.component(key, zui[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    install
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
