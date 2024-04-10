import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import MapIcon from "@mui/icons-material/Map";
import QuizIcon from "@mui/icons-material/Quiz";
import GitHubIcon from "@mui/icons-material/GitHub";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleIcon from "@mui/icons-material/People";
// import PendingIcon from "@mui/icons-material/Pending";

const BulletList = [
  {
    title: "Getting Started",
    icon: <LocalLibraryIcon />,

    links: [
      {
        href: "/docs/Getting_Started/Introduction",
        text: "Introduction",
      },
      {
        href: "https://example.com/getting-started",
        text: "Installation & Setup",
      },
      {
        href: "https://example.com/configuration",
        text: "Quick Start Guide",
      },
    ],
  },
  {
    title: "Components",
    icon: <GridViewIcon />,
    links: [
      { href: "https://example.com/focus", text: "Basic Components" },
      { href: "https://example.com/components", text: "Layer Components" },
      { href: "https://example.com/components", text: "UI-Components" },
      { href: "https://example.com/components", text: "Hooks" },
      { href: "https://example.com/components", text: "Contexts" },
    ],
  },
  {
    title: "Advanced Topics",
    icon: <SettingsApplicationsIcon />,
    links: [
      { href: "https://reactjs.org", text: "Configuration" },
      { href: "https://reactjs.org", text: "Architecture" },
    ],
  },
  {
    title: "Examples",
    icon: <MapIcon />,
    links: [{ href: "https://reactjs.org", text: "Progressive Web App" }],
  },
  {
    title: "FAQ",
    icon: <QuizIcon />,
    links: [{ href: "https://reactjs.org", text: "Common questions" }],
  },
  {
    title: "Contributing",
    icon: <GitHubIcon />,
    links: [{ href: "https://reactjs.org", text: "Contributing" }],
  },
  {
    title: "Changelog and Updates",
    icon: <LibraryBooksIcon />,
    links: [{ href: "https://reactjs.org", text: "Changelog and Updates" }],
  },
  {
    title: "Support and Community",
    icon: <PeopleIcon />,
    links: [{ href: "https://reactjs.org", text: "Support and Community" }],
  },
  // {
  //   title: "In Progress",
  //   icon: <PendingIcon />,
  //   links: [{ href: "https://reactjs.org", text: "LayerStore" }],
  // },
];

function Feature({ icon, title, links }) {
  return (
    <div className={clsx("col col--3", styles.leftAlign)}>
      <div>{icon}</div>
      <div>
        <h3>{title}</h3>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
              <Link to={link.href}></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {BulletList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
