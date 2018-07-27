$(document).ready(function() {
  
    $("#target").submit( function(event) {
    
      event.preventDefault();
      
      let $form = $(this),
          search = $form.find("#inp").val();

        $.ajax({
          // url: 'http://anyorigin.com/get?url=' +
          url:      "https://en.wikipedia.org/w/api.php",
          data: {
            action: "query",
            list: "search",
            srsearch: search,
            srlimit: 10,
            format: "json",
            origin: '*'
          },
          dataType: "jsonp",
        /*complete: function(jsonData, status) {
          console.log("here i am");
          
          for (let i = 0, x = 10; i < x; i++) {
            $("#p"+ i +"_page").prop("href", "https://en.wikipedia.org/?curid=" + jsonData.query.search[i].pageid);
            $("#p"+ i +"_page").html(jsonData.query.search[i].title);
            $("#p"+ i +"_content").html(jsonData.query.search[i].snippet);
          }
          $(".card").show();
          $(".result").show();
          $("#inp").val(''); 
        },*/
        
        /* error: function(xhr, status, errorThrown) {
          console.log("Error: " + errorThrown);
          console.log("Status: " + status);
          console.log("AJAX error: " + JSON.stringify(xhr));
        }*/
      })    
        .done(function(jsonData) {
          for (let i = 0, x = 10; i < x; i++) {
            $("#p"+ i +"_page").prop("href", "https://en.wikipedia.org/?curid=" + jsonData.query.search[i].pageid);
            $("#p"+ i +"_page").html(jsonData.query.search[i].title);
            $("#p"+ i +"_content").html(jsonData.query.search[i].snippet);
          }
          $(".card").show();
          $(".result").show();
          $("#inp").val('');
        })
        .fail(function(xhr, status, errorThrown) {
          console.log("Error: " + errorThrown);
          console.log("Status: " + status);
          console.log("AJAX error: " + JSON.stringify(xhr));
        })
        .always(function() {
          console.log("the request is complete");
        });
        
    });

    $("#searchclear").click(function(){
      for (let i = 0, x = 10; i < x; i++) {
            $("#p"+ i +"_page").prop("href", "");
            $("#p"+ i +"_page").html("");
            $("#p"+ i +"_content").html("");
      }
      $(".card").hide();
      $(".result").hide();
      $("#inp").val('');
    });
  
  });
