import { ShopCard } from "../components/ShopCard";
import storeItems from "../data/storeItems.json";
export function PageBoutique() {
  return (
    <section className="mb-16 flex-1">
      <hr className="mx-4 mb-1 mt-16 border-black sm:mt-0" />
      <h1 className="mb-24 ml-4 text-3xl font-bold">Boutique</h1>
      <div className="flex grow flex-col flex-wrap items-center justify-center gap-12 sm:flex-row sm:gap-6 sm:px-4 ">
        {storeItems.map((storeItem) => (
          <ShopCard
            key={storeItem.id}
            id={storeItem.id}
            name={storeItem.name}
            price={storeItem.price}
            description={storeItem.description}
            imageUrl={storeItem.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
