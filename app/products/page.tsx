"use client";
import { useState } from "react";
import { products, categories as categoryList } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Filter, Search, X, SlidersHorizontal, ArrowUpDown, Check, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function ProductsListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLighting, setSelectedLighting] = useState<string[]>([]);
  const [selectedDurability, setSelectedDurability] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("default");

  const lightingOptions = ["LED Backlit", "LED Frontlit", "Neon", "Edge-lit", "None"];
  const durabilityOptions = ["Indoor/Outdoor", "Indoor Only", "Outdoor Only"];

  // Filter products based on search query and category/specification options
  const filteredProducts = products.filter((product) => {
    // 1. Search Query Match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = product.title.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchMat = product.material.toLowerCase().includes(q);
      const matchCat = product.category.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchMat && !matchCat) return false;
    }

    // 2. Category Match
    if (selectedCategories.length > 0) {
      if (!selectedCategories.includes(product.category)) return false;
    }

    // 3. Lighting Style Match
    if (selectedLighting.length > 0) {
      if (!selectedLighting.includes(product.lightingType)) return false;
    }

    // 4. Durability Match
    if (selectedDurability.length > 0) {
      if (!selectedDurability.includes(product.durability)) return false;
    }

    return true;
  });

  // Sort products based on selected sorting method
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") {
      return a.basePrice - b.basePrice;
    }
    if (sortBy === "price-desc") {
      return b.basePrice - a.basePrice;
    }
    if (sortBy === "title-asc") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const isAnyFilterActive =
    searchQuery.trim() !== "" ||
    selectedCategories.length > 0 ||
    selectedLighting.length > 0 ||
    selectedDurability.length > 0 ||
    sortBy !== "default";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedLighting([]);
    setSelectedDurability([]);
    setSortBy("default");
  };

  const handleCategoryPillClick = () => {
    if (isAnyFilterActive) {
      handleResetFilters();
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Complete Catalog</p>
            <h1 className="text-text font-heading text-4xl md:text-5xl font-bold leading-tight">
              Industrial <span className="text-accent">Signage & Printing</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-accent text-background rounded text-[11px] font-bold uppercase tracking-widest hover:bg-accent-dark transition-all shadow-lg"
            >
              Upload Requirement
            </Link>
          </motion.div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input
              type="text"
              placeholder="Search products by title, description, material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 bg-surface border border-surface-light rounded-xl text-sm font-bold text-text focus:outline-none focus:border-accent transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text"
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          {/* Collapsible Filter toggle */}
          <button 
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className={`flex items-center justify-center gap-2 px-6 py-3.5 border rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
              isFiltersOpen || isAnyFilterActive
                ? "bg-accent text-background border-accent shadow-md" 
                : "bg-surface text-text border-surface-light hover:border-accent"
            }`}
          >
            <SlidersHorizontal size={16} />
            {isFiltersOpen ? "Hide Filters" : "Filter Catalog"}
            {isAnyFilterActive && (
              <span className="ml-1 px-2 py-0.5 bg-background text-accent text-[9px] font-black rounded-full">
                Active
              </span>
            )}
          </button>
        </div>

        {/* Collapsible Specification Filters Panel */}
        <AnimatePresence>
          {isFiltersOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden mb-12"
            >
              <div className="bg-surface border border-surface-light rounded-2xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 shadow-xl">
                
                {/* 1. Category */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted border-b border-surface-light pb-2">
                    Categories
                  </h4>
                  <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto scrollbar-thin pr-2">
                    {categoryList.map((category) => {
                      const isSelected = selectedCategories.includes(category);
                      return (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategories(
                              isSelected
                                ? selectedCategories.filter((c) => c !== category)
                                : [...selectedCategories, category]
                            );
                          }}
                          className={`flex items-center justify-between text-left px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                            isSelected 
                              ? "bg-accent/15 text-accent border border-accent/20" 
                              : "text-text-muted hover:text-text hover:bg-surface-light border border-transparent"
                          }`}
                        >
                          <span className="truncate mr-2">{category}</span>
                          {isSelected && <Check size={12} className="shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Lighting Type */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted border-b border-surface-light pb-2">
                    Lighting Style
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    {lightingOptions.map((option) => {
                      const isSelected = selectedLighting.includes(option);
                      return (
                        <button
                          key={option}
                          onClick={() => {
                            setSelectedLighting(
                              isSelected
                                ? selectedLighting.filter((l) => l !== option)
                                : [...selectedLighting, option]
                            );
                          }}
                          className={`flex items-center justify-between text-left px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                            isSelected 
                              ? "bg-accent/15 text-accent border border-accent/20" 
                              : "text-text-muted hover:text-text hover:bg-surface-light border border-transparent"
                          }`}
                        >
                          <span>{option}</span>
                          {isSelected && <Check size={12} />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Durability */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted border-b border-surface-light pb-2">
                    Durability
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    {durabilityOptions.map((option) => {
                      const isSelected = selectedDurability.includes(option);
                      return (
                        <button
                          key={option}
                          onClick={() => {
                            setSelectedDurability(
                              isSelected
                                ? selectedDurability.filter((d) => d !== option)
                                : [...selectedDurability, option]
                            );
                          }}
                          className={`flex items-center justify-between text-left px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                            isSelected 
                              ? "bg-accent/15 text-accent border border-accent/20" 
                              : "text-text-muted hover:text-text hover:bg-surface-light border border-transparent"
                          }`}
                        >
                          <span>{option}</span>
                          {isSelected && <Check size={12} />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Sorting & Reset */}
                <div className="space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted border-b border-surface-light pb-2">
                      Sort Products
                    </h4>
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full bg-surface border border-surface-light rounded-xl p-3 text-xs font-bold text-text focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                      >
                        <option value="default">Default Catalog Order</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="title-asc">Alphabetical: A-Z</option>
                      </select>
                      <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" size={14} />
                    </div>
                  </div>

                  {isAnyFilterActive && (
                    <button
                      onClick={handleResetFilters}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-surface-light hover:bg-surface-light/80 text-text rounded-xl text-xs font-bold uppercase tracking-widest transition-colors mt-4 border border-surface-light"
                    >
                      <RefreshCw size={14} className="animate-spin-slow" />
                      Reset Filters
                    </button>
                  )}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Categories Navigation */}
        {!isAnyFilterActive && (
          <div className="flex flex-wrap gap-3 mb-20">
            {categoryList.map((category, i) => (
              <motion.a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={handleCategoryPillClick}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2.5 bg-surface border border-surface-light rounded-sm text-[11px] font-bold uppercase tracking-widest text-text hover:text-accent hover:border-accent transition-all whitespace-nowrap"
              >
                {category}
              </motion.a>
            ))}
          </div>
        )}

        {/* Product Catalog Grid Rendering */}
        {isAnyFilterActive ? (
          <div className="space-y-12">
            <div className="flex items-center justify-between border-b border-surface-light pb-6">
              <div>
                <h2 className="text-text font-heading text-2xl md:text-3xl font-bold">
                  Search & Filter Results
                </h2>
                <p className="text-text-muted text-[11px] font-bold uppercase tracking-[0.2em] mt-1">
                  {sortedProducts.length} {sortedProducts.length === 1 ? "Product Spec" : "Product Specifications"} Found
                </p>
              </div>
              
              <button 
                onClick={handleResetFilters}
                className="text-xs font-bold text-accent hover:text-accent-dark uppercase tracking-widest flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw size={12} /> Clear Filters
              </button>
            </div>

            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product, pIdx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pIdx * 0.02 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-surface border border-surface-light rounded-3xl">
                <p className="text-lg font-bold text-text mb-2">No Matching Products</p>
                <p className="text-sm text-text-muted mb-6">Try refining your search terms or adjustments to your specifications filters.</p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-3 bg-accent text-background rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-accent-dark transition-all shadow-md"
                >
                  Show All Products
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Categorized Products List */
          <div className="space-y-32">
            {categoryList.map((category) => {
              const categoryProducts = products.filter(p => p.category === category);
              if (categoryProducts.length === 0) return null;

              return (
                <section 
                  key={category} 
                  id={category.toLowerCase().replace(/\s+/g, "-")}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center justify-between mb-10 border-b border-surface-light pb-6">
                    <div>
                      <h2 className="text-text font-heading text-2xl md:text-3xl font-bold mb-2">
                         {category}
                      </h2>
                      <p className="text-text-muted text-[11px] font-bold uppercase tracking-[0.2em]">
                        {categoryProducts.length} Product Specifications
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryProducts.map((product, pIdx) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: pIdx * 0.05 }}
                        viewport={{ once: true, margin: "-50px" }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
