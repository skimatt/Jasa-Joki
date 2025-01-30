// Mobile Menu Toggle
document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("active");
});

// Scroll Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".scroll-anim").forEach((el) => observer.observe(el));
// Mobile Menu Toggle
document.getElementById("menu-btn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
});

// Tutup mobile menu setelah klik link
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobile-menu").style.display = "none";
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Form Submit Handler
function redirectToWhatsApp(e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value;
  const name = document.getElementById("name").value;
  const message = `Halo RC Joki, saya ${name} ingin order jasa joki Mobile Legends`;
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

// Form Redirect
function redirectToWhatsApp(e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value;
  const message = `Halo RC Joki, saya ingin memesan jasa joki Mobile Legends`;
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}
// Fungsi untuk mengarahkan ke WhatsApp
function redirectToWhatsApp(event) {
  event.preventDefault(); // Mencegah form melakukan submit biasa

  // Mengambil nilai input dari form
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const rank = document.getElementById("rank").value.trim();
  const target = document.getElementById("target").value.trim();

  // Validasi input form
  if (!name || !email || !phone || !rank || !target) {
    alert("Harap isi semua field dengan lengkap.");
    return;
  }

  // Format nomor WhatsApp (menghapus karakter non-numerik, dan pastikan nomor diawali dengan kode negara Indonesia)
  const formattedPhone = phone.replace(/\D/g, "");
  if (formattedPhone.length < 10) {
    alert(
      "Nomor WhatsApp tidak valid. Pastikan nomor diawali dengan kode negara."
    );
    return;
  }

  // Membuat pesan WhatsApp
  const message = `
    *Pemesanan Layanan SKIJOKI*
    
    Nama: ${name}
    Wa: +62${formattedPhone}
    Rank Sekarang: ${rank}
    Target Rank: ${target}
    Berapa harga layanan ini?
  `.trim();

  // Membuat URL WhatsApp dengan nomor yang dimasukkan
  const whatsappUrl = `https://wa.me/6282239434989?text=${encodeURIComponent(
    message
  )}`;

  // Mengarahkan ke URL WhatsApp
  window.location.href = whatsappUrl;
}
