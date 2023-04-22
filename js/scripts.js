
/*
function ChangeClass() {
    const box = document.getElementsByClassName('box')
    box.classList.add('rivit-vierekkain-ul', 'testi');
}
*/

    function Main()
    {
        addClass1(), addClass2(), addClass3(), addClass4(), addClass5(), addClass6(), 
        addClass7(), addClass8(), addClass9(), ChangeLinks(), AddIcons(), AddIconsPDF(),
        AddIconsMailto()
    }


    function addClass1() {
       var v = document.getElementById("box1");
       v.className += "rivit-vierekkain-ul";
    }

    function addClass2() {
        var v = document.getElementById("box2");
        v.className += "rivit-vierekkain-ul";
     }

     function addClass3() {
        var v = document.getElementById("box3");
        v.className += "rivit-vierekkain-ul";
     }

     function addClass4() {
        var v = document.getElementById("1-section");
        v.className += "section-1-flex";
     }

     function addClass5() {
        var v = document.getElementById("headi-1");
        v.className += "otsikot";
     }
     function addClass6() {
        var v = document.getElementById("headi-2");
        v.className += "otsikot";
     }
     function addClass7() {
        var v = document.getElementById("headi-3");
        v.className += "otsikot";
     }

     function addClass8() {
        var v = document.getElementById("taulu-plays");
        v.className += "taulukko";
     }

     function addClass9() {
        var v = document.getElementById("taulu-sonnets");
        v.className += "taulukko";
     }

     // SHOW BOX AFTER CLICK
     const btn = document.getElementById('btn');
     btn.addEventListener('click', () => {
       // 👇️ hide button (still takes up space on page)
       btn.style.visibility = 'hidden';
     
       // 👇️ show div
       const box = document.getElementById('box');
       box.style.visibility = 'visible';
     });
 

     /*
     function ChangeLinks() {
     const links0 = document.getElementsByTagName('a')[0]
     links0.classList.add('dotted-links')
     const links1 = document.getElementsByTagName('a')[1]
     links1.classList.add('dotted-links')
     const links2 = document.getElementsByTagName('a')[2]
     links2.classList.add('dotted-links')
     const links3 = document.getElementsByTagName('a')[3]
     links3.classList.add('dotted-links') 

     } */


     
     // käydään läpi linkit ja vaihdetaan styleksi dotted-links -class
      function ChangeLinks() {
      const links = document.getElementsByTagName('a');

      for(const link of links) {
      link.classList.add("dotted-links"); 
         }
      }

      function AddIcons (){

         var tlinks = document.querySelectorAll("a[target=_blank]");
         for (var x = 0; x < tlinks.length; x++) {
         tlinks[x].title = "Opens in new tab/window";
         var currentClass = tlinks[x].getAttribute("class");
         if (currentClass == null) currentClass = "";
         tlinks[x].setAttribute("class", currentClass + " new-tab");
         }
      }

     /* function AddIconsMailto (){

         const nodeList1 = document.querySelectorAll("a[href^='mailto:']");
          for (let i = 0; i < nodeList1.length; i++) {
            nodeList1[i].style.border = "10px solid red";
            nodeList1[i].style.backgroundColor = "green";
             }
       } */

       function AddIconsMailto (){

         var mlinks = document.querySelectorAll("a[href^='mailto:']");
         for (var x = 0; x < mlinks.length; x++) {
         mlinks[x].title = "Send email!";
         var currentClass = mlinks[x].getAttribute("class");
         if (currentClass == null) currentClass = "";
         mlinks[x].setAttribute("class", currentClass + " mailto-ikoni");
         }
       }





       function AddIconsPDF (){
         var plinks = document.querySelectorAll("a[href$='pdf']");
         for (var x = 0; x < plinks.length; x++) {
         plinks[x].title = "PDF file!";
         var currentClass = plinks[x].getAttribute("class");
         if (currentClass == null) currentClass = "";
         plinks[x].setAttribute("class", currentClass + " pdf-ikoni");
         }
 
       }


       /*
       TOIMII

       function AddIconsPDF (){

         const nodeList = document.querySelectorAll("a[href$='pdf']");
          for (let i = 0; i < nodeList.length; i++) {
             nodeList[i].style.border = "10px solid red";
             nodeList[i].style.backgroundColor = "blue";
            nodeList[i].setAttribute(" pdf-ikoni") 
             }
       } */
  
   
      
