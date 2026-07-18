import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ProjectCard({ project, index }) {
  const style = project.cover ? { backgroundImage: `linear-gradient(180deg, rgba(8,24,31,.06), rgba(8,24,31,.86)), url(${base}${project.cover})` } : undefined;
  return (
    <Link href={`/projects/${project.slug}`} className={`project-card ${project.cover ? "has-cover" : "no-cover"}`} style={style}>
      <div className="project-card-top"><span>ETAPPE {project.number}</span><span>{String(index + 1).padStart(2, "0")}/06</span></div>
      {!project.cover && <div className="academic-orbit"><FileText size={40}/><i/><i/><i/></div>}
      <div className="project-card-body">
        <small>{project.stage}</small>
        <h3>{project.shortTitle}</h3>
        <p>{project.summary}</p>
      </div>
      <div className="project-card-foot"><span>Xem bài làm</span><ArrowUpRight size={20}/></div>
    </Link>
  );
}
