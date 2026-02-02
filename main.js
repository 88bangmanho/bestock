document.addEventListener('DOMContentLoaded', () => {
    // Stock data with country information
    const allStocks = [
        { market: "KOSPI", name: "삼성전자", price: 72000, reason: "반도체 업황 회복 및 글로벌 시장 지배력", country: "KR" },
        { market: "KOSPI", name: "SK하이닉스", price: 138000, reason: "AI·HBM 메모리 수요 증가에 따른 실적 개선", country: "KR" },
        { market: "KOSPI", name: "현대차", price: 195000, reason: "전동화·자율주행 기반 글로벌 판매 확대", country: "KR" },
        { market: "KOSDAQ", name: "에코프로비엠", price: 210000, reason: "2차전지 양극재 글로벌 공급망 확대", country: "KR" },
        { market: "KOSDAQ", name: "알테오젠", price: 89000, reason: "플랫폼 기술 중심의 대형 기술수출 기대", country: "KR" },
        { market: "KOSDAQ", name: "셀트리온헬스케어", price: 76000, reason: "바이오시밀러 글로벌 시장 점유율 확대", country: "KR" },
        // 미국 주식
        { market: "NASDAQ", name: "Apple", price: 170, reason: "강력한 브랜드 충성도와 혁신적인 제품 생태계 확장", country: "US" },
        { market: "NASDAQ", name: "Microsoft", price: 400, reason: "클라우드 서비스(Azure) 성장과 AI 기술 리더십 강화", country: "US" },
        { market: "NYSE", name: "Tesla", price: 180, reason: "전기차 시장 선도 및 자율주행 기술 발전 기대", country: "US" },
        // 유럽 주식
        { market: "EURONEXT", name: "LVMH", price: 800, reason: "명품 시장 지배력과 아시아 시장 성장세 지속", country: "EU" },
        { market: "EURONEXT", name: "ASML", price: 900, reason: "반도체 장비 시장 독점적 지위 및 첨단 기술력", country: "EU" },
        { market: "LSE", name: "Nestle", price: 100, reason: "견고한 필수 소비재 사업과 글로벌 시장 다양성", country: "EU" },
        // 일본 주식
        { market: "TSE", name: "Toyota", price: 2500, reason: "하이브리드 및 전기차 전환 전략 가속화와 안정적인 재무구조", country: "JP" },
        { market: "TSE", name: "Sony", price: 13000, reason: "콘텐츠-하드웨어 시너지 및 이미지 센서 시장 경쟁 우위", country: "JP" },
        { market: "TSE", name: "Nintendo", price: 8000, reason: "혁신적인 게임 콘텐츠와 강력한 IP 기반 팬덤 유지", country: "JP" }
    ];

    const translations = {
        en: {
            title: "Cosmic Stock Signal",
            recommendButton: "Recommend Stocks",
            all: "All",
            korea: "Korea",
            us: "USA",
            europe: "Europe",
            japan: "Japan",
            targetPrice: "Target Price:",
            noStocks: "No stocks found for selected category.",
            footer: "※ This page is for demonstration purposes only and cannot be used as a basis for actual investment decisions.",
            themeToggleLight: "☀️", // Sun for dark mode to switch to light
            themeToggleDark: "🌙", // Moon for light mode to switch to dark
            marketKOSPI: "South Korean Stock Market (KOSPI)",
            marketKOSDAQ: "South Korean Stock Market (KOSDAQ)",
            marketNASDAQ: "US Stock Market (NASDAQ)",
            marketNYSE: "US Stock Market (NYSE)",
            marketEURONEXT: "European Stock Market (EURONEXT)",
            marketLSE: "European Stock Market (LSE)",
            marketTSE: "Japanese Stock Market (TSE)"
        },
        ja: {
            title: "コズミック株式シグナル",
            recommendButton: "株式を推奨",
            all: "全て",
            korea: "韓国",
            us: "米国",
            europe: "欧州",
            japan: "日本",
            targetPrice: "目標価格:",
            noStocks: "選択されたカテゴリの株式は見つかりませんでした。",
            footer: "※ このページはデモンストレーション専用であり、実際の投資判断の根拠として使用することはできません。",
            themeToggleLight: "☀️",
            themeToggleDark: "🌙",
            marketKOSPI: "韓国株式市場 (KOSPI)",
            marketKOSDAQ: "韓国株式市場 (KOSDAQ)",
            marketNASDAQ: "米国株式市場 (NASDAQ)",
            marketNYSE: "欧州株式市場 (EURONEXT)",
            marketEURONEXT: "欧州株式市場 (EURONEXT)",
            marketLSE: "欧州株式市場 (LSE)",
            marketTSE: "日本株式市場 (TSE)"
        },
        ko: { // Default language
            title: "🌌 COSMIC STOCK SIGNAL",
            recommendButton: "주식 추천",
            all: "전체",
            korea: "한국",
            us: "미국",
            europe: "유럽",
            japan: "일본",
            targetPrice: "목표가:",
            noStocks: "선택된 카테고리에 해당하는 주식이 없습니다.",
            footer: "※ 본 페이지는 데모용이며 실제 투자 판단의 근거가 될 수 없습니다.",
            themeToggleLight: "☀️", // Sun for dark mode to switch to light
            themeToggleDark: "🌙", // Moon for light mode to switch to dark (this is inverted from the JS logic, will fix)
            marketKOSPI: "한국 주식 시장 (KOSPI)",
            marketKOSDAQ: "한국 주식 시장 (KOSDAQ)",
            marketNASDAQ: "미국 주식 시장 (NASDAQ)",
            marketNYSE: "미국 주식 시장 (NYSE)",
            marketEURONEXT: "유럽 주식 시장 (EURONEXT)",
            marketLSE: "유럽 주식 시장 (LSE)",
            marketTSE: "일본 주식 시장 (TSE)"
        }
    };

    let currentLanguage = localStorage.getItem('lang') || 'ko'; // Default to Korean

    const t = (key) => {
        return translations[currentLanguage][key] || key;
    };

    const setLanguage = (lang) => {
        currentLanguage = lang;
        localStorage.setItem('lang', lang);
        applyTranslations(); // Function to apply translations, will be defined later
    };

    let currentFilterCountry = 'all'; // Default filter

    // Function to apply translations to the UI
    const applyTranslations = () => {
        // Document Title
        document.title = t('title');
        // Header H1
        document.querySelector('header h1').textContent = t('title');
        // Recommend Button
        document.getElementById('recommend-btn').textContent = t('recommendButton');
        // Footer
        document.querySelector('footer').textContent = t('footer');

        // Country filter buttons
        document.querySelectorAll('#country-filters .country-filter-btn').forEach(button => {
            const countryKey = button.dataset.country;
            if (countryKey === 'all') button.textContent = t('all');
            else if (countryKey === 'KR') button.textContent = t('korea');
            else if (countryKey === 'US') button.textContent = t('us');
            else if (countryKey === 'EU') button.textContent = t('europe');
            else if (countryKey === 'JP') button.textContent = t('japan');
        });

        // Theme Toggle text/icon
        const themeToggle = document.getElementById('theme-toggle');
        const isLightModeActive = document.body.classList.contains('light-mode');
        themeToggle.textContent = isLightModeActive ? t('themeToggleDark') : t('themeToggleLight');

        // Re-run recommendation to update market names and no stocks message
        recommend(currentFilterCountry);
    };


    function recommend(countryFilter = 'all') { // Added countryFilter parameter
        const result = document.getElementById("result");
        result.innerHTML = "";

        let filteredStocks = allStocks;
        if (countryFilter !== 'all') {
            filteredStocks = allStocks.filter(stock => stock.country === countryFilter);
        }

        const picked = [...filteredStocks]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        if (picked.length === 0) {
            result.innerHTML = `<p style="text-align: center; color: var(--text-secondary); margin-top: 50px;">${t('noStocks')}</p>`;
            return;
        }

        picked.forEach(stock => {
            const target = Math.round(stock.price * (1.18 + Math.random() * 0.12));
            const card = document.createElement("div");
            card.className = "stock-card";

            let marketTranslationKey = `market${stock.market.replace(/\s/g, '')}`;
            const localizedMarket = t(marketTranslationKey);

            card.innerHTML = `
                <div class="market">${localizedMarket}</div>
                <div class="name">${stock.name}</div>
                <div class="reason">${stock.reason}</div>
                <div class="target">${t('targetPrice')} ${target.toLocaleString()}원</div>
            `;
            result.appendChild(card);
        });
    }

    // Initial language application and recommendation on page load
    applyTranslations(); // Apply initial translations
    recommend(currentFilterCountry); // Also calls applyTranslations


    const recommendBtn = document.getElementById('recommend-btn');
    if(recommendBtn) {
        recommendBtn.addEventListener('click', () => recommend(currentFilterCountry)); // Pass currentFilterCountry
    }

    // Country filter logic
    const countryFilterButtons = document.querySelectorAll('.country-filter-btn');
    countryFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            countryFilterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            currentFilterCountry = button.dataset.country;
            recommend(currentFilterCountry); // Recommend based on selected country
        });
    });

    // Language switcher logic
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            setLanguage(button.dataset.lang);
        });
    });
    // Set initial active language button
    document.querySelector(`.lang-btn[data-lang="${currentLanguage}"]`).classList.add('active');


    // Theme toggle logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'light-mode') {
            body.classList.add('light-mode');
            themeToggle.textContent = t('themeToggleDark'); // Update icon based on language
        } else {
            body.classList.remove('light-mode');
            themeToggle.textContent = t('themeToggleLight'); // Update icon based on language
        }
    };

    const savedTheme = localStorage.getItem('theme');
    // Ensure initial theme applies correct icon via applyTheme
    if (savedTheme) {
        body.classList.add(savedTheme);
    }
    applyTheme(savedTheme || (document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode')); // Apply correct icon initially


    themeToggle.addEventListener('click', () => {
        const isLightMode = body.classList.contains('light-mode');
        const newTheme = isLightMode ? 'dark-mode' : 'light-mode';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});