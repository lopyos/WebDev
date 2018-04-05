  $(document).ready(function() {
    $("#getmessage").on("click", function(){   
      let random=Math.random();
      let url= `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${random}`
      $.getJSON(url, function(a) {     		
      		$(".message").html(a[0].content + "<p>— " + a[0].title + "</p>")
	  });
    });
  });