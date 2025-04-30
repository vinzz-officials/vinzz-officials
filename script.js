function openTab(tabId, element) {
  // Sembunyikan semua tab
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(c => c.classList.remove('active-tab'));

  // Hapus active class dari tombol
  const buttons = document.querySelectorAll('.tabs button');
  buttons.forEach(b => b.classList.remove('active'));

  // Tampilkan tab yang diklik
  document.getElementById(tabId).classList.add('active-tab');
  element.classList.add('active');
}
