import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/datas/projects'

export default function Projects() {
    return (
        <section className="container py-12 md:py-20">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p) => (<ProjectCard key={p.title} {...p} />))}
            </div>
        </section>
    )
}
