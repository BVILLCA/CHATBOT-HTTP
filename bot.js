 // Obtén los elementos necesarios
 const chatbox = document.getElementById('chatbox');
 const openBtn = document.querySelector('.btn-bot');
 const closeBtn = document.getElementById('close-btn');

 // Función para abrir la caja de chat
 function openChatbox() {
  chatbox.style.display = 'block';
 }

// Función para cerrar la caja de chat
 function closeChatbox() {
 chatbox.style.display = 'none';
 }

 // Asocia eventos de clic a los botones de abrir y cerrar
 openBtn.addEventListener('click', openChatbox);
 closeBtn.addEventListener('click', closeChatbox);

 function cambiarImagen(rutaImagen) {
  var catalogImage = document.getElementById('catalog-image');
  catalogImage.src = rutaImagen;
}

 function openChatbox() {
 chatbox.style.display = 'block';

     // Saludo del chatbot
      const chatboxBody = document.getElementById('chatbox-body');
     const chatMessage = document.createElement('div');
       chatMessage.classList.add('chat-message');
       displayChatbotMessage('¡Hola! ¿En qué puedo ayudarte?');
      chatboxBody.appendChild(chatMessage);
     }
 





     const chatInput = document.getElementById('chat-input');
     const sendBtn = document.getElementById('send-btn');
     const chatboxBody = document.getElementById('chatbox-body');

     // Función para enviar el mensaje del usuario y obtener la respuesta del chatbot
     function sendMessage() {
      const userMessage = chatInput.value;
      displayUserMessage(userMessage);
    
      const lowercaseMessage = userMessage.toLowerCase();
    
      // Mostrar la ventana emergente del catálogo
      var catalogModal = document.getElementById('catalog-modal');
      catalogModal.style.display = 'block';
    
      // Cerrar la ventana emergente del catálogo al hacer clic en el botón "close"
      var closeBtn = document.getElementsByClassName('close')[0];
      closeBtn.addEventListener('click', function() {
        catalogModal.style.display = 'none';
      });
    
      // Permitir seguir escribiendo en el chatbot mientras la ventana emergente está abierta
      chatInput.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          sendMessage();
        }
      });
    
      if (lowercaseMessage.includes('no') && lowercaseMessage.includes('entrar') && lowercaseMessage.includes('cuenta')) {     
           displayChatbotMessage('No hay sistema');
      } else {
        displayChatbotMessage(' ');
     }


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




if (lowercaseMessage.includes('hola')||lowercaseMessage.includes('opcion')) {
  cambiarImagen('img/MENUS/menuCatalogo.jpg');
  const menuInicio = 'Elige una opción:\n1. catalogo\n2. consultor';

  const opcionesMenu = menuInicio.split('\n');
 for (let opcion of opcionesMenu) {
   displayChatbotMessage(opcion);
 }
 chatbotState = 'menuInicio';
}

else if (chatbotState === 'menuInicio') {
    if (lowercaseMessage.includes('1')||lowercaseMessage.includes('catalogo')) {
           cambiarImagen('img/MENUS/menuCatalogo.jpg');
           const menuCATALOGO = 'Elige una opción:\n1. PC\n2. CELULARES\n3. VOLVER AL MENU inicio';

           const opcionesMenu = menuCATALOGO.split('\n');
          for (let opcion of opcionesMenu) {
            displayChatbotMessage(opcion);
          }
          chatbotState = 'menuCATALOGO';

      }else if (lowercaseMessage.includes('2')||lowercaseMessage.includes('consultor')) {
        cambiarImagen('img/MENUS/menuCatalogo.jpg');
        const menuConsultor = 'cual es tu consulta';

        const opcionesMenu = menuConsultor.split('\n');
       for (let opcion of opcionesMenu) {
         displayChatbotMessage(opcion);
       }
       chatbotState = 'menuConsultor';

   }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    }




        //                                    
      //                                       ░█████╗░░█████╗░████████╗░█████╗░██╗░░░░░░█████╗░░██████╗░░█████╗░
      //                                       ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██║░░░░░██╔══██╗██╔════╝░██╔══██╗
      //                                       ██║░░╚═╝███████║░░░██║░░░███████║██║░░░░░██║░░██║██║░░██╗░██║░░██║
      //                                       ██║░░██╗██╔══██║░░░██║░░░██╔══██║██║░░░░░██║░░██║██║░░╚██╗██║░░██║
      //                                       ╚█████╔╝██║░░██║░░░██║░░░██║░░██║███████╗╚█████╔╝╚██████╔╝╚█████╔╝
      //                                       ░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚══════╝░╚════╝░░╚═════╝░░╚════╝░
 
      else if (chatbotState === 'menuCATALOGO') {
        if (lowercaseMessage.includes('1')||lowercaseMessage.includes('pc')) {
          cambiarImagen('img/MENUS/PC/menuPc.jpg');
          const menuPC = 'ELIGE UNA OPCIÓN PARA PC:\n1. RAM\n2.PROCESADOR\n3. MOTHERBOARD\n4 VOLVER AL MENU CATALOGO';
          
          const opcionesMenu = menuPC.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }
          chatbotState = 'menuPC';
        }

        


    else if (lowercaseMessage.includes('2')||lowercaseMessage.includes('celulares')) {
      cambiarImagen('img/CELULARES.png');
      const menuCELULARES = 'Elige una opción:\n1. HUAWEI\n2. XIAOMI\n3. SAMSUNG\n4. VOLVER AL MENU CATALOGO';
      
      const opcionesMenu = menuCELULARES.split('\n');
      for (let opcion of opcionesMenu) {
      displayChatbotMessage(opcion);
      }
      chatbotState = 'menuCELULARES';
    }
        else if (lowercaseMessage.includes( '3')) {
          
          
          const menuInicio = 'Elige una opción:\n1. catalogo\n2. consultor';
        
          const opcionesMenu = menuInicio.split('\n');
         for (let opcion of opcionesMenu) {
           displayChatbotMessage(opcion);
         }
         chatbotState = 'menuInicio';
        }
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//                                                  █▀█ █▀▀
//                                                  █▀▀ █▄▄
//                                                  ░░░ ░░░



 else if (chatbotState === 'menuPC') {
  if (lowercaseMessage.includes( '1')) {
    cambiarImagen('img/CELULARES.png');
    const menuRAM = 'ELIGE UNA OPCIÓN PARA RAM:\n1. CRUCIAL\n2. TRIDENT Z\n3. CORSAIR\n4. HYPER X\n5. VOLVER AL MENU PC';
    
    const opcionesMenu = menuRAM.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuRAM';
  } 
  
  
  else if (lowercaseMessage.includes( '2')) {
    cambiarImagen('img/CELULARES.png');
    const menuPROCESADOR = 'ELIGE UNA OPCIÓN PARA PROCESADOR:\n1. AMD\n2. INTEL\n3. VOLVER AL MENU PC';
    
    const opcionesMenu = menuPROCESADOR.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuPROCESADOR';
  } 
  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/CELULARES.png');
    const menuMOTHERBOARD = 'ELIGE UNA OPCIÓN PARA MOTHERBOARD:\n1. ASUS ROG\n2. AOURUS\n3. VOLVER AL MENU PC';
    // GIGABYTE\n4. MSI\n5.
    const opcionesMenu = menuMOTHERBOARD.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuMOTHERBOARD';
  } 
  
  
  else if (lowercaseMessage.includes( '4')) {
    cambiarImagen('img/CELULARES.png');
    const menuGPU = 'ELIGE UNA OPCIÓN PARA GPU:\n1. NVIDIA\n2. AMD\n3. VOLVER AL MENU PC';
    
    const opcionesMenu = menuGPU.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuGPU';
  } 

  
  else if (lowercaseMessage.includes( '5')) {
    cambiarImagen('img/MENUS/menuCatalogo.jpg');
           const menuCATALOGO = 'Elige una opción:\n1. PC\n2. CELULARES\n3. VOLVER AL MENU inicio';

           const opcionesMenu = menuCATALOGO.split('\n');
          for (let opcion of opcionesMenu) {
            displayChatbotMessage(opcion);
          }
          chatbotState = 'menuCATALOGO';

      }
        
}

//----------------------------------------------------------
//------------------------------------------------------------








//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                    █▀█ ▄▀█ █▀▄▀█
//                                                    █▀▄ █▀█ █░▀░█
//                                                    ░░░ ░░░ ░░░░░






else if (chatbotState === 'menuRAM') {
  if (lowercaseMessage.includes( '1') ){
    cambiarImagen('img/CELULARES.png');
    const menuCRUCIAL = 'ELIGE UNA OPCIÓN PARA CRUCIAL:\n1. 18 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuCRUCIAL.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuCRUCIAL';
  } 
  
  
  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/CELULARES.png');
    const menuTRIDENTZ = 'ELIGE UNA OPCIÓN PARA TRIDENT Z:\n1. 18 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuTRIDENTZ.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuTRIDENTZ';
  } 
  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/CELULARES.png');
    const menuCORSAIR = 'ELIGE UNA OPCIÓN PARA CORSAIR:\n1. 18 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuCORSAIR.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuCORSAIR';
  } 
  
  
  else if (lowercaseMessage.includes( '4') ){
    cambiarImagen('img/CELULARES.png');
    const menuHYPERX = 'ELIGE UNA OPCIÓN PARA HYPER X:\n1. 18 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuHYPERX.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuHYPERX';
  } 
  
  
  else if (lowercaseMessage.includes( '5') ){
          cambiarImagen('img/MENUS/PC/menuPc.jpg');
          const menuPC = 'ELIGE UNA OPCIÓN PARA PC:\n1. RAM\n2.PROCESADOR\n3. MOTHERBOARD\n4.GPU\n5 VOLVER AL MENU CATALOGO';
          
          const opcionesMenu = menuPC.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }
          chatbotState = 'menuPC';
  }
}

//-----------------------------------------------------------------------------------------------------------------


else if (chatbotState === 'menuCRUCIAL') {
  if (lowercaseMessage.includes( '1')) {
    cambiarImagen('img/CELULARES.png');
    const menuCRU18GB = ' CRUCIAL 18 GB: mejor\n1.VOLVER AL MENU CRUCIAL';
    
    const opcionesMenu = menuCRU18GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuCRU18GB';
}
    

  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/CELULARES.png');
    const menuCRU32GB = ' CRUCIAL 32 GB: mejor\n1.VOLVER AL MENU CRUCIAL';
    
    const opcionesMenu = menuCRU32GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuCRU32GB';
}
  
  

  
  else if (lowercaseMessage.includes( '3') ){
    cambiarImagen('img/CELULARES.png');
    const menuRAM = 'ELIGE UNA OPCIÓN PARA RAM:\n1. CRUCIAL\n2. TRIDENT Z\n3. CORSAIR\n4. HYPER X\n5. VOLVER AL MENU PC';
    
    const opcionesMenu = menuRAM.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuRAM';
  } 
}



else if (chatbotState === 'menuCRU18GB') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
    const menuCRUCIAL = 'ELIGE UNA OPCIÓN PARA CRUCIAL:\n1. 18 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuCRUCIAL.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuCRUCIAL';
  } 

}

else if (chatbotState === 'menuCRU32GB') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
    const menuCRUCIAL = 'ELIGE UNA OPCIÓN PARA CRUCIAL:\n1. 18 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuCRUCIAL.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuCRUCIAL';
  } 

}


//-----------------------------------------------------------------------------------------------------------------



else if (chatbotState === 'menuTRIDENTZ') {
  if (lowercaseMessage.includes( '1')) {
    cambiarImagen('img/CELULARES.png');
    const menuTRID18GB = 'TRIDENT Z 18 GB: mejor\n1.VOLVER AL MENU TRIDENT Z';
    
    const opcionesMenu = menuTRID18GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

  chatbotState = 'menuTRID18GB';

}
    

  else if (lowercaseMessage.includes( '2')) {
    cambiarImagen('img/CELULARES.png');
    const menuTRID32GB = 'TRIDENT Z 32 GB: mejor\n1.VOLVER AL MENU TRIDENT Z';
    
    const opcionesMenu = menuTRID32GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuTRID32GB';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/CELULARES.png');
    const menuRAM = 'ELIGE UNA OPCIÓN PARA RAM:\n1. CRUCIAL\n2. TRIDENT Z\n3. CORSAIR\n4. HYPER X\n5. VOLVER AL MENU PC';
    
    const opcionesMenu = menuRAM.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuRAM';
  } 
}




else if (chatbotState === 'menuTRID18GB') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
    const menuTRIDENTZ = 'ELIGE UNA OPCIÓN PARA TRIDENT Z:\n1. 18 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuTRIDENTZ.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuTRIDENTZ';
  } 

}

else if (chatbotState === 'menuTRID32GB') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
    const menuTRIDENTZ = 'ELIGE UNA OPCIÓN PARA TRIDENT Z:\n1. 18 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuTRIDENTZ.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuTRIDENTZ';
  } 

}



//-----------------------------------------------------------------------------------------------------------------




else if (chatbotState === 'menuCORSAIR') {
  if (lowercaseMessage.includes( '1')) {
    cambiarImagen('img/CELULARES.png');
    const menuCOR18GB = 'CORSAIR 18 GB: mejor\n1.VOLVER AL MENU CORSAIR';
    
    const opcionesMenu = menuCOR18GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuCOR18GB';
}
    

  else if (lowercaseMessage.includes( '2')) {
    cambiarImagen('img/CELULARES.png');
    const menuCOR32GB = 'CORSAIR 32 GB: mejor\n1.VOLVER AL MENU CORSAIR';
    
    const opcionesMenu = menuCOR32GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuCOR32GB';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3') ){
    cambiarImagen('img/CELULARES.png');
    const menuRAM = 'ELIGE UNA OPCIÓN PARA RAM:\n1. CRUCIAL\n2. TRIDENT Z\n3. CORSAIR\n4. HYPER X\n5. VOLVER AL MENU PC';
    
    const opcionesMenu = menuRAM.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuRAM';
  } 
}

else if (chatbotState === 'menuCOR18GB') {
  cambiarImagen('img/CELULARES.png');
    const menuCORSAIR = 'ELIGE UNA OPCIÓN PARA CORSAIR:\n1. 18 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuCORSAIR.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuCORSAIR';
  } 

else if (chatbotState === 'menuCOR32GB') {
  cambiarImagen('img/CELULARES.png');
    const menuCORSAIR = 'ELIGE UNA OPCIÓN PARA CORSAIR:\n1. 18 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuCORSAIR.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuCORSAIR';
  } 







//-----------------------------------------------------------------------------------------------------------------



else if (chatbotState === 'menuHYPERX') {
  if (lowercaseMessage.includes( '1') ){
    cambiarImagen('img/CELULARES.png');
    const menuHX18GB = 'HYPER X 18 GB: mejor\n1.VOLVER AL MENU HYPERX';
    
    const opcionesMenu = menuHX18GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuHX18GB';
}
    

  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/CELULARES.png');
    const menuHX32GB = 'HYPER X 32 GB: mejor\n1.VOLVER AL MENU HYPERX';
    
    const opcionesMenu = menuHX32GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuHX32GB';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3') ){
    cambiarImagen('img/CELULARES.png');
    const menuRAM = 'ELIGE UNA OPCIÓN PARA RAM:\n1. CRUCIAL\n2. TRIDENT Z\n3. CORSAIR\n4. HYPER X\n5. VOLVER AL MENU PC';
    
    const opcionesMenu = menuRAM.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuRAM';
  } 
}


else if (chatbotState === 'menuHX18GB') {
  cambiarImagen('img/CELULARES.png');
    const menuHYPERX = 'ELIGE UNA OPCIÓN PARA HYPER X:\n1. 18 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuHYPERX.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuHYPERX';
  } 

else if (chatbotState === 'menuHX32GB') {
  cambiarImagen('img/CELULARES.png');
    const menuHYPERX = 'ELIGE UNA OPCIÓN PARA HYPER X:\n1. 18 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuHYPERX.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuHYPERX';
  } 








//----------------------------------------------------------







//------------------------------------------------------------
//                          ███ ███ ███ ██ ██ ██ ███ ██▄ ███ ███
//                          █▄█ █▄╬ █╬█ █╬ █▄ █▄ █▄█ █╬█ █╬█ █▄╬
//                          █╬╬ █╬█ █▄█ ██ █▄ ▄█ █╬█ ███ █▄█ █╬█
//                          

else if (chatbotState === 'menuPROCESADOR') {
  if (lowercaseMessage.includes( '1')) {
    cambiarImagen('img/CELULARES.png');
    const menuAMD = 'ELIGE UNA OPCIÓN PARA AMD:\n1. RYZEN 6 5600G\n2. RYZEN 7 5700G\n3. VOLVER AL MENU PROCESADOR';
    
    const opcionesMenu = menuAMD.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuAMD';
  } 
  
  
  else if (lowercaseMessage.includes( '2')) {
    cambiarImagen('img/CELULARES.png');
    const menuNVIDIA = 'ELIGE UNA OPCIÓN PARA NVIDIA:\n1. CORE I7 12500K\n2. CORE I9 12700K\n3. VOLVER AL MENU PROCESADOR';
    
    const opcionesMenu = menuNVIDIA.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuNVIDIA';
  } 
  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/MENUS/PC/menuPc.jpg');
    const menuPC = 'ELIGE UNA OPCIÓN PARA PC:\n1. RAM\n2.PROCESADOR\n3. MOTHERBOARD\n4.GPU\n5 VOLVER AL MENU CATALOGO';
    
    const opcionesMenu = menuPC.split('\n');
    for (let opcion of opcionesMenu) {
    displayChatbotMessage(opcion);
    }
    chatbotState = 'menuPC';
}
}


//-----------------------------------------------------------------------------------------------------------------

else if (chatbotState === 'menuAMD') {
  if (lowercaseMessage.includes( '1') ){
    cambiarImagen('img/CELULARES.png');
    const menuRYZEN65600G = 'RYZEN 6 5600G: mejor\n1.VOLVER AL MENU AMD';
    
    const opcionesMenu = menuRYZEN65600G.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuRYZEN65600G';
}
    

  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/CELULARES.png');
    const menuRYZEN75700G = 'RYZEN 7 5700G: mejor\n1.VOLVER AL MENU AMD';
    
    const opcionesMenu = menuRYZEN75700G.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuRYZEN75700G';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/CELULARES.png');
    const menuPROCESADOR = 'ELIGE UNA OPCIÓN PARA PROCESADOR:\n1. AMD\n2. INTEL\n3. VOLVER AL MENU PC';
    
    const opcionesMenu = menuPROCESADOR.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuPROCESADOR';
  } 
}

else if (chatbotState === 'menuRYZEN65600G') {
  if (lowercaseMessage.includes( 'volver') ){
    const menuAMD = 'ELIGE UNA OPCIÓN PARA AMD:\n1. RYZEN 6 5600G\n2. RYZEN 7 5700G\n3. VOLVER AL MENU PROCESADOR';
    
    const opcionesMenu = menuAMD.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuAMD';
  } 

}

else if (chatbotState === 'menuRYZEN75700G') {
  if (lowercaseMessage.includes( 'volver') ){
    const menuAMD = 'ELIGE UNA OPCIÓN PARA AMD:\n1. RYZEN 6 5600G\n2. RYZEN 7 5700G\n3. VOLVER AL MENU PROCESADOR';
    
    const opcionesMenu = menuAMD.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuAMD';
  } 

}


//-----------------------------------------------------------------------------------------------------------------



else if (chatbotState === 'menuNVIDIA') {
  if (lowercaseMessage.includes( '1')) {
    cambiarImagen('img/CELULARES.png');
    const menuCOREI712500K = 'CORE I7 12500K: mejor\n1.VOLVER AL MENU NVIDIA';
    
    const opcionesMenu = menuCOREI712500K.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuCOREI712500K';
}
    

  else if (lowercaseMessage.includes( '2')) {
    cambiarImagen('img/CELULARES.png');
    const menuCOREI912700K = 'CORE I9 12700K: mejor\n1.VOLVER AL MENU NVIDIA';
    
    const opcionesMenu = menuCOREI912700K.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuCOREI912700K';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3') ){
    cambiarImagen('img/CELULARES.png');
    const menuPROCESADOR = 'ELIGE UNA OPCIÓN PARA PROCESADOR:\n1. AMD\n2. INTEL\n3. VOLVER AL MENU PC';
    
    const opcionesMenu = menuPROCESADOR.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuPROCESADOR';
  } 
}


else if (chatbotState === 'menuCOREI712500K') {
  if (lowercaseMessage.includes( 'volver') ){
  cambiarImagen('img/CELULARES.png');
    const menuNVIDIA = 'ELIGE UNA OPCIÓN PARA NVIDIA:\n1. CORE I7 12500K\n2. CORE I9 12700K\n3. VOLVER AL MENU PROCESADOR';
    
    const opcionesMenu = menuNVIDIA.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuNVIDIA';
  } }

else if (chatbotState === 'menuCOREI912700K') {
  if (lowercaseMessage.includes( 'volver') ){
  cambiarImagen('img/CELULARES.png');
    const menuNVIDIA = 'ELIGE UNA OPCIÓN PARA NVIDIA:\n1. CORE I7 12500K\n2. CORE I9 12700K\n3. VOLVER AL MENU PROCESADOR';
    
    const opcionesMenu = menuNVIDIA.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuNVIDIA';
  } }

//----------------------------------------------------------











//                    █▀▄▀█ █▀█ ▀█▀ █░█ █▀▀ █▀█ █▄▄ █▀█ ▄▀█ █▀█ █▀▄
//                    █░▀░█ █▄█ ░█░ █▀█ ██▄ █▀▄ █▄█ █▄█ █▀█ █▀▄ █▄▀
//                    ░░░░░ ░░░ ░░░ ░░░ ░░░ ░░░ ░░░ ░░░ ░░░ ░░░ ░░░

else if (chatbotState === 'menuMOTHERBOARD') {
  if (lowercaseMessage.includes( '1') ){
    cambiarImagen('img/CELULARES.png');
    const menuASUSROG = 'ELIGE UNA OPCIÓN PARA ASUS ROG:\n1. B550 GB\n2. X570\n3. VOLVER AL MENU MOTHERBOARD';
    
    const opcionesMenu = menuASUSROG.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuASUSROG';
  } 
  
  
  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/CELULARES.png');
    const menuAOURUS = 'ELIGE UNA OPCIÓN PARA AOURUS:\n1. B550 GB\n2. X570\n3. VOLVER AL MENU MOTHERBOARD';
    
    const opcionesMenu = menuAOURUS.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuAOURUS';
  } 
  
  
  

  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/MENUS/PC/menuPc.jpg');
    const menuPC = 'ELIGE UNA OPCIÓN PARA PC:\n1. RAM\n2.PROCESADOR\n3. MOTHERBOARD\n4.GPU\n5 VOLVER AL MENU CATALOGO';
    
    const opcionesMenu = menuPC.split('\n');
    for (let opcion of opcionesMenu) {
    displayChatbotMessage(opcion);
    }
    chatbotState = 'menuPC';
}
}

//--------------------------------------------------------------------------------------------------

else if (chatbotState === 'menuASUSROG') {
  if (lowercaseMessage.includes( '1') ){
    cambiarImagen('img/CELULARES.png');
    const menuB550 = 'B550: mejor\n1.VOLVER AL MENU ASUSROG';
    
    const opcionesMenu = menuB550.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuB550';
}
    

  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/CELULARES.png');
    const menuX570 = 'X570: mejor\n1.VOLVER AL MENU ASUSROG';
    
    const opcionesMenu = menuX570.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuX570';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/CELULARES.png');
    const menuMOTHERBOARD = 'ELIGE UNA OPCIÓN PARA MOTHERBOARD:\n1. ASUS ROG\n2. AOURUS\n3. VOLVER AL MENU PC';
    // GIGABYTE\n4. MSI\n5.
    const opcionesMenu = menuMOTHERBOARD.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuMOTHERBOARD';
  } 
}

else if (chatbotState === 'menuB550') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
    const menuASUSROG = 'ELIGE UNA OPCIÓN PARA ASUS ROG:\n1. B550 GB\n2. X570\n3. VOLVER AL MENU MOTHERBOARD';
    
    const opcionesMenu = menuASUSROG.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuASUSROG';
  } 

}

else if (chatbotState === 'menuX570') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
    const menuASUSROG = 'ELIGE UNA OPCIÓN PARA ASUS ROG:\n1. B550 GB\n2. X570\n3. VOLVER AL MENU MOTHERBOARD';
    
    const opcionesMenu = menuASUSROG.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuASUSROG';
  } 

}


//-----------------------------------------------------------------------------------------------------------------



else if (chatbotState === 'menuAOURUS') {
  if (lowercaseMessage.includes( '1') ){
    cambiarImagen('img/CELULARES.png');
    const menuB550 = 'B550: mejor\n1.VOLVER AL MENU AOURUS';
    
    const opcionesMenu = menuB550.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuB550';
}
    

  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/CELULARES.png');
    const menuX570 = 'X570: mejor\n1.VOLVER AL MENU AOURUS';
    
    const opcionesMenu = menuX570.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuX570';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/CELULARES.png');
    const menuMOTHERBOARD = 'ELIGE UNA OPCIÓN PARA MOTHERBOARD:\n1. ASUS ROG\n2. AOURUS\n3. VOLVER AL MENU PC';
    // GIGABYTE\n4. MSI\n5.
    const opcionesMenu = menuMOTHERBOARD.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuMOTHERBOARD';
  } 
}

else if (chatbotState === 'menuB550') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
    const menuAOURUS = 'ELIGE UNA OPCIÓN PARA AOURUS:\n1. B550 GB\n2. X570\n3. VOLVER AL MENU MOTHERBOARD';
    
    const opcionesMenu = menuAOURUS.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuAOURUS';
  } 

}

else if (chatbotState === 'menuX570') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
    const menuAOURUS = 'ELIGE UNA OPCIÓN PARA AOURUS:\n1. B550 GB\n2. X570\n3. VOLVER AL MENU MOTHERBOARD';
    
    const opcionesMenu = menuAOURUS.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuAOURUS';
  } 

}












//----------------------------------------------------------


























//                                    
//                                    ░█████╗░███████╗██╗░░░░░██╗░░░██╗██╗░░░░░░█████╗░██████╗░███████╗░██████╗
//                                    ██╔══██╗██╔════╝██║░░░░░██║░░░██║██║░░░░░██╔══██╗██╔══██╗██╔════╝██╔════╝
//                                    ██║░░╚═╝█████╗░░██║░░░░░██║░░░██║██║░░░░░███████║██████╔╝█████╗░░╚█████╗░
//                                    ██║░░██╗██╔══╝░░██║░░░░░██║░░░██║██║░░░░░██╔══██║██╔══██╗██╔══╝░░░╚═══██╗
//                                    ╚█████╔╝███████╗███████╗╚██████╔╝███████╗██║░░██║██║░░██║███████╗██████╔╝
//                                    ░╚════╝░╚══════╝╚══════╝░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═════╝░

        else if (chatbotState === 'menuCELULARES') {
          if (lowercaseMessage.includes( '1')) {
            cambiarImagen('img/CELULARES.png');
            const menuHUAWEI = 'ELIGE UNA OPCIÓN PARA HUAWEI:\n1. P50\n2. P60\n3. VOLVER AL MENU CELULARES';
            
            const opcionesMenu = menuHUAWEI.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }

            chatbotState = 'menuHUAWEI';
          } 
          
          
          else if (lowercaseMessage.includes( '2') ){
            cambiarImagen('img/CELULARES.png');
            const menuXIAOMI = 'ELIGE UNA OPCIÓN PARA XIAOMI:\n1. NONTE 11\n2. NONTE 12\n3. VOLVER AL MENU CELULARES';
            
            const opcionesMenu = menuXIAOMI.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }
            
            chatbotState = 'menuXIAOMI';
          } 
          
          
          else if (lowercaseMessage.includes( '3')) {
            cambiarImagen('img/CELULARES.png');
            const menuSAMSUNG = 'ELIGE UNA OPCIÓN PARA SAMSUNG:\n1. A50\n2. A60\n3. VOLVER AL MENU CELULARES';
            
            const opcionesMenu = menuSAMSUNG.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }
          
            chatbotState = 'menuSAMSUNG';
          } 
          
          
          
          
          else if (lowercaseMessage.includes( '4')) {
            cambiarImagen('img/MENUS/menuCatalogo.jpg');
           const menuCATALOGO = 'Elige una opción:\n1. PC\n2. CELULARES\n3. VOLVER AL MENU inicio';

           const opcionesMenu = menuCATALOGO.split('\n');
          for (let opcion of opcionesMenu) {
            displayChatbotMessage(opcion);
          }
          chatbotState = 'menuCATALOGO';

      }
        }


//----------------CELULARES-

else if (chatbotState === 'menuHUAWEI') {
  
  if (lowercaseMessage.includes( '1')) {
    const menuP50 = 'EL MODELO P50 ES UN CELULAR COSTO BENEFICIO\n3. VOLVER AL MENU HUAWEI';
    displayChatbotMessage(menuP50);
    chatbotState = 'menuP50';
  }
  
  else  if (lowercaseMessage.includes( '2') ){
    const menuP60 = 'EL MODELO P60 ES UN CELULAR COSTO BENEFICIO\n3. VOLVER AL MENU HUAWEI';
    displayChatbotMessage(menuP60);
    chatbotState = 'menuP60';
  } 
  
  else if (lowercaseMessage.includes( '3') ){
    cambiarImagen('img/CELULARES.png');
      const menuCELULARES = 'Elige una opción:\n1. HUAWEI\n2. XIAOMI\n3. SAMSUNG\n4. SONY\n5. VOLVER AL MENU CATALOGO';
      
      const opcionesMenu = menuCELULARES.split('\n');
      for (let opcion of opcionesMenu) {
      displayChatbotMessage(opcion);
      }
      chatbotState = 'menuCELULARES';
    }
}



else if (chatbotState === 'menuP50') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
            const menuHUAWEI = 'ELIGE UNA OPCIÓN PARA HUAWEI:\n1. P50\n2. P60\n3. VOLVER AL MENU CELULARES';
            
            const opcionesMenu = menuHUAWEI.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }

            chatbotState = 'menuHUAWEI';
          } 

}

else if (chatbotState === 'menuP60') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
            const menuHUAWEI = 'ELIGE UNA OPCIÓN PARA HUAWEI:\n1. P50\n2. P60\n3. VOLVER AL MENU CELULARES';
            
            const opcionesMenu = menuHUAWEI.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }

            chatbotState = 'menuHUAWEI';
          } 

}




//----------------------------------------------------------------------

else if (chatbotState === 'menuXIAOMI') {
  
  if (lowercaseMessage.includes( '1')) {
    const menuNONTE11 = 'EL MODELO NONTE 11 ES UN CELULAR COSTO BENEFICIO\n VOLVER AL MENU XIAOMI';
    displayChatbotMessage(menuNONTE11);
    chatbotState = 'menuNONTE11';
  } 
  
  else  if (lowercaseMessage.includes( '2')) {
    const menuNONTE12 = 'EL MODELO NONTE 12 ES UN CELULAR COSTO BENEFICIO\n VOLVER AL MENU XIAOMI';
    displayChatbotMessage(menuNONTE12);
    chatbotState = 'menuNONTE12';
  } 
  
  else if (lowercaseMessage.includes( '3') ){
    cambiarImagen('img/CELULARES.png');
      const menuCELULARES = 'Elige una opción:\n1. HUAWEI\n2. XIAOMI\n3. SAMSUNG\n4. SONY\n5. VOLVER AL MENU CATALOGO';
      
      const opcionesMenu = menuCELULARES.split('\n');
      for (let opcion of opcionesMenu) {
      displayChatbotMessage(opcion);
      }
      chatbotState = 'menuCELULARES';
    }
}


else if (chatbotState === 'menuNONTE11') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
            const menuXIAOMI = 'ELIGE UNA OPCIÓN PARA XIAOMI:\n1. NONTE 11\n2. NONTE 12\n3. VOLVER AL MENU CELULARES';
            
            const opcionesMenu = menuXIAOMI.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }
            
            chatbotState = 'menuXIAOMI';
          } 

}

else if (chatbotState === 'menuNONTE12') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
            const menuXIAOMI = 'ELIGE UNA OPCIÓN PARA XIAOMI:\n1. NONTE 11\n2. NONTE 12\n3. VOLVER AL MENU CELULARES';
            
            const opcionesMenu = menuXIAOMI.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }
            
            chatbotState = 'menuXIAOMI';
          } 

}







      



//---------------------------------------------------------

else if (chatbotState === 'menuSAMSUNG') {
  
  
  if (lowercaseMessage.includes( '1') ){
    const menuA50 = 'EL MODELO A50 ES UN CELULAR COSTO BENEFICIO\n3. VOLVER AL MENU SAMSUNG';
    const opcionesMenu = menuA50.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }
    chatbotState = 'menuA50';
  }
  
  else  if (lowercaseMessage.includes( '2')) {
    const menuA60 = 'EL MODELO A60 ES UN CELULAR COSTO BENEFICIO\n3. VOLVER AL MENU SAMSUNG';
    const opcionesMenu = menuA60.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }
    chatbotState = 'menuA60';
  }
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/CELULARES.png');
      const menuCELULARES = 'Elige una opción:\n1. HUAWEI\n2. XIAOMI\n3. SAMSUNG\n4. SONY\n5. VOLVER AL MENU CATALOGO';
      
      const opcionesMenu = menuCELULARES.split('\n');
      for (let opcion of opcionesMenu) {
      displayChatbotMessage(opcion);
      }
      chatbotState = 'menuCELULARES';
    }
}


else if (chatbotState === 'menuA50') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
            const menuSAMSUNG = 'ELIGE UNA OPCIÓN PARA SAMSUNG:\n1. A50\n2. A60\n3. VOLVER AL MENU CELULARES';
            
            const opcionesMenu = menuSAMSUNG.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }
          
            chatbotState = 'menuSAMSUNG';
          } 

}

else if (chatbotState === 'menuA60') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/CELULARES.png');
            const menuSAMSUNG = 'ELIGE UNA OPCIÓN PARA SAMSUNG:\n1. A50\n2. A60\n3. VOLVER AL MENU CELULARES';
            
            const opcionesMenu = menuSAMSUNG.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }
          
            chatbotState = 'menuSAMSUNG';
          } 

}















//                                        
//                                        ░█████╗░░█████╗░███╗░░██╗░██████╗██╗░░░██╗██╗░░░░░████████╗░█████╗░██████╗░
//                                        ██╔══██╗██╔══██╗████╗░██║██╔════╝██║░░░██║██║░░░░░╚══██╔══╝██╔══██╗██╔══██╗
//                                        ██║░░╚═╝██║░░██║██╔██╗██║╚█████╗░██║░░░██║██║░░░░░░░░██║░░░██║░░██║██████╔╝
//                                        ██║░░██╗██║░░██║██║╚████║░╚═══██╗██║░░░██║██║░░░░░░░░██║░░░██║░░██║██╔══██╗
//                                        ╚█████╔╝╚█████╔╝██║░╚███║██████╔╝╚██████╔╝███████╗░░░██║░░░╚█████╔╝██║░░██║
//                                        ░╚════╝░░╚════╝░╚═╝░░╚══╝╚═════╝░░╚═════╝░╚══════╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
else if (chatbotState === 'menuConsultor') {
  if (lowercaseMessage.includes('no ')&&lowercaseMessage.includes('ingresar')&&lowercaseMessage.includes('cuenta')) {
    
    const menuPC = 'no hay sistema';
    
    const opcionesMenu = menuPC.split('\n');
    for (let opcion of opcionesMenu) {
    displayChatbotMessage(opcion);
    }
   
  }














  else if (lowercaseMessage.includes( 'volver')) {
          
          
    const menuInicio = 'Elige una opción:\n1. catalogo\n2. consultor';
  
    const opcionesMenu = menuInicio.split('\n');
   for (let opcion of opcionesMenu) {
     displayChatbotMessage(opcion);
   }
   chatbotState = 'menuInicio';
  }



} 




//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 








        



        
        chatInput.value = '';
    
      }


     // Función para mostrar el mensaje del usuario en el chat
     function displayUserMessage(message) {
       const chatMessage = document.createElement('div');
       chatMessage.classList.add('chat-message', 'user-message');
       chatMessage.textContent = message;
       chatboxBody.appendChild(chatMessage);
     }

     // Función para mostrar la respuesta del chatbot en el chat
     function displayChatbotMessage(message) {
       const chatMessage = document.createElement('div');
       chatMessage.classList.add('chat-message', 'chatbot-message');
       chatMessage.textContent = message;
       chatboxBody.appendChild(chatMessage);
     }

     // Asociar evento de clic al botón de enviar
     sendBtn.addEventListener('click', sendMessage);

     chatInput.addEventListener('keydown', function(event) {
       if (event.key === 'Enter') {
        sendMessage();
       }
      });