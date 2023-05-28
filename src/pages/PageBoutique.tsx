import { ShopCard } from "../components/ShopCard";

export function PageBoutique() {
  return (
    <section className="mb-16 flex-1">
      <hr className="mx-4 mb-1 mt-16 border-black sm:mt-0" />
      <h1 className="mb-24 ml-4 text-3xl font-bold">Boutique</h1>
      <div className="flex grow flex-col flex-wrap items-center justify-center gap-12 sm:flex-row sm:gap-6 sm:px-4 ">
        <ShopCard
          name="T-shirt"
          price={10}
          imageUrl="https://picsum.photos/100/300"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl."
        />
        <ShopCard
          name="agaga"
          price={67}
          imageUrl="https://picsum.photos/200/300"
          description="afgafgafg"
        />
        <ShopCard
          name="Souliers"
          price={100}
          imageUrl="https://picsum.photos/100/300"
          description="afgafgafg"
        />
        <ShopCard
          name="T-shirt"
          price={10}
          imageUrl="https://picsum.photos/300/300"
        />
        <ShopCard
          name="T-shirt"
          price={10}
          imageUrl="https://picsum.photos/400/300"
        />
        <ShopCard
          name="Casquette"
          price={10}
          imageUrl="https://picsum.photos/500/300"
        />
        <ShopCard
          name="T-shirt"
          price={10}
          imageUrl="https://picsum.photos/600/300"
        />
        <ShopCard
          name="Casquette"
          price={10}
          imageUrl="https://picsum.photos/700/300"
        />
      </div>
    </section>
  );
}
