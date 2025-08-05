(function () {
  emailjs.init('qeNvH-9bnSySpcihz'); // Your Public Key
})();

function showPopup(message, type) {
  const popup = document.createElement('div');
  popup.className = `popup ${type}`;
  popup.innerText = message;
  document.body.appendChild(popup);
  setTimeout(() => {
    popup.remove();
  }, 3000);
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_11zwmka", "template_mslby8k", this)
    .then(() => {
      showPopup("✅ Message sent successfully!", "success");
      this.reset();
    }, (error) => {
      console.error("FAILED...", error);
      showPopup("❌ Failed to send. Please check your network!", "error");
    });
});
