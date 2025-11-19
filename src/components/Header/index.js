import React from 'react';
import styles from "./Header.module.css";

// Ícone de Lupa Minimalista
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

function Header({ searchTerm, setSearchTerm }) {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                M.Capital
                <span className={styles.proBadge}>PRO</span>
            </div>
            
            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    placeholder="Buscar ativos, análises..."
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button className={styles.searchButton}>
                    <SearchIcon />
                </button>
            </div>
        </header>
    )
}
export default Header;