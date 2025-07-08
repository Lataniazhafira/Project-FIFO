const tableBody = document.getElementById('tableBody');

const dataBarang = [
  { nama: "Meja", jenis: "Kayu", tanggal: "2025-07-08", status: "Tersedia" },
  { nama: "Kursi", jenis: "Plastik", tanggal: "2025-07-07", status: "Tersedia" }
];

function loadTable() {
  tableBody.innerHTML = "";
  dataBarang.forEach((item, index) => {
    const row = `<tr>
      <td>${index + 1}</td>
      <td>${item.nama}</td>
      <td>${item.jenis}</td>
      <td>${item.tanggal}</td>
      <td>${item.status}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

loadTable();
