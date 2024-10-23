import Image from "next/image";
import Imagem from "@/public/image.png"

const Hero = () => {
    return (
        <div className='w-full p-10 dark:bg-green-50 bg-slate-900 rounded-3xl text-slate-600 text-3xl grid grid-cols-2 gap-8'>
            <Image src={Imagem} alt="logo" className="min-w-40 rounded-full" />
            <p className="text-slate-900 text-xl">
                <p className="text-slate-700 text-3xl text-justify">Lucas Furtado</p>
                <p className="text-slate-600 text-2xl text-justify">Software Developer</p>
            </p>
            <p className="text-slate-900 text-xl text-justify col-span-2 flex gap-10">
                Hi, I&apos;m Lucas, I&apos;m a software developer. <br />
                I&apos;m always looking for new challenges. <br />
                I have some projects that I&apos;m working on. <br />
                Using PL/SQL, Python, PHP and React.
            </p>
        </div>
    )
}

export default Hero;