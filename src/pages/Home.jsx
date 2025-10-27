import QuoteCard from "../components/QuoteCard";

export default function Home(){
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Random Quotes</h1>
      <QuoteCard />
    </div>
  );
}
