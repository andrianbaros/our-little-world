import type { CharacterPersonality } from '../types/character';

export const CHARACTERS_DATA: CharacterPersonality[] = [
  {
    id: 'riri',
    number: '01',
    name: {
      id: 'Riri',
      en: 'Riri',
      km: 'រីរី (Riri)',
    },
    tagline: {
      id: 'Si kecil petualang yang selalu penasaran.',
      en: 'The curious little adventurer who loves secret paths.',
      km: 'អ្នកផ្សងព្រេងតូចដែលតែងតែចង់ដឹងចង់ឃើញ។',
    },
    personality: {
      id: ['Curious', 'Cheerful', 'Energetic'],
      en: ['Curious', 'Cheerful', 'Energetic'],
      km: ['ចង់ដឹងចង់ឃើញ', 'រីករាយ', 'មានថាមពល'],
    },
    quote: {
      id: 'Eh, itu apa?! Jangan-jangan ada harta karun di balik rumput itu!',
      en: 'Ooh, what is that?! Could there be a hidden treasure behind those bushes?!',
      km: 'អូហូ! តើនោះជាអ្វី?! ប្រហែលជាមានកំណប់លាក់នៅក្រោយស្មៅនោះទេដឹង?!',
    },
    favorite: {
      id: 'Menjelajahi jalan rahasia & mengumpulkan biji pinus berkilau',
      en: 'Exploring hidden trails & collecting sparkly pinecones',
      km: 'ការរុករកផ្លូវសម្ងាត់ និងប្រមូលផ្លែស្រល់ភ្លឺចែងចាំង',
    },
    funFact: {
      id: 'Selalu mengantongi kaca pembesar mini dan bisa mengenali jejak semut dalam 3 detik.',
      en: 'Always carries a mini magnifying glass and can trace ant footsteps in 3 seconds.',
      km: 'តែងតែយកកែវពង្រីកតូចតាមខ្លួន ហើយអាចសម្គាល់ស្នាមជើងស្រមោចត្រឹម ៣ វិនាទី។',
    },
    speechText: {
      id: 'Hai! Aku Riri! Hari ini kita mau berpetualang ke mana?',
      en: 'Hi! I am Riri! Where shall our adventure take us today?',
      km: 'សួស្តី! ខ្ញុំឈ្មោះរីរី! តើថ្ងៃនេះយើងទៅផ្សងព្រេងនៅឯណា?',
    },
    idleSpeech: {
      id: [
        'Ada kupu-kupu lewat tadi!',
        'Wah, awan itu bentuknya kayak kelinci!',
        'Lihat ke sini, ada jalan baru!'
      ],
      en: [
        'A butterfly just flew by!',
        'Whoa, that cloud looks like a bunny!',
        'Look over here, a secret path!'
      ],
      km: [
        'ទើបតែមានមេអំបៅហោះកាត់មុននេះ!',
        'អូហូ ពពកនោះមានរាងដូចទន្សាយ!',
        'មើលមកទីនេះ មានផ្លូវថ្មីមួយ!'
      ],
    },
    themeColor: {
      primary: '#FF5E7E',
      secondary: '#FFA3B5',
      bg: '#FFF0F3',
      text: '#9E1C38',
      accent: '#FF3366',
      border: '#FFCCD5',
      glow: 'rgba(255, 94, 126, 0.45)',
    },
    imagePath: '/assets/characters/riri.png',
    idleAnimation: 'bounce',
    worldPosition: {
      x: 18,
      y: 58,
      scale: 1.05,
      zIndex: 15,
      facing: 'right',
      spotDescription: {
        id: 'Di atas bukit bunga stroberi',
        en: 'Atop the wild strawberry blossom hill',
        km: 'នៅលើភ្នំផ្កាស្ត្របឺរីព្រៃ',
      },
    },
    soundType: 'boing',
    specialReaction: {
      id: 'Melompat tinggi sambil berputar di udara dengan taburan bintang merah muda!',
      en: 'Leaps high, spinning mid-air with pink starlight sparkles!',
      km: 'លោតឡើងខ្ពស់ វិលខ្លួននៅលើអាកាសជាមួយផ្កាយពណ៌ផ្កាឈូកភ្លឺចែងចាំង!',
    },
  },

  {
    id: 'anan',
    number: '02',
    name: {
      id: 'Anan',
      en: 'Anan',
      km: 'អានាន់ (Anan)',
    },
    tagline: {
      id: 'Sahabat bijak yang membawa ketenangan dan secangkir teh hangat.',
      en: 'The gentle thoughtful soul with a warm cup of herbal tea.',
      km: 'មិត្តដ៏មានប្រាជ្ញាដែលនាំមកនូវភាពស្ងប់ស្ងាត់ និងតែមួយពែងក្តៅៗ។',
    },
    personality: {
      id: ['Calm', 'Friendly', 'Thoughtful'],
      en: ['Calm', 'Friendly', 'Thoughtful'],
      km: ['ស្ងប់ស្ងាត់', 'រួសរាយ', 'ចេះគិតគូរ'],
    },
    quote: {
      id: 'Duduk santai dulu, yuk! Teh herbal dan angin sepoi-sepoi selalu punya cerita.',
      en: 'Come sit with me. Warm herbal tea and gentle breezes always bring good stories.',
      km: 'មកអង្គុយលេងសិនមក! តែរុក្ខជាតិក្តៅៗ និងខ្យល់រំភើយតែងតែនាំមកនូវរឿងល្អៗ។',
    },
    favorite: {
      id: 'Membaca buku cerita di bawah pohon rindang & menyeduh teh daun mint',
      en: 'Reading storybooks under shady apple trees & brewing fresh mint tea',
      km: 'អានសៀវភៅរឿងក្រោមម្លប់ដើមឈើត្រឈឹងត្រឈៃ និងឆុងតែជីរអង្កាម',
    },
    funFact: {
      id: 'Hafal nama semua spesies bunga di bukit ini dan bisa memprediksi cuaca dari desir angin.',
      en: 'Knows every wild flower by name and can forecast weather from wind whispers.',
      km: 'ចាំឈ្មោះផ្កាទាំងអស់នៅលើភ្នំនេះ ហើយអាចដឹងអាកាសធាតុពីខ្យល់បក់។',
    },
    speechText: {
      id: 'Halo teman baik! Tarik napas pelan... rasakan damainya hari ini.',
      en: 'Hello dear friend! Take a gentle breath... feel the peace of today.',
      km: 'សួស្តីមិត្តសម្លាញ់! ដកដង្ហើមវែងៗ... មានអារម្មណ៍សុខសាន្តក្នុងថ្ងៃនេះ។',
    },
    idleSpeech: {
      id: [
        'Aroma daun chamomile harum sekali...',
        'Halaman buku berikutnya sangat seru.',
        'Duduklah bersamaku sejenak.'
      ],
      en: [
        'The chamomile scent is so soothing...',
        'The next story chapter is wonderful.',
        'Come take a quiet rest with me.'
      ],
      km: [
        'ក្លិនផ្កាកាម៉ូមីលក្រអូបឈ្ងុយណាស់...',
        'ទំព័រសៀវភៅបន្ទាប់ពិតជាគួរឱ្យជក់ចិត្ត។',
        'មកអង្គុយសម្រាកជាមួយខ្ញុំមួយភ្លែតមក។'
      ],
    },
    themeColor: {
      primary: '#48BB78',
      secondary: '#9AE6B4',
      bg: '#F0FFF4',
      text: '#1C6439',
      accent: '#38A169',
      border: '#C6F6D5',
      glow: 'rgba(72, 187, 120, 0.45)',
    },
    imagePath: '/assets/characters/anan.png',
    idleAnimation: 'breathe',
    worldPosition: {
      x: 32,
      y: 68,
      scale: 1.0,
      zIndex: 20,
      facing: 'right',
      spotDescription: {
        id: 'Duduk santai di atas selimut piknik bawah pohon apel',
        en: 'Lounging on a picnic blanket under the cozy apple tree',
        km: 'អង្គុយលើកម្រាលក្រោមដើមប៉ោមដ៏កក់ក្តៅ',
      },
    },
    soundType: 'chime',
    specialReaction: {
      id: 'Menyajikan cangkir teh hangat yang mengeluarkan kepulan uap berbentuk hati!',
      en: 'Serves a warm teacup with heart-shaped aromatic steam clouds!',
      km: 'លើកពែងតែក្តៅៗដែលមានផ្សែងហុយចេញជារាងបេះដូង!',
    },
  },

  {
    id: 'jeje',
    number: '03',
    name: {
      id: 'Jeje',
      en: 'Jeje',
      km: 'ជេជេ (Jeje)',
    },
    tagline: {
      id: 'Tukang usil manis yang paling suka bikin semua orang tertawa.',
      en: 'The sweet trickster whose giggles brighten the entire grove.',
      km: 'អ្នកលេងសើចដ៏គួរឱ្យស្រឡាញ់ដែលចូលចិត្តធ្វើឱ្យអ្នកដទៃសើច។',
    },
    personality: {
      id: ['Playful', 'Mischievous', 'Funny'],
      en: ['Playful', 'Mischievous', 'Funny'],
      km: ['ចូលចិត្តលេង', 'កំហូចគួរឱ្យស្រឡាញ់', 'កំប្លែង'],
    },
    quote: {
      id: 'Hehehe! Siapa yang mau main petak umpet? Aku yang sembunyi, kamu yang cari!',
      en: 'Teehee! Hide and seek time! I will hide, you try to spot me!',
      km: 'ហិហិ! នរណាខ្លះចង់លេងពួនរក? ខ្ញុំជាអ្នកពួន អ្នកជាអ្នករកណា!',
    },
    favorite: {
      id: 'Gelembung sabun raksasa, lelucon lucu, dan permen rasa lemon',
      en: 'Giant rainbow soap bubbles, harmless pranks, and sour lemon gummies',
      km: 'ពពុះសាប៊ូឥន្ទធនូធំៗ ការលេងសើច និងស្ករគ្រាប់ក្រូចឆ្មា',
    },
    funFact: {
      id: 'Bisa menirukan suara 8 jenis burung dan sering menyamar jadi jamur warna-warni.',
      en: 'Can mimic 8 birds and often disguises himself as a friendly polka-dot mushroom.',
      km: 'អាចធ្វើត្រាប់តាមសំឡេងសត្វស្លាប ៨ ប្រភេទ និងចូលចិត្តក្លែងខ្លួនជាផ្សិតចម្រុះពណ៌។',
    },
    speechText: {
      id: 'Booo! Kaget ya? Hahaha, kamu lucu banget kalau lagi bengong!',
      en: 'Boo! Surprised you, didn’t I? Haha, your surprised face is adorable!',
      km: 'ប៊ូ! ភ្ញាក់ទេ? ហាៗ ទឹកមុខភ្ញាក់ផ្អើលរបស់អ្នកគួរឱ្យស្រឡាញ់ណាស់!',
    },
    idleSpeech: {
      id: [
        'Hihi, jangan noleh ke belakang ya...',
        'Ada yang mau disemprot gelembung?',
        'Trik sulap baruku hampir berhasil!'
      ],
      en: [
        'Hehe, don’t look behind you...',
        'Who wants some flying bubbles?',
        'My latest magic trick is almost ready!'
      ],
      km: [
        'ហិហិ កុំងាកទៅក្រោយណា...',
        'តើនរណាចង់បានពពុះសាប៊ូហោះ?',
        'ល្បិចសៀកថ្មីរបស់ខ្ញុំជិតរួចរាល់ហើយ!'
      ],
    },
    themeColor: {
      primary: '#ECC94B',
      secondary: '#FAF089',
      bg: '#FFFFF0',
      text: '#744210',
      accent: '#D69E2E',
      border: '#FEFCBF',
      glow: 'rgba(236, 201, 75, 0.45)',
    },
    imagePath: '/assets/characters/jeje.png',
    idleAnimation: 'wiggle',
    worldPosition: {
      x: 45,
      y: 52,
      scale: 0.95,
      zIndex: 12,
      facing: 'left',
      spotDescription: {
        id: 'Mengintip jahil dari balik jamur payung polkadot',
        en: 'Peeking playfully behind the giant polka-dot mushroom',
        km: 'លបមើលយ៉ាងកំហូចពីក្រោយផ្សិតធំចម្រុះពណ៌',
      },
    },
    soundType: 'giggle',
    specialReaction: {
      id: 'Melakukan salto jungkir balik lalu meletuskan confetti warna-warni!',
      en: 'Performs a mid-air somersault and pops cheerful confetti streamers!',
      km: 'លោតវិលជុំលើអាកាស រួចផ្ទុះក្រដាសចម្រុះពណ៌អបអរសាទរ!',
    },
  },

  {
    id: 'ata',
    number: '04',
    name: {
      id: 'Ata',
      en: 'Ata',
      km: 'អាតា (Ata)',
    },
    tagline: {
      id: 'Pemberani berhati emas dengan jubah angin andalannya.',
      en: 'The brave guardian with a fluttering cape and golden heart.',
      km: 'អ្នកក្លាហានចិត្តល្អដែលមានអាវរងាខ្យល់បក់បោកជាដៃគូ។',
    },
    personality: {
      id: ['Brave', 'Adventurous', 'Confident'],
      en: ['Brave', 'Adventurous', 'Confident'],
      km: ['ក្លាហាន', 'ចូលចិត្តផ្សងព្រេង', 'មានទំនុកចិត្ត'],
    },
    quote: {
      id: 'Jangan ragu kawan! Ata ada di depan untuk memandu jalan kita!',
      en: 'Fear not, travelers! Ata is leading the way to triumph!',
      km: 'កុំភ័យខ្លាចឡើយ! អាតានឹងនៅខាងមុខដើម្បីនាំផ្លូវយើងទាំងអស់គ្នា!',
    },
    favorite: {
      id: 'Mendaki batu karang tertinggi & melihat langit lewat teleskop kuningan',
      en: 'Climbing the tallest overlook & stargazing through brass spyglasses',
      km: 'ការឡើងលើថ្មខ្ពស់បំផុត និងមើលផ្កាយតាមកែវយឹត',
    },
    funFact: {
      id: 'Punya jubah angin kecil buatan sendiri yang selalu berkibar walau tidak ada angin kencang.',
      en: 'Hand-stitched his breeze cape that flutters even on calm windless afternoons.',
      km: 'មានអាវរងាដេរដោយដៃផ្ទាល់ ដែលតែងតែបក់រវិចៗទោះគ្មានខ្យល់ក៏ដោយ។',
    },
    speechText: {
      id: 'Ayo langkahkan kakimu! Petualangan megah sudah memanggil kita!',
      en: 'Forward march! A grand journey is calling out to us!',
      km: 'តោះបោះជំហានទៅមុខ! ការផ្សងព្រេងដ៏អស្ចារ្យកំពុងហៅយើងហើយ!',
    },
    idleSpeech: {
      id: [
        'Arah kompas menunjuk ke utara!',
        'Puncak bukit itu sudah semakin dekat.',
        'Tetap percaya diri, kita pasti bisa!'
      ],
      en: [
        'Compass needle points north!',
        'The mountain peak draws closer.',
        'Stay confident, we can do this!'
      ],
      km: [
        'ទ្រនិចត្រីវិស័យចង្អុលទៅទិសខាងជើង!',
        'កំពូលភ្នំនោះកាន់តែជិតមកដល់ហើយ។',
        'ត្រូវមានទំនុកចិត្ត យើងប្រាកដជាអាចធ្វើបាន!'
      ],
    },
    themeColor: {
      primary: '#3182CE',
      secondary: '#90CDF4',
      bg: '#EBF8FF',
      text: '#1A365D',
      accent: '#2B6CB0',
      border: '#BEE3F8',
      glow: 'rgba(49, 130, 206, 0.45)',
    },
    imagePath: '/assets/characters/ata.png',
    idleAnimation: 'bounce',
    worldPosition: {
      x: 10,
      y: 42,
      scale: 1.05,
      zIndex: 10,
      facing: 'right',
      spotDescription: {
        id: 'Berdiri tegap di atas batu karang observatorium',
        en: 'Standing heroically atop the observatory cliff rock',
        km: 'ឈរយ៉ាងអង់អាចនៅលើផ្ទាំងថ្មសង្កេតការណ៍',
      },
    },
    soundType: 'fanfare',
    specialReaction: {
      id: 'Menghunus pedang kayu mini dengan kilatan bintang komet berkilau!',
      en: 'Draws a miniature wooden sword with a glowing comet flash!',
      km: 'ដកដាវឈើតូចចេញជាមួយនឹងពន្លឺផ្កាយដុះកន្ទុយភ្លឺចិញ្ចាច!',
    },
  },

  {
    id: 'cici',
    number: '05',
    name: {
      id: 'Cici',
      en: 'Cici',
      km: 'ស៊ីស៊ី (Cici)',
    },
    tagline: {
      id: 'Koki kue mungil penebar kehangatan dan pelukan terlembut.',
      en: 'The pastry sweetheart who spreads warm hugs and freshly baked pies.',
      km: 'ចុងភៅនំតូចដែលតែងតែចែករំលែកការឱបដ៏កក់ក្តៅ និងនំដុតថ្មីៗ។',
    },
    personality: {
      id: ['Cheerful', 'Caring', 'Expressive'],
      en: ['Cheerful', 'Caring', 'Expressive'],
      km: ['រីករាយ', 'ចេះយកចិត្តទុកដាក់', 'ពូកែបង្ហាញអារម្មណ៍'],
    },
    quote: {
      id: 'Semua orang berhak mendapatkan senyuman hangat dan sepotong kue hari ini!',
      en: 'Everyone deserves a warm hug and a fresh slice of sweet pie today!',
      km: 'មនុស្សគ្រប់គ្នាសក្តិសមនឹងទទួលបានការឱបដ៏កក់ក្តៅ និងនំផ្អែមមួយចំណិតនៅថ្ងៃនេះ!',
    },
    favorite: {
      id: 'Memanggang pie blueberry, merangkai mahkota bunga, dan memberi pelukan',
      en: 'Baking wild berry tarts, braiding flower wreaths, and warm hugs',
      km: 'ការដុតនំប៊ឺរីព្រៃ ការត្បាញកម្រងផ្កា និងការឱបយ៉ាងកក់ក្តៅ',
    },
    funFact: {
      id: 'Bisa tahu perasaan temannya hanya dari aroma hembusan napas mereka.',
      en: 'Can sense how a friend is feeling simply by the sweet aroma around them.',
      km: 'អាចដឹងពីអារម្មណ៍របស់មិត្តភក្តិបាន តាមរយៈក្លិនក្រអូបផ្អែមជុំវិញខ្លួនពួកគេ។',
    },
    speechText: {
      id: 'Yeay kamu datang! Aku baru selesai memanggang kue pie madu yang manis!',
      en: 'Yay, you arrived! I just finished baking sweet honey berry pies!',
      km: 'យេយ អ្នកមកដល់ហើយ! ខ្ញុំទើបតែដុតនំទឹកឃ្មុំប៊ឺរីរួចក្តៅៗ!',
    },
    idleSpeech: {
      id: [
        'Siapa yang mau coba kue hangat ini?',
        'Bunga mawar ini mekar indah sekali!',
        'Pelukan adalah obat terbaik.'
      ],
      en: [
        'Who wants a taste of this warm pie?',
        'These rose blossoms smell divine!',
        'A warm hug makes everything better.'
      ],
      km: [
        'តើនរណាខ្លះចង់ភ្លក្សនំក្តៅៗនេះ?',
        'ផ្កាកុលាបទាំងនេះរីកស្អាតណាស់!',
        'ការឱបគឺជាថ្នាំព្យាបាលដ៏ល្អបំផុត។'
      ],
    },
    themeColor: {
      primary: '#ED64A6',
      secondary: '#FBB6CE',
      bg: '#FFF5F7',
      text: '#702459',
      accent: '#D53F8C',
      border: '#FED7E2',
      glow: 'rgba(237, 100, 166, 0.45)',
    },
    imagePath: '/assets/characters/cici.png',
    idleAnimation: 'bounce',
    worldPosition: {
      x: 60,
      y: 35,
      scale: 1.05,
      zIndex: 14,
      facing: 'left',
      spotDescription: {
        id: 'Di atas bukit awan manis sedang menata keranjang pie',
        en: 'Arranging fresh sweet pastry baskets on the cloud terrace',
        km: 'រៀបចំកន្ត្រកនំផ្អែមៗនៅលើដំបូលពពកដ៏ស្រស់ស្អាត',
      },
    },
    soundType: 'pop',
    specialReaction: {
      id: 'Menghamburkan kelopak bunga mawar dan kue pie kecil yang melayang manis!',
      en: 'Showers floating rose petals and mini sparkling pastry hearts!',
      km: 'បាចផ្កាកុលាប និងបេះដូងនំតូចៗអណ្តែតលើអាកាសយ៉ាងផ្អែមល្ហែម!',
    },
  },

  {
    id: 'reirei',
    number: '06',
    name: {
      id: 'Rei Rei',
      en: 'Rei Rei',
      km: 'រ៉ីរ៉ី (Rei Rei)',
    },
    tagline: {
      id: 'Gadis senja anggun yang menyimpan rahasia bintang-bintang.',
      en: 'The graceful twilight sprite who guards celestial secrets.',
      km: 'ទេពអប្សរពេលព្រលប់ដ៏ស្រស់ស្អាតដែលរក្សាអាថ៌កំបាំងនៃផ្កាយ។',
    },
    personality: {
      id: ['Elegant', 'Mysterious', 'Slightly Shy'],
      en: ['Elegant', 'Mysterious', 'Slightly Shy'],
      km: ['ថ្លៃថ្នូរ', 'អាថ៌កំបាំង', 'អៀនប្រៀនបន្តិច'],
    },
    quote: {
      id: 'Bintang malam ini berbisik cerita lama yang belum pernah tertulis di buku...',
      en: 'Tonight the constellations whisper ancient tales never written in books...',
      km: 'ផ្កាយនាពេលរាត្រីនេះកំពុងខ្សឹបប្រាប់រឿងរ៉ាវបុរាណដែលមិនធ្លាប់មានចារក្នុងសៀវភៅ...',
    },
    favorite: {
      id: 'Bunga lily malam, kristal embun bulan, dan melodi kotak musik kuno',
      en: 'Night-blooming lilies, lunar dew drops, and antique music boxes',
      km: 'ផ្កាព្រលិតរាត្រី ដំណក់ទឹកសន្សើមព្រះច័ន្ទ និងប្រអប់តន្ត្រីបុរាណ',
    },
    funFact: {
      id: 'Langkah kakinya meninggalkan jejak serbuk cahaya redup yang wangi aroma lavender.',
      en: 'Her soft footsteps leave trails of lavender-scented stardust in the grass.',
      km: 'ជំហានជើងរបស់នាងបន្សល់ទុកធូលីផ្កាយក្រអូបក្លិនផ្កាឡាវេនឌឺលើស្មៅ។',
    },
    speechText: {
      id: 'Senang bertemu denganmu di sini... semoga harimu penuh kedamaian batin.',
      en: 'It is a pleasure to meet you here... may your soul find quiet peace.',
      km: 'រីករាយណាស់ដែលបានជួបអ្នកនៅទីនេះ... សូមឱ្យចិត្តរបស់អ្នកពោរពេញដោយសេចក្តីស្ងប់។',
    },
    idleSpeech: {
      id: [
        'Cahaya bintang malam ini sangat terang...',
        'Ada bisikan angin dari kejauhan...',
        'Simpanlah sebuah rahasia kecil bersamaku.'
      ],
      en: [
        'The starlight shines bright tonight...',
        'A gentle whisper travels on the breeze...',
        'Keep a quiet little secret with me.'
      ],
      km: [
        'ពន្លឺផ្កាយយប់នេះភ្លឺថ្លាណាស់...',
        'មានសំឡេងខ្យល់ខ្សឹបពីចម្ងាយ...',
        'សូមរក្សាអាថ៌កំបាំងតូចមួយជាមួយខ្ញុំណា។'
      ],
    },
    themeColor: {
      primary: '#805AD5',
      secondary: '#B794F4',
      bg: '#F3E8FF',
      text: '#322659',
      accent: '#6B46C1',
      border: '#D6BCFA',
      glow: 'rgba(128, 90, 213, 0.5)',
    },
    imagePath: '/assets/characters/reirei.png',
    idleAnimation: 'float',
    worldPosition: {
      x: 88,
      y: 40,
      scale: 1.0,
      zIndex: 11,
      facing: 'left',
      spotDescription: {
        id: 'Duduk anggun di dahan pohon lentera rembulan',
        en: 'Perched gracefully on the moonlit lantern bough',
        km: 'អង្គុយយ៉ាងថ្លៃថ្នូរនៅលើមែកឈើចង្កៀងព្រះច័ន្ទ',
      },
    },
    soundType: 'chime',
    specialReaction: {
      id: 'Melayang lembut memancarkan halo galaksi mini yang berputar menenangkan!',
      en: 'Floats gently, radiating a calming swirling mini galaxy halo!',
      km: 'អណ្តែតខ្លួនយ៉ាងទន់ភ្លន់ បញ្ចេញពន្លឺកាឡាក់ស៊ីខ្នាតតូចវិលជុំវិញ!',
    },
  },

  {
    id: 'momo',
    number: '07',
    name: {
      id: 'Momo',
      en: 'Momo',
      km: 'ម៉ូម៉ូ (Momo)',
    },
    tagline: {
      id: 'Si lembut yang hobi rebahan di bawah semak bunga mawar paling empuk.',
      en: 'The soft sleepyhead snuggled cozily under sweet rose blossoms.',
      km: 'អ្នកទន់ភ្លន់ដែលចូលចិត្តគេងសម្រាកក្រោមគុម្ពផ្កាកុលាបដ៏ទន់ស្អាត។',
    },
    personality: {
      id: ['Sweet', 'Relaxed', 'Sleepy'],
      en: ['Sweet', 'Relaxed', 'Sleepy'],
      km: ['ផ្អែមល្ហែម', 'ស្រណុកសុខស្រួល', 'ងងុយគេង'],
    },
    quote: {
      id: 'Momo lagi santai... lima menit lagi ya, kasurnya terlalu hangat zZz...',
      en: 'Momo is relaxing... five more minutes please, the blanket is so cozy zZz...',
      km: 'ម៉ូម៉ូកំពុងសម្រាក... សុំ ៥ នាទីទៀត ពូកនេះក្តៅស្រួលណាស់ zZz...',
    },
    favorite: {
      id: 'Bantal marshmallow, mimpi melayang, dan dongeng pengantar tidur',
      en: 'Fluffy marshmallow pillows, floating dreams, and lullaby music',
      km: 'ខ្នើយម៉ាសម៉ាឡូវទន់ៗ ការយល់សប្តិ និងតន្ត្រីបំពេរគេងលក់',
    },
    funFact: {
      id: 'Bisa tertidur lelap dalam 10 detik di mana saja, bahkan saat berdiri tegak.',
      en: 'Can fall sound asleep within 10 seconds flat anywhere, even standing upright.',
      km: 'អាចគេងលក់ស្កប់ស្កល់ត្រឹម ១០ វិនាទីនៅគ្រប់ទីកន្លែង សូម្បីតែពេលឈរក៏ដោយ។',
    },
    speechText: {
      id: 'Hoaaam... kamu ngantuk juga ya? Sini rebahan bareng Momo.',
      en: 'Yaaawn... are you sleepy too? Come snuggle on this floral lawn with Momo.',
      km: 'ស្ងាប... អ្នកងងុយគេងដែរមែនទេ? មកគេងក្បែរម៉ូម៉ូនៅលើវាលផ្កានេះមក។',
    },
    idleSpeech: {
      id: [
        'zZz... marshmallow manis...',
        'Hoaaam... enaknya merem sebentar...',
        'Rumput bunga ini empuk banget...'
      ],
      en: [
        'zZz... sweet marshmallow dreams...',
        'Yaaawn... a quick five-minute nap...',
        'This flower bed is so soft...'
      ],
      km: [
        'zZz... សុបិនឃើញម៉ាសម៉ាឡូវផ្អែមឆ្ងាញ់...',
        'ស្ងាប... បានបិទភ្នែកបន្តិចពិតជាស្រួល...',
        'កម្រាលផ្កានេះទន់ខ្លាំងណាស់...'
      ],
    },
    themeColor: {
      primary: '#9F7AEA',
      secondary: '#D6BCFA',
      bg: '#FAF5FF',
      text: '#44337A',
      accent: '#805AD5',
      border: '#E9D8FD',
      glow: 'rgba(159, 122, 234, 0.45)',
    },
    imagePath: '/assets/characters/momo.png',
    idleAnimation: 'sleep',
    worldPosition: {
      x: 26,
      y: 78,
      scale: 1.1,
      zIndex: 22,
      facing: 'right',
      spotDescription: {
        id: 'Rebahan lelap di bawah semak bunga mawar yang harum dan hangat',
        en: 'Curled up happily asleep in the warm, fragrant rose garden',
        km: 'គេងលក់យ៉ាងស្កប់ស្កល់ក្នុងសួនផ្កាកុលាបដ៏ក្រអូប',
      },
    },
    soundType: 'yawn',
    specialReaction: {
      id: 'Menguap panjang, memeluk guling bintang, dan mengeluarkan gelembung tidur berkilau!',
      en: 'Yawns adorably, hugs star pillow, and floats glowing sleepy bubbles!',
      km: 'ស្ងាបយ៉ាងគួរឱ្យស្រឡាញ់ ឱបខ្នើយផ្កាយ និងបញ្ចេញពពុះគេងភ្លឺផ្លេកៗ!',
    },
  },

  {
    id: 'jeo',
    number: '08',
    name: {
      id: 'Jeo',
      en: 'Jeo',
      km: 'ជេអូ (Jeo)',
    },
    tagline: {
      id: 'Anak paling santai dan keren dengan headphone retro andalan.',
      en: 'The chillest lo-fi groove master with iconic retro headphones.',
      km: 'មិត្តដ៏ឡូយ និងស្រណុកសុខស្រួលជាមួយកាសស្តាប់ត្រចៀកបុរាណ។',
    },
    personality: {
      id: ['Cool', 'Funny', 'Laid-back'],
      en: ['Cool', 'Funny', 'Laid-back'],
      km: ['ឡូយ', 'កំប្លែង', 'ស្រណុកសុខស្រួល'],
    },
    quote: {
      id: 'Take it easy, bro! Dunia ini terlalu asyik untuk diburu-buru panik.',
      en: 'Take it easy, friend! The world is far too good to rush through in a panic.',
      km: 'កុំប្រញាប់ពេកមិត្ត! ពិភពលោកនេះពិតជាអស្ចារ្យពេកហើយ មិនបាច់តក់ក្រហល់ទេ។',
    },
    favorite: {
      id: 'Headphone jingga retro, kacamata hitam bintang, dan irama lo-fi chill',
      en: 'Orange retro headphones, star sunglasses, and chill vinyl beats',
      km: 'កាសពណ៌ទឹកក្រូចបុរាណ វ៉ែនតាផ្កាយខ្មៅ និងភ្លេង lo-fi ស្រទន់',
    },
    funFact: {
      id: 'Bisa bermain skateboard di atas batang pelangi tanpa pernah terjatuh sekalipun.',
      en: 'Can balance his skateboard across rainbow arcs without ever slipping once.',
      km: 'អាចជិះស្គីលើធ្នូឥន្ទធនូបានយ៉ាងស្ទាត់ជំនាញដោយមិនដែលធ្លាក់ឡើយ។',
    },
    speechText: {
      id: 'Sup bro! Cuaca hari ini 10/10 banget. Nikmati ketukan musiknya yuk!',
      en: 'Sup buddy! Today’s vibe is a solid 10 out of 10. Catch this groove!',
      km: 'សួស្តីមិត្ត! អាកាសធាតុថ្ងៃនេះល្អខ្លាំងណាស់ ១០/១០។ តោះស្តាប់ភ្លេងទាំងអស់គ្នា!',
    },
    idleSpeech: {
      id: [
        'Beat lagu ini asyik banget...',
        'Santai saja, gak usah tegang kawan.',
        'Kacamata ini bikin dunia makin kece.'
      ],
      en: [
        'This lo-fi beat is immaculate...',
        'Chill out, no rush at all.',
        'These star shades make the world look cool.'
      ],
      km: [
        'ចង្វាក់ភ្លេងនេះពិរោះខ្លាំងណាស់...',
        'សម្រាកសិនទៅ កុំតានតឹងពេក។',
        'វ៉ែនតាផ្កាយនេះធ្វើឱ្យពិភពលោកកាន់តែឡូយ។'
      ],
    },
    themeColor: {
      primary: '#319795',
      secondary: '#81E6D9',
      bg: '#E6FFFA',
      text: '#1D4044',
      accent: '#285E61',
      border: '#B2F5EA',
      glow: 'rgba(49, 151, 149, 0.45)',
    },
    imagePath: '/assets/characters/jeo.png',
    idleAnimation: 'breathe',
    worldPosition: {
      x: 52,
      y: 75,
      scale: 1.05,
      zIndex: 21,
      facing: 'left',
      spotDescription: {
        id: 'Bersandar santai di bangku taman kayu dekat kincir angin',
        en: 'Reclining smoothly on the park bench by the windmill',
        km: 'ផ្អែកខ្នងយ៉ាងស្រណុកលើកៅអីសួនក្បែរកង្ហារខ្យល់',
      },
    },
    soundType: 'pop',
    specialReaction: {
      id: 'Menurunkan kacamata hitamnya dengan gaya finger-gun disertai melodi funk asyik!',
      en: 'Tips down star sunglasses with double finger guns and a funky tune!',
      km: 'ទម្លាក់វ៉ែនតាផ្កាយចុះ ធ្វើកាយវិការបាញ់កាំភ្លើងដៃ និងចាក់ភ្លេង funk យ៉ាងឡូយ!',
    },
  },

  {
    id: 'zyzy',
    number: '09',
    name: {
      id: 'Zyzy',
      en: 'Zyzy',
      km: 'ហ្ស៊ីហ្ស៊ី (Zyzy)',
    },
    tagline: {
      id: 'Roket kecil bertenaga tak terbatas yang tak bisa diam sedetik pun!',
      en: 'The hyper-speed lightning spark who cannot sit still for a second!',
      km: 'រ៉ុក្កែតតូចដែលមានថាមពលគ្មានដែនកំណត់ មិនអាចនៅស្ងៀមបានមួយវិនាទីឡើយ!',
    },
    personality: {
      id: ['Energetic', 'Chaotic', 'Spontaneous'],
      en: ['Energetic', 'Chaotic', 'Spontaneous'],
      km: ['មានថាមពលខ្លាំង', 'រពឹសខ្លាំង', 'ឆាប់រហ័ស'],
    },
    quote: {
      id: 'WUUUSH! Cepat cepat! Ada hal keren di sana, jangan sampai ketinggalan!',
      en: 'ZOOM! Fast fast! Something super cool is over there, don’t miss it!',
      km: 'វ៉ូស! លឿនៗឡើង! មានរឿងអស្ចារ្យនៅទីនោះ កុំឱ្យខកខានឱ្យសោះ!',
    },
    favorite: {
      id: 'Lari sprint lintang bukit, bermain kembang api letup mini, dan lompat trampolin',
      en: 'Sprint racing across slopes, harmless pop snappers, and trampolines',
      km: 'ការរត់ប្រណាំងកាត់ជម្រាលភ្នំ កាំជ្រួចតូចៗ និងការលោតត្រាំប៉ូលីន',
    },
    funFact: {
      id: 'Kecepatan larinya bisa membuat kincir angin bukit berputar 500 RPM!',
      en: 'Running speed can spin the meadow windmill at 500 RPM in seconds!',
      km: 'ល្បឿនរត់របស់គេអាចធ្វើឱ្យកង្ហារខ្យល់វិលដល់ទៅ ៥០០ ជុំក្នុងមួយនាទី!',
    },
    speechText: {
      id: 'Tadi kamu lihat gak? Aku baru saja lari keliling bukit dalam 2 detik!',
      en: 'Did you see that? I just zipped around the whole valley in 2 seconds!',
      km: 'ទើបតែឃើញទេ? ខ្ញុំទើបតែរត់ជុំវិញជ្រលងភ្នំទាំងមូលត្រឹម ២ វិនាទីប៉ុណ្ណោះ!',
    },
    idleSpeech: {
      id: [
        'Ayo gerak, jangan diam saja!',
        'Wuzz! Siapa mau balapan sama aku?',
        'Energi bateraiku masih 1000%!'
      ],
      en: [
        'Let’s move, no time to stand still!',
        'Whoosh! Who dares to race with me?',
        'My energy gauge is still at 1000%!'
      ],
      km: [
        'តោះធ្វើចលនា កុំនៅស្ងៀមអី!',
        'វ៉ូស! តើនរណាហ៊ានរត់ប្រណាំងជាមួយខ្ញុំ?',
        'ថាមពលរបស់ខ្ញុំនៅសល់ ១០០០% ទៀត!',
      ],
    },
    themeColor: {
      primary: '#DD6B20',
      secondary: '#FBD38D',
      bg: '#FFFAF0',
      text: '#7B341E',
      accent: '#C05621',
      border: '#FEEBC8',
      glow: 'rgba(221, 107, 32, 0.5)',
    },
    imagePath: '/assets/characters/zyzy.png',
    idleAnimation: 'dash',
    worldPosition: {
      x: 72,
      y: 62,
      scale: 0.95,
      zIndex: 18,
      facing: 'left',
      spotDescription: {
        id: 'Sedang bersiap melesat di jalur setapak rumput',
        en: 'Poised to dash along the winding grassy trail',
        km: 'ត្រៀមខ្លួនស្ទុះទៅមុខតាមគន្លងផ្លូវស្មៅ',
      },
    },
    soundType: 'boing',
    specialReaction: {
      id: 'Berputar seperti tornado mini dengan percikan petir kartun kuning cerah!',
      en: 'Whirls into a cartoon tornado with bright electric lightning sparks!',
      km: 'វិលខ្លួនដូចខ្យល់គួចតូចមួយ ជាមួយនឹងផ្កាភ្លើងអគ្គិសនីភ្លឺចិញ្ចាច!',
    },
  },

  {
    id: 'coco',
    number: '10',
    name: {
      id: 'Coco',
      en: 'Coco',
      km: 'កូកូ (Coco)',
    },
    tagline: {
      id: 'Matahari kecil berjalan yang siap menghangatkan siapa saja.',
      en: 'The walking sunshine whose golden smile warms every corner.',
      km: 'ព្រះអាទិត្យតូចដែលតែងតែនាំមកនូវភាពកក់ក្តៅដល់មនុស្សគ្រប់គ្នា។',
    },
    personality: {
      id: ['Warm', 'Optimistic', 'Affectionate'],
      en: ['Warm', 'Optimistic', 'Affectionate'],
      km: ['កក់ក្តៅ', 'សុទិដ្ឋិនិយម', 'មានសេចក្តីស្រឡាញ់'],
    },
    quote: {
      id: 'Jangan lupa tersenyum! Hari ini penuh kejutan indah untuk orang baik sepertimu!',
      en: 'Never forget to smile! Today holds wonderful surprises for someone sweet like you!',
      km: 'កុំភ្លេចញញឹមណា! ថ្ងៃនេះមានការភ្ញាក់ផ្អើលដ៏អស្ចារ្យជាច្រើនសម្រាប់មនុស្សល្អដូចអ្នក!',
    },
    favorite: {
      id: 'Bunga matahari kuning cerah, madu hutan murni, dan menggambar kartu ucapan',
      en: 'Bright sunflowers, wild wildflower honey, and doodling joyful greeting cards',
      km: 'ផ្កាឈូករ័ត្នពណ៌លឿងស្រស់ ទឹកឃ្មុំព្រៃ និងការគូរកាតជូនពរគួរឱ្យស្រឡាញ់',
    },
    funFact: {
      id: 'Senyumannya begitu tulus sampai kelopak bunga yang kuncup ikut mekar saat ia lewat.',
      en: 'His smile is so bright that sleepy buds bloom open as he walks past.',
      km: 'ស្នាមញញឹមរបស់គេភ្លឺថ្លាខ្លាំងរហូតដល់ផ្កាដែលក្រពុំ រីកស្គុះស្គាយពេលគេដើរកាត់។',
    },
    speechText: {
      id: 'Halo teman tersayang! Senyumanmu adalah hal paling berharga hari ini!',
      en: 'Hello wonderful friend! Your smile is the most precious thing in the world!',
      km: 'សួស្តីមិត្តសម្លាញ់! ស្នាមញញឹមរបស់អ្នកគឺជាអ្វីដែលមានតម្លៃបំផុតក្នុងថ្ងៃនេះ!',
    },
    idleSpeech: {
      id: [
        'Matahari menghangatkan kita semua...',
        'Bunga-bunga tersenyum balik padaku!',
        'Hari yang sempurna untuk bahagia.'
      ],
      en: [
        'The golden sunlight keeps us all warm...',
        'Sunflowers are smiling back at me!',
        'A truly perfect day to be happy.'
      ],
      km: [
        'ពន្លឺព្រះអាទិត្យផ្តល់ភាពកក់ក្តៅដល់ពួកយើងទាំងអស់គ្នា...',
        'ផ្កាឈូករ័ត្នកំពុងញញឹមដាក់ខ្ញុំវិញ!',
        'ថ្ងៃនេះជាថ្ងៃដ៏ល្អឥតខ្ចោះដើម្បីរីករាយ។'
      ],
    },
    themeColor: {
      primary: '#D69E2E',
      secondary: '#F6E05E',
      bg: '#FFFFF0',
      text: '#5F370E',
      accent: '#B7791F',
      border: '#FEFCBF',
      glow: 'rgba(214, 158, 46, 0.45)',
    },
    imagePath: '/assets/characters/coco.png',
    idleAnimation: 'breathe',
    worldPosition: {
      x: 82,
      y: 76,
      scale: 1.0,
      zIndex: 19,
      facing: 'left',
      spotDescription: {
        id: 'Duduk riang memegang bunga matahari di padang rumput emas',
        en: 'Sitting happily holding a sunflower in the golden meadow',
        km: 'អង្គុយយ៉ាងរីករាយកាន់ផ្កាឈូករ័ត្ននៅវាលស្មៅពណ៌មាស',
      },
    },
    soundType: 'chime',
    specialReaction: {
      id: 'Memancarkan sinar mentari keemasan di sekelilingnya diiringi denting lonceng hangat!',
      en: 'Radiates golden sunbeams with warm resonant chime bells!',
      km: 'បញ្ចេញកាំរស្មីព្រះអាទិត្យពណ៌មាសជុំវិញខ្លួន អមដោយសំឡេងកណ្ដឹងដ៏កក់ក្តៅ!',
    },
  },

  {
    id: 'hanhan',
    number: '11',
    name: {
      id: 'Hanhan',
      en: 'Hanhan',
      km: 'ហានហាន (Hanhan)',
    },
    tagline: {
      id: 'Sahabat pemalu yang mencintai riak air dan ketenangan alam.',
      en: 'The shy sweet soul who listens to gentle water ripples and pond songs.',
      km: 'មិត្តអៀនប្រៀនដែលស្រឡាញ់រលកទឹក និងភាពស្ងប់ស្ងាត់នៃធម្មជាតិ។',
    },
    personality: {
      id: ['Quiet', 'Cute', 'Observant'],
      en: ['Quiet', 'Cute', 'Observant'],
      km: ['ស្ងប់ស្ងាត់', 'គួរឱ្យស្រឡាញ់', 'ពូកែសង្កេត'],
    },
    quote: {
      id: 'Ssst... dengarkan baik-baik, dunia punya banyak rahasia indah yang berbisik lembut.',
      en: 'Shh... listen closely, the world has many gentle secrets softly whispering.',
      km: 'ស្ងាត់... ស្តាប់ឱ្យច្បាស់ ពិភពលោកមានរឿងសម្ងាត់ដ៏ស្រស់ស្អាតជាច្រើនកំពុងខ្សឹបប្រាប់។',
    },
    favorite: {
      id: 'Membuat perahu kertas kecil, mengumpulkan kerikil bening, dan mengamati ikan koi',
      en: 'Folding origami boats, gathering smooth creek pebbles, and koi fish watching',
      km: 'ការបត់ទូកក្រដាស ការប្រមូលក្រួសថ្លាៗ និងការមើលត្រីខយហែលទឹក',
    },
    funFact: {
      id: 'Bisa diajak mengobrol oleh katak hijau dan mengerti bahasa kepakan sayap capung.',
      en: 'Can hold calm conversations with pond frogs and understands dragonfly wingbeats.',
      km: 'អាចជជែកលេងជាមួយកង្កែបបៃតង និងយល់ភាសានៃស្លាបកណ្តូបហោះហើរ។',
    },
    speechText: {
      id: 'Halo... maukah kamu melihat pantulan awan di air kolam bersamaku?',
      en: 'Hello... would you like to watch the cloud reflections on the pond with me?',
      km: 'សួស្តី... តើអ្នកចង់មើលស្រមោលពពកក្នុងទឹកស្រះជាមួយខ្ញុំទេ?',
    },
    idleSpeech: {
      id: [
        'Riak airnya membentuk lingkaran lucu...',
        'Ikan koi kecil itu menyapa kita...',
        'Sungguh tempat yang tenang sekali.'
      ],
      en: [
        'Water ripples make such cute circles...',
        'The little koi fish waved hello...',
        'Such a calm and peaceful place.'
      ],
      km: [
        'រលកទឹកបង្កើតជារង្វង់មូលគួរឱ្យស្រឡាញ់...',
        'កូនត្រីខយតូចកំពុងបក់កន្ទុយសួស្តីពួកយើង...',
        'ពិតជាទីកន្លែងដ៏ស្ងប់ស្ងាត់ និងសុខសាន្តមែន។'
      ],
    },
    themeColor: {
      primary: '#319795',
      secondary: '#76E4F7',
      bg: '#EBF8FF',
      text: '#234E52',
      accent: '#0BC5EA',
      border: '#BEE3F8',
      glow: 'rgba(11, 197, 234, 0.45)',
    },
    imagePath: '/assets/characters/hanhan.png',
    idleAnimation: 'float',
    worldPosition: {
      x: 65,
      y: 84,
      scale: 0.95,
      zIndex: 23,
      facing: 'right',
      spotDescription: {
        id: 'Berlutut manis di tepi kolam kristal dengan perahu kertas',
        en: 'Kneeling gently beside the crystal koi pond sailing paper boats',
        km: 'លុតជង្គង់យ៉ាងទន់ភ្លន់ក្បែរស្រះទឹកថ្លា បណ្តែតទូកក្រដាស',
      },
    },
    soundType: 'pop',
    specialReaction: {
      id: 'Meniup gelembung air bening berkilau yang memantulkan pelangi ke sekeliling!',
      en: 'Blows a crystal water bubble that reflects miniature rainbows everywhere!',
      km: 'ផ្លុំពពុះទឹកថ្លាឆ្វង់ដែលជះពន្លឺឥន្ទធនូទៅកាន់គ្រប់ទិសទី!',
    },
  },

  {
    id: 'jayzee',
    number: '12',
    name: {
      id: 'Jayzee',
      en: 'Jayzee',
      km: 'ជេហ្ស៊ី (Jayzee)',
    },
    tagline: {
      id: 'Si karismatik penuh percaya diri dan pesona panggung tak tertandingi!',
      en: 'The charismatic star with unstoppable charm and playful swagger!',
      km: 'តារាដ៏មានមន្តស្នេហ៍ ពោរពេញដោយទំនុកចិត្ត និងទេពកោសល្យ!',
    },
    personality: {
      id: ['Playful', 'Confident', 'Charming', 'Curious', 'Slightly Mischievous'],
      en: ['Playful', 'Confident', 'Charming', 'Curious', 'Slightly Mischievous'],
      km: ['ចូលចិត្តលេង', 'មានទំនុកចិត្ត', 'មានមន្តស្នេហ៍', 'ចង់ដឹងចង់ឃើញ', 'កំហូចបន្តិច'],
    },
    quote: {
      id: 'Yo! Jayzee datang! Panggung dunia siap untuk aksi spektakuler kita!',
      en: 'Yo! Jayzee is here! The world stage is ready for our spectacular show!',
      km: 'យូ! ជេហ្ស៊ីមកដល់ហើយ! ឆាកនៃពិភពលោកត្រៀមខ្លួនសម្រាប់ការសម្តែងដ៏អស្ចារ្យរបស់យើង!',
    },
    favorite: {
      id: 'Topi snapback keren, trik sulap kartu bintang, dan ketukan beatbox asyik',
      en: 'Cool sideways snapbacks, star-card sleight of hand, and bouncy beatboxing',
      km: 'មួក snapback ដ៏ឡូយ ល្បិចសៀកសន្លឹកបៀផ្កាយ និងចង្វាក់ beatbox ពិរោះៗ',
    },
    funFact: {
      id: 'Bisa memunculkan koin bintang berkilau dari balik daun telinga siapa pun yang ia temui!',
      en: 'Can produce shiny golden star tokens from behind anyone’s ears on cue!',
      km: 'អាចទាញយកកាក់ផ្កាយមាសភ្លឺចែងចាំងពីក្រោយត្រចៀករបស់អ្នកដែលគេជួប!',
    },
    speechText: {
      id: 'Yo yo! Gimana gayaku hari ini? Kece banget kan? Ayo kita bikin gebrakan seru!',
      en: 'Yo yo! How is my style today? Looking sharp, right? Let’s make magic happen!',
      km: 'យូ យូ! តើស្ទីលរបស់ខ្ញុំថ្ងៃនេះយ៉ាងម៉េចដែរ? ឡូយណាស់មែនទេ? តោះបង្កើតភាពអស្ចារ្យ!',
    },
    idleSpeech: {
      id: [
        'Check one two... mic test!',
        'Gaya ini cuma ada satu di dunia, bro!',
        'Mau lihat trik sulap koin bintangku?'
      ],
      en: [
        'Check one two... mic test!',
        'Only one original style in this universe, fam!',
        'Wanna see my star coin magic trick?'
      ],
      km: [
        'ឆែក វ័ន ធូ... សាកសំឡេងមីក្រូហ្វូន!',
        'ស្ទីលនេះមានតែមួយគត់ក្នុងលោក!',
        'តើចង់ឃើញល្បិចសៀកកាក់ផ្កាយរបស់ខ្ញុំទេ?'
      ],
    },
    themeColor: {
      primary: '#6B46C1',
      secondary: '#9F7AEA',
      bg: '#F7FAFC',
      text: '#2D1B69',
      accent: '#4C1D95',
      border: '#D6BCFA',
      glow: 'rgba(107, 70, 193, 0.55)',
    },
    imagePath: '/assets/characters/jayzee.png',
    idleAnimation: 'bounce',
    worldPosition: {
      x: 39,
      y: 40,
      scale: 1.08,
      zIndex: 13,
      facing: 'right',
      spotDescription: {
        id: 'Berpose percaya diri di atas gazebo kayu bertabur bintang',
        en: 'Striking a confident star stance on the wooden park gazebo',
        km: 'ឈរបង្ហាញស្ទីលយ៉ាងជឿជាក់នៅលើសាលាសំណាក់ផ្កាយ',
      },
    },
    soundType: 'wink',
    specialReaction: {
      id: 'Melakukan pose charming wink, memutar topi snapback, dan mengeluarkan koin bintang emas!',
      en: 'Spins his snapback cap, charming wink, and produces golden star tokens!',
      km: 'វិលមួក snapback ញញឹមបាញ់ភ្នែក និងទាញយកកាក់ផ្កាយមាសយ៉ាងឡូយ!',
    },
  },
];
