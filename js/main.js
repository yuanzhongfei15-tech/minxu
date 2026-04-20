// ========================================
// 每日单词 - 主要功能脚本
// ========================================

// 渲染大单词卡片
function renderLargeWordCard(word) {
    const isFavorited = isWordFavorited(word.id);
    const meaningsHtml = word.meanings.map(m => `
        <div class="meaning-item">
            <span class="part-of-speech">${m.pos}</span>
            <span class="meaning-text">${m.meaning}</span>
        </div>
    `).join('');
    
    const examplesHtml = word.examples.map(e => `
        <div class="example-item">
            <p class="example-en">${e.en}</p>
            <p class="example-cn">${e.cn}</p>
        </div>
    `).join('');
    
    const tagsHtml = word.tags.map(tag => `
        <span class="tag">${tag}</span>
    `).join('');
    
    return `
        <div class="word-header">
            <div class="word-main">
                <h2 class="word-text">${word.word}</h2>
                <p class="word-phonetic">${word.phonetic}</p>
            </div>
            <div class="word-actions">
                <button class="action-btn" onclick="playAudio('${word.word}')" title="发音">
                    🔊
                </button>
                <button class="action-btn ${isFavorited ? 'active' : ''}" onclick="toggleFavorite('${word.id}')" title="收藏">
                    ${isFavorited ? '⭐' : '☆'}
                </button>
            </div>
        </div>
        <div class="word-meaning">
            ${meaningsHtml}
        </div>
        <div class="word-examples">
            <p class="example-title">例句</p>
            ${examplesHtml}
        </div>
        <div class="word-tags">
            ${tagsHtml}
        </div>
    `;
}

// 渲染小单词卡片
function renderWordCard(word) {
    const isFavorited = isWordFavorited(word.id);
    const categoryInfo = getCategoryInfo(word.category);
    
    return `
        <div class="word-card" onclick="showWordDetail('${word.id}')">
            <div class="word-card-header">
                <div>
                    <h3 class="word-card-text">${word.word}</h3>
                    <p class="word-card-phonetic">${word.phonetic}</p>
                </div>
            </div>
            <p class="word-card-meaning">${word.meanings[0].meaning}</p>
            <div class="word-card-footer">
                <span class="word-card-category">${categoryInfo ? categoryInfo.name : word.category}</span>
                <div class="word-card-actions" onclick="event.stopPropagation()">
                    <button class="word-card-btn" onclick="playAudio('${word.word}')" title="发音">
                        🔊
                    </button>
                    <button class="word-card-btn ${isFavorited ? 'active' : ''}" onclick="toggleFavorite('${word.id}')" title="收藏">
                        ${isFavorited ? '⭐' : '☆'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// 播放音频（使用 Web Speech API）
function playAudio(text) {
    if ('speechSynthesis' in window) {
        // 取消之前的语音
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        
        // 尝试使用英语语音
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find(voice => voice.lang.includes('en'));
        if (englishVoice) {
            utterance.voice = englishVoice;
        }
        
        window.speechSynthesis.speak(utterance);
    } else {
        alert('您的浏览器不支持语音播放功能');
    }
}

// 确保语音列表加载
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function() {
        // 语音列表已加载
    };
}

// 切换收藏状态
function toggleFavorite(wordId) {
    let favorites = JSON.parse(localStorage.getItem('favoriteWords') || '[]');
    const index = favorites.indexOf(wordId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(wordId);
    }
    
    localStorage.setItem('favoriteWords', JSON.stringify(favorites));
    
    // 更新UI
    updateFavoriteButtons(wordId);
    updateStats();
    
    // 如果在收藏页面，刷新列表
    if (window.location.pathname.includes('favorites.html')) {
        loadFavorites();
    }
}

// 检查单词是否已收藏
function isWordFavorited(wordId) {
    const favorites = JSON.parse(localStorage.getItem('favoriteWords') || '[]');
    return favorites.includes(wordId);
}

// 更新收藏按钮状态
function updateFavoriteButtons(wordId) {
    const buttons = document.querySelectorAll(`[onclick*="toggleFavorite('${wordId}')"]`);
    const isFavorited = isWordFavorited(wordId);
    
    buttons.forEach(btn => {
        btn.classList.toggle('active', isFavorited);
        btn.innerHTML = isFavorited ? '⭐' : '☆';
    });
}

// 显示单词详情
function showWordDetail(wordId) {
    const allWords = getAllWords();
    const word = allWords.find(w => w.id === wordId);
    
    if (word) {
        // 可以在这里实现弹窗或跳转详情页
        // 暂时简单处理：在首页显示详情
        const container = document.getElementById('dailyWordContainer');
        if (container) {
            container.innerHTML = renderLargeWordCard(word);
            container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// 更新统计
function updateStats() {
    const favorites = JSON.parse(localStorage.getItem('favoriteWords') || '[]');
    const favoriteCountEl = document.getElementById('favoriteCount');
    if (favoriteCountEl) {
        favoriteCountEl.textContent = favorites.length;
    }
    
    const today = new Date().toDateString();
    const learned = JSON.parse(localStorage.getItem('learnedWords') || '{}');
    const learnedCountEl = document.getElementById('learnedCount');
    if (learnedCountEl) {
        learnedCountEl.textContent = learned[today] || 0;
    }
}

// 记录学习
function recordLearning(wordId) {
    const today = new Date().toDateString();
    let learned = JSON.parse(localStorage.getItem('learnedWords') || '{}');
    
    if (!learned[today]) {
        learned[today] = 0;
    }
    
    // 检查今天是否已经学习过这个单词
    const todayLearned = JSON.parse(localStorage.getItem('todayLearnedWords') || '[]');
    if (!todayLearned.includes(wordId)) {
        learned[today]++;
        todayLearned.push(wordId);
        localStorage.setItem('todayLearnedWords', JSON.stringify(todayLearned));
        localStorage.setItem('learnedWords', JSON.stringify(learned));
        updateStats();
    }
}

// 分页功能
function renderPagination(currentPage, totalPages, containerId, callback) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    
    // 上一页
    html += `
        <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="${callback}(${currentPage - 1})">
            上一页
        </button>
    `;
    
    // 页码
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    
    if (endPage - startPage < maxVisible - 1) {
        startPage = Math.max(1, endPage - maxVisible + 1);
    }
    
    if (startPage > 1) {
        html += `<button class="page-btn" onclick="${callback}(1)">1</button>`;
        if (startPage > 2) {
            html += `<span class="page-btn" disabled>...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="${callback}(${i})">
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += `<span class="page-btn" disabled>...</span>`;
        }
        html += `<button class="page-btn" onclick="${callback}(${totalPages})">${totalPages}</button>`;
    }
    
    // 下一页
    html += `
        <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="${callback}(${currentPage + 1})">
            下一页
        </button>
    `;
    
    container.innerHTML = html;
}

// 获取URL参数
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 设置页面标题
function setPageTitle(title, description) {
    document.title = title;
    
    // 更新 meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
        metaDesc.content = description;
    }
}

// 初始化移动端菜单
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
        
        // 点击菜单项后关闭菜单
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });
        });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    updateStats();
});
