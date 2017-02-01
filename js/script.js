$(function(){

  $('body').css('background-image', 'url(images/fond1.jpg)');
/****************************Apparition des règles du jeu**********************/
  $('p').hide();
  $('#r').on('click', function(){
      $('p').slideToggle(2000);
  });

/*************************************CARRE NOIR******************************/

  //1er carré noir
  $('#n1').on('click', function(){
      $('#n1').css('border','black');
      $('#br').click(function(){
          $('#n1').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#n1').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#n1').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#n1').animate({top:'+=54.5px'}, 1000)
      });
    });
  //appel à la fonction stop
  stop();

  //2eme carré noir
  $('#n2').on('click', function(){
      $('#n2').css('border','black');
      $('#br').click(function(){
          $('#n2').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#n2').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#n2').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#n2').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //3ème carré noir
  $('#n3').on('click', function(){
      $('#n3').css('border','black');
      $('#br').click(function(){
          $('#n3').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#n3').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#n3').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#n3').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //4ème carré noir
  $('#n4').on('click', function(){
      $('#n4').css('border','black');
      $('#br').click(function(){
          $('#n4').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#n4').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#n4').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#n4').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //5ème carré noir
  $('#n5').on('click', function(){
      $('#n5').css('border','black');
      $('#br').click(function(){
          $('#n5').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#n5').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#n5').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#n5').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //6ème carré noir
  $('#n6').on('click', function(){
      $('#n6').css('border','black');
      $('#br').click(function(){
          $('#n6').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#n6').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#n6').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#n6').animate({top:'+=54.5px'}, 1000)
      });
    });
  stop();

  //7ème carré noir
  $('#n7').on('click', function(){
      $('#n7').css('border','black');
      $('#br').click(function(){
          $('#n7').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#n7').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#n7').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#n7').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //8ème carré noir
  $('#n8').on('click', function(){
      $('#n8').css('border','black');
      $('#br').click(function(){
          $('#n8').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#n8').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#n8').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#n8').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //9ème carré noir
  $('#n9').on('click', function(){
      $('#n9').css('border','black');
      $('#br').click(function(){
          $('#n9').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#n9').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#n9').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#n9').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //10ème carré noir
  $('#n10').on('click', function(){
      $('#n10').css('border','black');
      $('#br').click(function(){
          $('#n10').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#n10').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#n10').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#n10').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

/*************************************CARRE BLANC******************************/

  //1er carré blanc
  $('#b1').on('click', function(){
      $('#b1').css('border','white');
      $('#br').click(function(){
          $('#b1').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#b1').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#b1').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#b1').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //2ème carré blanc
  $('#b2').on('click', function(){
      $('#b2').css('border','white');
      $('#br').click(function(){
          $('#b2').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#b2').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#b2').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#b2').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //3ème carré blanc
  $('#b3').on('click', function(){
      $('#b3').css('border','white');
      $('#br').click(function(){
          $('#b3').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#b3').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#b3').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#b3').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //4ème carré blanc
  $('#b4').on('click', function(){
      $('#b4').css('border','white');
      $('#br').click(function(){
          $('#b4').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#b4').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#b4').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#b4').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //5ème carré blanc
  $('#b5').on('click', function(){
      $('#b5').css('border','white');
      $('#br').click(function(){
          $('#b5').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#b5').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#b5').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#b5').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //6ème carré blanc
  $('#b6').on('click', function(){
      $('#b6').css('border','white');
      $('#br').click(function(){
          $('#b6').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#b6').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#b6').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#b6').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //7ème carré blanc
  $('#b7').on('click', function(){
      $('#b7').css('border','white');
      $('#br').click(function(){
          $('#b7').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#b7').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#b7').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#b7').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //8ème carré blanc
  $('#b8').on('click', function(){
      $('#b8').css('border','white');
      $('#br').click(function(){
          $('#b8').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#b8').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#b8').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#b8').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //9ème carré blanc
  $('#b9').on('click', function(){
      $('#b9').css('border','white');
      $('#br').click(function(){
          $('#b9').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#b9').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#b9').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#b9').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

  //10ème carré blanc
  $('#b10').on('click', function(){
      $('#b10').css('border','white');
      $('#br').click(function(){
          $('#b10').animate({left:'+=58px'}, 1000)
      });
      $('#bl').click(function(){
          $('#b10').animate({left:'-=58px'}, 1000)
      });
      $('#bu').click(function(){
          $('#b10').animate({top:'-=54.5px'}, 1000)
      });
      $('#bd').click(function(){
          $('#b10').animate({top:'+=54.5px'}, 1000)
      });
  });
  stop();

/******************************FONCTION UTILITAIRE*****************************/

  /*fonction stop, qui stop les mouvements liés aux flèche
  et qui déclenche sur le click du bonton stop*/
  function stop(){
     $('#stop').on('click', function(){
         $('#br').off();
         $('#bl').off();
         $('#bu').off();
         $('#bd').off();
      });
    };

});
