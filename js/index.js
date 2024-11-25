var tern = 0 ;
var progress = document.getElementById("progres").innerHTML;
console.log(progress);



var getid = document.getElementById('my').innerHTML ="Hi Mohamed ";
console.log(getid);


var arradyDone = [];
arradyDone.push(genRandom());
console.log(arradyDone);

console.log("--------------------------------------");

function genRandom() {
  var ran = Math.round(Math.random() * 4);
  return ran;
}

function search(x) {
  var searchReturn = 0;

  for (var i = 0; i < arradyDone.length; i++) {
    if (x == arradyDone[i]) {
      searchReturn = 1;
    }
  }

  return searchReturn;
}

function checkLength() {
  if (arradyDone.length == 5) {
    arradyDone.splice(0);

    console.log('arr after clear :' , arradyDone);
    
    arradyDone.push(genRandom());


    console.log( 'arr after clear and gen item :' , arradyDone);
    
  }
}

function genqoute() {
  switch (arradyDone[arradyDone.length-1]) {
   
    case 0:

    document.getElementById('my').innerHTML="حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيهِ تَوَكَّلتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ";
    document.getElementById("progres").innerHTML=`<div class="my-w0 bg-danger my-h "></div>>` ;
      console.log(progress);
    break;

    case 1:
        document.getElementById('my').innerHTML="بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلاَ فِي السّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ";
        document.getElementById("progres").innerHTML=`<div class="w-20 bg-danger my-h "></div>` ;
      console.log(progress);
        break;

    case 2:
        document.getElementById('my').innerHTML="لاَ إِلَهَ إِلاَّ اللَّهُ، وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ" ;
        document.getElementById("progres").innerHTML=`<div class="w-40 bg-danger my-h "></div>` ;
      console.log(progress);
        break;

    case 3:
        document.getElementById('my').innerHTML="سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ" ;
        document.getElementById("progres").innerHTML='<div class="w-60 bg-danger my-h "></div>' ;
      console.log(progress);
        break;

    case 4:
        document.getElementById('my').innerHTML="اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبَيِّنَا مُحَمَّدٍ" ;
        document.getElementById("progres").innerHTML=`<div class="w-80 bg-danger my-h "></div>` ;
      console.log(progress);
        break;

    case 5:
        document.getElementById('my').innerHTML="اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً" ;
        document.getElementById("progres").innerHTML=`<div class="w-100 bg-danger my-h "></div>` ;
      console.log(progress);
        break;

 
  }
}





function downbar() {
    switch (arradyDone.length) {
     
      case 0:
        document.getElementById("progres").innerHTML=`<div class="my-w0 my-main-col my-h " style="transition: 0.2s;"></div>` ;
        console.log(progress);
      break;
  
      case 1:
          document.getElementById("progres").innerHTML=`<div class="w-20 my-main-col my-h " style="transition: 0.2s;"></div>` ;
        console.log(progress);
          break;
  
      case 2:
          document.getElementById("progres").innerHTML=`<div class="w-40 my-main-col my-h " style="transition: 0.2s;"></div>` ;
        console.log(progress);
          break;
  
      case 3:
          document.getElementById("progres").innerHTML='<div class="w-60 my-main-col my-h " style="transition: 0.2s;"></div>' ;
        console.log(progress);
          break;
  
      case 4:
          document.getElementById("progres").innerHTML=`<div class="w-80 my-main-col my-h " style="transition: 0.2s;"></div>` ;
        console.log(progress);
          break;
  
      case 5:
          document.getElementById("progres").innerHTML=`<div class="w-100 my-main-col my-h " style="transition: 0.2s;"></div>` ;
        console.log(progress);
          break;
  
   
    }
  }
  












function task() {
tern ++ ;
//////////////////////////////////////////////////////

  genqoute()
  console.log('arradyDone[arradyDone.length] :' , arradyDone[arradyDone.length-1]);
  downbar()

////////////////////////////////////////////////////
if ( arradyDone.length != 5 ) {
    
    var randomVariable = genRandom();
    console.log("random variable is", randomVariable);
  
    console.log("arra", arradyDone);
  
    console.log("search res first task : ", search(randomVariable));
  
    if (search(randomVariable)) {
      console.log("he is founded will gen new one");
  
      while (search(randomVariable)) {
        randomVariable = genRandom();
      }
      console.log("the new random one is", randomVariable);
    }
  
    arradyDone.push(randomVariable);
  
    console.log(
      "search func result must be 1 is founded : ",
      search(randomVariable)
    );
    console.log("randomVariable inner if ", randomVariable, arradyDone);
  
    // console.log(randomVariable , arradyDone );
  
    console.log('arradyDone[arradyDone.length] :' , arradyDone[arradyDone.length-1]);
    
    console.log("-------------------------------------------");
    

}
else {
    checkLength();
}
}
