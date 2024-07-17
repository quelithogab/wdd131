    // JavaScript to dynamically populate the current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // JavaScript to dynamically populate the last modified date
    document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

const products = [
    {
      id: 'fc-1888',
      name: 'flux capacitor',
      avg_rating: 4.5
    },
    {
      id: 'fc-2050',
      name: 'power laces',
      avg_rating: 4.7
    },
    {
      id: 'fs-1987',
      name: 'time circuits',
      avg_rating: 3.5
    },
    {
      id: 'ac-2000',
      name: 'low voltage reactor',
      avg_rating: 3.9
    },
    {
      id: 'jj-1969',
      name: 'warp equalizer',
      avg_rating: 5.0
    }
  ];

  // Populate product options dynamically
  const productSelect = document.getElementById('productName');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });


  // Increment review counter in localStorage on form submission
  document.querySelector('form').addEventListener('submit', function() {
    if (localStorage.getItem('reviewCount')) {
      localStorage.setItem('reviewCount', parseInt(localStorage.getItem('reviewCount')) + 1);
    } else {
      localStorage.setItem('reviewCount', 1);
    }
  });