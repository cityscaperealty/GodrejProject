import projectsData from '@/app/lib/projects.json';
import { notFound } from 'next/navigation';
import ProjectDetailClient from '@/components/ProjectDetailClient';

// ✅ Generate all static routes
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// ✅ Required for Next.js 15
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}