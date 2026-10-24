/**
 * Ganesh Ubale - Senior iOS & iPadOS Lead Engineer Resume Data
 * Work Experience structured with GlobalLogic parent company & client sub-tree
 */

const RESUME_DATA = {
    personal: {
        name: "Ganesh Ubale",
        initials: "GU",
        title: "Senior iOS & iPadOS Lead Engineer",
        typingTitles: [
            "Senior iOS & iPadOS Engineer",
            "Mobile SDK & Architecture Specialist",
            "AI-Assisted Workflow Pioneer (MCP)",
            "SwiftUI, Swift & Objective-C Specialist"
        ],
        tagline: "11+ years of expertise crafting high-performance, resilient iOS & iPadOS applications, custom Mobile SDKs, IoT/BLE vehicle & healthcare solutions, and AI-driven developer automation tools.",
        statusText: "11+ Years Experience • Open for Senior/Lead iOS Roles",
        statusActive: true,
        location: "Solapur / Pune, India",
        email: "ganeshubale@hotmail.com",
        phone: "+91 7709098935",
        avatarImg: "./assets/images/avatar.jpg", // Local avatar image path
        cvUrl: "https://drive.google.com/file/d/1KjdTzdc38Tpd2bKJsPCTtz2NvG4j7dIR/view?usp=sharing", // Replace with your public Google Drive PDF share link or direct download URL
        socials: [
            { platform: "GitHub", url: "https://github.com/GaneshUbale", icon: "fa-brands fa-github" },
            { platform: "LinkedIn", url: "https://www.linkedin.com/in/ganeshubale/", icon: "fa-brands fa-linkedin" },
            { platform: "Email", url: "mailto:ganeshubale@hotmail.com", icon: "fa-solid fa-envelope" },
            { platform: "Phone", url: "tel:+917709098935", icon: "fa-solid fa-phone" }
        ]
    },

    about: {
        bio: "Senior iOS & iPadOS Lead Engineer with 11+ years of hands-on experience designing, architecting, and delivering enterprise mobile applications for top Fortune 500 clients. Deep expertise in Swift, SwiftUI, Objective-C, Combine, MVVM, and Clean Architecture. Creator of the 'Cloud Code Skill' automation tool leveraging MCP (Model Context Protocol), Jira APIs, and GitLab CLI. Currently learning Generative AI and Agentic AI with Python to expand into AI-native automation and intelligent workflow design. Proven track record across Pet Health & Retail, Online Travel, Automotive IoT (Uconnect), MDM Migration (JAMF), Indoor Mapping (IMDF), Emergency Services, and Social Networking platforms.",
        stats: [
            { label: "Years Experience", value: "11+" },
            { label: "iOS & iPadOS Apps", value: "25+" },
            { label: "Mobile SDKs Built", value: "5+" },
            { label: "AI & MCP Automation", value: "100%" }
        ],
        highlights: [
            { title: "Universal iOS & iPadOS", desc: "Expert in building adaptive, high-performance apps for both iPhone and iPad using SwiftUI & UIKit.", icon: "fa-solid fa-mobile-screen-button" },
            { title: "Mobile SDK & Architecture", desc: "Architected modular Mobile SDKs, custom UI component libraries, and third-party integrations across enterprises.", icon: "fa-solid fa-cubes" },
            { title: "Automotive IoT & BLE", desc: "Engineered real-time vehicle telematics (Uconnect) and BLE medical/hardware device monitoring applications.", icon: "fa-solid fa-car-side" },
            { title: "AI & Workflow Automation", desc: "Created 'Cloud Code Skill' automation workflows leveraging MCP, Jira APIs, GitLab CLI, Claude Code, and Copilot.", icon: "fa-solid fa-robot" }
        ]
    },

    experience: [
        {
            company: "GlobalLogic India",
            location: "Pune, India",
            period: "Aug 2022 - Jun 2026 (4 years)",
            role: "Consultant – Senior Software Engineer",
            isParentCompany: true,
            clients: [
                {
                    clientName: "One of the largest U.S. health and wellness company focused on pets,",
                    role: "Consultant – Senior Software Engineer",
                    period: "May 2024 - Jun 2026 (2 years)",
                    description: "Leading iOS development for one of the largest U.S. pet supply and service retailers, enabling users to easily search, order products, and book services at discounted rates.",
                    achievements: [
                        "Created 'Cloud Code Skill' Automation Tool: Developed an end-to-end automation workflow leveraging Model Context Protocol (MCP), Jira APIs, and GitLab CLI.",
                        "Engineered new features with SwiftUI, Swift, and GraphQL APIs using Swinject dependency injection and SPM.",
                        "Led SCRUM meetings, technical requirement analysis, and R&D proof-of-concepts (POCs) for upcoming mobile technologies."
                    ],
                    tech: ["SwiftUI", "Swift", "Xcode", "MVVM", "Clean Architecture", "Combine", "SPM", "GraphQL", "Swinject", "MCP", "Claude Code", "GitLab"]
                },
                {
                    clientName: "One of World's Leading Online Travel Company",
                    role: "Consultant – Senior iOS Engineer",
                    period: "Oct 2023 - May 2024 (8 months)",
                    description: "Engineered features for a global all-in-one travel companion app used by millions to search, plan, and book hotels, flights, cruises, and car rentals worldwide.",
                    achievements: [
                        "Developed a modular Mobile SDK for UI components and enabled full iPad OS compatibility.",
                        "Implemented A/B Testing feature flags and robust Unit Testing suites to ensure zero-downtime releases.",
                        "Integrated multi-language support and internationalization for global travel members."
                    ],
                    tech: ["SwiftUI", "Swift", "iPadOS", "Mobile SDK", "GraphQL", "MVVM", "Accessibility", "A/B Testing", "SPM", "SwiftLint"]
                },
                {
                    clientName: "GlobalLogic Client (IoT / BLE Device App)",
                    role: "Consultant – Mobile Engineer",
                    period: "Aug 2022 - Oct 2023 (1 year)",
                    description: "Developed native iOS applications enabling users to connect to Bluetooth Low Energy (BLE) hardware devices, write messages, register to networks, and execute device operations.",
                    achievements: [
                        "Developed custom Mobile SDKs and native iPhone applications communicating with hardware over BLE.",
                        "Implemented secure connection protocols, log uploads to cloud servers, and network coverage testing reports.",
                    ],
                    tech: ["SwiftUI", "Swift", "BLE (Bluetooth)", "Mobile SDK", "Core Data", "Realm", "SQLite", "Autolayout", "Firebase Analytics"]
                }
            ]
        },
        {
            role: "IT Analyst – Senior iOS Developer",
            company: "Tata Consultancy Services Ltd (TCS)",
            location: "Pune, India",
            period: "Sep 2018 - Aug 2022 (4 years)",
            current: false,
            description: "Architected multiple enterprise iOS and iPadOS applications across healthcare, automotive IoT, compliance, and indoor mapping domains.",
            achievements: [
                "Developed Universal iPhone and iPad enterprise applications (Mobility At Work, Lilly iMove, Lilly Indoor Maps, Uconnect IoT, ComplianceGPS).",
                "Executed MDM Migration from MobileIron to JAMF for enterprise iOS devices.",
                "Integrated IMDF (Indoor Mapping Data Format) for indoor venue navigation and Google Maps API.",
                "Implemented real-time chatting features using XMPP, Layer API, APNS, and Firebase Cloud Messaging (FCM)."
            ],
            tech: ["SwiftUI", "Combine", "Swift", "Objective-C", "JAMF MDM", "Core Data", "Realm", "IMDF Indoor Maps", "APNS", "Firebase", "Alamofire", "XMPP"]
        },
        {
            role: "Software Engineer – iOS Developer",
            company: "Epicomm Technologies Ltd",
            location: "Pune, India",
            period: "Dec 2014 - Aug 2018 (3.5+ years)",
            current: false,
            description: "Developed social media, venue management, and emergency response applications with real-time chatting, offline-first sync, and reporting features.",
            achievements: [
                "Engineered Emergency Services MultiTarget Project (Sterile Lab Services ER App, MooreASG, HES ER App) using single-codebase multi-target architecture.",
                "Developed UbiQ, Partei App, and SocialNightLife featuring real-time group chat via XMPP framework & Layer Chat APIs.",
                "Managed complete product development lifecycle from requirement analysis to App Store release."
            ],
            tech: ["Swift", "Objective-C", "UIKit", "Storyboard", "Auto-layout", "MVC", "Core Data", "SQLite", "XMPP", "Layer Chat API", "Firebase"]
        }
    ],

    skills: [
        {
            category: "iOS & iPadOS Development",
            icon: "fa-solid fa-mobile-screen-button",
            items: [
                { name: "Swift & SwiftUI", level: 98 },
                { name: "Objective-C & Cocoa Touch", level: 92 },
                { name: "Combine & Reactive Programming", level: 92 },
                { name: "UIKit, Storyboards & Auto-layout", level: 95 },
                { name: "Mobile SDK Development", level: 95 },
                { name: "Core Data, Realm & SQLite", level: 92 }
            ]
        },
        {
            category: "Architecture & Enterprise Protocols",
            icon: "fa-solid fa-layer-group",
            items: [
                { name: "MVVM & Clean Architecture", level: 95 },
                { name: "SOLID Principles & Design Patterns", level: 95 },
                { name: "RESTful APIs & GraphQL", level: 90 },
                { name: "BLE (Bluetooth Low Energy) & IoT", level: 80 },
                { name: "MDM Migration (JAMF / MobileIron)", level: 85 },
                { name: "APNS & Firebase Push Notifications", level: 92 }
            ]
        },
        {
            category: "AI & Developer Automation",
            icon: "fa-solid fa-robot",
            items: [
                { name: "MCP (Model Context Protocol)", level: 95 },
                { name: "Claude Code & GitHub Copilot", level: 95 },
                { name: "GitLab CLI & Jira API Automation", level: 90 },
                { name: "AI Prompt Engineering", level: 92 },    
                { name: "Generative AI & Agentic AI (Python)", level: 20 },
                { name: "Git, SPM, CocoaPods & Xcode", level: 95 }
            ]
        }
    ],

    projects: [
        {
            title: "Health and Wellness focused app for pets",
            category: "fullstack",
            image: "",
            description: "High-scale U.S. pet supply retailer app for ordering products and booking services with custom MCP automation workflows built into CI/CD pipelines.",
            tech: ["Swift", "SwiftUI", "Combine", "GraphQL", "SPM", "MCP", "GitLab", "Claude Code", "CLINE"],
            demoUrl: "",
            githubUrl: "",
            featured: false
        },
        {   
            title: "Global All-In-One Travel App",
            category: "fullstack",
            image: "",
            description: "World-leading travel booking app for flight, hotel, and car reservations with custom Mobile UI SDK and full iPadOS optimization.",
            tech: ["SwiftUI", "iPadOS", "Mobile SDK", "GraphQL", "A/B Testing"],
            demoUrl: "",
            githubUrl: "",
            featured: true
        },
        {
            title: "Uconnect Automotive IoT Connected Vehicle App",
            category: "fullstack",
            image: "",
            description: "Connected vehicle app allowing users to remotely lock/unlock doors, start engine, locate vehicle on maps, and interact via IoT telematics.",
            tech: ["Swift", "IoT Telematics", "Apple Maps API", "Core Data", "REST"],
            demoUrl: "",
            githubUrl: "",
            featured: false
        },
        {
            title: "Lilly iMove & Indoor Maps Enterprise Apps",
            category: "fullstack",
            image: "",
            description: "Enterprise suite featuring MDM migration from MobileIron to JAMF for iOS devices, and IMDF venue indoor mapping for company locations.",
            tech: ["Swift", "JAMF MDM", "IMDF Indoor Maps", "Apple Maps API"],
            demoUrl: "",
            githubUrl: "",
            featured: false
        },
        {
            title: "ComplianceGPS (Varian Compliance Solution)",
            category: "fullstack",
            image: "",
            description: "Multilingual enterprise compliance app for Varian to view country-specific requirements, currency conversion, and Realm DB offline sync.",
            tech: ["Swift", "Realm DB", "Currency Converter API", "Multilingual"],
            demoUrl: "",
            githubUrl: "",
            featured: false
        },
        {
            title: "BLE Hardware Medical & IoT App",
            category: "fullstack",
            image: "",
            description: "Native iOS app communicating with BLE IoT devices to register networks, transmit telemetry logs, and generate coverage reports.",
            tech: ["Swift", "BLE", "Core Data", "Realm", "Mobile SDK"],
            demoUrl: "",
            githubUrl: "",
            featured: false
        },
        {
            title: "Emergency Services MultiTarget System",
            category: "fullstack",
            image: "",
            description: "Environmental emergency response suite (Sterile Lab Services ER, MooreASG, HES ER) compiling multiple target apps from a single project codebase.",
            tech: ["Swift", "Multi-Target Architecture", "GPS Location", "APNS"],
            demoUrl: "",
            githubUrl: "",
            featured: false
        },
        {
            title: "UbiQ & Partei Real-Time Social Chat Apps",
            category: "fullstack",
            image: "",
            description: "Social networking and event planning platforms featuring real-time group chat via XMPP framework & Layer Chat APIs with Google Maps location search.",
            tech: ["Objective-C", "Swift", "XMPP Framework", "Layer Chat API", "LinkedIn API"],
            demoUrl: "",
            githubUrl: "",
            featured: false
        },
        {
            title: "SocialNightLife & Mobility At Work",
            category: "fullstack",
            image: "",
            description: "Nightclub & venue solution with visual floor plan reporting, alongside Mobility At Work enterprise device compliance app.",
            tech: ["Objective-C", "SwiftUI", "Core Data", "APNS", "Firebase Analytics"],
            demoUrl: "",
            githubUrl: "",
            featured: false
        },
        {
            title: "MCP 'Cloud Code Skill' Automation Tool",
            category: "fullstack",
            image: "",
            description: "End-to-end developer automation tool integrating Model Context Protocol (MCP), Jira REST APIs, and GitLab CLI to streamline development workflows.",
            tech: ["MCP", "Claude Code", "GitLab CLI", "Jira API", "Python / Bash"],
            demoUrl: "",
            githubUrl: "",
            featured: false
        },
        {
            title: "IPO Alert System",
            category: "opensource",
            image: "",
            description: "Automated tool designed to track, monitor, and send real-time notification alerts for active Initial Public Offerings (IPOs), if given conditon match.",
            tech: ["Python", "GitHub Actions", "Selenium", "REST APIs", "Automation", "Telegram Bot", "Telegram API"],
            demoUrl: "",
            githubUrl: "https://github.com/GaneshUbale/IPO_Alert",
            featured: true
        }
    ],

    pocsBlogs: [
        {
            title: "Google Antigravity Vibe Coding Portfolio POC",
            category: "poc",
            type: "POC",
            icon: "fa-brands fa-github",
            description: "A GitHub Pages portfolio POC built using Google Antigravity / vibe-coding workflow, featuring a responsive resume, skills, projects, and blog sections.",
            url: "https://github.com/GaneshUbale/ganeshubale.github.io",
            tags: ["Vibe Coding", "Google Antigravity", "GitHub Pages", "Portfolio", "HTML/CSS/JS"]
        },
        {
            title: "Debugging APIs like a Pro: Using Charles Proxy & Proxyman",
            category: "blog",
            type: "Blog",
            icon: "fa-solid fa-newspaper",
            description: "A practical guide to inspecting, debugging, and validating API traffic using Charles Proxy and Proxyman for mobile engineering workflows.",
            url: "https://medium.com/@ubaleganesh096/debugging-apis-like-a-pro-using-charles-proxy-proxyman-fd21b7948516?sharedUserId=ubaleganesh096",
            tags: ["API Debugging", "Charles Proxy", "Proxyman", "iOS"]
        }
    ],

    otherProjects: [
        { title: "PassDiary", desc: "Secure passcode protected journal & diary application for iOS." },
        { title: "iDock", desc: "Native iPad document viewer and enterprise file management system." },
        { title: "ATM Simulator", desc: "Object-oriented banking simulation built with Java." }
    ],

    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "Sinhgad College of Engineering, Solapur",
            period: "July 2010 - August 2013",
            grade: "First Class",
            description: "Specialized in Computer Applications, Mobile Computing, Software Architecture, and Database Systems."
        },
        {
            degree: "Bachelor of Science (B.Sc.) in Mathematics",
            institution: "Dayanand College of Arts and Science, Solapur",
            period: "July 2007 - May 2010",
            grade: "First Class",
            description: "Major in Mathematics, Logic, and Analytical Problem Solving."
        }
    ],

    certifications: [
        {
            title: "GitHub Foundations Certification",
            issuer: "Microsoft",
            year: "Certified",
            badgeIcon: "fa-brands fa-github",
            url: "https://learn.microsoft.com/api/credentials/share/en-us/GaneshUbale-1262/7E41E8930940E47D?sharingId=50D959BDD4E4955F"
        }
    ]
};
