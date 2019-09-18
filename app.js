//var myList = document.getElementsByTagName('li');

//for(let i = 0;i<myList.length;i++)
//{
 //   myList[i].addEventListener('click',function()
//{
  //  this.textContent = 'fucked!';
//});
//}
//$('li').on ('click',function()
//{
  //  $(this).text("watto fucked").delay(800).fadeOut(400);

//});
//$( "li" ).not( ":even" ).css( "background-color", "red" );
$('body').click(function()
{
   console.log ("fucked");
});
$('#mass').on ('click',function()
{
  console.log('i am not bad');
});
$('img').css('display','none').fadeIn(1600);
$('img').on('click',function()
{
  $(this).toggleClass('selected');

});
$('div').on('click',function()
{
  $('#one').empty();
  $('#two').remove();
});
