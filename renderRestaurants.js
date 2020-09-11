function renderRestaurants(restaurants) {
    // set new variable that represents new div for restuarants, 
    //while map will repeat the same function over every element
    let restaurantHTML = restaurants.map(function(restaurant) {
       //calling for restauarantHTML to return the following elements....
        return `
        
            <div class="bg-light rounded p-2 w-25 m-2">
            <h3>${restaurant.name}</h3>
            <h5 class="text-secondary">${restaurant.type}</h5>
            <div style="color: lightgreen; font-weight: bold;">${'$'.repeat(restaurant.priceRating)}</div>
            </div>
    
        `
        //created new div for returning elements
        //on heading3, we wants object restaurant and calling on name 
        //on heading5, we weant to call object restaurant and its corresponding type
        //on heading6, we want to call onject restaurant and its corresponding type
    })
//return that defined variable restaurantHTML will join together all the data types
        return `
        <div class="mt-5 d-flex justify-content-center align-items-start">${restaurantHTML.join('')}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}