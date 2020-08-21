let blocks = $('.tab-block');
$('.tab-link').click(function(){
   let linkName = $(this).attr('data-tab');
   $('.tab-link').removeClass('active');
   $(this).addClass('active');
   blocks.each(function(i){
     if(linkName == $(blocks[i]).attr('data-tab')){
       $(this).removeClass('hide');
     }
     else {
       $(this).addClass('hide');
     }
   })
})
