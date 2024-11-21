import Image from "next/image"
import { Input } from "./ui/input"
import { DiscordIcon, GithubIcon, XIcon } from "./svgs"

export const Footer: React.FC = () => {
    return (
        <footer className="grid sm:grid-cols-2 grid-cols-1 gap-4 justify-items-stretch p-8 sm:mx-auto max-w-5xl bg-neutral-100 mb-4 rounded-xl shadow mx-3">
            <div className="flex flex-col justify-start gap-4">
                <Image className="rounded-3xl"
                    src={`/Liblio-logo.png`}
                    alt="Liblio"
                    width={150}
                    height={38}
                    
                />
                <p className="text-xs">
                    Liblio does its best to keep books and libraries secure by ensuring no data losses or altering hence the traceability of books for securing future of younger talents(scholars)
                </p>

                <div className="flex justify-start gap-3 mt-10">
                    <XIcon className="h-6 w-6" />
                    <DiscordIcon className="h-6 w-6" />
                    <GithubIcon className="h-6 w-6" />
                </div>
            </div>
            <div className="flex flex-col sm:items-end space-y-2">
                <h3 className="text-xl text-neutral-800">
                    Stay up to date with Liblio
                </h3>
                <p className="text-sm text-neutral-600">
                    Subscribe to the newsletter for updates
                </p>
                <div>
                    <Input placeholder="Email address" name="email" />
                </div>
            </div>
        </footer>
    )
}
