let all_users = [];

function load_users(){
    fetch('./user.json')
    .then(
        function(response){
            return response.json();
        }
    )
    .then(
        function(data){
            all_users = data;
        }
    )
}

function user_form_handler(){

    console.log(this);

    let formdata  = new FormData(this);

    fetch('/user.json', {
        method: "POST",
        body: formdata
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {   
        console.log(data);
    })

    return false;
}




window.onload = function() {
    load_users();
    let form = document.getElementById("signINForm");
    form.onsubmit = user_form_handler;

}