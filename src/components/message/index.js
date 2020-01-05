const prefixCls = 'o-message';

function notice(content, duration, type, onClose) {}

export default {
  name: 'Message',

  info(options) {
    return this.message('info', options);
  },

  message(type, options) {
    if (typeof options === 'string') {
      options = {
        content: options
      };
    }
    return notice(
      options.content,
      options.duration,
      type,
      options.onClose,
      options.closable,
      options.render
    );
  }
};
