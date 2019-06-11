$(document).ready(function() {
  var userResponses1 = []
  var userResponses2 = []
  var userResponses3 = []
  $("#stressSurvey").submit(function(event) {
    $("input:checkbox[name=warningSigns]:checked").each(function(){
      var warningSignChecked = $(this).val();
      userResponses1.push(warningSignChecked);
    });
    $("input:checkbox[name=healthSigns]:checked").each(function(){
      var healthSignChecked = $(this).val();
      userResponses2.push(healthSignChecked);
    });
    $("input:checkbox[name=copingMethods]:checked").each(function(){
      var copingMethodsChecked = $(this).val();
      userResponses3.push(copingMethodsChecked);
    });
    event.preventDefault();
    var arrayLength1 = userResponses1.length;
    var arrayLength2 = userResponses2.length;
    var arrayLength3 = userResponses3.length;

    if (arrayLength1 >=2 && arrayLength2 >=3) {
      $(".resources1").show();
      $("#stressSurvey").hide();
    } else if (arrayLength1 >=2 && arrayLength3 >=2){
      $(".resources2").show();
      $("#stressSurvey").hide();
    } else {
      $(".resources3").show();
      $("#stressSurvey").hide();
    }
  });
});
