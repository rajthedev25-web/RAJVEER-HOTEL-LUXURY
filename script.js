window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#1a1a1a';
        nav.style.padding = '10px 8%';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '20px 8%';
    }
});
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(26, 26, 26, 0.95)'; // Slight transparency
        nav.style.padding = '10px 8%';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '20px 8%';
        nav.style.boxShadow = 'none';
    }
});


// footer 
// Newsletter Form Submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert("Thank you for joining The Essence Club! A welcome email has been sent to " + email);
    this.reset();
});
// check avalibility

document.querySelector('.check-availability').addEventListener('click', function() {
    const resultsArea = document.getElementById('homeResultsArea');
    
    // Loading animation style
    resultsArea.innerHTML = "<p style='text-align:center; padding:50px; color:#c5a059;'>Searching luxury suites for you...</p>";

    // Fake Data (Jo hum show karenge)
    const availableRooms = [
        {
            name: "Grand Royal Suite",
            price: "$1,200",
            img: "https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwYmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D?w=600",
            desc: "The ultimate luxury experience with a private balcony."
        },
        {
            name: "Deluxe Executive",
            price: "$600",
            img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600",
            desc: "Modern design with high-speed workspace."
        }
    ];

    // 1 second ka delay real feel ke liye
    setTimeout(() => {
        resultsArea.innerHTML = '<h2 style="text-align:center; font-family:\'Playfair Display\'; margin: 40px 0;">Available for You</h2>';
        
        availableRooms.forEach(room => {
            resultsArea.innerHTML += `
                <div class="home-room-card">
                    <img src="${room.img}" alt="${room.name}">
                    <div class="room-details">
                        <h3>${room.name}</h3>
                        <p>${room.desc}</p>
                        <span class="price">${room.price}/night</span>
                        <a href="booking.html" class="book-btn-small">Select Room</a>
                    </div>
                </div>
            `;
        });
        
        // Scroll karke results dikhao
        resultsArea.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
});


document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation for Experience Cards
    const expCards = document.querySelectorAll('.exp-card');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        expCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if(cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial Styles for Cards (taki JS se animate ho sakein)
    expCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.8s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Pehli baar load hone par check karega

    // 2. Banner Parallax Effect (Smooth Scrolling Background)
    const luxuryBanner = document.querySelector('.luxury-banner');
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        // Background ko thoda slow move karega scroll ke saath
        luxuryBanner.style.backgroundPositionY = offset * 0.4 + "px";
    });

    // 3. Simple Alert for Discovery Buttons
    // const discoveryBtns = document.querySelectorAll('.btn-outline');
    // discoveryBtns.forEach(btn => {
    //     btn.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         const destination = e.target.innerText;
    //         alert(`Opening the world of ${destination}. Detailed page coming soon!`);
    //     });
    // });

    // 4. Newsletter Form Handling (Success Message)
    const newsForm = document.querySelector('.newsletter-form');
    if(newsForm) {
        newsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsForm.querySelector('input').value;
            
            // Yahan hum success feedback dikhayenge
            newsForm.innerHTML = `<p style="color: #c5a059; font-weight: bold; letter-spacing: 1px;">
                WELCOME TO THE ESSENCE CLUB. CHECK YOUR INBOX!
            </p>`;
            
            console.log("New Subscriber:", emailInput);
        });
    }
});
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = this.querySelector('button');
    btn.innerText = 'SENDING...';

    // Apni IDs yahan dalo
    const serviceID = 'service_btssxbn'; 
    const templateID = 'template_zlak3tf'; 

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.innerText = 'SUBSCRIBED!';
            alert('Bhai, registration successful!');
            this.reset();
        }, (err) => {
            btn.innerText = 'FAILED';
            alert('Error: ' + JSON.stringify(err));
        });
});

