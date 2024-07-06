
    // JavaScript to dynamically populate the current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // JavaScript to dynamically populate the last modified date
    document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

    document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggleMenuButton();
    });

    function toggleMenuButton() {
        menuToggle.classList.toggle('open');
    }
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
      templeName: "Layton Utah",
      location: "Layton, Utah",
      dedicated: "2024, June, 16",
      area: 93539,
      imageUrl:
      "https://newsroom.churchofjesuschrist.org/media/960x720/Layton-Temple-exterior-rendering.jpg"
    },

    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 41010,
      imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Incontro_con_la_comunit%C3%A0_dei_Mormoni_%288665170678%29.jpg/220px-Incontro_con_la_comunit%C3%A0_dei_Mormoni_%288665170678%29.jpg"
    },
    
    {
      templeName: "Port-au-Prince, Haiti",
      location: "Port-au-Prince, Haiti",
      dedicated: "2019, September, 1",
      area: 10396,
      imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VV3sih92OO6EKobLDogIQCUf_DJW1RO9TA&s"
    },
  ];

    const Container = document.getElementById('temples-container');

    temples.forEach(temple => {
        const templeElement = document.createElement('div');
        templeElement.classList.add('temple');

        templeElement.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area}</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}">
        `;

        Container.appendChild(templeElement);

    });