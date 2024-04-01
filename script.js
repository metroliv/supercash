
function showmenu(){
  document.getElementById("menu1").style.display = "block";
}
function showRecruit() {
      document.getElementById("recruit").style.display = "block";
      document.getElementById("balance").style.display = "none";
      document.getElementById("team").style.display = "none";
    }

    function showHome() {
      document.getElementById("recruit").style.display = "none";
      document.getElementById("balance").style.display = "none";
      document.getElementById("team").style.display = "none";
    }

    function showBalance() {
      document.getElementById("recruit").style.display = "none";
      document.getElementById("balance").style.display = "block";
      document.getElementById("team").style.display = "none";
    }

    function showTeam() {
      document.getElementById("recruit").style.display = "none";
      document.getElementById("balance").style.display = "none";
      document.getElementById("team").style.display = "block";
    }

    // Event listeners to trigger functions
    document.getElementById("recruitLink").addEventListener("click", showRecruit);
    document.getElementById("homeBtn").addEventListener("click", showHome);
    document.getElementById("balanceBtn").addEventListener("click", showBalance);
    document.getElementById("teamBtn").addEventListener("click", showTeam);

   function copyLink() {
  var linkInput = document.getElementById("recruitmentLink");
  linkInput.value = window.location.href;
  linkInput.select();
  document.execCommand("copy");
}

function join() {
  var recruiterName = document.getElementById("recruiterName").value;
  if (recruiterName.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  // You can send recruiterName to server here to store it.

  var successMessage = document.getElementById("successMessage");
  successMessage.textContent = "Joined successfully! Recruiter: " + recruiterName;
}

