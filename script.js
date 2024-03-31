
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
