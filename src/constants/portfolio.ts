import type { PortfolioItemData } from '../types/portfolio';

export const PORTFOLIO_ITEMS: PortfolioItemData[] = [
    // SOC Projects (Priority)
    {
        id: "soc-1",
        image: "/SOC/microsoft sentinel post 1.png",
        title: "Microsoft Sentinel Security Operations",
        alt: "Microsoft Sentinel dashboard overview",
        category: "SOC",
        size: "large",
        height: "medium",
        date: "2025",
        client: "Cyber Security Lab",
        description: "Comprehensive security monitoring using Microsoft Sentinel SIEM.",
        longDescription: "Implemented a full-scale Security Operations Center environment using Microsoft Sentinel. This project involved configuring data connectors, setting up analytic rules for real-time threat detection, and creating automated playbooks for incident response."
    },
    {
        id: "soc-5",
        image: "/SOC/block IP logic app designer.png",
        title: "Automated Incident Response",
        alt: "Logic App automated response workflow",
        category: "SOC",
        size: "medium",
        height: "medium",
        date: "2025",
        description: "SOAR playbook for automated IP blocking via Azure Logic Apps.",
        longDescription: "This project showcases the automation of security response using Azure Logic Apps. The playbook automatically blocks malicious IPs at the firewall level upon detection of confirmed threats in Microsoft Sentinel, significantly reducing Mean Time to Respond (MTTR)."
    },
    {
        id: "soc-2",
        image: "/SOC/wazuh post after agent config on win 11.png",
        video: "/SOC/Wazuh Complete.mp4",
        title: "Wazuh EDR Implementation",
        alt: "Wazuh agent configuration on Windows 11",
        category: "SOC",
        size: "medium",
        height: "tall",
        date: "2025",
        client: "Security Engineering",
        description: "Endpoint Detection and Response (EDR) implementation with Wazuh.",
        longDescription: "Deployed and configured Wazuh as a centralized EDR solution. This implementation focused on monitoring Windows 11 endpoints, capturing system logs, and identifying suspicious host-level activities through integrated vulnerability detection and file integrity monitoring."
    },
    {
        id: "soc-8",
        image: "/SOC/wazuh post after agent config on win 11 full.png",
        title: "Enhanced Endpoint Visibility",
        alt: "Full Wazuh agent configuration and logs",
        category: "SOC",
        size: "large",
        height: "medium",
        date: "2025",
        description: "Full observability across decentralized endpoints via Wazuh EDR.",
        longDescription: "A comprehensive deployment of Wazuh agents across a hybrid environment. This project centered on achieving 100% visibility into system-level events, registry changes, and file integrity across all managed endpoints, providing a unified security dashboard."
    },
    {
        id: "soc-7",
        image: "/SOC/incidentsentinel1111logs clear alert.png",
        title: "Critical Alert Tuning",
        alt: "Log clearing alert in Microsoft Sentinel",
        category: "SOC",
        size: "medium",
        height: "medium",
        date: "2025",
        description: "Detection of SIEM bypass and log clearing attempts.",
        longDescription: "Implemented high-fidelity alerts to detect administrative actions meant to cover tracks, such as manual log clearing. This project involved fine-tuning analytic rules to distinguish between legitimate system maintenance and malicious actor persistence techniques."
    },
    {
        id: "soc-4",
        image: "/SOC/incidentsentinel1.png",
        title: "Sentinel Incident Management",
        alt: "Security incidents list in Microsoft Sentinel",
        category: "SOC",
        size: "medium",
        height: "short",
        date: "2025",
        description: "Incident lifecycle management and triage in Microsoft Sentinel.",
        longDescription: "End-to-end incident management workflow established within Sentinel. This work demonstrates the ability to triage complex security alerts, perform deep-dive investigations using log analytics, and document evidence-based remediation steps."
    },
    {
        id: "soc-3",
        image: "/SOC/brute force correlation rule set.png",
        title: "Brute Force Attack Detection",
        alt: "Sentinel correlation rules for brute force detection",
        category: "SOC",
        size: "small",
        height: "medium",
        date: "2025",
        description: "Custom SIEM correlation rules for detecting brute force attempts.",
        longDescription: "Developed sophisticated KQL (Kusto Query Language) rules to identify pattern-based brute force attacks. The rule set correlates failed login attempts across multiple vectors to significantly reduce false positives while ensuring early detection of credential harvesting."
    },
    {
        id: "soc-6",
        image: "/SOC/microsoft sentinel post 2 4625.png",
        title: "User Logon Analysis",
        alt: "Windows Event 4625 analysis in Sentinel",
        category: "SOC",
        size: "small",
        height: "short",
        date: "2025",
        description: "Deep dive into Windows Event 4625 (Logon Failure) for brute force detection.",
        longDescription: "Focused investigation into brute force and credential harvesting attempts. By analyzing Event ID 4625 within Microsoft Sentinel, I developed specific workbooks to visualize logon patterns and identify anomalous behavior that standard alerts might miss."
    },
    {
        id: "soc-9",
        image: "/SOC/brute force img.png",
        title: "Tactical Threat Hunting",
        alt: "Threat hunting dashboard for brute force attacks",
        category: "SOC",
        size: "medium",
        height: "medium",
        date: "2025",
        description: "Proactive investigation into evolving credential access techniques.",
        longDescription: "This project showcases a proactive threat hunting approach within Microsoft Sentinel. By analyzing failed logon patterns and correlating them with IP reputation data, I identified sophisticated multi-vector brute force campaigns that successfully bypassed traditional perimeter defenses."
    },

    // Graphic Design Section
    {
        id: 1,
        image: "/11.jpg",
        title: "FlintVerse Poster Series",
        alt: "FlintVerse Poster Design",
        category: "Graphic Design",
        size: "large",
        height: "tall",
        date: "2024",
        client: "FlintVerse"
    },
    {
        id: 2,
        image: "/9.jpg",
        title: "Nivea Product Campaign",
        alt: "Nivea product design",
        category: "Graphic Design",
        size: "medium",
        height: "medium",
        date: "2024",
        client: "Nivea"
    },
    {
        id: 3,
        image: "/443.jpg",
        title: "Abstract Series 221",
        alt: "Poster 221",
        category: "Graphic Design",
        size: "small",
        height: "short",
        date: "2023",
        client: "Gallery 221"
    },
    {
        id: 9,
        image: "/Fund-Rasing.jpg",
        title: "Charity Fundraiser",
        alt: "Fund Raising Campaign",
        category: "Graphic Design",
        size: "large",
        height: "medium",
        date: "2024",
        client: "Hope Foundation"
    },
    {
        id: 4,
        image: "/2.jpg",
        title: "Minimalist Study",
        alt: "Poster 22",
        category: "Graphic Design",
        size: "medium",
        height: "tall",
        date: "2024",
        client: "Studio 22"
    },
    {
        id: 5,
        image: "/4.jpg",
        title: "Digital Identity",
        alt: "Digital logo on purple background",
        category: "Graphic Design",
        size: "small",
        height: "short",
        date: "2024",
        client: "TechStart"
    },
    {
        id: 6,
        image: "/121.jpg",
        title: "Brand Marks Vol.1",
        alt: "Digital logo variation 1",
        category: "Graphic Design",
        size: "small",
        height: "short",
        date: "2023",
        client: "BrandCo"
    },
    {
        id: 8,
        image: "/333.jpg",
        title: "Geometric Explorations",
        alt: "Digital logo variation 4",
        category: "Graphic Design",
        size: "medium",
        height: "medium",
        date: "2024",
        client: "Geometry Lab"
    },
    {
        id: 7,
        image: "/231.jpg",
        title: "Brand Marks Vol.2",
        alt: "Digital logo variation 2",
        category: "Graphic Design",
        size: "small",
        height: "short",
        date: "2023",
        client: "BrandCo"
    },
    {
        id: 10,
        image: "/4322.png",
        title: "Digital Compositions",
        alt: "Digital artwork",
        category: "Graphic Design",
        size: "medium",
        height: "tall",
        date: "2024",
        client: "Digital Arts"
    },
    {
        id: 11,
        image: "/1233.png",
        title: "Abstract Realms",
        alt: "Digital artwork",
        category: "Graphic Design",
        size: "small",
        height: "medium",
        date: "2023",
        client: "Virtual Gallery"
    },
    {
        id: 12,
        image: "/3.jpg",
        title: "Mixed Media Study",
        alt: "Creative composition",
        category: "Graphic Design",
        size: "medium",
        height: "medium",
        date: "2024",
        client: "Art Studio"
    }
];
