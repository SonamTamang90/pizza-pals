import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Card, CardContent } from "../components/ui/card";
import {
  Calendar,
  Award,
  Users,
  Heart,
  Coffee,
  Check,
  ChefHat,
} from "lucide-react";

const AboutPage = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardHover = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const stats = [
    {
      icon: <Calendar className="w-8 h-8 text-[#F21905]" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <Award className="w-8 h-8 text-[#F21905]" />,
      value: "250+",
      label: "Awards & Recognition",
    },
    {
      icon: <Users className="w-8 h-8 text-[#F21905]" />,
      value: "10K+",
      label: "Happy Customers",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#F21905]" />,
      value: "100%",
      label: "Customer Satisfaction",
    },
  ];

  const values = [
    {
      icon: <ChefHat className="w-12 h-12 text-[#F21905]" />,
      title: "Quality First",
      description:
        "We use only the finest ingredients and traditional techniques.",
    },
    {
      icon: <Heart className="w-12 h-12 text-[#F21905]" />,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority, always.",
    },
    {
      icon: <Coffee className="w-12 h-12 text-[#F21905]" />,
      title: "Innovation",
      description: "Blending tradition with modern culinary creativity.",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "The Beginning",
      description:
        "Opened our first pizzeria with a dream to serve authentic Italian flavors.",
    },
    {
      year: "2012",
      title: "Expansion",
      description: "Opened three new locations due to growing demand.",
    },
    {
      year: "2015",
      title: "Recognition",
      description: "Awarded 'Best Pizzeria' by the City Food Awards.",
    },
    {
      year: "2020",
      title: "Innovation",
      description: "Launched our signature artisan pizza line.",
    },
  ];

  const team = [
    {
      name: "Marco Romano",
      role: "Master Chef",
      image: "https://source.unsplash.com/featured/?chef",
    },
    {
      name: "Sofia Garcia",
      role: "Pizza Specialist",
      image: "/images/chef-2.jpg",
    },
    {
      name: "Lucas Chen",
      role: "Head Baker",
      image: "/images/chef-3.jpg",
    },
    {
      name: "Emma Wilson",
      role: "Pastry Chef",
      image: "/images/chef-4.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Section with Text Animation */}
      <div
        className="relative h-[400px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/images/banner.png")',
          backgroundPosition: "center 65%",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Breadcrumb className="text-white mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-white">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/about" className="text-white">
                      About
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>

            <motion.h1
              className="text-7xl uppercase font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 text-center max-w-xl px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Discover our story of passion, tradition, and the art of crafting
              perfect pizzas
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Mission Section with Scroll Animation */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              To create unforgettable dining experiences by serving authentic
              Italian pizzas made with passion, using the finest ingredients and
              time-honored techniques, while fostering a warm and welcoming
              atmosphere for our guests.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                variants={cardHover}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section with Counter Animation */}
      <div className="py-20 bg-gray-50">
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="text-center p-8 rounded-xl bg-white shadow-lg transition-shadow duration-300"
              >
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.icon}
                </motion.div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Section with Scroll Animation */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6"
                  variants={fadeInUp}
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 w-24 pt-1">
                    <span className="text-xl font-bold text-[#F21905]">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section with Hover Animation */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <motion.div
                  className="mb-4 relative group"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#F21905]">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Certifications Section with Scroll Animation */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12">
              Quality & Certifications
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-12 h-12 text-[#F21905] mb-4" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">Quality Certified</h3>
                  <p className="text-gray-600">Excellence Guaranteed</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
