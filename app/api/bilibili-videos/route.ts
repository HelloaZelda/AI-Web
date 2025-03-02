import { NextResponse } from "next/server"

async function fetchBilibiliVideos(uid: string) {
  const response = await fetch(
    `https://api.bilibili.com/x/space/arc/search?mid=${uid}&ps=10&tid=0&pn=1&keyword=&order=pubdate&jsonp=jsonp`,
  )
  const data = await response.json()
  return data.data.list.vlist
}

export async function GET() {
  try {
    const uid = "1697418225"
    const videos = await fetchBilibiliVideos(uid)
    return NextResponse.json(videos)
  } catch (error) {
    console.error("Error fetching Bilibili videos:", error)
    return NextResponse.json({ error: "Failed to fetch Bilibili videos" }, { status: 500 })
  }
}

