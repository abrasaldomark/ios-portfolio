import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Home from '@/app/page';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Mark Abrasaldo',
    };
  }

  return {
    title: `${project.title} - Mark Abrasaldo | iOS Developer Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Mark Abrasaldo`,
      description: project.description,
      images: [{ url: project.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Mark Abrasaldo`,
      description: project.description,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <Home initialSelectedSlug={slug} />;
}
