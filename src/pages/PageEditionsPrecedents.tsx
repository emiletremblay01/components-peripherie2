export function PageEditionsPrecedentes() {
  return (
    <>
      <hr className="mx-4 mb-1 mt-16 border-black sm:mt-0" />
      <div className="mb-16 flex flex-1 flex-col gap-5 px-4 ">
        <h1 className="mb-24  text-3xl font-bold">Éditions précédentes</h1>
        <EditionItem {...firstEdition} />
      </div>
    </>
  );
}
const firstEdition: EditionItemProps = {
  title: "Périphérie #1",
  subtitle: "La filiation dans la création",
  year: "2022",
  link: "",
  image: "https://picsum.photos/200",
};

type EditionItemProps = {
  title: string;
  subtitle: string;
  year: string;
  link?: string;
  image?: string;
};

function EditionItem({ title, subtitle, year, link, image }: EditionItemProps) {
  return (
    <section>
      <hr className="border-black" />
      <div className="flex h-52 justify-between xl:aspect-[1280/216] xl:h-min xl:text-xl">
        <div className="flex flex-col gap-3 pt-1 md:max-w-6xl md:flex-1 md:flex-row">
          <div className="flex flex-col gap-3 md:flex-1">
            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
          <p className="flex-1">{year}</p>
          <p className="h-fit md:flex-1">
            <a href={link} className="group hover:opacity-80">
              En savoir plus{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline h-4 w-4 transition-transform duration-150 ease-in-out group-hover:translate-x-1 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </p>
        </div>
        <img src={image} alt="sum" />
      </div>
    </section>
  );
}
