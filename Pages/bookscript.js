const featchData = async () => {
    let url = `http://localhost:3000/BoolCarList`;
    let res = await fetch(url, { method: "GET" });
    let data = await res.json()

    console.log(data);

    let show = document.querySelector("#display");

    data.map(Display = (item) => {

        show.innerHTML +=
            `<div id="BoolingMainReciptDiv">
                         <div id="imageDiv">
                             <img src="${item.image}" alt="" id="imageCarsForm">
                         </div>
                         <div id="DetailsReciptForm">
                             <h1 id="UserName">${item.carname}</h1>
                             <div id="normalDetails">
                                 <strong id="nameFrom">Name: ${item.name}</strong>
                                 <strong id="ageFrom">Age: ${item.age}</strong>
                                 <strong id="numberFrom">Phone: ${item.number}</strong>
                                 <strong id="AddharFrom">Addhar: ${item.addhar}</strong>
                             </div>
                             <div id="DestinyDetails">
                                 <strong id="picup">${item.picuplocation}</strong>
                                 <strong id="Destiny">${item.droplocation}</strong>
                                 <strong id="Destiny"> ₹${item.Distance}</strong>
                             </div>
                             <div id="RidesCencel">
                                 <input type="submit" value="Cancel Ride" onclick="CancelRide('${item.id}')">
                                 <input type="submit" value="Feedback">
                             </div>
                        </div>
                    </div>`
    })
}




const CancelRide = async (id) => {
    let url = `http://localhost:3000/BoolCarList/${id}`;
     await fetch(url, { method: "DELETE" });
};




// const FillForm = async (event) => {
//     // Taking all important IDs
//     let PicupLocation = document.querySelector("#picupForm").value;
//     let DropLocation = document.querySelector("#dropForm").value;
//     let userFormName = document.querySelector("#name1").value;
//     let imageCarsForm1 = document.querySelector("#imageCarsForm"); // Image element
//     let number1CarsImage = document.querySelector("#number1").value;
//     let userAgeForm = document.querySelector("#age1").value;
//     let userAddharForm = document.querySelector("#addhar1").value;
//     let userCarName = document.querySelector("#carName").value;
//     let userDistance = document.querySelector("#distance").value;


// // Input fields
// let userNameField = document.querySelector("#name1");
// let userNumberField = document.querySelector("#number1");
// let userAgeField = document.querySelector("#age1");
// let userAadhaarField = document.querySelector("#addhar1");

// // Validation
// if (userNameField.value === "") {
//     userNameField.style.border = "2px solid red";
//     userNameField.focus();
//     return false;
// }

// if (isNaN(userNumberField.value) || userNumberField.value === "") {
//     userNumberField.style.border = "2px solid red"; 
//     userNumberField.focus();
//     return false;
// }

// if (isNaN(userAgeField.value) || parseInt(userAgeField.value) < 18) {
//     userAgeField.style.border = "2px solid red"; 
//     userAgeField.focus();
//     return false;
// }

// if (userAadhaarField.value === "" || isNaN(userAadhaarField.value)) {
//     userAadhaarField.style.border = "2px solid red";
//     userAadhaarField.focus();
//     return false;
// }





//     // Setting the car image from session storage
//     if (sessionStorage.getItem("carImageSrc")) {
//         imageCarsForm1.src = sessionStorage.getItem("carImageSrc");
//         userCarName = document.querySelector("#carName").innerHTML = sessionStorage.getItem('carAlt');
//     }

//     let url = `http://localhost:3000/BoolCarList`;

//     try {
//         let response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 name: userFormName,
//                 number: number1CarsImage,
//                 age: userAgeForm,
//                 addhar: userAddharForm,
//                 carname: userCarName,
//                 picuplocation: PicupLocation,
//                 droplocation: DropLocation,
//                 distance: userDistance,
//             }),
//         });
    
//         if (response.ok) {
//             alert("Appointment booked successfully!");
//             location.href = "/Pages/Cards.html";
//         } else {
//             alert("Failed to book appointment. Please try again.");
//         }
//     } catch (error) {
//         console.error("An error occurred:", error);
//         alert("An error occurred. Please check your connection.");
//     }
    

//     return false;
// };

const FillForm = async (event) => {
    // Prevent default action of the button
    event.preventDefault();

    // Taking all important IDs
    let PicupLocation = document.querySelector("#picupForm").value;
    let DropLocation = document.querySelector("#dropForm").value;
    let userFormName = document.querySelector("#name1").value;
    let imageCarsForm1 = document.querySelector("#imageCarsForm"); // Image element
    let number1CarsImage = document.querySelector("#number1").value;
    let userAgeForm = document.querySelector("#age1").value;
    let userAddharForm = document.querySelector("#addhar1").value;
    let userCarName = document.querySelector("#carName").value;
    let userDistanceElement = document.querySelector("#distance");
    let userCarnames = document.querySelector("#Car").value;

    userDistanceElement.value = 300;



    // Input fields
    let userNameField = document.querySelector("#name1");
    let userNumberField = document.querySelector("#number1");
    let userAgeField = document.querySelector("#age1");
    let userAadhaarField = document.querySelector("#addhar1");
    let userPriceField = document.querySelector("#rupay").value;

    // Validation
    if (userNameField.value === "") {
        userNameField.style.border = "2px solid red";
        userNameField.focus();
        return false;
    }

    if (isNaN(userNumberField.value) || userNumberField.value === "") {
        userNumberField.style.border = "2px solid red"; 
        userNumberField.focus();
        return false;
    }

    if (isNaN(userAgeField.value) || parseInt(userAgeField.value) < 18) {
        userAgeField.style.border = "2px solid red"; 
        userAgeField.focus();
        return false;
    }

    if (userAadhaarField.value === "" || isNaN(userAadhaarField.value)) {
        userAadhaarField.style.border = "2px solid red";
        userAadhaarField.focus();
        return false;
    }

    // Setting the car image from session storage
    // if (sessionStorage.getItem("carImageSrc")) {
    //     console.log("carImageSrc exists:", sessionStorage.getItem("carImageSrc"));
    //     imageCarsForm1.src = sessionStorage.getItem("carImageSrc");
    //     userCarName = document.querySelector("#carName").innerHTML = sessionStorage.getItem('carAlt');
    //     alert(userCarName);
    //     alert("lfhkjsdfkjdsf");
    // } else {
    //     console.log("carImageSrc does not exist in sessionStorage.");
    // }
    

    let url = `http://localhost:3000/BoolCarList`;

    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: userFormName,
                number: number1CarsImage,
                age: userAgeForm,
                addhar: userAddharForm,
                carname: userCarnames,
                picuplocation: PicupLocation,
                droplocation: DropLocation,
                Distance: userPriceField,
            }),
        });

        if (response.ok) {
            // alert("Appointment booked successfully!");
            location.href = "Cards.html";
        } else {
            alert("Failed to book appointment. Please try again.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred. Please check your connection.");
    }

    return false;
};