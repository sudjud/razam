import img1 from "@/assets/images/projects/previews/chambre-enfant.jpg";
import urbanKitchen from "@/assets/images/projects/urban-grace/kitchen.jpg";
import urbanCorridor from "@/assets/images/projects/urban-grace/corridor.jpg";
import urbanBedroom from "@/assets/images/projects/urban-grace/bedroom.jpg";
import urbanLounge from "@/assets/images/projects/urban-grace/lounge.jpg";
import urbanLounge2 from "@/assets/images/projects/urban-grace/lounge2.jpg";
import urbanPreview from "@/assets/images/projects/previews/urban-grace.jpg";

export const projects = [
  {
    name: "Chambre d'enfant",
    year: 2022,
    category: "Жилые помещения",
    type: "Дизайн и ремонт под ключ",
    preview: img1,
  },
  {
    name: "Elemental harmony",
    year: 2020,
    category: "Архитектура",
    type: "Дизайн и ремонт под ключ",
    preview: img1,
  },
  {
    name: "Modern vista",
    year: 2021,
    category: "Коммерческие объекты",
    type: "Дизайн и ремонт под ключ",
    preview: img1,
  },
  {
    name: "Natural essence",
    year: 2023,
    category: "Ландшафтный дизайн",
    type: "Дизайн и ремонт под ключ",
    preview: img1,
  },
  {
    name: "Serene lines",
    year: 2022,
    category: "Элитные интерьеры",
    type: "Дизайн и ремонт под ключ",
    preview: img1,
  },
  {
    name: "Urban grace",
    slug: "urban-grace",
    year: 2024,
    category: "Жилые помещения",
    type: "Дизайн и ремонт под ключ",
    preview: urbanPreview,
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "74 дня",
    client: "Луи Шантье",
    dislocation: "Канны, Франция",
    desc: "Проект, который сочетает уют и стиль. Тёплые оттенки, мягкие текстуры и гармоничные детали создают пространство, где хочется расслабиться и наслаждаться каждым моментом.",
    cost: "12,500",
    images: [
      {
        name: "Кухня",
        photo: urbanKitchen,
      },
      {
        name: "Спальня",
        photo: urbanBedroom,
      },
      {
        name: "Коридор",
        photo: urbanCorridor,
      },
      {
        name: "Гостиная",
        photo: urbanLounge2,
      },
      {
        name: "Гостиная",
        photo: urbanLounge,
      },
    ],
  },
];
