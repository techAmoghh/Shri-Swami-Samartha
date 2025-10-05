import Link from 'next/link';
import { CalendarDays } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Homeopathy: A Natural Approach to Healing",
    excerpt: "Discover how homeopathy works and its benefits for various health conditions.",
    date: "October 5, 2025",
    readTime: "4 min read"
  },
  {
    id: 2,
    title: "5 Common Winter Ailments and Their Homeopathic Solutions",
    excerpt: "Learn about natural remedies for cold, flu, and other winter health issues.",
    date: "September 28, 2025",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "The Role of Diet in Homeopathic Treatment",
    excerpt: "How proper nutrition can enhance the effectiveness of homeopathic treatments.",
    date: "September 15, 2025",
    readTime: "3 min read"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Latest Blog</h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
          >
            View All Articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                Blog Image {post.id}
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
