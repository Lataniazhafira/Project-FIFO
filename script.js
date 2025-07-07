const inventory = [];

function tambahBarang() {
  const itemInput = document.getElementById("itemInput");
  const item = itemInput.value.trim();
  if (item) {
    inventory.push(item);
    itemInput.value = "";
    tampilkanInventory();
  } else {
    alert("Masukkan nama barang terlebih dahulu.");
  }
}

function keluarkanBarang() {
  if (inventory.length > 0) {
    const removedItem = inventory.shift();
    alert(`Barang '${removedItem}' dikeluarkan dari inventory.`);
    tampilkanInventory();
  } else {
    alert("Inventory kosong.");
  }
}

function tampilkanInventory() {
  const list = document.getElementById("inventoryList");
  list.innerHTML = "";
  inventory.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}
