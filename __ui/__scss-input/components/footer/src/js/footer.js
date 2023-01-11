function modalWSP(x){

    if (x.matches) { // If media query matches
     window.location.href = 'https://api.whatsapp.com/send?phone=56936391222';
    
   } else {
     openModal('.modalWhatsapp');
    }
  }
  
  
  
           
  function whatsapp(){
  var x = window.matchMedia("(max-width: 700px)")
  modalWSP(x) // Call listener function at run time
  
  }
  
  
  $('.footer-links_category').click(function () {

    var x = window.matchMedia("(max-width: 700px)")
    if (x.matches) { // If media query matches


        if(!$(this).hasClass('open')){
            $('.footer-links_category').removeClass('open');
         $('.footer-links_category').find('ul').hide().removeClass('animate__animated animate__fadeInDown');
         $(this).addClass('open');
         $(this).find('ul').show().addClass('animate__animated animate__fadeInDown');
        }else{
         $(this).find('ul').hide().removeClass('animate__animated animate__fadeInDown');
         $(this).removeClass('open');
        }
       
    } 
   
     
  })