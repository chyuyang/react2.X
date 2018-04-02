'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config');

var namespace = _config.NAMESPACE ? _config.NAMESPACE + '-' : '';

var ClassNameMixin = {
  setClassNS: function setClassNS(classPrefix) {
    var prefix = classPrefix || this.props.classPrefix || '';

    return namespace + prefix;
  },
  getClassSet: function getClassSet(ignorePrefix) {
    var classNames = {};
    var _props = this.props,
        amSize = _props.amSize,
        amStyle = _props.amStyle,
        hollow = _props.hollow,
        radius = _props.radius,
        rounded = _props.rounded,
        active = _props.active,
        selected = _props.selected,
        disabled = _props.disabled,
        inset = _props.inset;

    // uses `.am-` as prefix if `classPrefix` is not defined

    var prefix = namespace;

    if (this.props.classPrefix) {
      var classPrefix = this.setClassNS();

      prefix = classPrefix + '-';

      // don't return prefix if ignore flag set
      !ignorePrefix && (classNames[classPrefix] = true);
    }

    if (amSize) {
      classNames[prefix + amSize] = true;
    }

    if (amStyle) {
      classNames[prefix + amStyle] = true;
    }

    if (hollow) {
      classNames[prefix + 'hollow'] = true;
    }

    classNames[this.prefixClass('radius')] = radius;
    classNames[this.prefixClass('rounded')] = rounded;

    classNames[this.prefixClass('inset')] = inset;

    // state className
    // `selected` is an alias of active
    classNames[_config.CLASSNAMES['active']] = active || selected;
    classNames[_config.CLASSNAMES['disabled']] = disabled;

    // shape
    // classNames[constants.CLASSES.radius] = this.props.radius;
    // classNames[constants.CLASSES.round] = this.props.round;

    return classNames;
  },
  prefixClass: function prefixClass(subClass) {
    return this.setClassNS() + '-' + subClass;
  }
};

exports.default = ClassNameMixin;
module.exports = exports['default'];