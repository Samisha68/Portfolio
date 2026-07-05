export const siteConfig = {
  name: "Samisha",
  email: "samishaofficial68@gmail.com",
  github: "https://github.com/Samisha68",
  telegram: "https://t.me/Samisha068",
  superteam: "https://superteam.fun",
  identity: "Developer, building on Solana.",
  tags: "Solana · TypeScript · Rust · Anchor",
  intro:
    "I've been building on Solana since 2023 — energy platforms, trading dashboards, and mobile dApps. Currently I lead development at EVORA, responsible for the platform's Web3 architecture and infrastructure.",
};

export type Experience = {
  role: string;
  company: string;
  url?: string;
  period: string;
  current?: boolean;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "Lead Developer",
    company: "EVORA",
    url: "https://evoracharge.com",
    period: "Dec 2025 — now",
    current: true,
    description:
      "Responsible for the platform's Web3 architecture: smart contracts, Solana integrations, wallet infrastructure, and tokenization.",
  },
  {
    role: "Lead Developer",
    company: "GreenKWh",
    url: "https://x.com/GreenKWh",
    period: "May — Dec 2025",
    description:
      "Led backend and blockchain infrastructure for a decentralized energy platform — smart contracts and the protocols that move energy data on-chain.",
  },
  {
    role: "Junior Developer",
    company: "Upsurge Labs",
    url: "https://x.com/upsurgelabs",
    period: "Oct — Dec 2024",
    description:
      "Helped build Cosmo AI (now Bhindi.io), a browser tool that automates repetitive tasks.",
  },
];

export type PullRequest = {
  repo: string;
  number: number;
  title: string;
  url: string;
  description: string;
  additions: number;
  deletions: number;
  language: string;
};

export const pullRequests: PullRequest[] = [
  {
    repo: "solana-foundation/solana-com",
    number: 1645,
    title: "Fix bun template generation command",
    url: "https://github.com/solana-foundation/solana-com/pull/1645",
    description:
      "The Solana templates page generated a broken scaffold command for Bun users — the first command a new Bun developer runs. Fixes the generator to emit bunx create-solana-dapp@latest, matching Bun's package-execution flow.",
    additions: 2,
    deletions: 0,
    language: "TypeScript",
  },
  {
    repo: "solana-rpc/superbank",
    number: 34,
    title: "Honor getSignatureStatuses history flag",
    url: "https://github.com/solana-rpc/superbank/pull/34",
    description:
      "getSignatureStatuses ignored the searchTransactionHistory flag, sending every request through disk-cache and ClickHouse history lookups. Honors the flag and keeps expensive lookups off the hot path, with regression tests for both behaviors.",
    additions: 126,
    deletions: 51,
    language: "Rust",
  },
  {
    repo: "solana-foundation/explorer",
    number: 1085,
    title: "Update transaction account keys size display",
    url: "https://github.com/solana-foundation/explorer/pull/1085",
    description:
      "The transaction Accounts preview summed current on-chain data sizes — the wrong number for estimating transaction size. Computes it correctly (non-lookup-table keys × 32 bytes) in one of the ecosystem's most-used debugging tools.",
    additions: 50,
    deletions: 8,
    language: "TypeScript",
  },
];

export type Project = {
  name: string;
  description: string;
  meta: string;
  live?: string;
  github?: string;
  year: string;
};

export const projects: Project[] = [
  {
    name: "Wakeup",
    description:
      "An alarm app for Solana Mobile where you put SOL behind waking up: commit SOL to escrow, dismiss the alarm by completing a verified wake challenge. Missed alarms are finalized by a crank into a weekly reward pool.",
    meta: "Expo · Anchor · attestation service",
    github: "https://github.com/Samisha68/Wakeup",
    year: "2026",
  },
  {
    name: "EnergyPro",
    description:
      "Peer-to-peer solar energy trading. Households sell surplus power for $BIJLEE tokens through a wallet-native checkout — listing, escrow, and settlement on Solana.",
    meta: "Next.js · SPL tokens · wallet adapter",
    live: "https://energypro.vercel.app",
    github: "https://github.com/Samisha68/Energypro",
    year: "2025",
  },
  {
    name: "Drift UI",
    description:
      "A perpetuals trading dashboard built on the Drift SDK — subaccounts, balances, positions, and live order management against Drift's on-chain state.",
    meta: "Next.js · Drift SDK",
    live: "https://driftdeck.vercel.app",
    github: "https://github.com/Samisha68/driftui",
    year: "2025",
  },
  {
    name: "TVDAO",
    description:
      "A platform where viewers earn for their attention instead of giving it away — rewards for engagement, settled on Solana.",
    meta: "Next.js · Solana",
    live: "https://tvdao.vercel.app",
    github: "https://github.com/Samisha68/tvdao",
    year: "2025",
  },
  {
    name: "Go-Cabs",
    description:
      "Ride booking with a carbon ledger — every trip records the emissions it saved, visible to the rider over time.",
    meta: "Next.js · Maps",
    live: "https://gocab-weld.vercel.app",
    github: "https://github.com/Samisha68/Gocabs-webapp",
    year: "2025",
  },
  {
    name: "CryptoCustodian",
    description:
      "A Telegram bot for Solana transactions by voice — token minting and balance checks driven by speech-to-text.",
    meta: "Python · Solana API · Telegram",
    github: "https://github.com/Samisha68/CryptoCustodian",
    year: "2024",
  },
];

export type Hackathon = {
  name: string;
  event: string;
  description: string;
  github: string;
};

export const hackathons: Hackathon[] = [
  {
    name: "Float",
    event: "MONOLITH Solana Mobile Hackathon · Mar 2026",
    description:
      "Micro-lending on Solana with two modes: classic collateralized installment loans, and an AI agent matching small short-term loans from a shared pool.",
    github: "https://github.com/Samisha68/float-app",
  },
  {
    name: "Coin Rush",
    event: "x402 Solana Hackathon · Nov 2025",
    description:
      "A Solana knowledge quiz where unlocking explanations costs an x402 micropayment — RAG-generated questions, XP, and topic mastery.",
    github: "https://github.com/Samisha68/x402-solana-hackathon",
  },
  {
    name: "WhaleVybes",
    event: "Built for Vybe Network · 2025",
    description:
      "A Telegram bot for tracking Solana wallets by nickname — holdings, transfers, token authorities, and decoded instructions.",
    github: "https://github.com/Samisha68/WhaleVybes",
  },
];

export const navItems = [
  { id: "work", label: "Work", short: "Work", key: "w" },
  { id: "open-source", label: "Open source", short: "OSS", key: "o" },
  { id: "projects", label: "Projects", short: "Projects", key: "p" },
  { id: "contact", label: "Contact", short: "Contact", key: "c" },
];
