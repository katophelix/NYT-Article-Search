$(document).ready(function () {
  var apiURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  var key = "api-key=a06d42c85b14448da0f9545d478f3f93";
  var searchString = "";
  var recordLimit;
  var startYear = "";
  var endYear = "";
  var queryURL;
  var articleNumber = 0;
      
  
  $(".clear").click(function () {
    articleNumber = 0;
      $("#search-string").val("");
      $("#start-year").val("");;
      $("#end-year").val("");
      $("#article-results").empty();
  });

  
  $(".search").on("click", function () {
      $("#article-results").empty();
      articleNumber = 0;
      searchString = $("#search-string").val();
      recordLimit = $("#record-limit").val()
      startYear = $("#start-year").val();
      endYear = $("#end-year").val();
      queryURL = apiURL + key + "&q=" + searchString;
      console.log(queryURL);
      console.log("startyear = " + startYear);
      console.log("endyear = " + endYear);
      if (startYear != "") {
          queryURL = queryURL + "&begin_date=" + startYear + "0101";
      };
      if (endYear != "") {
          queryURL = queryURL + "&end_date=" + endYear + "1231";
      };
      console.log("queryURL = " + queryURL);
      console.log("on click, searchString = " + searchString);
      console.log("on click, recordLimit = " + recordLimit);
      console.log("on click, startYear = " + startYear);
      console.log("on click, endYear = " + endYear);
      $.ajax({
          url: queryURL,
          method: "GET"
      }).done(function (result) {
          console.log(result);
          console.log(result.response.docs[0].snippet);
          console.log(result.response.docs[0].byline.original);
          for (i = 0; i < recordLimit; i++) {
              articleNumber++;
              var article = $("<div>");
              article.addClass("well well-lg row");
              // article.html(result.response.docs[i].snippet + "<br>");
              var title = $("<h3>");
              title.addClass("title");
              title.text(result.response.docs[i].snippet);
              var byline = $("<p>");
              byline.addClass("byline");
              byline.text(result.response.docs[i].byline.original);
              var number = $("<div class='articleNumber'>").text(articleNumber);
              $(article).append(number, title, byline);
              $("#article-results").append(article);
          }
      });
  });
});