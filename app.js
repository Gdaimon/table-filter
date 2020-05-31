
(async () => {
  'use strict'

  let datos = [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg",
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg",
    },
  ]

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

  cargarTabla(datos)


})();