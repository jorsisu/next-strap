import { getPostBySlug } from '@/lib/strapi';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = await params?.slug;
  if (!slug) {
    notFound();
  }

  try {
    const post = await getPostBySlug(slug);

    if (!post) {
      notFound();
    }

    const { title, content, publishedAt } = post;

    return (
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            ← Back to Blog
          </Link>
        </Button>
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="space-y-4">
            <CardTitle className="text-4xl font-bold">{title}</CardTitle>
            {publishedAt && (
              <div className="text-sm text-muted-foreground">
                Published on {new Date(publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            )}
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              {content}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
} 