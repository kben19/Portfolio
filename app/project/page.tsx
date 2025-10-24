import Image from "next/image";
import Header from "../../components/Header";

export default function ProjectPage() {
    return (
        <>
            <Header links={[
                { href: "/", label: "Home" },
                { href: "/#about", label: "About" },
                { href: "/#work", label: "Work" },
                { href: "/#contact", label: "Contact" },
            ]}/>
            <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-emerald-50 to-white text-slate-800">
                <Image
                    src="/under-construction.svg"
                    alt="Under construction"
                    width={280}
                    height={280}
                    priority
                />
                <h1 className="text-3xl font-bold mt-6">Page Under Construction <span className="animate-typing-dot"><b>|</b></span></h1>
                <p className="text-gray-600 mt-2">
                    Stay tuned for new updates!
                </p>
            </section>
        </>
    );
}
