const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

const images = [...galleryItems].map(item =>
item.querySelector("img").src
);

/* Open Lightbox */
galleryItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        currentIndex=index;
        showImage();
        lightbox.style.display="flex";
    });
});

function showImage(){
    lightboxImg.src=images[currentIndex];
}

/* Next Image */
nextBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex+1)%images.length;
    showImage();
});

/* Previous Image */
prevBtn.addEventListener("click",()=>{
    currentIndex=
    (currentIndex-1+images.length)%images.length;
    showImage();
});

/* Close */
closeBtn.addEventListener("click",()=>{
    lightbox.style.display="none";
});

/* Keyboard Navigation */
document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display==="flex"){

        if(e.key==="ArrowRight"){
            currentIndex=
            (currentIndex+1)%images.length;
            showImage();
        }

        if(e.key==="ArrowLeft"){
            currentIndex=
            (currentIndex-1+images.length)%images.length;
            showImage();
        }

        if(e.key==="Escape"){
            lightbox.style.display="none";
        }
    }
});

/* Filter Buttons */
const buttons =
document.querySelectorAll(".filters button");

buttons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        buttons.forEach(b=>
        b.classList.remove("active"));

        btn.classList.add("active");

        const filter=
        btn.getAttribute("data-filter");

        galleryItems.forEach(item=>{

            if(filter==="all" ||
            item.classList.contains(filter)){
                item.style.display="block";
            }
            else{
                item.style.display="none";
            }
        });
    });
});

/* Loader */
window.addEventListener("load",()=>{

    setTimeout(()=>{
        document.getElementById("loader")
        .style.display="none";
    },1000);

});