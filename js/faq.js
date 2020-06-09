$(document).ready(function () {

  //参考助教
  // 隱藏所有的 li 內文
  $('.faqcard-item-body').hide();
  // 預設讓第一個 li eq(0) 加上 active  eq(index)
  $('.faqcard-item').eq(0).addClass('active');
  // 預設讓第一個 li 內文 顯示
  $('.faqcard-item-body').eq(0).show();

  // 點擊 li
  $('.faqcard-item').click(function (e) {
    // 取消預設 event 事件
    e.preventDefault();
    // 加上 active 屬性，並把其他有 active 的移除
    $(this).toggleClass('active').siblings().removeClass('active');
    // 讓自己的 li body 切換收合
    $(this).children().next().slideToggle();
    // 讓其他 li body 收合
    $(this).siblings().children().next().slideUp();
  })
});

