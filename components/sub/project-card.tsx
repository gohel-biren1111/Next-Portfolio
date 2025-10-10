import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transform transition-transform duration-500 hover:scale-[0.95]"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={600}
        className="w-full h-70 object-contain"
      />

      <div className="relative p-4 bg-[#0d0d0d]/60 backdrop-blur-sm">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};
