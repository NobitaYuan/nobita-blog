import { join } from 'node:path'
import fs from 'fs-extra'
import matter from 'gray-matter'

const postsDir = join(__dirname, '../pages')
const saveDir = join(__dirname, '../src/data/search-index.json')

console.log('__dir__dir__dir__dir__dir__dir__dir', postsDir, saveDir)

// 获取所有md文件的路径
async function getMarkdownFiles(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    const markdownFiles: any = await Promise.all(entries.map(async (entry) => {
        const filePath = join(dir, entry.name)
        if (entry.isDirectory()) {
            return getMarkdownFiles(filePath)
        }
        // 不能为index.md
        else if (entry.name.endsWith('.md') && entry.name !== 'index.md') {
            return filePath
        }
        return []
    }))
    return markdownFiles.flat() as string[]
}

export async function generateSearchIndex() {
    try {
        const filePaths = await getMarkdownFiles(postsDir)
        const index = await Promise.all(filePaths.map(async (path) => {
            const mdFile = await fs.readFile(path, 'utf-8')
            const { data, content } = matter(mdFile)
            return {
                title: data.title || 'Untitled',
                data,
                path: path.replace(postsDir, '').replace(/\.md$/, ''),
                content,
            }
        }))
        console.log('saveDir', saveDir)
        console.log('index', index)
        await fs.writeJson(saveDir, index)
    }
    catch (error) {
        console.error('😫😫😫 generateSearchIndex 😫😫😫 ')
        console.error('postsDir:', postsDir)
        console.error('error:', error)
        console.error('😫😫😫  generateSearchIndex 😫😫😫 ', error)
    }
}
