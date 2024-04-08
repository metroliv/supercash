function showmenu(){
  document.getElementById("menu1").style.display = "block";
}

function showhome() {
  document.getElementById("home").style.display = "block";
}
 function showRecruit() {
document.getElementById("recruit").style.display = "none";
}

function showBalance() {
  document.getElementById("home").style.display = "none";
  document.getElementById("recruit").style.display = "none";
  
  document.getElementById("team").style.display = "none";
}

function showTeam() {
  document.getElementById("home").style.display = "none";
  document.getElementById("recruit").style.display = "none";
  
  document.getElementById("team").style.display = "block";
}

document.getElementById("recruitLink").addEventListener("click", showRecruit);
document.getElementById("homeBtn").addEventListener("click", showHome);

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
  var successMessage = document.getElementById("successMessage");
  successMessage.textContent = "Joined successfully! Recruiter: " + recruiterName;
}

function fetchTransactionHistory() {
  // Placeholder data (replace with actual data fetched from the server)
  const transactions = [
    { date: '2024-03-15', description: 'Task Completion', amount: '$50' },
    { date: '2024-03-20', description: 'Bonus Reward', amount: '$20' },
    { date: '2024-03-25', description: 'Withdrawal', amount: '-$30' }
  ];
  const tableBody = document.querySelector('.transaction-history table tbody');
  tableBody.innerHTML = '';
  transactions.forEach(transaction => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${transaction.date}</td>
      <td>${transaction.description}</td>
      <td>${transaction.amount}</td>
    `;
    tableBody.appendChild(row);
  });
}

fetchTransactionHistory();
function showContent(id) {
            // Hide all content sections
            const contentSections = document.querySelectorAll('.content-section');
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the selected content section
            const selectedSection = document.getElementById(id);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }
        }
