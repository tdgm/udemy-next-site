import fs from 'fs';
import path from 'path';

function getPostList() {
  try {
    const postsDir = path.join(process.cwd(), 'pages/post');
    return fs
    .readdirSync(postsDir)
    .map(filename => (
      filename.substring(0, filename.indexOf('.'))
    ))
  } catch {
    console.warn('There are no posts!');
    return [];
  }
}

export default getPostList