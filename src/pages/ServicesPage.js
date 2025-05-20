import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ServicesTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: 2.5rem;
  letter-spacing: 1px;
  font-weight: normal;
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
`;

const ServiceItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ServiceTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const ServiceDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.8;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
`;

const ContactSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${({ theme }) => theme.spacing.xl};
`;

const ContactHeading = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: normal;
  letter-spacing: 0.5px;
`;

const ContactText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.8;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  display: inline-block;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ServicesPage = () => {
  return (
    <PageWrapper>
      <ServicesContainer>
      <ServicesTitle>Services</ServicesTitle>
      <ServicesList>
        <ServiceItem>
          <ServiceTitle>Product Strategy Consulting</ServiceTitle>
          <ServiceDescription>
            Development of comprehensive product strategies aligned with business goals.
            Includes market analysis, user research, and roadmap planning to ensure your
            product meets both user needs and business objectives.
          </ServiceDescription>
        </ServiceItem>
        
        <ServiceItem>
          <ServiceTitle>Monetization Optimization</ServiceTitle>
          <ServiceDescription>
            Expert analysis and recommendations for improving subscription conversion rates,
            in-app purchases, and overall revenue generation from digital products. Focused on
            sustainable growth strategies that maintain user satisfaction.
          </ServiceDescription>
        </ServiceItem>
        
        <ServiceItem>
          <ServiceTitle>User Experience Audit</ServiceTitle>
          <ServiceDescription>
            In-depth evaluation of your existing digital products to identify friction points
            and opportunities for enhanced user experience and increased engagement. Includes
            detailed reports and actionable recommendations.
          </ServiceDescription>
        </ServiceItem>
        
        <ServiceItem>
          <ServiceTitle>Product Team Coaching</ServiceTitle>
          <ServiceDescription>
            Mentorship and training for product teams looking to improve their processes and outcomes.
            Focuses on product discovery, prioritization frameworks, and effective stakeholder management.
          </ServiceDescription>
        </ServiceItem>
      </ServicesList>
      
      <ContactSection>
        <ContactHeading>Interested in working together?</ContactHeading>
        <ContactText>
          Let's discuss how I can help your business achieve its goals. 
          Get in touch via email and we can schedule a consultation.
        </ContactText>
        <ContactLink href="mailto:schwenkedavis@gmail.com">
          schwenkedavis@gmail.com
        </ContactLink>
      </ContactSection>
    </ServicesContainer>
    </PageWrapper>
  );
};

export default ServicesPage;