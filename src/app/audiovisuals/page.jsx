import { Suspense } from 'react'
import VideosNav from '../../components/VideoNav/video'
import { videos } from '../../lib/video-data'


export default function Page() {
  return (
    <section>
      <Suspense fallback={<p>Loading video...</p>}>
        <VideosNav videos={videos} />
      </Suspense>
      {/* Other content of the page */}
    </section>
  )
}