async function getlistThanApi() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log(response);

    const listText = await response.json();

    // for (const i = 0; i > listText.length; i++) {
    //     console.log(listText[i].name);
    // }
    for (const user of listText) {
        console.log(user.name);

        document.querySelector("#persons").innerHTML += `<div class="card col-12 col-sm-6 col-md-4 col-lg-3 m-2 " style="width: 15rem">
            <img src="https://placebeard.it/640x36${listText.indexOf(user)} " class="mx-auto card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">ID number: 1822-${user.id}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${user.address.city} , ${user.address.zipcode}</li>
                <li class="list-group-item">company name: ${user.company.name}</li>
                <li class="list-group-item">skills: ${user.company.catchPhrase}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">${user.website}</a>
                <a href="#" class="card-link">${user.phone}</a>
            </div>`;
    }

    console.log(listText);
    return listText;
}

window.onload = () => {
    getlistThanApi();
};
console.log("on load");

function profileMaker() {
    document.querySelector(".card-group").innerHTML += `<div class="card" style="width: 15rem">
    <img src="https://xsgames.co/randomusers/avatar.php?g=male " class="card-img-top" alt="..." />
    <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">Id number:</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">city and zip code</li>
        <li class="list-group-item">company name</li>
        <li class="list-group-item">skills</li>
    </ul>
    <div class="card-body">
        <a href="#" class="card-link">web site</a>
        <a href="#" class="card-link">phone</a>
    </div>`;
}
