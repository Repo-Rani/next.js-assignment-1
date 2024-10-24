import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-400 to-purple-600 text-white text-center p-6">
        <h1 className="font-semibold">
          Hey, lets Explore Dynamic Routing Like Never Before
          <br />
          <span className="block text-2xl font-semibold mt-2 ">
            <i>Dynamic Routes</i>
          </span>
        </h1>
        <Button />
      </div>
    </>
  );
}
