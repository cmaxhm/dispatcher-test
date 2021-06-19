var EventDispatcher = {
    /**
     * @param {object} instance
     * @return {void}
     */
    mixin: function (instance) {
      instance.addEventListener = this.addEventListener;
      instance.dispatchEvent = this.dispatchEvent;
      instance.removeEventListener = this.removeEventListener;
      instance.hasListenerFor = this.hasListenerFor;
      instance.hasCallbackFor = this.hasCallbackFor;
      instance.events = [];
    },

    /**
     * @param {string} name
     * @param {function} callback
     * @param {Object} opt_scope
     * @return {void}
     */
    addEventListener: function (name, callback, opt_scope) {
      this.events.push({ name, callback });
    },

    /**
     * @param {string} name
     * @return {boolean}
     */
    hasListenerFor: function (name) {
      return this.events.map(event => event.name).includes(name);
    },

    /**
     * @param {string} name
     * @param {function} callback
     * @return {boolean}
     */
    hasCallbackFor: function (name, callback) {
    
    },

    /**
     * @param {string} name
     * @param {function} callback
     * @param {Object} opt_scope
     * @return {void}
     */
    removeEventListener: function (name, callback, opt_scope) {

    },

    /**
     * @param {string} name
     * @return {void}
     */
    dispatchEvent: function (name) {

    }
};
