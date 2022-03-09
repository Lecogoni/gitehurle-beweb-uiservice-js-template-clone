window.onload = function(){

  displaySpaceGrid()

}
  


function displaySpaceGrid(){

  let template = document.querySelector("#space-grid-template");

  spaces.forEach(space => {

    let clone = document.importNode(template.content, true);
    clone.querySelector("img").src = space.img[0];
    clone.querySelector("h2 a").innerText = space.nomination;
    clone.querySelector("h2 a").innerText = space.nomination;
    clone.querySelector(".price-a").innerText = "TARIF | € " + space.price;
    clone.querySelector(".surface").innerHTML = space.surface + "m<sup>2</sup>";
    clone.querySelector(".people").innerText = space.people;
    clone.querySelector(".beds").innerText = space.beds;
    clone.querySelector(".baths").innerText = space.baths;

    document.querySelector("#spaces-wrapper").appendChild(clone)
  });

}