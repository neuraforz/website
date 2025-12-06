import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

// Mock case studies data (will be replaced with database later)
const caseStudies = [
  {
    id: "1",
    slug: "healthcare-triage-automation",
    title: "AI-Powered Triage System Reduces Wait Times by 38%",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    challenge: "Long patient wait times and inefficient triage processes",
    solution: "Implemented AI-powered triage automation with natural language processing",
    results: [
      { label: "Triage Time", value: "-38%" },
      { label: "Patient Satisfaction", value: "+45%" },
      { label: "Staff Efficiency", value: "+32%" },
    ],
    image: "/images/case-healthcare.jpg",
  },
  {
    id: "2",
    slug: "fintech-qa-automation",
    title: "Financial Services Firm Cuts Testing Time by 62%",
    client: "Mid-Market Fintech Company",
    industry: "Financial Services",
    challenge: "Manual regression testing taking 3+ weeks per release",
    solution: "Implemented comprehensive QA automation framework with CI/CD integration",
    results: [
      { label: "Test Time", value: "-62%" },
      { label: "Bug Detection", value: "+89%" },
      { label: "Release Frequency", value: "3x" },
    ],
    image: "/images/case-fintech.jpg",
  },
  {
    id: "3",
    slug: "manufacturing-erp-implementation",
    title: "Manufacturing Company Streamlines Operations with ERP",
    client: "Mid-Size Manufacturing Firm",
    industry: "Manufacturing",
    challenge: "Disconnected systems causing inventory and production issues",
    solution: "Implemented SAP S/4HANA with custom modules for production planning",
    results: [
      { label: "Inventory Accuracy", value: "+95%" },
      { label: "Production Lead Time", value: "-28%" },
      { label: "Order Fulfillment", value: "+41%" },
    ],
    image: "/images/case-manufacturing.jpg",
  },
  {
    id: "4",
    slug: "retail-analytics-dashboard",
    title: "Retail Chain Increases Revenue by 23% with Data Analytics",
    client: "Regional Retail Chain",
    industry: "Retail",
    challenge: "Limited visibility into sales trends and customer behavior",
    solution: "Built comprehensive analytics platform with real-time dashboards",
    results: [
      { label: "Revenue Growth", value: "+23%" },
      { label: "Inventory Turnover", value: "+34%" },
      { label: "Customer Insights", value: "10x" },
    ],
    image: "/images/case-retail.jpg",
  },
  {
    id: "5",
    slug: "logistics-staff-augmentation",
    title: "Logistics Company Scales Development Team in 3 Weeks",
    client: "Logistics Technology Firm",
    industry: "Logistics",
    challenge: "Needed to scale development team quickly for major platform upgrade",
    solution: "Provided 8 senior developers and QA engineers through staff augmentation",
    results: [
      { label: "Time to Hire", value: "3 weeks" },
      { label: "Project Delivery", value: "On time" },
      { label: "Client Satisfaction", value: "5/5" },
    ],
    image: "/images/case-logistics.jpg",
  },
  {
    id: "6",
    slug: "insurance-ai-claims",
    title: "Insurance Company Automates Claims Processing with AI",
    client: "Regional Insurance Provider",
    industry: "Insurance",
    challenge: "Manual claims processing causing delays and errors",
    solution: "Implemented AI-powered claims automation with document extraction",
    results: [
      { label: "Processing Time", value: "-71%" },
      { label: "Accuracy", value: "+94%" },
      { label: "Cost Savings", value: "$420K/yr" },
    ],
    image: "/images/case-insurance.jpg",
  },
];

export const metadata = {
  title: "Case Studies | Success Stories",
  description: "See how we've helped mid-market companies achieve measurable results with technology solutions.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-navy to-blue-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Success Stories</h1>
            <p className="text-xl text-gray-200">
              Real results from real clients. See how we've helped mid-market companies transform their operations with technology.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue/20 to-cyan/20 flex items-center justify-center">
                  <TrendingUp className="text-blue" size={48} />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span className="px-2 py-1 bg-blue/10 text-blue rounded">
                      {study.industry}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">
                      {study.client}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-blue transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {study.results.map((result, index) => (
                      <div key={index} className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-blue">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center text-blue font-medium group-hover:gap-2 transition-all">
                    Read case study
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-dark transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
