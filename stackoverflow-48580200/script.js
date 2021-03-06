$(document).ready(function () {

  var computeTime = 0;
  var bottomComputeTime = 0;
  var LoopComputeLimit = 2;
  var videoFilePath = "big_buck_bunny.mp4";
  var divVideo = $("<div/>")
    .attr({
      class: "divVideo"
    }).html("\n\
        <video id=\"myVideo\" controls autoplay width=\"300\" height=\"200\">\n\
          <source src=\""+ videoFilePath + "\" type=\"video/mp4\">\n\
        </video>");

  resetPositionToTop();

  $("#myVideo").unbind("ended").bind("ended", function (e) {
    console.log("bottomComputeTime:", bottomComputeTime, "computeTime:", computeTime);
    if (computeTime === 0) {
      resetPositionToBottom();
    }
    if (bottomComputeTime < LoopComputeLimit) {
      bottomComputeTime++;
      $("#myVideo").get(0).play();
    } else if (bottomComputeTime === LoopComputeLimit) {
      bottomComputeTime = 0;
      computeTime = 0;
      resetPositionToTop();
      $("#myVideo").get(0).play();
    }
  });

  function resetPositionToTop() {
    divVideo.appendTo(".top");
  }

  function resetPositionToBottom() {
    divVideo.appendTo(".bottom");
  }
});
