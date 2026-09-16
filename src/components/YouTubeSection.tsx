import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { featuredYoutubeVideos, youtubeChannelUrl } from "@/data/youtube";

export default function YouTubeSection() {
  const hasVideos = featuredYoutubeVideos.length > 0;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="On YouTube"
          title="See Shiksha Play & Learn in Action"
          subtitle="Take a glimpse into the joyful world of our little learners."
        />

        {hasVideos ? (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredYoutubeVideos.map((video) => (
              <div key={video.id} className="overflow-hidden rounded-3xl bg-white shadow-soft">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="p-4 text-sm font-semibold text-ink">{video.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center rounded-3xl bg-gradient-to-br from-blossom-100 via-sun-100 to-sky-100 p-10 text-center shadow-soft">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-soft">
              ▶️
            </span>
            <p className="mt-4 max-w-md text-ink-soft">
              Visit our YouTube channel to watch videos of our children
              learning, playing and celebrating at Shiksha Play &amp; Learn
              Pre-School.
            </p>
          </div>
        )}

        <div className="mt-8 text-center">
          <Button href={youtubeChannelUrl} variant="primary">
            Visit Our YouTube Channel →
          </Button>
        </div>
      </Container>
    </section>
  );
}
