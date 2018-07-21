$(document).ready(function() {
  
    let randColor, randColor1;
    let randNum = 1;
    let quote = "This is a witty quote!!!";
    let author = "Author";
    /* let quotes = [
      ["Pain doesn't exist for me. I know it's there, but I don't pay attention to it.", "Jure Robic"],
      ["I will prepare and some day my chance will come.", "Abraham Lincoln"],
      ["You give before you get.","Napoleon Hill"],
      ["The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.", "Winston Churchill" ],
      ["All great achievements require time.", "Maya Angelou"],
      ["Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.", "Robert Lynd"],
      ["The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.", "Henry Miller"],
      ["Every gift from a friend is a wish for your happiness.", "Richard Bach"],
      ["Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.", "Leo Aikman"],
      ["Self-complacency is fatal to progress.", "Margaret Sangster"],
      ["Luck is what happens when preparation meets opportunity.", "Seneca"],
      ["No valid plans for the future can be made by those who have no capacity for living now.", "Alan Watts"],
      ["Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.", "Albert Einstein"],
      ["If you do what you\'ve always done, you\'ll get what you\'ve always gotten.", "Tony Robbins"],
      ["I may not know everything, but everything is not known yet anyway. ", "Byron Pulsifer"],
      ["Reality does not conform to the ideal, but confirms it.", "Gustave Flaubert"],
      ["I have no special talent. I am only passionately curious.", "Albert Einstein"],
      ["A good teacher is like a candle — it consumes itself to light the way for others.", ""],
      ["You only lose what you cling to.", "Buddha"],
      ["We never understand how little we need in this world until we know the loss of it.", "James Barrie"],
      ["Time you enjoy wasting, was not wasted.", "John Lennon "],
      ["You cannot find yourself by going into the past. You can find yourself by coming into the present.", "Eckhart Tolle"] ];
    let numOfQuotes = quotes.length;
    */
    // let quoteArr;
   
    
    // generate a random color in rgb format
    function randomColor() {
      return (
        "rgb(" +
        (Math.floor(Math.random() * (255 - 1)) + 1) + "," +
        (Math.floor(Math.random() * (255 - 1)) + 1) + "," +
        (Math.floor(Math.random() * (255 - 1)) + 1) + ")"
      );
    }
  
    // get the random quote
    function randomQuote() {
      return quotes[Math.floor(Math.random() * (numOfQuotes - 1))];
    }
    
    function quoteAndColor() {
      
          // get quote
      $.ajax({
        cache: false,   // because we're sending a GET
        type: "GET",
        url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=callback',
        jsonpCallback: 'callback',  
        crossDomain: true,
        dataType: "jsonp",
      })
      .done( function (response) {
        console.log(response);
        // quoteJSON = jQuery.parseJSON(response);
        // console.log(quoteJSON);
        quote = response.quoteText;
        author = response.quoteAuthor;
        $("#quote").text(quote);
        $("#author").text(author);
      })
      .fail( function(xhr, status, errorThrown) {
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        console.log("AJAX error: " + JSON.stringify(xhr));
      })
      .always(function() {
        // console.log("the request is complete");
      });
      /*
      // get the random quote
      quoteArr = randomQuote();
      quote = quoteArr[0];
      author = quoteArr[1];
      
      // set the quote on the page
      $("#quote").html(quote);
      $("#author").html(author);
      */
      
      // get the random color and change background-color and color
      randColor = randomColor();
      randColor1 = randomColor();
      
      $(".rand-back-color").css( "background" , randColor );
      $("body").css( "background" , "linear-gradient(" + randColor + ", " + randColor1 + ") fixed" );
      $(".icon-color").css( "color" , randColor );
      
      $("#twitter-btn").prop("href", "https://twitter.com/intent/tweet?text=" + quote.replace(/ +/g, '+') + "-" + author.replace(/ +/g, '+'));
      $("#tumblr-btn").prop("href", "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + author + "&content=" + quote +       
                                    "&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button");
  
      
    }
    
    quoteAndColor();
    
    $("#button-quote").click(function() {
      quoteAndColor();
    });
    
  
  });