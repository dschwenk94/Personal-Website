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
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const CompanyName = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.8rem;
  font-weight: normal;
  letter-spacing: 0.5px;
`;

const CompanyLocation = styled.span`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  font-size: 1rem;
`;

const JobTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const JobDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: 1.1rem;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6); /* Stronger shadow */
  }
`;

const JobDuration = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  white-space: nowrap;
  margin-left: ${({ theme }) => theme.spacing.md};
`;

const JobResponsibilities = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.lg};
  
  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    position: relative;
    letter-spacing: 0.3px;
    font-size: 0.95rem;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6); /* Stronger shadow */
    
    &::marker {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const WorkHistoryPage = () => {
  return (
    <PageWrapper>
      <WorkHistoryContainer>
        <WorkHistoryTitle>Work History</WorkHistoryTitle>
        
        {/* VIZIO / Walmart */}
        <JobSection>
          <CompanyHeader>
            <CompanyName>VIZIO / Walmart</CompanyName>
            <CompanyLocation>Remote</CompanyLocation>
          </CompanyHeader>
          
          <JobTitle>
            Product Manager - VIZIO / Walmart Account
            <JobDuration>Dec 2024 – Current</JobDuration>
          </JobTitle>
          
          <JobResponsibilities>
            <li>Product manager on the monetization team, focusing on expanding the usage and capabilities of VIZIO account</li>
            <li>Established multi-year roadmap for transfer of VIZIO account to Walmart account, with focus on monetization capabilities and Walmart+ upsells</li>
          </JobResponsibilities>
        </JobSection>
        
        {/* Sling TV */}
        <JobSection>
          <CompanyHeader>
            <CompanyName>Sling TV</CompanyName>
            <CompanyLocation>Englewood, CO</CompanyLocation>
          </CompanyHeader>
          
          <JobTitle>
            Product Manager II - In-App Monetization
            <JobDuration>Oct 2023 - Dec 2024</JobDuration>
          </JobTitle>
          
          <JobResponsibilities>
            <li>Product Manager II leading the In-App Monetization squad in establishing & optimizing in-app purchase flows, used to convert Sling Free users to paying customers, or upsell existing customers into additional subscriptions</li>
            <li>Released content-driven iOS & Android mobile purchase flows which generate >50k annual subscription purchases, using Apple & Google billing integrations with estimated annual value creation of >$3M</li>
            <li>Improved & expanded existing in-app purchase capabilities via in-app offers & experimentation, leading to improved conversion rates & subscriptions purchased in-app (18% YoY)</li>
          </JobResponsibilities>
          
          <JobTitle>
            Product Manager I - watch.sling.com
            <JobDuration>Jul 2022 – Oct 2023</JobDuration>
          </JobTitle>
          
          <JobResponsibilities>
            <li>Product manager for the ReactJS based Sling browser player (watch.sling.com)</li>
            <li>Led a team consisting of 10 developers and software testers, soliciting user and business stakeholder feedback to discover areas of opportunity & improvement</li>
            <li>Increased time spent streaming onsite (22% YoY) and subscriptions sold onsite (180% YoY) through a variety of product enhancements - including mobile device & video player optimizations, SEO improvements, and unentitled purchase flows</li>
            <li>Recipient of the "Distinguished Service Award" - an award given to the top 100/15,000 employees of Dish Network / Sling TV for their outstanding results and teamwork</li>
          </JobResponsibilities>
          
          <JobTitle>
            Product Operations Manager
            <JobDuration>Oct 2021 – Jul 2022</JobDuration>
          </JobTitle>
          
          <JobResponsibilities>
            <li>Managed the product operations team of 3 analysts, resulting in increased performance & stability of Sling's applications & websites, leading to to a reduction in customer contacts (31% YoY) on technical issues</li>
            <li>Partnered closely with call center & chatbot teams to better quantify, troubleshoot, & understand technical issues, resulting in an increase in customer satisfaction (11% YoY) for technical issue contacts</li>
          </JobResponsibilities>
          
          <JobTitle>
            Product Operations Analyst
            <JobDuration>Dec 2020 – Oct 2021</JobDuration>
          </JobTitle>
          
          <JobResponsibilities>
            <li>Operations Analyst III leading the Product Operations team's efforts to improve app and streaming quality</li>
            <li>Use various data sets and KPIs (including but not limited to customer contacts, cancellations, social media, backend QoS metrics) to identify and prioritize customer impacting issues for engineering fixes, reducing time to resolution for customer impacting issues (24% YoY)</li>
          </JobResponsibilities>
          
          <JobTitle>
            Command Center Analyst
            <JobDuration>Sep 2019 – Nov 2020</JobDuration>
          </JobTitle>
          
          <JobResponsibilities>
            <li>Operations Analyst II in the Sling Command Center, performing real-time monitoring of service stability and leading incident management</li>
          </JobResponsibilities>
        </JobSection>
        
        {/* General Dynamics IT */}
        <JobSection>
          <CompanyHeader>
            <CompanyName>General Dynamics IT</CompanyName>
            <CompanyLocation>Falls Church, VA</CompanyLocation>
          </CompanyHeader>
          
          <JobTitle>
            External Affairs Intern
            <JobDuration>Jun 2017 – Jan 2018</JobDuration>
          </JobTitle>
          
          <JobResponsibilities>
            <li>Full-time paid internship in the government relations and marketing departments of a leading information technology & cyber-security federal contractor</li>
            <li>Offered internship extension leading to full-time position offer due to outstanding results and drive</li>
          </JobResponsibilities>
        </JobSection>
        
        {/* Education */}
        <JobSection>
          <CompanyHeader>
            <CompanyName>Southern Methodist University</CompanyName>
            <CompanyLocation>Dallas, TX</CompanyLocation>
          </CompanyHeader>
          
          <JobTitle>
            Dedman College of Humanities & Sciences
            <JobDuration>Dec 2016</JobDuration>
          </JobTitle>
          
          <JobDescription>
            <p>Bachelor of Arts, Political Science / Public Policy (dual major); Economics Minor</p>
          </JobDescription>
        </JobSection>
        
        {/* Technical Skills */}
        <JobSection>
          <CompanyHeader>
            <CompanyName>Technical Skills & Proficiencies</CompanyName>
          </CompanyHeader>
          
          <JobDescription>
            <p>
              Microsoft Office & Project. JIRA. Sprinklr. Launch Darkly. Tableau. Adobe Analytics. 
              Quantum Metric. Qualtrics. UserZoom. User Interviews. Agile Methodologies. SQL. Python. 
              Tableau. ​​Conviva. Google Developer Console. Amazon Developer Console. Google Analytics. 
              Responsive Design. A/B Testing. Product Discovery. Mobile & Web Development. 
              Apple/Google/Amazon Billing Integrations.
            </p>
          </JobDescription>
        </JobSection>
      </WorkHistoryContainer>
    </PageWrapper>
  );
};

export default WorkHistoryPage;