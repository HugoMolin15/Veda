
export interface StatItem {
  label: string;
  value: string;
  isInverse?: boolean;
}

export interface BrandCard {
  id: string;
  name: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  logoType: 'icon' | 'text';
  logoValue: string;
  image?: string;
}

export interface BlogItem {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  color: string;
  image?: string;
}
