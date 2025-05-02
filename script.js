
function openTab(tabId, btn) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tabs button');

  contents.forEach(content => {
    if (content.id === tabId) {
      content.classList.add('active-tab');
    } else {
      content.classList.remove('active-tab');
    }
  });

  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
  
