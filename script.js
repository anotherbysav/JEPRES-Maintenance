function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.classList.add('hidden');
    });
  
    const activeSection = document.getElementById(id);
    activeSection.classList.remove('hidden');
    activeSection.classList.add('fade-in');
  }
  
  // Tambah animasi fade-in saat buka konten
  const style = document.createElement('style');
  style.innerHTML = `
    .fade-in {
      animation: fadeIn 0.6s ease-out;
    }
  
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
  