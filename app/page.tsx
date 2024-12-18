'use client'
import { useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { LinkedInLogoIcon, EnvelopeClosedIcon, MobileIcon, PersonIcon, BriefcaseIcon, GraduationCapIcon, CheckCircledIcon, BookmarkIcon, CodeIcon } from "@radix-ui/react-icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { JobCard } from "@/components/job-card"

export default function CVPage() {
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const preventCopy = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) && 
        (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U' || e.key === 'p' || e.key === 'P')
      ) {
        e.preventDefault()
      }
    }

    const preventRightClick = (e: MouseEvent) => {
      e.preventDefault()
    }

    const preventSelect = (e: Event) => {
      e.preventDefault()
    }

    // Add event listeners
    document.addEventListener('keydown', preventCopy)
    document.addEventListener('contextmenu', preventRightClick)
    document.addEventListener('selectstart', preventSelect)

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', preventCopy)
      document.removeEventListener('contextmenu', preventRightClick)
      document.removeEventListener('selectstart', preventSelect)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl font-bold">Calvin Wong</h1>
              <p className="text-sm mt-2 font-light">Driving Secure IT Solutions | Empowering Innovation with a Cybersecurity Edge</p>
            </div>
            <div className="mt-4 md:mt-0 space-y-2">
              <a href="mailto:cw@aug1st.com" className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors" aria-label="Email Calvin Wong">
                <EnvelopeClosedIcon className="h-5 w-5" />
                <span>cw at aug1st dot com</span>
              </a>
              <div className="flex items-center space-x-2">
                <MobileIcon className="h-5 w-5" />
                <span>+65 88OO 513O</span>
              </div>
              <a href="https://www.linkedin.com/in/yfcw/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors" aria-label="Calvin Wong's LinkedIn profile">
                <LinkedInLogoIcon className="h-5 w-5" />
                <span>in/yfcw</span>
              </a>
            </div>
          </div>
        </header>

        <main className="p-8 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Profile</h2>
            <Separator className="mb-4" />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              As an experienced IT leader and cybersecurity expert, I specialise in developing and implementing robust technical solutions that enhance business security and efficiency. My expertise spans cybersecurity risk management, technical design, and strategic project leadership.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              With a proven track record in IT governance, cloud infrastructure, and information security frameworks (ISO/IEC 27001, PCI-DSS), I drive seamless business operations while ensuring strong compliance with industry standards.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Leveraging my in-depth technical knowledge and strong leadership abilities, I successfully navigate complex IT projects, security initiatives, and data centre operations to guarantee the seamless execution of business objectives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Professional Experience</h2>
            <Separator className="mb-4" />
            <div className="space-y-6">
              <JobCard
                title="IT Manager"
                company="Hafnia Pools Pte Ltd."
                period="06.2023 - Present"
                details={[
                  "Ensured seamless MSBC operations by managing smooth application performance and integration with the finance ecosystem.",
                  "Provided critical user support, handling account management and resolving application issues promptly.",
                  "Facilitated collaboration as the primary liaison between internal teams and external stakeholders.",
                  "Demonstrated problem-solving expertise, addressing technical challenges with analytical precision.",
                  "Led compliance and security audits to uphold high standards of security, compliance, and functionality."
                ]}
              />
              <JobCard
                title="Financial Systems Manager"
                company="Hafnia Pools Pte Ltd."
                period="12.2019 - 05.2023"
                details={[
                  "Primary Liaison for MSBC: Served as the key point of contact for the Microsoft Business Central (MSBC) application, ensuring seamless coordination within the Finance function.",
                  "Achieved 99% System Uptime: Collaborated with teams and vendors to maintain high system availability, supporting business continuity.",
                  "Led Critical Issue Resolutions: Directed swift responses to system emergencies, minimising downtime and ensuring uninterrupted operations.",
                  "Drove Helpdesk Efficiency: Monitored and resolved incidents promptly, enhancing operational performance and customer satisfaction.",
                  "Enhanced Documentation Practices: Implemented best practices for recording issues and resolutions, improving knowledge management and compliance.",
                  "Exhibited Problem-Solving Leadership: Proactively addressed operational challenges, ensuring the smooth functioning of business-critical processes."
                ]}
              />
              <JobCard
                title="IT Manager"
                company="AXA Partners Singapore"
                period="11.2014 - 09.2019"
                details={[
                  "Optimised IT Operations: Developed and implemented policies that reduced system errors by 20% and improved operational efficiency.",
                  "Ensured Compliance with Security Standards: Achieved adherence to PCI-DSS, OSPAR, and MAS TRM guidelines, securing the organisation's digital infrastructure.",
                  "Led Regional IT Initiatives: Strengthened regional digital infrastructure, attaining 100% audit compliance and enhancing operational reliability.",
                  "Enhanced Security Frameworks: Integrated compliance components into IT systems to establish resilient security measures and safeguard assets.",
                  "Aligned with Industry Standards: Upgraded IT infrastructure to meet AXA group standards, demonstrating strong governance and execution capabilities.",
                  "Implemented Strategic Solutions: Applied strategic expertise to drive sustainable improvements in IT systems and processes."
                ]}
              />
              <JobCard
                title="IT Manager, Asia Pacific"
                company="World Kitchen (Asia Pacific)"
                period="01.2011 - 05.2014"
                details={[
                  "Led IT Operations in APAC: Directed system integration, security, and network infrastructure, achieving 99.5% system availability across regional offices.",
                  "Managed a High-Performing Team: Supervised a team of six IT professionals, delivering projects on time and within budget.",
                  "Boosted Team Productivity: Implemented process improvements and collaboration initiatives, resulting in a 15% increase in productivity.",
                  "Ensured Operational Excellence: Maintained high reporting standards and aligned team efforts with organisational goals.",
                  "Focused on Strategic Excellence: Delivered consistent results that reinforced departmental success and operational efficiency."
                ]}
              />
              <JobCard
                title="IT Manager, SEA"
                company="Veolia Water (SEA) Holding"
                period="09.2006 - 08.2010"
                details={[
                  "Led a High-Performing IT Team: Managed a skilled team ensuring the seamless operation of the company's network and systems to support business needs.",
                  "Maintained Operational Efficiency: Delivered proactive oversight and operational excellence to uphold efficiency and reliability.",
                  "Managed Vendors and Stakeholders: Collaborated effectively with IT vendors and internal clients to ensure aligned service delivery and business support.",
                  "Oversaw IT Infrastructure: Supervised critical components, including network connections, hardware and software procurement, and system application deployment.",
                  "Achieved IT Goals for Business Success: Ensured smooth IT operations, directly contributing to organisational objectives and overall success."
                ]}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Education</h2>
            <Separator className="mb-4" />
            <div className="space-y-6">
              {[
                {
                  degree: "Master of Project and Programme Management",
                  school: "The University of Sydney, Australia",
                  year: "2025",
                  focus: "Strategic Thinking, Organisational Skills, Interpersonal and Leadership Skills"
                },
                {
                  degree: "Master of Cyber Security",
                  school: "The University of Adelaide, Australia",
                  year: "2023",
                  grade: "GPA 6.25/7",
                  focus: "Cybersecurity, Data Privacy, Information Risk, Python Programming"
                },
                {
                  degree: "Advanced Certificate in Practical Business Law",
                  school: "SMU Academy, Singapore",
                  year: "2022",
                  focus: "Legal Principles, Risk Management, Decision-making, Strategic Contribution"
                },
                {
                  degree: "Professional Certificate in Digital Marketing",
                  school: "SMU Academy, Singapore",
                  year: "2021",
                  focus: "Social Media Marketing; Search Engine Marketing (SEM); Content Creation and Curation; Persuasive Copywriting"
                },
                {
                  degree: "Graduate Diploma in Communication Management and Innovation",
                  school: "SMU Academy, Singapore",
                  year: "2020",
                  focus: "Strategic Communication, Digital Marketing Proficiency, Innovation Management, Leadership and Persuasion"
                }
              ].map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{edu.degree}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.year}</p>
                    </div>
                    {edu.grade && <p className="text-gray-600 dark:text-gray-300 mt-2">Grade: {edu.grade}</p>}
                    <p className="text-gray-700 dark:text-gray-300 mt-2">Focus: {edu.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Certifications</h2>
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "AWS Certified SysOps Administrator – Associate (2021)",
                "AWS Certified Developer – Associate (2020)",
                "AWS Certified Solutions Architect – Associate (2020)",
                "Practitioner Certificate in Personal Data Protection (SG) (2020)",
                "Lean Six Sigma (LSS) Yellow Belt Certification (2020)"
              ].map((cert, index) => (
                <Badge key={index} variant="outline" className="text-sm py-2 px-3 dark:border-gray-600 dark:text-gray-200">
                  {cert}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Trainings</h2>
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "ISO/IEC 27001:2022 ISMS Internal Auditor",
                "Data Analytics Using Power BI",
                "NICF - Microsoft Azure Administrator",
                "NICF - Certified Information Systems Auditor",
                "ITIL v3 Foundation for IT Service Management"
              ].map((training, index) => (
                <Badge key={index} variant="outline" className="text-sm py-2 px-3 dark:border-gray-600 dark:text-gray-200">
                  {training}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Technical Skills</h2>
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { category: "Infrastructure", skills: ["Cloud (AWS, Azure)", "Virtualization", "Network Architecture"] },
                { category: "ERP & Database", skills: ["MS Business Central", "SQL", "Backup & Recovery"] },
                { category: "Web & App Coding", skills: ["Python", "Swift", "TypeScript"] },
                { category: "Compliance", skills: ["PCI-DSS", "ISO/IEC 27001:2015", "PDPA"] }
              ].map((skillSet, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">{skillSet.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillSet.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="default" className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white p-6">
          <div className="flex justify-between items-center text-sm">
            <p>© {currentYear} Calvin Wong. All rights reserved.</p>
            <p className="text-gray-400">Last updated: December 18, 2024</p>
          </div>
        </footer>
      </div>
      <ThemeToggle />
    </div>
  )
}

