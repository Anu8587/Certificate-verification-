// List of verified certificate numbers
const verifiedCertificates = [
    "CT/2024/001", "CT/2024/002", "CT/2024/003", "CT/2024/004", "CT/2024/005",
    "CT/2024/006", "CT/2024/007", "CT/2024/008", "CT/2024/009", "CT/2024/010",
    "CT/2024/011", "CT/2024/012", "CT/2024/013", "CT/2024/014", "CT/2024/015",
    "CT/2024/016", "CT/2024/017", "CT/2024/018", "CT/2024/019", "CT/2024/020",
    "CT/2024/021", "CT/2024/022", "CT/2024/023", "CT/2024/024", "CT/2024/025",
    "CT/2024/026", "CT/2024/027", "CT/2024/028", "CT/2024/029"
];

// Function to verify the certificate number
function verifyNumber() {
    const input = document.getElementById('number-input').value.trim();
    const result = document.getElementById('result');

    if (verifiedCertificates.includes(input)) {
        result.textContent = 'Verified';
        result.style.color = 'green'; // Green text for verified
    } else {
        result.textContent = 'Not Verified';
        result.style.color = 'red'; // Red text for not verified
    }
}
