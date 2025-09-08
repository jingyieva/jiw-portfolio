import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { IconGithub as Github, IconLinkedIn  as Linkedin , IconMail as Mail} from "@/components/Icons";

import { CONTACT_INFO } from "@/constants"

export default function Footer() {
    const [t] = useTranslation();
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-10 mt-12">
            <div className="container text-sm flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="opacity-70">© {new Date().getFullYear()} Jing I Wu. {t('footer.rights')}</p>
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" asChild aria-label="Email">
                        <a 
                            className="opacity-80 hover:text-[--color-brand-600] dark:hover:text-[--color-brand-500] transition"
                            href={`mailto:${CONTACT_INFO.email}`}>
                            <Mail className="w-5 h-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">                        
                        <a 
                            className="opacity-80 hover:text-[--color-brand-600] dark:hover:text-[--color-brand-500] transition" 
                            href={CONTACT_INFO.linkedIn}
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </Button>
                   <Button variant="ghost" size="icon" asChild aria-label="GitHub">
                        <a 
                            className="opacity-80 hover:text-[--color-brand-600] dark:hover:text-[--color-brand-500] transition"
                            href={CONTACT_INFO.github}
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <Github className="w-5 h-5" />
                        </a>         
                    </Button>
                </div>
            </div>
        </footer>
    )
}
