document.addEventListener('DOMContentLoaded', () => {
    // Stock recommendation logic
    const stocks = [
        { market: "KOSPI", name: "삼성전자", price: 72000, reason: "반도체 업황 회복 및 글로벌 시장 지배력" },
        { market: "KOSPI", name: "SK하이닉스", price: 138000, reason: "AI·HBM 메모리 수요 증가에 따른 실적 개선" },
        { market: "KOSPI", name: "현대차", price: 195000, reason: "전동화·자율주행 기반 글로벌 판매 확대" },
        { market: "KOSDAQ", name: "에코프로비엠", price: 210000, reason: "2차전지 양극재 글로벌 공급망 확대" },
        { market: "KOSDAQ", name: "알테오젠", price: 89000, reason: "플랫폼 기술 중심의 대형 기술수출 기대" },
        { market: "KOSDAQ", name: "셀트리온헬스케어", price: 76000, reason: "바이오시밀러 글로벌 시장 점유율 확대" },
        // 미국 주식
        { market: "NASDAQ", name: "Apple", price: 170, reason: "강력한 브랜드 충성도와 혁신적인 제품 생태계 확장" },
        { market: "NASDAQ", name: "Microsoft", price: 400, reason: "클라우드 서비스(Azure) 성장과 AI 기술 리더십 강화" },
        { market: "NYSE", name: "Tesla", price: 180, reason: "전기차 시장 선도 및 자율주행 기술 발전 기대" },
        // 유럽 주식
        { market: "EURONEXT", name: "LVMH", price: 800, reason: "명품 시장 지배력과 아시아 시장 성장세 지속" },
        { market: "EURONEXT", name: "ASML", price: 900, reason: "반도체 장비 시장 독점적 지위 및 첨단 기술력" },
        { market: "LSE", name: "Nestle", price: 100, reason: "견고한 필수 소비재 사업과 글로벌 시장 다양성" },
        // 일본 주식
        { market: "TSE", name: "Toyota", price: 2500, reason: "하이브리드 및 전기차 전환 전략 가속화와 안정적인 재무구조" },
        { market: "TSE", name: "Sony", price: 13000, reason: "콘텐츠-하드웨어 시너지 및 이미지 센서 시장 경쟁 우위" },
        { market: "TSE", name: "Nintendo", price: 8000, reason: "혁신적인 게임 콘텐츠와 강력한 IP 기반 팬덤 유지" }
    ];

    function recommend() {
        const result = document.getElementById("result");
        result.innerHTML = "";

        const picked = [...stocks]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        picked.forEach(stock => {
            const target = Math.round(stock.price * (1.18 + Math.random() * 0.12));
            const card = document.createElement("div");
            card.className = "stock-card";
            card.innerHTML = `
                <div class="market">${stock.market}</div>
                <div class="name">${stock.name}</div>
                <div class="reason">${stock.reason}</div>
                <div class="target">목표가: ${target.toLocaleString()}원</div>
            `;
            result.appendChild(card);
        });
    }

    const recommendBtn = document.getElementById('recommend-btn');
    if(recommendBtn) {
        recommendBtn.addEventListener('click', recommend);
    }

    // Theme toggle logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'light-mode') {
            body.classList.add('light-mode');
            themeToggle.textContent = '🌙';
        } else {
            body.classList.remove('light-mode');
            themeToggle.textContent = '☀️';
        }
    };

    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const isLightMode = body.classList.contains('light-mode');
        const newTheme = isLightMode ? 'dark-mode' : 'light-mode';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});