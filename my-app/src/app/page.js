import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Welcome to the Carousel Demo</h1>
      <Carousel />
    </main>
  )
}