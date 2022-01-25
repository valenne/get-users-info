const dataFromFetchUrl = (async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10");
    if (response.status === 200) {
      const data = await response.json();

      const dataTemplate = document.getElementById("user-data");
      dataTemplate.innerHTML = "";
      const users = await data.results;
      console.log("from main", users);

      users.forEach((e) => {
        dataTemplate.innerHTML += `
        <div style="margin: 0 auto; text-align:center; display: flex; flex-direction: column; justify-content: center; align-items: center">
          <img style="width: 70px;" src="${e.picture.medium}" alt="user-imagen" />
          <p id="nombre">${e.name.title} ${e.name.first} ${e.name.last}</p>
          <a href="${e.email}">${e.email}</a>
          <p id="telefono">${e.cell}</p>
        </div>`;
      });
    } else if (response.status === 404) {
      console.log("No existe informacion 😪");
    }
  } catch (error) {
    console.log(error);
  }
})();
