        var body = {};
        var header = [];
        var all = [];
        var input = 0;
        var im = [];
        var elem = document.createElement("img");

        var bod = document.getElementsByTagName('body');

        var elements = document.getElementsByTagName('a');
        var ta = 0

// remove all <a> elements
  while (elements[0]){
   elements[0].parentNode.removeChild(elements[0])
}
  var tab = document.getElementsByTagName("table");
    if(tab){
    for(i=0; i<tab.length; i++){
        tab[i].setAttribute("id",i)
        tab[i].setAttribute("class","table table-dark")
    }
    }

        function appheader(){
          for (i=0; i< bod.length; i++){
               head =bod[0].querySelectorAll('header')
                }
          for(i=0; i<head.length; i++){
            if(head[i].nodeName == 'HEADER'){
            headf = head[i].querySelectorAll('h1,h2,h3,p')

          } }
          for(i=0; i<headf.length; i++){
            if(headf[i].nodeName == 'H2'){
               var para = document.createElement("h2");
                var node = document.createTextNode(headf[i].innerText);
                para.appendChild(node);

                var element = document.getElementById("conte");
                element.appendChild(para); 

            }
            if(headf[i].nodeName == 'H3'){
                var para = document.createElement("h3");
                var node = document.createTextNode(headf[i].innerText);
                para.appendChild(node);

                var element = document.getElementById("conte");
                element.appendChild(para); 

            }
            if(headf[i].nodeName == 'P'){
                var para = document.createElement("p");
                var node = document.createTextNode(headf[i].innerText);
                para.appendChild(node);

                var element = document.getElementById("conte");
                element.appendChild(para);                 
            }
          }
        }
       $(document).ready(function(){
        let cont = document.createElement('div');
        cont.setAttribute("id", "conte");
        document.body.appendChild(cont);


        let button = document.createElement('div');
        button.setAttribute("id", "btn");
        document.body.appendChild(button);
        appheader()

        all.push('header()&^%^%$#$%')
            for (i=0; i< bod.length; i++){
               mai = bod[0].querySelectorAll('main')
                }

          for(i=0; i<mai.length; i++){
            if(mai[i].nodeName == 'MAIN'){
                mainf = mai[i].querySelectorAll('figure,p,h4,table,q,ol')

          } }
          for (i=0; i<mainf.length; i++){
            if(mainf[i].nodeName == 'FIGURE'){
              im =mainf[i].querySelectorAll('img,figcaption')
            for(j=0; j<im.length; j++){

              if(im[j].nodeName == 'IMG'){
                all.push(im[j].src);
              }
                else if(mainf[i].nodeName == 'TABLE'){
               all.push('table')
        }
          if(im[j].nodeName == 'FIGCAPTION'){
          all.push(im[j].innerText + 'figca');

        }
      }
      }else if(mainf[i].nodeName == 'P' || mainf[i].nodeName == 'H4' ||  mainf[i].nodeName == 'Q'){
          all.push(mainf[i].innerText)
    }else if(mainf[i].nodeName == 'TABLE'){
      all.push('table') }

    else if(mainf[i].nodeName == 'OL'){
      list =k[i].querySelectorAll('li')
        for(j=0; j<list.length; j++){
          if(list[j].nodeName == 'LI'){
               all.push(list[j].innerText);
               }
            }
        
  }

          

                           
           let next= document.createElement('i');
            next.setAttribute("id", "next");
            next.onclick = nex;
            button.appendChild(next);
            document.getElementById('next').className += 'glyphicon glyphicon-forward';

            let ba= document.createElement('i');
            ba.setAttribute("id", "ba");
            ba.onclick = back;
            button.appendChild(ba);
            document.getElementById('ba').className += 'glyphicon glyphicon-backward';


}}); 
       function nex(){
       if(input<all.length-2){
                input = input + 1
          if(all[input].indexOf("header()&^%^%$#$%") !== -1){
            document.getElementById("conte").innerHTML = ""

            return appheader()
          }

          if(all[input].slice(-3) == 'jpg' || all[input].slice(-3) == 'png'){
                  if(all[input+1].indexOf("figca") !== -1){
                  document.getElementById("conte").innerHTML = all[input+1];
                  document.getElementById("conte").appendChild(elem);
                  elem.src = all[input]

                    input = input + 1;
                  }
                  else{document.getElementById("conte").innerHTML = "";
                  document.getElementById("conte").appendChild(elem);
                  elem.src = all[input]}
         }else if(all[input] == 'table'){
     var source = document.getElementById(ta);
     if(source){
       var destination = document.getElementById(ta);
       var copy = source.cloneNode(true);
         copy.setAttribute('id', 'TableA');
      //destination.parentNode.replaceChild(copy, destination);
      document.getElementById("bodyvid").innerHTML = '';
    document.getElementById("bodyvid").appendChild(copy);
    ta = ta + 1
    }


  }else{
                document.getElementById("conte").innerHTML = " ";


                var para = document.createElement("p");
                var node = document.createTextNode(all[input]);
                para.appendChild(node);

                var element = document.getElementById("conte");
                element.appendChild(para); 



    }
  }
          return input

}
function back(){
      if(input>0){ 
      input = input - 1  
                  if(all[input].indexOf("header()&^%^%$#$%") !== -1){
                      document.getElementById("conte").innerHTML = ""
                      return appheader()
                     }

                  if(all[input].indexOf("figca") !== -1){
                    if(all[input-1].slice(-3) == 'jpg' || all[input-1].slice(-3) == 'png'){
               var str=all[input].replace("figca", "");
                  document.getElementById("conte").innerHTML = str;
                  document.getElementById("conte").appendChild(elem);
                 elem.src = all[input-1]
                 input = input - 1;
                 return input;
                  } }
               else if(all[input].slice(-3) == 'jpg' || all[input].slice(-3) == 'png'){
                  document.getElementById("conte").innerHTML = "";
                document.getElementById("conte").appendChild(elem); 
                 elem.src = all[input]
                
                }
      else if(all[input] == 'table'){
        if(ta>0){
               var source = document.getElementById(ta);
     if(source){
       var destination = document.getElementById(ta);
       var copy = source.cloneNode(true);
         copy.setAttribute('id', 'TableA');
      //destination.parentNode.replaceChild(copy, destination);
      document.getElementById("bodyvid").innerHTML = '';
    document.getElementById("bodyvid").appendChild(copy);
    ta = ta + 1;
       }
      }
}
else{
               document.getElementById("conte").innerHTML = " ";
                var para = document.createElement("p");
                var node = document.createTextNode(all[input]);
                para.appendChild(node);

                var element = document.getElementById("conte");
                element.appendChild(para);


    }
  }
      return input

}
