export default {
    name: "Vaibhav Ganeriwala",
    email: "vaibhav@ganeriwala.com",
    phone: "201-484-6005",
    location: "New York Metropolitan Area",
    resume: "assets/resume.pdf",
    links: {
        linkedin: "https://www.linkedin.com/in/vaibhav-ganeriwala/",
        github: "https://github.com/VaibhavGaneriwala",
    },
    roles : [
        "I'm a Software Engineer",
        "I'm a Full-Stack Engineer",
        "I build with Python & TypeScript",
        "I ship apps end to end"
    ],

    about: {
        heading: "Full-Stack Engineer who builds end to end.",
        photo: "",
        paragraphs: [
            "I build applications end to end in Python and TypeScript: REST APIs, MongoDB schemas, JWT authentication, Redis caching and React frontends, containerized with Docker and shipped through GitHub Actions.",
            "I hold an M.S. in Computer Science from Stevens Institute of Technology and I'm based in the New York Metropolitan Area.",
        ],
        stats: [
            {value: "M.S.", label: "Computer Science, Stevens"},
            {value: "100K+", label: "Records in a pipeline I built"},
            {value: "7000+", label: "Users supported at Stevens Division of IT"},
        ],
    },

    experience: [
        {
            when: "Jan 2025 - May 2026",
            role: "Graduate Client Support Services Technology Consultant",
            company: "Stevens Institute of Technology - Division of IT",
            location: "Hoboken, NJ",
            bullets: [
                "Provided first-line technical support to a **7,000+ user** university community through FreshService, covering hardware, software, account and connectivity issues across Microsoft 365.",
                "Imaged and configured Windows, macOS and Linux devices, and managed accounts including password resets and access changes.",
                "Rewrote the team's device setup documentation, which became the reference used by colleagues during training.",
                "Received the Division of IT's **Above and Beyond Award** (May 2026).",
            ],
        },
        {
            when: "Feb 2024 - Jul 2024",
            role: "Salesforce Developer Trainee",
            company: "AlgoCirrus Pvt. Ltd.",
            location: "Noida, India",
            bullets: [
                "Worked across Salesforce administration and development, configuring data models, validation rules and multi-stage approval workflows for client CRM deployments.",
            ]
        },
        {
            when: "May 2023 - Jan 2024",
            role: "Software Engineer Intern",
            company: "Unthinkable Solutions LLP",
            location: "Gurugram, India",
            bullets: [
                "Built Python data-processing modules with Pandas and NumPy for a pipeline handling **100,000+ records**, plus automation scripts for metadata extraction and validation that replaced manual data entry.",
                "Collaborated in a 6-person Agile team using Git/Bitbucket with code reviews and sprint-based delivery.",
            ],
        },
    ],
    
    projectFilters: [
        {id: "web", label: "Full-Stack"},
        {id: "ml", label: "ML & Data"},
    ],

    projects: [
        {
            category: "web",
            year: "2025 - 2026",
            title: "FitTracker",
            description: "Dockerized fitness and nutrition platform with workouts, meal logging, progress photos and a social feed. Node/Express REST API in TypeScript with JWT auth, Mongoose schemas, Redis caching and MinIO image storage.",
            tags: ["React", "TypeScript", "Express.js", "MongoDB", "Redis", "MinIO", "Docker"],
            media: {type: "image", src: ""},
            links: [
                {label: "Live Demo ↗", url: ""},
                {label: "Code ↗", url: "https://github.com/VaibhavGaneriwala/fit-tracker"},
            ],
        },
        {
            category: "ml",
            year: "2026",
            title: "Tumor Growth Simulator",
            description: "Streamlit tool for browsing patient timelines and MRI slices in three planes, with CLAHE + Otsu tumor highlighting, exponential/linear/Gompertz growth models, and a Random Forest that estimates patient-specific growth rates.",
            tags: ["Python", "Streamlit", "OpenCV", "scikit-learn"],
            media: {type: "image", src: ""},
            links: [
                {label: "Live Demo ↗", url: ""},
                {label: "Code ↗", url: "https://github.com/VaibhavGaneriwala/tumor-growth-simulator"},
            ],
        },
        {
            category: "web",
            year: "2025-2026",
            title: "MedAssist AI",
            description: "Cross-platform medication adherence app for patients, providers and administrators, with role-based access control and an OpenAI-powered medication-assistant chatbot.",
            tags: ["React Native", "TypeScript", "Node.js", "OpenAI API"],
            media: {type: "image", src: ""},
            links: [
                {label: "Live Demo ↗", url: ""},
                {label: "Code ↗", url: "https://github.com/VaibhavGaneriwala/medication-adherence-tracker"},
            ],
        },
        {
            category: "web",
            year: "2026",
            title: "Smart Warehouse Inventory System",
            description: "Web app for managing warehouse inventory with auditing workflows and interactive dashboards.",
            tags: ["JavaScript", "Node.js"],
            media: {type: "image", src: ""},
            links: [
                {label: "Live Demo ↗", url: ""},
                {label: "Code ↗", url: "https://github.com/VaibhavGaneriwala/smart-warehouse-inventory-system"},
            ],
        },
    ],
    education: [
        {
            when: "Sep 2024 - May 2026",
            role: "M.S. in Computer Science",
            company: "Stevens Institute of Technology",
            location: "Hoboken, NJ",
        },
        {
            when: "Sep 2020 - May 2024",
            role: "B.Tech in Computer Science Engineering",
            company: "Bennett University",
            location: "Greater Noida, India",
        },
    ],
    achievements: [
        {
            title: "Above and Beyond Award",
            description: "Stevens Institute of Technology, Division of IT",
            when: "May 2026",
        },
    ],
    stack: [
        {group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "C++"]},
        {group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Mongoose"]},
        {group: "Frontend", items: ["React", "React Native", "HTML/CSS", "Tailwind CSS"]},
        {group: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]},
        {group: "DevOps & Tools", items: ["Git/GitHub", "Docker", "CI/CD", "GitHub Actions", "Linux", "MinIO"]},
        {group: "Data & ML", items: ["OpenAI API", "LLM integration", "scikit-learn", "Pandas", "NumPy", "Streamlit", "OpenCV"]},
    ],
    contact: {
        heading: "Let's build something.",
        text: "Call, email, or reach me on LinkedIn.",
    },
};