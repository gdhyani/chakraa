import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex h-screen align-middle justify-center flex-col items-center p-24">
            <h1 className="font-extrabold text-7xl">Chakraa</h1>
            <br></br>
            <Link className="underline text-purple-400" href="https://www.instagram.com/chakraa360marketing" >Instagram</Link>
        </main>
    );
}
