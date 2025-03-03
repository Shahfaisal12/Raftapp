import Image from "next/image";
import React from "react";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  imageSrc: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Team Member 1",
      position: "Developer",
      imageSrc: "/images/team/team-member-1.png",
    },
    {
      id: "2",
      name: "Team Member 2",
      position: "Designer",
      imageSrc: "/images/team/team-member-1.png",
    },
    {
      id: "3",
      name: "Team Member 3",
      position: "CEO",
      imageSrc: "/images/team/team-member-2.png",
    },
    {
      id: "4",
      name: "Team Member 4",
      position: "CTO",
      imageSrc: "/images/team/team-member-2.png",
    },
    {
      id: "5",
      name: "Team Member 5",
      position: "Project Manager",
      imageSrc: "/images/team/team-member-1.png",
    },
    {
        id: "6",
        name: "Team Member 6",
        position: "Project Manager",
        imageSrc: "/images/team/team-member-1.png",
      },
  ];

  return (
    <section className="w-full  px-4 py-12 text-black dark:text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-3xl font-bold">Our Team</h2>

        <div className="flex flex-col md:flex-row">
          <div className="relative mb-10 md:mb-0 md:w-1/2 sm:block hidden">
            <div className="relative h-[500px]">
              <div className="absolute left-4 top-0 h-[140px] w-[110px] overflow-hidden rounded-lg">
                <Image
                  src={teamMembers[0].imageSrc}
                  alt={teamMembers[0].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute left-[150px] top-[80px] h-[140px] w-[110px] overflow-hidden rounded-lg">
                <Image
                  src={teamMembers[1].imageSrc}
                  alt={teamMembers[1].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute left-[290px] top-[160px] h-[140px] w-[110px] overflow-hidden rounded-lg">
                <Image
                  src={teamMembers[2].imageSrc}
                  alt={teamMembers[2].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute left-4 top-[160px] h-[140px] w-[110px] overflow-hidden rounded-lg">
                <Image
                  src={teamMembers[3].imageSrc}
                  alt={teamMembers[3].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute left-[150px] top-[240px] h-[140px] w-[110px] overflow-hidden rounded-lg">
                <Image
                  src={teamMembers[4].imageSrc}
                  alt={teamMembers[4].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute left-4 top-[320px] h-[140px] w-[110px] overflow-hidden rounded-lg">
                <Image
                  src={teamMembers[5].imageSrc}
                  alt={teamMembers[5].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3 md:w-1/2 display:block sm:hidden">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="relative h-[120px] w-[100px] overflow-hidden rounded-lg md:h-[140px] md:w-[120px]"
              >
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center md:w-1/2 md:pl-8">
            <div className="space-y-4">
              <p className="text-black-300 text-center dark:text-gray-300">
                At Raft Apps LLC, collaboration is at the heart of everything we
                do. Our team thrives on creativity, innovation, and
                problem-solving, ensuring every project is a step toward
                excellence. From brainstorming sessions to final execution, we
                work in sync—designers, developers, and strategists—bringing
                ideas to life with precision and passion. We follow an agile
                workflow, emphasizing flexibility, iteration, and continuous
                improvement. Regular check-ins, transparent communication, and a
                culture of feedback keep us aligned and motivated. Whether
                remote or in-office, we leverage the latest tools and
                technologies to stay connected and efficient. Driven by a shared
                vision, we don’t just build products—we craft seamless,
                impactful experiences that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
