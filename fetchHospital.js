document.addEventListener('DOMContentLoaded', () => {
    fetch('hospital.json')
        .then(response => response.json())
        .then(data => {
            const hospitalList = document.getElementById('hospital-list');

            data.forEach(hospital => {
                const hospitalDiv = document.createElement('div');
                hospitalDiv.className = 'hospital'; 

               
                const name = document.createElement('h3');
                name.textContent = `Name: ${hospital.title}`;
                hospitalDiv.appendChild(name);

                
                const phone = document.createElement('p');
                phone.textContent = `Number: ${hospital.phone}`;
                hospitalDiv.appendChild(phone);

                const address = document.createElement('p');
                address.textContent = `Address: ${hospital.address}`;
                hospitalDiv.appendChild(address);

                if (hospital.url) {
                    const mapLink = document.createElement('a');
                    mapLink.href = hospital.url;
                    mapLink.textContent = `View on Google Maps`;
                    mapLink.target = '_blank'; // Open link in a new tab
                    hospitalDiv.appendChild(mapLink);
                } else {
                    const noMapLink = document.createElement('p');
                    noMapLink.textContent = `Map: Not available`;
                    hospitalDiv.appendChild(noMapLink);
                }


                if (hospital.imageUrl) {
                    const image = document.createElement('img');
                    image.src = hospital.imageUrl;
                    image.alt = `Image of ${hospital.name}`;
                    image.className = 'hospital-image';
                    hospitalDiv.appendChild(image);
                } else {
                    const noImage = document.createElement('p');
                    noImage.textContent = `Image: Not available`;
                    hospitalDiv.appendChild(noImage);
                }

                hospitalList.appendChild(hospitalDiv);
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});

