import React from "react";
import styles from "./HeroText.module.css";

interface HeroTextProps {
  className?: string;
}

export const HeroText = ({ className }: HeroTextProps) => {
  return (
    <div className={className}>
      <h1 className={styles.HeroTitle}>Find Your Next Job.</h1>
      <div className={styles.SupportText}>
        Google-search specific job boards for specific locations
      </div>
    </div>
  );
};
