import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import ProjectArticle from "@/components/ProjectArticle";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  return <ProjectArticle project={projects[index]} previous={projects[index - 1] || null} next={projects[index + 1] || null}/>;
}
