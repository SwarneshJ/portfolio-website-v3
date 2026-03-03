import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Brain, Cloud, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

// Animation Variants
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Home = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="bg-glow" style={{ top: '-20%', left: '-10%' }} />

            {/* 1. Who I Am (Hero Identity) */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-flex">
                        <motion.div
                            className="hero-content"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.div variants={fadeUp} className="badge">
                                Software Engineer &rarr; Product Leader
                            </motion.div>

                            <motion.h1 variants={fadeUp} className="hero-title">
                                Hi, I'm Swarnesh. <br />
                                <span className="text-gradient">MBA Candidate at UNC Kenan-Flagler Business School</span>
                            </motion.h1>

                            <motion.p variants={fadeUp} className="hero-subtitle">
                                Product Management | AI Strategy | Cloud Technology | FinTech Payments | JPMorganChase
                            </motion.p>

                            <motion.div variants={fadeUp} className="hero-cta">
                                <Link to="/projects" className="btn btn-primary">
                                    View Projects <ArrowRight size={18} />
                                </Link>
                                <Link to="/about" className="btn btn-secondary">
                                    My Full Story
                                </Link>
                                <a href="https://drive.google.com/file/d/19LxM7ifJ3aZU2mFYOLjswtsuBRFqUSw-/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ border: 'none', background: 'transparent' }}>
                                    <Download size={18} /> Resume
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="hero-image-wrapper"
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                        >
                            <img src="/assets/profile.png" alt="Swarnesh Jha" className="hero-image-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. What I Do */}
            <section className="section-padding" style={{ position: 'relative', zIndex: 2 }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">What I Do</h2>
                        <p className="section-sub">Core pillars bridging engineering with market reality.</p>
                    </motion.div>

                    <div className="services-grid">
                        <motion.div
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Brain size={40} className="card-icon" />
                            <h3>AI Engineering</h3>
                            <p>Designing scalable AI pipelines, from fine-tuning transformer models (RoBERTa) to orchestrating complex RAG architectures for dynamic workflow optimization.</p>
                        </motion.div>

                        <motion.div
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Terminal size={40} className="card-icon" />
                            <h3>Product Strategy</h3>
                            <p>Translating market insights into actionable roadmaps. Applying MBA-level rigor to pricing, Go-to-Market strategies, and unit economics.</p>
                        </motion.div>

                        <motion.div
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Cloud size={40} className="card-icon" />
                            <h3>Cloud Architecture</h3>
                            <p>Architecting robust, cloud-native AWS platforms capable of scaling to process billions of events globally, ensuring extreme high availability.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Featured Projects Teaser */}
            <section className="section-padding bg-alternate">
                <div className="container">
                    <div className="flex-between">
                        <div>
                            <h2 className="section-title">Case Studies</h2>
                            <p className="section-sub">A glimpse into what I've built.</p>
                        </div>
                        <Link to="/projects" className="btn btn-secondary hide-mobile">All Projects</Link>
                    </div>

                    <div className="feature-project glass-card mt-4">
                        <div className="project-meta">
                            <span className="pill">Flagship</span>
                            <span className="pill outline">AI/ML</span>
                        </div>
                        <h3>Business-Grade Review Classifier</h3>
                        <p>Engineered an end-to-end sentiment and taxonomy classification pipeline utilizing GenAI for labeling and RoBERTa for cost-effective inference. Delivered actionable customer insights to guide engineering prioritization.</p>
                        <Link to="/projects" className="read-more">Read Full Case Study &rarr;</Link>
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="section-padding pt-0">
                <div className="container resume-container">
                    <h2 className="section-heading"><Briefcase className="heading-icon" /> Professional Experience</h2>

                    <div className="timeline-wrapper">
                        {experienceData.map((company, cIdx) => (
                            <motion.div
                                key={company.company}
                                className="company-block"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: cIdx * 0.1 }}
                            >
                                <div className="company-header">
                                    <div className="company-info-wrapper">
                                        {company.logo && <img src={company.logo} alt={company.company} className="company-logo" />}
                                        <div>
                                            <h3 className="company-title">{company.company}</h3>
                                            <p className="company-meta">{company.group}</p>
                                        </div>
                                    </div>
                                    <div className="company-duration">{company.duration}</div>
                                </div>

                                <div className="roles-container">
                                    {company.roles.map((role, rIdx) => (
                                        <div key={rIdx} className="role-block">
                                            <div className="role-dot" />
                                            <div className="role-header flex-between align-center">
                                                <div className="role-title">{role.title}</div>
                                                <div className="role-date">{role.date}</div>
                                            </div>
                                            <div className="role-location">{role.location}</div>

                                            <ul className="role-bullets">
                                                {role.bullets.map((bullet, bIdx) => (
                                                    <li key={bIdx}>{bullet}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Grid */}
            <section className="section-padding bg-alternate">
                <div className="container resume-container">
                    <h2 className="section-heading"><GraduationCap className="heading-icon" /> Education</h2>

                    <div className="edu-grid">
                        {educationData.map((edu, idx) => (
                            <motion.div
                                key={edu.degree}
                                className="edu-card glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <div className="edu-header">
                                    {edu.logo && <img src={edu.logo} alt={edu.school} className="edu-logo" />}
                                    <div>
                                        <h3 className="edu-school">{edu.school}</h3>
                                        <p className="edu-degree">{edu.degree}</p>
                                        <p className="edu-year">{edu.year}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </motion.div>
    );
};

export default Home;

const experienceData = [
    {
        type: 'work',
        company: 'JPMorgan Chase & Co.',
        logo: '/assets/JPMC.jpeg',
        group: 'Corporate & Investment Banking | Payments Technology',
        duration: '3 Years',
        roles: [
            {
                title: 'Associate (Product Manager)',
                date: 'Feb 2024 - Jul 2025',
                location: 'Mumbai, Maharashtra, India',
                bullets: [
                    'Defined product vision, roadmap, and requirements for migrating a global payments platform from on-premises to AWS cloud, ensuring extreme scalability across 170+ countries, 120 currencies, and generating $1T+ in annual volume.',
                    'Prototyped and conceptualized a RAG-based AI framework designed to analyze millions of high-volume processing events, dynamically identifying least-cost payment routing mechanisms to reduce network processing costs by 15%.'
                ]
            },
            {
                title: 'Analyst',
                date: 'Aug 2022 - Jan 2024',
                location: 'Mumbai, Maharashtra, India',
                bullets: [
                    'Engineered a complex data-driven routing system optimizing digital transaction flows. Algorithmically selected cost-effective payment rails resulting in a 10% processing cost reduction for high-scale enterprise clients (including Netflix).',
                    'Launched Executive KPI dashboards tracking the platform’s major 1 Billion transaction milestone post-cloud migration, empowering C-suite leaders with critical insights to guide scaling and go-to-market decisions.'
                ]
            }
        ]
    },
    {
        type: 'work',
        company: 'Q3 Technologies',
        logo: '/assets/q3.jpeg',
        group: 'Software Engineering & Product Execution',
        duration: '2 Years 1 Month',
        roles: [
            {
                title: 'Software Engineer',
                date: 'Aug 2021 - Jul 2022',
                location: 'Gurugram, Haryana, India',
                bullets: [
                    'Operated as an AWS Subject Matter Expert overseeing two concurrent enterprise projects. Led end-to-end development/deployment for one platform while driving cross-functional architectural design on another scalable service.',
                    'Launched a highly successful digital B2B marketplace by conducting rigorous customer workflow analysis. Synthesized insights to refine feature requirements and prioritize product roadmaps, ultimately improving UX and driving adoption across 125,000+ customers.'
                ]
            },
            {
                title: 'Junior Software Engineer',
                date: 'Jul 2020 - Jul 2021',
                location: 'Gurugram, Haryana, India',
                bullets: [
                    'Core contributor to the development and AWS deployment of a scalable cloud-based architecture for SREI Infrastructure’s marketplace platform, facilitating the purchase and auctioning of heavy construction equipment.',
                    'Implemented robust proactive monitoring systems utilizing AWS Lambda and SNS to automatically broadcast email alerts whenever live API error rates breached a 5% threshold, directly mitigating downtime and enhancing site reliability.'
                ]
            }
        ]
    }
];

const educationData = [
    {
        school: 'UNC Kenan-Flagler Business School',
        logo: '/assets/unc.jpeg',
        degree: 'Master of Business Administration (MBA)',
        year: 'Expected Aug 2025'
    },
    {
        school: 'BITS Pilani',
        logo: '/assets/bits.png',
        degree: 'Master of Science (M.S.) in Mathematics',
        year: '2015 - 2020'
    },
    {
        school: 'BITS Pilani',
        logo: '/assets/bits.png',
        degree: 'Bachelor of Engineering (B.E.)',
        year: '2015 - 2020'
    }
];
