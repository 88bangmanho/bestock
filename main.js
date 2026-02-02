document.addEventListener('DOMContentLoaded', () => {
    // Stock recommendation logic
    const stocks = [
        { market: "KOSPI", name: "삼성전자", price: 72000, reason: "반도체 업황 회복 및 글로벌 시장 지배력" },
        { market: "KOSPI", name: "SK하이닉스", price: 138000, reason: "AI·HBM 메모리 수요 증가에 따른 실적 개선" },
        { market: "KOSPI", name: "현대차", price: 195000, reason: "전동화·자율주행 기반 글로벌 판매 확대" },
        { market: "KOSDAQ", name: "에코프로비엠", price: 210000, reason: "2차전지 양극재 글로벌 공급망 확대" },
        { market: "KOSDAQ", name: "알테오젠", price: 89000, reason: "플랫폼 기술 중심의 대형 기술수출 기대" },
        { market: "KOSDAQ", name: "셀트리온헬스케어", price: 76000, reason: "바이오시밀러 글로벌 시장 점유율 확대" }
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