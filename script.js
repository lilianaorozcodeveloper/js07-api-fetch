document.addEventListener('DOMContentLoaded', () => {
  fetchUserData();
  setInterval(fetchUserData, 60000); // Actualizar cada minuto

  function fetchUserData() {
    fetch('https://reqres.in/api/users?delay=3')
      .then(response => response.json())
      .then(data => {
        displayUserData(data.data);
      })
      .catch(error => console.error('Error getting data:', error));
  }

  function displayUserData(users) {
    const userData = document.getElementById('userData');
    userData.innerHTML = '';

    users.forEach(user => {
      const row = `
        <tr>
          <td>${user.id}</td>
          <td>${user.first_name}</td>
          <td>${user.last_name}</td>
          <td>${user.email}</td>
          <td><img src="${user.avatar}" alt="Avatar" class="avatar" style="width: 50px; height: 50px;"></td>
        </tr>
      `;
      userData.innerHTML += row;
    });
  }
  fetchUserData();
});




