let faqs = [];

document.getElementById('faqForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const faqInput = document.getElementById('faqInput').value;
    if (faqInput) {
        faqs.push(faqInput);
        displayFAQs();
        document.getElementById('faqInput').value = '';  // Clear the input after submission
    }
});

function displayFAQs() {
    const faqListElement = document.getElementById('faqList');
    faqListElement.innerHTML = '';  // Clear the existing FAQs

    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.textContent = `${index + 1}. ${faq}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => {
            deleteFAQ(index);
        });

        faqItem.appendChild(deleteButton);
        faqListElement.appendChild(faqItem);
    });
}

function deleteFAQ(index) {
    faqs.splice(index, 1);  // Remove the FAQ at the specified index
    displayFAQs();  // Re-display the updated FAQ list
}
