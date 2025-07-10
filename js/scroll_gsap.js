document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);  //註冊GSAP滾動插件 這是使用GSAP必要的

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) { //創建一個CLASS類別 把這個類別丟進陣列(因為通常有很多個所以用陣列)
    hide(elem); // 確保element不會在動畫前就出現
    ScrollTrigger.create({
      trigger: elem,  //要觸發的元素
       //markers: true, //試著打開看看 (debug模式)
      start: `top bottom`, //開始的點
      end: `bottom top`, //結束點
      onEnter: function () {
        animateFrom(elem);   //元素進入觸發範圍 代入函數animateFrom(elem) 觸發動畫
      },
      onEnterBack: function () {  //元素反向 代入函數animateFrom(elem) 觸發動畫
        animateFrom(elem, -1);
      },
      onLeave: function () {  //離開時要隱藏元素
        hide(elem);
      },
    });
  });
});


 //以下這段都是在設定元素初始位置//
function animateFrom(elem, direction) {      //animateFrom(elem)函數定義在這
  direction = direction || 1;    //預設direction=1
  var x = 0,
    y = direction * 100, //垂直軸方向 
    d = 0;

  if (elem.hasAttribute("data-delay-sec")) {  //設置延遲屬性 參數=d
    d = elem.getAttribute("data-delay-sec");
  }

  if (elem.classList.contains("fromLeft")) { //X為水平軸 -100 = 左邊
    x = -100*direction;
    y = 0;
  } else if (elem.classList.contains("fromRight")) { //+100 = 右邊
    x = 100*direction;
    y = 0;
  }
//以下段落為元素要移動的位置 通常是原位 意味著 X Y 都是回歸(0,0)//

  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 }, //上面帶入參數X Y 代表移動距離
    {
      duration: 1.5,
      x: 0, //回到原本位置   
      y: 0,
      autoAlpha: 1, // opacity:1 且 visibility: visible
      ease: "expo",
      overwrite: "auto", // // 避免重疊動畫干擾
      delay: d,  //控制延遲時間
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 }); //一開始的opacity:0  且 visibility: hidden
}
