function numbertoword(s , placeTag , vahed)
{
if(s.length <= 15){
    ///// s = اعداد و string
    ///////placeTag =  محل قرار گیری حروف و نتیجه 
    //////////vahed =  واحد پول ک در اخر به حروف اضافه میشود
    //<input type="number" min="0" id="demo" onkeyup="numbertoword(this.value,document.getElementById('write') , 'ریال');" onchange="numbertoword(this.value,document.getElementById('write') , 'ریال');">
let number1to9 = [" صفر "," یک "," دو "," سه "," چهار ","پنج"," شش "," هفت "," هشت "," نه "] ;   
let number10to19 =  [" ده "," یازده "," دوازده "," سیزده "," چهارده "," پانزده "," شانزده "," هفده "," هجده "," نوزده "] ; 
let number20to90 =  ["",""," بیست "," سی "," چهل ","پنجاه"," شصت "," هفتاد "," هشتاد "," نود "] ; 
let number100toakhar =  ["  "," صد "," هزار "," میلیون "," میلیارد ","تریلیارد"] ;
let m = 0 ;
let txt = "" ;
let n = parseInt(s);
if(n == 0){txt = " صفر "}
let i = 0 ;
while(  s.length > 0 ){
    if(s.length <= 3){
        n = s.substr(0)
    }
    else{
        n = s.substr(s.length-3 , 3);
    }
    s = s.substr(0 , s.length-3);
    if(n.length == 1)n = "00" + n ;
    if(n.length == 2)n = "0" + n ;
    m++;
                             ///start
    let f = n ;
    let g = m ; 
    let txt1 = txt ;
    let convert3 = "" ;
   
let t = "" ; 
n1 = parseInt(f.substr(2 , 1)); 
n10 = parseInt(f.substr(1 , 1)); 
n100 = parseInt(f.substr(0 , 1));
/////////////////////////////////رقم اولو چاپ کردیم
    if(n10 == 0 && n1 != 0){
          t = number1to9[n1];
    }
    if(n10 > 1 && n1 != 0){
        t = number1to9[n1];
    }
    ///////////////////////////////////////////رقم دوم
    if( n10 == 1){
        t = number10to19[n1]; 
    }
    if(n10 > 1 && n1 != 0){
        t =  number20to90[n10] + " و " + t ;
    }
    else{
        t =  number20to90[n10] + t ;  
    }
    /////////////////////////////////////////رقم سوم
    if(n100 > 0){
        if(n1 == 0 && n10 == 0 ){
            switch(n100){
                case 2 :
                    k = "  دویست "
                        break;
                case 3 : 
                    k = " سیصد "
                        break;
                case 5: 
                    k = " پانصد "
                        break;
                default : 
                    k = number1to9[n100] +" "+  number100toakhar[1] ;
                        break;
            }
             t = k ;
        }
        else{
            switch(n100){
                case 2 :
                    k = "  دویست " +  (n100 > 0 ? "" + " و " : "") ;
                        break;
                case 3 : 
                    k = " سیصد " +  (n100 > 0 ? "" + " و " : "") ;
                        break;
                case 5: 
                    k = " پانصد " +  (n100 > 0 ? "" + " و " : "") ;
                        break;
                default : 
                    k = number1to9[n100] + (n100 > 0 ? number100toakhar[1] + " و " : "") ;
                        break;
            }
             t = k + t ;     
        }
    }
    ////////////////////////////////////////رقم چهارم به بعد 
     let e = "" ;
    if( t.length > 0 ){
         e = number100toakhar[g];
    }
    if( g >  1 ){
         t += e ;
    }
    if(txt1.length > 0 && t.length > 0 ) t += " و " ;
    convert3 = t ;
                                                     //// end
    txt = convert3 +    txt ;      
}
placeTag.innerHTML = txt + " "+ vahed;
}
}