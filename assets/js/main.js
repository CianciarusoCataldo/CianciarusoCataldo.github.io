jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
	
	$('.level-bar-inner').each(function(i, obj) {
		      var itemWidth = $(obj).attr('data-level');
            //$(this).css('width', itemWidth);

            $(obj).animate({
                width: itemWidth
            }, 800);
			
		});
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph", "CianciarusoCataldo");
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "CianciarusoCataldo", selector: "#ghfeed" });


});