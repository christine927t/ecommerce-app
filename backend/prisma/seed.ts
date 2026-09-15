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
        imageUrl: 'https://example.com/running-shoes.jpg',
        categoryId: womens.id,
      },
      {
        name: 'Montex Relaxed Scrub Top',
        slug: 'montex-scrub-top',
        description: 'For that timeless, everyday look you can always rely on. The Montex features two pockets, a mock neck, curved hem, and oversized fit. For a more classic fit, we recommend sizing down.',
        price: 48.00,
        imageUrl: 'https://example.com/leather-sneakers.jpg',
        categoryId: womens.id,
      },
      {
        name: 'Chisec Scrub Top',
        slug: 'chisec-scrub-top',
        description: 'One of our all-time favorites (and yours, too), the tailored-fit FIONx Chisec™ features three pockets, including two ingeniously hidden side seam pockets.',
        price: 42.00,
        imageUrl: 'https://example.com/t-shirt.jpg',
        categoryId: mens.id,
      },
      {
        name: 'Leon Scrub Top',
        slug: 'leon-scrub-top',
        description: 'Simple design. The FIONx Leon™ is modern without sacrificing the utility you need, featuring a tailored cut, double chest pocket and pen sleeve.',
        price: 42.00,
        imageUrl: 'https://example.com/button-down.jpg',
        categoryId: mens.id,
      },
      {
        name: 'Isabel High-Rise Wide-Leg Scrub Pant',
        slug: 'isabel-scrub-pants',
        description: 'Go wide with on-the-pulse appeal. The Isabel High-Rise Wide-Leg Scrub Pant features a roomy silhouette with eight pockets and a super comfy waistband.',
        price: 58.00,
        imageUrl: 'https://example.com/backpack.jpg',
        categoryId: scrubs.id,
      },
      {
        name: 'Livingston High-Rise Straight-Leg Scrub Pant',
        slug: 'livingston-high-waisted-scrub-pants',
        description: 'It’s called functional comfort. The FIONx Livingston High-Rise™ offers a flattering high rise (duh), two pockets, a straight leg and darts for shaping.',
        price: 48.00,
        imageUrl: 'https://example.com/wallet.jpg',
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