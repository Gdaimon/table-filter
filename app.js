
(async () => {
  'use strict'

  let datos = []

  function cargarTabla(data) {
    const table = document.getElementById('table-data')

    for (let [index, user] of data.entries()) {
      const row = `
      <tr class='text-center hover:bg-blue-500'>
        <td class="py-4 px-6 border-b border-grey-light">${index + 1}</td>
        <td class="py-4 px-6 border-b border-grey-light">${user.first_name}</td>
        <td class="py-4 px-6 border-b border-grey-light">${user.last_name}</td>
        <td class="py-4 px-6 border-b border-grey-light">${user.email}</td>
      </tr>
      `
      table.innerHTML += row;
    }

  }

  async function consultarDatos() {
    const URL = "https://reqres.in/api/users"
    const response = await fetch(URL);
    const responseData = await response.json();
    cargarTabla(responseData.data)

  }

  consultarDatos()


})();