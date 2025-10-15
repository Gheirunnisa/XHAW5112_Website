document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".dropdown-content input[type='checkbox']");
  const feeDisplay = document.getElementById("totalFee");
  const registrationForm = document.getElementById("registrationForm");
  const dropBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  
  dropBtn.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");
  });

  
  window.addEventListener("click", function(e) {
    if (!e.target.matches('.dropbtn')) {
      dropdownContent.classList.remove("show");
    }
  });

  
  function updateButtonText() {
    const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
    dropBtn.textContent = selected.length > 0 ? selected.join(", ") : "Select Courses";
  }
  
  function calculateFee() {
    const selected = Array.from(checkboxes).filter(cb => cb.checked);
    let totalFee = 0;

    selected.forEach(cb => {
      totalFee += cb.dataset.type === "long" ? 1500 : 750;
    });

    
    const numSelected = selected.length;
    let discount = 0;
    if (numSelected === 1) discount = 0.05;
    else if (numSelected === 2) discount = 0.10;
    else if (numSelected >= 3) discount = 0.15;

    const discountedFee = totalFee * (1 - discount);

    
    feeDisplay.textContent = `Total Fee: R${discountedFee.toLocaleString()} (Discount: ${discount*100}%)`;

    updateButtonText();
  }

  checkboxes.forEach(cb => cb.addEventListener("change", calculateFee));

  
  registrationForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const selected = Array.from(checkboxes).filter(cb => cb.checked);

    if (!name || !email || selected.length === 0) {
      alert("Please fill all required fields and select at least one course.");
      return;
    }

    alert(`Registration successful!\nName: ${name}\nEmail: ${email}\nCourses: ${selected.map(c => c.value).join(", ")}\n${feeDisplay.textContent}`);

    registrationForm.reset();
    checkboxes.forEach(cb => cb.checked = false);
    dropBtn.textContent = "Select Courses";
    feeDisplay.textContent = "Total Fee: R0.00";
  });

  calculateFee(); 
});


    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Message sent! We'll get back to you soon.");
        contactForm.reset();
      });
    }
  