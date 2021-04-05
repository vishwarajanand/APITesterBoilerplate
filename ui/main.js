// const axios = require('axios');
var btn = document.getElementById("btn").addEventListener("click", getData);
var div = document.getElementById("postsDiv");
var container_id = 0;

var URL = "http://localhost:3000"

function getData(){
    // Make a request for a user with a given ID
    axios.get(`${URL}/posts`)
    .then(function (response) {
        console.log(response);
        for (let index=0; index < 1; index++){
            div.innerHTML+=`<div class="col-4 m-1 border border-dark card mx-auto">
                <div class="card-body">
                    <p class="card-title">ID: ${response.data[container_id].id}</p>
                    <p class="card-title">TITLE: ${response.data[container_id].title}</p>
                    <p>BODY: ${response.data[container_id].body}</p>
                </div>
            </div>`;
            container_id += 1;
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
}
