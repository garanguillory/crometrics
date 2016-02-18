/**
 * @desc log() console.logs based on auto sniffing debug cookie
 *
 * @param {...args} args - prefixed with 'crometrics:'
 *
 * @return {null}
 */
function log(...args) {
  try {
    if (/crometrics-debug|localhost|optimizely_x/.test(location.href))
      document.cookie = 'crometrics-debug=true;path=/;';
    if (/crometrics-debug=true/.test(document.cookie))
      console.info('crometrics:', ...args);
  } catch (a) {}
}

export default log;
