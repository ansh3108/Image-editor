// Initial References
const uploadButton = document.getElementById('upload-button');
const chosenImage = document.getElementById('chosen-image');
const imageContainer = document.querySelector('.image-container');
const filters = document.querySelectorAll('.editor input[type="range"]');

// Default filter values
let filterValues = {
    'hue-rotate': 0,
    sepia: 0
};

// Apply filters to the image
const applyFilters = () => {
    const filterString = `
        hue-rotate(${filterValues['hue-rotate']}deg) 
        sepia(${filterValues.sepia}%)
    `;
    chosenImage.style.filter = filterString;
};

// Update filter values and apply filters
filters.forEach(filter => {
    filter.addEventListener('input', (e) => {
        filterValues[e.target.id] = e.target.value;
        applyFilters();
    });
});

// Handle image upload
uploadButton.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            chosenImage.src = event.target.result;
            imageContainer.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});
