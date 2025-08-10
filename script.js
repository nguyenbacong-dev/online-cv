const buttons = document.querySelectorAll('.nav-button');
const sections = document.querySelectorAll('.section-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Cập nhật nút active
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Lấy ID section
    const id = btn.getAttribute('data-section') + '-section';

    // Ẩn tất cả sections
    sections.forEach(sec => {
      sec.classList.add('hidden');
      sec.classList.remove('fade-in-active');
    });

    // Hiện section mới với hiệu ứng
    const activeSection = document.getElementById(id);
    activeSection.classList.remove('hidden');
    setTimeout(() => activeSection.classList.add('fade-in-active'), 10);
  });
});
