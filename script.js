// --- COMPREHENSIVE HARDWARE DATASETS (CAD Used Market Pricing Baseline) ---
const cpuDatabase = [
    { name: "Intel Core i9 14900KS", value: 950 }, { name: "Intel Core i9 14900K", value: 500 },
    { name: "Intel Core i9 14900KF", value: 650 }, { name: "Intel Core i9 13900KS", value: 400 },
    { name: "Intel Core i9 13900K", value: 400}, { name: "Intel Core i9 13900KF", value: 350 },
    { name: "Intel Core i9 12900KS", value: 370 }, { name: "Intel Core i9 12900K", value: 450 },
    { name: "Intel Core i9 11900K", value: 400 }, { name: "Intel Core i9 10900K", value: 350 },
    { name: "Intel Core i7 14700K", value: 450 }, { name: "Intel Core i7 13700K", value: 340 },
    { name: "Intel Core i7 12700K", value: 325 }, { name: "Intel Core i7 11700K", value: 300 },
    { name: "Intel Core i5 14600K", value: 350 }, { name: "Intel Core i5 13600K", value: 350 },
    { name: "Intel Core i5 12600K", value: 225 }, { name: "Intel Core i5 12400F", value: 200 },
    { name: "Intel Core i5 11400F", value: 150 },  { name: "Intel Core i5 10400F", value: 120 },
    // Core i3 Budgets
    { name: "Intel Core i3 14100F", value: 170 },  { name: "Intel Core i3 13100F", value: 150 },
    { name: "Intel Core i3 12100F", value: 120 },  { name: "Intel Core i3 10100F", value: 75 },
    // AMD High / Mid Tier
    { name: "AMD Ryzen Threadripper 7960X", value: 1300 }, { name: "AMD Ryzen 9 9950X", value: 700 },
    { name: "AMD Ryzen 9 7950X3D", value: 525 }, { name: "AMD Ryzen 9 5950X", value: 500 },
    { name: "AMD Ryzen 9 5900X", value: 300 },   { name: "AMD Ryzen 7 9800X3D", value: 525 },
    { name: "AMD Ryzen 7 7800X3D", value: 400 }, { name: "AMD Ryzen 7 5800X3D", value: 625 },
    { name: "AMD Ryzen 7 5700X3D", value: 450 }, { name: "AMD Ryzen 5 9600X", value: 200 },
    { name: "AMD Ryzen 5 7600X", value: 175 },   { name: "AMD Ryzen 5 5600X", value: 190 },
    { name: "AMD Ryzen 5 5600", value: 150 },    { name: "AMD Ryzen 5 3600", value: 80 },
    { name: "AMD Ryzen 5 2600", value: 50 },     { name: "AMD Ryzen 5 5500", value: 100 },
    // Ryzen 3 Budgets
    { name: "AMD Ryzen 3 4100", value: 75 },     { name: "AMD Ryzen 3 3300X", value: 70 },
    { name: "AMD Ryzen 3 3100", value: 50 },     { name: "AMD Ryzen 3 3200G", value: 60 },
    { name: "AMD Ryzen 3 2200G", value: 30 },    { name: "AMD Ryzen 3 1200", value: 20 },
    
    { name: "Intel Core i9 9900K", value: 250 },  { name: "Intel Core i7 10700K", value: 250 },
    { name: "Intel Core i7 9700K", value: 150 },  { name: "Intel Core i7 8700K", value: 100 },
    { name: "Intel Core i7 7700K", value: 100 },   { name: "Intel Core i7 6700K", value: 65 },
    { name: "Intel Core i7 4790K", value: 75 },   { name: "Intel Core i7 4770K", value: 40 },
    // Intel Older Budget Legacy
    { name: "Intel Core i5 9400F", value: 60 },   { name: "Intel Core i5 8400", value: 50 },
    { name: "Intel Core i5 7400", value: 30 },    { name: "Intel Core i5 6400", value: 20 },
    { name: "Intel Core i5 4590", value: 20 },    { name: "Intel Core i3 9100F", value: 20 },
    { name: "Intel Core i3 8100", value: 40 },    { name: "Intel Core i3 6100", value: 10 },

    // AMD Older Zen 3 / Zen 2 / Zen+ Legacies
    { name: "AMD Ryzen 9 3950X", value: 250 },    { name: "AMD Ryzen 9 3900X", value: 175 },
    { name: "AMD Ryzen 7 5700X", value: 200 },    { name: "AMD Ryzen 7 3800X", value: 135 },
    { name: "AMD Ryzen 7 3700X", value: 115 },     { name: "AMD Ryzen 7 2700X", value: 85 },
    { name: "AMD Ryzen 7 1700X", value: 55 },     { name: "AMD Ryzen 5 3600X", value: 110 },
    { name: "AMD Ryzen 5 2600X", value: 65 },     { name: "AMD Ryzen 5 1600AF", value: 40 },
    { name: "AMD Ryzen 5 1600", value: 30 },      { name: "AMD Ryzen 5 1400", value: 20 }
];

const gpuDatabase = [
    { name: "Nvidia GeForce RTX 5090", value: 6000 }, { name: "Nvidia GeForce RTX 5080", value: 2000 },
    { name: "Nvidia GeForce RTX 5070 Ti", value: 1400 }, { name: "Nvidia GeForce RTX 5070", value: 850 },
    { name: "Nvidia GeForce RTX 4090", value: 3100 }, { name: "Nvidia GeForce RTX 4080 Super", value: 1350 },
    { name: "Nvidia GeForce RTX 4070 Super", value: 900 }, { name: "Nvidia GeForce RTX 4060 Ti 16GB", value: 500 },
    { name: "Nvidia GeForce RTX 4060", value: 400 },   { name: "Nvidia GeForce RTX 3090 Ti", value: 2000 },
    { name: "Nvidia GeForce RTX 3080 Ti", value: 650 }, { name: "Nvidia GeForce RTX 3080 10GB", value: 600 },
    { name: "Nvidia GeForce RTX 3070 Ti", value: 400 }, { name: "Nvidia GeForce RTX 3070", value: 325 },
    { name: "Nvidia GeForce RTX 3060 Ti", value: 300 }, { name: "Nvidia GeForce RTX 3060 12GB", value: 400 },
    // RTX 3050 & Entry-Level Additions
    { name: "Nvidia GeForce RTX 3050 8GB", value: 250 }, { name: "Nvidia GeForce RTX 3050 6GB", value: 250 },
    { name: "Nvidia GeForce RTX 2060 Super", value: 200 }, { name: "Nvidia GeForce RTX 2060", value: 180 },
    { name: "Nvidia GeForce GTX 1660 Super", value: 140 }, { name: "Nvidia GeForce GTX 1650 Super", value: 100 },
    { name: "Nvidia GeForce GTX 1650", value: 100 },       { name: "Nvidia GeForce GTX 1060 6GB", value: 75 },
    { name: "Nvidia GeForce GTX 1050 Ti", value: 60 },     { name: "Nvidia GeForce RTX 5060 8GB", value: 400 },
    { name: "Nvidia GeForce RTX 5060 Ti 8GB", value: 600 }, { name: "Nvidia GeForce RTX 5060 Ti 16GB", value: 800 },
    { name: "Nvidia GeForce RTX 5050 8GB", value: 300 },
   // --- AMD Radeon RX 9000 Series (RDNA 4 additions) ---
    { name: "AMD Radeon RX 9070 XT", value: 900 },
    { name: "AMD Radeon RX 9070", value: 825 },
    { name: "AMD Radeon RX 9070 GRE", value: 800 },
    { name: "AMD Radeon RX 9060 XT 16GB", value: 600 },
    { name: "AMD Radeon RX 9060 XT 8GB", value: 450 },
    { name: "AMD Radeon RX 9060", value: 450 },
    // AMD Radeon Sets
    { name: "AMD Radeon RX 7900 XTX", value: 1250 },  { name: "AMD Radeon RX 7900 XT", value: 900 },
    { name: "AMD Radeon RX 7800 XT", value: 700 },   { name: "AMD Radeon RX 7700 XT", value: 550 },
    { name: "AMD Radeon RX 7600 XT", value: 600 },   { name: "AMD Radeon RX 6700 XT", value: 400 },
    { name: "AMD Radeon RX 6600 XT", value: 250 },   { name: "AMD Radeon RX 6600", value: 250 },
    { name: "AMD Radeon RX 6500 XT", value: 150 },    { name: "AMD Radeon RX 5700 XT", value: 200 },
    { name: "AMD Radeon RX 5500 XT", value: 125 },    { name: "AMD Radeon RX 580 8GB", value: 100 },
    { name: "AMD Radeon RX 570 4GB", value: 50 }
];

const moboDatabase = [
    { name: "AMD X670E / X870E Premium", value: 400 },
    { name: "AMD X670 / X870 Pro", value: 375 },
    { name: "AMD B850 Mainstream Next-Gen", value: 200 },
    { name: "AMD B650E Enthusiast", value: 150 },
    { name: "AMD B650 Mainstream", value: 130 },
    { name: "AMD B840 Budget Next-Gen", value: 175 },
    { name: "AMD A620 Budget", value: 100 },
    { name: "AMD X570 Premium", value: 130 },
    { name: "AMD B550 Midrange", value: 70 },
    { name: "AMD B450 / A320 Budget", value: 60 },
    { name: "Intel Z890 Premium Enthusiast", value: 350 },
    { name: "Intel Z790 High-End", value: 160 },
    { name: "Intel Z690 Performance", value: 125 },
    { name: "Intel B760 Midrange", value: 100 },
    { name: "Intel B660 Budget", value: 150 },
    { name: "Intel H610 Entry", value: 70 },
    { name: "Intel H410 / H310 Budget Legacy", value: 125 }
];

let selectedCpuValue = null;
let selectedGpuValue = null;
let selectedMoboValue = null;

// --- CURRENCY TOGGLE ENGINE ---
const currencyToggle = document.getElementById('currencyToggle');
const currencyDisplay = document.getElementById('currencyDisplay');
const priceLabel = document.getElementById('priceLabel');
const cadToUsdRate = 0.70; 

currencyToggle.addEventListener('change', function() {
    if (this.checked) {
        currencyDisplay.textContent = "USD ($)";
        priceLabel.textContent = "Price Paid ($ USD)";
    } else {
        currencyDisplay.textContent = "CAD ($)";
        priceLabel.textContent = "Price Paid ($ CAD)";
    }
});

// --- DYNAMIC SEARCH AUTOCOMPLETE ROUTINES ---
function setupAutocomplete(inputId, suggestionsId, dataset, type) {
    const input = document.getElementById(inputId);
    const box = document.getElementById(suggestionsId);

    input.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        box.innerHTML = '';
        
        if (!query) {
            box.classList.add('hidden');
            if (type === 'cpu') selectedCpuValue = null;
            if (type === 'gpu') selectedGpuValue = null;
            if (type === 'mobo') selectedMoboValue = null;
            return;
        }

        const matches = dataset.filter(item => item.name.toLowerCase().includes(query));

        if (matches.length > 0) {
            box.classList.remove('hidden');
            matches.slice(0, 6).forEach(match => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = match.name;
                
                div.addEventListener('mousedown', (e) => {
                    e.preventDefault(); 
                    input.value = match.name;
                    box.innerHTML = '';
                    box.classList.add('hidden');
                    if (type === 'cpu') selectedCpuValue = match.value;
                    if (type === 'gpu') selectedGpuValue = match.value;
                    if (type === 'mobo') selectedMoboValue = match.value;
                });
                box.appendChild(div);
            });
        } else {
            box.classList.remove('hidden');
            const customDiv = document.createElement('div');
            customDiv.className = 'suggestion-item custom-spec';
            customDiv.textContent = '✨ Adding custom component...';
            box.appendChild(customDiv);
            
            if (type === 'cpu') selectedCpuValue = null;
            if (type === 'gpu') selectedGpuValue = null;
            if (type === 'mobo') selectedMoboValue = null;
        }
    });

    input.addEventListener('blur', () => {
        setTimeout(() => { box.classList.add('hidden'); }, 180);
    });
}

setupAutocomplete('cpuInput', 'cpuSuggestions', cpuDatabase, 'cpu');
setupAutocomplete('gpuInput', 'gpuSuggestions', gpuDatabase, 'gpu');
setupAutocomplete('moboInput', 'moboSuggestions', moboDatabase, 'mobo');

// --- APP EVALUATION PIPELINE ---
document.getElementById('pcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const isUSD = currencyToggle.checked;
    const conversionModifier = isUSD ? cadToUsdRate : 1.0;
    const currencyTag = isUSD ? "USD" : "CAD";

    const ramVal = parseInt(document.getElementById('ram').value);
    const ssdVal = parseInt(document.getElementById('ssd').value);
    const psuVal = parseInt(document.getElementById('psu').value);
    const pricePaid = parseFloat(document.getElementById('price').value);

    const cpuString = document.getElementById('cpuInput').value.toLowerCase();
    const gpuString = document.getElementById('gpuInput').value.toLowerCase();
    const moboString = document.getElementById('moboInput').value.toLowerCase();

    // 1. Evaluate CPU Value via Selection or Text Guess Fallback
    let cpuVal = selectedCpuValue;
    if (cpuVal === null) {
        if (cpuString.includes('i9') || cpuString.includes('ryzen 9') || cpuString.includes('threadripper')) cpuVal = 440;
        else if (cpuString.includes('i7') || cpuString.includes('ryzen 7')) cpuVal = 260;
        else if (cpuString.includes('i5') || cpuString.includes('ryzen 5')) cpuVal = 140;
        else if (cpuString.includes('i3') || cpuString.includes('ryzen 3')) cpuVal = 55;
        else cpuVal = 40;
    }

    // 2. Evaluate GPU Value via Selection or Text Guess Fallback
    let gpuVal = selectedGpuValue;
    if (gpuVal === null) {
        if (gpuString.includes('90') || gpuString.includes('xtx')) gpuVal = 1200;
        else if (gpuString.includes('80') || gpuString.includes('xt')) gpuVal = 680;
        else if (gpuString.includes('70') || gpuString.includes('gre')) gpuVal = 440;
        else if (gpuString.includes('60') || gpuString.includes('5700') || gpuString.includes('7600')) gpuVal = 240;
        else if (gpuString.includes('50') || gpuString.includes('1660') || gpuString.includes('5500')) gpuVal = 130;
        else gpuVal = 65;
    }

    // 3. Evaluate Motherboard Value via Selection or Text Guess Fallback
    let moboVal = selectedMoboValue;
    if (moboVal === null) {
        if (moboString.includes('x670') || moboString.includes('x870') || moboString.includes('z790') || moboString.includes('z890')) {
            moboVal = 240;
        } else if (moboString.includes('b850') || moboString.includes('b650') || moboString.includes('b760') || moboString.includes('b550') || moboString.includes('z690')) {
            moboVal = 155; 
        } else if (moboString.includes('b840') || moboString.includes('h610') || moboString.includes('a620') || moboString.includes('b450')) {
            moboVal = 95;
        } else {
            moboVal = 60;
        }
    }

    // 4. Case Shell, Fans, and Assembly baseline factor
    let systemAssemblyVal = 110; 

    // Calculate Global Value Matrix adjusted by choice of currency
    const baseFairPriceCAD = cpuVal + gpuVal + moboVal + ramVal + ssdVal + psuVal + systemAssemblyVal;
    const estimatedFairPrice = Math.round(baseFairPriceCAD * conversionModifier);

    let verdict = "";
    let verdictClass = "";
    let details = "";

    if (pricePaid <= estimatedFairPrice * 0.85) {
        verdict = "Absolute Steal! 🎉";
        verdictClass = "great-deal";
        details = `An estimated fair market price for these specs is around ${currencyTag} $${estimatedFairPrice}. You saved significantly under fair value matrix standards.`;
    } else if (pricePaid <= estimatedFairPrice * 1.07) {
        verdict = "Fair Price 👍";
        verdictClass = "fair-deal";
        details = `You paid right around what this hardware configuration is valued on the market (Estimated: ${currencyTag} $${estimatedFairPrice}). Great, safe buy.`;
    } else {
        verdict = "Overpriced 🛑";
        verdictClass = "bad-deal";
        details = `You paid ${currencyTag} $${pricePaid}, but this aggregated component setup is typically valued closer to ${currencyTag} $${estimatedFairPrice}.`;
    }

    const resultCard = document.getElementById('resultCard');
    const verdictText = document.getElementById('verdictText');
    const detailsText = document.getElementById('detailsText');

    verdictText.textContent = verdict;
    verdictText.className = "verdict " + verdictClass;
    detailsText.textContent = details;
    
    resultCard.classList.remove('hidden');
});// --- APP EVALUATION PIPELINE ---
document.getElementById('pcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const isUSD = currencyToggle.checked;
    const conversionModifier = isUSD ? cadToUsdRate : 1.0;
    const currencyTag = isUSD ? "USD" : "CAD";

    const ramVal = parseInt(document.getElementById('ram').value);
    const ssdVal = parseInt(document.getElementById('ssd').value);
    const psuVal = parseInt(document.getElementById('psu').value);
    const pricePaid = parseFloat(document.getElementById('price').value);

    const cpuString = document.getElementById('cpuInput').value.toLowerCase();
    const gpuString = document.getElementById('gpuInput').value.toLowerCase();
    const moboString = document.getElementById('moboInput').value.toLowerCase();

    // Track if custom values were forced
    let customCpuUsed = false;
    let customGpuUsed = false;

    // 1. Evaluate CPU Value via Selection or Text Guess Fallback
    let cpuVal = selectedCpuValue;
    if (cpuVal === null) {
        customCpuUsed = true;
        if (cpuString.includes('i9') || cpuString.includes('ryzen 9') || cpuString.includes('threadripper')) cpuVal = 440;
        else if (cpuString.includes('i7') || cpuString.includes('ryzen 7')) cpuVal = 260;
        else if (cpuString.includes('i5') || cpuString.includes('ryzen 5')) cpuVal = 140;
        else if (cpuString.includes('i3') || cpuString.includes('ryzen 3')) cpuVal = 55;
        else cpuVal = 40;
    }

    // 2. Evaluate GPU Value via Selection or Text Guess Fallback
    let gpuVal = selectedGpuValue;
    if (gpuVal === null) {
        customGpuUsed = true;
        if (gpuString.includes('9070') || gpuString.includes('90') || gpuString.includes('xtx')) gpuVal = 850;
        else if (gpuString.includes('9060') || gpuString.includes('80') || gpuString.includes('xt')) gpuVal = 450;
        else if (gpuString.includes('70') || gpuString.includes('gre')) gpuVal = 440;
        else if (gpuString.includes('60') || gpuString.includes('5700') || gpuString.includes('7600')) gpuVal = 240;
        else if (gpuString.includes('50') || gpuString.includes('1660') || gpuString.includes('5500')) gpuVal = 130;
        else gpuVal = 65;
    }

    // 3. Evaluate Motherboard Value via Selection or Text Guess Fallback
    let moboVal = selectedMoboValue;
    if (moboVal === null) {
        if (moboString.includes('x670') || moboString.includes('x870') || moboString.includes('z790') || moboString.includes('z890')) {
            moboVal = 240;
        } else if (moboString.includes('b850') || moboString.includes('b650') || moboString.includes('b760') || moboString.includes('b550') || moboString.includes('z690')) {
            moboVal = 155; 
        } else if (moboString.includes('b840') || moboString.includes('h610') || moboString.includes('a620') || moboString.includes('b450')) {
            moboVal = 95;
        } else {
            moboVal = 60;
        }
    }

    // 4. Case Shell, Fans, and Assembly baseline factor
    let systemAssemblyVal = 110; 

    // Calculate Global Value Matrix adjusted by choice of currency
    const baseFairPriceCAD = cpuVal + gpuVal + moboVal + ramVal + ssdVal + psuVal + systemAssemblyVal;
    const estimatedFairPrice = Math.round(baseFairPriceCAD * conversionModifier);

    let verdict = "";
    let verdictClass = "";
    let details = "";

    if (pricePaid <= estimatedFairPrice * 0.90) {
        verdict = "Absolute Steal!";
        verdictClass = "great-deal";
        details = `An estimated fair market price for these specs is around <strong>${currencyTag} $${estimatedFairPrice}</strong>. You saved significantly under fair value matrix standards.`;
    } else if (pricePaid <= estimatedFairPrice * 1.05) {
        verdict = "Fair Price";
        verdictClass = "fair-deal";
        details = `You paid right around what this hardware configuration is valued on the market (Estimated: <strong>${currencyTag} $${estimatedFairPrice}</strong>). Great, safe buy.`;
    } else {
        verdict = "Overpriced";
        verdictClass = "bad-deal";
        details = `You paid <strong>${currencyTag} $${pricePaid}</strong>, but this aggregated component setup is typically valued closer to <strong>${currencyTag} $${estimatedFairPrice}</strong>.`;
    }

    // --- B. CUSTOM INPUT DATA WARNING FLAGS ---
    if (customCpuUsed || customGpuUsed) {
        details += `<br><br><span style="color: var(--text-muted); font-style: italic; font-size: 0.85rem;">Note: One or more typed components weren't found exactly in our system database. We estimated values using average baseline power profiles.</span>`;
    }

    // --- RUNTIME COMPATIBILITY CROSS-CHECK ---
    const isIntelCpu = cpuString.includes('intel') || cpuString.includes('i3') || cpuString.includes('i5') || cpuString.includes('i7') || cpuString.includes('i9');
    const isAmdMobo = moboString.includes('amd') || moboString.includes('b550') || moboString.includes('b650') || moboString.includes('x670') || moboString.includes('x870') || moboString.includes('b850') || moboString.includes('b840') || moboString.includes('a620') || moboString.includes('a320') || moboString.includes('b450');
    const isAmdCpu = cpuString.includes('amd') || cpuString.includes('ryzen') || cpuString.includes('threadripper');
    const isIntelMobo = moboString.includes('intel') || moboString.includes('z790') || moboString.includes('z890') || moboString.includes('b760') || moboString.includes('h610') || moboString.includes('z690') || moboString.includes('b660');

    if (isIntelCpu && isAmdMobo) {
        details += `<br><br><span style="color: #f87171; font-weight: bold;">Note: You paired an Intel CPU with an AMD Motherboard. Make sure your real-world parts are compatible!</span>`;
    } else if (isAmdCpu && isIntelMobo) {
        details += `<br><br><span style="color: #f87171; font-weight: bold;">Note: You paired an AMD CPU with an Intel Motherboard. Make sure your real-world parts are compatible!</span>`;
    }

    const resultCard = document.getElementById('resultCard');
    const verdictText = document.getElementById('verdictText');
    const detailsText = document.getElementById('detailsText');

    verdictText.textContent = verdict;
    verdictText.className = "verdict " + verdictClass;
    detailsText.innerHTML = details;

    // --- DYNAMIC AMAZON AFFILIATE ENGINE ---
    const affiliateContainer = document.getElementById('affiliateContainer');
    if (affiliateContainer) {
        affiliateContainer.innerHTML = ""; // Clear out old buttons safely
        
        const amazonTag = "pcvaluer-20"; // Update with your Associate tag later
        const searchInput = document.getElementById('gpuInput').value;
        const searchTarget = encodeURIComponent(searchInput || "PC Components");
        
        const amazonBaseUrl = isUSD ? "https://www.amazon.com/s" : "https://www.amazon.ca/s";
        const finalAffiliateUrl = `${amazonBaseUrl}?k=${searchTarget}&tag=${amazonTag}`;

        const amazonBtn = document.createElement('a');
        amazonBtn.href = finalAffiliateUrl;
        amazonBtn.target = "_blank"; 
        amazonBtn.className = "amazon-btn";

        if (verdictClass === "bad-deal") {
            amazonBtn.innerHTML = "Get a Better Deal on AMAZON";
        } else {
            amazonBtn.innerHTML = "Upgrade with AMAZON";
        }

        affiliateContainer.appendChild(amazonBtn);
    }
    
    resultCard.classList.remove('hidden');
});

// --- FIXED RESET BUTTON HANDLING ---
document.getElementById('resetBtn').addEventListener('click', function() {
    selectedCpuValue = null;
    selectedGpuValue = null;
    selectedMoboValue = null;

    document.getElementById('cpuInput').value = "";
    document.getElementById('gpuInput').value = "";
    document.getElementById('moboInput').value = "";
    document.getElementById('price').value = "";
    
    document.getElementById('ram').selectedIndex = 5; 
    document.getElementById('ssd').selectedIndex = 1; 
    document.getElementById('psu').selectedIndex = 2; 

    const affiliateContainer = document.getElementById('affiliateContainer');
    if (affiliateContainer) {
        affiliateContainer.innerHTML = "";
    }

    document.getElementById('resultCard').classList.add('hidden');
});
