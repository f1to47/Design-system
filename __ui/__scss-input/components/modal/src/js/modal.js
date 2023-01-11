let s4Workspace = document.querySelector('#s4-workspace');
    let html = document.querySelector('html');
function openModal(selector){

    // Quito el scroll de la página cuando el modal está abierto:
    
    if(s4Workspace){
       
        s4Workspace.style.overflowY = 'hidden';

     }else{
        
        html.style.overflowY = 'hidden';
     }



    let modal = document.querySelector(selector);
    let modalBox = modal.querySelector('.card-modal');
    let close = modal.querySelector('.close-modal');
    modal.classList.add('modal-active');
    modalBox.classList.add('active', 'animate__animated');
    
    if(modal.classList.contains('modal-right')){
        modalBox.classList.add('animate__fadeInRight');
    }

    if(modal.classList.contains('modal-center')){
        
        modalBox.classList.add('animate__zoomIn');
        // modalBox.style.height = bodyHeight;
    }

    close.addEventListener("click", () => closeModal(selector));
}



function closeModal(selector){


    if(s4Workspace){
       
        s4Workspace.style.overflowY = 'auto';

     }else{
        
        html.style.overflowY = 'auto';
     }

    let modal = document.querySelector(selector); 
    let modalBox = modal.querySelector('.card-modal');
    modal.classList.remove('modal-active');
    modalBox.classList.remove('modal-active', 'animate__animated');
    if(modal.classList.contains('modal-right')){
       
        modalBox.classList.remove('animate__fadeInRight');
    }

    else{
        modalBox.classList.remove('animate__zoomIn');
    }
  
  }
  