import type { Metadata } from "next";
import { EngineeringCaseStudy } from "../../engineering-case-study";
export const metadata: Metadata = { title: "CrimeBase | Guru Prasad", description: "AI conversational analytics with FastAPI, Gemini, validated SQL and PostgreSQL." };
export default function Page() { return <EngineeringCaseStudy project="crimebase" />; }
