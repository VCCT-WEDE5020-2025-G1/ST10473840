document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();

  // Basic validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("responseMsg");

  if (name === "" || email === "" || message === "") {
    response.textContent = "Please fill in all required fields.";
    response.style.color = "red";
  } else {
    response.textContent = "Message sent successfully! We’ll get back to you soon.";
    response.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});
