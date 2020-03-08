
function removeFutureJs(){
	var content = document.getElementById("Iframe");
	if (content.contentWindow.document.getElementById("scriptid")) {
		console.log("i remove the script");
		content.contentWindow.document.getElementById("scriptid").remove();
	}
	console.log("i was called");
}

function startLoading() {	
	
                    var loading_style = "position:absolute;width:100%;height:100%";	
                    var loading_cover = document.getElementById("loading");
                    console.log("before load set:");
                    console.log(loading_cover.attributes);
	
                    loading_cover.setAttribute("style", loading_style);
                    var after_set = document.getElementById("loading");
                    console.log("after load set:");
                    console.log(after_set.attributes);
}
			
function finishLoading() {
          
                    var loading_style ="position:absolute;width:0%;height:0%";
                    var loading_cover = document.getElementById("loading");
                    console.log(" right before the timer trigger");
                    console.log(loading_cover.attributes);	
	          loading_cover.setAttribute("style", loading_style);
                    console.log("after the timer trigger:");
                    console.log(loading_cover.attributes);	
}
function loadingPages() {
	console.log("im loadingPages() i call startLoading");
						   
	startLoading();
	setTimeout(finishLoading,2000);  //1000 ms = 1 s of loading change this value to set loading time
	console.log("im loadingPages i go out, timer message trigger must be after this");
}
 
	 
	// function checks if a css is already loaded returns True or False
	// in the logic of WebSite if true html is changed else if false randomCss() is called
function checkCss(){
	var cssStyleSheets = ['https://tttproject.github.io/style/ancient.css',
				     'https://tttproject.github.io/style/XIXcenturystyle.css',
				      'https://tttproject.github.io/style/css_primo_novecento_finale.css',
				      'https://tttproject.github.io/style/1950style.css',
				      'https://tttproject.github.io/style/css_fine_novecento_finale.css'];
	if (document.getElementById("Iframe").contentWindow.document.getElementById("style") !== null) {
	var css = document.getElementById("Iframe").contentWindow.document.getElementById("style").href;
	} else {
	var css = "no_css"; }
	
	if (cssStyleSheets.includes(css)){ console.log("I'm check CSS i print true, there is css loaded: " + css); 
		return true; } 
	else { 	console.log("I'm checkCSS i print false, css loaded hasn't to be cached: so i call randomCss()  " + css); 
		return false;} 
}
	
function asyncChangeCss(source){
		return new Promise((resolve, reject) => {
			var doc = document.getElementById("Iframe");
			console.log("IM THE PROMISE old DOCUMENT is: " + doc.src);
			doc.onload = () => resolve(source);
			doc.onerror = reject;
		} );
				   }
 function randomCss(){
		 var cssSheetsHref = ['https://tttproject.github.io/style/ancient.css',
				     'https://tttproject.github.io/style/XIXcenturystyle.css',
				      'https://tttproject.github.io/style/css_primo_novecento_finale.css',
				      'https://tttproject.github.io/style/1950style.css',
				      'https://tttproject.github.io/style/css_fine_novecento_finale.css'
				     ]
		 var randomIndex = Math.floor(Math.random()*5);
		 console.log("im randomCss i work i return "+ cssSheetsHref[randomIndex] + " random index is " + randomIndex);
		 return cssSheetsHref[randomIndex];
	 }
function randomHtml(){
		 	 var htmlPages = ['https://tttproject.github.io/docs/bloomberg/index.html',
			 'https://tttproject.github.io/docs/harpers/Harpers_Final.html',
			 'https://tttproject.github.io/docs/huffington/Huffington_Final.html',
			 'https://tttproject.github.io/docs/thecut/thecut.html',
			 'https://tttproject.github.io/docs/tls/TimesLiterarySupplement_Final.html'
					 ]
			var randomindex = Math.floor(Math.random()*5);
		          console.log("im randomHtml i work i return " + htmlPages[randomindex]);
		          return htmlPages[randomindex];					 
		 
	 }
function navbarChangeHtml(source) {
			var externalLink = document.getElementById("externalLink");
		
		externalLink.setAttribute("href", '#');
		console.log("EXTERNAL LINK CHANGED");
	
		var containerLink = document.getElementById("info");
		var link_style = "height:0px"; 
		containerLink.setAttribute("style", link_style);
	
		var currenthtml = document.getElementById("Iframe");
		currenthtml.src = source;
	}

function changeHtml(item, link, callback){
		 console.log("im changeHtml() i start the transition calling loadingPages()");
		 loadingPages();  //start loading
		 
		 var currentHtml = document.getElementById("Iframe");
		 
		var externalLink = document.getElementById("externalLink");

	var containerLink = document.getElementById("info");
	
		externalLink.setAttribute("href", link);
		console.log("EXTERNAL LINK CHANGED");
		var link_style = "height:40px"; 
		containerLink.setAttribute("style", link_style);
		 
		 if (checkCss()) {
			 var css = currentHtml.contentWindow.document.getElementById("style").href;
			 currentHtml.src = item;
			 console.log("im changeHtml, i check there is a css loaded, it's, i save it and pass to the callback " + css);
			 console.log("im changing html, current page is: " + currentHtml.src);
			 console.log("BEFORE THE CALLBACK");
			 let promise = callback(css);
			 promise.then(source =>{document.getElementById("Iframe").contentWindow.document.getElementById("style").setAttribute("href",source);},e=>{console.log('im async change css callback in reject, error: ' + e);});         
			console.log("AFTER THE CALLBACK");
			 var css = currentHtml.contentWindow.document.getElementById("style").href;
			 console.log("CSS IS " + css + " IT come RESETTED after this function close WTF"); 
          
			
		 } else { 
		 currentHtml.src = item;
		var random_css = randomCss();
		let promise = callback(random_css);
		promise.then(source => {document.getElementById("Iframe").contentWindow.document.getElementById("style").setAttribute("href",source);},e=>{console.log('im async change css callback in reject, error: ' + e);});
		 
console.log("Im EXITING FROM RANDOM CHANGE HTML");
		 } 
	 }

	   // Works with $.get too!
function change_css(item){
	var htmlPages = ['https://tttproject.github.io/docs/bloomberg/index.html',
			 'https://tttproject.github.io/docs/harpers/Harpers_Final.html',
			 'https://tttproject.github.io/docs/huffington/Huffington_Final.html',
			 'https://tttproject.github.io/docs/thecut/thecut.html',
			 'https://tttproject.github.io/docs/tls/TimesLiterarySupplement_Final.html',
			 'https://tttproject.github.io/docs/Eu_directive/eu_directive.html',
	];
	loadingPages();
	var content = document.getElementById("Iframe");
	var href = content.src; // uri of original file 
	var myEle =content.contentWindow.document.getElementById("vid") 
	var old = content.contentWindow.document.getElementById("conte")

	if (htmlPages.includes(content.src)) {	
		// AJAX REQUEST
			myReq = new XMLHttpRequest();	
	
	myReq.open('GET', href, false);
	myReq.send();
		if(old){
			co = content.contentWindow.document.getElementById("conte");
			co.style.visibility = 'hidden';
		}
		if(myEle){
			btn1 = content.contentWindow.document.getElementById("btn1");
			btn2 = content.contentWindow.document.getElementById("btn2");
			btn3 = content.contentWindow.document.getElementById("btn3");
			btn4 = content.contentWindow.document.getElementById("btn4");
			btn5 = content.contentWindow.document.getElementById("btn5");
			vid = content.contentWindow.document.getElementById("vid");
			
			btn1.style.visibility = 'hidden';
			btn2.style.visibility = 'hidden';
			btn3.style.visibility = 'hidden';
			btn4.style.visibility = 'hidden';
			btn5.style.visibility = 'hidden';
			vid.style.visibility = 'hidden';
			
				window.frames[0].stop()
		

	}
	// AJAX REQUEST TO GET AGAIN THE CONTENT: newcontent
	// iframe.content = newcontent;
	// after the requeste completed to the stuff down alert()
		// change also the CONTENT IFRAME with myReq.content.
	//alert("req with status code complete: " + myReq.readyState);
     	        console.log("im change_css iv been called im gonna set css: " + item);
		if (content.contentWindow.document.getElementById("style") !== null) {
		content.contentWindow.document.getElementById("style").setAttribute("href",item);
		console.log("im in the case not eudirective css must be changed");
		} else {
			console.log("im change_css if im here it must be called eu_directive else there is an error");
		
	// HERE WE MANAGE EU DIRECTIVE DOUBLE STYLE CHANGE (IT HAS 2 Iframe ELEMENT )
		var content_english = content.contentWindow.document.getElementById("left");
		var content_italian = content.contentWindow.document.getElementById("right");
		content_english.contentWindow.document.getElementById("style").setAttribute("href",item);
		
		content_italian.contentWindow.document.getElementById("style").setAttribute("href",item);
	}
 
	} else {
		var randomhtml = randomHtml();
		var doc = document.getElementById("Iframe");
		doc.src = randomhtml;
		//change_css(item);
		let promise = asyncChangeCss(item);
		promise.then(source => {document.getElementById("Iframe").contentWindow.document.getElementById("style").setAttribute("href",source);},e=>{console.log('im async change css callback in reject, error: ' + e);});
		console.log("IM EXITING FROM change_css, called when no html is loaded");
	}
	 
}	 
	 
     /*theme.href = item
	var form = content.contentWindow.document.getElementById('myForm');
	document.getElementById("demo").innerHTML = form.innerText;*/
 
function add_script(item,script){

	/* THE CODE IS REALLY A MESS :( SORRY IT'S REALLY HARD TO WORK TOGETHER HERE BUT I'VE GOT NO TIME TO CLEAN MY PART
	ANYCASE, 
	HIZCLICK I'M TRYING TO REPEAT THE SAME PATTERN I USE IN THE FUNCTION CHANGE_CSS TO LOAD STYLE IN CASE OF EU DIRECTIVE OR NOT
	
	that's the html
	
	eu directvie
	<iframe>
	<iframe left></>
	<iframe right></>
	</>
	
	other documents
	
	<iframe></>
	
	so when we load in other documents we just append the css to the first iFrame.
	when we do it for eu directive we go inside the iframe another time and we get other 2 iframe:
	content_english
	content_italian
	
	and we add css to content_english
	and to content_italian
	
	as if they were two distinct document and actually they are!
	
	I suppose we might simply add js and css to the two new document.
	
	What the if do?
	
	if iframe has attribute style!
	All the case but eu directive, we load normally
	
	else if it has not
	
	we get 2 other iframe (the 2 ones that compose the case of eu directive ) and we append css and js to them)
	
	try to do it.
	I think also that when we switch away from eu directive, by the nature of that all the stuff will be throw away
	automatically, but im not sure
	
	POSSIBLE PROBLEM:
	1) i dont know the modfy you did since last time so i write the stuff based on what we have 1 week ago 
	when js was loaded.
	
	ADVICE)
	if you look at change css part you can see that this simple if else is use for eu directive stuff.
	so can we try to fix base on this?
	
	*/
	var content = document.getElementById("Iframe");
	var el =content.contentWindow.document.getElementById("vid") 
	

	var content = document.getElementById("Iframe");
	var element = content.contentWindow.document.createElement("script"); 
	element.src = script;
	element.type = "text/javascript"; 
	element.id = "scripted";
	

	if (content.contentWindow.document.getElementById("style") !== null) {
	//this IF STATEMENT is for normal stuff 
		content.contentWindow.document.getElementById("style").setAttribute("href",item);
		content.contentWindow.document.getElementsByTagName("head")[0].appendChild(element); 
	} 
		//this ELSE IS THE CASE EU DIRECTIVE

		var content_english = content.contentWindow.document.getElementById("left");
		var content_italian = content.contentWindow.document.getElementById("right");
	content_italian.contentWindow.document.getElementsByTagName("head")[0].appendChild(element); 

		
			
		content_italian.contentWindow.document.getElementById("style").setAttribute("href",item);
		content_english.contentWindow.document.getElementById("style").setAttribute("href",item);
		
	
		
		content_english.contentWindow.document.getElementsByTagName("head")[0].appendChild(element); 
		var myIframe = content.contentWindow.document.getElementById("right");
		var new_scr = myIframe.contentWindow.document.createElement("script");
		new_scr.type = "text/javascript";
		new_scr.src = script;
		myIframe.contentWindow.document.body.appendChild(new_scr);
	}

		/*var ita = 	content_italian.contentWindow.document.getElementById("scripted").src;
		var en = 	content_english.contentWindow.document.getElementById("scp").src;
		alert(ita)
		alert(en)*/
	
	
	
	//loadingPages();
	//var content = document.getElementById("Iframe");
	//	  	var ele = content.contentWindow.document.getElementById("scri").getAttribute("href"); // sec/IF00.html
	//alert(ele)
     	//content.contentWindow.document.getElementById('scri').src = script
	//var ele = content.contentWindow.document.getElementById("scri").getAttribute("src");
	//alert(ele)
	//var myEle =content.contentWindow.document.getElementById("vid") 
	//var left =content.contentWindow.document.getElementById("left")
	//var right =content.contentWindow.document.getElementById("italian")
	//if(left){
	//    alert("left")
	//}

