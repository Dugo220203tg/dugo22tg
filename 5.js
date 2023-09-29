var button_right = document.querySelector(".buttons .right");
var button_left = document.querySelector(".buttons .left");
var slides = document.querySelectorAll(".slides ul li");
var number_slide = 0;
var slide_lenght = slides.length;
var trangthai ='dangdungyen';

var chuyensildechonuttphai = function () {
    if(trangthai =='dangchuyendong'){ return false; }
    trangthai ='dangchuyendong';
    var trangthaicua2chuyendong =0;
  // Lấy slide hiện tại
  var slide_now = slides[number_slide];

  // Nếu slide hiện tại không phải slide cuối cùng
  if (number_slide < slide_lenght - 1) {
    // Tăng số slide hiện tại lên 1
    number_slide++;
  } else {
    // Nếu slide hiện tại là slide cuối cùng
    // Đặt số slide hiện tại về 0
    number_slide = 0;
  }

  // Lấy slide tiếp theo
  var slide_next = slides[number_slide];

  // Thêm class "removed" vào slide hiện tại
  slide_now.classList.add("removed");

  // Thêm class "goin" vào slide tiếp theo
  slide_next.classList.add("goin");

  // Chờ cho slide hiện tại hoàn thành hiệu ứng ẩn đi
  slide_now.addEventListener("webkitAnimationEnd", function () {
    this.classList.remove("slide_active");
    this.classList.remove("removed");
    trangthaicua2chuyendong++;
    if(trangthaicua2chuyendong==2){trangthai='dangdungyen'}
  });

  // Chờ cho slide tiếp theo hoàn thành hiệu ứng xuất hiện
  slide_next.addEventListener("webkitAnimationEnd", function () {
    this.classList.remove("goin");
    this.classList.add("slide_active");
    trangthaicua2chuyendong++;
    if(trangthaicua2chuyendong==2){trangthai='dangdungyen'}
  });
};

button_right.addEventListener("click", chuyensildechonuttphai);
