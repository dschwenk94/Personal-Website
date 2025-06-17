import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';

const WorkHistoryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const WorkHistoryTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: 2.5rem;
  letter-spacing: 1px;
  font-weight: normal;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.7); /* Stronger shadow */
`;

const JobSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 800px;
`;

const JobHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const JobTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
  letter-spacing: 0.5px;
  font-size: 1.2rem;
`;

const JobCompany = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 400;
  letter-spacing: 0.3px;
  font-size: 1rem;
  display: inline-block;
`;

const JobLocation = styled.span`
  font-style: italic;
  opacity: 0.8;
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

const JobPeriod = styled.p`
  font-style: italic;
  opacity: 0.8;
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: 0.9rem;
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing.md};
`;

const JobDescription = styled.div`
  line-height: 1.8;
  letter-spacing: 0.3px;
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: 1.1rem;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6); /* Stronger shadow */
  }
`;

const JobResponsibilities = styled.ul`
  margin-left: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xs};
  
  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    position: relative;
    letter-spacing: 0.3px;
    font-size: 0.95rem;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6); /* Stronger shadow */
    
    &::marker {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const CompanyDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 87, 34, 0.2);
  margin: ${({ theme }) => theme.spacing.md} 0 ${({ theme }) => theme.spacing.md} 0;
  width: 100%;
`;

const WorkHistoryPage = () => {
  return (
    <PageWrapper>
      <WorkHistoryContainer>
      <WorkHistoryTitle>Work History</WorkHistoryTitle>
      
      {/* VIZIO / Walmart */}
      <JobSection>
        <JobHeader>
          <JobTitle>Product Manager - VIZIO / Walmart Account</JobTitle>
          <div>
            <JobCompany>VIZIO / Walmart<JobLocation>Remote</JobLocation></JobCompany>
            <JobPeriod>December 2024 - Present</JobPeriod>
          </div>
        </JobHeader>
        <JobDescription>
          <JobResponsibilities>
            <li>Product manager on the monetization team, focusing on expanding the usage and capabilities of VIZIO account</li>
            <li>Established multi-year roadmap for transfer of VIZIO account to Walmart account, with focus on monetization capabilities and Walmart+ upsells</li>
          </JobResponsibilities>
        </JobDescription>
      </JobSection>
      
      <CompanyDivider />
      
      {/* Sling TV */}
      <JobSection>
        <JobHeader>
          <JobTitle>Product Manager II - In-App Monetization</JobTitle>
          <div>
            <JobCompany>Sling TV<JobLocation>Englewood, CO</JobLocation></JobCompany>
            <JobPeriod>October 2023 - December 2024</JobPeriod>
          </div>
        </JobHeader>
        <JobDescription>
          <JobResponsibilities>
            <li>Product Manager II leading the In-App Monetization squad in establishing & optimizing in-app purchase flows, used to convert Sling Free users to paying customers, or upsell existing customers into additional subscriptions</li>
            <li>Released content-driven iOS & Android mobile purchase flows which generate >50k annual subscription purchases, using Apple & Google billing integrations with estimated annual value creation of >$3M</li>
            <li>Improved & expanded existing in-app purchase capabilities via in-app offers & experimentation, leading to improved conversion rates & subscriptions purchased in-app (18% YoY)</li>
          </JobResponsibilities>
        </JobDescription>
      </JobSection>
      
      <JobSection>
        <JobHeader>
          <JobTitle>Product Manager I - watch.sling.com</JobTitle>
          <div>
            <JobCompany>Sling TV<JobLocation>Englewood, CO</JobLocation></JobCompany>
            <JobPeriod>July 2022 - October 2023</JobPeriod>
          </div>
        </JobHeader>
        <JobDescription>
          <JobResponsibilities>
            <li>Product manager for the ReactJS based Sling browser player (watch.sling.com)</li>
            <li>Led a team consisting of 10 developers and software testers, soliciting user and business stakeholder feedback to discover areas of opportunity & improvement</li>
            <li>Increased time spent streaming onsite (22% YoY) and subscriptions sold onsite (180% YoY) through a variety of product enhancements - including mobile device & video player optimizations, SEO improvements, and unentitled purchase flows</li>
            <li>Recipient of the "Distinguished Service Award" - an award given to the top 100/15,000 employees of Dish Network / Sling TV for their outstanding results and teamwork</li>
          </JobResponsibilities>
        </JobDescription>
      </JobSection>
      
      <JobSection>
        <JobHeader>
          <JobTitle>Product Operations Manager</JobTitle>
          <div>
            <JobCompany>Sling TV<JobLocation>Englewood, CO</JobLocation></JobCompany>
            <JobPeriod>October 2021 - July 2022</JobPeriod>
          </div>
        </JobHeader>
        <JobDescription>
          <JobResponsibilities>
            <li>Managed the product operations team of 3 analysts, resulting in increased performance & stability of Sling's applications & websites, leading to to a reduction in customer contacts (31% YoY) on technical issues</li>
            <li>Partnered closely with call center & chatbot teams to better quantify, troubleshoot, & understand technical issues, resulting in an increase in customer satisfaction (11% YoY) for technical issue contacts</li>
          </JobResponsibilities>
        </JobDescription>
      </JobSection>
      
      <JobSection>
        <JobHeader>
          <JobTitle>Product Operations Analyst</JobTitle>
          <div>
            <JobCompany>Sling TV<JobLocation>Englewood, CO</JobLocation></JobCompany>
            <JobPeriod>December 2020 - October 2021</JobPeriod>
          </div>
        </JobHeader>
        <JobDescription>
          <JobResponsibilities>
            <li>Operations Analyst III leading the Product Operations team's efforts to improve app and streaming quality</li>
            <li>Use various data sets and KPIs (including but not limited to customer contacts, cancellations, social media, backend QoS metrics) to identify and prioritize customer impacting issues for engineering fixes, reducing time to resolution for customer impacting issues (24% YoY)</li>
          </JobResponsibilities>
        </JobDescription>
      </JobSection>
      
      <JobSection>
        <JobHeader>
          <JobTitle>Command Center Analyst</JobTitle>
          <div>
            <JobCompany>Sling TV<JobLocation>Englewood, CO</JobLocation></JobCompany>
            <JobPeriod>September 2019 - November 2020</JobPeriod>
          </div>
        </JobHeader>
        <JobDescription>
          <JobResponsibilities>
            <li>Operations Analyst II in the Sling Command Center, performing real-time monitoring of service stability and leading incident management</li>
          </JobResponsibilities>
        </JobDescription>
      </JobSection>
      
      <CompanyDivider />
      
      {/* General Dynamics IT */}
      <JobSection>
        <JobHeader>
          <JobTitle>External Affairs Intern</JobTitle>
          <div>
            <JobCompany>General Dynamics IT<JobLocation>Falls Church, VA</JobLocation></JobCompany>
            <JobPeriod>June 2017 - January 2018</JobPeriod>
          </div>
        </JobHeader>
        <JobDescription>
          <JobResponsibilities>
            <li>Full-time paid internship in the government relations and marketing departments of a leading information technology & cyber-security federal contractor</li>
            <li>Offered internship extension leading to full-time position offer due to outstanding results and drive</li>
          </JobResponsibilities>
        </JobDescription>
      </JobSection>
      
      <CompanyDivider />
      
      {/* Education */}
      <JobSection>
        <JobHeader>
          <JobTitle>Education</JobTitle>
        </JobHeader>
        <JobDescription>
          <p><strong>Southern Methodist University</strong><JobLocation>Dallas, TX</JobLocation></p>
          <p>Dedman College of Humanities & Sciences (December 2016)</p>
          <p><em>Bachelor of Arts, Political Science / Public Policy (dual major); Economics Minor</em></p>
        </JobDescription>
      </JobSection>
      
      <JobSection>
        <JobHeader>
          <JobTitle>Technical Skills & Proficiencies</JobTitle>
        </JobHeader>
        <JobDescription>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.5', columnCount: 2, columnGap: '2rem' }}>
            Microsoft Office & Project. JIRA. Sprinklr. Launch Darkly. Tableau. Adobe Analytics. Quantum Metric. Qualtrics. 
            UserZoom. User Interviews. Agile Methodologies. SQL. Python. Tableau. ​​Conviva. Google Developer Console. 
            Amazon Developer Console. Google Analytics. Responsive Design. A/B Testing. Product Discovery. 
            Mobile & Web Development. Apple/Google/Amazon Billing Integrations.
          </p>
        </JobDescription>
      </JobSection>
    </WorkHistoryContainer>
    </PageWrapper>
  );
};

export default WorkHistoryPage;
