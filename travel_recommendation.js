
function clearRecDetails() {
  document.getElementById('search').value = "";
  const location = document.getElementById('place1_name');
  const description = document.getElementById('place1_des');
  const img = document.getElementById('place1_img');
          
  const location2 = document.getElementById('place2_name');
  const description2 = document.getElementById('place2_des');
  const img2 = document.getElementById('place2_img');

  img.src = "./pics/person2.png";
  location.innerHTML = `<h6>Search Above</h6>`;
  description.innerHTML = `<p>To visit somewhere stunning!</p>`;

  img2.src = "./pics/person2.png";
  location2.innerHTML = `<h6>Search Above</h6>`;
  description2.innerHTML = `<p>To visit somewhere stunning!</p>`;
}

function showRecDetails(event) {
    event.preventDefault();

    fetch("./travel_recommendation_api.json")
    .then(response => response.json())
      .then(data => {
        usr_res = document.getElementById('search').value.toLowerCase();
        const location = document.getElementById('place1_name');
        const description = document.getElementById('place1_des');
        const img = document.getElementById('place1_img');
                
        const location2 = document.getElementById('place2_name');
        const description2 = document.getElementById('place2_des');
        const img2 = document.getElementById('place2_img');

      if (usr_res.includes('count')) {
        img.src = data.countries[0].cities[0].imageUrl;
        location.innerHTML = `<h6>${data.countries[0].cities[0].name}</h6>`;
        description.innerHTML = `<p>${data.countries[0].cities[0].description}</p>`;

        img2.src = data.countries[1].cities[0].imageUrl;
        location2.innerHTML = `<h6>${data.countries[1].cities[0].name}</h6>`;
        description2.innerHTML = `<p>${data.countries[1].cities[0].description}</p>`;

      }
      else if (usr_res.includes('beach')) {
        img.src = data.beaches[0].imageUrl;
        location.innerHTML = `<h6>${data.beaches[0].name}</h6>`;
        description.innerHTML = `<p>${data.beaches[0].description}</p>`;

        img2.src = data.beaches[1].imageUrl;
        location2.innerHTML = `<h6>${data.beaches[1].name}</h6>`;
        description2.innerHTML = `<p>${data.beaches[1].description}</p>`;
      }
      else if (usr_res.includes('temple')) {
        img.src = data.temples[0].imageUrl;
        location.innerHTML = `<h6>${data.temples[0].name}</h6>`;
        description.innerHTML = `<p>${data.temples[0].description}</p>`;

        img2.src = data.temples[1].imageUrl;
        location2.innerHTML = `<h6>${data.temples[1].name}</h6>`;
        description2.innerHTML = `<p>${data.temples[1].description}</p>`;
      }
      else {
        console.log("no response. Pleae try a different keyword.")
      }
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        const recInfo = document.getElementById('recForm');
        recInfo.innerHTML = `<p>Failed to fetch recs. Please try again.</p>`;
      });
    }

  
document.getElementById('recForm')
.addEventListener('submit', showRecDetails);

document.getElementById('recForm')
.addEventListener('clear', clearRecDetails);