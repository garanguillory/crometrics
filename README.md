# `crometrics` [![Circle CI](https://circleci.com/gh/CROmetrics/crometrics.svg?style=svg)](https://circleci.com/gh/CROmetrics/crometrics)

TODO: Quick marketing use case / maybe a screenshot

## Installation

```shell
# npm install phantomjs -g
npm install --save-dev crometrics
```

## Usage

### Standalone

Make sure browserify is installed, either in your project or globally (`npm install browserify -g`)

```javascript
//test.js
var slugify = require('crometrics/slugify');

var articleTitle = 'How to use the module library!';
var articleSlug = slugify(articleTitle);
```
Build your code: `browserify test.js -o output.js`

### Inside a project

```javascript
import timpl from 'crometrics/timpl';
```

NOTE: ES6 +browserify compilation best used alongside `gulp-clearbuild`

# Modules

### append-css

Appends css once jQuery + head element have finished loading.

```javascript
import css from './v1.scss';
import appendCss from 'crometrics/append-css';

appendCss(css);
```

### console-polyfill

@tomfuertes - Can you help fill in a description and example for this one?

```javascript
//example code here
```

### cookie

Sets, gets, and deletes a cookie with a given name, value, and optional expiration date (in days).

```javascript
import cookie from 'crometrics/cookie';

var cookieName = 'the-name-of-my-cookie';
var cookieVal = 'the-value-of-my-cookie';

cookie.set(cookieName, cookieVal, 365);
cookie.get(cookieName); //Outputs 'the-value-of-my-cookie'
cookie.del(cookieName);
```
### coremetrics

Sends information to CoreMetrics

```javascript
import coremetrics from 'crometrics/coremetrics';

coremetrics(0123456789);
```

### debounce

Prevents a function from being recalled repeatedly. The function will be called again after it stops being called for N milliseconds.

See https://css-tricks.com/the-difference-between-throttling-and-debouncing/ for a good writeup for the difference between debounce and throttle.

```javascript
import debounce from 'crometrics/debounce';

//The inner function will only be called after the user has stopped scrolling for 100ms
$(window).on('scroll', debounce(function() {
  console.log('The user started scrolling and this function didn\'t execute until there was a 100ms break in the scrolling');
}, 100));
```

### domready

Runs a function on domready - to be used on sites that don't have jQuery right away and/or not at all but you need to wait till the DOM is ready to run something.
```javascript
import domready from 'crometrics/domready';

domready(function() {
	console.log('The dom is ready! Do your thing.');
});
```

### get-param

Gets a param value from location.search.

```javascript
import getParam from 'crometrics/get-param';

//When run on the page: http://test.com?name=bob
console.log(getParam('name')); //Outputs: "bob"
```

### load-css

Loads a CSS file asynchronously.

```javascript
import loadCSS from 'crometrics/load-css';

loadCSS('../styles/styles.css', null, media);
```

### load-script

Loads a script and fires callback.

```javascript
import loadScript from 'crometrics/load-script';

function optCallBack() {
  console.log('my callback function is firing after the script loads!');
};
loadScript('../src/main.js', optCallBack);
```

### log

Like a regular console.log but only fires in dev environments (localhost, preview links, debug cookies etc) so you can leave it in your code while pushing to production.

```javascript
import log from 'crometrics/log';

log('Something is happening'); //Outputs to the console when run from http://localhost:8000/ but not http://clientwebsite.com
```

### notify

Notify.js is a jQuery plugin to provide simple yet fully customisable notifications.

```javascript
import notify from 'crometrics/notify';

$.notify('Hello!');

// or pass in optional message style (e.g. success, info, warn, or error)
$.notify('Uh oh!', 'warn');
```

### onload-css

Adds onload support for asynchronous stylesheets loaded with loadCSS. Used with loadCSS above.

```javascript
import onloadCSS from 'crometrics/onload-css';

var stylesheet = loadCSS('path/to/mystylesheet.css');
onloadCSS(stylesheet, function() {
    console.log('Stylesheet has asynchronously loaded.');
});
```

### preload

Preloads images.

```javascript
import preload from 'crometrics/preload';

var arrayOfLoadedImages = preload('./imgs/img01.jpg', './imgs/img02.jpg', './imgs/img03.jpg', './imgs/img04.jpg');
```

### report

Sends an error back to GA as events for wallboards. Why a module? Because not all clients load window.ga so this just reverse engineers the endpoint using a beacon.

```javascript
//example code here
```

### return-visitor

Fires code when a user returns to an experiment.

```javascript
import returnVisitor from 'crometrics/return-visitor';

returnValue('unique-name-for-tracking-users-for-just-this-call', function() {
	console.log('The user was last here over 30min ago');
});
```

### slugify

Returns the 'slug' of a string (replaces non-word characters with hyphens).

```javascript
import slugify from 'crometrics/slugify';

var articleTitle = 'How to use the module library!';
var articleSlug = slugify(articleTitle);
console.log(articleSlug); //Outputs: how-to-use-the-module-library
```

### store

Exposes a simple pattern to get / set from localStorage.

```javascript
import store from 'crometrics/store';

store.set('key', 'value');
store.get('key'); //Returns 'value'
store.del('key');
```

### throttle

Borrowed from http://underscorejs.org/docs/underscore.html

Returns a function, that, when invoked, will only be triggered at most once during a given window of time. Normally, the throttled function will run as much as it can, without ever going more than once per wait duration; but if you’d like to disable the execution on the leading edge, pass {leading: false}. To disable execution on the trailing edge, ditto.

See https://css-tricks.com/the-difference-between-throttling-and-debouncing/ for a good writeup for the difference between throttle and debounce.

```javascript
import throttle from 'crometrics/throttle';

//The inner function will only be called every 100ms while the user is scrolling
$(window).on('scroll', throttle(function() {
  console.log('You\'ll see this message every 100ms while the user is still scrolling');
}, 100));
```

### timpl

Uses double-handlebar syntax to template a string with a data object.

```javascript
import timpl from 'crometrics/timpl';

console.log(timpl('<div>{{name}}</div>', {name: 'Bob'})); //Outputs: <div>Bob</div>
```

### when

Polls for a jQuery element, and executes code when the element is found.

Can be silenced (so it doesn't blow up your console with log statements) by adding silentWhen=true as a query parameter to the page or creating a silentWhen variable on the window and setting it to true.

```javascript
function callBackFun() {
  console.log('it happened!');
};

when('.this-div', callBackFun);

//or

when('.this-div', function() {
  console.log('its happening again!');
});

//or

//Runs $('.this-div').css('color', 'red'); as soon as the element is found
when('.this-div', 'css', 'color', 'red');

//Stop the when loop by passing 'stop' as the first argument
when('stop');

//To stop all when loops after a certain amount of time
setTimeout(function(){
  when('stop');
}, 2000);
```

### wrap

Helper pattern for try / catch / report.

```javascript
// example code here
```

## License

See [LICENSE](LICENSE.md) file.
