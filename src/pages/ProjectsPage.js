import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
// Using direct URLs to the images instead of importing them
// We'll use public folder for these images

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
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 100%;
`;

const ProjectItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ProjectTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const ProjectDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.8;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6); /* Stronger shadow */
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectTag = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: ${({ theme }) => theme.spacing.sm};
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  
  &:not(:last-child)::after {
    content: '•';
    margin-left: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.sm};
  letter-spacing: 0.3px;
  transition: all ${({ theme }) => theme.transition.default};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.primary};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
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
  flex: 0 0 auto;
  width: 130px;
  height: 250px;
  background-color: #191B22;
  border-radius: 15px;
  overflow: hidden;
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
  margin-top: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
`;

const ImageDescription = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: 0.8rem;
  max-width: 130px;
  line-height: 1.4;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6); /* Stronger shadow */
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

const ProjectStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StatValue = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const Tag = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  
  &:not(:last-child):after {
    content: "•";
    color: ${({ theme }) => theme.colors.text};
    margin-left: 12px;
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
        
        {/* watch.sling.com Mobile Web Support */}
        <ProjectItem>
          <ProjectTitle>watch.sling.com Mobile Web Optimization</ProjectTitle>
          <TagsContainer>
            <Tag>ReactJS</Tag>
            <Tag>Mobile Web</Tag>
            <Tag>Responsive Design</Tag>
            <Tag>SEO</Tag>
          </TagsContainer>
          <ProjectDescription>
            Led the initiative to open watch.sling.com to mobile device users, including both Sling Freestream and paid subscribers. 
            Previously, the ReactJS-based streaming platform was only accessible on desktop browsers. Our team implemented responsive design patterns, 
            optimized streaming performance, and enhanced the user experience specifically for mobile users.
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
                Previously, mobile users would see the Sling interface but couldn't stream content on mobile web
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
                After our optimization, users could stream directly from their mobile browser without requiring app installation
              </ImageDescription>
            </ImageColumn>
          </ProjectImageContainer>
          
          <ProjectDescription>
            The project involved significant technical challenges including optimizing video playback for mobile bandwidths, 
            reworking UI components for touch interfaces, and ensuring cross-browser compatibility. We also implemented 
            new acquisition flows designed specifically for mobile users, resulting in a significant increase in conversions.
          </ProjectDescription>
          
          <ProjectStats>
            <StatItem>
              <StatValue>22%</StatValue>
              <StatLabel>Increase in streaming time (YoY)</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>180%</StatValue>
              <StatLabel>Increase in subscriptions sold onsite (YoY)</StatLabel>
            </StatItem>
          </ProjectStats>
          
          <ProjectLink href="https://watch.sling.com" target="_blank" rel="noopener noreferrer">
            Visit Site
          </ProjectLink>
        </ProjectItem>
        
        {/* In-App Purchase Optimization */}
        <ProjectItem>
          <ProjectTitle>In-App Purchase Optimization</ProjectTitle>
          <TagsContainer>
            <Tag>Mobile</Tag>
            <Tag>iOS</Tag>
            <Tag>Android</Tag>
            <Tag>In-app payment integrations</Tag>
            <Tag>React Native</Tag>
          </TagsContainer>
          <ProjectDescription>
            Redesigned purchase flows resulting in 25% higher conversion rates and improved user satisfaction scores. 
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
            and existing customer upsells.
          </ProjectDescription>
          
          <ProjectStats>
            <StatItem>
              <StatValue>50k+</StatValue>
              <StatLabel>Annual subscription purchases</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>$2M+</StatValue>
              <StatLabel>Estimated annual value creation</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>18%</StatValue>
              <StatLabel>YoY increase in subscriptions purchased</StatLabel>
            </StatItem>
          </ProjectStats>
          <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
            View Project
          </ProjectLink>
        </ProjectItem>
      </ProjectsList>
    </ProjectsContainer>
    </PageWrapper>
  );
};

export default ProjectsPage;