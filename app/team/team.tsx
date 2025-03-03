// pages/team.tsx
import TeamCarousel from '@/components/Team';
import type { NextPage } from 'next';


// Sample team data
const teamMembers = [
  {
    id: "1",
    name: "Abacus Marco",
    position: "CEO of RaftApps",
    image: "/images/team/team-member-1.png"
  },
  {
    id: "2",
    name: "Elena Diaz",
    position: "Lead Designer",
    image: "/images/team/team-member-2.png"
  },
  {
    id: "3",
    name: "Abacus Marco",
    position: "CEO of RaftApps",
    image: "/images/team/team-member-1.png"
  },
  {
    id: "4",
    name: "Abacus Marco",
    position: "CEO of RaftApps",
    image: "/images/team/team-member-2.png"
  },
  {
    id: "5",
    name: "Abacus Marco",
    position: "CEO of RaftApps",
    image: "/images/team/team-member-1.png"
  },
  {
    id: "6",
    name: "Abacus Marco",
    position: "CEO of RaftApps",
    image: "/images/team/team-member-2.png"
  },
  {
    id: "7",
    name: "Abacus Marco",
    position: "CEO of RaftApps",
    image: "/images/team/team-member-1.png"
  }
];

const TeamPage: NextPage = () => {
  return (
      <main>
        <section className="py-8">
          <TeamCarousel teamMembers={teamMembers} />
        </section>
      </main>
  );
};

export default TeamPage;