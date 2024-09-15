function showFruitDetails(fruit) {
    const fruitDetails = {
        'Apple': 'Apples are nutritious and delicious!',
        'Banana': 'Bananas are rich in potassium.',
        'Orange': 'Oranges are a great source of vitamin C.'
    };
    
    document.getElementById('fruitName').textContent = fruit;
    document.getElementById('fruitDescription').textContent = fruitDetails[fruit];
    document.getElementById('fruitDetails').classList.remove('hidden');
}

