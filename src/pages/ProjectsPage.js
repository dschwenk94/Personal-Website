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
  gap: ${props => props.$isDesktop ? '15px' : '20px'};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: ${props => props.$isDesktop ? 'nowrap' : 'wrap'};
  overflow-x: ${props => props.$isDesktop ? 'auto' : 'visible'};
  padding: ${props => props.$isDesktop ? '0 10px' : '0'};
  
  /* Custom scrollbar for desktop view */
  ${props => props.$isDesktop && `
    &::-webkit-scrollbar {
      height: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${props.theme.colors.primary};
      border-radius: 4px;
    }
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${props => props.$isDesktop ? '10px' : '20px'};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${props => props.$isDesktop ? '10px' : '40px'};
    flex-wrap: wrap;
    overflow-x: visible;
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
  max-width: ${props => props.$isDesktop ? '200px' : '150px'};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  height: ${props => props.$isDesktop ? '280px' : '400px'};
  justify-content: flex-start;
  flex-shrink: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${props => props.$isDesktop ? '180px' : '150px'};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${props => props.$isDesktop ? '200px' : '150px'};
  }
`;

const ProjectImage = styled.div`
  flex: 0 0 auto;
  width: ${props => props.$isDesktop ? '200px' : '130px'};
  height: ${props => props.$isDesktop ? '128px' : '250px'};
  background-color: #191B22;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: ${props => props.$isDesktop ? '180px' : '130px'};
    height: ${props => props.$isDesktop ? '115px' : '250px'};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${props => props.$isDesktop ? '200px' : '130px'};
    height: ${props => props.$isDesktop ? '128px' : '250px'};
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.$isDesktop ? 'contain' : 'cover'};
  object-position: ${props => props.$isDesktop ? 'center' : 'top'};
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
  font-size: ${props => props.$isDesktop ? '0.75rem' : '0.8rem'};
  max-width: ${props => props.$isDesktop ? '200px' : '130px'};
  line-height: 1.4;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${props => props.$isDesktop ? '180px' : '130px'};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.8rem;
    max-width: ${props => props.$isDesktop ? '200px' : '130px'};
  }
`;

const Arrow = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${props => props.$isDesktop ? '2rem' : '2.5rem'};
  display: flex;
  align-items: center;
  margin-top: ${props => props.$isDesktop ? '64px' : '125px'};
  align-self: flex-start;
  flex-shrink: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${props => props.$isDesktop ? '1.5rem' : '2.5rem'};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
    margin-top: ${props => props.$isDesktop ? '64px' : '125px'};
  }
  
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

const ProjectDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: ${({ theme }) => theme.spacing.xl} 0;
  width: 100%;
`;

const ProjectsPage = () => {
  return (
    <PageWrapper>
      <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsList>
        {/* In-App Purchase Optimization */}
        <ProjectItem>
          <ProjectTitle>In-App Purchase Optimization</ProjectTitle>
          <TagsContainer>
            <Tag>iOS</Tag>
            <Tag>Android</Tag>
            <Tag>In-app payment integrations</Tag>
            <Tag>React Native</Tag>
          </TagsContainer>
          <ProjectDescription>
            Released content-driven in-app purchase flows for the Sling mobile apps, utilizing Apple & Google billing integrations. Improved and expanded capabilities through in-app offers and experimentation, focusing on data-driven decisions to maximize both new subscription acquisition and existing customer upsells.
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
              <ImageLabel>2. Content Details</ImageLabel>
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
              <ImageLabel>3. Account Creation</ImageLabel>
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
              <ImageLabel>4. Purchase Confirmation</ImageLabel>
              <ImageDescription>
                Apple/Google billing integration
              </ImageDescription>
            </ImageColumn>
          </ProjectImageContainer>
          
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
        
        <ProjectDivider />
        
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
        
        <ProjectDivider />
        
        {/* Clippy - AI YouTube Shorts Generator */}
        <ProjectItem>
          <ProjectTitle>Clippy - AI YouTube Shorts Generator</ProjectTitle>
          <TagsContainer>
            <Tag>Python/Flask</Tag>
            <Tag>FFmpeg</Tag>
            <Tag>AssemblyAI</Tag>
            <Tag>PostgreSQL</Tag>
            <Tag>YouTube API</Tag>
          </TagsContainer>
          <ProjectDescription>
            Clippy was a side project I started (with help from Claude + MCP integrations) to automatically generate captioned short form videos and quickly upload them to Youtube & TikTok. I'm still working on the TikTok integration, but I've got it working well for Youtube.
          </ProjectDescription>
          
          <ProjectImageContainer $isDesktop>
            <ImageColumn $isDesktop>
              <ProjectImage $isDesktop>
                <StyledImg 
                  src="/images/clippy-input.png" 
                  alt="Clippy input interface showing YouTube URL field and AI auto-detection features" 
                  loading="lazy"
                  $isDesktop 
                />
              </ProjectImage>
              <ImageLabel>1. Input & AI Analysis</ImageLabel>
              <ImageDescription $isDesktop>
                Paste any YouTube URL and AI finds the most viral moments
              </ImageDescription>
            </ImageColumn>
            
            <Arrow $isDesktop>→</Arrow>
            
            <ImageColumn $isDesktop>
              <ProjectImage $isDesktop>
                <StyledImg 
                  src="/images/clippy-processing.png" 
                  alt="Clippy processing screen showing AI analyzing video content" 
                  loading="lazy"
                  $isDesktop 
                />
              </ProjectImage>
              <ImageLabel>2. AI Processing</ImageLabel>
              <ImageDescription $isDesktop>
                Automatic speaker detection and content analysis
              </ImageDescription>
            </ImageColumn>
            
            <Arrow $isDesktop>→</Arrow>
            
            <ImageColumn $isDesktop>
              <ProjectImage $isDesktop>
                <StyledImg 
                  src="/images/clippy-edit.png" 
                  alt="Clippy caption editor with real-time preview and speaker controls" 
                  loading="lazy"
                  $isDesktop 
                />
              </ProjectImage>
              <ImageLabel>3. Edit Captions</ImageLabel>
              <ImageDescription $isDesktop>
                Real-time caption editing with speaker tracking
              </ImageDescription>
            </ImageColumn>
            
            <Arrow $isDesktop>→</Arrow>
            
            <ImageColumn $isDesktop>
              <ProjectImage $isDesktop>
                <StyledImg 
                  src="/images/clippy-upload.png" 
                  alt="Clippy YouTube upload interface with metadata fields" 
                  loading="lazy"
                  $isDesktop 
                />
              </ProjectImage>
              <ImageLabel>4. One-Click Upload</ImageLabel>
              <ImageDescription $isDesktop>
                Direct upload to YouTube Shorts
              </ImageDescription>
            </ImageColumn>
          </ProjectImageContainer>
          
          <ProjectDescription>
            The app automatically transforms long YouTube videos into viral shorts with AI-powered editing. It identifies the best moments, tracks speakers, and adds dynamic captions that sync perfectly with speech. Content creators can edit captions in real-time and upload directly to YouTube with one click. Key features include intelligent peak detection for viral moments, multi-speaker diarization with automatic frame cropping, and a sophisticated caption system that creates engaging, perfectly-timed subtitles.
          </ProjectDescription>
          
          <ProjectLink href="https://github.com/dschwenk94/Clippy" target="_blank" rel="noopener noreferrer">
            GitHub
          </ProjectLink>
        </ProjectItem>
        
        <ProjectDivider />
        
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
      </ProjectsList>
    </ProjectsContainer>
    </PageWrapper>
  );
};

export default ProjectsPage;