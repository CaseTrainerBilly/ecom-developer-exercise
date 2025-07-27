import Carousel from "../components/Carousel";
import recommendations from "../data/recommendations.json";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Welcome to the Carousel Demo</h1>
      <Carousel products={recommendations.productData} />
    </main>
  );
}