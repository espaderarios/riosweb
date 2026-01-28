// Game state
const gameState = {
    balance: 250,
    totalEarnings: 0,
    currentStage: 'Beginner',
    stageProgress: 0,
    ventures: {
        lemonade:    { owned: false, cost: 500,        income: 50,        purchased: false, manager: false, managerCost: 2500, level: 1, upgradeCost: 1000, baseIncome: 50 },
        kiosk:       { owned: false, cost: 2000,       income: 150,       purchased: false, manager: false, managerCost: 10000, level: 1, upgradeCost: 4000, baseIncome: 150 },
        foodtruck:   { owned: false, cost: 50000,      income: 2500,      purchased: false, manager: false, managerCost: 250000, level: 1, upgradeCost: 100000, baseIncome: 2500 },
        smallstore:  { owned: false, cost: 100000,     income: 4000,      purchased: false, manager: false, managerCost: 500000, level: 1, upgradeCost: 200000, baseIncome: 4000 },
        boutique:    { owned: false, cost: 150000,     income: 6000,      purchased: false, manager: false, managerCost: 750000, level: 1, upgradeCost: 300000, baseIncome: 6000 },
        restaurant:  { owned: false, cost: 300000,     income: 12000,     purchased: false, manager: false, managerCost: 1500000, level: 1, upgradeCost: 600000, baseIncome: 12000 },
        cafe:        { owned: false, cost: 600000,     income: 20000,     purchased: false, manager: false, managerCost: 3000000, level: 1, upgradeCost: 1200000, baseIncome: 20000 },
        bar:         { owned: false, cost: 900000,     income: 30000,     purchased: false, manager: false, managerCost: 4500000, level: 1, upgradeCost: 1800000, baseIncome: 30000 },
        salon:       { owned: false, cost: 1200000,    income: 40000,     purchased: false, manager: false, managerCost: 6000000, level: 1, upgradeCost: 2400000, baseIncome: 40000 },
        gym:         { owned: false, cost: 1500000,    income: 45000,     purchased: false, manager: false, managerCost: 7500000, level: 1, upgradeCost: 3000000, baseIncome: 45000 },
        hotel:       { owned: false, cost: 3500000,    income: 90000,     purchased: false, manager: false, managerCost: 17500000, level: 1, upgradeCost: 7000000, baseIncome: 90000 },
        nightclub:   { owned: false, cost: 6000000,    income: 150000,    purchased: false, manager: false, managerCost: 30000000, level: 1, upgradeCost: 12000000, baseIncome: 150000 },
        mall:        { owned: false, cost: 10000000,   income: 250000,    purchased: false, manager: false, managerCost: 50000000, level: 1, upgradeCost: 20000000, baseIncome: 250000 },
        casino:      { owned: false, cost: 15000000,   income: 350000,    purchased: false, manager: false, managerCost: 75000000, level: 1, upgradeCost: 30000000, baseIncome: 350000 },
        techstartup: { owned: false, cost: 25000000,   income: 600000,    purchased: false, manager: false, managerCost: 125000000, level: 1, upgradeCost: 50000000, baseIncome: 600000 },
        crypto:      { owned: false, cost: 50000000,   income: 1200000,   purchased: false, manager: false, managerCost: 250000000, level: 1, upgradeCost: 100000000, baseIncome: 1200000 },
        realestate:  { owned: false, cost: 100000000,  income: 2200000,   purchased: false, manager: false, managerCost: 500000000, level: 1, upgradeCost: 200000000, baseIncome: 2200000 },
        stockmarket: { owned: false, cost: 200000000,  income: 4000000,   purchased: false, manager: false, managerCost: 1000000000, level: 1, upgradeCost: 400000000, baseIncome: 4000000 },
        airport:     { owned: false, cost: 500000000,  income: 9000000,   purchased: false, manager: false, managerCost: 2500000000, level: 1, upgradeCost: 1000000000, baseIncome: 9000000 },
        spaceline:   { owned: false, cost: 750000000,  income: 12000000,  purchased: false, manager: false, managerCost: 3750000000, level: 1, upgradeCost: 1500000000, baseIncome: 12000000 },
        satellite:   { owned: false, cost: 1000000000, income: 15000000,  purchased: false, manager: false, managerCost: 5000000000, level: 1, upgradeCost: 2000000000, baseIncome: 15000000 },
        megacorp:     { owned: false, cost: 2500000000, income: 35000000,  purchased: false, manager: false, managerCost: 12500000000, level: 1, upgradeCost: 5000000000, baseIncome: 35000000 },
        globalbank:   { owned: false, cost: 5000000000, income: 70000000,  purchased: false, manager: false, managerCost: 25000000000, level: 1, upgradeCost: 10000000000, baseIncome: 70000000 },
        spacemining:  { owned: false, cost: 10000000000, income: 140000000, purchased: false, manager: false, managerCost: 50000000000, level: 1, upgradeCost: 20000000000, baseIncome: 140000000 },
        quantumtech:  { owned: false, cost: 25000000000, income: 350000000, purchased: false, manager: false, managerCost: 125000000000, level: 1, upgradeCost: 50000000000, baseIncome: 350000000 },
        interstellar: { owned: false, cost: 50000000000, income: 700000000, purchased: false, manager: false, managerCost: 250000000000, level: 1, upgradeCost: 100000000000, baseIncome: 700000000 },
        dysonsphere:  { owned: false, cost: 100000000000, income: 1400000000, purchased: false, manager: false, managerCost: 500000000000, level: 1, upgradeCost: 200000000000, baseIncome: 1400000000 },
        galaxywide:   { owned: false, cost: 250000000000, income: 3500000000, purchased: false, manager: false, managerCost: 1250000000000, level: 1, upgradeCost: 500000000000, baseIncome: 3500000000 },
        universal:    { owned: false, cost: 500000000000, income: 7000000000, purchased: false, manager: false, managerCost: 2500000000000, level: 1, upgradeCost: 1000000000000, baseIncome: 7000000000 },
        multiverse:   { owned: false, cost: 1000000000000, income: 14000000000, purchased: false, manager: false, managerCost: 5000000000000, level: 1, upgradeCost: 2000000000000, baseIncome: 14000000000 }
    },
    assets: {
        house: { level: 1, upgradeCost: 2000, maxLevel: 5, icon: '🏠' },
        clothes: { level: 1, upgradeCost: 500, maxLevel: 5, icon: '👔' },
        car: { level: 0, upgradeCost: 10000, maxLevel: 8, icon: '🚗' },
        watch: { level: 1, upgradeCost: 1000, maxLevel: 5, icon: '⌚' },
        plane: { level: 0, upgradeCost: 500000, maxLevel: 4, icon: '✈️' },
        yacht: { level: 0, upgradeCost: 250000, maxLevel: 3, icon: '🛥️' },
        jewelry: { level: 0, upgradeCost: 5000, maxLevel: 6, icon: '💎' },
        art: { level: 0, upgradeCost: 10000, maxLevel: 5, icon: '🖼️' }
    },
    carCollection: [],
    planeCollection: [],
    luxuryCollection: [],
    cryptoHoldings: {
        bitcoin: { amount: 0, invested: 0 },
        ethereum: { amount: 0, invested: 0 },
        dogecoin: { amount: 0, invested: 0 },
        nft: { amount: 0, invested: 0 },
        cardano: { amount: 0, invested: 0 },
        polkadot: { amount: 0, invested: 0 },
        chainlink: { amount: 0, invested: 0 },
        solana: { amount: 0, invested: 0 },
        avalanche: { amount: 0, invested: 0 },
        polygon: { amount: 0, invested: 0 }
    },
    cryptoBalance: 0, // Total crypto balance in USD equivalent
    stockHoldings: {}, // Stock holdings
    stockBalance: 0, // Total stock balance in USD
    prestige: {
        level: 0,
        points: 0,
        multiplier: 1.0,
        totalPrestigeEarnings: 0,
        badges: []
    },
    lifeStats: {
        health: 80,
        happiness: 70,
        social: 60,
        intelligence: 75
    },
    loveLife: {
        relationship: 'Single',
        partnerName: '',
        relationshipLevel: 0,
        dates: 0,
        gifts: 0
    },
    lastSave: Date.now(),
    notifications: []
};

// Cities configuration
const cities = [
    { name: 'New York', unlockStage: 'Beginner', bonus: 1.0, icon: '🏙️' },
    { name: 'Los Angeles', unlockStage: 'Entrepreneur', bonus: 1.2, icon: '🌴' },
    { name: 'Chicago', unlockStage: 'Business Owner', bonus: 1.3, icon: '🏗️' },
    { name: 'Miami', unlockStage: 'Tycoon', bonus: 1.5, icon: '🏖️' },
    { name: 'Las Vegas', unlockStage: 'Magnate', bonus: 1.8, icon: '🎰' },
    { name: 'Dubai', unlockStage: 'Legend', bonus: 2.0, icon: '🏜️' }
];

// Life activities
const lifeActivities = [
    { name: 'Exercise', cost: 0, effect: { health: 10, happiness: 5 }, icon: '🏃' },
    { name: 'Meditation', cost: 0, effect: { happiness: 8, intelligence: 3 }, icon: '🧘' },
    { name: 'Study Course', cost: 500, effect: { intelligence: 15 }, icon: '📚' },
    { name: 'Party', cost: 200, effect: { happiness: 12, social: 10 }, icon: '🎉' },
    { name: 'Spa Day', cost: 300, effect: { health: 15, happiness: 20 }, icon: '💆' },
    { name: 'Networking', cost: 100, effect: { social: 15, intelligence: 5 }, icon: '🤝' }
];

// Love activities
const loveActivities = [
    { name: 'Coffee Date', cost: 50, effect: { relationship: 5 }, icon: '☕' },
    { name: 'Dinner Date', cost: 200, effect: { relationship: 10 }, icon: '🍽️' },
    { name: 'Movie Date', cost: 80, effect: { relationship: 7 }, icon: '🎬' },
    { name: 'Gift Shopping', cost: 500, effect: { relationship: 15 }, icon: '🎁' },
    { name: 'Weekend Trip', cost: 1000, effect: { relationship: 25 }, icon: '✈️' },
    { name: 'Concert', cost: 150, effect: { relationship: 12 }, icon: '🎵' }
];

// Potential partners
const partners = [
    { name: 'Alex', personality: 'Ambitious', interest: 20, icon: '💼' },
    { name: 'Sarah', personality: 'Creative', interest: 25, icon: '🎨' },
    { name: 'Mike', personality: 'Adventurous', interest: 18, icon: '🏔️' },
    { name: 'Emma', personality: 'Intellectual', interest: 22, icon: '📖' },
    { name: 'David', personality: 'Charming', interest: 30, icon: '😊' },
    { name: 'Lisa', personality: 'Fun-loving', interest: 28, icon: '🎭' }
];

// Car collection
const carTypes = [
    { name: 'Used Sedan', cost: 10000, income: 50, icon: '🚗', level: 1 },
    { name: 'Sports Car', cost: 50000, income: 200, icon: '🏎️', level: 2 },
    { name: 'Luxury SUV', cost: 80000, income: 300, icon: '🚙', level: 3 },
    { name: 'Supercar', cost: 200000, income: 600, icon: '🏁', level: 4 },
    { name: 'Classic Vintage', cost: 350000, income: 800, icon: '🚘', level: 5 },
    { name: 'Hypercar', cost: 1000000, income: 2000, icon: '🏆', level: 6 },
    { name: 'Electric Supercar', cost: 2500000, income: 4000, icon: '⚡', level: 7 },
    { name: 'Concept Car', cost: 5000000, income: 8000, icon: '🚀', level: 8 }
];

// Plane collection
const planeTypes = [
    { name: 'Private Jet', cost: 500000, income: 2000, icon: '✈️', level: 1 },
    { name: 'Business Jet', cost: 2000000, income: 6000, icon: '💺', level: 2 },
    { name: 'Luxury Jet', cost: 10000000, income: 25000, icon: '🛩️', level: 3 },
    { name: 'Private Airliner', cost: 50000000, income: 100000, icon: '✈️', level: 4 }
];

// Luxury items collection
const luxuryItems = [
    { name: 'Diamond Ring', cost: 5000, income: 20, icon: '💍', category: 'jewelry' },
    { name: 'Gold Watch', cost: 15000, income: 50, icon: '⌚', category: 'watch' },
    { name: 'Designer Bag', cost: 8000, income: 30, icon: '👜', category: 'fashion' },
    { name: 'Rare Painting', cost: 50000, income: 200, icon: '🖼️', category: 'art' },
    { name: 'Vintage Wine', cost: 25000, income: 100, icon: '🍷', category: 'collection' },
    { name: 'Platinum Necklace', cost: 30000, income: 120, icon: '📿', category: 'jewelry' },
    { name: 'Sculpture', cost: 75000, income: 300, icon: '🗿', category: 'art' },
    { name: 'Rare Books', cost: 20000, income: 80, icon: '📚', category: 'collection' },
    { name: 'Yacht', cost: 250000, income: 1000, icon: '🛥️', category: 'vehicle' },
    { name: 'Helicopter', cost: 800000, income: 3000, icon: '🚁', category: 'vehicle' },
    { name: 'Submarine', cost: 5000000, income: 15000, icon: '🚤', category: 'vehicle' },
    { name: 'Space Ticket', cost: 10000000, income: 50000, icon: '🚀', category: 'experience' }
];

// Crypto investments
const cryptoInvestments = {
    bitcoin: { 
        name: 'Bitcoin', 
        symbol: '₿', 
        price: 45000, 
        icon: '₿',
        change: 5.2,
        volatility: 0.05
    },
    ethereum: { 
        name: 'Ethereum', 
        symbol: 'Ξ', 
        price: 3000, 
        icon: 'Ξ',
        change: 8.7,
        volatility: 0.08
    },
    dogecoin: { 
        name: 'Dogecoin', 
        symbol: '🐕', 
        price: 0.08, 
        icon: '🐕',
        change: 12.3,
        volatility: 0.15
    },
    nft: { 
        name: 'NFT Collection', 
        symbol: '🎨', 
        price: 5000, 
        icon: '🎨',
        change: 15.8,
        volatility: 0.20
    },
    cardano: {
        name: 'Cardano',
        symbol: '₳',
        price: 0.45,
        icon: '₳',
        change: -3.2,
        volatility: 0.06
    },
    polkadot: {
        name: 'Polkadot',
        symbol: '●',
        price: 7.50,
        icon: '●',
        change: 4.1,
        volatility: 0.07
    },
    chainlink: {
        name: 'Chainlink',
        symbol: '🔗',
        price: 14.20,
        icon: '🔗',
        change: -1.8,
        volatility: 0.09
    },
    solana: {
        name: 'Solana',
        symbol: '◎',
        price: 98.50,
        icon: '◎',
        change: 18.5,
        volatility: 0.12
    },
    avalanche: {
        name: 'Avalanche',
        symbol: '🔺',
        price: 35.80,
        icon: '🔺',
        change: 6.7,
        volatility: 0.10
    },
    polygon: {
        name: 'Polygon',
        symbol: '⬡',
        price: 0.85,
        icon: '⬡',
        change: -5.4,
        volatility: 0.11
    }
};

// Stock market data (fictional companies)
const stockMarket = {
    nykor: {
        displayName: 'Nykor Athletics',
        sector: 'Sports & Fitness',
        basePrice: 120.00,
        currentPrice: 120.00,
        volatility: 0.15,
        growthRate: 0.08,
        risk: 'Medium',
        description: 'Athletic footwear and sports apparel company',
        icon: '👟'
    },
    techflow: {
        displayName: 'TechFlow Solutions',
        sector: 'Technology',
        basePrice: 250.50,
        currentPrice: 250.50,
        volatility: 0.25,
        growthRate: 0.15,
        risk: 'High',
        description: 'Cloud computing and AI software provider',
        icon: '💻'
    },
    greenenergy: {
        displayName: 'GreenEnergy Corp',
        sector: 'Energy',
        basePrice: 85.75,
        currentPrice: 85.75,
        volatility: 0.20,
        growthRate: 0.12,
        risk: 'Medium',
        description: 'Renewable energy and solar power systems',
        icon: '🌱'
    },
    foodchain: {
        displayName: 'FoodChain Inc',
        sector: 'Food & Beverage',
        basePrice: 65.25,
        currentPrice: 65.25,
        volatility: 0.12,
        growthRate: 0.06,
        risk: 'Low',
        description: 'Restaurant chain and food delivery service',
        icon: '🍔'
    },
    healthplus: {
        displayName: 'HealthPlus Medical',
        sector: 'Healthcare',
        basePrice: 180.90,
        currentPrice: 180.90,
        volatility: 0.18,
        growthRate: 0.10,
        risk: 'Medium',
        description: 'Pharmaceutical and medical devices company',
        icon: '🏥'
    },
    automax: {
        displayName: 'AutoMax Motors',
        sector: 'Automotive',
        basePrice: 95.40,
        currentPrice: 95.40,
        volatility: 0.22,
        growthRate: 0.07,
        risk: 'Medium',
        description: 'Electric vehicle and autonomous driving technology',
        icon: '🚗'
    },
    retailpro: {
        displayName: 'RetailPro Group',
        sector: 'Retail',
        basePrice: 45.80,
        currentPrice: 45.80,
        volatility: 0.16,
        growthRate: 0.05,
        risk: 'Medium',
        description: 'E-commerce and retail management platform',
        icon: '🛍️'
    },
    cryptofin: {
        displayName: 'CryptoFin Bank',
        sector: 'Finance',
        basePrice: 320.15,
        currentPrice: 320.15,
        volatility: 0.35,
        growthRate: 0.20,
        risk: 'High',
        description: 'Digital banking and cryptocurrency services',
        icon: '🏦'
    },
    spacex: {
        displayName: 'SpaceX Ventures',
        sector: 'Aerospace',
        basePrice: 450.00,
        currentPrice: 450.00,
        volatility: 0.30,
        growthRate: 0.18,
        risk: 'High',
        description: 'Space exploration and satellite technology',
        icon: '🚀'
    },
    biogen: {
        displayName: 'BioGen Labs',
        sector: 'Biotechnology',
        basePrice: 275.60,
        currentPrice: 275.60,
        volatility: 0.28,
        growthRate: 0.16,
        risk: 'High',
        description: 'Genetic research and biotechnology solutions',
        icon: '🧬'
    },
    gaming: {
        displayName: 'GamingWorld Inc',
        sector: 'Entertainment',
        basePrice: 125.30,
        currentPrice: 125.30,
        volatility: 0.24,
        growthRate: 0.14,
        risk: 'High',
        description: 'Video games and esports platform',
        icon: '🎮'
    },
    realest: {
        displayName: 'RealEstate Plus',
        sector: 'Real Estate',
        basePrice: 85.20,
        currentPrice: 85.20,
        volatility: 0.14,
        growthRate: 0.08,
        risk: 'Low',
        description: 'Property management and real estate investment',
        icon: '🏢'
    },
    logistic: {
        displayName: 'LogiFast Solutions',
        sector: 'Logistics',
        basePrice: 95.75,
        currentPrice: 95.75,
        volatility: 0.18,
        growthRate: 0.09,
        risk: 'Medium',
        description: 'Supply chain and logistics management',
        icon: '🚚'
    },
    telecom: {
        displayName: 'TeleCom Networks',
        sector: 'Telecommunications',
        basePrice: 155.85,
        currentPrice: 155.85,
        volatility: 0.16,
        growthRate: 0.07,
        risk: 'Low',
        description: '5G networks and telecommunications services',
        icon: '📡'
    },
    mining: {
        displayName: 'MiningCorp Industries',
        sector: 'Mining',
        basePrice: 75.40,
        currentPrice: 75.40,
        volatility: 0.26,
        growthRate: 0.11,
        risk: 'High',
        description: 'Mining and natural resources extraction',
        icon: '⛏️'
    },
    education: {
        displayName: 'EduTech Academy',
        sector: 'Education',
        basePrice: 65.90,
        currentPrice: 65.90,
        volatility: 0.15,
        growthRate: 0.10,
        risk: 'Medium',
        description: 'Online education and learning platforms',
        icon: '🎓'
    },
    peartech: {
        displayName: 'PearTech',
        sector: 'Technology',
        basePrice: 250.00,
        currentPrice: 250.00,
        volatility: 0.25,
        growthRate: 0.15,
        risk: 'High',
        description: 'Mobile technology and consumer electronics',
        icon: '📱'
    }
};

// Stages configuration
const stages = [
    { name: 'Beginner', target: 100000, reward: 'House Level 2', rewardIcon: '🏠' },
    { name: 'Entrepreneur', target: 500000, reward: 'Premium Wardrobe', rewardIcon: '👔' },
    { name: 'Business Owner', target: 1000000, reward: 'Sports Car', rewardIcon: '🚗' },
    { name: 'Tycoon', target: 5000000, reward: 'Mansion', rewardIcon: '🏰' },
    { name: 'Magnate', target: 10000000, reward: 'Private Jet', rewardIcon: '✈️' },
    { name: 'Legend', target: 50000000, reward: 'Private Island', rewardIcon: '🏝️' }
];

// DOM Elements
const balanceElement = document.getElementById('balance');
const currentStageElement = document.getElementById('currentStage');
const stageProgressElement = document.getElementById('stageProgress');
const nextRewardElement = document.getElementById('nextReward');
const progressFillElement = document.getElementById('progressFill');
const transferBtn = document.getElementById('transferBtn');
const topupBtn = document.getElementById('topupBtn');
const mainActionBtn = document.getElementById('mainActionBtn');
const modalOverlay = document.getElementById('modalOverlay');
const rewardModal = document.getElementById('rewardModal');
const transferModal = document.getElementById('transferModal');
const investmentModal = document.getElementById('investmentModal');
const withdrawModal = document.getElementById('withdrawModal');
const cryptoGraphModal = document.getElementById('cryptoGraphModal');
const stockTradeModal = document.getElementById('stockTradeModal');
const prestigeModal = document.getElementById('prestigeModal');

// Initialize game
function initGame() {
    loadGameState();
    initializePriceHistory(); // Initialize crypto price history
    updateUI();
    updatePrestigeDisplay(); // Update prestige display
    startIncomeGeneration();
    setupEventListeners();
    updateTime();
    setInterval(updateTime, 1000);
    setInterval(saveGameState, 10000); // Auto-save every 10 seconds
    setInterval(simulateCryptoPrices, 30000); // Update crypto prices every 30 seconds
    setInterval(simulateStockPrices, 20000); // Update stock prices every 20 seconds
    setInterval(updatePriceHistory, 30000); // Update price history every 30 seconds
    setupMobileBackButton(); // Setup mobile back button handling
}

// Setup mobile back button handling
function setupMobileBackButton() {
    // Track navigation history within the game
    let navigationHistory = ['home']; // Start with home tab
    let maxHistoryLength = 10;
    
    // Add current tab to history when navigating
    function addToHistory(tab) {
        // Remove any future history if we're going back and then navigating forward
        const currentIndex = navigationHistory.indexOf(tab);
        if (currentIndex !== -1) {
            navigationHistory = navigationHistory.slice(0, currentIndex + 1);
        }
        
        // Add new tab to history
        navigationHistory.push(tab);
        
        // Limit history length
        if (navigationHistory.length > maxHistoryLength) {
            navigationHistory.shift();
        }
    }
    
    // Handle back navigation
    function handleBackNavigation() {
        if (navigationHistory.length > 1) {
            // Remove current tab
            navigationHistory.pop();
            
            // Go to previous tab
            const previousTab = navigationHistory[navigationHistory.length - 1];
            navigateToTab(previousTab);
            return true; // Prevent default browser back
        }
        return false; // Allow default browser back (exit game)
    }
    
    // Navigate to specific tab
    function navigateToTab(tabName) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Remove active class from all nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected tab
        const selectedTab = document.getElementById(`${tabName}-tab`);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
        
        // Add active class to corresponding nav button
        const navBtn = document.querySelector(`[data-page="${tabName}"]`);
        if (navBtn) {
            navBtn.classList.add('active');
        }
    }
    
    // Override navigation event listeners to track history
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const page = btn.dataset.page;
        
        if (page && page !== 'center') {
            // Remove existing listener and add new one
            btn.replaceWith(btn.cloneNode(true));
            const newBtn = document.querySelector(`[data-page="${page}"]`);
            
            newBtn.addEventListener('click', () => {
                addToHistory(page);
                navigateToTab(page);
            });
        }
    });
    
    // Handle browser back button
    window.addEventListener('popstate', (event) => {
        if (handleBackNavigation()) {
            // Push a new state to prevent browser from actually going back
            history.pushState(null, null, location.href);
        }
    });
    
    // Handle Android hardware back button
    if (window.cordova || window.PhoneGap || window.phonegap) {
        document.addEventListener('backbutton', () => {
            if (handleBackNavigation()) {
                // Prevent default back button behavior
                return false;
            }
        }, false);
    }
    
    // Handle swipe gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    const minSwipeDistance = 50;
    const maxVerticalDistance = 100; // Prevent vertical swipes from triggering back
    
    document.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
        touchStartY = event.changedTouches[0].screenY;
        
        // Show gesture indicator when starting from left edge
        if (touchStartX < 30) {
            const indicator = document.getElementById('backGestureIndicator');
            if (indicator) {
                indicator.classList.add('active');
            }
            document.body.classList.add('swipe-active');
        }
    }, false);
    
    document.addEventListener('touchmove', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        touchEndY = event.changedTouches[0].screenY;
        
        // Update indicator during swipe
        if (touchStartX < 30) {
            const indicator = document.getElementById('backGestureIndicator');
            if (indicator) {
                const progress = Math.min((touchEndX - touchStartX) / minSwipeDistance, 1);
                indicator.style.opacity = progress * 0.8;
                indicator.style.width = (4 + progress * 4) + 'px';
            }
        }
    }, false);
    
    document.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        touchEndY = event.changedTouches[0].screenY;
        
        // Hide indicator
        const indicator = document.getElementById('backGestureIndicator');
        if (indicator) {
            indicator.classList.remove('active');
            indicator.style.opacity = '';
            indicator.style.width = '';
        }
        document.body.classList.remove('swipe-active');
        
        handleSwipeGesture();
    }, false);
    
    function handleSwipeGesture() {
        const swipeDistance = touchEndX - touchStartX;
        const verticalDistance = Math.abs(touchEndY - touchStartY);
        
        // Only trigger back if it's a horizontal swipe from the left edge
        // and not too much vertical movement
        if (swipeDistance > minSwipeDistance && 
            touchStartX < 30 && 
            verticalDistance < maxVerticalDistance) {
            handleBackNavigation();
        }
    }
    
    // Initialize history with current active tab
    const activeTab = document.querySelector('.tab-content.active');
    if (activeTab) {
        const tabId = activeTab.id.replace('-tab', '');
        navigationHistory = [tabId];
    }
    
    // Push initial state to history
    history.pushState(null, null, location.href);
}

// Load game state from localStorage
function loadGameState() {
    const savedState = localStorage.getItem('businessGameState');
    if (savedState) {
        const parsed = JSON.parse(savedState);
        
        // Merge saved state with default state, preserving nested objects
        gameState.balance = parsed.balance || gameState.balance;
        gameState.totalEarnings = parsed.totalEarnings || gameState.totalEarnings;
        gameState.currentStage = parsed.currentStage || gameState.currentStage;
        gameState.stageProgress = parsed.stageProgress || gameState.stageProgress;
        gameState.stageTarget = parsed.stageTarget || gameState.stageTarget;
        gameState.incomePerSecond = parsed.incomePerSecond || gameState.incomePerSecond;
        gameState.currentCity = parsed.currentCity || gameState.currentCity;
        gameState.unlockedCities = parsed.unlockedCities || gameState.unlockedCities;
        
        // Merge ventures (preserve default structure but update saved values)
        if (parsed.ventures) {
            Object.keys(parsed.ventures).forEach(ventureId => {
                if (gameState.ventures[ventureId]) {
                    gameState.ventures[ventureId] = { ...gameState.ventures[ventureId], ...parsed.ventures[ventureId] };
                }
            });
        }
        
        // Merge assets
        if (parsed.assets) {
            Object.keys(parsed.assets).forEach(assetId => {
                if (gameState.assets[assetId]) {
                    gameState.assets[assetId] = { ...gameState.assets[assetId], ...parsed.assets[assetId] };
                }
            });
        }
        
        // Merge other collections
        gameState.carCollection = parsed.carCollection || gameState.carCollection;
        gameState.planeCollection = parsed.planeCollection || gameState.planeCollection;
        gameState.luxuryCollection = parsed.luxuryCollection || gameState.luxuryCollection;
        gameState.cryptoHoldings = parsed.cryptoHoldings || gameState.cryptoHoldings;
        gameState.cryptoBalance = parsed.cryptoBalance || gameState.cryptoBalance;
        gameState.lifeStats = parsed.lifeStats || gameState.lifeStats;
        gameState.loveLife = parsed.loveLife || gameState.loveLife;
        gameState.lastSave = parsed.lastSave || gameState.lastSave;
        
        // Calculate offline earnings
        const now = Date.now();
        const timeDiff = (now - gameState.lastSave) / 1000; // seconds
        const offlineEarnings = timeDiff * gameState.incomePerSecond;
        
        if (offlineEarnings > 0) {
            gameState.balance += offlineEarnings;
            gameState.totalEarnings += offlineEarnings;
            showNotification(`Welcome back! You earned $${formatNumber(offlineEarnings)} while away.`, 'success');
        }
    }
}

// Save game state to localStorage
function saveGameState() {
    gameState.lastSave = Date.now();
    localStorage.setItem('businessGameState', JSON.stringify(gameState));
}

// Update UI elements
function updateUI() {
    balanceElement.textContent = `$${formatNumber(gameState.balance)}`;
    currentStageElement.textContent = gameState.currentStage;
    
    // Update investment modal balance if it exists
    const investmentBalanceElement = document.getElementById('investmentBalance');
    if (investmentBalanceElement) {
        investmentBalanceElement.textContent = `$${formatNumber(gameState.balance)}`;
    }
    
    const currentStageIndex = stages.findIndex(s => s.name === gameState.currentStage);
    const nextStageData = stages[currentStageIndex + 1];
    
    if (nextStageData) {
        gameState.stageTarget = nextStageData.target;
        nextRewardElement.textContent = `Next: ${nextStageData.reward}`;
    } else {
        gameState.stageTarget = gameState.stageTarget;
        nextRewardElement.textContent = 'Max Level Reached!';
    }
    
    const progress = (gameState.stageProgress / gameState.stageTarget) * 100;
    progressFillElement.style.width = `${Math.min(progress, 100)}%`;
    stageProgressElement.textContent = `$${formatNumber(gameState.stageProgress)} / $${formatNumber(gameState.stageTarget)}`;
    
    updateVentures();
    updateAssets();
    updateChart();
    updateLifeStats();
    updateLoveLife();
    updateCities();
    updateCollections();
    updateCrypto();
    checkCityUnlocks();
}

// Update ventures display
function updateVentures() {
    Object.keys(gameState.ventures).forEach(ventureId => {
        const venture = gameState.ventures[ventureId];
        const card = document.querySelector(`[data-venture="${ventureId}"]`);
        
        if (card) {
            const levelElement = card.querySelector('.level-value');
            const buyBtn = card.querySelector('.buy-btn');
            const upgradeBtn = card.querySelector('.upgrade-btn');
            const managerBtn = card.querySelector('.manager-btn');
            
            // Update level display
            if (levelElement) {
                levelElement.textContent = venture.level;
            }
            
            if (venture.owned) {
                card.classList.add('purchased');
                card.querySelector('.venture-cost').textContent = 'Owned';
                card.querySelector('.venture-income').textContent = `+$${formatNumber(venture.income)}/min`;
                
                // Show/hide buttons based on purchase status
                if (buyBtn) buyBtn.style.display = 'none';
                if (upgradeBtn) {
                    upgradeBtn.style.display = 'block';
                    upgradeBtn.textContent = `Upgrade $${formatNumber(venture.upgradeCost)}`;
                    upgradeBtn.disabled = gameState.balance < venture.upgradeCost;
                }
                if (managerBtn) {
                    if (venture.manager) {
                        managerBtn.style.display = 'none';
                    } else {
                        managerBtn.style.display = 'block';
                        managerBtn.textContent = `Manager $${formatNumber(venture.managerCost)}`;
                        managerBtn.disabled = gameState.balance < venture.managerCost;
                    }
                }
            } else {
                card.classList.remove('purchased');
                card.querySelector('.venture-cost').textContent = `$${formatNumber(venture.cost)}`;
                card.querySelector('.venture-income').textContent = `+$${formatNumber(venture.income)}/min`;
                
                // Show only buy button for unpurchased ventures
                if (buyBtn) {
                    buyBtn.style.display = 'block';
                    buyBtn.disabled = gameState.balance < venture.cost;
                }
                if (upgradeBtn) upgradeBtn.style.display = 'none';
                if (managerBtn) managerBtn.style.display = 'none';
            }
        }
    });
}

// Update assets display
function updateAssets() {
    Object.keys(gameState.assets).forEach(assetId => {
        const asset = gameState.assets[assetId];
        const card = document.getElementById(`${assetId}Asset`);
        
        if (card) {
            const levelDisplay = asset.level === 0 ? 'None' : asset.level === asset.maxLevel ? 'MAX' : `Level ${asset.level}`;
            card.querySelector('.asset-level').textContent = levelDisplay;
            
            if (asset.level >= asset.maxLevel) {
                card.classList.add('maxed');
                card.querySelector('.asset-upgrade').textContent = 'Max Level';
            } else {
                card.classList.remove('maxed');
                const action = asset.level === 0 ? 'Buy' : 'Upgrade';
                card.querySelector('.asset-upgrade').textContent = `${action} $${formatNumber(asset.upgradeCost)}`;
            }
        }
    });
}

// Update earnings chart
function updateChart() {
    const bars = document.querySelectorAll('.bar');
    const maxIncome = Math.max(...Object.values(gameState.ventures).filter(v => v.purchased).map(v => v.income), 100);
    
    bars.forEach((bar, index) => {
        const height = (gameState.totalEarnings / maxIncome) * 100;
        bar.style.height = `${Math.min(height, 100)}%`;
    });
}

// Update life stats display
function updateLifeStats() {
    const stats = gameState.lifeStats;
    document.getElementById('healthValue').textContent = stats.health;
    document.getElementById('happinessValue').textContent = stats.happiness;
    document.getElementById('socialValue').textContent = stats.social;
    document.getElementById('intelligenceValue').textContent = stats.intelligence;
    
    document.querySelector('.health-fill').style.width = `${Math.min(stats.health, 100)}%`;
    document.querySelector('.happiness-fill').style.width = `${Math.min(stats.happiness, 100)}%`;
    document.querySelector('.social-fill').style.width = `${Math.min(stats.social, 100)}%`;
    document.querySelector('.intelligence-fill').style.width = `${Math.min(stats.intelligence, 100)}%`;
}

// Update love life display
function updateLoveLife() {
    document.getElementById('relationshipStatus').textContent = gameState.loveLife.relationship;
    document.getElementById('partnerName').textContent = gameState.loveLife.partnerName || 'None';
    document.getElementById('relationshipLevel').textContent = gameState.loveLife.relationshipLevel;
}

// Update cities display
function updateCities() {
    document.getElementById('currentCityName').textContent = gameState.currentCity;
    
    document.querySelectorAll('.city-card').forEach(card => {
        const cityName = card.dataset.city;
        const cityData = cities.find(c => c.name === cityName);
        
        if (gameState.unlockedCities.includes(cityName)) {
            card.classList.remove('locked');
            const cityBonusElement = card.querySelector('.city-bonus');
            if (cityBonusElement) {
                cityBonusElement.textContent = `${cityData.bonus}x Income`;
            }
            if (cityName === gameState.currentCity) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        } else {
            card.classList.add('locked');
            const cityRequirementElement = card.querySelector('.city-requirement');
            if (cityRequirementElement) {
                cityRequirementElement.textContent = `Unlock at ${cityData.unlockStage}`;
            }
        }
    });
}

// Check for city unlocks
function checkCityUnlocks() {
    cities.forEach(city => {
        if (!gameState.unlockedCities.includes(city.name) && gameState.currentStage === city.unlockStage) {
            gameState.unlockedCities.push(city.name);
            showNotification(`🏙️ ${city.name} unlocked! Move to new city for ${city.bonus}x income bonus!`, 'success');
        }
    });
}

// Start income generation
function startIncomeGeneration() {
    setInterval(() => {
        let totalIncome = 0;
        Object.values(gameState.ventures).forEach(venture => {
            if (venture.purchased) {
                totalIncome += venture.income / 60; // Convert per minute to per second
            }
        });
        
        // Apply prestige multiplier
        totalIncome *= gameState.prestige.multiplier;
        
        gameState.incomePerSecond = totalIncome;
        gameState.balance += totalIncome;
        gameState.totalEarnings += totalIncome;
        gameState.stageProgress += totalIncome;
        
        updateUI();
        checkStageProgress();
    }, 1000);
}

// Check stage progress and rewards
function checkStageProgress() {
    const currentStageIndex = stages.findIndex(s => s.name === gameState.currentStage);
    const nextStageData = stages[currentStageIndex + 1];
    
    if (nextStageData && gameState.stageProgress >= nextStageData.target) {
        gameState.currentStage = nextStageData.name;
        showRewardModal(nextStageData.reward, nextStageData.rewardIcon);
        showNotification(`Stage Complete! You've reached ${nextStageData.name}!`, 'success');
        
        // Award bonus
        const bonus = nextStageData.target * 0.1; // 10% bonus
        gameState.balance += bonus;
        gameState.stageProgress = nextStageData.target;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Venture purchases
    document.querySelectorAll('.venture-card').forEach(card => {
        card.addEventListener('click', () => {
            const ventureId = card.dataset.venture;
            purchaseVenture(ventureId);
        });
    });
    
    // Asset upgrades
    document.querySelectorAll('.asset-card').forEach(card => {
        card.addEventListener('click', () => {
            const assetId = card.id.replace('Asset', '');
            upgradeAsset(assetId);
        });
    });
    
    // Collection purchases
    document.querySelectorAll('.collection-item').forEach(item => {
        item.addEventListener('click', () => {
            if (item.dataset.car) {
                purchaseCar(item.dataset.car);
            } else if (item.dataset.plane) {
                purchasePlane(item.dataset.plane);
            } else if (item.dataset.luxury) {
                purchaseLuxury(item.dataset.luxury);
            }
        });
    });
    
    // City selection
    document.querySelectorAll('.city-card').forEach(card => {
        card.addEventListener('click', () => {
            const cityName = card.dataset.city;
            selectCity(cityName);
        });
    });
    
    // Life activities
    document.querySelectorAll('.activity-card').forEach(card => {
        card.addEventListener('click', () => {
            const activityName = card.dataset.activity;
            performLifeActivity(activityName);
        });
    });
    
    // Partner meeting
    document.querySelectorAll('.meet-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const partnerCard = btn.closest('.partner-card');
            const partnerName = partnerCard.dataset.partner;
            meetPartner(partnerName);
        });
    });
    
    // Venture purchases
    document.querySelectorAll('.venture-card').forEach(card => {
        card.addEventListener('click', () => {
            const ventureId = card.dataset.venture;
            purchaseVenture(ventureId);
        });
    });
    
    // Date activities
    document.querySelectorAll('.date-card').forEach(card => {
        card.addEventListener('click', () => {
            const dateName = card.dataset.date;
            goOnDate(dateName);
        });
    });
    
    // Transfer button
    transferBtn.addEventListener('click', () => {
        showModal('transfer');
    });
    
    // Top up button (simulated)
    topupBtn.addEventListener('click', () => {
        gameState.balance += 1000;
        updateUI();
        showNotification('$1,000 added to your account!', 'success');
    });
    
    // Main action button
    mainActionBtn.addEventListener('click', () => {
        // Remove active class from all nav buttons and tabs
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        
        // Show invest tab
        const investTab = document.getElementById('invest-tab');
        if (investTab) {
            investTab.classList.add('active');
        }
    });
    
    // Modal controls
    modalOverlay.addEventListener('click', () => {
        hideModal('transfer');
        hideModal('reward');
        hideModal('investment');
        hideModal('withdraw');
        hideModal('cryptoGraph');
        hideModal('stockTrade');
        hideModal('prestige');
    });
    
    // Crypto transfer button
    const cryptoTransferBtn = document.getElementById('cryptoTransferBtn');
    if (cryptoTransferBtn) {
        cryptoTransferBtn.addEventListener('click', transferToCrypto);
    }
    
    // Investment buy buttons
    document.querySelectorAll('.invest-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.investment-card');
            const investmentId = card.dataset.investment;
            buyCrypto(investmentId);
        });
    });
    
    // Transfer modal input listener
    const transferAmountInput = document.getElementById('transferAmount');
    if (transferAmountInput) {
        transferAmountInput.addEventListener('input', updateTransferConversion);
    }
    
    // Investment modal input listener
    const investmentAmountInput = document.getElementById('investmentAmount');
    if (investmentAmountInput) {
        investmentAmountInput.addEventListener('input', updateInvestmentConversion);
    }
    
    // Withdraw modal input listener
    const withdrawAmountInput = document.getElementById('withdrawAmount');
    if (withdrawAmountInput) {
        withdrawAmountInput.addEventListener('input', updateWithdrawConversion);
    }
    
    // Stock market event listeners
    document.querySelectorAll('.stock-buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.stock-card');
            const stockId = card.dataset.stock;
            buyStock(stockId);
        });
    });
    
    // Add sell buttons to stock cards
    document.querySelectorAll('.stock-card').forEach(card => {
        const stockId = card.dataset.stock;
        const sellBtn = document.createElement('button');
        sellBtn.className = 'stock-sell-btn';
        sellBtn.textContent = 'Sell';
        sellBtn.onclick = () => sellStock(stockId);
        card.appendChild(sellBtn);
    });
    
    // Stock trade modal input listener
    const stockTradeAmountInput = document.getElementById('stockTradeAmount');
    if (stockTradeAmountInput) {
        stockTradeAmountInput.addEventListener('input', updateStockTradeConversion);
    }
}

// Purchase venture
function purchaseVenture(ventureId) {
    const venture = gameState.ventures[ventureId];
    
    if (!venture) {
        showNotification('Venture not found!', 'error');
        return;
    }
    
    if (venture.owned) {
        showNotification('You already own this venture!', 'warning');
        return;
    }
    
    if (gameState.balance >= venture.cost) {
        gameState.balance -= venture.cost;
        venture.owned = true;
        venture.purchased = true; // Keep for backward compatibility
        
        updateUI();
        showNotification(`Purchased ${ventureId}! Now earning $${formatNumber(venture.income)}/min`, 'success');
        
        // Increase cost for next purchase (optional)
        venture.cost = Math.floor(venture.cost * 1.5);
    } else {
        showNotification('Insufficient funds!', 'error');
    }
}

// Upgrade venture
function upgradeVenture(ventureId) {
    const venture = gameState.ventures[ventureId];
    
    if (!venture.owned) {
        showNotification('You must purchase the venture first!', 'error');
        return;
    }
    
    if (gameState.balance < venture.upgradeCost) {
        showNotification('Insufficient funds for upgrade!', 'error');
        return;
    }
    
    // Upgrade the venture
    gameState.balance -= venture.upgradeCost;
    venture.level++;
    venture.upgradeCost = Math.floor(venture.upgradeCost * 2);
    
    // Recalculate income (50% increase per level)
    venture.income = Math.floor(venture.baseIncome * Math.pow(1.5, venture.level - 1));
    
    updateUI();
    updateVentures();
    showNotification(`${ventureId} upgraded to Level ${venture.level}! Income increased to $${formatNumber(venture.income)}/min`, 'success');
}

// Hire manager for venture
function hireManager(ventureId) {
    const venture = gameState.ventures[ventureId];
    
    if (!venture.owned) {
        showNotification('You must purchase the venture first!', 'error');
        return;
    }
    
    if (venture.manager) {
        showNotification('Manager already hired!', 'warning');
        return;
    }
    
    if (gameState.balance < venture.managerCost) {
        showNotification('Insufficient funds for manager!', 'error');
        return;
    }
    
    // Hire the manager
    gameState.balance -= venture.managerCost;
    venture.manager = true;
    
    // Double the income with manager
    venture.income = venture.income * 2;
    
    updateUI();
    updateVentures();
    showNotification(`Manager hired for ${ventureId}! Income doubled to $${formatNumber(venture.income)}/min`, 'success');
}

// Upgrade asset
function upgradeAsset(assetId) {
    const asset = gameState.assets[assetId];
    
    if (asset.level >= asset.maxLevel) {
        showNotification(`${assetId} is already at max level!`, 'warning');
        return;
    }
    
    if (gameState.balance >= asset.upgradeCost) {
        gameState.balance -= asset.upgradeCost;
        asset.level++;
        
        // Update upgrade cost
        if (asset.level < asset.maxLevel) {
            asset.upgradeCost = Math.floor(asset.upgradeCost * 1.8);
        }
        
        updateUI();
        showNotification(`${assetId} upgraded to ${asset.level === asset.maxLevel ? 'MAX' : 'Level ' + asset.level}!`, 'success');
        
        // Special effects for max level
        if (asset.level >= asset.maxLevel) {
            showNotification(`🎉 ${assetId} reached maximum level! Bonus income unlocked!`, 'success');
            // Add bonus income for max level assets
            Object.values(gameState.ventures).forEach(venture => {
                if (venture.purchased) {
                    venture.income = Math.floor(venture.income * 1.1);
                }
            });
        }
    } else {
        showNotification('Insufficient funds!', 'error');
    }
}

// Transfer functionality
function confirmTransfer() {
    const amount = parseFloat(document.getElementById('transferAmount').value);
    
    if (isNaN(amount) || amount <= 0) {
        showNotification('Please enter a valid amount!', 'error');
        return;
    }
    
    if (amount > gameState.balance) {
        showNotification('Insufficient funds!', 'error');
        return;
    }
    
    gameState.balance -= amount;
    updateUI();
    hideModal('transfer');
    document.getElementById('transferAmount').value = '';
    showNotification(`$${formatNumber(amount)} transferred successfully!`, 'success');
}

// Modal functions
function showModal(type) {
    modalOverlay.classList.add('active');
    
    if (type === 'transfer') {
        transferModal.classList.add('active');
    } else if (type === 'reward') {
        rewardModal.classList.add('active');
    } else if (type === 'investment') {
        investmentModal.classList.add('active');
    } else if (type === 'withdraw') {
        withdrawModal.classList.add('active');
    } else if (type === 'cryptoGraph') {
        cryptoGraphModal.classList.add('active');
        updateCryptoGraph();
    } else if (type === 'stockTrade') {
        stockTradeModal.classList.add('active');
    } else if (type === 'prestige') {
        prestigeModal.classList.add('active');
        updatePrestigeModal();
    }
}

function hideModal(type) {
    modalOverlay.classList.remove('active');
    
    if (type === 'transfer') {
        transferModal.classList.remove('active');
    } else if (type === 'reward') {
        rewardModal.classList.remove('active');
    } else if (type === 'investment') {
        investmentModal.classList.remove('active');
    } else if (type === 'withdraw') {
        withdrawModal.classList.remove('active');
    } else if (type === 'cryptoGraph') {
        cryptoGraphModal.classList.remove('active');
    } else if (type === 'stockTrade') {
        stockTradeModal.classList.remove('active');
    } else if (type === 'prestige') {
        prestigeModal.classList.remove('active');
    }
}

// Show reward modal
function showRewardModal(reward, icon) {
    document.getElementById('rewardIcon').textContent = icon;
    document.getElementById('rewardTitle').textContent = reward + ' Unlocked!';
    document.getElementById('rewardDescription').textContent = `Congratulations! You've unlocked ${reward} for reaching ${gameState.currentStage}!`;
    showModal('reward');
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 
                     type === 'error' ? 'linear-gradient(135deg, #ef4444, #dc2626)' :
                     type === 'warning' ? 'linear-gradient(135deg, #f59e0b, #d97706)' :
                     'linear-gradient(135deg, #3b82f6, #2563eb)'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        font-size: 14px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Format numbers with commas
function formatNumber(num) {
    return Math.floor(num).toLocaleString();
}

// Update time display
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.querySelector('.time').textContent = `${hours}:${minutes}`;
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideModal('transfer');
        hideModal('reward');
    }
    
    // Number keys for quick purchases
    if (e.key >= '1' && e.key <= '4') {
        const ventureIndex = parseInt(e.key) - 1;
        const ventures = Object.keys(gameState.ventures);
        if (ventures[ventureIndex]) {
            purchaseVenture(ventures[ventureIndex]);
        }
    }
});

// Add touch feedback for mobile
document.querySelectorAll('button, .venture-card, .asset-card').forEach(element => {
    element.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    element.addEventListener('touchend', function() {
        this.style.transform = '';
    });
});

// Select city
function selectCity(cityName) {
    if (!gameState.unlockedCities.includes(cityName)) {
        showNotification('This city is locked! Reach a higher stage to unlock it.', 'warning');
        return;
    }
    
    gameState.currentCity = cityName;
    const cityData = cities.find(c => c.name === cityName);
    showNotification(`Moved to ${cityName}! Income bonus: ${cityData.bonus}x`, 'success');
    updateUI();
}

// Perform life activity
function performLifeActivity(activityName) {
    const activity = lifeActivities.find(a => a.name === activityName);
    
    if (gameState.balance >= activity.cost) {
        gameState.balance -= activity.cost;
        
        // Apply effects
        Object.keys(activity.effect).forEach(stat => {
            if (gameState.lifeStats[stat] !== undefined) {
                gameState.lifeStats[stat] = Math.min(gameState.lifeStats[stat] + activity.effect[stat], 100);
            }
        });
        
        updateUI();
        showNotification(`Completed ${activityName}!`, 'success');
    } else {
        showNotification('Insufficient funds!', 'error');
    }
}

// Meet partner
function meetPartner(partnerName) {
    if (gameState.loveLife.partnerName) {
        showNotification('You already have a partner!', 'warning');
        return;
    }
    
    const partner = partners.find(p => p.name === partnerName);
    gameState.loveLife.partnerName = partnerName;
    gameState.loveLife.relationship = 'Dating';
    gameState.loveLife.relationshipLevel = 10;
    
    showNotification(`Started dating ${partnerName}!`, 'success');
    updateUI();
}

// Go on date
function goOnDate(dateName) {
    if (!gameState.loveLife.partnerName) {
        showNotification('You need a partner first! Meet someone in the Potential Partners section.', 'warning');
        return;
    }
    
    const date = loveActivities.find(d => d.name === dateName);
    
    if (gameState.balance >= date.cost) {
        gameState.balance -= date.cost;
        gameState.loveLife.relationshipLevel += date.effect.relationship;
        gameState.loveLife.dates++;
        
        // Update relationship status based on level
        if (gameState.loveLife.relationshipLevel >= 50) {
            gameState.loveLife.relationship = 'In Love';
        } else if (gameState.loveLife.relationshipLevel >= 25) {
            gameState.loveLife.relationship = 'Serious';
        }
        
        showNotification(`Had a great ${dateName}! Relationship level: ${gameState.loveLife.relationshipLevel}`, 'success');
        updateUI();
    } else {
        showNotification('Insufficient funds!', 'error');
    }
}

// Purchase car
function purchaseCar(carName) {
    const car = carTypes.find(c => c.name === carName);
    
    if (!car) {
        showNotification('Car not found!', 'error');
        return;
    }
    
    if (gameState.carCollection.includes(carName)) {
        showNotification('You already own this car!', 'warning');
        return;
    }
    
    if (gameState.balance >= car.cost) {
        gameState.balance -= car.cost;
        gameState.carCollection.push(carName);
        gameState.incomePerSecond += car.income / 60;
        
        showNotification(`Purchased ${carName}! +$${car.income}/min`, 'success');
        updateUI();
        updateCollections();
    } else {
        showNotification('Insufficient funds!', 'error');
    }
}

// Purchase plane
function purchasePlane(planeName) {
    const plane = planeTypes.find(p => p.name === planeName);
    
    if (!plane) {
        showNotification('Plane not found!', 'error');
        return;
    }
    
    if (gameState.planeCollection.includes(planeName)) {
        showNotification('You already own this plane!', 'warning');
        return;
    }
    
    if (gameState.balance >= plane.cost) {
        gameState.balance -= plane.cost;
        gameState.planeCollection.push(planeName);
        gameState.incomePerSecond += plane.income / 60;
        
        showNotification(`Purchased ${planeName}! +$${plane.income}/min`, 'success');
        updateUI();
        updateCollections();
    } else {
        showNotification('Insufficient funds!', 'error');
    }
}

// Purchase luxury item
function purchaseLuxury(luxuryName) {
    const luxury = luxuryItems.find(l => l.name === luxuryName);
    
    if (!luxury) {
        showNotification('Luxury item not found!', 'error');
        return;
    }
    
    if (gameState.luxuryCollection.includes(luxuryName)) {
        showNotification('You already own this luxury item!', 'warning');
        return;
    }
    
    if (gameState.balance >= luxury.cost) {
        gameState.balance -= luxury.cost;
        gameState.luxuryCollection.push(luxuryName);
        gameState.incomePerSecond += luxury.income / 60;
        
        showNotification(`Purchased ${luxuryName}! +$${luxury.income}/min`, 'success');
        updateUI();
        updateCollections();
    } else {
        showNotification('Insufficient funds!', 'error');
    }
}

// Update collections display
function updateCollections() {
    // Update car collection
    document.querySelectorAll('#carCollection .collection-item').forEach(item => {
        const carName = item.dataset.car;
        if (gameState.carCollection.includes(carName)) {
            item.classList.add('owned');
            item.classList.remove('locked');
        }
    });
    
    // Update plane collection
    document.querySelectorAll('#planeCollection .collection-item').forEach(item => {
        const planeName = item.dataset.plane;
        if (gameState.planeCollection.includes(planeName)) {
            item.classList.add('owned');
            item.classList.remove('locked');
        }
    });
    
    // Update luxury collection
    document.querySelectorAll('#luxuryCollection .collection-item').forEach(item => {
        const luxuryName = item.dataset.luxury;
        if (gameState.luxuryCollection.includes(luxuryName)) {
            item.classList.add('owned');
            item.classList.remove('locked');
        }
    });
}

// Update crypto display
function updateCrypto() {
    // Update crypto balance display
    const totalCryptoUSD = Object.keys(cryptoInvestments).reduce((total, crypto) => {
        const investment = cryptoInvestments[crypto];
        const holding = gameState.cryptoHoldings[crypto];
        return total + (holding && holding.amount ? holding.amount * investment.price : 0);
    }, 0);
    
    gameState.cryptoBalance = totalCryptoUSD;
    
    // Update UI elements
    const cryptoBalanceElement = document.getElementById('cryptoBalance');
    const cryptoUSDElement = document.getElementById('cryptoUSD');
    const cryptoProfitElement = document.getElementById('cryptoProfit');
    const cryptoProfitChangeElement = document.getElementById('cryptoProfitChange');
    
    if (cryptoBalanceElement) {
        const btcEquivalent = totalCryptoUSD / 45000;
        cryptoBalanceElement.textContent = `${btcEquivalent.toFixed(6)} BTC`;
    }
    
    if (cryptoUSDElement) {
        cryptoUSDElement.textContent = `$${formatNumber(totalCryptoUSD)}`;
    }
    
    // Calculate total profit/loss
    const totalInvested = Object.keys(cryptoInvestments).reduce((total, crypto) => {
        const holding = gameState.cryptoHoldings[crypto];
        return total + (holding && holding.invested ? holding.invested : 0);
    }, 0);
    
    const profit = totalCryptoUSD - totalInvested;
    const profitPercentage = totalInvested > 0 ? (profit / totalInvested) * 100 : 0;
    
    if (cryptoProfitElement) {
        cryptoProfitElement.textContent = `$${formatNumber(profit)}`;
    }
    
    if (cryptoProfitChangeElement) {
        cryptoProfitChangeElement.textContent = `${profitPercentage >= 0 ? '+' : ''}${profitPercentage.toFixed(2)}%`;
        cryptoProfitChangeElement.className = `stat-change ${profitPercentage >= 0 ? 'positive' : 'negative'}`;
    }
    
    // Update investment cards
    Object.keys(cryptoInvestments).forEach(cryptoId => {
        const investment = cryptoInvestments[cryptoId];
        const holding = gameState.cryptoHoldings[cryptoId];
        const card = document.querySelector(`[data-investment="${cryptoId}"]`);
        
        if (card && holding) {
            const amountElement = card.querySelector('.investment-amount');
            if (amountElement) {
                amountElement.textContent = `${holding.amount.toFixed(6)} ${investment.symbol}`;
            }
        }
    });
    
    // Update holdings display
    updateHoldingsDisplay();
}

// Update holdings display
function updateHoldingsDisplay() {
    Object.keys(gameState.cryptoHoldings).forEach(cryptoId => {
        const holding = gameState.cryptoHoldings[cryptoId];
        const investment = cryptoInvestments[cryptoId];
        const holdingItem = document.querySelector(`#holdingsGrid .holding-item:nth-child(${Object.keys(cryptoInvestments).indexOf(cryptoId) + 1})`);
        
        if (holdingItem && holding && investment) {
            const amountElement = holdingItem.querySelector('.holding-amount');
            const valueElement = holdingItem.querySelector('.holding-value');
            
            if (amountElement) {
                amountElement.textContent = `${holding.amount.toFixed(6)} ${investment.symbol}`;
            }
            
            if (valueElement) {
                const currentValue = holding.amount * investment.price;
                valueElement.textContent = `$${formatNumber(currentValue)}`;
            }
        }
    });
}

// Transfer to crypto
function transferToCrypto() {
    showModal('transfer');
    document.getElementById('transferBalance').textContent = `$${formatNumber(gameState.balance)}`;
    document.getElementById('transferAmount').value = '';
    updateTransferConversion();
}

// Confirm transfer
function confirmTransfer() {
    const transferAmount = parseFloat(document.getElementById('transferAmount').value);
    
    if (!transferAmount || isNaN(transferAmount)) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    if (transferAmount <= 0) {
        showNotification('Amount must be greater than 0', 'error');
        return;
    }
    
    if (gameState.balance < transferAmount) {
        showNotification('Insufficient balance!', 'error');
        return;
    }
    
    // Convert to BTC and add to crypto balance
    gameState.balance -= transferAmount;
    const btcAmount = transferAmount / 45000;
    gameState.cryptoHoldings.bitcoin.amount += btcAmount;
    gameState.cryptoHoldings.bitcoin.invested += transferAmount;
    
    showNotification(`Transferred $${formatNumber(transferAmount)} to crypto (${btcAmount.toFixed(6)} BTC)`, 'success');
    hideModal('transfer');
    updateUI();
}

// Buy crypto investment
function buyCrypto(cryptoId) {
    const investment = cryptoInvestments[cryptoId];
    
    // Set modal content
    document.getElementById('investmentCryptoIcon').textContent = investment.icon;
    document.getElementById('investmentCryptoName').textContent = investment.name;
    document.getElementById('investmentCryptoPrice').textContent = `$${formatNumber(investment.price)}`;
    
    const changeElement = document.getElementById('investmentCryptoChange');
    changeElement.textContent = `${investment.change >= 0 ? '+' : ''}${investment.change}%`;
    changeElement.className = `price-change ${investment.change >= 0 ? 'positive' : 'negative'}`;
    
    document.getElementById('investmentBalance').textContent = `$${formatNumber(gameState.balance)}`;
    document.getElementById('investmentAmount').value = '';
    
    // Store current crypto ID for confirmation
    window.currentInvestmentId = cryptoId;
    
    showModal('investment');
    updateInvestmentConversion();
}

// Confirm investment
function confirmInvestment() {
    const buyAmount = parseFloat(document.getElementById('investmentAmount').value);
    const cryptoId = window.currentInvestmentId;
    
    if (!cryptoId) {
        showNotification('No investment selected', 'error');
        return;
    }
    
    if (!buyAmount || isNaN(buyAmount)) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    if (buyAmount <= 0) {
        showNotification('Amount must be greater than 0', 'error');
        return;
    }
    
    if (gameState.balance < buyAmount) {
        showNotification('Insufficient balance!', 'error');
        return;
    }
    
    const investment = cryptoInvestments[cryptoId];
    
    // Initialize holding if it doesn't exist
    if (!gameState.cryptoHoldings[cryptoId]) {
        gameState.cryptoHoldings[cryptoId] = { amount: 0, invested: 0 };
    }
    
    // Buy crypto
    const cryptoAmount = buyAmount / investment.price;
    gameState.cryptoHoldings[cryptoId].amount += cryptoAmount;
    gameState.cryptoHoldings[cryptoId].invested += buyAmount;
    
    // Deduct from main balance
    gameState.balance -= buyAmount;
    
    // Ensure values don't exceed reasonable limits
    if (gameState.cryptoHoldings[cryptoId].amount < 0) {
        gameState.cryptoHoldings[cryptoId].amount = 0;
    }
    if (gameState.cryptoHoldings[cryptoId].invested < 0) {
        gameState.cryptoHoldings[cryptoId].invested = 0;
    }
    
    showNotification(`Bought ${cryptoAmount.toFixed(6)} ${investment.symbol} for $${formatNumber(buyAmount)}`, 'success');
    hideModal('investment');
    updateUI();
}

// Update transfer conversion display
function updateTransferConversion() {
    const amount = parseFloat(document.getElementById('transferAmount').value) || 0;
    const btcAmount = amount / 45000;
    document.getElementById('cryptoConversion').textContent = `${btcAmount.toFixed(6)} BTC`;
}

// Update investment conversion display
function updateInvestmentConversion() {
    const amount = parseFloat(document.getElementById('investmentAmount').value) || 0;
    const cryptoId = window.currentInvestmentId;
    
    if (cryptoId) {
        const investment = cryptoInvestments[cryptoId];
        const cryptoAmount = amount / investment.price;
        document.getElementById('investmentConversion').textContent = `${cryptoAmount.toFixed(6)} ${investment.symbol}`;
    }
}

// Withdraw/liquidate crypto investment
function withdrawCrypto(cryptoId) {
    const investment = cryptoInvestments[cryptoId];
    const holding = gameState.cryptoHoldings[cryptoId];
    
    if (holding.amount <= 0) {
        showNotification('No holdings to withdraw!', 'error');
        return;
    }
    
    // Set modal content for withdrawal
    document.getElementById('withdrawCryptoIcon').textContent = investment.icon;
    document.getElementById('withdrawCryptoName').textContent = investment.name;
    document.getElementById('withdrawCryptoPrice').textContent = `$${formatNumber(investment.price)}`;
    
    const changeElement = document.getElementById('withdrawCryptoChange');
    changeElement.textContent = `${investment.change >= 0 ? '+' : ''}${investment.change}%`;
    changeElement.className = `price-change ${investment.change >= 0 ? 'positive' : 'negative'}`;
    
    document.getElementById('withdrawCryptoAmount').textContent = `${holding.amount.toFixed(6)} ${investment.symbol}`;
    document.getElementById('withdrawCryptoValue').textContent = `$${formatNumber(holding.amount * investment.price)}`;
    document.getElementById('withdrawCryptoInvested').textContent = `$${formatNumber(holding.invested)}`;
    
    const profit = (holding.amount * investment.price) - holding.invested;
    const profitElement = document.getElementById('withdrawCryptoProfit');
    profitElement.textContent = `$${formatNumber(profit)}`;
    profitElement.className = profit >= 0 ? 'profit-positive' : 'profit-negative';
    
    document.getElementById('withdrawAmount').value = '';
    document.getElementById('withdrawAmount').max = holding.amount;
    
    // Store current crypto ID for withdrawal
    window.currentWithdrawId = cryptoId;
    
    showModal('withdraw');
    updateWithdrawConversion();
}

// Confirm withdrawal
function confirmWithdrawal() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    const cryptoId = window.currentWithdrawId;
    
    if (!cryptoId) {
        showNotification('No investment selected', 'error');
        return;
    }
    
    if (!withdrawAmount || isNaN(withdrawAmount)) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    if (withdrawAmount <= 0) {
        showNotification('Amount must be greater than 0', 'error');
        return;
    }
    
    // Initialize holding if it doesn't exist
    if (!gameState.cryptoHoldings[cryptoId]) {
        gameState.cryptoHoldings[cryptoId] = { amount: 0, invested: 0 };
    }
    
    const holding = gameState.cryptoHoldings[cryptoId];
    
    if (withdrawAmount > holding.amount) {
        showNotification('Insufficient holdings!', 'error');
        return;
    }
    
    const investment = cryptoInvestments[cryptoId];
    const usdValue = withdrawAmount * investment.price;
    
    // Withdraw crypto
    const proportionOfHolding = withdrawAmount / holding.amount;
    const investedToReduce = proportionOfHolding * holding.invested;
    
    holding.amount = Math.max(0, holding.amount - withdrawAmount);
    holding.invested = Math.max(0, holding.invested - investedToReduce);
    
    // Clear holding if amount is effectively zero
    if (holding.amount < 0.000001) {
        holding.amount = 0;
        holding.invested = 0;
    }
    
    // Add USD to balance
    gameState.balance += usdValue;
    
    showNotification(`Withdrew ${withdrawAmount.toFixed(6)} ${investment.symbol} for $${formatNumber(usdValue)}`, 'success');
    hideModal('withdraw');
    updateUI();
}

// Update withdraw conversion display
function updateWithdrawConversion() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value) || 0;
    const cryptoId = window.currentWithdrawId;
    
    if (cryptoId) {
        const investment = cryptoInvestments[cryptoId];
        const usdValue = amount * investment.price;
        document.getElementById('withdrawConversion').textContent = `$${formatNumber(usdValue)}`;
    }
}

// Withdraw all crypto holdings
function withdrawAllCrypto() {
    let totalValue = 0;
    let totalInvested = 0;
    let hasHoldings = false;
    
    // Calculate total value and check if user has any holdings
    Object.keys(gameState.cryptoHoldings).forEach(cryptoId => {
        const holding = gameState.cryptoHoldings[cryptoId];
        const investment = cryptoInvestments[cryptoId];
        
        if (holding && holding.amount > 0 && investment) {
            hasHoldings = true;
            const currentValue = holding.amount * investment.price;
            totalValue += currentValue;
            totalInvested += holding.invested;
        }
    });
    
    if (!hasHoldings) {
        showNotification('No crypto holdings to withdraw!', 'error');
        return;
    }
    
    // Confirm withdrawal
    const profit = totalValue - totalInvested;
    const profitText = profit >= 0 ? `Profit: $${formatNumber(profit)}` : `Loss: $${formatNumber(Math.abs(profit))}`;
    const profitClass = profit >= 0 ? 'profit-positive' : 'profit-negative';
    
    // Show toast notification with withdrawal details
    showNotification(`Withdrawing all crypto: $${formatNumber(totalValue)} (${profitText})`, 'info');
    
    // Withdraw all holdings
    Object.keys(gameState.cryptoHoldings).forEach(cryptoId => {
        const holding = gameState.cryptoHoldings[cryptoId];
        const investment = cryptoInvestments[cryptoId];
        
        if (holding && holding.amount > 0 && investment) {
            const currentValue = holding.amount * investment.price;
            
            // Add to balance
            gameState.balance += currentValue;
            
            // Reset holdings
            holding.amount = 0;
            holding.invested = 0;
        }
    });
    
    // Update displays
    updateCrypto();
    updateHoldingsDisplay();
    updateUI();
    
    // Show success notification
    showNotification(`Successfully withdrew all crypto for $${formatNumber(totalValue)} (${profitText})`, 'success');
}

// Simulate stock price changes
function simulateStockPrices() {
    Object.keys(stockMarket).forEach(stockId => {
        const stock = stockMarket[stockId];
        
        // Random market event (10% chance)
        if (Math.random() < 0.1) {
            const events = [
                { type: 'scandal', impact: -0.15, message: `${stock.displayName} faces scandal!` },
                { type: 'viral', impact: 0.20, message: `${stock.displayName} goes viral!` },
                { type: 'launch', impact: 0.12, message: `${stock.displayName} launches new product!` },
                { type: 'recession', impact: -0.08, message: `${stock.displayName} affected by market downturn` },
                { type: 'boom', impact: 0.10, message: `${stock.displayName} benefits from industry boom` }
            ];
            
            const event = events[Math.floor(Math.random() * events.length)];
            stock.currentPrice *= (1 + event.impact);
            
            if (Math.random() < 0.3) { // 30% chance to show notification
                showNotification(event.message, event.impact > 0 ? 'success' : 'warning');
            }
        }
        
        // Normal price fluctuation
        const randomChange = (Math.random() - 0.5) * 2 * stock.volatility;
        const growthFactor = stock.growthRate / 100;
        stock.currentPrice *= (1 + randomChange + growthFactor);
        
        // Ensure price doesn't go below 10% of base price
        stock.currentPrice = Math.max(stock.basePrice * 0.1, stock.currentPrice);
    });
    
    updateStockMarket();
}

// Update stock market display
function updateStockMarket() {
    document.querySelectorAll('.stock-card').forEach(card => {
        const stockId = card.dataset.stock;
        const stock = stockMarket[stockId];
        
        // Skip if stock data doesn't exist
        if (!stock) {
            console.warn(`Stock data not found for: ${stockId}`);
            return;
        }
        
        const holding = gameState.stockHoldings[stockId];
        const sharesDisplay = card.querySelector('.stock-shares');
        const priceDisplay = card.querySelector('.stock-price');
        const changeDisplay = card.querySelector('.price-change');
        
        if (sharesDisplay) {
            sharesDisplay.textContent = `${holding ? holding.shares : 0} shares`;
        }
        
        if (priceDisplay) {
            priceDisplay.textContent = `$${stock.currentPrice.toFixed(2)}`;
        }
        
        if (changeDisplay) {
            const changePercent = ((stock.currentPrice - stock.basePrice) / stock.basePrice) * 100;
            changeDisplay.textContent = `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
            changeDisplay.className = `price-change ${changePercent >= 0 ? 'positive' : 'negative'}`;
        }
    });
    
    // Update total stock balance
    let totalStockValue = 0;
    Object.keys(gameState.stockHoldings).forEach(stockId => {
        const holding = gameState.stockHoldings[stockId];
        const stock = stockMarket[stockId];
        if (holding && stock) {
            totalStockValue += holding.shares * stock.currentPrice;
        }
    });
    
    gameState.stockBalance = totalStockValue;
}

// Show stock trade modal
function showStockTradeModal(stockId, tradeType) {
    const stock = stockMarket[stockId];
    
    if (!stock) {
        showNotification('Stock not found!', 'error');
        return;
    }
    
    // Store current stock and trade type
    window.currentStockId = stockId;
    window.currentTradeType = tradeType;
    
    // Update modal content
    const title = tradeType === 'buy' ? 'Buy Stock' : 'Sell Stock';
    document.getElementById('stockTradeTitle').textContent = title;
    
    document.getElementById('tradeStockIcon').textContent = stock.icon;
    document.getElementById('tradeStockName').textContent = stock.displayName;
    document.getElementById('tradeStockPrice').textContent = `$${stock.currentPrice.toFixed(2)}`;
    
    const changePercent = ((stock.currentPrice - stock.basePrice) / stock.basePrice) * 100;
    const changeElement = document.getElementById('tradeStockChange');
    changeElement.textContent = `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
    changeElement.className = `price-change ${changePercent >= 0 ? 'positive' : 'negative'}`;
    
    // Update balance and shares
    document.getElementById('stockTradeBalance').textContent = `$${formatNumber(gameState.balance)}`;
    
    const holding = gameState.stockHoldings[stockId];
    const shares = holding ? holding.shares : 0;
    document.getElementById('stockTradeShares').textContent = `${shares} shares`;
    
    // Update confirm button
    const confirmBtn = document.getElementById('stockTradeConfirmBtn');
    confirmBtn.textContent = tradeType === 'buy' ? 'Buy' : 'Sell';
    confirmBtn.className = `confirm-btn ${tradeType}`;
    confirmBtn.onclick = () => confirmStockTrade();
    
    // Clear input and update conversion
    document.getElementById('stockTradeAmount').value = '';
    updateStockTradeConversion();
    
    showModal('stockTrade');
}

// Update stock trade conversion
function updateStockTradeConversion() {
    const amount = parseInt(document.getElementById('stockTradeAmount').value) || 0;
    const stockId = window.currentStockId;
    const tradeType = window.currentTradeType;
    
    if (stockId && stockMarket[stockId]) {
        const stock = stockMarket[stockId];
        const totalCost = amount * stock.currentPrice;
        
        const conversionElement = document.getElementById('stockTradeConversion');
        if (tradeType === 'buy') {
            conversionElement.textContent = `$${formatNumber(totalCost)}`;
        } else {
            conversionElement.textContent = `$${formatNumber(totalCost)} (receive)`;
        }
    }
}

// Confirm stock trade
function confirmStockTrade() {
    const amount = parseInt(document.getElementById('stockTradeAmount').value);
    const stockId = window.currentStockId;
    const tradeType = window.currentTradeType;
    
    if (!stockId || !stockMarket[stockId]) {
        showNotification('Stock not found!', 'error');
        return;
    }
    
    if (!amount || isNaN(amount) || amount <= 0) {
        showNotification('Please enter a valid number of shares', 'error');
        return;
    }
    
    const stock = stockMarket[stockId];
    
    if (tradeType === 'buy') {
        // Buy stock
        const totalCost = amount * stock.currentPrice;
        
        if (gameState.balance < totalCost) {
            showNotification('Insufficient funds!', 'error');
            return;
        }
        
        // Initialize holding if it doesn't exist
        if (!gameState.stockHoldings[stockId]) {
            gameState.stockHoldings[stockId] = { shares: 0, invested: 0 };
        }
        
        gameState.balance -= totalCost;
        gameState.stockHoldings[stockId].shares += amount;
        gameState.stockHoldings[stockId].invested += totalCost;
        
        showNotification(`Bought ${amount} shares of ${stock.displayName} for $${formatNumber(totalCost)}`, 'success');
        
    } else {
        // Sell stock
        const holding = gameState.stockHoldings[stockId];
        
        if (!holding || holding.shares < amount) {
            showNotification('Insufficient shares!', 'error');
            return;
        }
        
        const totalValue = amount * stock.currentPrice;
        const investedAmount = (amount / holding.shares) * holding.invested;
        const profit = totalValue - investedAmount;
        
        gameState.balance += totalValue;
        holding.shares -= amount;
        holding.invested -= investedAmount;
        
        // Remove holding if no shares left
        if (holding.shares === 0) {
            delete gameState.stockHoldings[stockId];
        }
        
        showNotification(`Sold ${amount} shares of ${stock.displayName} for $${formatNumber(totalValue)} (Profit: $${formatNumber(profit)})`, 'success');
    }
    
    hideModal('stockTrade');
    updateUI();
    updateStockMarket(); // Update stock market display to show new share count
}

// Buy stock (updated to use modal)
function buyStock(stockId) {
    showStockTradeModal(stockId, 'buy');
}

// Sell stock (updated to use modal)
function sellStock(stockId) {
    showStockTradeModal(stockId, 'sell');
}

// Crypto price history data
const cryptoPriceHistory = {};

// Initialize price history for all cryptocurrencies
function initializePriceHistory() {
    Object.keys(cryptoInvestments).forEach(cryptoId => {
        cryptoPriceHistory[cryptoId] = [];
        
        // Generate 24 hours of historical data (every hour)
        const basePrice = cryptoInvestments[cryptoId].price;
        for (let i = 23; i >= 0; i--) {
            const volatility = cryptoInvestments[cryptoId].volatility;
            const randomChange = (Math.random() - 0.5) * 2 * volatility * 0.3;
            const price = basePrice * (1 + randomChange);
            cryptoPriceHistory[cryptoId].push({
                time: i,
                price: price
            });
        }
        
        // Add current price
        cryptoPriceHistory[cryptoId].push({
            time: 0,
            price: cryptoInvestments[cryptoId].price
        });
    });
}

// Show crypto graph modal
function showCryptoGraph() {
    showModal('cryptoGraph');
}

// Update crypto graph
function updateCryptoGraph() {
    const cryptoId = document.getElementById('cryptoSelect').value;
    const investment = cryptoInvestments[cryptoId];
    
    if (!investment || !cryptoPriceHistory[cryptoId]) {
        return;
    }
    
    // Update stats
    const currentPrice = investment.price;
    const priceHistory = cryptoPriceHistory[cryptoId];
    const prices = priceHistory.map(p => p.price);
    const high = Math.max(...prices);
    const low = Math.min(...prices);
    const change = ((currentPrice - prices[0]) / prices[0]) * 100;
    
    document.getElementById('graphCurrentPrice').textContent = `$${currentPrice.toFixed(2)}`;
    document.getElementById('graphChange').textContent = `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
    document.getElementById('graphChange').className = change >= 0 ? 'stat-value positive' : 'stat-value negative';
    document.getElementById('graphHigh').textContent = `$${high.toFixed(2)}`;
    document.getElementById('graphLow').textContent = `$${low.toFixed(2)}`;
    
    // Draw chart
    drawCryptoChart(cryptoId);
}

// Draw crypto chart using canvas
function drawCryptoChart(cryptoId) {
    const canvas = document.getElementById('cryptoChart');
    const ctx = canvas.getContext('2d');
    const priceHistory = cryptoPriceHistory[cryptoId];
    
    if (!priceHistory || priceHistory.length === 0) {
        return;
    }
    
    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    const padding = 40;
    const width = canvas.width - padding * 2;
    const height = canvas.height - padding * 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Get price range
    const prices = priceHistory.map(p => p.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.1)';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
        const y = padding + (height / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
        
        // Price labels
        const price = maxPrice - (priceRange / 5) * i;
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`$${price.toFixed(2)}`, padding - 5, y + 3);
    }
    
    // Vertical grid lines
    for (let i = 0; i <= 6; i++) {
        const x = padding + (width / 6) * i;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, canvas.height - padding);
        ctx.stroke();
        
        // Time labels
        const hours = 24 - (24 / 6) * i;
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${hours}h`, x, canvas.height - padding + 20);
    }
    
    // Draw price line
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    priceHistory.forEach((point, index) => {
        const x = padding + (width / (priceHistory.length - 1)) * index;
        const y = padding + height - ((point.price - minPrice) / priceRange) * height;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw gradient fill
    const gradient = ctx.createLinearGradient(0, padding, 0, canvas.height - padding);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    
    priceHistory.forEach((point, index) => {
        const x = padding + (width / (priceHistory.length - 1)) * index;
        const y = padding + height - ((point.price - minPrice) / priceRange) * height;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.closePath();
    ctx.fill();
    
    // Draw data points
    ctx.fillStyle = '#3b82f6';
    priceHistory.forEach((point, index) => {
        const x = padding + (width / (priceHistory.length - 1)) * index;
        const y = padding + height - ((point.price - minPrice) / priceRange) * height;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Highlight current price point
    const lastPoint = priceHistory[priceHistory.length - 1];
    const lastX = canvas.width - padding;
    const lastY = padding + height - ((lastPoint.price - minPrice) / priceRange) * height;
    
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(lastX, lastY, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(lastX, lastY, 5, 0, Math.PI * 2);
    ctx.stroke();
}

// Update price history with new prices
function updatePriceHistory() {
    Object.keys(cryptoInvestments).forEach(cryptoId => {
        if (!cryptoPriceHistory[cryptoId]) {
            cryptoPriceHistory[cryptoId] = [];
        }
        
        // Add current price to history
        cryptoPriceHistory[cryptoId].push({
            time: 0,
            price: cryptoInvestments[cryptoId].price
        });
        
        // Keep only last 24 data points
        if (cryptoPriceHistory[cryptoId].length > 24) {
            cryptoPriceHistory[cryptoId].shift();
        }
        
        // Update time indices
        cryptoPriceHistory[cryptoId].forEach((point, index) => {
            point.time = 24 - index - 1;
        });
    });
}

// Show prestige modal
function showPrestigeModal() {
    showModal('prestige');
}

// Update prestige modal content
function updatePrestigeModal() {
    const canPrestige = gameState.totalEarnings >= 1000000; // $1B required
    
    // Update current progress
    document.getElementById('prestigeTotalEarnings').textContent = `$${formatNumber(gameState.totalEarnings)}`;
    document.getElementById('prestigeIncome').textContent = `$${formatNumber(gameState.incomePerSecond * 60)}/min`;
    document.getElementById('prestigeStage').textContent = gameState.currentStage;
    
    // Calculate prestige rewards
    const newPrestigeLevel = gameState.prestige.level + 1;
    const newMultiplier = getPrestigeMultiplier(newPrestigeLevel);
    const startingBonus = getPrestigeStartingBonus(newPrestigeLevel);
    const badge = getPrestigeBadge(newPrestigeLevel);
    
    // Update benefits
    document.getElementById('prestigePointsGain').textContent = `+1`;
    document.getElementById('prestigeMultiplierGain').textContent = `x${newMultiplier.toFixed(1)}`;
    document.getElementById('prestigeStartingBonus').textContent = `$${formatNumber(startingBonus)}`;
    document.getElementById('prestigeBadge').textContent = badge;
    
    // Update button state
    const confirmBtn = document.getElementById('confirmPrestigeBtn');
    const checkbox = document.getElementById('prestigeConfirm');
    
    if (canPrestige && checkbox.checked) {
        confirmBtn.disabled = false;
    } else {
        confirmBtn.disabled = true;
    }
    
    // Add checkbox event listener
    checkbox.onchange = () => {
        if (canPrestige && checkbox.checked) {
            confirmBtn.disabled = false;
        } else {
            confirmBtn.disabled = true;
        }
    };
}

// Get prestige multiplier based on level
function getPrestigeMultiplier(level) {
    const multipliers = {
        1: 2.0,
        2: 3.0,
        3: 5.0,
        4: 7.0,
        5: 10.0,
        6: 15.0,
        7: 20.0,
        8: 25.0,
        9: 30.0,
        10: 50.0
    };
    return multipliers[level] || (level * 5);
}

// Get prestige starting bonus based on level
function getPrestigeStartingBonus(level) {
    const bonuses = {
        1: 10000,
        2: 1000000,
        3: 5000000,
        4: 10000000,
        5: 50000000,
        6: 100000000,
        7: 500000000,
        8: 1000000000,
        9: 5000000000,
        10: 10000000000
    };
    return bonuses[level] || (level * 1000000000);
}

// Get prestige badge based on level
function getPrestigeBadge(level) {
    const badges = {
        1: 'Bronze',
        2: 'Silver',
        3: 'Gold',
        4: 'Platinum',
        5: 'Diamond',
        6: 'Master',
        7: 'Grandmaster',
        8: 'Legendary',
        9: 'Mythic',
        10: 'Transcendent'
    };
    return badges[level] || 'Prestige Master';
}

// Confirm prestige reset
function confirmPrestige() {
    if (gameState.totalEarnings < 1000000) {
        showNotification('You need $1M total earnings to prestige!', 'error');
        return;
    }
    
    // Calculate new prestige stats
    const newPrestigeLevel = gameState.prestige.level + 1;
    const newMultiplier = getPrestigeMultiplier(newPrestigeLevel);
    const startingBonus = getPrestigeStartingBonus(newPrestigeLevel);
    const badge = getPrestigeBadge(newPrestigeLevel);
    
    // Update prestige stats
    gameState.prestige.level = newPrestigeLevel;
    gameState.prestige.points += 1;
    gameState.prestige.multiplier = newMultiplier;
    gameState.prestige.totalPrestigeEarnings += gameState.totalEarnings;
    
    if (!gameState.prestige.badges.includes(badge)) {
        gameState.prestige.badges.push(badge);
    }
    
    // Reset game progress but keep prestige
    resetGameProgress();
    
    // Apply prestige bonuses
    gameState.balance = startingBonus;
    
    // Show success message
    showNotification(`🎉 Prestige Complete! You are now ${badge} with x${newMultiplier} income multiplier!`, 'success');
    
    hideModal('prestige');
    updateUI();
    updatePrestigeDisplay();
}

// Reset game progress for prestige
function resetGameProgress() {
    // Reset basic stats
    gameState.totalEarnings = 0;
    gameState.currentStage = 'Beginner';
    gameState.stageProgress = 0;
    
    // Reset ventures
    Object.keys(gameState.ventures).forEach(ventureId => {
        gameState.ventures[ventureId].purchased = false;
        gameState.ventures[ventureId].owned = false;
    });
    
    // Reset assets
    Object.keys(gameState.assets).forEach(assetId => {
        gameState.assets[assetId].level = assetId === 'house' || assetId === 'clothes' || assetId === 'watch' ? 1 : 0;
    });
    
    // Reset collections
    gameState.carCollection = [];
    gameState.planeCollection = [];
    gameState.luxuryCollection = [];
    
    // Reset crypto
    Object.keys(gameState.cryptoHoldings).forEach(cryptoId => {
        gameState.cryptoHoldings[cryptoId] = { amount: 0, invested: 0 };
    });
    gameState.cryptoBalance = 0;
    
    // Reset stocks
    gameState.stockHoldings = {};
    gameState.stockBalance = 0;
    
    // Reset life stats to default
    gameState.lifeStats = {
        health: 80,
        happiness: 70,
        social: 60,
        intelligence: 75
    };
    
    // Reset love life
    gameState.loveLife = {
        relationship: 'Single',
        partnerName: '',
        relationshipLevel: 0,
        dateCount: 0,
        happiness: 0
    };
}

// Update prestige display
function updatePrestigeDisplay() {
    document.getElementById('currentPrestige').textContent = gameState.prestige.level;
    document.getElementById('prestigeBonus').textContent = `x${gameState.prestige.multiplier.toFixed(1)}`;
    
    // Calculate next prestige requirement
    const nextRequirement = 1000000 * Math.pow(2, gameState.prestige.level);
    if (gameState.totalEarnings >= nextRequirement) {
        document.getElementById('nextPrestige').textContent = 'Available!';
    } else {
        document.getElementById('nextPrestige').textContent = `Reach $${formatNumber(nextRequirement)}`;
    }
}

// Simulate crypto price changes
function simulateCryptoPrices() {
    Object.keys(cryptoInvestments).forEach(cryptoId => {
        const investment = cryptoInvestments[cryptoId];
        const changePercent = (Math.random() - 0.5) * 2 * investment.volatility * 100;
        investment.price *= (1 + changePercent / 100);
        investment.change = changePercent;
    });
    
    updateCrypto();
}

// Performance optimization - update UI less frequently when tab is not visible
let updateInterval = 1000;
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        updateInterval = 5000; // Update every 5 seconds when tab is hidden
    } else {
        updateInterval = 1000; // Update every second when tab is visible
        updateUI(); // Immediate update when tab becomes visible
    }
});
