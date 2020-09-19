$(function() {

  $('.lesson-hover').hover(
      function() {
        // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
        $(this).find('.txt-contents').addClass('text-active');

      },
      function() {
        // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
        $(this).find('.txt-contents').removeClass('text-active');

      }
    );
});
