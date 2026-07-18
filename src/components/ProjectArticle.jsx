import Link from "next/link";
import ContentBlocks from "./ContentBlocks";
import { ArrowLeft, ArrowRight, Download, FileText, Plane } from "lucide-react";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ProjectArticle({ project, previous, next }) {
  return (
    <main className="project-page">
      <header className="project-hero">
        <div className="project-route"><span>PORTFOLIO</span><i/><Plane size={16}/><i/><span>ETAPPE {project.number}</span></div>
        <Link href="/#du-an" className="back-link"><ArrowLeft size={17}/> Trở lại danh sách dự án</Link>
        <div className="project-hero-grid">
          <div>
            <span className="project-stage">{project.stage}</span>
            <h1>{project.title}</h1>
            <p>{project.objective}</p>
            <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
          <div className={`project-ticket ${project.cover ? "has-image" : ""}`} style={project.cover ? { backgroundImage: `linear-gradient(180deg, rgba(7,29,38,.08), rgba(7,29,38,.86)), url(${base}${project.cover})` } : undefined}>
            <div><small>FLIGHT</small><strong>VA-{project.number}1867</strong></div>
            <div><small>FROM</small><strong>DIGITAL BASICS</strong></div>
            <div><small>TO</small><strong>{project.stage.toUpperCase()}</strong></div>
            <a href={`${base}${project.pdf}`} target="_blank" rel="noreferrer"><FileText size={17}/> Xem file gốc <Download size={16}/></a>
          </div>
        </div>
      </header>

      <div className="article-layout section-shell">
        <aside className="article-toc">
          <span>NỘI DUNG BÀI</span>
          <nav>{project.sections.map((section, index) => <a key={section.id} href={`#${section.id}`}><small>{String(index + 1).padStart(2, "0")}</small>{section.title}</a>)}</nav>
          <a className="pdf-link" href={`${base}${project.pdf}`} target="_blank" rel="noreferrer"><FileText size={16}/> Tài liệu PDF gốc</a>
        </aside>

        <article className="article-content">
          {project.sections.map((section, index) => (
            <section id={section.id} key={section.id} className="article-section">
              <header><span>{section.eyebrow || `Phần ${index + 1}`}</span><h2>{section.title}</h2></header>
              <ContentBlocks blocks={section.blocks}/>
            </section>
          ))}
        </article>
      </div>

      <nav className="project-pagination section-shell" aria-label="Điều hướng giữa các dự án">
        {previous ? <Link href={`/projects/${previous.slug}`}><ArrowLeft/><span><small>CHẶNG TRƯỚC</small>{previous.shortTitle}</span></Link> : <span/>}
        {next ? <Link href={`/projects/${next.slug}`}><span><small>CHẶNG TIẾP THEO</small>{next.shortTitle}</span><ArrowRight/></Link> : <Link href="/#du-an"><span><small>HOÀN TẤT</small>Quay về dự án</span><ArrowRight/></Link>}
      </nav>
    </main>
  );
}
