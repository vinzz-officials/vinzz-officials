function openTab(tabId, btn) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tabs button');

  contents.forEach(content => {
    // Hapus animasi sebelumnya
    content.classList.remove('active-tab', 'showing');
    if (content.id === tabId) {
      // Tambahkan animasi sedikit delay agar transition bekerja
      setTimeout(() => {
        content.classList.add('active-tab');
        requestAnimationFrame(() => {
          content.classList.add('showing');
        });
      }, 10);
    }
  });

  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
