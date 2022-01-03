window.onload = function(){

  getSpaces()

}
  


function getSpaces(){
  const SPACES = [
    {
      id: 1, 
      type: 'chambre',
      nomination: 'chambre backend',
      surface: 30,
      beds: 1,
      baths: 1,
      people:2,
      description: 'top chambre vue sur mer',
      img: [
        'assets/img/property-6.jpg',
        'https://media.istockphoto.com/photos/3d-render-luxury-hotel-room-with-two-beds-picture-id1090539638?k=20&m=1090539638&s=612x612&w=0&h=FcRzwDLAQlpTvXq7sU3qUw7wKMlKyOyjfkcgOfsGfU8=',
        'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg',
        'https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1207490255-e1615485559611.jpg?fit=696,463'
      ],
      info: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
      price:50,
    },
    {
      id: 2,
      type: 'appartement',
      nomination: 'chambre node',
      surface: 50,
      beds: 2,
      baths: 1,
      people:4,
      description: 'top chambre vue sur mer',
      img: [
        'assets/img/property-3.jpg',
        'https://room-matehotels.com/images/img/aitana/hotel/galeria/aitana_gal-8.jpg',
        'https://static.onecms.io/wp-content/uploads/sites/28/2018/05/hotel-room-ONETHING0418.jpg',
        'https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg'
      ],
      info: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
      price:30,
    },
    {
      id: 3, 
      type: 'chambre',
      nomination: 'appartement not front',
      surface: 80,
      beds: 3,
      baths: 2,
      people:3,
      description: 'top chambre vue sur mer',
      img: [
        'assets/img/property-7.jpg',
        'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg',
        'http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg'
      ],
      info: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
      price:30,
    },
    {
      id: 4, 
      type: 'appartement',
      nomination: 'appartement duplex',
      surface: 100,
      beds: 3,
      baths: 2,
      people:6,
      description: 'Magnfifique appart en duplex',
      img: [
        'assets/img/property-10.jpg',
        'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg',
        'http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg'
      ],
      info: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
      price:70,
    }
  ]
  updateViewSpaces(SPACES)
}


function updateViewSpaces(spaces){

  let template = document.querySelector("#spaces-template");

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