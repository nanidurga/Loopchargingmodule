import { motion } from 'framer-motion';
import { Users, Rocket, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import team images
import WesImage from '../../assets/Wes.webp';
import JayImage from '../../assets/Jay.webp';
import AniImage from '../../assets/Ani.webp';
import NavImage from '../../assets/Nav.webp';
import DurImage from '../../assets/Dur.webp';
import CheImage from '../../assets/che.webp';
import TanImage from '../../assets/tanmay.webp';

interface TeamMember {
  name: string;
  role: string;
  background: string; // Changed from 'bio' to 'background' for consistency
  image: string;
  social: {
    linkedin?: string;
    email?: string;
  };
}

const CARD_WIDTH = 400;
const CARD_HEIGHT = 600;
const IMAGE_HEIGHT = 320; // Adjusted back to 320 for consistency with the first example

const coreTeam: TeamMember[] = [
  {
    name: "Wesly Jambarapu",
    role: "CEO & Founder",
    background: "As CEO of LCM, I pioneer breakthrough solution of LCM that enable electric vehicles to charge while in motion",
    image: WesImage,
    social: {
      linkedin: "https://www.linkedin.com/in/wesly-j/",
      email: "wesly.lcm@gmail.com"
    }
  },
  {
    name: "Jayshri Bej",
    role: "Co-Founder & CRO",
    background: "As CRO of LCM, I steer project management, ensuring our solutions meet real-world needs and scale effectively",
    image: JayImage,
    social: {
      linkedin: "https://www.linkedin.com/in/jayshri-bej/",
      email: "jayshribej7@gmail.com"
    }
  },
  {
    name: "Anil Kumar",
    role: "Co-Founder & CPO",
    background: "As CPO, I bridge technology and business to create products that redefine industry standards.",
    image: AniImage,
    social: {
      linkedin: "https://www.linkedin.com/in/anilkumar-pidamarthi/",
      email: "anilkumarpidamarthi123@gmail.com"
    }
  },
  {
    name: "Naveen Islavath",
    role: "Co-Founder & CFO",
    background: "As CFO, I manage financial operations and drive strategic partnerships to fuel LCM's growth.",
    image: NavImage,
    social: {
      linkedin: "https://www.linkedin.com/in/naveen-islavath-b992021ba",
      email: "naveenssc2019@gmail.com"
    }
  },
  {
    name: "Durga Prasad",
    role: "CTO",
    background: "As CTO, I architect and drive the core technology powering LCM's breakthrough EV charging solutions.",
    image: DurImage,
    social: {
      linkedin: "https://www.linkedin.com/in/durga-prasad-nuthalapati-646b73233/",
      email: "durgaprasad69110@gmail.com"
    }
  },
  {
    name: "Chethan Ashray C",
    role: "COO",
    background: "As COO, I streamline operations at LCM to ensure seamless delivery of innovative EV charging solutions.",
    image: CheImage,
    social: {
      linkedin: "https://www.linkedin.com/in/chethan-ashray-1351b0329",
      email: "chethanashray16@gmail.com"
    }
  },
  {
    name: "Tanmay Arora",
    role: "Fractional COO & Strategic Advisor",
    background: "4x CEO, award-winning business consultant & TedX speaker, bringing global leadership and strategic depth to LCM.",
    image: TanImage,
    social: {
      linkedin: "https://www.linkedin.com/in/tanmayaroraaa",
      email: "kreserasera@gmail.com"
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <motion.div
    variants={itemVariants}
    className="bg-dark-800 rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-300 group shadow-lg flex flex-col"
    style={{
      minHeight: CARD_HEIGHT,
      maxWidth: CARD_WIDTH,
      width: CARD_WIDTH,
      margin: "0 auto"
    }}
  >
    <div
      className="w-full"
      style={{
        height: IMAGE_HEIGHT,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0
      }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="flex flex-col flex-grow justify-between p-8">
      <div>
        <h3 className="font-display font-semibold text-2xl text-white mb-1">{member.name}</h3>
        <p className="text-primary-400 mb-2 text-lg">{member.role}</p>
        <p className="text-white/70 text-base mb-4">{member.background}</p>
      </div>
      <div className="flex space-x-4 mt-auto">
        {member.social.linkedin && (
          <a
            href={member.social.linkedin}
            className="text-white/60 hover:text-primary-500 transition-colors"
            aria-label={`${member.name}'s LinkedIn profile`}
            target="_blank" rel="noopener noreferrer"
          >
            <Linkedin size={22} />
          </a>
        )}
        {member.social.email && (
          <a
            href={`mailto:${member.social.email}`}
            className="text-white/60 hover:text-primary-500 transition-colors"
            aria-label={`Email ${member.name}`}
          >
            <Mail size={22} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const TeamSection: React.FC = () => ( // Changed component name to TeamSection as per the original second block
  <div className="min-h-screen bg-dark-900">
    {/* Hero Section */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg"
          alt="LCM Lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Meet the Team Behind the Future of EV Charging
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8">
            Engineers. Visionaries. Builders. We're creating a world where EVs charge while driving.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Core Team Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Users className="h-12 w-12 text-primary-500 mx-auto mb-4" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Core Team
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our team brings together expertise from leading automotive companies, research institutions, and technology innovators.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 justify-items-center"
          style={{ justifyItems: "center" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {coreTeam.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-to-br from-primary-500/20 via-dark-800 to-secondary-500/20 rounded-2xl p-8 md:p-12 border border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Rocket className="h-12 w-12 text-primary-500 mx-auto mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Want to build the future of EVs with us?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Join our team of innovators and help revolutionize how electric vehicles charge.
          </p>
          <Link
            to="/careers"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              Join the Team
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default TeamSection;