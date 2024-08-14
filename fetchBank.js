document.addEventListener('DOMContentLoaded', () => {
    fetch('bank.json')
        .then(response => response.json())
        .then(data => {
            const bankList = document.getElementById('bank-list');

            data.forEach(bank => {
                const bankDiv = document.createElement('div');
                bankDiv.className = 'bank'; 

               
                const name = document.createElement('h3');
                name.textContent = `Name: ${bank.title}`;
                bankDiv.appendChild(name);

                
                const phone = document.createElement('p');
                phone.textContent = `Number: ${bank.phone}`;
                bankDiv.appendChild(phone);

                const address = document.createElement('p');
                address.textContent = `Address: ${bank.address}`;
                bankDiv.appendChild(address);

                if (bank.url) {
                    const mapLink = document.createElement('a');
                    mapLink.href = bank.url;
                    mapLink.textContent = `View on Google Maps`;
                    mapLink.target = '_blank'; // Open link in a new tab
                    bankDiv.appendChild(mapLink);
                } else {
                    const noMapLink = document.createElement('p');
                    noMapLink.textContent = `Map: Not available`;
                    bankDiv.appendChild(noMapLink);
                }


                if (bank.imageUrl) {
                    const image = document.createElement('img');
                    image.src = bank.imageUrl;
                    image.alt = `Image of ${bank.name}`;
                    image.className = 'bank-image';
                    bankDiv.appendChild(image);
                } else {
                    const noImage = document.createElement('p');
                    noImage.textContent = `Image: Not available`;
                    bankDiv.appendChild(noImage);
                }

                bankList.appendChild(bankDiv);
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});