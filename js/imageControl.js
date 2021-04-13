'use strict'

$(function(){

    var images=['01.png','02.jpg','03.jpg','04.png','05.png',
        '06.gif','07.jpg','08.jpg','09.jpg','10.jpg',
        '11.png','12.jpg','13.jpg','14.jpg','15.gif',
        '16.gif','17.png','18.png','19.png','20.jpg',
        '21.png','22.png','23.png','24.png','25.png',
        '26.png','27.jpg','28.png','29.jpg','30.jpg',
        '31.png','32.jpg','33.jpg','34.jpg','35.png',
        '36.png','37.jpg','38.png','39.png','40.png',
        '41.png','42.png','43.png','44.png','45.jpg',
        '46.png','47.png','48.png','49.png','50.png'
    ];
    function vars(){
        var src = ($('#thumb').attr('src')).split('/');
        var img=src[src.length-1];
        var find = images.indexOf(img);
        var indexToSlice = ($('#thumb').attr('src')).lastIndexOf('/');
        var slice= ($('#thumb').attr('src')).slice(0,indexToSlice+1);
        return {find, slice};
    };  
    $('#forward').click(function(){
        var {find, slice} = vars();
        if(find>-1 && find<images.length-1){
            let nextImage= slice+images[find+1];
            $('#thumb').attr('src',nextImage);
        }else if(find>-1 && find==images.length-1){
            let nextImage= slice+images[0];
            $('#thumb').attr('src',nextImage);
        }
    });
    $('#backward').click(function(){
        var {find, slice} = vars();
        if(find>-1 && find!=0){
            let lastImage= slice+images[find-1];
            $('#thumb').attr('src',lastImage);
        }else if(find>-1 && find==0){
            let lastImage= slice+images[images.length-1];
            $('#thumb').attr('src',lastImage);
        }
     });
});