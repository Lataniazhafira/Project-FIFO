// LOGIN PAGE SCRIPT
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === "admin" && password === "12345") {
      window.location.href = "fifo.html";
    } else {
      alert("Username atau password salah!");
    }
  });
}

// FIFO PAGE SCRIPT
const itemForm = document.getElementById('itemForm');
const itemList = document.getElementById('itemList');
const removeBtn = document.getElementById('removeItem');

let items = [];

if (itemForm) {
  itemForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('itemName').value;
    const qty = parseInt(document.getElementById('itemQty').value);
    const date = document.getElementById('itemDate').value;

    items.push({ name, qty, date });

    displayItems();

    itemForm.reset();
  });
}

if (removeBtn) {
  removeBtn.addEventListener('click', function() {
    if (items.length > 0) {
      items.shift(); // FIFO: remove first item
      displayItems();
    } else {
      alert("Tidak ada barang untuk dikeluarkan.");
    }
  });
}

function displayItems() {
  itemList.innerHTML = "";

  items.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>${item.date}</td>
    `;
    itemList.appendChild(row);
  });
}
