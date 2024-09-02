const certificateData = [
    { name: "Harry Potter", department: "City Co-ordination", certificateNumber: "CT/2024/001" },
    { name: "Vivek Subramani", department: "Ahmedabad City Co-ordination", certificateNumber: "CT/2024/002" },
    { name: "Vivek Subramani", department: "Media department", certificateNumber: "CT/2024/003" },
    { name: "Altaf Jawed", department: "City operation", certificateNumber: "CT/2024/004" },
    { name: "Vaidehi Bajaj", department: "Jaipur City Co-ordination", certificateNumber: "CT/2024/005" },
    { name: "Shiva Kumar", department: "Hyderabad City Co-ordination", certificateNumber: "CT/2024/006" },
    { name: "Santhosh S K", department: "Public Relations Department", certificateNumber: "CT/2024/007" },
    { name: "Gaurav", department: "Agra City Co-ordination", certificateNumber: "CT/2024/008" },
    { name: "Rishita Sen", department: "Research Team", certificateNumber: "CT/2024/009" },
    { name: "Rishita Sen", department: "Public Relations Department", certificateNumber: "CT/2024/010" },
    { name: "Aditya Harihar Iyer", department: "Mumbai City Co-ordination", certificateNumber: "CT/2024/011" },
    { name: "Aditya Raj", department: "Media Department", certificateNumber: "CT/2024/012" },
    { name: "Suchit Sharma", department: "Rameshwaram City Co-ordination", certificateNumber: "CT/2024/013" },
    { name: "Tushar Kumar", department: "Dehradun City Co-ordination", certificateNumber: "CT/2024/014" },
    { name: "Himanshu Yadav", department: "Prayagraj (Allahabad) City Co-ordination", certificateNumber: "CT/2024/015" },
    { name: "Kanika Chauhan", department: "Media Department", certificateNumber: "CT/2024/016" },
    { name: "Kanika Chauhan", department: "Documentation Department", certificateNumber: "CT/2024/017" },
    { name: "Shubh Singh Yadav", department: "Head Of City Co-ordination", certificateNumber: "CT/2024/018" },
    { name: "Saransh Gupta", department: "Documentation Department", certificateNumber: "CT/2024/019" },
    { name: "Anushka Singh", department: "Media Department", certificateNumber: "CT/2024/020" },
    { name: "Vaibhwee", department: "Muzaffarpur City Co-ordination", certificateNumber: "CT/2024/021" },
    { name: "Drashti Shah", department: "Anand, Gujarat City Co-ordination", certificateNumber: "CT/2024/022" },
    { name: "Shivaditya U.", department: "Pune City Co-ordination", certificateNumber: "CT/2024/023" },
    { name: "Harshit Mishra", department: "Head Of Media Department", certificateNumber: "CT/2024/024" },
    { name: "Ankur Kumar Jaiswal", department: "Prayagraj City Co-ordination", certificateNumber: "CT/2024/025" },
    { name: "Adarsh Kumar", department: "Bangalore City Co-ordination", certificateNumber: "CT/2024/026" },
    { name: "Sumit Singh", department: "Documentation Department", certificateNumber: "CT/2024/027" },
    { name: "Prachi Bothra", department: "Female's Department", certificateNumber: "CT/2024/028" },
    { name: "Ayush Raj", department: "Chandigarh and Jalandhar City Co-ordination", certificateNumber: "CT/2024/029" }
];

// Function to verify the certificate number and show the popup
function verifyNumber() {
    const input = document.getElementById('number-input').value.trim();
    const certificate = certificateData.find(cert => cert.certificateNumber === input);
    
    if (certificate) {
        showPopup(certificate.name, certificate.department, certificate.certificateNumber, 'Verified');
    } else {
        showPopup('', '', input, 'Not Verified');
    }
}

// Function to create and display the popup
function showPopup(name, department, certificateNumber, status) {
    // Create the popup container
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.backgroundColor = '#333'; // Dark background for better contrast
    popup.style.color = '#fff'; // White text for readability
    popup.style.border = '2px solid #555'; // Subtle border
    popup.style.borderRadius = '10px';
    popup.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    popup.style.zIndex = '1000';
    popup.style.textAlign = 'center';
    
    // Create the content for the popup
    popup.innerHTML = `
        <h2>${status}</h2>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
        ${department ? `<p><strong>Department:</strong> ${department}</p>` : ''}
        <p><strong>Certificate Number:</strong> ${certificateNumber}</p>
        <button onclick="closePopup(this)" style="padding: 10px 20px; background-color: #555; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Close</button>
    `;

    // Add the popup to the body
    document.body.appendChild(popup);
}

// Function to close the popup
function closePopup(button) {
    const popup = button.parentElement;
    popup.remove();
}
