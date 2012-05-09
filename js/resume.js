$(function() {
	$('.expandable').after('<a href="#" onclick="$(this).prev().show(\'Drop\'); $(this).hide(); return false;">L&aelig;s mere</a>');
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-628130-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();