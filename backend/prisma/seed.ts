import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');
  
  const womens = await prisma.category.create({
    data: {
      name: 'Womens',
      slug: 'womens',
    },
  });

  const mens = await prisma.category.create({
    data: {
      name: 'Mens',
      slug: 'mens',
    },
  });

  const scrubs = await prisma.category.create({
    data: {
      name: 'Scrubs',
      slug: 'scrubs',
    },
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'Catarina Scrub Top',
        slug: 'catarina-scrub-top',
        description: 'Simple and clean, but far from basic. The FIONx Catarina™ has a flattering V-neck, single chest pocket, classic fit and our proprietary FIONx™ fabric. Ta-da',
        price: 42.00,
        imageUrl: 'CATARINA_VERONICA_278.webp',
        categoryId: womens.id,
      },
      {
        name: 'Montex Relaxed Scrub Top',
        slug: 'montex-scrub-top',
        description: 'For that timeless, everyday look you can always rely on. The Montex features two pockets, a mock neck, curved hem, and oversized fit. For a more classic fit, we recommend sizing down.',
        price: 48.00,
        imageUrl: 'MONTEX_DEJA_872.webp',
        categoryId: womens.id,
      },
      {
        name: 'Zamora Jogger Scrub Pant',
        slug: 'zamora-jogger-scrub-pant',
        description: "With a classic fit, six pockets, a super comfortable yoga waistband and our proprietary FIONx™ fabric, the FIONx Zamora™ Jogger isn't messing around.",
        price: 52.00,
        imageUrl: 'ZAMORA_MIKELLA_0518.webp',
        categoryId: womens.id,
      },
      {
        name: 'Rafaela Oversized Scrub Top',
        slug: 'rafaela-oversized-scrub-top',
        description: "Modern design details AND super functional features? Whoa. The Rafaela™ has a mandarin collar and shirttail hem, multiple pockets, and an oversized fit. For a more classic fit, we recommend sizing down.",
        price: 42.00,
        imageUrl: 'RAFAELA_W_CHARO_1828.webp',
        categoryId: womens.id,
      },
      {
        name: 'Catarina Maternity Scrub Top',
        slug: 'catarina-maternity-scrub-top',
        description: "Our best-selling Catarina™—engineered for Awesome Mommas-to-Be. Features a V-Neck, handy chest pocket, side slits, and our proprietary FIONx Hyperstretch™ fabric.",
        price: 48.00,
        imageUrl: 'CATARINA-MATERNITY_ANDREA_212.webp',
        categoryId: womens.id,
      },
      {
        name: 'Chisec Scrub Top',
        slug: 'chisec-scrub-top',
        description: 'One of our all-time favorites (and yours, too), the tailored-fit FIONx Chisec™ features three pockets, including two ingeniously hidden side seam pockets.',
        price: 42.00,
        imageUrl: 'CHISEC_M_DAVEY_21992.webp',
        categoryId: mens.id,
      },
      {
        name: 'Leon Scrub Top',
        slug: 'leon-scrub-top',
        description: 'Simple design. The FIONx Leon™ is modern without sacrificing the utility you need, featuring a tailored cut, double chest pocket and pen sleeve.',
        price: 42.00,
        imageUrl: 'LEON_SCOTT_00068.webp',
        categoryId: mens.id,
      },
      {
        name: 'High-Pile Fleece Bomber Jacket',
        slug: 'high-pile-fleece-bomber-jacket',
        description: 'AC keeps you cold. We keep you warm. The High-Pile Fleece Bomber Jacket is made of a fuzzy fleece in an awesome modern bomber fit.',
        price: 128.00,
        imageUrl: 'HIGHPILEBOMBER_TERRANCE_1248.webp',
        categoryId: mens.id,
      },
      {
        name: 'On-Shift Sweater Knit Jacket',
        slug: 'on-shift-sweater-knit-jacket',
        description: 'Warmth + storage + modern touches = your new favorite layering piece. The On-Shift Sweater Knit Jacket™ is soft and cozy, with 9 pockets for keys, snacks, etc.',
        price: 98.00,
        imageUrl: 'CORE-REFRESH_M_SCOTT_24397.webp',
        categoryId: mens.id,
      },
      {
        name: 'Troy Scrub Jacket',
        slug: 'troy-scrub-jacket',
        description: 'Pull it all together—in a snap. Supremely lightweight, with a stylish button snap closure and seven pockets for safekeeping.',
        price: 78.00,
        imageUrl: 'TROY_SCRUB_JACKET_DAVEY_1869.webp',
        categoryId: mens.id,
      },
      {
        name: 'Cobaki Scrub Vest Navy',
        slug: 'cobaki-scrub-vest-navy',
        description: 'Just like the scrub jacket you know and love—sans sleeves. Perfect for warmer weather (and/or busted air conditioning), this lightweight, many-pocketed layering piece is super functional and stylish. Win-win.',
        price: 88.00,
        imageUrl: 'COBAKIVEST_TEVIN_971.webp',
        categoryId: mens.id,
      },
      {
        name: 'Isabel High-Rise Wide-Leg Scrub Pant',
        slug: 'isabel-scrub-pants',
        description: 'Go wide with on-the-pulse appeal. The Isabel High-Rise Wide-Leg Scrub Pant features a roomy silhouette with eight pockets and a super comfy waistband.',
        price: 58.00,
        imageUrl: 'ISABEL_SCRUB_PANTS.webp',
        categoryId: scrubs.id,
      },
      {
        name: 'Livingston High-Rise Straight-Leg Scrub Pant',
        slug: 'livingston-high-waisted-scrub-pants',
        description: 'It’s called functional comfort. The FIONx Livingston High-Rise™ offers a flattering high rise (duh), two pockets, a straight leg and darts for shaping.',
        price: 48.00,
        imageUrl: 'LIVINGSTON_AYSSA_630.webp',
        categoryId: scrubs.id,
      },
      {
        name: 'Cobaki Scrub Jacket',
        slug: 'cobaki-scrub-jacket',
        description: 'Form meets extra function. With six pockets, the Cobaki Scrub Jacket offers is the on-shift storage solution you’ve been waiting for. Highly breathable, wrinkle-resistant fabric makes this the ultimate layer on shift and off.',
        price: 98.00,
        imageUrl: 'COBAKIJACKET_TEVIN_1063.webp',
        categoryId: scrubs.id,
      },
      {
        name: 'Scrub Cap With Buttonholes',
        slug: 'scrub-cap-with-buttonholes',
        description: 'With an absorbent knit terry lining, easy-adjust ties at the back and buttonholes to anchor PIPS™ for all-day ear relief, this Scrub Cap is a no-brainer.',
        price: 22.00,
        imageUrl: 'BUTTONHOLES_U_GHOST_58273.webp',
        categoryId: scrubs.id,
      },
      {
        name: 'Rafaela Wide-Leg ScrubJumpsuit',
        slug: 'rafaela-wide-leg-scrubJumpsuit',
        description: 'Make room! The Rafaela Wide-Leg ScrubJumpsuit™ features our classic Rafeala fit with a new wide leg silhouette.',
        price: 108.00,
        imageUrl: 'RAFAELA-WIDELEG-JUMPSUIT_DEJA_016.webp',
        categoryId: scrubs.id,
      },
    ],
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });