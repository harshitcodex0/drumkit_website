// let drum = document.querySelectorAll('.drum')
// for(let i=0; i<drum.length; i++){
//     drum[i].addEventListener('click', function(){
//         alert("hello")
//     })
// }

let drum = document.querySelectorAll(".drum");
let i = 0;
while (i < drum.length) {
  drum[i].addEventListener("click", function () {
    // this.style.color="white";
    // let drumhtml = this.innerHTML;
    switch (this.innerHTML) {
      case "w":
        let ww = new Audio("./sounds/crash.mp3");
        ww.play();
        break;
      case "a":
        let aa = new Audio("./sounds/kick-bass.mp3");
        aa.play();
        break;
      case "s":
         let ss = new Audio("./sounds/snare.mp3");
        ss.play();
        break;
      case "d":
         let dd = new Audio("./sounds/tom-1.mp3");
        dd.play();
        break;
      case "j":
         let jj = new Audio("./sounds/tom-2.mp3");
        jj.play();
        break;
      case "k":
        let kk = new Audio("./sounds/tom-3.mp3");
        kk.play();
        break;
      case "l":
        let ll = new Audio("./sounds/tom-4.mp3");
        ll.play();
        break;


      default:
        break;
    }

  });
  i++;
}
