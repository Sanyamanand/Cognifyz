const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#062be3';
    btn.style.boxShadow = '0 0 40px #062be3';
    btn.style.transition = '1s ease';
});

const container = document.querySelector(".greet");
        
        function updateTime() {
        const timeNow = new Date();
        const hours = timeNow.getHours();
        const minutes = timeNow.getMinutes();
        const seconds = timeNow.getSeconds();
        const ampm = hours >= 12 ? "PM" : "AM";
        const hours12 = hours % 12 || 12;
        
        let greeting, additionalMessage;
        
        if (hours >= 5 && hours < 12) {
        greeting = "GOOD MORNING !!!!";
        additionalMessage = "Have a great Day";
        } else if (hours >= 12 && hours < 18) {
        greeting = "GOOD AFTERNOON !!!!";
        additionalMessage = "Enjoy your afternoon!";
        } else if (hours >= 18 && hours < 22) {
        greeting = "GOOD EVENING !!!!";
        additionalMessage = "Wishing you a pleasant evening!";
        } else {
        greeting = "GOOD NIGHT !!!!";
        additionalMessage = "Sweet dreams and rest well!";
        }
        
        container.innerHTML = `
        <p class="time">${hours12}:${minutes.toString().padStart(2, '0')} ${ampm}</p>
        <p class="say">${greeting}</p>
        <p>${additionalMessage}</p>
        `;
        }
        
       
        updateTime();
        
       
        setInterval(updateTime, 1000);
        