import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectsTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: 2.5rem;
  letter-spacing: 1px;
  font-weight: normal;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.7); /* Stronger shadow */
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

const ProjectItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ProjectTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: normal;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.8;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6); /* Stronger shadow */
`;

const ProjectTags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tag = styled.span`
  background-color: rgba(255, 87, 34, 0.2);
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  font-size: 0.85rem;
  display: inline-block;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectImageContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  justify-content: center;
  align-items: flex-start; /* Align to the top */
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 40px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 150px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  height: 400px; /* Fixed height for consistent alignment */
  justify-content: flex-start;
`;

const ProjectImage = styled.div`
  width: 140px;
  height: 280px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
`;

const ImageLabel = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 0.85rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-align: center;
`;

const ImageDescription = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.8rem;
  max-width: 130px;
  line-height: 1.4;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
`;

const Arrow = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  margin-top: 125px; /* Position at vertical center of the screenshots */
  align-self: flex-start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    transform: rotate(90deg);
    margin: ${({ theme }) => theme.spacing.md} 0;
    align-self: center;
    margin-top: 0;
  }
`;

const ProjectsPage = () => {
  return (
    <PageWrapper>
      <ProjectsContainer>
        <ProjectsTitle>Projects</ProjectsTitle>
        
        <ProjectsList>
          {/* AI-Powered Personal Website */}
          <ProjectItem>
            <ProjectTitle>This Website</ProjectTitle>
            <TagsContainer>
              <Tag>React</Tag>
              <Tag>Styled Components</Tag>
              <Tag>Claude</Tag>
              <Tag>Model Context Protocol</Tag>
            </TagsContainer>
            <ProjectDescription>
              It seems like everyone's saying that as a product manager, you need to start building with AI tools, or you're going to get left behind. So I started this project of building a React site with the help of an AI assistant, Claude.
            </ProjectDescription>
            <ProjectDescription>
              The coolest part was using MCP integrations that let Claude directly access my files and GitHub repo - essentially pair programming together in real-time, with Claude making changes and me trying to understand them as we went.
            </ProjectDescription>
            <ProjectLink href="https://github.com/dschwenk94/Personal-Website" target="_blank" rel="noopener noreferrer">
              GitHub
            </ProjectLink>
          </ProjectItem>
          
          {/* ReactJS Browser Player (watch.sling.com) */}
          <ProjectItem>
            <ProjectTitle>ReactJS Browser Player</ProjectTitle>
            <TagsContainer>
              <Tag>React</Tag>
              <Tag>Redux</Tag>
              <Tag>Video Streaming</Tag>
              <Tag>Responsive Design</Tag>
              <Tag>SEO</Tag>
            </TagsContainer>
            <ProjectDescription>
              Led development of Sling TV's browser-based streaming player at watch.sling.com, focusing on mobile optimization 
              and responsive design to enhance cross-platform compatibility and user experience.
            </ProjectDescription>
            <ProjectDescription>
              Implemented SEO improvements and conversion-focused payment flows, resulting in a 22% increase in time spent streaming 
              and a 180% increase in subscriptions sold through the platform year-over-year.
            </ProjectDescription>
            
            <ProjectImageContainer>
              <ImageColumn>
                <ProjectImage>
                  <StyledImg 
                    src="/sling-before.jpg" 
                    alt="Screenshot of Sling TV's mobile web interface before optimization showing a disabled streaming view" 
                    loading="lazy" 
                  />
                </ProjectImage>
                <ImageLabel>BEFORE: Mobile Web Unsupported</ImageLabel>
                <ImageDescription>
                  Mobile users were redirected to download apps instead of streaming in browser
                </ImageDescription>
              </ImageColumn>
              
              <Arrow>→</Arrow>
              
              <ImageColumn>
                <ProjectImage>
                  <StyledImg 
                    src="/sling-after.jpg" 
                    alt="Screenshot of Sling TV's mobile web interface after optimization showing enabled streaming view" 
                    loading="lazy" 
                  />
                </ProjectImage>
                <ImageLabel>AFTER: Mobile Web Supported</ImageLabel>
                <ImageDescription>
                  Optimized player with responsive controls for all mobile browsers
                </ImageDescription>
              </ImageColumn>
            </ProjectImageContainer>
            
            <ProjectDescription>
              Key achievements included creating adaptive layouts for various screen sizes, implementing mobile-specific video player 
              controls, and optimizing streaming quality based on network conditions to reduce buffering and improve playback performance.
            </ProjectDescription>
          </ProjectItem>
          
          {/* In-App Purchase Flow Optimization */}
          <ProjectItem>
            <ProjectTitle>In-App Purchase Flow Optimization</ProjectTitle>
            <TagsContainer>
              <Tag>Mobile</Tag>
              <Tag>iOS</Tag>
              <Tag>Android</Tag>
              <Tag>A/B Testing</Tag>
              <Tag>Monetization</Tag>
              <Tag>Apple StoreKit</Tag>
              <Tag>Google Play Billing</Tag>
            </TagsContainer>
            <ProjectDescription>
              Led the development and optimization of in-app purchase flows for Sling TV's mobile applications, creating seamless 
              paths from content discovery to subscription purchase that generated over 50,000 annual subscription purchases.
            </ProjectDescription>
            <ProjectDescription>
              Implemented A/B testing framework to continuously optimize the conversion funnel and increase revenue through 
              content-driven iOS & Android mobile purchase flows using Apple & Google billing integrations.
            </ProjectDescription>
            
            <ProjectImageContainer>
              <ImageColumn>
                <ProjectImage>
                  <StyledImg 
                    src="/images/sling-search.jpg" 
                    alt="Screenshot of Sling TV search interface showing ESPN search results" 
                    loading="lazy" 
                  />
                </ProjectImage>
                <ImageLabel>1. Content Discovery</ImageLabel>
                <ImageDescription>
                  Users search for their favorite content
                </ImageDescription>
              </ImageColumn>
              
              <Arrow>→</Arrow>
              
              <ImageColumn>
                <ProjectImage>
                  <StyledImg 
                    src="/images/sling-sportscenter.jpg" 
                    alt="Screenshot of SportsCenter show details page with subscription options" 
                    loading="lazy" 
                  />
                </ProjectImage>
                <ImageLabel>1.1. Content Details</ImageLabel>
                <ImageDescription>
                  Show details with subscription options
                </ImageDescription>
              </ImageColumn>
              
              <Arrow>→</Arrow>
              
              <ImageColumn>
                <ProjectImage>
                  <StyledImg 
                    src="/images/sling-signup.jpg" 
                    alt="Screenshot of Sling TV account creation page with email and password fields" 
                    loading="lazy" 
                  />
                </ProjectImage>
                <ImageLabel>2. Account Creation</ImageLabel>
                <ImageDescription>
                  Streamlined sign-up experience
                </ImageDescription>
              </ImageColumn>
              
              <Arrow>→</Arrow>
              
              <ImageColumn>
                <ProjectImage>
                  <StyledImg 
                    src="/images/sling-purchase.jpg" 
                    alt="Screenshot of Sling TV purchase confirmation showing subscription details and payment information" 
                    loading="lazy" 
                  />
                </ProjectImage>
                <ImageLabel>3. Purchase Confirmation</ImageLabel>
                <ImageDescription>
                  Apple/Google billing integration
                </ImageDescription>
              </ImageColumn>
            </ProjectImageContainer>
            
            <ProjectDescription>
              Released content-driven mobile purchase flows optimized for user conversion. Improved and expanded capabilities through 
              in-app offers and experimentation, focusing on data-driven decisions to maximize both new subscription acquisition 
              and existing customer upsell opportunities.
            </ProjectDescription>
          </ProjectItem>
        </ProjectsList>
      </ProjectsContainer>
    </PageWrapper>
  );
};

export default ProjectsPage;