 /**
 * @desc pollTillDomReady() polls until DOM is ready.
 */


function pollTillDomReady(){
	var state = document.readyState;
	if(state === 'interactive'|| state === 'complete'){
		// do yo thang
	} else {
		setTimeout(pollTillDomReady, 50);
	}
});

export default pollTillDomReady;