
function displaydata(data) {
    let select = document.querySelector("#select");
    select.innerHTML = ""; // Clear any existing options
  
    for (const currency in data) {
      if (data.hasOwnProperty(currency)) { // Check if the property belongs to the data object
        let value = data[currency].code;  // Access the currency code directly
        let label = data[currency].value
        let option = document.createElement("option");
        option.textContent = value;
        option.value = label; // assigns the value from label to option.value.
        // console.loh(option.value)
        select.appendChild(option);
      }
    }
  }
 
document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector(".menu");
    let menubar = document.querySelector(".menu-icon").addEventListener("click", () => {
        if (menu.style.right === "0px") {
            menu.style.right = "-400px"; 
            menu.style.display ="none"
            // menu.style.overflow = "hidden";
        } else {
            menu.style.right = "0px";
            menu.style.display = "block";
            // menu.style.transition = "all 1s ease-out";

        }
    });
    document.querySelector("#btn").addEventListener("click",(e) => {
      e.preventDefault();
      let select = document.querySelector("#select");
      // console.loh(select)
      let amount = parseFloat(document.querySelector("#amount").value);
      let covertcurrency =  parseFloat(select.value);
      // console.log(covertcurrency)
    let covertammout = amount * covertcurrency;
     let demo = document.querySelector("#demo");
     demo.innerHTML = `You have ${covertammout.toFixed(2)} units of your selected currency`;
    }
    )
  });


