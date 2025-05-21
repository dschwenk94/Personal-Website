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

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ServiceItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ServiceTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.8rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: normal;
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.8;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6); /* Stronger shadow */
`;

const ContactSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ContactHeading = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: normal;
  letter-spacing: 0.5px;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.7); /* Stronger shadow */
`;

const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6); /* Stronger shadow */
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
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
            <ServiceTitle>Product Strategy & Roadmapping</ServiceTitle>
            <ServiceDescription>
              Strategic product planning and roadmap development to align business goals with user needs. 
              I help organizations define clear product vision and prioritize features based on impact and 
              feasibility.
            </ServiceDescription>
          </ServiceItem>
          
          <ServiceItem>
            <ServiceTitle>Subscription & Monetization Optimization</ServiceTitle>
            <ServiceDescription>
              Expert guidance in creating and optimizing subscription models, pricing strategies, and 
              conversion funnels. Using data-driven approaches to increase conversion rates, reduce churn, 
              and maximize lifetime value through targeted testing and experimentation.
            </ServiceDescription>
          </ServiceItem>
          
          <ServiceItem>
            <ServiceTitle>Mobile App Strategy</ServiceTitle>
            <ServiceDescription>
              Specialized consultation for mobile app strategy, from in-app purchase flows to mobile-specific 
              user experience. Incorporate platform-specific best practices, billing integrations, and 
              performance optimization for iOS and Android ecosystems.
            </ServiceDescription>
          </ServiceItem>
        </ServicesList>
        
        <ContactSection>
          <ContactHeading>Get in Touch</ContactHeading>
          <ContactText>
            If you're interested in working together or have questions about how I can help your 
            organization, feel free to reach out at{' '}
            <ContactLink href="mailto:schwenkedavis@gmail.com">schwenkedavis@gmail.com</ContactLink>
          </ContactText>
        </ContactSection>
      </ServicesContainer>
    </PageWrapper>
  );
};

export default ServicesPage;