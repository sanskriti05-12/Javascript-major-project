const openCloseHanBur = () => {
    let open = document.querySelector(".menu");

    if (open.style.display === "block") {
        open.style.display = "none"; 
    } else {
        open.style.display = "block";
    }
};




// // when user click in button of Home.html card open card data in the Book ride.html 
// let imageCar = document.getElementById('imageCar');
// let carName = document.querySelector("#carName").innerHTML = sessionStorage.getItem('carAlt');
// imageCar.src = sessionStorage.getItem('carImageSrc');
// console.log("Booking for: " + sessionStorage.getItem('carAlt'));


