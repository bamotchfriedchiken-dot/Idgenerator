document.getElementById("generateBtn").addEventListener("click", generateFakeId);

function generateFakeId() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      const user = data.results[0];
      document.getElementById("name").textContent = `${user.name.first} ${user.name.last}`;
      document.getElementById("gender").textContent = user.gender;
      document.getElementById("country").textContent = user.location.country;
      document.getElementById("avatar").src = user.picture.large;
      document.getElementById("email").textContent = user.email;
    })
    .catch(() => {
      alert("⚠️ Error generating identity. Please try again.");
    });
}

document.getElementById("refreshMailBtn").addEventListener("click", () => {
  alert("⏳ Feature not available yet. Coming soon!");
});
