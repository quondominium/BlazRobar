			 function listen() {
			    var HAMBURGER_ACTIVE = 'is-active';
			    var NAVIGATION_OPENED = 'is-navigation-opened';
			    var MOBILE_RESOLUTION = 640;

			    var body = document.querySelector('body');
			    var btnHamburger = document.querySelector('.btn-hamburger');
			    btnHamburger.addEventListener('click', function () {
			      btnHamburger.classList.toggle(HAMBURGER_ACTIVE);
			      body.classList.toggle(NAVIGATION_OPENED);
			    });

			    window.addEventListener('resize', function(){
			      if(window.innerWidth > MOBILE_RESOLUTION){
			        btnHamburger.classList.remove(HAMBURGER_ACTIVE);
			        body.classList.remove(NAVIGATION_OPENED);	        
			      }
			    });
			  }

			  listen();