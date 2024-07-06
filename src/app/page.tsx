import Card from "@/components/ui/Card";
import awardsData from "@/data.json";
import { groupByDate } from "@/lib/utils";

export default function Home() {
  const groupAwards = groupByDate(awardsData);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div className="space-y-10">
          {Object.keys(groupAwards).map((date) => {
            const awards = groupAwards[date];
            return (
              <div key={date}>
                <h3 className="text-xl sm:text-[2rem] text-center sm:text-left font-obviously pb-6 lg:pb-12">
                  {date}
                </h3>
                <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {awards.map((award, index) => (
                    <Card
                      key={index}
                      astroBadge={award.astroBadge}
                      date={award.date}
                      description={award.description}
                      githubLink={award.githubLink}
                      img={
                        award.img.startsWith("https://")
                          ? award.img
                          : `https://community.astro.build${award.img}`
                      }
                      name={award.name}
                      price={award.price}
                    />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
