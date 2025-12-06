export interface Service {
  id: string;
  name: string;
  slug: string;
  excerpt: string;
  bodyMd: string;
  iconUrl: string;
  status: "published" | "draft";
  orderIndex: number;
  createdAt: Date;
  updatedAt: Date;
}

export const STATIC_SERVICES: Service[] = [
  {
    id: "1",
    name: "Staff Augmentation",
    slug: "staff-augmentation",
    excerpt: "Scale your team quickly with pre-vetted, highly skilled IT professionals who integrate seamlessly with your existing workforce.",
    bodyMd: `## Overview

Staff augmentation allows you to quickly scale your team with experienced professionals who work as an extension of your in-house team. Whether you need developers, QA engineers, or project managers, we provide the right talent at the right time.

## Key Benefits

- **Rapid Scaling** - Add skilled professionals to your team in 2-3 weeks
- **Cost-Effective** - Pay only for the resources you need, when you need them
- **Flexible Contracts** - Short-term or long-term engagements based on your requirements
- **Pre-Vetted Talent** - All professionals are thoroughly screened and tested
- **Seamless Integration** - Our team members work directly with your existing teams

## Our Process

### 1. Requirements Analysis
We work with you to understand your technical needs, team dynamics, and project goals.

### 2. Talent Matching
Within 48 hours, we present 3-5 qualified candidates that match your requirements.

### 3. Quick Onboarding
Selected professionals can start within 2-3 weeks, fully integrated with your workflows.

### 4. Ongoing Support
We provide continuous support to ensure smooth collaboration and project success.

## Technologies We Cover

- **Frontend**: React, Angular, Vue.js, Next.js
- **Backend**: Node.js, Python, Java, .NET, Go
- **Mobile**: React Native, Flutter, iOS, Android
- **DevOps**: AWS, Azure, GCP, Docker, Kubernetes
- **Data**: SQL, NoSQL, Big Data, Analytics
- **QA**: Manual Testing, Automation, Performance Testing

## Typical Use Cases

- Product development teams needing extra hands
- Companies with seasonal workload fluctuations
- Organizations launching new initiatives
- Teams requiring specialized expertise
- Businesses experiencing rapid growth`,
    iconUrl: "👥",
    status: "published",
    orderIndex: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "QA & Testing",
    slug: "qa-testing",
    excerpt: "Comprehensive quality assurance services including manual testing, test automation, and performance testing to ensure flawless software delivery.",
    bodyMd: `## Overview

Our QA and testing services ensure your software meets the highest quality standards before reaching your users. We combine manual expertise with automated testing frameworks to deliver comprehensive coverage.

## Testing Services

### Manual Testing
- **Functional Testing** - Verify all features work as expected
- **Exploratory Testing** - Uncover edge cases and user experience issues
- **Regression Testing** - Ensure new changes don't break existing functionality
- **User Acceptance Testing** - Validate software meets business requirements

### Test Automation
- **UI Automation** - Selenium, Cypress, Playwright, Puppeteer
- **API Testing** - Postman, REST Assured, SoapUI
- **Mobile Automation** - Appium, XCUITest, Espresso
- **CI/CD Integration** - Jenkins, GitLab CI, GitHub Actions

### Performance Testing
- **Load Testing** - Simulate thousands of concurrent users
- **Stress Testing** - Find breaking points and bottlenecks
- **Scalability Testing** - Verify system can handle growth
- **Performance Monitoring** - Real-time metrics and alerts

## Key Benefits

- **Reduce Testing Time by 70%** - Automation accelerates release cycles
- **Higher Quality** - Comprehensive coverage catches bugs early
- **Cost Savings** - Fix bugs before production (10x cheaper)
- **Faster Releases** - Automated testing enables continuous delivery
- **Better User Experience** - Ensure software works flawlessly

## Our Approach

### 1. Assessment & Strategy
We analyze your application, identify testing gaps, and create a comprehensive QA strategy.

### 2. Test Planning
Define test cases, create automation frameworks, and establish quality metrics.

### 3. Execution & Reporting
Run tests, document results, and provide detailed reports with actionable insights.

### 4. Continuous Improvement
Refine test coverage, optimize automation, and integrate with your CI/CD pipeline.

## Industries We Serve

- **E-commerce** - High-traffic platforms requiring reliability
- **Healthcare** - HIPAA-compliant testing for critical systems
- **Finance** - Security-focused testing for banking applications
- **SaaS** - Continuous testing for frequent deployments
- **Mobile Apps** - Cross-device testing for iOS and Android`,
    iconUrl: "🧪",
    status: "published",
    orderIndex: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "ERP & CRM Implementations",
    slug: "erp-crm-implementations",
    excerpt: "Expert implementation and customization of enterprise resource planning and customer relationship management systems.",
    bodyMd: `## Overview

Transform your business operations with expertly implemented ERP and CRM systems. We specialize in deploying, customizing, and integrating enterprise solutions that streamline your processes and drive growth.

## ERP Solutions

### We Implement
- **SAP** - Enterprise resource planning for large organizations
- **Oracle NetSuite** - Cloud-based ERP for growing businesses
- **Microsoft Dynamics 365** - Integrated business applications
- **Odoo** - Open-source ERP with extensive modules
- **Custom ERP** - Tailored solutions for unique requirements

### Key Modules
- Financial Management
- Inventory & Supply Chain
- Manufacturing & Production
- Human Resources
- Project Management
- Procurement & Purchasing

## CRM Solutions

### Platforms We Deploy
- **Salesforce** - #1 CRM platform for sales, service, and marketing
- **HubSpot** - All-in-one inbound marketing and sales
- **Microsoft Dynamics 365** - Integrated CRM and ERP
- **Zoho CRM** - Affordable CRM for small to mid-size businesses
- **Custom CRM** - Built specifically for your business model

### CRM Capabilities
- Sales Pipeline Management
- Marketing Automation
- Customer Service & Support
- Analytics & Reporting
- Email Integration
- Mobile Access

## Implementation Process

### 1. Discovery & Requirements (Week 1-2)
- Business process analysis
- Requirements gathering
- Gap analysis
- Solution design

### 2. Configuration & Customization (Week 3-6)
- System setup and configuration
- Custom module development
- Third-party integrations
- Data migration planning

### 3. Testing & Training (Week 7-8)
- User acceptance testing
- Performance testing
- Staff training programs
- Documentation creation

### 4. Deployment & Support (Week 8+)
- Go-live support
- Post-deployment monitoring
- Continuous optimization
- Ongoing maintenance

## Key Benefits

- **Streamlined Operations** - Automate manual processes
- **Data-Driven Decisions** - Real-time insights and analytics
- **Improved Collaboration** - Centralized information access
- **Scalability** - Grow without system constraints
- **ROI in 12-18 Months** - Measurable cost savings and efficiency gains

## Why Choose Us

- **Certified Consultants** - Salesforce, SAP, Microsoft partners
- **Proven Methodology** - 100+ successful implementations
- **On-Time Delivery** - 95% of projects completed within 8 weeks
- **Post-Launch Support** - 24/7 support and maintenance
- **Industry Expertise** - Deep knowledge in your vertical`,
    iconUrl: "📊",
    status: "published",
    orderIndex: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Managed IT Services",
    slug: "managed-services",
    excerpt: "24/7 IT infrastructure management, monitoring, and support to keep your systems running smoothly and securely.",
    bodyMd: `## Overview

Focus on your business while we handle your entire IT infrastructure. Our managed services provide proactive monitoring, maintenance, and support to ensure maximum uptime and security.

## What We Manage

### Infrastructure Management
- **Servers & Storage** - On-premise and cloud infrastructure
- **Network Management** - Routers, switches, firewalls, VPN
- **Cloud Services** - AWS, Azure, Google Cloud management
- **Backup & Recovery** - Automated backups and disaster recovery
- **Security** - 24/7 threat monitoring and incident response

### End-User Support
- **Help Desk** - 24/7 support for your team
- **Desktop Management** - Updates, patches, maintenance
- **Mobile Device Management** - Secure BYOD and company devices
- **Software Licensing** - License management and optimization
- **Onboarding/Offboarding** - Smooth employee transitions

### Proactive Monitoring
- **24/7 System Monitoring** - Real-time alerts and issue detection
- **Performance Optimization** - Identify and fix bottlenecks
- **Security Monitoring** - Threat detection and prevention
- **Patch Management** - Automated security updates
- **Capacity Planning** - Plan for growth and scalability

## Service Level Agreements

### Platinum Tier
- 99.99% uptime guarantee
- 15-minute response time
- 24/7/365 support
- Dedicated account manager
- Monthly strategic reviews

### Gold Tier
- 99.9% uptime guarantee
- 30-minute response time
- 24/7 support
- Quarterly business reviews

### Silver Tier
- 99.5% uptime guarantee
- 1-hour response time
- Business hours support
- Annual reviews

## Key Benefits

- **Predictable Costs** - Fixed monthly fees, no surprises
- **Increased Uptime** - Average 99.9% availability
- **Enhanced Security** - Enterprise-grade protection
- **Focus on Business** - We handle IT so you can innovate
- **Access to Experts** - Entire team of specialists
- **Scalability** - Grow without hiring IT staff

## Technologies We Support

### Operating Systems
- Windows Server
- Linux (Ubuntu, CentOS, RHEL)
- macOS

### Cloud Platforms
- Amazon Web Services (AWS)
- Microsoft Azure
- Google Cloud Platform
- Private cloud solutions

### Business Applications
- Microsoft 365
- Google Workspace
- Salesforce
- SAP
- Oracle
- Custom applications

## Industries We Serve

- **Healthcare** - HIPAA-compliant managed services
- **Finance** - Regulatory compliance and security
- **Legal** - Secure document management
- **Manufacturing** - OT/IT convergence support
- **Retail** - Multi-location support
- **Professional Services** - Flexible, scalable solutions`,
    iconUrl: "🛠️",
    status: "published",
    orderIndex: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "Data Analytics",
    slug: "data-analytics",
    excerpt: "Transform raw data into actionable insights with advanced analytics, business intelligence, and data visualization solutions.",
    bodyMd: `## Overview

Unlock the power of your data with our comprehensive analytics services. We help you collect, analyze, and visualize data to make informed business decisions and drive measurable results.

## Analytics Services

### Business Intelligence
- **Dashboard Development** - Real-time KPI monitoring
- **Reporting Automation** - Scheduled reports delivered automatically
- **Data Warehousing** - Centralized data repository
- **ETL Pipelines** - Extract, transform, load processes
- **Self-Service Analytics** - Empower teams with data access

### Advanced Analytics
- **Predictive Analytics** - Forecast trends and outcomes
- **Customer Segmentation** - Identify high-value customer groups
- **Churn Prediction** - Prevent customer attrition
- **Demand Forecasting** - Optimize inventory and supply chain
- **A/B Testing** - Data-driven experimentation

### Data Visualization
- **Interactive Dashboards** - Drill-down capabilities
- **Executive Reporting** - High-level insights for leadership
- **Custom Visualizations** - Tailored to your needs
- **Mobile Dashboards** - Access data anywhere
- **Embedded Analytics** - Integrate into your applications

## Technologies We Use

### BI Platforms
- **Tableau** - Industry-leading visualization
- **Power BI** - Microsoft's business analytics
- **Looker** - Modern BI and analytics
- **Qlik Sense** - Associative analytics
- **Metabase** - Open-source BI tool

### Data Processing
- **Apache Spark** - Large-scale data processing
- **Apache Airflow** - Workflow orchestration
- **dbt** - Data transformation
- **Snowflake** - Cloud data warehouse
- **Google BigQuery** - Serverless data warehouse

### Data Science
- **Python** - Pandas, NumPy, Scikit-learn
- **R** - Statistical computing
- **TensorFlow/PyTorch** - Machine learning
- **SQL** - Data querying and analysis

## Our Process

### 1. Data Assessment (Week 1)
- Identify data sources
- Evaluate data quality
- Define business questions
- Establish success metrics

### 2. Data Infrastructure (Week 2-3)
- Set up data warehouse
- Build ETL pipelines
- Implement data governance
- Ensure data security

### 3. Analytics Development (Week 4-6)
- Create dashboards and reports
- Develop predictive models
- Build custom visualizations
- Test and validate results

### 4. Deployment & Training (Week 7-8)
- Deploy to production
- Train end users
- Document processes
- Provide ongoing support

## Key Benefits

- **Data-Driven Decisions** - Make informed choices backed by data
- **Increased Revenue** - Identify growth opportunities
- **Cost Reduction** - Find inefficiencies and waste
- **Competitive Advantage** - React faster to market changes
- **Improved Customer Experience** - Understand customer behavior
- **ROI Visibility** - Track what's working and what's not

## Use Cases by Industry

### E-commerce
- Customer lifetime value analysis
- Shopping cart abandonment tracking
- Product recommendation engines
- Inventory optimization

### Healthcare
- Patient outcome prediction
- Resource utilization optimization
- Readmission risk scoring
- Claims fraud detection

### Finance
- Credit risk modeling
- Fraud detection
- Customer churn prediction
- Portfolio optimization

### Manufacturing
- Predictive maintenance
- Quality control analytics
- Supply chain optimization
- Production forecasting

## Success Stories

**Retail Client**
- 35% increase in conversion rate through customer segmentation
- $2.1M additional revenue in first year
- Reduced marketing spend by 28%

**Healthcare Provider**
- 42% reduction in patient readmissions
- $5.3M cost savings annually
- Improved patient satisfaction scores by 23%

**Manufacturing Company**
- 67% reduction in unplanned downtime
- $3.8M saved through predictive maintenance
- 15% increase in overall equipment effectiveness`,
    iconUrl: "📈",
    status: "published",
    orderIndex: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "AI & Automation",
    slug: "ai-automation",
    excerpt: "Harness the power of artificial intelligence and automation to streamline operations, reduce costs, and unlock new opportunities.",
    bodyMd: `## Overview

Transform your business with cutting-edge AI and automation solutions. From intelligent chatbots to robotic process automation, we help you leverage AI to work smarter, faster, and more efficiently.

## AI Solutions

### Machine Learning
- **Predictive Models** - Forecast outcomes and trends
- **Recommendation Engines** - Personalize user experiences
- **Computer Vision** - Image and video analysis
- **Natural Language Processing** - Text analysis and understanding
- **Anomaly Detection** - Identify unusual patterns
- **Classification & Clustering** - Organize and categorize data

### Generative AI
- **Custom GPT Applications** - AI-powered assistants
- **Content Generation** - Automated writing and creative work
- **Code Generation** - AI-assisted development
- **Image Generation** - Create visuals with AI
- **RAG Systems** - Retrieval-augmented generation for accurate AI

### Conversational AI
- **Chatbots** - 24/7 customer support automation
- **Voice Assistants** - Natural language interfaces
- **Virtual Agents** - Intelligent customer service
- **Sentiment Analysis** - Understand customer emotions
- **Multi-language Support** - Global reach

## Automation Services

### Robotic Process Automation (RPA)
- **Data Entry Automation** - Eliminate manual data input
- **Invoice Processing** - Automated accounts payable/receivable
- **Report Generation** - Scheduled, automated reporting
- **Email Processing** - Intelligent email routing and responses
- **System Integration** - Connect legacy systems

### Workflow Automation
- **Approval Workflows** - Streamline decision processes
- **Document Processing** - OCR and intelligent extraction
- **Notifications & Alerts** - Automated communications
- **Task Scheduling** - Smart task management
- **Data Synchronization** - Keep systems in sync

### Business Process Automation
- **Customer Onboarding** - Automated welcome flows
- **Order Processing** - End-to-end automation
- **HR Processes** - Hiring, onboarding, offboarding
- **Compliance Reporting** - Automated regulatory compliance
- **Quality Assurance** - Automated testing and validation

## Technologies We Use

### AI/ML Frameworks
- **OpenAI GPT-4** - Advanced language models
- **TensorFlow** - Machine learning framework
- **PyTorch** - Deep learning platform
- **Hugging Face** - Transformer models
- **LangChain** - LLM application framework
- **Anthropic Claude** - Advanced AI assistant

### Automation Platforms
- **UiPath** - Enterprise RPA leader
- **Automation Anywhere** - Intelligent automation
- **Power Automate** - Microsoft's automation
- **Zapier** - No-code automation
- **n8n** - Open-source automation
- **Apache Airflow** - Workflow orchestration

### Cloud AI Services
- **AWS AI Services** - Rekognition, Comprehend, Lex
- **Azure AI** - Cognitive Services, Bot Service
- **Google Cloud AI** - Vision, NLP, Translation

## Implementation Process

### 1. Discovery & Assessment (Week 1-2)
- Identify automation opportunities
- Calculate potential ROI
- Select use cases
- Define success criteria

### 2. Proof of Concept (Week 3-4)
- Build prototype
- Test with real data
- Demonstrate value
- Refine approach

### 3. Development & Integration (Week 5-8)
- Build production solution
- Integrate with existing systems
- Implement security measures
- Conduct thorough testing

### 4. Deployment & Optimization (Week 9+)
- Deploy to production
- Monitor performance
- Gather feedback
- Continuous improvement

## Key Benefits

- **Cost Reduction** - Average 40-70% savings on manual tasks
- **Faster Processing** - 10-100x speed improvement
- **24/7 Operation** - Never sleeps, always working
- **Improved Accuracy** - 99%+ accuracy vs. human error
- **Scalability** - Handle volume without hiring
- **Employee Satisfaction** - Free staff for strategic work

## Use Cases by Department

### Customer Service
- AI chatbots handling 80% of inquiries
- Automated ticket routing and categorization
- Sentiment analysis for priority escalation
- 24/7 multilingual support

### Finance
- Automated invoice processing (3 hours → 15 minutes)
- Expense report approval workflows
- Financial forecasting with ML
- Fraud detection in real-time

### HR
- Resume screening and ranking
- Interview scheduling automation
- Employee onboarding workflows
- Performance review automation

### Sales & Marketing
- Lead scoring and qualification
- Email campaign automation
- Content personalization
- Chatbots for lead generation

### Operations
- Inventory management automation
- Predictive maintenance
- Supply chain optimization
- Quality control with computer vision

## Success Stories

**E-commerce Company**
- 73% reduction in customer service costs
- Response time: 24 hours → 2 minutes
- Customer satisfaction up 34%
- Handled 10x volume with same team

**Insurance Provider**
- Claims processing: 7 days → 2 hours
- $4.2M annual cost savings
- 98% accuracy in document processing
- 85% automation rate

**Manufacturing Firm**
- 60% reduction in equipment downtime
- $6.5M saved through predictive maintenance
- Defect detection accuracy: 99.2%
- Production efficiency up 23%

## Why Choose Us

- **AI Experts** - PhDs and certified ML engineers
- **Proven Results** - 150+ successful AI implementations
- **Full-Stack AI** - From models to deployment
- **Ethical AI** - Responsible, bias-aware development
- **Ongoing Support** - Model monitoring and retraining
- **Rapid ROI** - Average payback period: 6-12 months`,
    iconUrl: "🤖",
    status: "published",
    orderIndex: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return STATIC_SERVICES.find((service) => service.slug === slug && service.status === "published");
}

export function getAllServices(): Service[] {
  return STATIC_SERVICES.filter((service) => service.status === "published");
}

export function getRelatedServices(currentId: string, limit: number = 3): Service[] {
  return STATIC_SERVICES
    .filter((service) => service.status === "published" && service.id !== currentId)
    .slice(0, limit);
}
