import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ServicesTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: 2.5rem;
  letter-spacing: 1px;
  font-weight: normal;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.7); /* Stronger shadow */
`;

const ContactDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 87, 34, 0.2);
  margin: ${({ theme }) => theme.spacing.xl} 0;
  width: 100%;
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
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6); /* Stronger shadow */
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
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.7); /* Stronger shadow */
`;

const ContactText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.8;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6); /* Stronger shadow */
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
      <ServicesTitle>Contact</ServicesTitle>
      
      <ContactSection>
        <ContactHeading>Interested in working together?</ContactHeading>
        <ContactText>
          Let's discuss how I can help your business achieve its goals. 
          Get in touch via email and we can schedule a conversation.
        </ContactText>
        <ContactLink href="mailto:schwenkedavis@gmail.com">
          schwenkedavis@gmail.com
        </ContactLink>
      </ContactSection>
      
      <ContactDivider />
      
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
          <ServiceTitle>Product Management Coaching</ServiceTitle>
          <ServiceDescription>
            One-on-one coaching for product managers looking to level up their skills and career trajectory.
            We'll work together on real challenges you're facing - whether that's getting better at prioritization,
            improving stakeholder communication, or building more effective discovery processes. It's practical,
            hands-on guidance based on what I've learned managing products in fast-paced environments.
          </ServiceDescription>
        </ServiceItem>
      </ServicesList>
    </ServicesContainer>
    </PageWrapper>
  );
};

export default ServicesPage;
