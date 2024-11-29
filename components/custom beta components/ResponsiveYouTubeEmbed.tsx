interface ResponsiveYouTubeEmbedProps {
  embedId: string;
}
const ResponsiveYouTubeEmbed: React.FC<ResponsiveYouTubeEmbedProps> = ({ embedId }) => {
  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};
export default ResponsiveYouTubeEmbed;