export type PortfolioCategory =
    | 'SOC'
    | 'Graphic Design'
    | 'Freelance'
    | 'Certification';

export type PortfolioItemSize = 'small' | 'medium' | 'large';
export type PortfolioItemHeight = 'short' | 'medium' | 'tall';

export interface PortfolioItemData {
    id: string | number;
    image: string;
    video?: string;
    title: string;
    alt?: string;
    category: PortfolioCategory;
    size?: PortfolioItemSize;
    height?: PortfolioItemHeight;
    date?: string;
    client?: string;
    variant?: 'featured' | 'gallery' | 'minimal';
    description?: string;
    longDescription?: string;
}
