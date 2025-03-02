import { GithubIcon } from "lucide-react"
import BilibiliVideos from "../components/bilibili-videos"

export default function MyContent() {
  const githubProjects = [
    { name: "awesome-project", url: "https://github.com/yourusername/awesome-project" },
    { name: "cool-app", url: "https://github.com/yourusername/cool-app" },
  ]

  const qqNumber = "123456789"

  return (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-3xl font-bold">我的内容</h1>

      <BilibiliVideos />

      <section>
        <h2 className="text-2xl font-bold mb-4">GitHub 项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {githubProjects.map((project) => (
            <div key={project.name} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="font-bold">{project.name}</h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center"
              >
                <GithubIcon className="mr-2" />在 GitHub 上查看
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">联系方式</h2>
        <p>QQ: {qqNumber}</p>
      </section>
    </div>
  )
}

