import { PrismaClient, Status, LeadSource } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Clean existing data
  await prisma.blogTag.deleteMany();
  await prisma.serviceIndustry.deleteMany();
  await prisma.serviceFaq.deleteMany();
  await prisma.caseMetric.deleteMany();
  await prisma.caseStudy.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.clientLogo.deleteMany();
  await prisma.teamMember.deleteMany();
  await prisma.service.deleteMany();
  await prisma.industry.deleteMany();

  // ========================================
  // SERVICES - All 6 from the document
  // ========================================
  
  const staffAug = await prisma.service.create({
    data: {
      slug: 'staff-augmentation',
      name: 'Staff Augmentation & Contract Staffing',
      excerpt: 'Access top-tier tech talent on demand. Scale your team quickly with skilled consultants in SAP, Cloud, QA, and Data Engineering.',
      bodyMd: `# Staff Augmentation & Contract Staffing

## Why Choose Our Staff Augmentation Services?

Staff augmentation is the quickest path to strengthening your technical capabilities without the overhead of full-time hiring. We connect you with experienced professionals who integrate seamlessly into your existing teams.

## What We Offer

- **Rapid Deployment**: Access top-tier talent quickly
- **Niche Expertise**: SAP, Oracle, Azure, AWS, QA Automation, Data Engineering
- **Flexible Engagement**: Contract-to-hire or project-based models
- **Quality Assurance**: All consultants are pre-vetted and interview-ready
- **Seamless Integration**: Team members who fit your culture and processes
- **Specialized Skills**: Hard-to-find expertise on demand

## Our Process

1. **Requirements Gathering**: We analyze your technical needs and team culture
2. **Candidate Selection**: Present qualified candidates that match your requirements
3. **Interview Support**: Coordinate interviews and provide technical assessment
4. **Onboarding**: Ensure smooth integration with your existing processes
5. **Ongoing Management**: Regular check-ins and performance monitoring
6. **Quality Assurance**: Continuous evaluation and feedback loops

## Ideal For

- Mid-sized firms needing specialized skills temporarily
- Companies scaling rapidly without long-term commitments
- Projects requiring specific technical expertise
- Seasonal workload management
- Teams needing immediate capacity expansion
- Organizations exploring new technologies`,
      iconUrl: '/icons/staff-augmentation.svg',
      orderIndex: 1,
      status: Status.published,
    },
  });

  const qaTesting = await prisma.service.create({
    data: {
      slug: 'qa-testing',
      name: 'Quality Assurance & Testing Services',
      excerpt: 'Comprehensive testing solutions from manual to automation. Ensure your software meets quality standards before release.',
      bodyMd: `# Quality Assurance & Testing Services

## Ensuring Quality at Every Step

Testing is often the first function companies outsource, and for good reason. We provide comprehensive QA services that catch bugs early, reduce costs, and accelerate your release cycles.

## Our Testing Services

### Manual Testing
- Functional testing across all user scenarios
- Usability and UX validation
- Exploratory testing for edge cases
- Regression testing for updates
- Cross-platform compatibility testing
- User acceptance testing (UAT)

### Test Automation
- Selenium, Cypress, and Playwright frameworks
- API testing with Postman and REST Assured
- CI/CD pipeline integration
- Cross-browser and cross-platform testing
- Automated regression suites
- Performance testing frameworks

### Specialized Testing
- Performance and load testing
- Security vulnerability assessment
- Mobile app testing (iOS and Android)
- Accessibility compliance (WCAG 2.1)
- Penetration testing
- Database testing

## Our Approach

1. **Test Planning**: Define scope, objectives, and success criteria
2. **Test Design**: Create comprehensive test cases and scenarios
3. **Environment Setup**: Configure testing infrastructure
4. **Execution**: Run tests and document findings
5. **Reporting**: Provide detailed defect reports with severity classification
6. **Continuous Improvement**: Refine processes based on metrics

## Benefits

- **Reduce Bugs**: Catch issues before they reach production
- **Faster Releases**: Automated testing speeds up deployment
- **Cost Savings**: Early detection prevents expensive fixes
- **Better UX**: Ensure intuitive and reliable user experiences
- **Comprehensive Coverage**: Test all critical user journeys
- **Continuous Quality**: Ongoing testing throughout development

## Growth Path

Start with QA services and expand into full software development lifecycle support as our partnership matures.`,
      iconUrl: '/icons/qa-testing.svg',
      orderIndex: 2,
      status: Status.published,
    },
  });

  const implementations = await prisma.service.create({
    data: {
      slug: 'erp-crm-implementations',
      name: 'ERP & CRM Implementations',
      excerpt: 'Small-scale ERP and CRM implementations with big impact. From SAP modules to Salesforce setups, we handle the complexity.',
      bodyMd: `# ERP & CRM Implementations & Support

## Right-Sized Implementations for Mid-Market Success

Full-scale ERP implementations are expensive and risky. We specialize in focused, module-based implementations that deliver value quickly without breaking your budget.

## ERP Services

### SAP Implementations
- **SAP FICO**: Financial accounting and controlling enhancements
- **SAP MM**: Materials management optimization
- **SAP SD**: Sales and distribution configuration
- **SAP HCM**: Human capital management modules

### Oracle Cloud
- Payroll module implementation
- Procurement setup and optimization
- Financial reporting customization

## CRM Services

### Salesforce
- Sales Cloud configuration
- Service Cloud setup
- Custom app development on Lightning platform
- Integration with existing systems

### Microsoft Dynamics 365
- Sales module implementation
- Customer service configuration
- Marketing automation setup
- Power BI integration

## Implementation Process

1. **Discovery**: Understand current processes and pain points
2. **Design**: Blueprint the solution architecture
3. **Configuration**: Set up and customize modules
4. **Data Migration**: Clean and migrate existing data
5. **Training**: End-user and admin training
6. **Go-Live Support**: Intensive support during transition
7. **Ongoing Support**: Continuous maintenance and enhancements

## Our Approach

- **Phased Rollout**: Minimize risk with staged implementations
- **User-Centric Design**: Solutions that match your workflows
- **Data Quality Focus**: Ensure clean, accurate data migration
- **Change Management**: Support teams through the transition
- **Post-Go-Live Support**: Dedicated support during critical period

## Industries We Serve

Manufacturing, Healthcare, Retail, Distribution, Professional Services`,
      iconUrl: '/icons/erp-crm.svg',
      orderIndex: 3,
      status: Status.published,
    },
  });

  const managedServices = await prisma.service.create({
    data: {
      slug: 'managed-services',
      name: 'Managed IT Services for SMBs',
      excerpt: 'Predictable, proactive IT management. Focus on your business while we handle your cloud infrastructure, databases, and applications.',
      bodyMd: `# Managed IT Services for Small & Mid-Sized Businesses

## Your IT Department, Outsourced

Many SMBs can't justify full-time IT staff but still need reliable technology management. Our managed services provide enterprise-grade IT support at a fraction of the cost.

## What We Manage

### Cloud Infrastructure
- **AWS**: EC2, RDS, S3, CloudFront, Lambda
- **Azure**: Virtual Machines, SQL Database, Storage, App Service
- **GCP**: Compute Engine, Cloud SQL, Cloud Storage

Services Include:
- 24/7 monitoring and alerting
- Proactive performance optimization
- Security patching and updates
- Cost optimization and right-sizing
- Disaster recovery planning

### Database Management
- **Relational**: PostgreSQL, MySQL, SQL Server, Oracle
- **NoSQL**: MongoDB, Redis, Elasticsearch

Services Include:
- Performance tuning and optimization
- Backup and recovery management
- Query optimization
- Index maintenance
- Version upgrades

### Application Support
- Application monitoring and health checks
- Bug fixes and minor enhancements
- User support and training
- Integration maintenance
- Documentation updates

## Service Levels

We offer flexible service tiers to match your needs, from essential monitoring to comprehensive 24/7 support with dedicated account management.

### Essential Tier
- Single cloud platform management
- Business hours support
- Monthly reporting and reviews

### Professional Tier
- Multi-cloud support capabilities
- Extended hours coverage
- Database management included
- Weekly reporting

### Enterprise Tier
- Complete cloud infrastructure management
- Round-the-clock support
- Dedicated account manager
- Custom SLAs
- Real-time monitoring dashboards

## Benefits

- **Predictable Operations**: Consistent, reliable IT management
- **Proactive Monitoring**: Issues resolved before they impact users
- **Expert Access**: Senior engineers without senior salaries
- **Scalability**: Grow your infrastructure without hiring
- **Focus**: Spend time on your business, not IT issues
- **Peace of Mind**: 24/7 monitoring and support available

## Onboarding Process

1. **Infrastructure Audit**: Comprehensive review of current setup
2. **Transition Planning**: Create detailed handover plan
3. **Knowledge Transfer**: Document systems and processes
4. **Go-Live**: Take over management with shadow support
5. **Optimization**: Identify and implement improvements continuously`,
      iconUrl: '/icons/managed-services.svg',
      orderIndex: 4,
      status: Status.published,
    },
  });

  const dataAnalytics = await prisma.service.create({
    data: {
      slug: 'data-analytics',
      name: 'Data & Analytics Solutions',
      excerpt: 'Turn data into actionable insights. Custom dashboards, BI implementations, and analytics that drive decision-making.',
      bodyMd: `# Data & Analytics Solutions

## From Data Chaos to Clear Insights

Every company has data, but few know how to extract value from it. We build dashboards and analytics solutions that answer your most important business questions.

## Our Analytics Services

### Business Intelligence Dashboards
- **Power BI**: Enterprise-grade visualizations and reports
- **Tableau**: Interactive dashboards for data exploration
- **Looker**: Embedded analytics for modern applications
- **Metabase**: Open-source BI for quick wins

### Data Warehousing
- Data modeling and schema design
- ETL/ELT pipeline development
- Data quality and validation
- Historical data archiving

### Advanced Analytics
- Predictive modeling
- Customer segmentation
- Sales forecasting
- Churn analysis
- A/B testing frameworks

## Typical Project Phases

### Phase 1: Discovery
- Stakeholder interviews
- Data source identification
- Requirements documentation
- Success metrics definition

### Phase 2: Data Foundation
- Data warehouse setup
- ETL pipeline development
- Data quality rules
- Initial data load

### Phase 3: Dashboard Development
- Dashboard design and prototyping
- Development and testing
- User training
- Documentation

### Phase 4: Deployment & Optimization
- Production deployment
- Performance tuning
- Change management
- Handoff and support

## Sample Dashboards We've Built

- **Sales Performance**: Revenue trends, pipeline analysis, win rates
- **Operations**: Supply chain metrics, inventory turnover, fulfillment rates
- **Finance**: Cash flow, P&L, budget vs. actual
- **Marketing**: Campaign ROI, lead generation, conversion funnels
- **HR**: Headcount, turnover, recruiting metrics

## Our Commitment

We provide ongoing support and maintenance to ensure your analytics solutions continue to deliver value. Regular reviews help identify new opportunities for data-driven insights.

## Success Stories

- Retail client: Reduced inventory costs by 23% with demand forecasting
- Logistics company: Improved delivery efficiency by 31% with route optimization
- Healthcare provider: Decreased claim denials by 42% with analytics-driven process improvements`,
      iconUrl: '/icons/data-analytics.svg',
      orderIndex: 5,
      status: Status.published,
    },
  });

  const aiAutomation = await prisma.service.create({
    data: {
      slug: 'ai-automation',
      name: 'AI Agents & Automation Solutions',
      excerpt: 'Start your AI journey with practical pilots. From chatbots to document automation, we deliver measurable ROI quickly.',
      bodyMd: `# AI Agents & Automation Solutions

## Practical AI That Delivers Results

AI doesn't have to be complex or expensive. We help mid-sized companies adopt AI through focused pilots that prove value before scaling.

## AI Solutions We Deliver

### Conversational AI
- **Customer Service Chatbots**: Handle common inquiries 24/7
- **Internal IT Helpdesk**: Automate employee support requests
- **Lead Qualification Bots**: Pre-screen prospects before sales handoff
- **Voice Assistants**: Phone-based customer interactions

### Document Intelligence
- **Invoice Processing**: Extract and validate invoice data
- **Contract Analysis**: Review contracts for key terms and risks
- **Resume Screening**: Automate initial candidate evaluation
- **Document Classification**: Auto-categorize incoming documents

### Robotic Process Automation (RPA)
- **Data Entry Automation**: Eliminate manual data entry tasks
- **Report Generation**: Automate recurring reports
- **System Integration**: Bridge legacy systems without APIs
- **Email Processing**: Auto-route and respond to emails

### Predictive Analytics
- **Customer Churn Prediction**: Identify at-risk customers early
- **Demand Forecasting**: Optimize inventory and staffing
- **Fraud Detection**: Flag suspicious transactions in real-time
- **Maintenance Prediction**: Predict equipment failures before they happen

## Our Pilot Approach

### Step 1: Use Case Identification
- Workshop with stakeholders
- Identify high-value use cases
- Estimate ROI for each option
- Select pilot project

### Step 2: Proof of Concept
- Build minimum viable solution
- Test with real data
- Measure performance
- Present findings

### Step 3: Production Implementation
- Scale to production volume
- Integrate with existing systems
- User training and change management
- Deploy to production

### Step 4: Optimization & Expansion
- Monitor performance
- Refine models
- Add new capabilities
- Expand to new use cases

## Pilot Solutions

### Chatbot Pilot
- Multiple intents and conversation flows
- Integration with existing systems
- Comprehensive training and support
- Ongoing optimization

### Document Automation Pilot
- High-accuracy document processing
- Custom training data preparation
- Integration with business processes
- Process optimization

### RPA Pilot
- Automate complex business processes
- Multiple step workflows
- Complete process documentation
- Change management support

### Predictive Model Pilot
- Custom prediction models
- Model selection and tuning
- API endpoint for integration
- Performance monitoring

## Success Stories

- Finance company: Chatbot deflected 40% of customer service calls
- Healthcare provider: Document automation reduced processing time by 62%
- Manufacturer: Predictive maintenance delivered significant operational savings
- E-commerce retailer: Churn prediction improved retention by 15%

## Post-Pilot Options

After a successful pilot, we can:
- **Scale the solution** to handle more volume
- **Add capabilities** to address additional use cases
- **Provide ongoing support** with continued optimization
- **Train your team** to maintain and enhance the solution

## Why Start with a Pilot?

- **Low Risk**: Prove value before major investment
- **Fast Results**: Rapid development and deployment
- **Clear ROI**: Measure actual business impact
- **Learning**: Build AI capabilities within your organization`,
      iconUrl: '/icons/ai-automation.svg',
      orderIndex: 6,
      status: Status.published,
    },
  });

  console.log('✓ Created 6 services');

  // ========================================
  // INDUSTRIES
  // ========================================
  
  const financialServices = await prisma.industry.create({
    data: {
      slug: 'financial-services',
      name: 'Financial Services',
      descriptionMd: `# Financial Services Solutions

We help banks, credit unions, and fintech companies modernize their technology while maintaining security and compliance.

## Key Challenges We Address

- Legacy system modernization
- Regulatory compliance (SOX, PCI-DSS, GDPR)
- Customer experience transformation
- Fraud detection and prevention
- Data security and privacy

## Our Expertise

- **Digital Banking**: Mobile and web banking platforms
- **Payment Processing**: Real-time payment systems
- **Risk Management**: Credit scoring and fraud detection
- **Regulatory Reporting**: Automated compliance reporting
- **Data Analytics**: Customer insights and portfolio analysis`,
      iconUrl: '/icons/industry-financial.svg',
      heroImgUrl: '/images/industries/financial-services.jpg',
      orderIndex: 1,
      status: Status.published,
    },
  });

  const healthcare = await prisma.industry.create({
    data: {
      slug: 'healthcare',
      name: 'Healthcare',
      descriptionMd: `# Healthcare Technology Solutions

We partner with hospitals, clinics, and health tech companies to improve patient care through better technology.

## Areas of Focus

- Electronic Health Records (EHR) integration
- Patient engagement platforms
- Telemedicine solutions
- Healthcare analytics
- HIPAA-compliant applications

## Our Capabilities

- **Patient Portals**: Secure access to health records
- **Clinical Workflows**: Streamline provider operations
- **Billing Systems**: Revenue cycle management
- **Population Health**: Analytics for better outcomes
- **Interoperability**: HL7 and FHIR integration`,
      iconUrl: '/icons/industry-healthcare.svg',
      heroImgUrl: '/images/industries/healthcare.jpg',
      orderIndex: 2,
      status: Status.published,
    },
  });

  const manufacturing = await prisma.industry.create({
    data: {
      slug: 'manufacturing',
      name: 'Manufacturing',
      descriptionMd: `# Manufacturing Technology Solutions

We help manufacturers optimize operations, improve quality, and increase efficiency through smart technology.

## Solutions for Manufacturers

- Production monitoring and MES integration
- Quality management systems
- Supply chain optimization
- Predictive maintenance
- IoT sensor integration

## Our Experience

- **Shop Floor Systems**: Real-time production tracking
- **Quality Control**: Automated inspection and reporting
- **Inventory Management**: Just-in-time optimization
- **Equipment Monitoring**: Predictive maintenance
- **ERP Integration**: SAP and Oracle connectivity`,
      iconUrl: '/icons/industry-manufacturing.svg',
      heroImgUrl: '/images/industries/manufacturing.jpg',
      orderIndex: 3,
      status: Status.published,
    },
  });

  const retail = await prisma.industry.create({
    data: {
      slug: 'retail-ecommerce',
      name: 'Retail & E-Commerce',
      descriptionMd: `# Retail & E-Commerce Solutions

We help retailers compete in the digital age with omnichannel experiences and data-driven operations.

## Retail Technology Services

- E-commerce platform development
- Inventory management systems
- Point-of-sale integration
- Customer analytics
- Personalization engines

## Our Expertise

- **Omnichannel Commerce**: Unified online and offline
- **Customer Experience**: Personalization and recommendations
- **Inventory Optimization**: Demand forecasting
- **Marketing Automation**: Campaign management
- **Analytics**: Customer insights and attribution`,
      iconUrl: '/icons/industry-retail.svg',
      heroImgUrl: '/images/industries/retail.jpg',
      orderIndex: 4,
      status: Status.published,
    },
  });

  const logistics = await prisma.industry.create({
    data: {
      slug: 'logistics',
      name: 'Logistics & Supply Chain',
      descriptionMd: `# Logistics & Supply Chain Solutions

We help logistics companies optimize operations, reduce costs, and improve delivery performance.

## Logistics Technology

- Transportation management systems
- Warehouse management software
- Route optimization
- Real-time tracking
- Analytics and reporting

## Our Solutions

- **Fleet Management**: Vehicle tracking and maintenance
- **Route Optimization**: AI-powered routing
- **Warehouse Automation**: Pick and pack efficiency
- **Visibility**: Real-time shipment tracking
- **Analytics**: Performance metrics and KPIs`,
      iconUrl: '/icons/industry-logistics.svg',
      heroImgUrl: '/images/industries/logistics.jpg',
      orderIndex: 5,
      status: Status.published,
    },
  });

  const insurance = await prisma.industry.create({
    data: {
      slug: 'insurance',
      name: 'Insurance',
      descriptionMd: `# Insurance Technology Solutions

We help insurance companies modernize systems, improve customer experience, and leverage data for better underwriting.

## Insurance Tech Services

- Policy administration systems
- Claims processing automation
- Underwriting platforms
- Customer portals
- Analytics and risk modeling

## Our Capabilities

- **Digital Distribution**: Online quote and bind
- **Claims Automation**: Faster processing and settlement
- **Customer Portals**: Self-service capabilities
- **Risk Analytics**: Predictive modeling
- **Fraud Detection**: AI-powered fraud prevention`,
      iconUrl: '/icons/industry-insurance.svg',
      heroImgUrl: '/images/industries/insurance.jpg',
      orderIndex: 6,
      status: Status.published,
    },
  });

  console.log('✓ Created 6 industries');

  // Link services to industries
  await prisma.serviceIndustry.createMany({
    data: [
      // Staff Augmentation - All industries
      { serviceId: staffAug.id, industryId: financialServices.id },
      { serviceId: staffAug.id, industryId: healthcare.id },
      { serviceId: staffAug.id, industryId: manufacturing.id },
      { serviceId: staffAug.id, industryId: retail.id },
      { serviceId: staffAug.id, industryId: logistics.id },
      { serviceId: staffAug.id, industryId: insurance.id },
      
      // QA Testing - SaaS, Fintech, Healthcare
      { serviceId: qaTesting.id, industryId: financialServices.id },
      { serviceId: qaTesting.id, industryId: healthcare.id },
      { serviceId: qaTesting.id, industryId: retail.id },
      
      // ERP/CRM - Manufacturing, Healthcare, Retail
      { serviceId: implementations.id, industryId: manufacturing.id },
      { serviceId: implementations.id, industryId: healthcare.id },
      { serviceId: implementations.id, industryId: retail.id },
      
      // Managed Services - All industries
      { serviceId: managedServices.id, industryId: financialServices.id },
      { serviceId: managedServices.id, industryId: healthcare.id },
      { serviceId: managedServices.id, industryId: manufacturing.id },
      { serviceId: managedServices.id, industryId: retail.id },
      
      // Data Analytics - All industries
      { serviceId: dataAnalytics.id, industryId: financialServices.id },
      { serviceId: dataAnalytics.id, industryId: retail.id },
      { serviceId: dataAnalytics.id, industryId: logistics.id },
      { serviceId: dataAnalytics.id, industryId: insurance.id },
      
      // AI Automation - Healthcare, Finance, E-commerce
      { serviceId: aiAutomation.id, industryId: healthcare.id },
      { serviceId: aiAutomation.id, industryId: financialServices.id },
      { serviceId: aiAutomation.id, industryId: retail.id },
    ],
  });

  console.log('✓ Linked services to industries');

  // Continue with the seed file in the next message due to length...
  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
