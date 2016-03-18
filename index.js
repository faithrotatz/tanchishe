$(function(){
function greedsnake(){
var SCORE=0;
var DIRECT;
var el="";
for(var i=0;i<20;i++){
	
	for(j=0;j<20;j++){
	var id=i+'_'+j;
     el+="<div id='"+id+"' class='block'></div>"

	}
}	

$(".huabu").html(el)
var snake=[{x:0,y:0},{x:0,y:1},{x:0,y:2}]
var data={'0_0':true,'0_1':true,'0_2':true}
 var huashe=function(){
  for(var i=0;i<snake.length;i++){
  var id=snake[i].x+'_'+snake[i].y
 $('#'+id).css({"background":"red"})
  }
 var wei=snake[0].x+'_'+snake[0].y
 $('#'+wei).css({"background":"black"})

 }
 huashe();
 var food=function(){
 var a=Math.floor(Math.random()*19);
 var b=Math.floor(Math.random()*19);

$('#'+a+'_'+b).addClass('green active')
 return {x:a,y:b}
 }
 var aa=food();
 var fangxiang=39;

document.onkeydown=function(e){
      

  
    if(Math.abs(e.keyCode-fangxiang)==2){
return}else{
	
	fangxiang=e.keyCode;
   }
   }
function move(){

if(snake[snake.length-1].x<0||snake[snake.length-1].y<0||snake[snake.length-1].y>18||snake[snake.length-1].x>18)
        {
        $('.over').css('display','block')
        clearInterval(time);
        return;
       
        }

    if(snake[snake.length-1].x==aa.x&&snake[snake.length-1].y==aa.y){
    
     SCORE+=10;
     $('.fenshu').html(SCORE+'分')
     $('#'+aa.x+'_'+aa.y).removeClass('green active')
     aa=food();
    }else{

        var old=snake.shift();
    	$('#'+old.x+'_'+old.y).css({"background":"white"})
   
    }
	if(fangxiang==39||DIRECT=='right'){
    snake.push({x:snake[snake.length-1].x,y:snake[snake.length-1].y+1});



    
   
	
	}
    if(fangxiang==40||DIRECT=='down'){
    snake.push({x:snake[snake.length-1].x+1,y:snake[snake.length-1].y})

    }
    if(fangxiang==37||DIRECT=='left'){
    snake.push({x:snake[snake.length-1].x,y:snake[snake.length-1].y-1})

    }
    if(fangxiang==38||DIRECT=='up'){
    snake.push({x:snake[snake.length-1].x-1,y:snake[snake.length-1].y})

    }
    huashe();

    }
    touch.on(document, 'swipe', function(ev){
    ev.preventDefault();
    DIRECT=ev.direction;
   
    });
   var  time=setInterval(move,300)
   $('.pause').click(function(){
    if($(this).data('cut')){
    $(this).data('cut',null)
    $(this).html('暂停')
    time=setInterval(move,600)
    }else{
    $(this).data('cut',1)
    clearInterval(time)
    $(this).html('继续')
    }
    
   })

};
greedsnake();




   $('.start').click(function(){
   $('.over').css('display','none');
     greedsnake();
   })


})