document.addEventListener('DOMContentLoaded', () => {
    fetch('shopping.json')
        .then(response => response.json())
        .then(data => {
            const shoppingList = document.getElementById('shopping-list');

            data.forEach(shopping => {
                const shoppingDiv = document.createElement('div');
                shoppingDiv.className = 'shopping'; 

               
                const name = document.createElement('h3');
                name.textContent = `Name: ${shopping.title}`;
                shoppingDiv.appendChild(name);

                
                const phone = document.createElement('p');
                phone.textContent = `Phone Number: ${shopping.phone}`;
                shoppingDiv.appendChild(phone);

                const totalScore = document.createElement('p');
                totalScore.textContent = `Rating: ${shopping.totalScore} ⭐`;
                shoppingDiv.appendChild(totalScore);

                const address = document.createElement('p');
                address.textContent = `Address: ${shopping.address}`;
                shoppingDiv.appendChild(address);

                if (shopping.url) {
                    const mapLink = document.createElement('a');
                    mapLink.href = shopping.url;
                    mapLink.textContent = `View on Google Maps`;
                    mapLink.target = '_blank'; // Open link in a new tab
                    shoppingDiv.appendChild(mapLink);
                } else {
                    const noMapLink = document.createElement('p');
                    noMapLink.textContent = `Map: Not available`;
                    shoppingDiv.appendChild(noMapLink);
                }


                if (shopping.imageUrl) {
                    const image = document.createElement('img');
                    image.src = shopping.imageUrl;
                    image.alt = `Image of ${shopping.name}`;
                    image.className = 'shopping-image';
                    shoppingDiv.appendChild(image);
                } else {
                    const noImage = document.createElement('p');
                    noImage.textContent = `Image: Not available`;
                    shoppingDiv.appendChild(noImage);
                }

                shoppingList.appendChild(shoppingDiv);
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});

