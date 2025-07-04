// Outing Form Submission
document.getElementById('outingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simulate approval (in real app, wait for warden response)
  setTimeout(() => {
    document.getElementById('qrSection').classList.remove('hidden');
    generateQRCode();
  }, 1500);
});

// Generate QR Code
function generateQRCode() {
  const qrData = `Student ID: 123 | Out: ${document.getElementById('outDate').value} | Return: ${document.getElementById('returnTime').value}`;
  new QRCode(document.getElementById('qrCode'), {
    text: qrData,
    width: 150,
    height: 150,
    colorDark: "#6a5acd",
  });
}

// Print QR
document.getElementById('printBtn').addEventListener('click', () => {
  window.print();
});