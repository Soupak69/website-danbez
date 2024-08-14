document.addEventListener('DOMContentLoaded', () => {
    fetch('transport.json')
        .then(response => response.json())
        .then(data => {
            const transportList = document.getElementById('transport-list');

            data.forEach(transport => {
                const transportDiv = document.createElement('div');
                transportDiv.className = 'transport'; 

                const name = document.createElement('h3');
                name.textContent = `Name: ${transport.title}`;
                transportDiv.appendChild(name);

                
                const phone = document.createElement('p');
                phone.textContent = `Number: ${transport.phone}`;
                transportDiv.appendChild(phone);

                const address = document.createElement('p');
                address.textContent = `Address: ${transport.address}`;
                transportDiv.appendChild(address);

                if (transport.url) {
                    const mapLink = document.createElement('a');
                    mapLink.href = transport.url;
                    mapLink.textContent = `View on Google Maps`;
                    mapLink.target = '_blank'; // Open link in a new tab
                    transportDiv.appendChild(mapLink);
                } else {
                    const noMapLink = document.createElement('p');
                    noMapLink.textContent = `Map: Not available`;
                    transportDiv.appendChild(noMapLink);
                }


                if (transport.imageUrl) {
                    const image = document.createElement('img');
                    image.src = transport.imageUrl;
                    image.alt = `Image of ${transport.name}`;
                    image.className = 'transport-image';
                    transportDiv.appendChild(image);
                } else {
                    const noImage = document.createElement('p');
                    noImage.textContent = `Image: Not available`;
                    transportDiv.appendChild(noImage);
                }

                transportList.appendChild(transportDiv);
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});