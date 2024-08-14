document.addEventListener('DOMContentLoaded', () => {
    fetch('it.json')
        .then(response => response.json())
        .then(data => {
            const ITList = document.getElementById('it-list');

            data.forEach(IT => {
                const ITDiv = document.createElement('div');
                ITDiv.className = 'it'; 

                const name = document.createElement('h3');
                name.textContent = `Name: ${IT.title}`;
                ITDiv.appendChild(name);

                
                const phone = document.createElement('p');
                phone.textContent = `Number: ${IT.phone}`;
                ITDiv.appendChild(phone);

                const address = document.createElement('p');
                address.textContent = `Address: ${IT.address}`;
                ITDiv.appendChild(address);

                if (IT.url) {
                    const mapLink = document.createElement('a');
                    mapLink.href = IT.url;
                    mapLink.textContent = `View on Google Maps`;
                    mapLink.target = '_blank'; // Open link in a new tab
                    ITDiv.appendChild(mapLink);
                } else {
                    const noMapLink = document.createElement('p');
                    noMapLink.textContent = `Map: Not available`;
                    ITDiv.appendChild(noMapLink);
                }


                if (IT.imageUrl) {
                    const image = document.createElement('img');
                    image.src = IT.imageUrl;
                    image.alt = `Image of ${IT.name}`;
                    image.className = 'it-image';
                    ITDiv.appendChild(image);
                } else {
                    const noImage = document.createElement('p');
                    noImage.textContent = `Image: Not available`;
                    ITDiv.appendChild(noImage);
                }

                ITList.appendChild(ITDiv);
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});