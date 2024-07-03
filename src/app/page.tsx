import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import awardsData from "@/data.json";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Socials</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {awardsData.map((award) => {
              const { date, description, img, name, price, ...socials } = award;
              return (
                <TableRow key={award.name}>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Image
                        className="rounded-full"
                        src={`https://community.astro.build${img}`}
                        alt={name}
                        width={50}
                        height={50}
                      />
                      <p className="text-lg">{name}</p>
                    </div>
                  </TableCell>
                  <TableCell>{description}</TableCell>
                  <TableCell className="whitespace-nowrap">{date}</TableCell>
                  <TableCell>{price.replace("Awarded ", "")}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <a
                        href={socials.astroBadge}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="size-[30px] object-top text-black"
                          viewBox="0 0 39 50"
                          fill="current"
                        >
                          <path
                            fill="currentColor"
                            d="M12.666 42.236c-2.22-2.023-2.867-6.275-1.942-9.355 1.603 1.942 3.824 2.557 6.125 2.904 3.552.536 7.04.336 10.34-1.284.377-.185.726-.431 1.139-.681.31.896.39 1.8.282 2.721-.263 2.242-1.382 3.974-3.161 5.287-.712.525-1.464.995-2.2 1.49-2.256 1.522-2.867 3.306-2.019 5.902.02.063.038.127.084.28a5.93 5.93 0 0 1-2.636-2.248c-.678-1.04-1-2.19-1.017-3.434-.008-.605-.008-1.216-.09-1.813-.2-1.456-.884-2.107-2.175-2.145-1.324-.038-2.372.778-2.65 2.065-.02.098-.051.196-.082.31l.002.001ZM0 32.367s6.571-3.193 13.161-3.193l4.969-15.338c.186-.742.729-1.246 1.342-1.246.613 0 1.156.504 1.342 1.246l4.968 15.338c7.805 0 13.162 3.193 13.162 3.193L27.76 1.974C27.44 1.078 26.899.5 26.17.5H12.774c-.729 0-1.248.578-1.59 1.474C11.161 2.034 0 32.367 0 32.367Z"
                          />
                        </svg>
                      </a>
                      <a
                        href={socials.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={"/github.png"}
                          width={45}
                          height={45}
                          alt="github"
                        />
                      </a>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
