window.addEventListener('load', function (e) {
  const mainDiv = document.querySelector('.allLinks');
  labs.map((lab) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'card col-md-3');
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
