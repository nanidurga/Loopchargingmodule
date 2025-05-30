import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import AniImage from '../../assets/Ani.webp';
import DurImage from '../../assets/Dur.webp';
import JayImage from '../../assets/Jay.webp';
import NavImage from '../../assets/Nav.webp';
import WesImage from '../../assets/Wes.webp';
import CheImage from '../../assets/che.webp';

// Placeholder images; replace with your own imports if needed


interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    email?: string;
  };
}

const CARD_WIDTH = 400;
const CARD_HEIGHT = 600;
const IMAGE_HEIGHT = 340;

const TeamMember: React.FC<TeamMemberProps> = React.memo(({ name, role, bio, image, social }) => {
  return (
    <div
      className="bg-dark-800 rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-300 group shadow-lg flex flex-col"
      style={{
        minHeight: CARD_HEIGHT,
        maxWidth: CARD_WIDTH,
        width: CARD_WIDTH,
        margin: "0 auto",
      }}
    >
      <div
        className="w-full"
        style={{
          height: IMAGE_HEIGHT,
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between p-8">
        <div>
          <h3 className="font-display font-semibold text-2xl text-white mb-1">{name}</h3>
          <p className="text-primary-400 mb-2 text-lg">{role}</p>
          <p className="text-white/70 mb-4 text-base">{bio}</p>
        </div>
        <div className="flex space-x-4 mt-auto">
          {social.linkedin && (
            <a
              href={social.linkedin}
              className="text-white/60 hover:text-primary-500 transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="text-white/60 hover:text-primary-500 transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

const teamMembers: TeamMemberProps[] = [
  {
    name: "Wesly Jambarapu",
    role: "CEO & Founder",
    bio: "As CEO of LCM, I pioneer breakthrough solution of LCM that enable electric vehicles to charge while in motion",
    image: WesImage,
    social: {
      linkedin: "https://www.linkedin.com/in/wesly-j/",
      email: "wesly.lcm@gmail.com"
    }
  },
  {
    name: "Jayshri Bej",
    role: "Co-Founder & CRO",
    bio: "As CRO of LCM, I steer project management, ensuring our solutions meet real-world needs and scale effectively",
    image: JayImage,
    social: {
      linkedin: "https://www.linkedin.com/in/jayshri-bej/",
      email: "jayshribej7@gmail.com"
    }
  },
  {
    name: "Anil Kumar",
    role: "Founder & CEO",
    bio: "Experienced in EV technology and sustainable energy solutions.",
    image: AniImage,
    social: {
      linkedin: "https://www.linkedin.com/in/anirudh-srinivasan-0b1b3b1b2/",
      email: "mailto:anirudh@lcm.com"
    }
  },
  {
    name: "Naveen Islavath",
    role: "Co-Founder & CFO",
    bio: "As CFO, I manage financial operations and drive strategic partnerships to fuel LCM's growth.",
    image: NavImage,
    social: {
      linkedin: "https://www.linkedin.com/in/naveen-islavath-b992021ba",
      email: "naveenssc2019@gmail.com"
    }
  },
  {
    name: "Durga Prasad",
    role: "CTO",
    bio: "As CTO, I architect and drive the core technology powering LCM's breakthrough EV charging solutions.",
    image: DurImage,
    social: {
      linkedin: "https://www.linkedin.com/in/durga-prasad-nuthalapati-646b73233/",
      email: "durgaprasad69110@gmail.com"
    }
  },
  {
    name: "Chethan Ashray C",
    role: "COO",
    bio: "As COO, I streamline operations at LCM to ensure seamless delivery of innovative EV charging solutions.",
    image: CheImage,
    social: {
      linkedin: "https://www.linkedin.com/in/chethan-ashray-1351b0329",
      email: "chethanashray16@gmail.com"
    }
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-white/70 text-lg">
            LCM is founded by engineers and innovators from IITs and EV-focused startups, bringing together decades of experience in automotive and energy technologies.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 justify-items-center"
          style={{ justifyItems: "center" }}
        >
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              social={member.social}
            />
          ))}
        </div>

        <div className="bg-dark-800 rounded-xl p-8 border border-white/10 text-center">
          <h3 className="font-display font-semibold text-xl text-white mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals passionate about revolutionizing electric vehicle technology. Check out our open positions and become part of the future of EV charging.
          </p>
          <Link
            to="/careers"
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-colors inline-block"
          >
            View Career Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
