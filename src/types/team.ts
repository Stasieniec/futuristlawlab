// Team and Member type definitions for the hackathon team registration system

export type ChallengeType = 'houthoff' | 'pinsent-masons';

export interface Challenge {
  id: ChallengeType;
  name: string;
  subtitle: string;
  description: string;
  downloadUrl?: string;
  downloadLabel?: string;
}

export const CHALLENGES: Challenge[] = [
  {
    id: 'houthoff',
    name: 'Houthoff Challenge',
    subtitle: 'Domain Name Ownership Checker',
    description: `In the modern economy, a company's website is often the first and sometimes the only interface through which customers, suppliers, employees and investors interact with the business. For many companies, the domain names linked to these websites function as core corporate assets: they carry the brand, drive all digital traffic, enable e-commerce, host client portals and often serve as the backbone for email infrastructure. Losing control of even a single critical domain can disrupt commercial operations, create security risks or undermine brand trust.

Within M&A transactions, ensuring that all domain names used by the target company are actually owned by that company (or the appropriate subsidiary) is therefore a fundamental step in the intellectual property rights workstream of a legal vendor due diligence exercise. A prospective buyer will assume that the digital storefronts, portals and online systems they see during the sale process will be transferred to them upon closing. If it turns out that key domains are registered in the names of employees, founders, external marketing agencies or entities outside the transaction perimeter, this can severely complicate the deal and may even create closing conditions or indemnities.

In practice, companies also tend to register a cluster of domain-name variants around their main brand. These can include typographical variants to capture mis-spelled traffic, defensive registrations to prevent competitors or bad actors from acquiring similar domains and technical domains used for integrations, APIs or internal routing. For consumer-facing companies such as retailers, e-commerce platforms and logistics operators, the domain landscape can therefore be surprisingly broad and commercially sensitive.

When conducting due diligence, IP lawyers are frequently presented with large Excel sheets containing hundreds of domains that claim to be used or owned by the target. Verifying the accuracy of these lists is a tedious and highly manual process. Unlike trademarks, patents or corporate registrations, there is no unified global registry for domain ownership. Each extension (.com, .nl, .eu, .store, etc.) has its own registry and its own rules. This means that every domain name must be checked individually, often by querying WHOIS records that may be incomplete or privacy-protected. The result is a slow, error-prone workflow where important inconsistencies can easily go unnoticed.

A tool that automates and scales this process would not only save time, but also materially improve the quality and completeness of the due diligence findings. It would allow legal teams to focus on analysing risks rather than performing repetitive lookups and it would reduce the chance of missing a domain that is commercially essential to the business being acquired.

**Scope and objectives.** Teams should design an automated and scalable solution that ingests list of domain names and programmatically resolves the current owner or registrant information. The solution should handle common extensions (e.g., .com, .net, .org, and .nl). Where ownership data is unavailable, the tool should state so. The speed of the system is of importance, but accuracy is the leading factor.

**Inputs.** A file containing approximately 75 domain names in a single column. [Sample file available for download below]

**Outputs.** A structured table mapping each domain to: registrant/organization (if available), registrar, registry, creation/expiry dates (if available), nameservers, data source(s), timestamp. Ideally we would want to see the 'proof' (e.g. a PDF print screen of the registry) per domain name.`,
    downloadUrl: '/hackathon/Houthoff-Challenge_Domain-Names.xlsx',
    downloadLabel: 'Download Sample Domain Names (Excel)'
  },
  {
    id: 'pinsent-masons',
    name: 'Pinsent Masons Challenge',
    subtitle: 'Climate-related Legal Liabilities',
    description: `Participants will be asked to explore how legal intelligence tools can help illustrate, quantify, and manage climate-related legal liabilities in an environment defined by uncertainty. Climate and environmental risks are inherently unpredictable, making it difficult for organisations to anticipate how future scenarios may impact their legal obligations and business performance. The challenge is to design a solution that improves the prediction and assessment of these risks, enabling more informed decision-making.

How might contracts across supply chains shift under different climate scenarios? How could compliance duties evolve, and what consequences might this have for revenues or operational resilience? Teams should propose innovative ways to model these dynamics and support stakeholders in navigating emerging climate-driven legal exposures.

For example, in the clothing sector, the EU strategy for sustainable and circular textiles will impact the supply chain. You could address this via Blockchain or other innovative approaches.

**Useful resources:**
- EU Strategy for Sustainable and Circular Textiles: https://environment.ec.europa.eu/strategy/textiles-strategy_en
- Blockchain for Supply Chain: https://www.sciencedirect.com/science/article/pii/S2096720924000794
- Fashion Supply Chain Transparency: https://prism.sustainability-directory.com/scenario/fashion-supply-chain-transparency-via-blockchain/`
  }
];

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'Team Lead' | 'Member';
  addedAt: Date;
}

export interface Team {
  id: string;
  teamName: string;
  challenge: ChallengeType;
  createdBy: string; // Email of the person who created the team
  createdAt: Date;
  locked: boolean; // Admin can lock teams to prevent edits
  members: TeamMember[];
  maxMembers: number;
  updatedAt: Date;
}

export interface GlobalConfig {
  registrationOpen: boolean;
  registrationDeadline: Date | null;
  allowEditsAfterLock: string[]; // Fields that can be edited even when locked (e.g., ["teamName"])
  maxTeamSize: number;
}

// Form data types
export interface CreateTeamFormData {
  teamName: string;
  challenge: ChallengeType;
  createdBy: string;
  initialMembers: Omit<TeamMember, 'id' | 'addedAt'>[];
}

export interface TeamFormErrors {
  teamName?: string;
  createdBy?: string;
  members?: string;
  general?: string;
}
