window.addEventListener('load', function (e) {
  // async function getData(page) {
  //   let res = await fetch(
  //     `https://jsonmock.hackerrank.com/api/countries?page=${page}`
  //   );
  //   let dt = await res.json();
  //   console.log('Output for: getData -> dt', dt);
  //   return dt;
  //   // fetch(`https://jsonmock.hackerrank.com/api/countries?page=${page}`)
  //   //   .then((response) => response.json())
  //   //   .then((data) => console.log(data));
  // }
  // getData(1);

  ('use strict');

  async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
    let name;
    let res = await fetch(
      `https://jsonmock.hackerrank.com/api/countries?page=1`
    );
    let data = await res.json();
    let countries = data.data;

    async function getData(page) {
      res = await fetch(
        `https://jsonmock.hackerrank.com/api/countries?page=${page}`
      );
      data = await res.json();
    }

    for (let i = 0; i < countries.length; i++) {
      if (countries[i].alpha2Code === code) {
        console.log(
          'Output for: getCountryName -> countries[i]',
          countries[i].name
        );
        return (name = countries[i].name);
      }
    }
    if (data.per_page == data.total) {
    } else {
      for (let i = 1; i <= data.total_pages; i++) {
        for (let j = 0; j < countries.length; j++) {
          if (countries[j].alpha2Code === code) {
            console.log(
              'Output for: getCountryName -> countries[i]',
              countries[i].name
            );
            return (name = countries[i].name);
          }
          if (j == countries.length && countries[j].alpha2Code !== code) {
            console.log(
              'Output for: getCountryName -> countries[i]',
              countries[i].name
            );
            getData(i + 1);
          }
        }
      }
    }

    return name;
  }

  async function myFunc() {
    let name = await getCountryName('DZ');
    console.log('Output for: myFunc -> name', name);
  }
  myFunc();

  const mainDiv = document.querySelector('.allLinks');
  const myLabs = labs.map((lab) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'card');
    div.style.width = '18rem';
    div.innerHTML = `
    <img src=${lab.imgUrl}${lab.imgName}.${lab.ext} class="card-img-top" alt=${lab.name}>
  <div class="card-body">
  <p class="text-muted">Type: ${lab.type}</p>
  <a href=${lab.path} class="myLink" >${lab.name}</a>
  <p class="text-muted">Completed: ${lab.completed}</p>
    <p class="text-muted"> ${lab.description}</p>
  </div>

  `;
    mainDiv.appendChild(div);
  });
});
