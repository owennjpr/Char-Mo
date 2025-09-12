import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center font-cutive">
      <p className="text-2xl">Pages</p>
      <Link href={"/random_enter"}>
        <p>randomized enter</p>
      </Link>
    </div>
  );
}
