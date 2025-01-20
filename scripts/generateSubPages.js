import fs from 'fs';
import path from 'path';

/**
 * Generate sub-page links for each specified main index file.
 * @param {Array<{path: path.ParsedPath, title: string}>} mainIndexPaths - Array of objects with `path` and `title`.
 */
export default function generateSubPages(mainIndexPaths) {
  mainIndexPaths.forEach(({ path: mainIndexPath, title }) => {
    const mainFolder = mainIndexPath.dir;

    const items = fs.readdirSync(mainFolder, { withFileTypes: true });

    // Find all `.md` files in the main folder (excluding index.md)
    const mdFilesInSameFolder = items
      .filter((item) => item.isFile() && item.name.endsWith('.md') && item.name !== mainIndexPath.base)
      .map((file) => {
        const filePath = path.join(mainFolder, file.name);
        const fileName = path.basename(filePath, '.md');
        const displayName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
        const link = `./${fileName}`;
        return { displayName, link };
      });

    // Find all subfolders containing `index.md`
    const subPageLinks = items
      .filter((item) => item.isDirectory())
      .filter((folder) => fs.existsSync(path.join(mainFolder, folder.name, 'index.md')))
      .map((folder) => {
        const folderPath = path.join(mainFolder, folder.name);
        const displayName = folder.name.charAt(0).toUpperCase() + folder.name.slice(1);
        const link = `./${folder.name}/`;
        return { displayName, link };
      });

    // Combine links from `.md` files and subfolders, then sort them alphabetically
    const allLinks = [...mdFilesInSameFolder, ...subPageLinks]
      .sort((a, b) => a.displayName.localeCompare(b.displayName))
      .map(({ displayName, link }) => `- [${displayName}](${link})`);

    const content = `---
id: ${path.basename(mainFolder)}
title: ${title}
---

# ${title}

${allLinks.join('\n')}

`;

    fs.writeFileSync(path.format(mainIndexPath), content, 'utf8');
    console.log(`index.md updated successfully at ${path.format(mainIndexPath)}`);
  });
}
