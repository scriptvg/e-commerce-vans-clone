import Vans from '@/assets/9a1cc1122366d9b79ad5b1b541de2a4a-removebg-preview.png'
import { cn } from '@/lib/utils';

export const Logo = ({className}) => (
  <img src={Vans} alt="Logo" className={cn("w-42 h-auto object-contain transition-transform  dark:brightness-0 dark:invert", className)} />
);
