// Background Image Rotation
const backgrounds = [
    'car-website-image/photo7.png',
    'car-website-image/photo2.png',
    'car-website-image/photo4.png',
    'car-website-image/photo1.jpg'
  ];
  
  let currentBg = 0;
  const hero = document.getElementById('hero');
  
  setInterval(() => {
    currentBg = (currentBg + 1) % backgrounds.length;
    hero.style.backgroundImage = `url(${backgrounds[currentBg]})`;
  }, 5000);
  
  // Car Selection
  const carCards = document.querySelectorAll('.car-card');
  let selectedCar = 'honda';
  
  carCards.forEach(card => {
    card.addEventListener('click', () => {
      carCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedCar = card.dataset.car;
    });
  });
  
  // Promo Code Validation
  const validPromoCodes = {
    'FIRST10': 10,
    'SUMMER25': 25,
    'VSR2025': 15
  };
  
  const promoInput = document.querySelector('input[name="promoCode"]');
  const promoMessage = document.getElementById('promoMessage');
  let promoDiscount = 0;
  
  promoInput.addEventListener('input', (e) => {
    const code = e.target.value.toUpperCase();
    if (!code) {
      promoDiscount = 0;
      promoMessage.textContent = '';
      promoMessage.className = '';
      return;
    }
  
    const discount = validPromoCodes[code];
    if (discount) {
      promoDiscount = discount;
      promoMessage.textContent = `${discount}% discount applied!`;
      promoMessage.className = 'promo-message success';
    } else {
      promoDiscount = 0;
      promoMessage.textContent = 'Invalid promo code';
      promoMessage.className = 'promo-message error';
    }
  });
  
  // Form Submission
  const form = document.getElementById('cabBookingForm');
  const modal = document.getElementById('confirmationModal');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const bookingData = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a server
    console.log('Booking Data:', bookingData);
    
    // Show confirmation modal
    modal.style.display = 'flex';
  });
  
  // Close Modal
  function closeModal() {
    modal.style.display = 'none';
  }
  
  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Calculate Price
  function calculatePrice(basePrice) {
    return basePrice - (basePrice * (promoDiscount / 100));
  }