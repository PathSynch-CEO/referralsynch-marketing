import { theme } from '../theme';

const Logo = ({ color = theme.colors.ink, size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" aria-hidden="true">
    <path d="M30 58 L30 34" stroke={color} strokeWidth="5" strokeLinecap="round"/>
    <ellipse cx="14" cy="20" rx="6" ry="16" transform="rotate(-40 14 20)" fill={color}/>
    <ellipse cx="30" cy="14" rx="7" ry="16" fill={color}/>
    <ellipse cx="46" cy="20" rx="6" ry="16" transform="rotate(40 46 20)" fill={color}/>
  </svg>
);

export default Logo;
