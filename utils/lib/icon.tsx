import {
    Workflow,
    Server,
    ShieldCheck,
    Cloud,
    Database,
    DatabaseZap,
    GitBranch,
    FileBraces,
    Braces,
    MessageSquareCode
} from "lucide-react";
import type { ReactNode } from "react";
import { SiAmazonwebservices, SiGo, SiGooglecloud } from "react-icons/si";

export function getTechIcon(techName: string): ReactNode | null {
    const key = techName.toLowerCase();

    for (const [k, icon] of Object.entries(techIconMap)) {
        if (key.includes(k)) return icon;
    }

    return null;
}

export const techIconMap: Record<string, ReactNode> = {
    // CI/CD and workflow tools
    cicd: <Workflow className="h-3 w-3" />,
    argo: <Workflow className="h-3 w-3" />,
    github: <GitBranch className="h-3 w-3" />,
    actions: <GitBranch className="h-3 w-3" />,

    // Containerization / orchestration
    docker: <Server className="h-3 w-3" />,
    kubernetes: <Server className="h-3 w-3" />,
    k8s: <Server className="h-3 w-3" />,

    // Network
    "rest api": <FileBraces className="h-3 w-3"/>,
    grpc: <Braces className="h-3 w-3"/>,
    nsq: <MessageSquareCode className="h-3 w-3"/>,

    // Monitoring / observability
    prometheus: <ShieldCheck className="h-3 w-3" />,
    grafana: <ShieldCheck className="h-3 w-3" />,
    newrelic: <ShieldCheck className="h-3 w-3" />,
    slo: <ShieldCheck className="h-3 w-3" />,
    opa: <ShieldCheck className="h-3 w-3" />,
    security: <ShieldCheck className="h-3 w-3" />,

    // Cloud / infra
    aws: <SiAmazonwebservices className="h-3 w-3" />,
    gcp: <SiGooglecloud className="h-3 w-3" />,
    bytedance: <Cloud className="h-3 w-3" />,

    // Databases
    postgres: <Database className="h-3 w-3" />,
    mysql: <Database className="h-3 w-3" />,
    redis: <DatabaseZap className="h-3 w-3" />,

    // Languages
    go: <SiGo className="h-4 w-4" />,
    golang: <SiGo className="h-4 w-4" />,
};
