/**
 * Path helper to safely handle Astro base path (e.g. /Elshafie/ on GitHub Pages or / on custom domain)
 */
export function getPath(path: string): string {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  
  if (!path || path === '/') {
    return base;
  }
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
