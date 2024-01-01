
document.addEventListener("DOMContentLoaded", () => {

    const my_form = document.querySelector("form").onsubmit = () => {

       // Capture input value
         const user_name =  document.querySelector("#name").value;  

         document.querySelector("#submit_button").onkeyup = () => {
           
           document.querySelector("form").style.display = "none";
         }
         
       //   Modify the h1 element
        const message = document.querySelector('#greeting').innerHTML = `A very happy new year to you, ${user_name}\
          <br> May God open new doors of happiness, success <br> and prosperity for you in 2024 and beyond.`;

       //    stop form submission
         return false;
     }


}

);





