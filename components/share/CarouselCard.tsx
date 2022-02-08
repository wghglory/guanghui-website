import Link from 'next/link';

export default function CarouselCard({
  imgSrc,
  title,
  description,
  link,
}: {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="object-fit rounded-xl bg-gray-200 dark:bg-gray-700">
      <img src={imgSrc} alt="project image" className="rounded-t-xl" />
      <div className="space-y-6 p-8">
        <header className="text-center text-2xl font-semibold">{title}</header>
        <p>{description}</p>
        <Link href={link}>
          <a className="group flex cursor-pointer items-center justify-center gap-3 text-center hover:text-king-600 dark:hover:text-king-400">
            Find Out More
            <svg
              className="-rotate-90 duration-200 group-hover:translate-x-2"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}
