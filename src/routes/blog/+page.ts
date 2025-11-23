// Define the shape of your Markdown frontmatter
interface Post {
    slug: string;
    title: string;
    date: string;
    description: string;
  }
  
  export const load = async () => {
    // 1. Get all markdown files
    const imports = import.meta.glob('./*.md');
    
    // 2. Explicitly tell TypeScript this array contains 'Post' objects
    const posts: Post[] = [];
  
    for (const path in imports) {
      // 3. Wait for the file to load
      // We cast to 'any' momentarily because the markdown import type isn't strictly defined by default
      const file: any = await imports[path]();
      
      const slug = path.replace('./', '').replace('.md', '');
  
      if (file && file.metadata) {
        posts.push({
          slug,
          title: file.metadata.title,
          date: file.metadata.date,
          description: file.metadata.description
        });
      }
    }
  
    // 4. Sort by date
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
    return { posts };
  };