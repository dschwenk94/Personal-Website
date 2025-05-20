import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
// Using direct URLs to the images instead of importing them
// We'll use public folder for these images

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ProjectsTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: 2.5rem;
  letter-spacing: 1px;
  font-weight: normal;
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
  gap: 40px;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  justify-content: center;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 150px;
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
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
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
`;

const Arrow = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: rotate(90deg);
    margin: ${({ theme }) => theme.spacing.md} 0;
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
          <ProjectTitle>AI-Powered Personal Website</ProjectTitle>
          <TagsContainer>
            <Tag>React</Tag>
            <Tag>Styled Components</Tag>
            <Tag>Claude</Tag>
            <Tag>Model Context Protocol</Tag>
          </TagsContainer>
          <ProjectDescription>
            Built with Claude and a bunch of MCP (Model Context Protocol) integrations, I asked Claude to go with a React based 
            approach to give myself more customization options going forward. The development process leveraged Git for version control and React Router for navigation.
          </ProjectDescription>
          <ProjectDescription>
            Claude helped implement features like the animated starry night background, responsive design, and component architecture. 
            The MCP integrations allowed for direct file system access and version control, enabling a collaborative workflow where 
            Claude could suggest, implement, and refine code changes in real-time.
          </ProjectDescription>
          <ProjectLink href="https://github.com/umerfarok/animated-backgrounds" target="_blank" rel="noopener noreferrer">
            Background Inspiration
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
                  src="/sling-before.svg" 
                  alt="Sling TV mobile web interface before optimization" 
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
                  src="/sling-after.svg" 
                  alt="Sling TV mobile web interface after optimization" 
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
          </TagsContainer>
          <ProjectDescription>
            Redesigned purchase flows resulting in 25% higher conversion rates and improved user satisfaction scores. 
            Implemented A/B testing framework to continuously optimize the conversion funnel and increase revenue through 
            content-driven iOS & Android mobile purchase flows using Apple & Google billing integrations.
          </ProjectDescription>
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