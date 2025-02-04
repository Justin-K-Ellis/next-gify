export default function PageTitle({ text }: { text: string }) {
  return (
    <h2 className="text-2xl font-bold underline text-center mb-4">{text}</h2>
  );
}
