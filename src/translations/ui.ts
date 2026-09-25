import type { Language } from '../types/character';

export const UI_TRANSLATIONS: Record<Language, {
  brandTitle: string;
  brandSub: string;
  nav: {
    home: string;
    world: string;
    characters: string;
    about: string;
    surpriseMe: string;
    soundOn: string;
    soundOff: string;
    dayMode: string;
    nightMode: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    meetButton: string;
    albumButton: string;
    staggerProgress: (current: number, total: number) => string;
  };
  world: {
    badge: string;
    instruction: string;
    parallaxHint: string;
    clickHint: string;
    viewProfile: string;
  };
  collection: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    clear: string;
    allPill: string;
    friendBadge: string;
    viewInWorld: string;
    viewProfile: string;
    noResults: string;
    resetFilter: string;
  };
  modal: {
    boop: (count: number) => string;
    friendBadge: string;
    favoriteThing: string;
    funFact: string;
    quoteTitle: string;
    close: string;
    listenSound: string;
    prev: string;
    next: string;
  };
  about: {
    badge: string;
    title: string;
    story: string;
    moodTitle: string;
    moodSub: string;
    moods: {
      energetic: string;
      sleepy: string;
      tea: string;
      adventure: string;
      cool: string;
      caring: string;
      deep: string;
    };
  };
  footer: {
    madeWith: string;
    sub: string;
    backToTop: string;
  };
  loading: string;
}> = {
  id: {
    brandTitle: 'OUR LITTLE WORLD',
    brandSub: '13 Sahabat Mungil',
    nav: {
      home: 'BERANDA',
      world: 'DUNIA',
      characters: 'SAHABAT',
      about: 'TENTANG',
      surpriseMe: 'Kejutkan Aku!',
      soundOn: 'Nyalakan Suara',
      soundOff: 'Bisukan Suara',
      dayMode: 'Mode Siang ☀️',
      nightMode: 'Mode Malam 🌙',
    },
    hero: {
      badge: 'SEMESTA ANIMASI MUNGIL & INTERAKTIF',
      titleLine1: 'Selamat Datang di',
      titleLine2: 'Our Little World',
      subtitle: '13 sahabat kecil, satu dunia yang hangat. Setiap karakter memiliki warna, kepribadian, dan cerita ceria tersendiri.',
      meetButton: 'Temui Semuanya',
      albumButton: 'Album Sahabat Mungil',
      staggerProgress: (curr, tot) => `Karakter berdatangan satu per satu (${curr} / ${tot})`,
    },
    world: {
      badge: 'LITTLE WORLD SCENE • 13 SAHABAT',
      instruction: 'Klik karakter untuk mendengar suara & cerita mereka',
      parallaxHint: 'Geser kursor untuk efek parallax 3D',
      clickHint: 'Klik karakter untuk berinteraksi',
      viewProfile: 'Lihat Profil',
    },
    collection: {
      badge: 'ALBUM SAHABAT • 13 KARAKTER',
      title: 'Meet the Gang',
      subtitle: 'Setiap karakter memiliki keunikan, hobi, warna, dan ekspresi yang mengisi kehangatan dunia kecil ini.',
      searchPlaceholder: 'Cari nama atau sifat (misal: Riri, Zero, Cici, Jeo)...',
      clear: 'Hapus',
      allPill: '🍀 Semua',
      friendBadge: 'Sahabat',
      viewInWorld: 'Lihat di Dunia',
      viewProfile: 'Profil',
      noResults: 'Tidak ada karakter yang cocok dengan pencarian.',
      resetFilter: 'Reset Pencarian',
    },
    modal: {
      boop: (cnt) => `Klik untuk Boop! (${cnt})`,
      friendBadge: 'Sahabat Little World',
      favoriteThing: 'Hal Favorit:',
      funFact: 'Fakta Menarik:',
      quoteTitle: 'Kutipan Favorit',
      close: 'Tutup (Esc)',
      listenSound: 'Dengarkan Suara',
      prev: 'Sebelumnya',
      next: 'Berikutnya',
    },
    about: {
      badge: 'KISAH SEMESTA KAMI',
      title: 'Dunia Kecil Penuh Keajaiban Sederhana',
      story: 'Our Little World adalah sebuah semesta animasi yang hangat, tempat di mana 13 sahabat mungil tinggal berdampingan. Tidak ada perlombaan di sini—hanya secangkir teh di pagi hari, gelembung sabun yang melayang di udara, petikan musik lo-fi di bawah pohon, dan tawa tulus yang menular.',
      moodTitle: 'Bagaimana Mood Kamu Hari Ini?',
      moodSub: 'Pilih perasaanmu sekarang, kami akan mencocokkanmu dengan sahabat yang paling pas di Little World:',
      moods: {
        energetic: 'Lagi Bersemangat! 🚀',
        sleepy: 'Pengen Santai & Rebahan (Cici) ☁️',
        tea: 'Lagi Pengen Ditemenin Teh 🍵',
        adventure: 'Siap Berpetualang Baru 🧭',
        cool: 'Lagi Pengen Vibe Kece & Estetik (Jeo) 😎',
        caring: 'Ceria & Penuh Tawa (Momo) 🌸',
        deep: 'Suara Berat Menenangkan (Zero) ☕',
      },
    },
    footer: {
      madeWith: 'Dibuat dengan penuh 💖 untuk kehangatan hari-harimu',
      sub: '13 Sahabat Kecil, Satu Semesta yang Nyaman',
      backToTop: 'Kembali ke Atas',
    },
    loading: 'Membangunkan 13 sahabat kecil...',
  },

  en: {
    brandTitle: 'OUR LITTLE WORLD',
    brandSub: '13 Cute Friends',
    nav: {
      home: 'HOME',
      world: 'WORLD',
      characters: 'FRIENDS',
      about: 'ABOUT',
      surpriseMe: 'Surprise Me!',
      soundOn: 'Enable Sound',
      soundOff: 'Mute Sound',
      dayMode: 'Day Mode ☀️',
      nightMode: 'Night Mode 🌙',
    },
    hero: {
      badge: 'A CUTE & PLAYFUL ANIMATED UNIVERSE',
      titleLine1: 'Welcome to',
      titleLine2: 'Our Little World',
      subtitle: '13 little characters, one big cozy world. Every little friend has their own whimsical colors, personality, and stories.',
      meetButton: 'Meet Everyone',
      albumButton: 'Little Friends Album',
      staggerProgress: (curr, tot) => `Friends arriving one by one (${curr} / ${tot})`,
    },
    world: {
      badge: 'LITTLE WORLD SCENE • 13 FRIENDS',
      instruction: 'Click any character to hear their voice & whimsical story',
      parallaxHint: 'Move cursor for spatial 3D parallax',
      clickHint: 'Click characters to interact',
      viewProfile: 'View Profile',
    },
    collection: {
      badge: 'FRIENDS ALBUM • 13 CHARACTERS',
      title: 'Meet the Gang',
      subtitle: 'Each friend brings their own unique style, passions, and warm smiles to our tiny universe.',
      searchPlaceholder: 'Search name or traits (e.g., Riri, Zero, Cici, Jeo)...',
      clear: 'Clear',
      allPill: '🍀 All',
      friendBadge: 'Friend',
      viewInWorld: 'Inspect in World',
      viewProfile: 'Profile',
      noResults: 'No characters matched your search.',
      resetFilter: 'Reset Filter',
    },
    modal: {
      boop: (cnt) => `Click to Boop! (${cnt})`,
      friendBadge: 'Little World Friend',
      favoriteThing: 'Favorite Thing:',
      funFact: 'Fun Fact:',
      quoteTitle: 'Favorite Quote',
      close: 'Close (Esc)',
      listenSound: 'Play Sound',
      prev: 'Previous',
      next: 'Next',
    },
    about: {
      badge: 'OUR STORY',
      title: 'A Little World Full of Simple Wonders',
      story: 'Our Little World is a cozy, heartwarming animated universe where 13 friends live together in harmony. There is no rush here—just morning herbal tea, floating soap bubbles, chill beats under shady trees, and genuine smiles.',
      moodTitle: 'How Are You Feeling Today?',
      moodSub: 'Choose your current mood and meet the little friend who matches your vibe today:',
      moods: {
        energetic: 'Full of Energy! 🚀',
        sleepy: 'Sleepy & Cozy Naps (Cici) ☁️',
        tea: 'Sipping Warm Tea 🍵',
        adventure: 'Ready for Adventure 🧭',
        cool: 'Cute & Cool Girl Aesthetic (Jeo) 😎',
        caring: 'Cheerful Sunshine & Hugs (Momo) 🌸',
        deep: 'Deep Calming Baritone (Zero) ☕',
      },
    },
    footer: {
      madeWith: 'Crafted with 💖 for your warm and happy days',
      sub: '13 Little Characters, One Cozy Universe',
      backToTop: 'Back to Top',
    },
    loading: 'Waking up 13 little friends...',
  },

  km: {
    brandTitle: 'ពិភពលោកតូចរបស់យើង',
    brandSub: 'មិត្តតូចៗ ១៣ នាក់',
    nav: {
      home: 'ទំព័រដើម',
      world: 'ពិភពលោក',
      characters: 'មិត្តភក្តិ',
      about: 'អំពីយើង',
      surpriseMe: 'ភ្ញាក់ផ្អើល!',
      soundOn: 'បើកសំឡេង',
      soundOff: 'បិទសំឡេង',
      dayMode: 'ពេលថ្ងៃ ☀️',
      nightMode: 'ពេលយប់ 🌙',
    },
    hero: {
      badge: 'ចក្រវាលគំនូរជីវចលដ៏គួរឱ្យស្រឡាញ់ និងរស់រវើក',
      titleLine1: 'សូមស្វាគមន៍មកកាន់',
      titleLine2: 'ពិភពលោកតូចរបស់យើង',
      subtitle: 'តួអង្គតូចៗ ១៣ នាក់ ក្នុងពិភពលោកដ៏កក់ក្តៅតែមួយ។ មិត្តតូចម្នាក់ៗមានពណ៌ចម្រុះ បុគ្គលិកលក្ខណៈ និងរឿងរ៉ាវគួរឱ្យស្រឡាញ់រៀងៗខ្លួន។',
      meetButton: 'ជួបជាមួយអ្នកទាំងអស់គ្នា',
      albumButton: 'អាល់ប៊ុមមិត្តភក្តិ',
      staggerProgress: (curr, tot) => `មិត្តភក្តិមកដល់ម្តងមួយៗ (${curr} / ${tot})`,
    },
    world: {
      badge: 'ទិដ្ឋភាពពិភពលោកតូច • ១៣ មិត្តភក្តិ',
      instruction: 'ចុចលើតួអង្គដើម្បីស្តាប់សំឡេង និងរឿងរ៉ាវរបស់ពួកគេ',
      parallaxHint: 'រំកិលកណ្ដុរដើម្បីទទួលបានបែបផែន 3D',
      clickHint: 'ចុចលើតួអង្គដើម្បីធ្វើអន្តរកម្ម',
      viewProfile: 'មើលប្រវត្តិរូប',
    },
    collection: {
      badge: 'អាល់ប៊ុមមិត្តភក្តិ • ១៣ នាក់',
      title: 'ជួបជាមួយក្រុមមិត្តភក្តិ',
      subtitle: 'តួអង្គនីមួយៗសុទ្ធតែមានចំណង់ចំណូលចិត្ត ពណ៌ និងស្នាមញញឹមដ៏ស្រស់ស្អាតដែលបំពេញភាពកក់ក្តៅដល់ពិភពលោកនេះ។',
      searchPlaceholder: 'ស្វែងរកឈ្មោះ ឬបុគ្គលិកលក្ខណៈ...',
      clear: 'សម្អាត',
      allPill: '🍀 ទាំងអស់',
      friendBadge: 'មិត្តភក្តិ',
      viewInWorld: 'មើលក្នុងពិភពលោក',
      viewProfile: 'ប្រវត្តិរូប',
      noResults: 'រកមិនឃើញតួអង្គដែលត្រូវនឹងការស្វែងរកទេ។',
      resetFilter: 'កំណត់ការស្វែងរកឡើងវិញ',
    },
    modal: {
      boop: (cnt) => `ចុចដើម្បី Boop! (${cnt})`,
      friendBadge: 'មិត្តភក្តិ Little World',
      favoriteThing: 'របស់ដែលចូលចិត្ត:',
      funFact: 'រឿងគួរឱ្យចាប់អារម្មណ៍:',
      quoteTitle: 'សម្រង់សម្តីដែលចូលចិត្ត',
      close: 'បិទ (Esc)',
      listenSound: 'ស្តាប់សំឡេង',
      prev: 'មុន',
      next: 'បន្ទាប់',
    },
    about: {
      badge: 'រឿងរ៉ាវនៃចក្រវាលរបស់យើង',
      title: 'ពិភពលោកតូចមួយពោរពេញដោយភាពអស្ចារ្យសាមញ្ញ',
      story: 'ពិភពលោកតូចរបស់យើង គឺជាចក្រវាលគំនូរជីវចលដ៏កក់ក្តៅ ជាទីកន្លែងដែលមិត្តតូចៗ ១៣ នាក់រស់នៅជាមួយគ្នាយ៉ាងសុខសាន្ត។ គ្មានការប្រញាប់ប្រញាល់នៅទីនេះទេ—មានតែតែមួយពែងនៅពេលព្រឹក ពពុះសាប៊ូហោះហើរក្នុងខ្យល់ តន្ត្រីស្ងប់ស្ងាត់ក្រោមម្លប់ឈើ និងស្នាមញញឹមដ៏ស្មោះត្រង់។',
      moodTitle: 'តើអារម្មណ៍របស់អ្នកយ៉ាងណានៅថ្ងៃនេះ?',
      moodSub: 'ជ្រើសរើសអារម្មណ៍របស់អ្នក ហើយយើងនឹងណែនាំមិត្តតូចដែលត្រូវនឹងអ្នកបំផុត:',
      moods: {
        energetic: 'មានថាមពល និងកម្លាំងខ្លាំង! 🚀',
        sleepy: 'ចង់សម្រាក និងគេងលក់ស្រួល (Cici) ☁️',
        tea: 'ចង់ផឹកតែមួយពែងក្តៅៗ 🍵',
        adventure: 'ត្រៀមខ្លួនសម្រាប់ការផ្សងព្រេងថ្មី 🧭',
        cool: 'មានទំនុកចិត្ត ទាន់សម័យ និងឡូយ (Jeo) 😎',
        caring: 'រីករាយ និងផ្អែមល្ហែម (Momo) 🌸',
        deep: 'សំឡេងធ្ងន់ស្ងប់ស្ងាត់ (Zero) ☕',
      },
    },
    footer: {
      madeWith: 'បង្កើតឡើងដោយ 💖 ដើម្បីភាពកក់ក្តៅនៃថ្ងៃរបស់អ្នក',
      sub: 'តួអង្គតូចៗ ១៣ នាក់ ក្នុងចក្រវាលដ៏កក់ក្តៅតែមួយ',
      backToTop: 'ត្រឡប់ទៅខាងលើ',
    },
    loading: 'កំពុងដាស់មិត្តតូចៗទាំង ១៣ នាក់...',
  },
};
