// Nav bar section js starts
const menuIcon = document.getElementById("menu-icon");
const dropdownMenu = document.getElementById("dropdown-menu");
const websiteBalanceElement = document.getElementById("website-balance");
const websiteBalanceDropdownElement = document.getElementById("website-balance-dropdown");

// Close the dropdown menu when clicking outside
function closeDropdownOnOutsideClick(event) {
  if (!dropdownMenu.contains(event.target) &&
    event.target !== menuIcon) {
    dropdownMenu.classList.add("hidden");
  }
}

menuIcon.addEventListener("click", function () {
  dropdownMenu.classList.toggle("hidden");
});

document.addEventListener("click", closeDropdownOnOutsideClick);

// Ensure balance syncing between website-balance and website-balance-dropdown
function syncBalances() {
  const currentBalance = parseFloat(websiteBalanceElement.textContent);
  websiteBalanceDropdownElement.textContent = currentBalance;
}

// Run sync initially and whenever balance updates
syncBalances();

// Observe changes in website-balance and update website-balance-dropdown
const observer = new MutationObserver(syncBalances);
observer.observe(websiteBalanceElement, { childList: true });