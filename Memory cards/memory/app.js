
let attempt=0;
let br=0;
const images=document.querySelectorAll("img");

const srcArray=["./styles/materials/kebakraba.png","./styles/materials/gari.png","./styles/materials/lignjoslav.png","./styles/materials/kebakraba.png","./styles/materials/lignjoslav.png","./styles/materials/patrik.png","./styles/materials/sendi.png","./styles/materials/sendi.png","./styles/materials/sundjerbob.png","./styles/materials/sundjerbob.png","./styles/materials/patrik.png","./styles/materials/gari.png"]


for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        if (attempt === 0) {
            imageChange(this, i);
        } else {
            imageChangeAtp2(this, i, 1);
        }
    });
}

let indexNo1;;
let indexNo2;

function imageChange(image,i){
  
  image.src=srcArray[i];
  indexNo1=i;
  attempt++;
}
function imageChangeAtp2(image,i,delayInSeconds){
    image.src=srcArray[i];
    indexNo2=i;
    if(samePic(indexNo1,indexNo2)){
        
    
       
        setTimeout(function(){   

            images[indexNo1].remove();
            images[indexNo2].remove();
            if(isEnd()){
                console.log("Završena igra!");
                const end=document.createElement("h1");
                const gif=document.createElement("iframe");
                gif.src="https://giphy.com/embed/gPBKtKGk00TfD3D6mY" ;
                const  menu=document.getElementById("menu");
                end.textContent="GOOD GAME! You had "+ br + "  attempts!";
                end.style.color="#8B4513";
                end.style.textAlign="center";
                gif.style.display="block";
                gif.style.margin = "0 auto";
                gif.style.width="480px";
                gif.style.height="270px";
                gif.style.border="none";
                gif.className="giphy-embed";
                gif.allowFullscreen=true;
                menu.insertAdjacentElement("afterend",end);
                end.insertAdjacentElement("afterend",gif);
            }
         },delayInSeconds*1000);
        
    
        }
        
       
    
    
   
    setTimeout(function(){
        const items= document.querySelectorAll("img");
        for(let j=0;j<items.length;j++){
        items[j].src="./styles/materials/qm.png";
        document.body.style.cursor="not-allowed";

        }
    
    },delayInSeconds*1000);


    
    attempt--;
  }

  function samePic(indexNo1,indexNo2){
 
    
       if(srcArray[indexNo1]==srcArray[indexNo2]){ 
        console.log("Slike su iste!");
        br++;
        return 1;
       }
       else{
        console.log("Slike nisu iste!");
        br++;
        return 0;
       }
    
  }
  function isEnd(){
    const leftImg = document.querySelectorAll("img");
   return leftImg.length===0;
  }



