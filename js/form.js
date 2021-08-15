document.querySelector("form").addEventListener("submit", (e) => {
  // prevent reloading the page
  e.preventDefault();
  // change modal styling
  document.querySelector(".progress").classList.remove("hidden");
  // store input values
  const first_name = document.getElementById("fname").value,
    last_name = document.getElementById("lname").value,
    gender = document.getElementById("gender").value,
    phone = document.getElementById("phone").value,
    email = document.getElementById("mail").value,
    promos = document.getElementById("promo").value;
  // post to jsonplaceholder api
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      phone: phone,
      email: email,
      promos: promos,
    }),
    // include format chatset
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // display response object from api
      document.querySelector(".progress").classList.add("hidden");
      document.querySelector(".complete").classList.remove("hidden");
      document.querySelector(".error").classList.add("hidden");
      console.log(data);
    })
    .catch((err)=>{
      document.querySelector(".progress").classList.add("hidden");
      document.querySelector(".complete").classList.remove("hidden");
      document.querySelector(".error").classList.remove("hidden");
      console.log(err);
    });
});
