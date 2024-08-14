document.addEventListener('DOMContentLoaded', () => {
    fetch('restaurant.json')
        .then(response => response.json())
        .then(data => {
            const restaurantList = document.getElementById('restaurant-list');

            data.forEach(restaurant => {
                const restaurantDiv = document.createElement('div');
                restaurantDiv.className = 'restaurant';

                const name = document.createElement('h3');
                name.textContent = restaurant.name;
                restaurantDiv.appendChild(name);

                const title = document.createElement('p');
                title.textContent = `Name: ${restaurant.title}`;
                restaurantDiv.appendChild(title);

                if (restaurant.phone) {
                    const phone = document.createElement('p');
                    phone.textContent = `Phone Number: ${restaurant.phone}`;
                    restaurantDiv.appendChild(phone);
                } else {
                    const phoneNumber = document.createElement('p');
                    phoneNumber.textContent = `Phone Number: Not available`;
                    restaurantDiv.appendChild(phoneNumber);
                }

                const totalScore = document.createElement('p');
                totalScore.textContent = `Rating: ${restaurant.totalScore} ⭐`;
                restaurantDiv.appendChild(totalScore);

               
                const address = document.createElement('p');
                address.textContent = `Address: ${restaurant.address}`;
                restaurantDiv.appendChild(address);

                if (restaurant.url) {
                    const mapLink = document.createElement('a');
                    mapLink.href = restaurant.url;
                    mapLink.textContent = `View on Google Maps`;
                    mapLink.target = '_blank'; // Open link in a new tab
                    restaurantDiv.appendChild(mapLink);
                } else {
                    const noMapLink = document.createElement('p');
                    noMapLink.textContent = `Map: Not available`;
                    restaurantDiv.appendChild(noMapLink);
                }


                if (restaurant.imageUrl) {
                    const image = document.createElement('img');
                    image.src = restaurant.imageUrl;
                    image.alt = `Image of ${restaurant.name}`;
                    image.className = 'restaurant-image';
                    restaurantDiv.appendChild(image);
                } else {
                    const noImage = document.createElement('p');
                    noImage.textContent = `Image: Not available`;
                    restaurantDiv.appendChild(noImage);
                }

                restaurantList.appendChild(restaurantDiv);
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});