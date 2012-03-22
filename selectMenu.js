// http://josiaho.com/select-menu
//Compressed is 618 bytes. 374 bytes gzip.
function selectMenu(m,s,n){
	// Variables
	var menu = document.getElementById(m), // 
		a = menu.getElementsByTagName('a'),
		select = document.createElement('select');
	
	// Hide Normal Menu
	menu.style.display='none';
	
	// Create Select Box
	if (s){ // Check if custom ID specified to append the Select Box to
		s = document.getElementById(s);
		s.appendChild(select);
	}else{ // If not, append the Select Box to the <body> tag
		document.body.appendChild(select);
	}
	
	// Check if a custom name was defined for the default selected option
	if(!n){n='Navigation';} // If no custom name, "Navigation" will be used
	select.options[0] = new Option(n,'',true,false);// Default Selected Option
	
	// Go to URL on Select Change
	select.setAttribute("onchange","window.open(this.options[this.selectedIndex].value,'_top')");
	
	// Populate Select Box
	for (i=0;i<a.length;i++){
		var t = a[i].innerText; // Get the text from the <a> tag
		var l = a[i].getAttribute('href'); // Get the url from the <a> tag
		if(a[i].parentNode.parentNode.parentNode.tagName!==menu.tagName){t='- '+t;}// Prepend a dash to Second-Level Items for a 'nested' effect
		select.options[i+1] = new Option(t,l,false,false); // Add the menu item to the Select Box
	}
}
// Example Basic: selectMenu('menu'); 
// Example with Options: selectMenu('menu', 'selectBoxWrapper', 'Nav');
// OPTIONS:
// 1. ID of the Menu DIV you will convert (required)
// 2. ID of element where to put the generated select box (optional - if blank, will be appended to body)
// 3. Title for Select Box (optional - "Navigation" default)