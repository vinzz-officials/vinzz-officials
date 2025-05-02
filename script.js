let isAnimating = false;

function openTab(tabName, btn) {
    if (isAnimating) return; // Blokir jika animasi sedang jalan
    isAnimating = true;

    const tabContents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tabs button');
    const selectedTab = document.getElementById(tabName);

    tabs.forEach(tab => tab.classList.remove('active'));
    btn.classList.add('active');

    // Cari tab yang sedang aktif
    const activeTab = document.querySelector('.tab-content.active-tab');

    // Tutup tab aktif kalau ada
    if (activeTab && activeTab !== selectedTab) {
        activeTab.classList.remove('active-tab', 'showing');
        activeTab.classList.add('hiding');

        setTimeout(() => {
            activeTab.classList.remove('hiding');
            activeTab.style.display = 'none';

            // Buka tab baru setelah yang lama selesai
            selectedTab.style.display = 'block';
            setTimeout(() => {
                selectedTab.classList.add('active-tab', 'showing');
                isAnimating = false; // Reset lock setelah animasi buka selesai
            }, 10);
        }, 600);
    } else if (!activeTab) {
        // Kalau belum ada tab yang aktif
        selectedTab.style.display = 'block';
        setTimeout(() => {
            selectedTab.classList.add('active-tab', 'showing');
            isAnimating = false;
        }, 10);
    } else {
        // Klik tab yang sama (no action)
        isAnimating = false;
    }
}
