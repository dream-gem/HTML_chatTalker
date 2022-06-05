$(document).ready(function() {

  $('.question').click(function(event) {

    // 讓點擊到的 question 亮起來，其他question移除active樣式
    $(this).toggleClass('active');

    // 讓點擊到的 question找到父元素li，再找裡面的 answer 判斷收闔
    $(this).parent().find('.answer').slideToggle();

    // 自己以外的 answer 隱藏起來
    $(this).parent().siblings().find('.answer').slideUp();
    // 自己以外的 answer 移除u樣式
    $(this).parent().siblings().find('.question').removeClass('active');

  });
});