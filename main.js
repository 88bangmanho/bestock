document.addEventListener('DOMContentLoaded', () => {
    // Stock data with country information
    const allStocks = [
        { market: "KOSPI", name_ko: "삼성전자", name_en: "Samsung Electronics", name_ja: "サムスン電子", price: 72000, reason_ko: "반도체 업황 회복 및 글로벌 시장 지배력", reason_en: "Recovery in semiconductor industry and global market dominance", reason_ja: "半導体業界の回復とグローバル市場支配力", country: "KR" },
        { market: "KOSPI", name_ko: "SK하이닉스", name_en: "SK Hynix", name_ja: "SKハイニックス", price: 138000, reason_ko: "AI·HBM 메모리 수요 증가에 따른 실적 개선", reason_en: "Improved performance due to increased demand for AI·HBM memory", reason_ja: "AI·HBMメモリ需要増加による業績改善", country: "KR" },
        { market: "KOSPI", name_ko: "현대차", name_en: "Hyundai Motor", name_ja: "現代自動車", price: 195000, reason_ko: "전동화·자율주행 기반 글로벌 판매 확대", reason_en: "Expansion of global sales based on electrification and autonomous driving", reason_ja: "電動化・自動運転によるグローバル販売拡大", country: "KR" },
        { market: "KOSDAQ", name_ko: "에코프로비엠", name_en: "Ecopro BM", name_ja: "エコープロBM", price: 210000, reason_ko: "2차전지 양극재 글로벌 공급망 확대", reason_en: "Expansion of global supply chain for secondary battery cathode materials", reason_ja: "二次電池正極材のグローバルサプライチェーン拡大", country: "KR" },
        { market: "KOSDAQ", name_ko: "알테오젠", name_en: "Alteogen", name_ja: "アルテオジェン", price: 89000, reason_ko: "플랫폼 기술 중심의 대형 기술수출 기대", reason_en: "Expectation of large-scale technology export centered on platform technology", reason_ja: "プラットフォーム技術中心の大型技術輸出への期待", country: "KR" },
        { market: "KOSDAQ", name_ko: "셀트리온헬스케어", name_en: "Celltrion Healthcare", name_ja: "セルトリオンヘルスケア", price: 76000, reason_ko: "바이오시밀러 글로벌 시장 점유율 확대", reason_en: "Expansion of biosimilar global market share", reason_ja: "バイオシミラーグローバル市場シェア拡大", country: "KR" },
        // 미국 주식
        { market: "NASDAQ", name_ko: "Apple", name_en: "Apple", name_ja: "アップル", price: 170, reason_ko: "강력한 브랜드 충성도와 혁신적인 제품 생태계 확장", reason_en: "Strong brand loyalty and expanding innovative product ecosystem", reason_ja: "強力なブランドロイヤルティと革新的な製品エコシステムの拡大", country: "US" },
        { market: "NASDAQ", name_ko: "Microsoft", name_en: "Microsoft", name_ja: "マイクロソフト", price: 400, reason_ko: "클라우드 서비스(Azure) 성장 및 AI 기술 리더십 강화", reason_en: "Growth in cloud services (Azure) and strengthening AI technology leadership", reason_ja: "クラウドサービス（Azure）の成長とAI技術リーダーシップの強化", country: "US" },
        { market: "NYSE", name_ko: "Tesla", name_en: "Tesla", name_ja: "テスラ", price: 180, reason_ko: "전기차 시장 선도 및 자율주행 기술 발전 기대", reason_en: "Leading electric vehicle market and anticipation of autonomous driving technology advancement", reason_ja: "電気自動車市場をリードし、自動運転技術の進歩への期待", country: "US" },
        // Additional US stocks to reach 10
        { market: "NASDAQ", name_ko: "Amazon", name_en: "Amazon", name_ja: "アマゾン", price: 150, reason_ko: "전자상거래 및 클라우드 컴퓨팅(AWS) 지배력, 신시장 확장", reason_en: "Dominance in e-commerce and cloud computing (AWS), expanding into new markets", reason_ja: "Eコマースとクラウドコンピューティング（AWS）の支配力、新規市場への拡大", country: "US" },
        { market: "NASDAQ", name_ko: "Google", name_en: "Google", name_ja: "グーグル", price: 140, reason_ko: "검색, 광고 및 AI 혁신 리더십(Alphabet Inc.)", reason_en: "Leadership in search, advertising, and AI innovation (Alphabet Inc.)", reason_ja: "検索、広告、AIイノベーションにおけるリーダーシップ（Alphabet Inc.）", country: "US" },
        { market: "NYSE", name_ko: "Meta Platforms", name_en: "Meta Platforms", name_ja: "メタ・プラットフォームズ", price: 350, reason_ko: "선도적인 소셜 미디어 플랫폼(Facebook, Instagram) 및 메타버스 투자", reason_en: "Leading social media platforms (Facebook, Instagram) and metaverse investments", reason_ja: "主要なソーシャルメディアプラットフォーム（Facebook、Instagram）とメタバースへの投資", country: "US" },
        { market: "NASDAQ", name_ko: "NVIDIA", name_en: "NVIDIA", name_ja: "エヌビディア", price: 900, reason_ko: "AI 및 그래픽 처리 장치(GPU) 기술 개척", reason_en: "Pioneering AI and graphics processing unit (GPU) technology", reason_ja: "AIおよびグラフィックス処理ユニット（GPU）技術の開拓", country: "US" },
        { market: "NYSE", name_ko: "Johnson & Johnson", name_en: "Johnson & Johnson", name_ja: "ジョンソン・エンド・ジョンソン", price: 160, reason_ko: "다각화된 헬스케어 대기업으로 강력한 제약 및 의료기기 부문 보유", reason_en: "Diversified healthcare giant with strong pharmaceutical and medical device segments", reason_ja: "多様なヘルスケア大手で、強力な医薬品および医療機器部門を持つ", country: "US" },
        { market: "NYSE", name_ko: "Visa", name_en: "Visa", name_ja: "ビザ", price: 270, reason_ko: "현금 없는 경제 트렌드의 혜택을 받는 글로벌 디지털 결제 리더", reason_en: "Global leader in digital payments, benefiting from cashless economy trends", reason_ja: "キャッシュレス経済の恩恵を受けるグローバルデジタル決済リーダー", country: "US" },
        { market: "NASDAQ", name_ko: "Netflix", name_en: "Netflix", name_ja: "ネットフリックス", price: 600, reason_ko: "강력한 콘텐츠 제작 및 구독자 증가를 보이는 글로벌 스트리밍 엔터테인먼트 리더", reason_en: "Global streaming entertainment leader with strong content production and subscriber growth", reason_ja: "強力なコンテンツ制作と購読者増加を伴うグローバルストリーミングエンターテイメントリーダー", country: "US" },
        // 유럽 주식
        { market: "EURONEXT", name_ko: "LVMH", name_en: "LVMH", name_ja: "LVMH", price: 800, reason_ko: "럭셔리 시장 지배력 및 아시아 시장의 지속적인 성장", reason_en: "Dominance in luxury market and sustained growth in Asian markets", reason_ja: "ラグジュアリー市場での優位性とアジア市場での持続的な成長", country: "EU" },
        { market: "EURONEXT", name_ko: "ASML", name_en: "ASML", name_ja: "ASML", price: 900, reason_ko: "반도체 장비 시장의 독점적 지위 및 첨단 기술", reason_en: "Monopolistic position in semiconductor equipment market and advanced technology", reason_ja: "半導体装置市場における独占的地位と先端技術", country: "EU" },
        { market: "LSE", name_ko: "Nestle", name_en: "Nestle", name_ja: "ネスレ", price: 100, reason_ko: "견고한 필수 소비재 사업 및 글로벌 시장 다양성", reason_en: "Robust essential consumer goods business and global market diversity", reason_ja: "堅調な必須消費財事業とグローバル市場の多様性", country: "EU" },
        // 일본 주식
        { market: "TSE", name_ko: "토요타", name_en: "Toyota", name_ja: "トヨタ", price: 2500, reason_ko: "하이브리드차 및 전기차 전환 전략 가속화와 안정적인 재무 구조", reason_en: "Accelerated shift to hybrid and electric vehicles and stable financial structure", reason_ja: "ハイブリッド車および電気自動車への転換戦略加速と安定した財務構造", country: "JP" },
        { market: "TSE", name_ko: "소니", name_en: "Sony", name_ja: "ソニー", price: 13000, reason_ko: "콘텐츠와 하드웨어의 시너지 효과, 이미지 센서 시장에서의 경쟁 우위", reason_en: "Synergy between content and hardware, competitive advantage in image sensor market", reason_ja: "コンテンツとハードウェアの相乗効果、イメージセンサー市場での競争優位", country: "JP" },
        { market: "TSE", name_ko: "닌텐도", name_en: "Nintendo", name_ja: "任天堂", price: 8000, reason_ko: "혁신적인 게임 콘텐츠와 강력한 IP 기반의 팬층 유지", reason_en: "Maintenance of innovative game content and strong IP-based fan base", reason_ja: "革新的なゲームコンテンツと強力なIPに基づいたファン層の維持", country: "JP" }
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
            themeToggleLight: "Light Mode",
            themeToggleDark: "Dark Mode",
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
            themeToggleLight: "라이트 모드",
            themeToggleDark: "다크 모드",
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
            .slice(0, 10);

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
                <div class="name">${stock['name_' + currentLanguage]}</div>
                <div class="reason">${stock['reason_' + currentLanguage]}</div>
                <div class="target">${t('targetPrice')} ${target.toLocaleString()}원</div>
            `;
            result.appendChild(card);
        });
    }

    // Initial language application on page load
    applyTranslations(); 


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