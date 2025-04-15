export type Category = "All" | "Website" | "Art" | "Design Grafis";

export interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  description: string;
  imageUrl: string; // Tambahan
  templateUrl?: string;
  websiteUrl?: string;
  techIcons: string[]; // Tambahan
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "AltNime",
    category: "Website",
    description: "Website built with Django",
    imageUrl: "/website/1.png",
    websiteUrl:"altnime.vercel.app",
    techIcons: [
      "devicon-django-plain",
      "devicon-tailwindcss-plain",
      "devicon-mysql-original",
    ],
  },
  {
    id: 2,
    title: "Artoria",
    category: "Art",
    description: "Traditional pencil sketches",
    imageUrl: "/art/artoria.png",
    techIcons: [],
  },
  {
    id: 3,
    title: "Poster Burger",
    category: "Design Grafis",
    description: "Poster for product launch",
    imageUrl: "/design/burger.jpg",
    templateUrl: "/templates/burger.eps",
    techIcons: ["devicon-illustrator-plain", "devicon-photoshop-plain"],
  },
  {
    id: 4,
    title: "Frieren",
    category: "Art",
    description: "Traditional pencil sketches",
    imageUrl: "/art/frieren.png",
    techIcons: [],
  },
  {
    id: 5,
    title: "Himmel",
    category: "Art",
    description: "Traditional pencil sketches",
    imageUrl: "/art/himmel.png",
    techIcons: [],
  },
  {
    id: 6,
    title: "Poster Design",
    category: "Design Grafis",
    description: "Poster for product launch",
    imageUrl: "/design/themoon.jpg",
    templateUrl: "/templates/themoon.eps",
    techIcons: ["devicon-illustrator-plain"],
  },
  {
    id: 7,
    title: "Poster Design",
    category: "Design Grafis",
    description: "Poster for product launch",
    imageUrl: "/design/matcha.jpg",
    templateUrl: "/templates/matchatea.eps",
    techIcons: ["devicon-illustrator-plain", "devicon-photoshop-plain"],
  },
  {
    id: 8,
    title: "Poster Design",
    category: "Design Grafis",
    description: "Poster for product launch",
    imageUrl: "/design/book1.png",
    templateUrl: "",
    techIcons: ["devicon-illustrator-plain", "devicon-photoshop-plain"],
  },
  {
    id: 9,
    title: "Poster Design",
    category: "Design Grafis",
    description: "Poster for product launch",
    imageUrl: "/design/book2.png",
    templateUrl: "",
    techIcons: ["devicon-illustrator-plain", "devicon-photoshop-plain"],
  },
  {
    id: 10,
    title: "Poster Design",
    category: "Design Grafis",
    description: "Poster for product launch",
    imageUrl: "/design/pizza_poster.jpg",
    templateUrl: "/templates/pizza_poster.eps",
    techIcons: ["devicon-illustrator-plain", "devicon-photoshop-plain"],
  },
  {
    id: 11,
    title: "Poster Design",
    category: "Design Grafis",
    description: "Poster for product launch",
    imageUrl: "/design/Poster_Bakso.jpg",
    templateUrl: "/templates/Poster_Bakso.eps",
    techIcons: ["devicon-illustrator-plain", "devicon-photoshop-plain"],
  },
  {
    id: 12,
    title: "Poster Design",
    category: "Design Grafis",
    description: "Poster for product launch",
    imageUrl: "/design/strawberryice.jpg",
    templateUrl: "/templates/strawberryice.eps",
    techIcons: ["devicon-illustrator-plain", "devicon-photoshop-plain"],
  },
];
