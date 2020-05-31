
(async () => {
  'use strict'

  let datos = []

  const $input = document.getElementById('input-filtro')
  $input.addEventListener('keyup', (event) => {
    filtrarDatos(event.target.value, [...datos])
  })

  function filtrarDatos(parametro, datos) {
    const palabra = parametro.trim();
    if (palabra) {
      let dataFiltrada = datos.filter((user) => buscarEnObjeto(user, palabra))
      cargarTabla(dataFiltrada);
    } else {
      cargarTabla(datos)
    }
  }

  function buscarEnObjeto(objecto, palabra) {
    for (let key in objecto) {
      if (objecto.hasOwnProperty(key)) {
        if (objecto[key]) {
          if (objecto[key].toString().toLowerCase().includes(palabra)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function cargarTabla(data) {
    const table = document.getElementById('table-data')
    table.innerHTML = ''
    for (let [index, user] of data.entries()) {
      const row = `
      <tr class='text-center hover:bg-blue-100'>
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
    try {
      const response = await fetch(URL);
      const responseData = await response.json();
      return new Promise((resolve, reject) => {
        resolve(responseData.data)
      })
    } catch (e) {
      return new Promise((resolve, reject) => reject(e))
    }
  }

  datos = await consultarDatos()
  cargarTabla(datos)

})();