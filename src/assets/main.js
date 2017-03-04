$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/1174931.json',
    dataType: 'jsonp',
    success: function(response){
        addCourses(response.courses.completed);
    }
  });

  function addCourses(courses){



    var $badges = $('#badges');

    courses.forEach(function(course){

      console.log(course);

      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        target: '_blank',
        href: 'course.url',
        text: 'See course'
      }).appendTo($course);
    })
  }
});
