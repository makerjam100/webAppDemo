$(function () {
    var a,b,v,c,X;

    $('.calbutton').click(function() {
  
      
       a = +($("#num1").val());
       b = +($("#num2").val());
       v = +($("#num3").val());
       min = Math.ceil(a);
       max = Math.floor(b);
       X = Math.floor(Math.random() * (max - min) + min); 


      switch($(this).attr("id")) {
        case "range":
          c = a +"<= X <="+ b;
          break;
        case "resalt":
            if(v == X){
               /* document.write('正解答えは'+ X);
                document.write('（control + F5）押してリトライ');
              */
                alert("正解 x は"
                 + X );
            }
            else{
                /*document.write('不正解答えは'+ X);
                document.write('<p>（control + F5）押してリトライ</p>');*/
                alert("不正解 x は"
                   + X );
            }
            break;
        }
      
  
      
        $("#hyouji").html(c);
    
    });

   
  });