//script del slider
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n>slides.length){slideIndex=1}
  if(n<1){slideIndex = slides.length}

  for(i=0;i < slides.length;i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function plusSlides(n){
  showSlides(slideIndex += n);
}

//FILTROS
let btnFiltros = document.querySelectorAll(".filtro");
let productos = document.querySelectorAll(".item-producto");

btnFiltros.forEach(function(i){
  i.addEventListener('click', function(e){
    //quito la clase selected
    for(i=0;i<=4;i++){
      btnFiltros[i].classList.remove("selected");
    }

    //agrego la clase selected
    e.target.classList.add("selected");

    //tomo el id que selecciono
    var clase = e.target.id;

    if(clase=="todos"){
      productos.forEach(function(prod){
        prod.style.display = "block";
      })
    }else{
      productos.forEach(function(prod){
        if(prod.classList.contains(clase)){
          prod.style.display = "block";
        }else{
          prod.style.display = "none";
        }
      })
    }
  });
});

