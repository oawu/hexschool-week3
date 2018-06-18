/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function () {
  $box = $('#box');
  $box.find ('.close').click (function () {
    $box.removeClass ('show');
  });
  $box.find ('.add-specification').click (function () {
    var $tmp = $(this).prev ().clone ();
    $tmp.find ('input').val ('');
    $tmp.find ('select > option').first ().prop ('selected');
    $tmp.insertBefore ($(this));
  });

  $('._ic').imgLiquid ({ verticalAlign:'center' });
  $('.forbox').click (function () {
    $box.addClass ('show');
  });
});