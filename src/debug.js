/*jshint strict: false */

/**
 * @desc throttle() - turns dollar format string into a "mathable" float
 *
 * @param {String} dollarString - the dollar string to be turned into
 *
 * @return {Number} - float version of the dollarString param
 */

import cookie from './cookie';
import getParam from './get-param';

function debug(cookieName = 'cro_debug') {
  if (getParam(cookieName) || cookie(cookieName)) {
    cookie.set(cookieName, true);
    debugger; // jshint ignore:line
  }
}

export default debug;
