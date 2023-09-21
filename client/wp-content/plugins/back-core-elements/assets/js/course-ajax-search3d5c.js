(function ($) {
    "use strict";

    var form_id = $("#back-ajax-filter-search"); 
    var courseForm = form_id.find("form"); 

    courseForm.submit(function(e){
        e.preventDefault(); 
        if(courseForm.find("#back_course_level").val().length !== 0) {
          var back_course_level = courseForm.find("#back_course_level").val();
        }
        if(courseForm.find("#back_course_cat").val().length !== 0) {
            var back_course_cat = courseForm.find("#back_course_cat").val();
        }

        if(courseForm.find("#course_prices").val().length !== 0) {
            var back_course_price = courseForm.find("#course_prices").val();
        }

        
        
        var data = {
            action : "back_course_action",
            back_course_level : back_course_level,
            back_course_cat : back_course_cat,
            back_course_price : back_course_price,
        }



        $.ajax({
          url : back_ajax_object.ajaxurl,
          data : data,
          success : function(response) {
            form_id.find("ul").empty();
              if(response) {
                  for(var i = 0 ;  i < response.length ; i++) {
                       var html  = '<li class="course">';
                            html += "<div class='course-item'>";
                                html +='<div class="course-wrap-thumbnail">';
                                html +='<div class="course-thumbnail">';
                                html +='<a href="' + response[i].permalink + '">';
                                html +='<div class="thumbnail-preview">'
                                html +='<div class="thumbnail">';
                                html +='<div class="centered">';
                                html += "<img src='" + response[i].poster + "' alt='" + response[i].title + "' />";				
                                html +='</div>';
                                html +='</div>';
                                html +='</div>';
                                html +='</a>';
                                html +='</div>';
                               html +='</div>';


                               html +='<div class="case-content">';
                               html +='<div class="inner-content">';
                               html +='<div class="meta-course cate-1">';
                               html +='<div><span class="back-category">' + response[i].category + '</span></div>';
                               html +='<div class="back-book">' + response[i].price + '</div>';
                               html +='</div>';
                               html +='<h4 class="case-title"><a href="' + response[i].permalink + '">' + response[i].title + '</a>';
                               html +='</h4>';
                               html +='</div>';
                               html +='<div class="back-ratings">';
                               html +='<div>';
                               html +='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"> <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle></svg> ' + response[i].student + ' Students</div>';
                               html +='<div>';
                               html +='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ' + response[i].duration + '</div>';
                               html +='</div>';
                               html +='</div>';
                                html +="</div>";
                                html += "</div>";
                                



                            form_id.find("ul").append(html);
                  }
              } else {
                  var html  = "<li class='no-result'>No matching Course found. Try a different filter or search keyword</li>";
                  form_id.find("ul").append(html);
              }
          } 
      });
    });

}(jQuery));
  