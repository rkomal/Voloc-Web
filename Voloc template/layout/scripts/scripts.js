$(document).ready(function() {
            
			$(".navbar_div").load("navbar.html");
			
			$('.category').hover(

                function() {
                    $(this).find('h2').attr('class', 'changedclass');
                    $(this).find('img').attr('class', 'addslide');
                },

                function() {
                    $(this).find('h2').attr('class', 'originalclass');
                    $(this).find('img').attr('class', 'removeslide');
                }
                );

        });
		
        function openNav(paramsrc) {
			
			$(".changeframes").attr('src',paramsrc);
            document.getElementById("mySidenav").style.width = "250px";
            $("#top").attr('class', 'toporiginal');
			$(".changeframes").fadeIn(1500);
			$('.changeframes').css('marginLeft','250px');
        }

        /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            $("#top").attr('class', 'topchanged');
            $('.changeframes').animate({
                marginLeft : 0
            },1000);
            $('iframe').fadeOut(1000);
        }