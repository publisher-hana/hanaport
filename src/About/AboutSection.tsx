import { AbutSec } from './About.style'
import { SecTittle } from 'styles/common.style'

interface AboutSectionProps {
  className?: string; 
  secTitle?: string;  
  children?: React.ReactNode; 
}

function AboutSection({ className, secTitle, children  }: AboutSectionProps) {
  return (
    <AbutSec className={className}>
      <div className="content reveal">
        <SecTittle white>{ secTitle }</SecTittle>
        {children} 
      </div>
    </AbutSec>
  );
}

export default AboutSection