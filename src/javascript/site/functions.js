	(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($(anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

})(jQuery); // End of use strict


$('#VideoModal').on('show.bs.modal', function (event) {
  	var button = $(event.relatedTarget) // Button that triggered the modal
  	var video = button.data('video') ;
  	var activite = button.data('activite');
  	var url2load = "loaders.php?action=video&id="+video;
  	if (typeof(activite)!='undefined') {
  		url2load = url2load+'&activite='+activite;
  	}
  	// Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  $('#VideoModal div.modal-content').load(url2load);
})

$('body').on('hide.bs.modal','#VideoModal',function (event) {
	$('#VideoModal div.modal-content').html('');
});

var activeJavascript;

var doDebug=false;
function myDebug(e) {
  	if (doDebug) {
  		console.log(e);
  	}
  }

$('#JavascriptModal').on('show.bs.modal', function (event) {
  	var button = $(event.relatedTarget) // Button that triggered the modal
  	myDebug(event.relatedTarget);
  	var script = button.data('script') // Extract info from data-* attribute
  	var activite = button.data('activite');

  	myDebug('script du bouton: '+script);
  	myDebug('script actif : ' +activeJavascript);

  	if (typeof(script)==='undefined'){
  		if (typeof(activeJavascript)==='undefined') {
  			script='default';
  		} else {
  			script=activeJavascript;
  		}
  	}
  	if (activeJavascript != script) {

  		var url2load = "loaders.php?action=javascript&id="+script;
  		if (typeof(activite)!='undefined') {
  			url2load = url2load+'&activite='+activite;
  		}

		var newUrl2load='loaders.php?action=scripts&id='+script;
		if (typeof(activite)!='undefined') {
  			newUrl2load=newUrl2load+'&activite='+activite;
  		}


  		$.ajax({
  			url:url2load,
  			dataType:'text'
  		}).done(function(data){
  			$('#JavascriptModal div.modal-content').html(data);
  			activeJavascript = script;
  			$.ajax({
  				url:newUrl2load,
  				dataType:'json'
  			}).done(function(data){
					if ($.data($("body")[0],'plugin_icnExercices') !== undefined) {
						$.data($("body")[0],'plugin_icnExercices').init(data);
            console.log("reInitialisation du plugin");
					} else {
  					$("body").icnExercices(data);
            console.log("première instantiation du plugin");
					}
  			});
  		});

	}

});
