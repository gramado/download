


    // This thing downloads a text file.
	// You need to create a form with with those elements:
	// + a input with an id="fn1" for the name of the file.
	// + a textarea with an id="ft1" for the text area.
	// + a button to call this function.
    // @frednora	
	
	
    function download()
	{
	    //file support.
		var xFileName = "fail";
		var xFileText = "fail";	
	    
		/*alert("go");*/	
		
		xFileName = document.getElementById("fn1").value;
		xFileText = document.getElementById("ft1").value;
		
	    var pom = document.createElement('a');
        
		pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(xFileText));
        pom.setAttribute('download', xFileName);

        if (document.createEvent)
		{
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }else{
            pom.click();
        }
	}
	