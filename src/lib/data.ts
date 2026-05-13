export const PORTFOLIO_DATA = {
  hero: {
    name: "Zero Sensei",
    title: "Full-Stack & Robotic Developer | Tech Creator",
    subtitle: "Crafting immersive digital experiences, intelligent systems, and futuristic technology that bridges creativity with innovation.",
    cta: "Explore My World",
  },
  
  about: {
    name: "Alex Chen",
    title: "Full-Stack Developer & Creative Builder",
    intro: "Developer yang passion dalam membuat pengalaman digital yang interaktif dan engaging.",
    description: "Spesialis dalam web development modern, teknologi AR/3D, dan game mechanics. Saya percaya bahwa teknologi harus fun dan mudah dipahami oleh semua orang.",
    stats: [
      { label: "Tahun Pengalaman", value: "3+" },
      { label: "Projek Selesai", value: "20+" },
      { label: "Teknologi", value: "10+" },
    ],
  },

  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "3D & AR",
      items: ["Three.js", "Babylon.js", "WebAR", "QR Detection", "3D Models"],
    },
    {
      category: "Backend",
      items: ["Node.js", "PostgreSQL", "Firebase", "API Design"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Vercel", "VS Code"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Interactive Portfolio with AR",
      description: "Portfolio ini sendiri! Dengan WebAR untuk objek 3D interaktif dan QR code scanning untuk project details.",
      tags: ["React", "Three.js", "AR", "WebAR"],
      image: "/projects/portfolio.jpg",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://portfolio.example.com",
      hasAR: true,
      arDescription: "Scan untuk melihat 3D model portfolio dalam AR!"
    },
    {
      id: 2,
      title: "Real-time Chat Platform",
      description: "Chat application dengan real-time messaging, user presence, dan file sharing.",
      tags: ["Node.js", "Socket.io", "React", "PostgreSQL"],
      image: "/projects/chat.jpg",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://chat.example.com",
      hasAR: true,
      arDescription: "Lihat 3D chat bubble visualization dalam AR!"
    },
    {
      id: 3,
      title: "3D Product Visualizer",
      description: "Tool untuk visualisasi produk 3D dengan real-time customization dan AR preview di perangkat.",
      tags: ["Three.js", "WebAR", "React", "Three-fiber"],
      image: "/projects/3d-viz.jpg",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://viz.example.com",
      hasAR: true,
      arDescription: "Scan untuk melihat produk 3D di ruangan Anda!"
    },
    {
      id: 4,
      title: "Learning Platform",
      description: "Platform edukasi interaktif dengan gamification, mini games, dan achievement system.",
      tags: ["Next.js", "React", "Zustand", "Framer Motion"],
      image: "/projects/learning.jpg",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://learn.example.com",
      hasAR: false,
      arDescription: "Platform pembelajaran yang fun dan interaktif"
    },
  ],

  games: [
    {
      id: 1,
      name: "Memory Match",
      title: "Memory Match Game",
      description: "Game memory klasik dengan tema teknologi. Temukan pasangan gambar dalam waktu terbatas. Cocok untuk semua usia!",
      difficulty: "Mudah",
      icon: "Brain",
      rewards: 100,
      rules: [
        "Klik kartu untuk membuka gambar",
        "Cari pasangan yang sama",
        "Semakin cepat semakin baik!",
        "Maksimal 3 kali salah"
      ]
    },
    {
      id: 2,
      name: "Tech Quiz",
      title: "Tech Knowledge Quiz",
      description: "Quiz seru tentang teknologi dan programming. Jawab dengan benar untuk naik level dan dapatkan achievement!",
      difficulty: "Sedang",
      icon: "Code",
      rewards: 250,
      rules: [
        "Jawab 10 pertanyaan dengan benar",
        "Setiap jawaban benar = +25 poin",
        "3 kesempatan untuk salah",
        "Tingkat kesulitan bertambah setiap soal"
      ]
    },
    {
      id: 3,
      name: "Pattern Master",
      title: "Color Pattern Challenge",
      description: "Ulangi pola warna yang ditampilkan dengan cepat. Tingkat kesulitan meningkat setiap level. Test memory dan reflex Anda!",
      difficulty: "Sedang",
      icon: "Zap",
      rewards: 150,
      rules: [
        "Perhatikan urutan warna",
        "Klik warna dengan urutan yang sama",
        "Pola semakin kompleks setiap level",
        "Jangan membuat kesalahan!"
      ]
    },
  ],

  contact: {
    email: "hello@alexchen.dev",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    social: [
      { platform: "GitHub", url: "https://github.com/alex" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/alex" },
      { platform: "Twitter", url: "https://twitter.com/alex" },
    ],
  },

  // Legacy arrays (empty to avoid errors but preserved for compatibility)
  blog: [],

  faq: [
    {
      question: "Apakah saya bisa membuat custom AR experience?",
      answer: "Ya, saya dapat membuat custom AR experience sesuai kebutuhan Anda menggunakan WebAR dan teknologi Three.js terbaru."
    },
    {
      question: "Berapa lama timeline untuk project development?",
      answer: "Timeline tergantung kompleksitas project. Rata-rata 2-4 minggu untuk project standard. Mari diskusikan detail untuk timeline yang akurat."
    },
    {
      question: "Apakah saya menerima remote work?",
      answer: "Tentu saja! Saya sangat experience dengan remote work dan dapat kolaborasi dengan tim di mana pun mereka berada."
    },
    {
      question: "Apa saja teknologi yang saya gunakan?",
      answer: "React, Next.js, TypeScript, Three.js, Tailwind CSS, dan tools modern lainnya untuk membangun aplikasi berkualitas tinggi."
    },
    {
      question: "Apakah saya bisa provide maintenance setelah project selesai?",
      answer: "Ya, saya menyediakan support dan maintenance package untuk memastikan aplikasi berjalan optimal."
    },
    {
      question: "Bagaimana proses komunikasi dan update project?",
      answer: "Saya menggunakan komunikasi regular via Discord/Slack dan update progress mingguan untuk transparansi penuh."
    },
  ],

  // Alias for backwards compatibility
  get portfolio() {
    return this.projects;
  },
};