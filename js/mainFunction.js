var div;var imgFolder = "img/seri/";var imgCount = 25;var style = "lop";var isPopup = false;var imgName = ["img/1.png","img/5.png","img/23.png","img/27.png"];var img1 =[];var popup = null;var n = -1;var black = null;var au1, au2, au3, au4;window.onload = function(){	document.body.addEventListener('touchmove', function(e){e.preventDefault();},false);	div = document.getElementById("wrapper");	black = document.getElementById("black");	au1 = document.getElementById("au1");	au2 = document.getElementById("au2");	au3 = document.getElementById("au3");	au4 = document.getElementById("au4");		Move360(div,imgFolder,imgCount,style);		loadSomeThing();	document.getElementById("but1").addEventListener("click",showPopup,false);	document.getElementById("but2").addEventListener("click",showPopup,false);	document.getElementById("but3").addEventListener("click",showPopup,false);	document.getElementById("but4").addEventListener("click",showPopup,false);	document.getElementById("close").addEventListener("click",showPopup,false);	//popup.addEventListener("click",showPopup,false);}function loadSomeThing(){	for(var i=0; i<6;i++){		img1[i] = new Image();		img1[i].src = imgName[i];	}		popup = document.createElement("img");	popup.id = "popup";}function showPopup(e){	var name = e.target.id;	if(name == "but1"){		//No popup		if(isPopup == false){			popup.src = img1[0].src;			popup.style.opacity = 0;			document.body.appendChild(popup);			black.style.visibility = "visible";			au1.play();			setTimeout(function(){popup.style.opacity = 1; isPopup = true; n = 1;},10);		}		else{			// It's me			if(n==1){				popup.style.opacity = 0;				setTimeout(function(){document.body.removeChild(popup); isPopup = false; n = -1;},200);			}			else{				popup.style.opacity = 0;				setTimeout(function(){					document.body.removeChild(popup);					popup.src = img1[0].src;					popup.style.opacity = 0;					black.style.visibility = "visible";					au1.play();					setTimeout(function(){						document.body.appendChild(popup);						setTimeout(function(){popup.style.opacity = 1; isPopup = true; n = 1;},10);					},10);				},80);			}		}	}	else if(name == "but2"){		//No popup		if(isPopup == false){			popup.src = img1[1].src;			popup.style.opacity = 0;			black.style.visibility = "visible";			au2.play();			document.body.appendChild(popup);			setTimeout(function(){popup.style.opacity = 1; isPopup = true; n = 2;},10);		}		else{			// It's me			if(n==2){				popup.style.opacity = 0;				setTimeout(function(){document.body.removeChild(popup); isPopup = false; n = -1;},200);			}			else{				popup.style.opacity = 0;				setTimeout(function(){					document.body.removeChild(popup);					popup.src = img1[1].src;					popup.style.opacity = 0;					black.style.visibility = "visible";					au2.play();					setTimeout(function(){						document.body.appendChild(popup);						setTimeout(function(){popup.style.opacity = 1; isPopup = true; n = 1;},10);					},10);				},80);			}		}	}	else if(name == "but3"){		//No popup		if(isPopup == false){			popup.src = img1[2].src;			popup.style.opacity = 0;			black.style.visibility = "visible";			au3.play();			document.body.appendChild(popup);			setTimeout(function(){popup.style.opacity = 1; isPopup = true; n = 3;},10);		}		else{			// It's me			if(n==3){				popup.style.opacity = 0;				setTimeout(function(){document.body.removeChild(popup); isPopup = false; n = -1;},200);			}			else{				popup.style.opacity = 0;				setTimeout(function(){					document.body.removeChild(popup);					popup.src = img1[2].src;					popup.style.opacity = 0;					au3.play();					black.style.visibility = "visible";					setTimeout(function(){						document.body.appendChild(popup);						setTimeout(function(){popup.style.opacity = 1; isPopup = true; n = 1;},10);					},10);				},80);			}		}	}	else if(name == "but4"){		//No popup		if(isPopup == false){			popup.src = img1[3].src;			popup.style.opacity = 0;			au4.play();			black.style.visibility = "visible";			document.body.appendChild(popup);			setTimeout(function(){popup.style.opacity = 1; isPopup = true; n = 4;},10);		}		else{			// It's me			if(n==4){				popup.style.opacity = 0;				setTimeout(function(){document.body.removeChild(popup); isPopup = false; n = -1;},200);			}			else{				popup.style.opacity = 0;				setTimeout(function(){					document.body.removeChild(popup);					popup.src = img1[3].src;					popup.style.opacity = 0;					au4.play();					black.style.visibility = "visible";					setTimeout(function(){						document.body.appendChild(popup);						setTimeout(function(){popup.style.opacity = 1; isPopup = true; n = 1;},10);					},10);				},80);			}		}	}	else{		console.log("yes me");		if(isPopup == true){			if(n==1) au1.pause();			if(n==2) au2.pause();			if(n==3) au3.pause();			if(n==4) au4.pause();			popup.style.opacity = 0;			black.style.visibility = "hidden";			setTimeout(function(){document.body.removeChild(popup); isPopup = false; n = -1;},200);		}	}}