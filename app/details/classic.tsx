export interface Alien {
  id: number;
  name: string;
  image: string; 
  description: string;
  powers: string;
}

export const classicAliens: Alien[] = [
  {
    id: 1,
    name: "Heatblast",
    image: "/img/classic/heatblast.png",
    description: "Pyrokinetic alien with fire manipulation powers.",
    powers: "Fire control, heat generation",
  },
  {
    id: 2,
    name: "Four Arms",
    image: "/img/classic/fourarms.png",
    description: "Strong alien with four muscular arms.",
    powers: "Super strength, enhanced durability",
  },
  {
    id: 3,
    name: "XLR8",
    image: "/img/classic/xlr8.png",
    description: "Alien with super speed and agility.",
    powers: "Super speed, enhanced reflexes",
  },
  {
    id: 4,
    name: "Diamondhead",
    image: "/img/classic/diamondhead.png",
    description: "Crystal-based alien with the ability to create crystal weapons.",
    powers: "Crystal generation, weapon formation",
  },
  {
    id: 5,
    name: "Upgrade",
    image: "/img/classic/upgrade.png",
    description: "Nanotech alien capable of merging with technology.",
    powers: "Technological integration and upgrade",
  },
  {
    id: 6,
    name: "Ghostfreak",
    image: "/img/classic/ghostfreak.png",
    description: "Ethereal alien with stealth and intangibility.",
    powers: "Invisibility, intangibility, possession",
  },
  {
    id: 7,
    name: "Wildmutt",
    image: "/img/classic/wildmutt.png",
    description: "Beast-like alien with heightened senses and agility.",
    powers: "Enhanced smell, strength, agility",
  },
  {
    id: 8,
    name: "Stinkfly",
    image: "/img/classic/stinkfly.png",
    description: "Insectoid alien with flying and sticky projectiles.",
    powers: "Flight, sticky slime projectiles",
  },
  {
    id: 9,
    name: "Ripjaws",
    image: "/img/classic/ripjaws.png",
    description: "Aquatic alien with powerful jaws and underwater abilities.",
    powers: "Underwater breathing, swimming, biting power",
  },
  {
    id: 10,
    name: "Cannonbolt",
    image: "/img/classic/cannonbolt.png",
    description: "Armored alien who can curl into a ball and roll at high speed.",
    powers: "Rolling attack, strong armor",
  },
  {
    id: 11,
    name: "Grey Matter",
    image: "/img/classic/graymatter.png",
    description: "Small alien with high intelligence and problem-solving skills.",
    powers: "Genius-level intellect, advanced technology manipulation",
  }
];
