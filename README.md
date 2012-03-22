selectMenu
=============
A tiny script to convert drop-down lists/menus into select box navigation.
[Example](http://josiaho.github.com/selectMenu)

Benefits
--------

* Pure Javascript - no js library or css dependencies
* Lightweight (374 bytes compressed + gzip)
* Replace your existing list/menu with a `<select>` box *(mobile friendly)*
* Option: Define an element ID to append `selectMenu` to
* Option: Customize the default selected value *(default is "Navigation")*


How to Use
----------

### Method #1: Link to the File
Copy the following code and paste it into the bottom of your webpage just before the closing `<body>` tag:

	<script src="selectMenu.min.js"></script>
	<script>
		selectMenu('menu', 'select');
	</script>


### Method #2: Include the Script in the Page
Since the script is small, it may be preferred to paste the entire thing in the `<head>` section of your page and eliminate the additional http request:

	<script>
		function selectMenu(b,a,c){var e=document.getElementById(b);b=e.getElementsByTagName("a");var d=document.createElement("select");e.style.display="none";if(a){a=document.getElementById(a);a.appendChild(d)}else document.body.appendChild(d);c||(c="Navigation");d.options[0]=new Option(c,"",true,false);d.setAttribute("onchange","window.open(this.options[this.selectedIndex].value,'_top')");for(i=0;i<b.length;i++){a=b[i].innerText;c=b[i].getAttribute("href");if(b[i].parentNode.parentNode.parentNode.tagName.toLowerCase()!=="div")a="- "+a;d.options[i+1]=new Option(a,c,false,false)}};
	</script>

Then, either call the script on body load in the `<body>` tag:

	<body onload="selectMenu('menu','select');">

Or at the bottom of your page - before the closing `</body>` tag:

	<script>
	    window.onload = function(){
	        selectMenu('menu', 'select');
	    }
	</script>


Options
-------

`selectMenu` accepts 3 variables:

	selectMenu('menu', 'select', 'title');

* **menu (required)** - the ID of the wrapper of your list/menu that is being converted into a select box.
* **select (optional)** - the ID of the element where selectMenu will be placed *(if no ID is defined, the Select Box will be appended to the `<body>` tag).*
* **title (optional** - the text that displays as the default option/label. The default is "Navigation".


Tips
----

* `selectMenu` searches for `<a>` tags from which to retrieve the link href and text for the select box. See the example above for sample structure.
* If you have a nested list, you will notice that `selectMenu` will mimic the nesting with a dash ( - ), although it only goes 'one deep'. So ALL non-top-level list items will appear to have the same hierarchy as one another.


Targeting Mobile Devices
------------------------

This is most surely covered better elsewhere, but since this script was created with mobile devices in mind, here's a quick and dirty way to activate it only when a mobile device is detected:

	<script>
	
	// Detect by screen size
	if (screen.width<=699) {
	selectMenu('menu');
	}
	
	// For iPhones/iPods specifically
	if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
	selectMenu('menu');
	}
	
	</script>