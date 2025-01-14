// Nav bar section js starts
const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

menuIcon.addEventListener('click', function () {
  if (dropdownMenu.classList.contains('hidden')) {
    dropdownMenu.classList.remove('hidden');
    dropdownMenu.classList.add('dropdown-enter', 'dropdown-enter-active');
  }
  else {
    dropdownMenu.classList.add('hidden');
    dropdownMenu.classList.remove('dropdown-enter', 'dropdown-enter-active');
  }
});
// Nav bar section js ends

// Get references to all necessary DOM elements
const websiteBalanceElement = document.getElementById("website-balance");
const noakhaliBalanceElement = document.getElementById("noakhali-balance");
const feniBalanceElement = document.querySelector(".feni-balance");
const quotaBalanceElement = document.querySelector(".quota-balance");

const noakhaliInput = document.getElementById("noakhali-input");
const feniInput = document.getElementById("feni-input");
const quotaInput = document.getElementById("quota-input");

const noakhaliButton = document.getElementById("noakhali-button");
const feniButton = document.getElementById("feni-button");
const quotaButton = document.getElementById("quota-button");

const modal = document.getElementById("my_modal_1");
const closeModalButton = document.getElementById("close-modal");

// History Section 
const historySection = document.createElement("div");
document.body.appendChild(historySection);
historySection.className = "p-5 bg-gray-100"; 
historySection.innerHTML = `<h2 class='text-2xl font-bold'>Donation History</h2><ul id='donation-history' class='list-disc pl-5'></ul>`;
const donationHistoryList = document.getElementById("donation-history");

const mainSection = document.getElementById("main-section");

// Common function to handle donation
function handleDonation(section, inputElement, balanceElement) {
  const donationAmount = parseFloat(inputElement.value);
  const websiteBalance = parseFloat(websiteBalanceElement.textContent);

  // Validate donation amount
  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Oops!! Please Give a Valid Input!!");
    return;
  }

  if (donationAmount > websiteBalance) {
    alert("Oops!! You Exceed The Balance!! Try Later!");
    return;
  }

  // Update balances
  const currentSectionBalance = parseFloat(balanceElement.textContent);
  balanceElement.textContent = (currentSectionBalance + donationAmount);
  websiteBalanceElement.textContent = (websiteBalance - donationAmount);

  // Show confirmation modal
  modal.showModal();

  // Save donation history
  const date = new Date();
  const formattedDate = date.toLocaleString("en-GB", { timeZone: "Asia/Dhaka" });
  const historyItem = document.createElement("li");
  historyItem.textContent = `${donationAmount} BDT is donated on ${section} on ${formattedDate}`;
  donationHistoryList.appendChild(historyItem);

  // Clear the input field
  inputElement.value = "";
}

// Attach event listeners to buttons
noakhaliButton.addEventListener("click", () => {
  handleDonation(
    "Donate for Flood at Noakhali, Bangladesh",
    noakhaliInput,
    noakhaliBalanceElement
  );
});

feniButton.addEventListener("click", () => {
  handleDonation(
    "Donate for Flood Relief in Feni, Bangladesh",
    feniInput,
    feniBalanceElement
  );
});

quotaButton.addEventListener("click", () => {
  handleDonation(
    "Aid for Injured in the Quota Movement",
    quotaInput,
    quotaBalanceElement
  );
});

// Close modal on button click
closeModalButton.addEventListener("click", () => {
  modal.close();
});

// Toggle between Donation and History sections

const historyButton = document.getElementById('history-button');
const donationButton = document.getElementById('donation-button');

historyButton.addEventListener('click', function () {

  // show history & hide donation 
  historySection.style.display = 'block';
  mainSection.style.display = 'none';
 
  historyButton.classList.add(
    'btn',
    'mr-4',
    'bg-[#B4F461]',
    'border-none',
    'text-xl',
    'text-black'
  );
  historyButton.classList.remove(
    'btn-outline'
  );

  donationButton.classList.remove(
    'mr-4',
    'bg-[#B4F461]',
    'border-none'
  );
  donationButton.classList.add(
    'btn-outline'
  );
});

donationButton.addEventListener('click', function () {
  // Show donation section and hide history section
  mainSection.style.display = 'block';
  historySection.style.display = 'none';

  // Highlight the donation button and unhighlight the history button
  donationButton.classList.add(
    'btn',
    'mr-4',
    'bg-[#B4F461]',
    'border-none',
    'text-xl',
    'text-black'
  );
  donationButton.classList.remove('btn-outline');

  historyButton.classList.remove(
    'mr-4',
    'bg-[#B4F461]',
    'border-none'
  );
  historyButton.classList.add('btn-outline');
});

// Initially set the history section to be hidden
historySection.style.display = 'none';
