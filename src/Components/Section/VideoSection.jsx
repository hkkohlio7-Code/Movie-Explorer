const VideoSection = ({data}) => {
  const videoUrl = `https://www.youtube.com/embed/${data.videos.results[0]?.key}`;
  return (
        <div className='lg:w-175'>
            <iframe src={videoUrl}
            className='w-full aspect-video rounded-lg'
            allowFullScreen/>
        </div>
  )
}

export default VideoSection