
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <div className='dark:bg-slate-900 bg-zinc-50 w-full min-h-screen text-green-500 dark:text-green-400 p-10'>
            <div className="w-full h-96 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <Hero />
            </div>
        </div>
    );
}
