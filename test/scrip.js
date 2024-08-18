document.addEventListener('DOMContentLoaded', function() {
    // Lấy form và các trường cần thiết
    const contactForm = document.getElementById('contactForm');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    contactForm.addEventListener('submit', function(event) {
        // Ngăn chặn hành động gửi form mặc định
        event.preventDefault();
        
        // Lấy giá trị từ các trường
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();

        // Kiểm tra tính hợp lệ của dữ liệu
        if (!name || !email || !message) {
            alert('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        // Kiểm tra định dạng email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Địa chỉ email không hợp lệ.');
            return;
        }

        // Hiển thị thông báo thành công
        alert(`Cảm ơn ${name}! Tin nhắn của bạn đã được gửi thành công.`);

        // Xóa dữ liệu trong form
        contactForm.reset();
    });
});