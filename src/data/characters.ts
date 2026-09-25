import type { CharacterPersonality } from '../types/character';

export const CHARACTERS_DATA: CharacterPersonality[] = [
  {
    id: 'riri',
    number: '01',
    isFemale: true,
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
    isFemale: true,
    name: {
      id: 'Cici',
      en: 'Cici',
      km: 'ស៊ីស៊ី (Cici)',
    },
    tagline: {
      id: 'Kembaran putih selembut salju yang hobi tidur lelap berselimut awan kapas.',
      en: 'The sleepy white twin sister cuddled in fluffy snow-white cloud blankets.',
      km: 'កូនភ្លោះស្រីពណ៌សទន់ដូចព្រិល ដែលចូលចិត្តគេងដណ្តប់ភួយពពកសំឡី។',
    },
    personality: {
      id: ['Sleepy Twin', 'Pure White', 'Cozy', 'Sweet'],
      en: ['Sleepy Twin', 'Pure White', 'Cozy', 'Sweet'],
      km: ['កូនភ្លោះងងុយគេង', 'ពណ៌សបរិសុទ្ធ', 'ស្រណុកសុខស្រួល', 'ផ្អែមល្ហែម'],
    },
    quote: {
      id: 'Hoaaam... bulu putihku sehangat awan kapas, ayo merem lima menit lagi bareng Cici dan Momo zZz...',
      en: 'Yaaawn... my white fur is as cozy as cotton clouds, five more minutes with Cici and Momo zZz...',
      km: 'ស្ងាប... រោមពណ៌សរបស់ខ្ញុំក្តៅស្រួលដូចពពកសំឡី សុំបិទភ្នែក ៥ នាទីទៀតជាមួយស៊ីស៊ី និងម៉ូម៉ូ zZz...',
    },
    favorite: {
      id: 'Bantal awan putih marshmallow, susu madu hangat murni, dan tidur berdua bersama kembarannya Momo',
      en: 'Snow-white marshmallow cloud pillows, warm honey milk, and snoozing together with twin sister Momo',
      km: 'ខ្នើយពពកសម៉ាសម៉ាឡូវ ទឹកដោះគោក្តៅ និងការគេងលក់ក្បែរកូនភ្លោះម៉ូម៉ូ',
    },
    funFact: {
      id: 'Bulu putihnya begitu lembut hingga awan di langit sering turun untuk tidur di sampingnya dan Momo.',
      en: 'Her white fur is so heavenly soft that passing clouds drift down to nap alongside her and Momo.',
      km: 'រោមពណ៌សរបស់នាងទន់ខ្លាំងណាស់ រហូតដល់ពពកលើមេឃចុះមកគេងក្បែរនាង និងម៉ូម៉ូ។',
    },
    speechText: {
      id: 'Hoaaam... kamu mau ikut tidur siang bareng Cici di atas kasur awan putih empuk ini?',
      en: 'Yaaawn... would you like to take a peaceful nap on this fluffy white cloud bed with Cici?',
      km: 'ស្ងាប... តើអ្នកចង់មកគេងថ្ងៃជាមួយស៊ីស៊ីនៅលើពូកពពកសទន់ៗនេះទេ?',
    },
    idleSpeech: {
      id: [
        'zZz... awan putih yang hangat...',
        'Momo pasti lagi mimpi indah juga...',
        'Kasur awan ini nyaman sekali...'
      ],
      en: [
        'zZz... warm marshmallow clouds...',
        'Momo must be having sweet dreams too...',
        'This white cloud bed is so peaceful...'
      ],
      km: [
        'zZz... ពពកសដ៏កក់ក្តៅ...',
        'ម៉ូម៉ូប្រាកដជាកំពុងយល់សប្តិល្អដែរ...',
        'ពូកពពកនេះស្រណុកស្រួលណាស់...'
      ],
    },
    themeColor: {
      primary: '#4A5568',
      secondary: '#E2E8F0',
      bg: '#FFFFFF',
      text: '#1A202C',
      accent: '#718096',
      border: '#E2E8F0',
      glow: 'rgba(226, 232, 240, 0.8)',
    },
    imagePath: '/assets/characters/cici.png',
    idleAnimation: 'sleep',
    worldPosition: {
      x: 60,
      y: 35,
      scale: 1.05,
      zIndex: 14,
      facing: 'left',
      spotDescription: {
        id: 'Tidur lelap di bukit awan putih selembut kapas (kembaran Momo)',
        en: 'Sleeping soundly on the fluffy white cloud terrace (Momo’s twin)',
        km: 'គេងលក់នៅលើដំបូលពពកសដូចសំឡី (កូនភ្លោះម៉ូម៉ូ)',
      },
    },
    soundType: 'yawn',
    specialReaction: {
      id: 'Menguap lembut memeluk bantal awan putih dan melayangkan kepulan gelembung mimpi zZz!',
      en: 'Yawns softly, hugging her pure white cloud pillow and floating dreamy zZz bubbles!',
      km: 'ស្ងាបយ៉ាងទន់ភ្លន់ ឱបខ្នើយពពកស និងបញ្ចេញពពុះសុបិន zZz ភ្លឺផ្លេកៗ!',
    },
  },

  {
    id: 'reirei',
    number: '06',
    isFemale: true,
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
    isFemale: true,
    name: {
      id: 'Momo',
      en: 'Momo',
      km: 'ម៉ូម៉ូ (Momo)',
    },
    tagline: {
      id: 'Kembaran pink yang hobi tidur lelap memeluk guling strawberry marshmallow.',
      en: 'The sleepy pink twin sister cuddling her strawberry marshmallow pillow.',
      km: 'កូនភ្លោះស្រីពណ៌ផ្កាឈូកដែលចូលចិត្តគេងឱបខ្នើយម៉ាសម៉ាឡូវស្ត្របឺរី។',
    },
    personality: {
      id: ['Sleepy Twin', 'Pink Sweetheart', 'Cozy', 'Dreamy'],
      en: ['Sleepy Twin', 'Pink Sweetheart', 'Cozy', 'Dreamy'],
      km: ['កូនភ្លោះងងុយគេង', 'ផ្កាឈូកផ្អែមល្ហែម', 'ស្រណុកសុខស្រួល', 'ចូលចិត្តសុបិន'],
    },
    quote: {
      id: 'Hoaaam... kasur mawar pink ini terlalu empuk, ayo tidur siang bareng Momo dan Cici zZz...',
      en: 'Yaaawn... this pink rose bed is so fluffy, let’s take a cozy nap with Momo and Cici zZz...',
      km: 'ស្ងាប... ពូកផ្កាកុលាបពណ៌ផ្កាឈូកនេះទន់ស្រួលណាស់ មកគេងថ្ងៃជាមួយម៉ូម៉ូ និងស៊ីស៊ីមក zZz...',
    },
    favorite: {
      id: 'Guling strawberry marshmallow, susu hangat stroberi, dan tidur berdua bersama kembarannya Cici',
      en: 'Strawberry marshmallow bolsters, warm pink milk, and snoozing together with twin sister Cici',
      km: 'ខ្នើយម៉ាសម៉ាឡូវស្ត្របឺរី ទឹកដោះគោក្តៅ និងការគេងលក់ក្បែរកូនភ្លោះស៊ីស៊ី',
    },
    funFact: {
      id: 'Bisa menguap secara bersamaan persis dengan Cici meskipun mereka sedang berada di tempat berbeda.',
      en: 'Yawns in perfect synchrony with twin sister Cici even when they nap in different spots.',
      km: 'អាចស្ងាបដំណាលគ្នាជាមួយកូនភ្លោះស៊ីស៊ី បើទោះជាគេងនៅកន្លែងផ្សេងគ្នាក៏ដោយ។',
    },
    speechText: {
      id: 'Hoaaam... kamu ngantuk juga ya? Sini rebahan di sebelah Momo, kasur pink ini muat banyak kok.',
      en: 'Yaaawn... are you sleepy too? Come snuggle next to Momo, this pink cloud has plenty of room.',
      km: 'ស្ងាប... អ្នកងងុយគេងដែរមែនទេ? មកគេងក្បែរម៉ូម៉ូ ពូកពណ៌ផ្កាឈូកនេះធំទូលាយណាស់។',
    },
    idleSpeech: {
      id: [
        'zZz... stroberi manis berselimut awan...',
        'Cici udah tidur belum ya? Hoaaam...',
        'Lima menit lagi ya, selimutnya hangat banget...'
      ],
      en: [
        'zZz... sweet pink strawberries on clouds...',
        'Is Cici already asleep too? Yaaawn...',
        'Five more minutes please, blanket is so cozy...'
      ],
      km: [
        'zZz... ស្ត្របឺរីផ្អែមលើពពក...',
        'តើស៊ីស៊ីគេងលក់ហើយឬនៅ? ស្ងាប...',
        'សុំ ៥ នាទីទៀត ភួយនេះក្តៅស្រួលណាស់...'
      ],
    },
    themeColor: {
      primary: '#FF6B8B',
      secondary: '#FFA3B5',
      bg: '#FFF0F3',
      text: '#9E1C38',
      accent: '#FF3366',
      border: '#FFCCD5',
      glow: 'rgba(255, 107, 139, 0.45)',
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
        id: 'Tidur lelap berselimut kelopak mawar pink hangat (kembaran Cici)',
        en: 'Sleeping soundly wrapped in warm pink rose petals (Cici’s twin)',
        km: 'គេងលក់យ៉ាងស្កប់ស្កល់ដណ្តប់ផ្កាកុលាបពណ៌ផ្កាឈូក (កូនភ្លោះស៊ីស៊ី)',
      },
    },
    soundType: 'yawn',
    specialReaction: {
      id: 'Menguap menggemaskan sambil memeluk bantal strawberry pink dan meniup gelembung mimpi zZz!',
      en: 'Yawns adorably while hugging her pink strawberry pillow and floating dreamy zZz bubbles!',
      km: 'ស្ងាបយ៉ាងគួរឱ្យស្រឡាញ់ ឱបខ្នើយស្ត្របឺរី និងបញ្ចេញពពុះសុបិន zZz ភ្លឺផ្លេកៗ!',
    },
  },

  {
    id: 'jeo',
    number: '08',
    isFemale: true,
    name: {
      id: 'Jeo',
      en: 'Jeo',
      km: 'ជេអូ (Jeo)',
    },
    tagline: {
      id: 'Gadis manis nan keren dengan headphone retro pastel dan playlist lo-fi estetik.',
      en: 'The effortlessly cute & cool girl vibing with pastel retro headphones and aesthetic lo-fi beats.',
      km: 'នារីដ៏គួរឱ្យស្រឡាញ់ និងឡូយស្អាត ជាមួយកាស retro pastel និងចង្វាក់ភ្លេង lo-fi ដ៏ពិរោះ។',
    },
    personality: {
      id: ['Cute', 'Cool Girl', 'Chic', 'Laid-back'],
      en: ['Cute', 'Cool Girl', 'Chic', 'Laid-back'],
      km: ['គួរឱ្យស្រឡាញ់', 'ឡូយស្អាត', 'ទាន់សម័យ', 'ស្រណុកសុខស្រួល'],
    },
    quote: {
      id: 'Stay cool, stay cute! Hidup ini terlalu asyik buat dibawa pusing, dengerin beat ini bareng aku yuk~',
      en: 'Stay cool, stay cute! Life is far too sweet to stress over, vibe to this beat with me~',
      km: 'ឡូយផង គួរឱ្យស្រឡាញ់ផង! ជីវិតនេះស្រស់បំព្រងណាស់ មកស្តាប់ចង្វាក់ភ្លេងជាមួយខ្ញុំណា~',
    },
    favorite: {
      id: 'Headphone jingga pastel, kacamata hitam retro, mixtape lo-fi estetik, dan es teh buah persik',
      en: 'Pastel orange headphones, chic retro shades, aesthetic lo-fi mixtapes, and peach iced tea',
      km: 'កាសពណ៌ទឹកក្រូច pastel វ៉ែនតាខ្មៅ អាល់ប៊ុម lo-fi និងតែផ្លែប៉េសត្រជាក់',
    },
    funFact: {
      id: 'Bisa meremix ketukan langkah kaki siapa saja menjadi melodi lo-fi yang menenangkan hanya dalam 5 detik.',
      en: 'Can remix anyone’s walking footsteps into a soothing, aesthetic lo-fi loop in 5 seconds flat.',
      km: 'អាចកែច្នៃស្នាមជើងរបស់អ្នកណាម្នាក់ឱ្យក្លាយជាភ្លេង lo-fi ដ៏ពិរោះក្នុងរយៈពេលតែ ៥ វិនាទី។',
    },
    speechText: {
      id: 'Hey! Suka lagu yang santai gak? Headphone-ku lagi mutar playlist paling aesthetic buat kamu.',
      en: 'Hey there! Into chill vibes? My headphones are playing the most aesthetic playlist for you.',
      km: 'សួស្តី! ចូលចិត្តបទភ្លេងស្រាលៗទេ? កាសរបស់ខ្ញុំកំពុងចាក់ចម្រៀងដ៏ស្រស់ស្អាតបំផុតសម្រាប់អ្នក។',
    },
    idleSpeech: {
      id: [
        'Bass-nya empuk banget di telinga...',
        'Kacamata ini bikin gayaku makin 10/10.',
        'Santai aja, dunia gak bakal lari kok.'
      ],
      en: [
        'This smooth bass groove is so good...',
        'These shades complete my 10/10 aesthetic.',
        'Keep it chill, no rush at all.'
      ],
      km: [
        'សំឡេងបាសពិរោះស្រទន់ណាស់...',
        'វ៉ែនតានេះធ្វើឱ្យស្ទីលខ្ញុំឡូយ ១០/១០។',
        'សម្រាកសិនទៅ ពិភពលោកមិនរត់ទៅណាទេ។'
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
        id: 'Duduk santai di bangku taman kayu sambil memutar playlist lo-fi aesthetic',
        en: 'Lounging on the park bench vibing to her aesthetic lo-fi playlist',
        km: 'អង្គុយលើកៅអីសួនយ៉ាងស្រណុក ស្តាប់បញ្ជីចម្រៀង lo-fi',
      },
    },
    soundType: 'wink',
    specialReaction: {
      id: 'Menurunkan kacamata hitamnya dengan kedipan manis finger-gun dan melodi groove estetik!',
      en: 'Tips down retro shades with a cute wink, finger-guns, and an aesthetic lo-fi melody!',
      km: 'ទម្លាក់វ៉ែនតាចុះ ញញឹមបាញ់ភ្នែកគួរឱ្យស្រឡាញ់ និងចាក់ភ្លេង lo-fi យ៉ាងឡូយ!',
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

  {
    id: 'zero',
    number: '13',
    isFemale: false,
    name: {
      id: 'Zero',
      en: 'Zero',
      km: 'ហ្សេរ៉ូ (Zero)',
    },
    tagline: {
      id: 'Cowok bersuara bariton berat nan hangat dengan aura tenang dan penuh pesona.',
      en: 'The deep-voiced guy with a calm, mysterious aura and a soothing baritone heart.',
      km: 'បុរសសំឡេងធ្ងន់ដ៏កក់ក្តៅ មានមន្តស្នេហ៍អាថ៌កំបាំង និងភាពស្ងប់ស្ងាត់។',
    },
    personality: {
      id: ['Deep Voice', 'Calm', 'Enigmatic', 'Gentle Guy'],
      en: ['Deep Voice', 'Calm', 'Enigmatic', 'Gentle Guy'],
      km: ['សំឡេងធ្ងន់', 'ស្ងប់ស្ងាត់', 'អាថ៌កំបាំង', 'សុភាពរាបសារ'],
    },
    quote: {
      id: 'Dunia kadang terlalu bising. Bicara pelan saja... suaraku akan selalu menemanimu di sini.',
      en: 'The world gets too loud sometimes. Speak softly... my voice will always keep you company.',
      km: 'ពេលខ្លះពិភពលោកនេះមានសំឡេងរំខានខ្លាំងណាស់។ និយាយតិចៗមក... សំឡេងខ្ញុំតែងតែនៅក្បែរអ្នក។',
    },
    favorite: {
      id: 'Kopi espresso hitam hangat, piringan hitam jazz midnight, dan angin malam di puncak tebing',
      en: 'Rich dark espresso, midnight jazz vinyl records, and cool midnight cliff breezes',
      km: 'កាហ្វេ espresso ខ្មៅក្តៅ កំណាត់ចានបៀ jazz រាត្រី និងខ្យល់ត្រជាក់លើកំពូលភ្នំ',
    },
    funFact: {
      id: 'Suara baritonnya yang begitu berat dan beresonansi bisa menenangkan dedaunan yang bergetar dan menidurkan tupai malam.',
      en: 'His low, resonant baritone voice can instantly soothe fluttering leaves and calm restless night critters.',
      km: 'សំឡេងធ្ងន់ដ៏ពីរោះរបស់គេ អាចលួងលោមស្លឹកឈើដែលញ័រ និងសត្វព្រៃរាត្រីឱ្យស្ងប់ចិត្តបានភ្លាមៗ។',
    },
    speechText: {
      id: 'Halo. Suaraku mungkin terdengar berat, tapi jangan sungkan... duduklah bersamaku di gardu pandang ini.',
      en: 'Hello. My voice might sound deep, but don’t be shy... come sit with me by the overlook.',
      km: 'សួស្តី។ សំឡេងរបស់ខ្ញុំប្រហែលជាធ្ងន់បន្តិច ប៉ុន្តែកុំបារម្ភ... មកអង្គុយមើលទេសភាពជាមួយខ្ញុំទីនេះមក។',
    },
    idleSpeech: {
      id: [
        'Malam yang sunyi selalu punya melodi sendiri.',
        'Kopi hitam ini baru saja diseduh.',
        'Tarik napas dalam-dalam... semuanya akan baik-baik saja.'
      ],
      en: [
        'Quiet nights always hold their own hidden melody.',
        'This dark roast coffee is freshly brewed.',
        'Take a slow deep breath... everything will be alright.'
      ],
      km: [
        'រាត្រីស្ងប់ស្ងាត់តែងតែមានភ្លេងផ្ទាល់ខ្លួន។',
        'កាហ្វេខ្មៅនេះទើបតែឆុងរួចថ្មីៗ។',
        'ដកដង្ហើមវែងៗ... អ្វីៗនឹងល្អប្រសើរឡើងវិញ។'
      ],
    },
    themeColor: {
      primary: '#2D3748',
      secondary: '#718096',
      bg: '#F7FAFC',
      text: '#1A202C',
      accent: '#4A5568',
      border: '#CBD5E0',
      glow: 'rgba(45, 55, 72, 0.45)',
    },
    imagePath: '/assets/characters/zero.png',
    idleAnimation: 'breathe',
    worldPosition: {
      x: 77,
      y: 48,
      scale: 1.06,
      zIndex: 16,
      facing: 'left',
      spotDescription: {
        id: 'Berdiri tenang di gardu pandang tebing senja sambil menikmati kopi hitam',
        en: 'Standing calmly on the twilight cliff overlook enjoying black coffee',
        km: 'ឈរយ៉ាងស្ងប់ស្ងាត់នៅលើកំពូលភ្នំមើលទេសភាពពេលព្រលប់ ពិសាកាហ្វេខ្មៅ',
      },
    },
    soundType: 'deep',
    specialReaction: {
      id: 'Berbisik dalam nada bariton hangat yang memicu gelombang bass beresonansi menenangkan!',
      en: 'Whispers in a warm baritone, sending soothing low-frequency acoustic ripples across the hills!',
      km: 'ខ្សឹបដោយសំឡេងធ្ងន់ដ៏កក់ក្តៅ បញ្ចេញរលកសំឡេងបាសដ៏ស្ងប់ស្ងាត់!',
    },
  },
];
