/*jshint strict: false */

/**
 * @desc countDown() - returns the days, hours, minutes and seconds until the deadline is reached
 *
 * @param {String} A valid date that Date.parse() can understand eg: 'August 1 2016 08:00:00 GMT-0700';
 *
 * @return {Object} - Object containing the total, days, hours, minutes and seconds until the deadline is reached
 */

function countdown(deadline) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t/1000) % 60);
	var minutes = Math.floor((t/1000/60) % 60);
	var hours = Math.floor((t/(1000*60*60)) % 24 );
	var days = Math.floor(t/(1000*60*60*24));
	return{
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
};

export default countdown;
