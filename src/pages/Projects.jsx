import { useTranslation } from 'react-i18next'

import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
    const [t] = useTranslation(['common', 'projects'])
    const projects = t('projects:projects', { returnObjects: true });

    return (
        <section className="container py-12 md:py-20">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">{t('projects:title')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p) => (<ProjectCard key={p.title} {...p} />))}
            </div>
        </section>
    )
}
