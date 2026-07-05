import { Reveal } from "./reveal";

type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10">
      <h2 className="text-xl font-medium tracking-tight text-primary">{title}</h2>
      {description && (
        <p className="mt-2 text-secondary leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
