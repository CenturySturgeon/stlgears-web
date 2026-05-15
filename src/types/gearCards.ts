import { InputConfig } from "@/types/inputConfigs";

export type GearCardHeader = {
    title: string,
    type: string,
    image: string,
    description: string,
}

export type AccordionSection = {
    label: string;
    description: string;
    icon: React.ComponentType<{ size?: number; color?: string }>;
    inputs: InputConfig[];
};

export type GearCardWithForm = GearCardHeader & {
    formSections: AccordionSection[];
    validate?: Record<string, (value: any, values: Record<string, any>) => string | null>;
}