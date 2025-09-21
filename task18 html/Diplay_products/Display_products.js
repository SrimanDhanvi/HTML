
async function getUsers() {
    try {
        const response = await fetch('https://fakestoreapi.com/users', {
            method: 'GET'
        });
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        displayUsers(parsedResponse)
    } catch (error) {
        console.log(error);
    }
}

getUsers();

    function displayUsers(parsedResponse) {
                const userList = document.getElementById('users-list');
        let userstr = '';
        parsedResponse.forEach((user) => {
            userstr += `
      <div class="card">
          <h2>${user.name.firstname + " " + user.name.lastname}</h2>
         <p><strong>Username:</strong> ${user.username}</p>
         <p><strong>Email:</strong> ${user.email}</p>
         <p><strong>Phone:</strong> ${user.phone}</p>
         <div class="address">
           <h4>Address</h4>
           <p><strong>Street:</strong> ${user.address.street}</p>
           <p><strong>City:</strong> ${user.address.city}</p>
           <p><strong>Zipcode:</strong> ${user.zipcode}</p>
           <p><strong>Geo:</strong> ${user.feolocation}</p>
         </div> 
       </div>
    `;
        });
        userList.innerHTML = userstr;
    }

