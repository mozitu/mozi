// 获取DOM元素
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const moreButton = document.getElementById('moreButton');
const messagesContainer = document.querySelector('.messages');
const offlineHeader = document.getElementById('offlineHeader');
const offlineStatus = document.getElementById('offlineStatus');
const clearOfflineHistoryBtn = document.getElementById('clearOfflineHistory');
const clearAllDataBtn = document.getElementById('clearAllDataBtn');
const generateCharacterBtn = document.getElementById('generateCharacterBtn');
const generateModal = document.getElementById('generateModal');
const generateModalClose = document.getElementById('generateModalClose');
const generateRequirement = document.getElementById('generateRequirement');
const generateCancel = document.getElementById('generateCancel');
const generateConfirm = document.getElementById('generateConfirm');
const viewOfflineSummaryBtn = document.getElementById('viewOfflineSummaryBtn');
const viewSmsSummaryBtn = document.getElementById('viewSmsSummaryBtn');
const summaryModal = document.getElementById('summaryModal');
const summaryModalTitle = document.getElementById('summaryModalTitle');
const summaryModalClose = document.getElementById('summaryModalClose');
const summaryContent = document.getElementById('summaryContent');
const summaryCards = document.getElementById('summaryCards');
const summaryCancel = document.getElementById('summaryCancel');
const summaryEdit = document.getElementById('summaryEdit');
const summarySave = document.getElementById('summarySave');
const summaryAIGenerate = document.getElementById('summaryAIGenerate');
const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const appGrid = document.getElementById('appGrid');
const smsBadge = document.getElementById('smsBadge');
const drawerClose = document.getElementById('drawerClose');
const smsApp = document.getElementById('smsApp');
const smsView = document.getElementById('smsView');
const smsBack = document.getElementById('smsBack');
const userApp = document.getElementById('userApp');
const userView = document.getElementById('userView');
const userBack = document.getElementById('userBack');
const spaceView = document.getElementById('spaceView');
const spaceBack = document.getElementById('spaceBack');
const spaceContent = document.getElementById('spaceContent');
const phoneApp = document.getElementById('phoneApp');
const phoneView = document.getElementById('phoneView');
const phoneBack = document.getElementById('phoneBack');
const phoneContacts = document.getElementById('phoneContacts');
const contactPhoneView = document.getElementById('contactPhoneView');
const contactPhoneBack = document.getElementById('contactPhoneBack');
const contactPhoneName = document.getElementById('contactPhoneName');
const phoneUserAvatar = document.getElementById('phoneUserAvatar');
const phoneUserName = document.getElementById('phoneUserName');
const phoneAppSms = document.getElementById('phoneAppSms');
const phoneAppCall = document.getElementById('phoneAppCall');
const phoneAppNote = document.getElementById('phoneAppNote');
const phoneAppBrowser = document.getElementById('phoneAppBrowser');
const phoneAppDiary = document.getElementById('phoneAppDiary');
const phoneAppPeek = document.getElementById('phoneAppPeek');
const phoneRefreshBtn = document.getElementById('phoneRefreshBtn');
const phonePostBtn = document.getElementById('phonePostBtn');
const phoneAppDetailView = document.getElementById('phoneAppDetailView');
const phoneAppDetailBack = document.getElementById('phoneAppDetailBack');
const phoneAppDetailTitle = document.getElementById('phoneAppDetailTitle');
const phoneAppDetailContent = document.getElementById('phoneAppDetailContent');
const phoneAppRefreshBtn = document.getElementById('phoneAppRefreshBtn');
const phoneUserCard = document.getElementById('phoneUserCard');
const addPostBtn = document.getElementById('addPostBtn');
const spaceRefreshBtn = document.getElementById('spaceRefreshBtn');
const postEditView = document.getElementById('postEditView');
const postEditBack = document.getElementById('postEditBack');
const postAuthor = document.getElementById('postAuthor');
const postContent = document.getElementById('postContent');
const savePost = document.getElementById('savePost');
const userName = document.getElementById('userName');
const userPersona = document.getElementById('userPersona');
const saveUserSettings = document.getElementById('saveUserSettings');
const smsMessages = document.getElementById('smsMessages');
const smsMoments = document.getElementById('smsMoments');
const settingsApp = document.getElementById('settingsApp');
const settingsView = document.getElementById('settingsView');
const settingsBack = document.getElementById('settingsBack');
const themeCards = document.querySelectorAll('.theme-card');
const apiUrlInput = document.getElementById('apiUrlInput');
const apiKeyInput = document.getElementById('apiKeyInput');
const apiModelSelect = document.getElementById('apiModelSelect');
const temperatureRange = document.getElementById('temperatureRange');
const temperatureValue = document.getElementById('temperatureValue');
const pullModelsBtn = document.getElementById('pullModelsBtn');
const testConnectionBtn = document.getElementById('testConnectionBtn');
const saveConfigBtn = document.getElementById('saveConfigBtn');
const apiStatus = document.getElementById('apiStatus');
const fontUrlInput = document.getElementById('fontUrlInput');
const previewFontBtn = document.getElementById('previewFontBtn');
const applyFontBtn = document.getElementById('applyFontBtn');
const resetFontBtn = document.getElementById('resetFontBtn');
const fontStatus = document.getElementById('fontStatus');
const globalCssInput = document.getElementById('globalCssInput');
const bubbleCssInput = document.getElementById('bubbleCssInput');
const cssPreviewBubbles = document.getElementById('cssPreviewBubbles');
const gameApp = document.getElementById('gameApp');
const gameView = document.getElementById('gameView');
const gameBack = document.getElementById('gameBack');
const smsTitle = document.getElementById('smsTitle');
const smsContacts = document.getElementById('smsContacts');
const tabMessages = document.getElementById('tabMessages');
const tabContacts = document.getElementById('tabContacts');
const tabMoments = document.getElementById('tabMoments');
const chatDetailView = document.getElementById('chatDetailView');
const chatDetailBack = document.getElementById('chatDetailBack');
const chatDetailName = document.getElementById('chatDetailName');
const chatDetailMessages = document.getElementById('chatDetailMessages');
const chatDetailInput = document.getElementById('chatDetailInput');
const chatDetailSend = document.getElementById('chatDetailSend');
const chatCallBtn = document.getElementById('chatCallBtn');
const chatTypingStatus = document.getElementById('chatTypingStatus');
const chatDetailMore = document.getElementById('chatDetailMore');
const contactEditView = document.getElementById('contactEditView');
const contactEditBack = document.getElementById('contactEditBack');
const contactEditAvatar = document.getElementById('contactEditAvatar');
const contactNickname = document.getElementById('contactNickname');
const contactRealName = document.getElementById('contactRealName');
const contactPersonaEdit = document.getElementById('contactPersonaEdit');
const saveContactEdit = document.getElementById('saveContactEdit');
const deleteContactBtn = document.getElementById('deleteContact');
const colorOptions = document.querySelectorAll('#contactEditView .color-option');
const avatarModal = document.getElementById('avatarModal');
const avatarModalClose = document.getElementById('avatarModalClose');
const avatarPreview = document.getElementById('avatarPreview');
const avatarUrlInput = document.getElementById('avatarUrlInput');
const avatarFileInput = document.getElementById('avatarFileInput');
const avatarClearBtn = document.getElementById('avatarClearBtn');
const avatarSaveBtn = document.getElementById('avatarSaveBtn');
const userAvatarEdit = document.getElementById('userAvatarEdit');
const userAvatarModal = document.getElementById('userAvatarModal');
const userAvatarModalClose = document.getElementById('userAvatarModalClose');
const userAvatarPreview = document.getElementById('userAvatarPreview');
const userAvatarUrlInput = document.getElementById('userAvatarUrlInput');
const userAvatarFileInput = document.getElementById('userAvatarFileInput');
const userAvatarClearBtn = document.getElementById('userAvatarClearBtn');
const userAvatarSaveBtn = document.getElementById('userAvatarSaveBtn');
const addContactBtn = document.getElementById('addContactBtn');
const contactAddView = document.getElementById('contactAddView');
const contactAddBack = document.getElementById('contactAddBack');
const contactAddAvatar = document.getElementById('contactAddAvatar');
const contactAddColors = document.querySelectorAll('#contactAddColors .color-option');
const contactAddName = document.getElementById('contactAddName');
const contactAddPersona = document.getElementById('contactAddPersona');
const saveContactAdd = document.getElementById('saveContactAdd');
const bookApp = document.getElementById('bookApp');
const bookView = document.getElementById('bookView');
const bookBack = document.getElementById('bookBack');
const worldBookCard = document.getElementById('worldBookCard');
const worldBookFileInput = document.getElementById('worldBookFileInput');
const worldBookView = document.getElementById('worldBookView');
const worldBookBack = document.getElementById('worldBookBack');
const worldBookContent = document.getElementById('worldBookContent');
const importWorldBookBtn = document.getElementById('importWorldBookBtn');
const addWorldBookEntryBtn = document.getElementById('addWorldBookEntryBtn');
const worldBookEditView = document.getElementById('worldBookEditView');
const worldBookEditBack = document.getElementById('worldBookEditBack');
const worldBookEditTitle = document.getElementById('worldBookEditTitle');
const worldBookEditComment = document.getElementById('worldBookEditComment');
const worldBookEditKeys = document.getElementById('worldBookEditKeys');
const worldBookEditContent = document.getElementById('worldBookEditContent');
const saveWorldBookEdit = document.getElementById('saveWorldBookEdit');
const presetCard = document.getElementById('presetCard');
const regexCard = document.getElementById('regexCard');
const regexFileInput = document.getElementById('regexFileInput');
const regexView = document.getElementById('regexView');
const regexBack = document.getElementById('regexBack');
const regexContent = document.getElementById('regexContent');
const importRegexBtn = document.getElementById('importRegexBtn');
const regexEditView = document.getElementById('regexEditView');
const regexEditBack = document.getElementById('regexEditBack');
const regexEditTitle = document.getElementById('regexEditTitle');
const regexEditName = document.getElementById('regexEditName');
const regexEditFind = document.getElementById('regexEditFind');
const regexEditReplace = document.getElementById('regexEditReplace');
const saveRegexEdit = document.getElementById('saveRegexEdit');
const presetFileInput = document.getElementById('presetFileInput');
const presetView = document.getElementById('presetView');
const presetBack = document.getElementById('presetBack');
const presetContent = document.getElementById('presetContent');
const importPresetBtn = document.getElementById('importPresetBtn');
const addPresetEntryBtn = document.getElementById('addPresetEntryBtn');
const presetEditView = document.getElementById('presetEditView');
const presetEditBack = document.getElementById('presetEditBack');
const presetEditTitle = document.getElementById('presetEditTitle');
const presetEditName = document.getElementById('presetEditName');
const presetEditRole = document.getElementById('presetEditRole');
const presetEditContentText = document.getElementById('presetEditContentText');
const savePresetEdit = document.getElementById('savePresetEdit');
const emojiApp = document.getElementById('emojiApp');
const emojiManagerView = document.getElementById('emojiManagerView');
const emojiManagerBack = document.getElementById('emojiManagerBack');
const emojiManagerContent = document.getElementById('emojiManagerContent');
const addEmojiBtn = document.getElementById('addEmojiBtn');
const emojiAddModal = document.getElementById('emojiAddModal');
const emojiAddModalClose = document.getElementById('emojiAddModalClose');
const emojiNameInput = document.getElementById('emojiNameInput');
const emojiUrlInput = document.getElementById('emojiUrlInput');
const emojiPreview = document.getElementById('emojiPreview');
const emojiAddCancel = document.getElementById('emojiAddCancel');
const emojiAddConfirm = document.getElementById('emojiAddConfirm');
const chatEmojiBtn = document.getElementById('chatEmojiBtn');
const emojiPanel = document.getElementById('emojiPanel');
const emojiPanelClose = document.getElementById('emojiPanelClose');
const emojiGrid = document.getElementById('emojiGrid');
const importEmojiBtn = document.getElementById('importEmojiBtn');
const emojiFileInput = document.getElementById('emojiFileInput');
const offlineScene = document.getElementById('offlineScene');
const offlineSceneInfo = document.getElementById('offlineSceneInfo');
const currentSceneName = document.getElementById('currentSceneName');
const sceneDateTime = document.getElementById('sceneDateTime');
const sceneWeather = document.getElementById('sceneWeather');
const sceneModal = document.getElementById('sceneModal');
const sceneModalClose = document.getElementById('sceneModalClose');
const customSceneInput = document.getElementById('customSceneInput');
const sceneDescription = document.getElementById('sceneDescription');
const sceneClear = document.getElementById('sceneClear');
const sceneSave = document.getElementById('sceneSave');
const wechatNotificationContainer = document.getElementById('wechatNotificationContainer');
const viewOfflineInnerVoiceBtn = document.getElementById('viewOfflineInnerVoiceBtn');
const viewChatInnerVoiceBtn = document.getElementById('viewChatInnerVoiceBtn');
const innerVoiceModal = document.getElementById('innerVoiceModal');
const innerVoiceAvatar = document.getElementById('innerVoiceAvatar');
const innerVoiceName = document.getElementById('innerVoiceName');
const innerVoiceTime = document.getElementById('innerVoiceTime');
const innerVoiceBody = document.getElementById('innerVoiceBody');
const innerVoiceClose = document.getElementById('innerVoiceClose');

const defaultFontStack = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif";

// 清除线下历史
clearOfflineHistoryBtn.addEventListener('click', () => {
    clearOfflineHistory();
});

// 一键清除所有数据
clearAllDataBtn.addEventListener('click', () => {
    clearAllData();
});

// AI 生成角色
generateCharacterBtn.addEventListener('click', () => {
    openGenerateModal();
});

generateModalClose.addEventListener('click', () => {
    closeGenerateModal();
});

generateCancel.addEventListener('click', () => {
    closeGenerateModal();
});

generateConfirm.addEventListener('click', () => {
    confirmGenerateCharacter();
});

generateModal.addEventListener('click', (e) => {
    if (e.target === generateModal) {
        closeGenerateModal();
    }
});

// 总结弹窗
let currentSummaryType = 'offline'; // 'offline' 或 'sms'

viewOfflineSummaryBtn.addEventListener('click', () => {
    openSummaryModal('offline');
});

viewSmsSummaryBtn.addEventListener('click', () => {
    openSummaryModal('sms');
});

summaryModalClose.addEventListener('click', () => {
    closeSummaryModal();
});

summaryCancel.addEventListener('click', () => {
    closeSummaryModal();
});

summaryEdit.addEventListener('click', () => {
    toggleSummaryEdit();
});

summarySave.addEventListener('click', () => {
    saveSummaryContent();
});

summaryAIGenerate.addEventListener('click', () => {
    generateAISummary();
});

summaryModal.addEventListener('click', (e) => {
    if (e.target === summaryModal) {
        closeSummaryModal();
    }
});

// 发送按钮点击事件
sendButton.addEventListener('click', () => {
    sendMessage();
});

// 输入框回车事件 - 只发消息，不触发AI
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessageOnly(); // 回车只发消息，不触发AI
    }
});

// 线下模式输入框自动调整高度
messageInput.addEventListener('input', () => {
    autoResizeTextarea(messageInput);
});

// 更多按钮点击事件 - 打开抽屉
moreButton.addEventListener('click', () => {
    openDrawer();
});

// 关闭按钮点击事件
drawerClose.addEventListener('click', () => {
    closeDrawer();
});

// 遮罩层点击事件 - 关闭抽屉
drawerOverlay.addEventListener('click', () => {
    closeDrawer();
});

// 设置App点击事件
settingsApp.addEventListener('click', () => {
    openSettingsView();
});

// 短信底部导航栏
tabMessages.addEventListener('click', () => {
    switchSmsTab('messages');
});

tabContacts.addEventListener('click', () => {
    switchSmsTab('contacts');
});

tabMoments.addEventListener('click', () => {
    switchSmsTab('moments');
});

// 聊天详情
chatDetailBack.addEventListener('click', () => {
    closeChatDetail();
});

chatDetailSend.addEventListener('click', () => {
    sendChatMessage();
});

// 通话按钮
chatCallBtn.addEventListener('click', () => {
    startChatCall();
});

chatDetailInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChatMessageOnly(); // 回车只发消息，不触发AI
    }
});

// 自动调整输入框高度
chatDetailInput.addEventListener('input', () => {
    autoResizeTextarea(chatDetailInput);
});

function autoResizeTextarea(textarea) {
    // 先重置高度以获取正确的 scrollHeight
    textarea.style.height = '36px';
    const newHeight = Math.max(36, Math.min(textarea.scrollHeight, 150));
    textarea.style.height = newHeight + 'px';
    
    // 如果内容超过最大高度，显示滚动条
    if (textarea.scrollHeight > 150) {
        textarea.style.overflowY = 'auto';
    } else {
        textarea.style.overflowY = 'hidden';
    }
}

// 联系人编辑
chatDetailMore.addEventListener('click', () => {
    openContactEdit();
});

contactEditBack.addEventListener('click', () => {
    closeContactEdit();
});

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        colorOptions.forEach(o => o.classList.remove('active'));
        option.classList.add('active');
        const color = option.dataset.color;
        contactEditAvatar.style.background = color;
    });
});

saveContactEdit.addEventListener('click', () => {
    saveContactChanges();
});

deleteContactBtn.addEventListener('click', () => {
    deleteContact();
});

// 头像编辑
contactEditAvatar.addEventListener('click', () => {
    openAvatarModal();
});

avatarModalClose.addEventListener('click', () => {
    closeAvatarModal();
});

avatarModal.addEventListener('click', (e) => {
    if (e.target === avatarModal) {
        closeAvatarModal();
    }
});

avatarUrlInput.addEventListener('input', () => {
    const url = avatarUrlInput.value.trim();
    if (url) {
        updateAvatarPreview(url);
    }
});

avatarFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const dataUrl = event.target.result;
            avatarUrlInput.value = dataUrl;
            updateAvatarPreview(dataUrl);
        };
        reader.readAsDataURL(file);
    }
});

avatarClearBtn.addEventListener('click', () => {
    tempAvatarUrl = '';
    avatarUrlInput.value = '';
    resetAvatarPreview();
});

avatarSaveBtn.addEventListener('click', () => {
    saveAvatarChange();
});

// 用户头像编辑
let tempUserAvatarUrl = '';

userAvatarEdit.addEventListener('click', () => {
    openUserAvatarModal();
});

userAvatarModalClose.addEventListener('click', () => {
    closeUserAvatarModal();
});

userAvatarModal.addEventListener('click', (e) => {
    if (e.target === userAvatarModal) {
        closeUserAvatarModal();
    }
});

userAvatarUrlInput.addEventListener('input', () => {
    const url = userAvatarUrlInput.value.trim();
    if (url) {
        updateUserAvatarPreview(url);
    }
});

userAvatarFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const dataUrl = event.target.result;
            userAvatarUrlInput.value = dataUrl;
            updateUserAvatarPreview(dataUrl);
        };
        reader.readAsDataURL(file);
    }
});

userAvatarClearBtn.addEventListener('click', () => {
    tempUserAvatarUrl = '';
    userAvatarUrlInput.value = '';
    resetUserAvatarPreview();
});

userAvatarSaveBtn.addEventListener('click', () => {
    saveUserAvatarChange();
});

// 添加联系人
addContactBtn.addEventListener('click', () => {
    openContactAdd();
});

contactAddBack.addEventListener('click', () => {
    closeContactAdd();
});

contactAddColors.forEach(option => {
    option.addEventListener('click', () => {
        contactAddColors.forEach(o => o.classList.remove('active'));
        option.classList.add('active');
        contactAddAvatar.style.background = option.dataset.color;
    });
});

saveContactAdd.addEventListener('click', () => {
    createNewContact();
});

// 设置界面返回按钮
settingsBack.addEventListener('click', () => {
    closeSettingsView();
});

// 主题卡片选择
themeCards.forEach((card) => {
    card.addEventListener('click', () => {
        const theme = card.dataset.theme;
        applyTheme(theme);
        localStorage.setItem('chatTheme', theme);
    });
});

temperatureRange.addEventListener('input', () => {
    updateTemperatureValue(temperatureRange.value);
});

pullModelsBtn.addEventListener('click', () => {
    fetchModels();
});

testConnectionBtn.addEventListener('click', () => {
    testApiConnection();
});

saveConfigBtn.addEventListener('click', () => {
    saveApiConfig();
});

previewFontBtn.addEventListener('click', () => {
    loadCustomFont(false);
});

applyFontBtn.addEventListener('click', () => {
    loadCustomFont(true);
});

// CSS编辑器事件
document.getElementById('saveGlobalCssBtn')?.addEventListener('click', () => {
    saveCustomCss('global', globalCssInput.value);
});

document.getElementById('resetGlobalCssBtn')?.addEventListener('click', () => {
    globalCssInput.value = '';
    saveCustomCss('global', '');
});

document.getElementById('saveBubbleCssBtn')?.addEventListener('click', () => {
    saveCustomCss('bubble', bubbleCssInput.value);
});

document.getElementById('resetBubbleCssBtn')?.addEventListener('click', () => {
    bubbleCssInput.value = '';
    saveCustomCss('bubble', '');
    updateBubblePreview('');
});

// 复制CSS示例按钮
document.getElementById('copyGlobalCssExample')?.addEventListener('click', () => {
    const example = globalCssInput.placeholder;
    navigator.clipboard.writeText(example).then(() => {
        const btn = document.getElementById('copyGlobalCssExample');
        const originalText = btn.textContent;
        btn.textContent = '已复制！';
        setTimeout(() => btn.textContent = originalText, 1500);
    });
});

document.getElementById('copyBubbleCssExample')?.addEventListener('click', () => {
    const example = bubbleCssInput.placeholder;
    navigator.clipboard.writeText(example).then(() => {
        const btn = document.getElementById('copyBubbleCssExample');
        const originalText = btn.textContent;
        btn.textContent = '已复制！';
        setTimeout(() => btn.textContent = originalText, 1500);
    });
});

// 气泡CSS实时预览
bubbleCssInput?.addEventListener('input', () => {
    updateBubblePreview(bubbleCssInput.value);
});

// 全局CSS实时预览
globalCssInput?.addEventListener('input', () => {
    applyCustomCss('global-preview', globalCssInput.value);
});

resetFontBtn.addEventListener('click', () => {
    resetCustomFont();
});

// 游戏App点击事件
gameApp.addEventListener('click', () => {
    openGameView();
});

gameBack.addEventListener('click', () => {
    closeGameView();
});

// 用户App点击事件
userApp.addEventListener('click', () => {
    openUserView();
});

userBack.addEventListener('click', () => {
    closeUserView();
});

// 手机App
phoneApp.addEventListener('click', () => {
    openPhoneView();
});

phoneBack.addEventListener('click', () => {
    closePhoneView();
});

contactPhoneBack.addEventListener('click', () => {
    closeContactPhoneView();
});

phoneAppDetailBack.addEventListener('click', () => {
    closePhoneAppDetail();
});

// APP内刷新按钮
phoneAppRefreshBtn.addEventListener('click', () => {
    refreshCurrentPhoneApp();
});

// 刷新当前APP内容 - AI生成专属内容
async function refreshCurrentPhoneApp() {
    if (!currentPhoneApp || !currentViewingContact) return;
    
    const saved = getContactData(currentViewingContact);
    const displayName = saved?.nickname || currentViewingContact;
    
    // 获取联系人人设
    const customContacts = getCustomContacts();
    const contactInfo = customContacts.find(c => c.name === currentViewingContact);
    const persona = contactInfo?.persona || '一个普通人';
    
    // 获取用户信息
    const userSettings = getUserSettings();
    const userName = userSettings.name || '用户';
    const userPersona = userSettings.persona || '一个普通人';
    
    // 获取剧情上下文
    const chatHistory = getChatHistory(currentViewingContact);
    let plotContext = '';
    if (chatHistory.length > 0) {
        const recent = chatHistory.slice(-8);
        plotContext = recent.map(msg => {
            const sender = msg.type === 'sent' ? userName : displayName;
            const text = msg.isEmoji ? '[表情]' : (msg.text || '');
            return `${sender}: ${text}`;
        }).join('\n');
    }
    
    // 显示加载动画（只有按钮显示loading，窥视APP才显示内容区加载动画）
    phoneAppRefreshBtn.classList.add('loading');
    
    // 只有窥视APP需要内容区加载动画
    if (currentPhoneApp === 'peek') {
        phoneAppDetailContent.innerHTML = `
            <div class="app-loading-container">
                <div class="loading-spinner"></div>
                <div class="app-loading-text">正在窥视${displayName}的内心...</div>
            </div>
        `;
    }
    
    try {
        let prompt = '';
        let dataKey = '';
        
        switch(currentPhoneApp) {
            case 'call':
                dataKey = 'callHistory';
                prompt = `你现在完全扮演"${displayName}"。

【${displayName}的人设】
${persona}

【用户信息】
用户名：${userName}
${plotContext ? `\n【近期剧情】\n${plotContext}\n` : ''}

请生成${displayName}手机里的1-3条通话记录（JSON格式）。
要求：
- 通话对象是${displayName}的朋友/家人/同事，不能是${userName}
- 要符合${displayName}的人设和社交圈
- 包含通话类型(incoming来电/outgoing去电/missed未接)、时间、时长、通话内容

返回格式（不要markdown标记）：
[
  {
    "name": "通话对象名",
    "type": "incoming",
    "time": "今天 14:30",
    "duration": "5分钟",
    "transcript": [
      {"speaker": "对方", "text": "喂，在吗？"},
      {"speaker": "我", "text": "在的，怎么了？"}
    ]
  }
]`;
                break;
                
            case 'note':
                dataKey = 'notes';
                prompt = `你现在完全扮演"${displayName}"。

【${displayName}的人设】
${persona}

【用户信息】
用户名：${userName}
${plotContext ? `\n【近期剧情】\n${plotContext}\n` : ''}

请生成${displayName}手机便签里的2-3条便签内容（JSON格式）。
要求：
- 内容要符合${displayName}的人设、性格和生活
- 可以是待办事项、日常记录、想法感悟、小秘密等
- 每条便签20-80字

返回格式（不要markdown标记）：
["便签内容1", "便签内容2", "便签内容3"]`;
                break;
                
            case 'browser':
                dataKey = 'browser';
                prompt = `你现在完全扮演"${displayName}"。

【${displayName}的人设】
${persona}

【用户信息】
用户名：${userName}
${plotContext ? `\n【近期剧情】\n${plotContext}\n` : ''}

请生成${displayName}手机浏览器的2-4条浏览记录（JSON格式）。
要求：
- 浏览内容要符合${displayName}的人设、兴趣和职业
- URL要看起来真实（可以是编造的但格式正确）
- 包含网页内容摘要

返回格式（不要markdown标记）：
[
  {
    "title": "网页标题",
    "url": "https://example.com/path",
    "time": "今天 15:20",
    "content": "网页主要内容摘要，50-100字"
  }
]`;
                break;
                
            case 'diary':
                dataKey = 'diary';
                prompt = `你现在完全扮演"${displayName}"。

【${displayName}的人设】
${persona}

【用户信息】
用户名：${userName}（${displayName}认识的人）
${plotContext ? `\n【近期剧情】\n${plotContext}\n` : ''}

请以${displayName}的口吻写1-2篇日记（JSON格式）。
要求：
- 完全以${displayName}第一人称视角
- 内容要符合人设，可以涉及对${userName}的看法
- 每篇日记100-200字，要有真实感

返回格式（不要markdown标记）：
[
  {
    "time": "2024年12月1日 晴",
    "content": "日记内容..."
  }
]`;
                break;
                
            case 'peek':
                dataKey = 'peek';
                prompt = `【任务】
你需要以"${displayName}"的身份，写一篇500字左右的内心独白日记。

【${displayName}的人设】
${persona}

【对象信息】
${displayName}认识"${userName}"。
${userPersona ? `${userName}的情况：${userPersona}` : ''}
${plotContext ? `\n【近期互动】\n${plotContext}\n` : ''}

【要求】
1. 完全以${displayName}的第一人称视角
2. 写出内心真实想法、情感波动、秘密心事
3. 可以涉及对${userName}的复杂情感
4. 要有文学性，像真实的私密日记

直接输出日记内容，不要任何标题或格式：`;
                break;
                
            case 'sms':
                // SMS使用现有的对话生成逻辑
                dataKey = 'conversations';
                const existingConversations = getGeneratedPhoneData(currentViewingContact, 'conversations') || [];
                prompt = `你现在完全扮演"${displayName}"。

【${displayName}的人设】
${persona}

【用户信息】
用户名：${userName}
${plotContext ? `\n【近期剧情】\n${plotContext}\n` : ''}
${existingConversations.length > 0 ? `【已有对话好友】\n${existingConversations.map(c => c.friend).join('、')}\n` : ''}

请生成${displayName}微信里和1-2个朋友的新对话（JSON格式）。
要求：
- 对话对象是${displayName}的朋友，不能是${userName}
- 每个对话4-8条消息，有来有回
- 内容符合${displayName}的人设和社交习惯

返回格式（不要markdown标记）：
[
  {
    "friend": "朋友名字",
    "messages": [
      {"sender": "朋友名字", "text": "消息内容"},
      {"sender": "我", "text": "回复内容"}
    ]
  }
]`;
                break;
        }
        
        if (!prompt) {
            phoneAppRefreshBtn.classList.remove('loading');
            return;
        }
        
        // 调用AI
        const response = await callAI(prompt, '');
        
        // 解析响应
        let generatedData;
        if (currentPhoneApp === 'peek') {
            // peek返回纯文本
            generatedData = response.trim();
        } else {
            // 其他返回JSON
            let jsonStr = response;
            jsonStr = jsonStr.replace(/```json\s*/gi, '').replace(/```\s*/g, '');
            
            // 找JSON数组或对象
            const firstBracket = jsonStr.indexOf('[');
            const firstBrace = jsonStr.indexOf('{');
            let startIndex = -1;
            let isArray = false;
            
            if (firstBracket !== -1 && (firstBrace === -1 || firstBracket < firstBrace)) {
                startIndex = firstBracket;
                isArray = true;
            } else if (firstBrace !== -1) {
                startIndex = firstBrace;
                isArray = false;
            }
            
            if (startIndex === -1) {
                throw new Error('无法解析AI响应');
            }
            
            // 找匹配的结束符
            const endChar = isArray ? ']' : '}';
            const startChar = isArray ? '[' : '{';
            let count = 0;
            let endIndex = -1;
            let inString = false;
            let escapeNext = false;
            
            for (let i = startIndex; i < jsonStr.length; i++) {
                const char = jsonStr[i];
                if (escapeNext) { escapeNext = false; continue; }
                if (char === '\\') { escapeNext = true; continue; }
                if (char === '"') { inString = !inString; continue; }
                if (inString) continue;
                if (char === startChar) count++;
                else if (char === endChar) {
                    count--;
                    if (count === 0) { endIndex = i; break; }
                }
            }
            
            if (endIndex === -1) throw new Error('JSON格式错误');
            
            jsonStr = jsonStr.substring(startIndex, endIndex + 1);
            generatedData = JSON.parse(jsonStr);
        }
        
        // 保存生成的数据
        if (currentPhoneApp === 'sms') {
            // 对话需要合并处理
            const existingConversations = getGeneratedPhoneData(currentViewingContact, 'conversations') || [];
            let updatedConversations = [...existingConversations];
            
            generatedData.forEach(newConv => {
                const existingIndex = updatedConversations.findIndex(c => c.friend === newConv.friend);
                if (existingIndex !== -1) {
                    updatedConversations[existingIndex].messages = [
                        ...updatedConversations[existingIndex].messages,
                        ...newConv.messages
                    ];
                } else {
                    updatedConversations.unshift(newConv);
                }
            });
            
            saveGeneratedPhoneData(currentViewingContact, 'conversations', updatedConversations);
        } else {
            // 其他类型追加到现有数据
            const existingData = getGeneratedPhoneData(currentViewingContact, dataKey) || (currentPhoneApp === 'peek' ? '' : []);
            
            if (currentPhoneApp === 'peek') {
                saveGeneratedPhoneData(currentViewingContact, dataKey, generatedData);
            } else if (Array.isArray(generatedData)) {
                const newData = [...generatedData, ...(Array.isArray(existingData) ? existingData : [])];
                saveGeneratedPhoneData(currentViewingContact, dataKey, newData);
            }
        }
        
        // 重新加载当前APP显示
        switch(currentPhoneApp) {
            case 'call': loadPhoneAppCall(); break;
            case 'note': loadPhoneAppNote(); break;
            case 'browser': loadPhoneAppBrowser(); break;
            case 'diary': loadPhoneAppDiary(); break;
            case 'peek': loadPhoneAppPeek(); break;
            case 'sms': loadPhoneSmsMessages(); break;
        }
        
    } catch (error) {
        console.error('生成内容失败:', error);
        phoneAppDetailContent.innerHTML = `
            <div class="app-content-empty">
                生成失败: ${error.message}<br><br>
                点击刷新按钮重试
            </div>
        `;
    } finally {
        phoneAppRefreshBtn.classList.remove('loading');
    }
}

// 手机APP点击事件
phoneAppSms.addEventListener('click', () => {
    openPhoneApp('sms');
});

phoneAppCall.addEventListener('click', () => {
    openPhoneApp('call');
});

phoneAppNote.addEventListener('click', () => {
    openPhoneApp('note');
});

phoneAppBrowser.addEventListener('click', () => {
    openPhoneApp('browser');
});

phoneAppDiary.addEventListener('click', () => {
    openPhoneApp('diary');
});

phoneAppPeek.addEventListener('click', () => {
    openPhoneApp('peek');
});

phoneRefreshBtn.addEventListener('click', () => {
    generatePhoneContent();
});

phonePostBtn.addEventListener('click', () => {
    triggerContactPost();
});

phoneUserCard.addEventListener('click', () => {
    showPhoneOwnerPersona();
});

addPostBtn.addEventListener('click', () => {
    openPostEdit();
});

spaceRefreshBtn.addEventListener('click', () => {
    triggerRandomContactPost();
});

postEditBack.addEventListener('click', () => {
    closePostEdit();
});

savePost.addEventListener('click', () => {
    publishPost();
});

saveUserSettings.addEventListener('click', () => {
    saveUserData();
});

// 书本App点击事件
bookApp.addEventListener('click', () => {
    openBookView();
});

bookBack.addEventListener('click', () => {
    closeBookView();
});

// 世界书卡片点击事件
worldBookCard.addEventListener('click', () => {
    openWorldBookView();
});

worldBookBack.addEventListener('click', () => {
    closeWorldBookView();
});

importWorldBookBtn.addEventListener('click', () => {
    worldBookFileInput.click();
});

addWorldBookEntryBtn.addEventListener('click', () => {
    addNewWorldBookEntry();
});

worldBookFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        importWorldBookFile(file);
    }
    worldBookFileInput.value = '';
});

worldBookEditBack.addEventListener('click', () => {
    closeWorldBookEdit();
});

saveWorldBookEdit.addEventListener('click', () => {
    saveWorldBookEditChanges();
});

// 正则卡片点击事件
regexCard.addEventListener('click', () => {
    openRegexView();
});

regexBack.addEventListener('click', () => {
    closeRegexView();
});

importRegexBtn.addEventListener('click', () => {
    regexFileInput.click();
});

regexFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        importRegexFile(file);
    }
    regexFileInput.value = '';
});

regexEditBack.addEventListener('click', () => {
    closeRegexEdit();
});

saveRegexEdit.addEventListener('click', () => {
    saveRegexEditChanges();
});

// 预设卡片点击事件
presetCard.addEventListener('click', () => {
    openPresetView();
});

presetBack.addEventListener('click', () => {
    closePresetView();
});

importPresetBtn.addEventListener('click', () => {
    presetFileInput.click();
});

addPresetEntryBtn.addEventListener('click', () => {
    addNewPresetEntry();
});

presetFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        importPresetFile(file);
    }
    presetFileInput.value = '';
});

presetEditBack.addEventListener('click', () => {
    closePresetEdit();
});

savePresetEdit.addEventListener('click', () => {
    savePresetEditChanges();
});

// 打开抽屉函数
function openDrawer() {
    drawer.classList.add('active');
    drawerOverlay.classList.add('active');
    // 防止背景滚动
    document.body.style.overflow = 'hidden';
}

// 关闭抽屉函数
function closeDrawer() {
    drawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    restoreBodyScrollIfIdle();
}

// ========== APP 拖拽排序 ==========
let draggedApp = null;
let dragStartPos = { x: 0, y: 0 };
let isDragging = false;
let longPressTimer = null;

function initAppDragSort() {
    const apps = appGrid.querySelectorAll('.app-item');
    
    apps.forEach(app => {
        // 长按开始拖拽
        const startDrag = (e) => {
            const touch = e.touches ? e.touches[0] : e;
            dragStartPos = { x: touch.clientX, y: touch.clientY };
            
            longPressTimer = setTimeout(() => {
                isDragging = true;
                draggedApp = app;
                app.classList.add('dragging');
                appGrid.classList.add('sorting');
                
                // 触发震动反馈（如果支持）
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
            }, 500);
        };
        
        const moveDrag = (e) => {
            if (!isDragging || !draggedApp) return;
            
            e.preventDefault();
            const touch = e.touches ? e.touches[0] : e;
            
            // 找到当前位置下的其他 app
            const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
            const targetApp = elemBelow?.closest('.app-item');
            
            if (targetApp && targetApp !== draggedApp) {
                // 交换位置
                const allApps = Array.from(appGrid.querySelectorAll('.app-item'));
                const draggedIndex = allApps.indexOf(draggedApp);
                const targetIndex = allApps.indexOf(targetApp);
                
                if (draggedIndex < targetIndex) {
                    targetApp.after(draggedApp);
                } else {
                    targetApp.before(draggedApp);
                }
            }
        };
        
        const endDrag = () => {
            if (longPressTimer) {
                clearTimeout(longPressTimer);
                longPressTimer = null;
            }
            
            if (isDragging && draggedApp) {
                draggedApp.classList.remove('dragging');
                appGrid.classList.remove('sorting');
                saveAppOrder();
            }
            
            isDragging = false;
            draggedApp = null;
        };
        
        app.addEventListener('touchstart', startDrag, { passive: true });
        app.addEventListener('touchmove', moveDrag, { passive: false });
        app.addEventListener('touchend', endDrag);
        app.addEventListener('touchcancel', endDrag);
        
        app.addEventListener('mousedown', startDrag);
        app.addEventListener('mousemove', moveDrag);
        app.addEventListener('mouseup', endDrag);
        app.addEventListener('mouseleave', endDrag);
    });
}

function saveAppOrder() {
    const apps = appGrid.querySelectorAll('.app-item');
    const order = Array.from(apps).map(app => app.id);
    localStorage.setItem('appOrder', JSON.stringify(order));
}

function loadAppOrder() {
    try {
        const order = JSON.parse(localStorage.getItem('appOrder'));
        if (!order || !Array.isArray(order)) return;
        
        order.forEach(id => {
            const app = document.getElementById(id);
            if (app) {
                appGrid.appendChild(app);
            }
        });
    } catch (e) {
        console.warn('加载 APP 顺序失败', e);
    }
}

// 初始化
loadAppOrder();
initAppDragSort();

// ========== 空间功能 ==========
function openSpaceView() {
    spaceView.classList.add('active');
    document.body.style.overflow = 'hidden';
    loadPosts();
    saveViewState('space');
}

function closeSpaceView() {
    spaceView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('drawer');
}

function openPostEdit() {
    postEditView.classList.add('active');
    postContent.value = '';
    loadPostAuthors();
}

function closePostEdit() {
    postEditView.classList.remove('active');
}

function loadPostAuthors() {
    const userData = getUserData();
    const contacts = getCustomContacts();
    
    postAuthor.innerHTML = `<option value="user">${userData.name || '我自己'}</option>`;
    
    contacts.forEach(c => {
        const saved = getContactData(c.name);
        const displayName = saved?.nickname || c.name;
        postAuthor.innerHTML += `<option value="${c.name}">${displayName}</option>`;
    });
}

function getPosts() {
    try {
        return JSON.parse(localStorage.getItem('spacePosts')) || [];
    } catch {
        return [];
    }
}

function savePosts(posts) {
    localStorage.setItem('spacePosts', JSON.stringify(posts));
}

function publishPost() {
    const content = postContent.value.trim();
    if (!content) {
        alert('请输入动态内容');
        return;
    }
    
    const authorValue = postAuthor.value;
    const posts = getPosts();
    
    const newPost = {
        id: Date.now(),
        author: authorValue,
        content: content,
        time: new Date().toLocaleString('zh-CN')
    };
    
    posts.unshift(newPost);
    savePosts(posts);
    
    closePostEdit();
    loadPosts();
}

function loadPosts() {
    const posts = getPosts();
    
    if (posts.length === 0) {
        spaceContent.innerHTML = '<div class="space-empty">暂无动态，点击右上角发布</div>';
        return;
    }
    
    spaceContent.innerHTML = '';
    
    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        
        let authorName, avatarHtml;
        
        if (post.author === 'user') {
            const userData = getUserData();
            authorName = userData.name || '我';
            if (userData.avatar) {
                avatarHtml = `<div class="post-avatar"><img src="${userData.avatar}"></div>`;
            } else {
                avatarHtml = `<div class="post-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>`;
            }
        } else {
            const saved = getContactData(post.author);
            authorName = saved?.nickname || post.author;
            if (saved?.avatar) {
                avatarHtml = `<div class="post-avatar"><img src="${saved.avatar}"></div>`;
            } else {
                avatarHtml = `<div class="post-avatar" style="background:${saved?.color || 'var(--accent)'}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>`;
            }
        }
        
        const imageHtml = post.image ? `<div class="post-image" data-desc="${escapeHtml(post.imageDesc || '图片')}"><img src="${post.image}" alt="朋友圈图片"></div>` : '';
        
        // 点赞列表
        const likes = post.likes || [];
        const userData = getUserData();
        const userLiked = likes.includes('user');
        const likesHtml = likes.length > 0 ? `<div class="post-likes">❤️ ${likes.map(l => l === 'user' ? (userData.name || '我') : l).join('、')}</div>` : '';
        
        // 评论列表
        const comments = post.comments || [];
        const commentsHtml = comments.map(c => {
            const commenterName = c.author === 'user' ? (userData.name || '我') : c.author;
            if (c.replyTo) {
                return `<div class="post-comment"><span class="comment-author">${commenterName}</span> 回复 <span class="comment-author">${c.replyTo}</span>：${escapeHtml(c.text)}</div>`;
            }
            return `<div class="post-comment"><span class="comment-author">${commenterName}</span>：${escapeHtml(c.text)}</div>`;
        }).join('');
        
        card.innerHTML = `
            <div class="post-header">
                ${avatarHtml}
                <div class="post-info">
                    <div class="post-author">${authorName}</div>
                    <div class="post-time">${post.time}</div>
                </div>
                <button class="post-delete" title="删除">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
            <div class="post-content">${escapeHtml(post.content)}</div>
            ${imageHtml}
            <div class="post-actions">
                <button class="post-action-btn post-like-btn ${userLiked ? 'liked' : ''}" data-post-id="${post.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${userLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    点赞
                </button>
                <button class="post-action-btn post-comment-btn" data-post-id="${post.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    评论
                </button>
            </div>
            <div class="post-interactions">
                ${likesHtml}
                <div class="post-comments">${commentsHtml}</div>
            </div>
        `;
        
        card.querySelector('.post-delete').addEventListener('click', () => {
            if (confirm('删除这条动态？')) {
                deletePost(post.id);
            }
        });
        
        // 点赞按钮
        card.querySelector('.post-like-btn').addEventListener('click', () => {
            togglePostLike(post.id);
        });
        
        // 评论按钮
        card.querySelector('.post-comment-btn').addEventListener('click', () => {
            showCommentInput(post.id, post.author);
        });
        
        // 图片点击显示描述
        const postImage = card.querySelector('.post-image');
        if (postImage) {
            postImage.addEventListener('click', () => {
                showImageDescription(post.imageDesc || '图片');
            });
        }
        
        spaceContent.appendChild(card);
    });
}

function deletePost(postId) {
    let posts = getPosts();
    posts = posts.filter(p => p.id !== postId);
    savePosts(posts);
    loadPosts();
}

// 点赞切换
function togglePostLike(postId) {
    let posts = getPosts();
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    if (!post.likes) post.likes = [];
    
    const userIndex = post.likes.indexOf('user');
    if (userIndex > -1) {
        post.likes.splice(userIndex, 1);
    } else {
        post.likes.push('user');
    }
    
    savePosts(posts);
    loadPosts();
}

// 显示评论输入框
function showCommentInput(postId, postAuthor, refreshCallback = null) {
    const modal = document.createElement('div');
    modal.className = 'comment-input-modal';
    modal.innerHTML = `
        <div class="comment-input-content">
            <div class="comment-input-title">发表评论</div>
            <textarea class="comment-textarea" placeholder="写下你的评论..." rows="3"></textarea>
            <div class="comment-input-actions">
                <button class="comment-cancel-btn">取消</button>
                <button class="comment-submit-btn">发送</button>
            </div>
        </div>
    `;
    
    const textarea = modal.querySelector('.comment-textarea');
    const cancelBtn = modal.querySelector('.comment-cancel-btn');
    const submitBtn = modal.querySelector('.comment-submit-btn');
    
    cancelBtn.addEventListener('click', () => {
        modal.classList.add('fade-out');
        setTimeout(() => modal.remove(), 200);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('fade-out');
            setTimeout(() => modal.remove(), 200);
        }
    });
    
    submitBtn.addEventListener('click', async () => {
        const text = textarea.value.trim();
        if (!text) return;
        
        // 添加用户评论
        addPostComment(postId, 'user', text);
        if (refreshCallback) refreshCallback();
        
        modal.classList.add('fade-out');
        setTimeout(() => modal.remove(), 200);
        
        // AI回复评论
        await generateCommentReply(postId, postAuthor, text, refreshCallback);
    });
    
    document.body.appendChild(modal);
    setTimeout(() => {
        modal.classList.add('active');
        textarea.focus();
    }, 10);
}

// 添加评论
function addPostComment(postId, author, text, replyTo = null) {
    let posts = getPosts();
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    if (!post.comments) post.comments = [];
    
    post.comments.push({
        author,
        text,
        replyTo,
        time: new Date().toLocaleString('zh-CN')
    });
    
    savePosts(posts);
    loadPosts();
}

// AI生成评论回复
async function generateCommentReply(postId, postAuthor, userComment, refreshCallback = null) {
    // 如果是用户自己的帖子，随机选一个联系人回复
    let replier = postAuthor;
    if (postAuthor === 'user') {
        const contacts = getCustomContacts().filter(c => c.persona);
        if (contacts.length > 0) {
            replier = contacts[Math.floor(Math.random() * contacts.length)].name;
        } else {
            return; // 没有联系人可以回复
        }
    }
    
    const contacts = getCustomContacts();
    const contact = contacts.find(c => c.name === replier);
    const persona = contact?.persona || '';
    
    if (!persona) return;
    
    const config = JSON.parse(localStorage.getItem('apiConfig')) || {};
    if (!config.url || !config.model) return;
    
    const posts = getPosts();
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    const userData = getUserData();
    const userName = userData.name || '用户';
    
    const prompt = `【任务】
你是"${replier}"，需要回复用户在你朋友圈下的评论。

【你的人设】
${persona}

【你发的朋友圈】
${post.content}

【用户(${userName})的评论】
${userComment}

【要求】
1. 用符合你人设的语气回复
2. 简短自然，像真实的朋友圈回复（5-30字）
3. 可以用表情符号
4. 直接输出回复内容，不要任何其他说明`;

    let apiUrl = config.url.replace(/\/$/, '');
    if (!apiUrl.endsWith('/chat/completions')) {
        apiUrl += '/chat/completions';
    }
    
    const headers = { 'Content-Type': 'application/json' };
    if (config.key) {
        headers['Authorization'] = `Bearer ${config.key}`;
    }
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                model: config.model,
                messages: [
                    { role: 'system', content: '你是一个社交媒体用户，正在回复朋友圈评论。' },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.8
            })
        });
        
        if (!response.ok) return;
        
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content?.trim() || '';
        
        if (reply) {
            // 添加AI回复
            addPostComment(postId, replier, reply, userName);
            if (refreshCallback) refreshCallback();
        }
    } catch (e) {
        console.error('生成评论回复失败:', e);
    }
}

// 获取朋友圈上下文（供AI参考）
function getMomentsContext() {
    const posts = getPosts();
    if (posts.length === 0) return '';
    
    const userData = getUserData();
    const userName = userData.name || '用户';
    
    // 只取最近10条朋友圈
    const recentPosts = posts.slice(0, 10);
    
    const postsText = recentPosts.map(post => {
        let authorName;
        if (post.author === 'user') {
            authorName = userName + '（用户自己）';
        } else {
            const saved = getContactData(post.author);
            authorName = saved?.nickname || post.author;
        }
        
        let text = `• ${authorName}：${post.content}`;
        if (post.imageDesc) {
            text += ` [配图：${post.imageDesc}]`;
        }
        text += ` (${post.time})`;
        return text;
    }).join('\n');
    
    return `[朋友圈动态（最近${recentPosts.length}条）]
以下是朋友圈的最新动态，你可以在聊天中自然地提到这些内容：
${postsText}

提示：可以评论别人的朋友圈、询问朋友圈里提到的事情、或者在对话中自然地引用这些动态。`;
}

// 显示图片描述弹窗
function showImageDescription(desc) {
    const modal = document.createElement('div');
    modal.className = 'image-desc-modal';
    modal.innerHTML = `
        <div class="image-desc-content">
            <div class="image-desc-title">📷 图片内容</div>
            <div class="image-desc-text">${escapeHtml(desc)}</div>
            <button class="image-desc-close">知道了</button>
        </div>
    `;
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('image-desc-close')) {
            modal.classList.add('fade-out');
            setTimeout(() => modal.remove(), 200);
        }
    });
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

// 联系人发朋友圈
const CONTACT_POST_IMAGE = 'https://static.eeo.cn/upload/images/20251129/ca6e37f411c8b7241993.png';

async function generateContactPost(contactName) {
    const contacts = getCustomContacts();
    const contact = contacts.find(c => c.name === contactName);
    const persona = contact?.persona || '';
    
    if (!persona) {
        alert('该联系人没有设置人设，无法生成朋友圈');
        return null;
    }
    
    const config = JSON.parse(localStorage.getItem('apiConfig')) || {};
    if (!config.url || !config.model) {
        alert('请先配置API');
        return null;
    }
    
    const userData = getUserData();
    const userName = userData.name || '用户';
    
    const prompt = `【任务】
你需要以"${contactName}"的身份，写一条朋友圈动态。

【${contactName}的人设】
${persona}

【写作要求】
1. 内容要完全符合人设性格和说话风格
2. 可以是日常分享、心情感悟、秀恩爱、炫耀、吐槽等任何类型
3. 可以选择是否配图（50%概率配图）
4. 长度适中，像真实的朋友圈（20-100字）
5. 可以包含表情符号
6. 如果有对${userName}的暗示或提及会更好（但不强求）

【输出格式】
如果配图，输出格式：
[图片:图片内容描述]
朋友圈文字内容

例如：
[图片:窗边的咖啡和书本，阳光洒落]
今天的下午茶时光~

如果不配图，直接输出：
朋友圈文字内容

注意：只输出朋友圈内容，不要有任何其他说明。`;

    let apiUrl = config.url.replace(/\/$/, '');
    if (!apiUrl.endsWith('/chat/completions')) {
        apiUrl += '/chat/completions';
    }
    
    const headers = { 'Content-Type': 'application/json' };
    if (config.key) {
        headers['Authorization'] = `Bearer ${config.key}`;
    }
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                model: config.model,
                messages: [
                    { role: 'system', content: '你是一个社交媒体内容创作者，擅长根据人物性格创作真实感的朋友圈动态。' },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.9
            })
        });
        
        if (!response.ok) {
            throw new Error(`API错误: ${response.status}`);
        }
        
        const data = await response.json();
        const content = data.choices?.[0]?.message?.content || '';
        
        // 解析是否有图片和图片描述
        let hasImage = false;
        let imageDesc = '';
        let postContent = content.trim();
        
        // 匹配 [图片:描述] 或 [图片]
        const imageMatch = postContent.match(/^\[图片[:：]?([^\]]*)\]/);
        if (imageMatch) {
            hasImage = true;
            imageDesc = imageMatch[1]?.trim() || '图片';
            postContent = postContent.replace(imageMatch[0], '').trim();
        }
        
        // 创建朋友圈
        const posts = getPosts();
        const newPost = {
            id: Date.now(),
            author: contactName,
            content: postContent,
            time: new Date().toLocaleString('zh-CN'),
            image: hasImage ? CONTACT_POST_IMAGE : null,
            imageDesc: hasImage ? imageDesc : null
        };
        
        posts.unshift(newPost);
        savePosts(posts);
        
        return newPost;
    } catch (e) {
        console.error('生成朋友圈失败:', e);
        alert('生成朋友圈失败: ' + e.message);
        return null;
    }
}

// 在手机界面触发联系人发朋友圈
async function triggerContactPost() {
    if (!currentViewingContact) return;
    
    const saved = getContactData(currentViewingContact);
    const displayName = saved?.nickname || currentViewingContact;
    
    // 显示加载提示
    const loadingToast = document.createElement('div');
    loadingToast.className = 'loading-toast';
    loadingToast.innerHTML = `<div class="loading-spinner"></div><span>${displayName}正在发朋友圈...</span>`;
    loadingToast.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.8);color:white;padding:20px 30px;border-radius:12px;z-index:9999;display:flex;align-items:center;gap:12px;';
    document.body.appendChild(loadingToast);
    
    const post = await generateContactPost(currentViewingContact);
    
    loadingToast.remove();
    
    if (post) {
        alert(`${displayName}发布了一条朋友圈！`);
        // 刷新空间视图（如果打开的话）
        if (spaceView.classList.contains('active')) {
            loadPosts();
        }
    }
}

// 随机选择联系人发朋友圈（空间界面刷新按钮）
async function triggerRandomContactPost() {
    const contacts = getCustomContacts();
    
    // 过滤出有人设的联系人
    const contactsWithPersona = contacts.filter(c => c.persona && c.persona.trim());
    
    if (contactsWithPersona.length === 0) {
        alert('没有设置人设的联系人，无法生成朋友圈');
        return;
    }
    
    // 随机选择一个联系人
    const randomContact = contactsWithPersona[Math.floor(Math.random() * contactsWithPersona.length)];
    const saved = getContactData(randomContact.name);
    const displayName = saved?.nickname || randomContact.name;
    
    // 显示加载提示
    const loadingToast = document.createElement('div');
    loadingToast.className = 'loading-toast';
    loadingToast.innerHTML = `<div class="loading-spinner"></div><span>${displayName}正在发朋友圈...</span>`;
    loadingToast.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.8);color:white;padding:20px 30px;border-radius:12px;z-index:9999;display:flex;align-items:center;gap:12px;';
    document.body.appendChild(loadingToast);
    
    const post = await generateContactPost(randomContact.name);
    
    loadingToast.remove();
    
    if (post) {
        loadPosts();
    }
}

// ========== 手机功能 ==========
function openPhoneView() {
    phoneView.classList.add('active');
    document.body.style.overflow = 'hidden';
    loadPhoneContacts();
    saveViewState('phone');
}

function closePhoneView() {
    phoneView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('drawer');
}

function loadPhoneContacts() {
    phoneContacts.innerHTML = '';
    
    const customContacts = getCustomContacts();
    
    if (customContacts.length === 0) {
        phoneContacts.innerHTML = '<div class="phone-empty">暂无联系人<br>请先在微信中添加联系人</div>';
        return;
    }
    
    customContacts.forEach((contact, index) => {
        const saved = getContactData(contact.name);
        const displayName = saved?.nickname || contact.name;
        const avatarColor = saved?.color || contact.color || '';
        const avatarImg = saved?.avatar || '';
        
        const item = document.createElement('div');
        item.className = 'contact-item';
        item.style.animationDelay = `${index * 0.05}s`;
        
        let avatarHtml;
        if (avatarImg) {
            avatarHtml = `<div class="contact-avatar"><img src="${avatarImg}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></div>`;
        } else {
            avatarHtml = `<div class="contact-avatar" ${avatarColor ? `style="background: ${avatarColor};"` : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>`;
        }
        
        item.innerHTML = `
            ${avatarHtml}
            <div class="contact-info">
                <div class="contact-name">${displayName}</div>
                <div class="contact-phone">点击查看手机</div>
            </div>
        `;
        
        item.addEventListener('click', () => {
            openContactPhoneView(contact.name);
        });
        
        phoneContacts.appendChild(item);
    });
}

let currentViewingContact = '';

function openContactPhoneView(contactName) {
    currentViewingContact = contactName;
    const saved = getContactData(contactName);
    const displayName = saved?.nickname || contactName;
    const avatarColor = saved?.color || '';
    const avatarImg = saved?.avatar || '';
    
    contactPhoneName.textContent = `${displayName} 的手机`;
    phoneUserName.textContent = displayName;
    
    // 设置手机框架中的头像
    if (avatarImg) {
        phoneUserAvatar.innerHTML = `<img src="${avatarImg}">`;
        if (avatarColor) {
            phoneUserAvatar.style.background = avatarColor;
        } else {
            phoneUserAvatar.style.background = '';
        }
    } else {
        phoneUserAvatar.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        `;
        phoneUserAvatar.style.background = avatarColor || '';
    }
    
    // 更新手机状态栏时间
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeElement = document.querySelector('.phone-time');
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}`;
    }
    
    contactPhoneView.classList.add('active');
    saveViewState('contactPhone', { contactName });
}

function closeContactPhoneView() {
    contactPhoneView.classList.remove('active');
    currentViewingContact = '';
    saveViewState('phone');
}

// 显示手机主人的人设
function showPhoneOwnerPersona() {
    if (!currentViewingContact) return;
    
    const saved = getContactData(currentViewingContact);
    const displayName = saved?.nickname || currentViewingContact;
    
    // 从customContacts获取人设
    const customContacts = getCustomContacts();
    const contactInfo = customContacts.find(c => c.name === currentViewingContact);
    const persona = contactInfo?.persona || '暂无人设';
    
    // 创建弹窗
    const modal = document.createElement('div');
    modal.className = 'phone-persona-modal';
    modal.innerHTML = `
        <div class="phone-persona-content">
            <div class="phone-persona-header">
                <h3>${displayName} 的人设</h3>
                <button class="phone-persona-close">×</button>
            </div>
            <div class="phone-persona-body">
                ${persona ? escapeHtml(persona).replace(/\n/g, '<br>') : '<span style="color: var(--text-secondary);">暂无人设信息</span>'}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 添加动画
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });
    
    // 关闭按钮事件
    modal.querySelector('.phone-persona-close').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });
    
    // 点击背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

let currentPhoneApp = '';

function openPhoneApp(appType) {
    currentPhoneApp = appType;
    const displayName = phoneUserName.textContent;
    
    switch(appType) {
        case 'sms':
            phoneAppDetailTitle.textContent = '微信';
            phoneAppDetailContent.style.padding = '0';
            phoneAppDetailContent.style.gap = '0';
            loadPhoneSmsMessages();
            break;
        case 'call':
            phoneAppDetailTitle.textContent = '通话记录';
            phoneAppDetailContent.style.padding = '20px';
            phoneAppDetailContent.style.gap = '12px';
            loadPhoneAppCall();
            break;
        case 'note':
            phoneAppDetailTitle.textContent = '便签';
            phoneAppDetailContent.style.padding = '20px';
            phoneAppDetailContent.style.gap = '12px';
            loadPhoneAppNote();
            break;
        case 'browser':
            phoneAppDetailTitle.textContent = '浏览器';
            phoneAppDetailContent.style.padding = '20px';
            phoneAppDetailContent.style.gap = '12px';
            loadPhoneAppBrowser();
            break;
        case 'diary':
            phoneAppDetailTitle.textContent = '日记';
            phoneAppDetailContent.style.padding = '20px';
            phoneAppDetailContent.style.gap = '12px';
            loadPhoneAppDiary();
            break;
        case 'peek':
            phoneAppDetailTitle.textContent = '窥视';
            phoneAppDetailContent.style.padding = '20px';
            phoneAppDetailContent.style.gap = '12px';
            loadPhoneAppPeek();
            break;
    }
    
    // 所有APP都显示刷新按钮
    phoneAppRefreshBtn.style.display = 'flex';
    
    phoneAppDetailView.classList.add('active');
    saveViewState('phoneAppDetail', { contactName: currentViewingContact, appType });
}

let inPhoneChatDetail = false; // 是否在手机短信聊天详情中

function closePhoneAppDetail() {
    // 如果在聊天详情中，返回到消息列表
    if (inPhoneChatDetail && currentPhoneApp === 'sms') {
        inPhoneChatDetail = false;
        loadPhoneSmsMessages();
        return;
    }
    
    phoneAppDetailView.classList.remove('active');
    inPhoneChatDetail = false;
    saveViewState('contactPhone', { contactName: currentViewingContact });
}

// 加载短信APP的消息列表
function loadPhoneSmsMessages() {
    phoneAppDetailContent.innerHTML = '';
    phoneAppDetailContent.style.display = 'block';
    phoneAppDetailContent.style.padding = '0';
    
    // 获取用户设置
    const userSettings = getUserSettings();
    const userName = userSettings.name || '用户';
    
    // 获取联系人给用户起的备注（如果有）
    const userNickname = getGeneratedPhoneData(currentViewingContact, 'userNickname') || userName;
    
    // 获取和用户的真实聊天记录
    const realChatHistory = getChatHistory(currentViewingContact);
    
    // 获取AI生成的对话
    const generatedConversations = getGeneratedPhoneData(currentViewingContact, 'conversations') || [];
    
    // 合并所有对话，和用户的对话置顶
    const allConversations = [];
    
    // 第一条：和用户的真实对话（如果有）
    if (realChatHistory.length > 0) {
        // 获取最后一条消息作为预览
        let lastMessage = realChatHistory[realChatHistory.length - 1];
        let preview = '';
        if (lastMessage.isEmoji) {
            preview = '[表情]';
        } else {
            preview = lastMessage.text || '';
        }
        
        allConversations.push({
            friend: userNickname, // 使用联系人给用户起的备注
            messages: realChatHistory,
            isRealChat: true,
            preview: preview
        });
    }
    
    // 其他AI生成的对话
    generatedConversations.forEach(conv => {
        const lastMessage = conv.messages[conv.messages.length - 1];
        allConversations.push({
            ...conv,
            isRealChat: false,
            preview: lastMessage ? lastMessage.text : '暂无消息'
        });
    });
    
    if (allConversations.length === 0) {
        phoneAppDetailContent.innerHTML = '<div class="app-content-empty" style="padding: 40px 20px;">暂无消息记录<br><br>点击右上角刷新按钮让AI生成对话</div>';
        return;
    }
    
    // 获取用户头像
    const userAvatar = userSettings.avatar || '';
    
    // 显示消息列表
    allConversations.forEach((conv, index) => {
        const item = document.createElement('div');
        item.className = 'phone-message-item';
        item.style.animationDelay = `${index * 0.05}s`;
        item.style.animation = 'fadeIn 0.3s ease forwards';
        
        // 如果是和用户的对话，显示用户头像
        let avatarHtml;
        if (conv.isRealChat && userAvatar) {
            avatarHtml = `<div class="phone-message-avatar"><img src="${userAvatar}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></div>`;
        } else {
            avatarHtml = `<div class="phone-message-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>`;
        }
        
        item.innerHTML = `
            ${avatarHtml}
            <div class="phone-message-info">
                <div class="phone-message-header">
                    <span class="phone-message-name">${conv.friend}</span>
                    <span class="phone-message-time">刚刚</span>
                </div>
                <div class="phone-message-preview">${escapeHtml(conv.preview)}</div>
            </div>
        `;
        
        // 点击查看对话详情
        item.addEventListener('click', () => {
            if (conv.isRealChat) {
                viewRealChatHistory(conv.messages);
            } else {
                viewPhoneConversation(conv);
            }
        });
        
        phoneAppDetailContent.appendChild(item);
    });
}

// 查看单个对话详情
function viewPhoneConversation(conversation) {
    // 标记进入聊天详情
    inPhoneChatDetail = true;
    
    phoneAppDetailContent.innerHTML = '';
    phoneAppDetailContent.style.display = 'flex';
    phoneAppDetailContent.style.flexDirection = 'column';
    phoneAppDetailContent.style.padding = '0';
    
    // 创建消息区域
    const messagesArea = document.createElement('div');
    messagesArea.className = 'phone-chat-messages';
    messagesArea.style.cssText = 'flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 12px;';
    
    conversation.messages.forEach(msg => {
        const bubble = document.createElement('div');
        const bubbleType = msg.sender === '我' ? 'sent' : 'received';
        bubble.className = `phone-chat-bubble ${bubbleType}`;
        bubble.textContent = msg.text;
        messagesArea.appendChild(bubble);
    });
    
    phoneAppDetailContent.appendChild(messagesArea);
    
    // 添加只读输入框
    const inputArea = document.createElement('div');
    inputArea.className = 'phone-chat-input-area';
    inputArea.innerHTML = `
        <input type="text" class="phone-chat-input" placeholder="此处不能输入..." disabled readonly>
        <button class="phone-chat-send" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
        </button>
    `;
    phoneAppDetailContent.appendChild(inputArea);
    
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

// 查看真实聊天记录（和用户的对话）
function viewRealChatHistory(history, showAll = false) {
    // 标记进入聊天详情
    inPhoneChatDetail = true;
    
    phoneAppDetailContent.innerHTML = '';
    phoneAppDetailContent.style.display = 'flex';
    phoneAppDetailContent.style.flexDirection = 'column';
    phoneAppDetailContent.style.padding = '0';
    
    // 创建消息区域
    const messagesArea = document.createElement('div');
    messagesArea.className = 'phone-chat-messages';
    messagesArea.style.cssText = 'flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 12px;';
    
    // 消息折叠逻辑
    const hasMoreHistory = history.length > MESSAGE_DISPLAY_LIMIT && !showAll;
    const displayHistory = hasMoreHistory ? history.slice(-MESSAGE_DISPLAY_LIMIT) : history;
    const hiddenCount = history.length - displayHistory.length;
    
    // 添加展开历史记录按钮
    if (hasMoreHistory) {
        const expandBtn = document.createElement('div');
        expandBtn.className = 'expand-history-btn';
        expandBtn.innerHTML = `<span>展开历史记录 (${hiddenCount}条)</span>`;
        expandBtn.addEventListener('click', () => {
            viewRealChatHistory(history, true);
        });
        messagesArea.appendChild(expandBtn);
    }
    
    // 显示消息，对调视角
    // 在联系人的手机中：
    // - 用户发送的消息(sent) -> 他收到的(received)
    // - 他发送的消息(received) -> 他发送的(sent)
    displayHistory.forEach((msg) => {
        const bubble = document.createElement('div');
        
        // 对调视角
        let bubbleType;
        if (msg.type === 'sent') {
            bubbleType = 'received';
        } else {
            bubbleType = 'sent';
        }
        
        bubble.className = `phone-chat-bubble ${bubbleType}`;
        
        if (msg.isEmoji && msg.emojiUrl) {
            bubble.innerHTML = `<img src="${msg.emojiUrl}" style="max-width: 120px; max-height: 120px; border-radius: 8px;">`;
        } else if (msg.text) {
            bubble.textContent = msg.text;
        }
        
        messagesArea.appendChild(bubble);
    });
    
    phoneAppDetailContent.appendChild(messagesArea);
    
    // 添加只读输入框
    const inputArea = document.createElement('div');
    inputArea.className = 'phone-chat-input-area';
    inputArea.innerHTML = `
        <input type="text" class="phone-chat-input" placeholder="此处不能输入..." disabled readonly>
        <button class="phone-chat-send" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
        </button>
    `;
    phoneAppDetailContent.appendChild(inputArea);
    
    // 根据是否展开决定滚动位置
    if (showAll) {
        messagesArea.scrollTop = 0;
    } else {
        messagesArea.scrollTop = messagesArea.scrollHeight;
    }
}

function loadPhoneAppCall() {
    phoneAppDetailContent.innerHTML = '';
    
    // 优先显示AI生成的通话记录
    const callHistory = getGeneratedPhoneData(currentViewingContact, 'callHistory');
    
    if (callHistory && callHistory.length > 0) {
        callHistory.forEach((call, index) => {
            const item = document.createElement('div');
            item.className = 'phone-call-item';
            item.style.animationDelay = `${index * 0.05}s`;
            item.style.animation = 'fadeIn 0.3s ease forwards';
            
            // 通话类型图标和颜色
            let typeIcon, typeColor, typeText;
            switch(call.type) {
                case 'incoming':
                    typeIcon = '📞';
                    typeColor = 'var(--accent)';
                    typeText = '来电';
                    break;
                case 'outgoing':
                    typeIcon = '📱';
                    typeColor = 'var(--text-primary)';
                    typeText = '去电';
                    break;
                case 'missed':
                    typeIcon = '📵';
                    typeColor = '#ff4444';
                    typeText = '未接';
                    break;
                default:
                    typeIcon = '📞';
                    typeColor = 'var(--text-secondary)';
                    typeText = '';
            }
            
            const durationText = call.duration ? `通话 ${call.duration}` : '未接听';
            const hasTranscript = call.transcript && call.transcript.length > 0;
            
            item.innerHTML = `
                <div class="phone-call-icon" style="color: ${typeColor}">${typeIcon}</div>
                <div class="phone-call-info">
                    <div class="phone-call-name" style="color: ${typeColor}">${call.name}</div>
                    <div class="phone-call-detail">${typeText} · ${durationText}</div>
                </div>
                <div class="phone-call-time">${call.time}</div>
                ${hasTranscript ? '<div class="phone-call-arrow">›</div>' : ''}
            `;
            
            // 如果有通话内容，添加点击事件
            if (hasTranscript) {
                item.style.cursor = 'pointer';
                item.addEventListener('click', () => {
                    showCallTranscript(call);
                });
            }
            
            // 长按删除
            addLongPressDelete(item, () => {
                if (confirm('删除这条通话记录？')) {
                    deletePhoneDataItem(currentViewingContact, 'callHistory', index);
                    loadPhoneAppCall();
                }
            });
            
            phoneAppDetailContent.appendChild(item);
        });
        return;
    }
    
    // 如果没有AI生成内容
    phoneAppDetailContent.innerHTML = '<div class="app-content-empty">暂无通话记录<br><br>点击右上角刷新按钮让AI生成内容</div>';
}

// 显示通话详情
function showCallTranscript(call) {
    const saved = getContactData(currentViewingContact);
    const displayName = saved?.nickname || currentViewingContact;
    
    // 创建弹窗
    const modal = document.createElement('div');
    modal.className = 'call-transcript-modal';
    modal.innerHTML = `
        <div class="call-transcript-content">
            <div class="call-transcript-header">
                <div class="call-transcript-title">
                    <span class="call-transcript-icon">${call.type === 'incoming' ? '📞' : '📱'}</span>
                    <span>${call.type === 'incoming' ? '来自' : '致电'} ${call.name}</span>
                </div>
                <div class="call-transcript-meta">${call.time} · ${call.duration || '未接听'}</div>
            </div>
            <div class="call-transcript-body">
                ${call.transcript.map(msg => `
                    <div class="call-msg ${msg.speaker === '我' ? 'call-msg-me' : 'call-msg-other'}">
                        <div class="call-msg-speaker">${msg.speaker === '我' ? displayName : call.name}</div>
                        <div class="call-msg-text">${msg.text}</div>
                    </div>
                `).join('')}
            </div>
            <div class="call-transcript-footer">
                <button class="call-transcript-close">关闭</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 动画显示
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });
    
    // 关闭事件
    modal.querySelector('.call-transcript-close').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

function loadPhoneAppNote() {
    phoneAppDetailContent.innerHTML = '';
    
    // 优先显示AI生成的便签
    const generatedNotes = getGeneratedPhoneData(currentViewingContact, 'notes');
    
    if (generatedNotes && generatedNotes.length > 0) {
        generatedNotes.forEach((note, index) => {
            const card = document.createElement('div');
            card.className = 'app-content-card';
            card.style.animationDelay = `${index * 0.05}s`;
            
            card.innerHTML = `
                <div class="app-content-title">便签 ${index + 1}</div>
                <div class="app-content-text">${escapeHtml(note)}</div>
            `;
            
            // 长按删除
            addLongPressDelete(card, () => {
                if (confirm('删除这条便签？')) {
                    deletePhoneDataItem(currentViewingContact, 'notes', index);
                    // 重新加载便签（需要知道是哪个app）
                    openPhoneAppDetail('notes');
                }
            });
            
            phoneAppDetailContent.appendChild(card);
        });
        return;
    }
    
    // 如果没有AI生成内容，显示人设
    const saved = getContactData(currentViewingContact);
    const persona = saved?.persona || '暂无个人便签';
    
    phoneAppDetailContent.innerHTML = `
        <div class="app-content-card">
            <div class="app-content-title">个人便签</div>
            <div class="app-content-text">${escapeHtml(persona)}<br><br><span style="color: var(--text-secondary); font-size: 13px;">点击右上角刷新按钮让AI生成便签</span></div>
        </div>
    `;
}

function loadPhoneAppBrowser() {
    phoneAppDetailContent.innerHTML = '';
    
    // 优先显示AI生成的浏览器历史
    const browserHistory = getGeneratedPhoneData(currentViewingContact, 'browser');
    
    if (browserHistory && browserHistory.length > 0) {
        browserHistory.forEach((item, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'phone-browser-item';
            historyItem.style.animationDelay = `${index * 0.05}s`;
            historyItem.style.animation = 'fadeIn 0.3s ease forwards';
            historyItem.style.cursor = 'pointer';
            
            historyItem.innerHTML = `
                <div class="phone-browser-icon">🌐</div>
                <div class="phone-browser-info">
                    <div class="phone-browser-title">${escapeHtml(item.title)}</div>
                    <div class="phone-browser-url">${escapeHtml(item.url)}</div>
                </div>
                <div class="phone-browser-time">${item.time}</div>
                <div class="phone-browser-arrow">›</div>
            `;
            
            // 点击查看内容
            historyItem.addEventListener('click', () => {
                showBrowserContent(item);
            });
            
            // 长按删除
            addLongPressDelete(historyItem, () => {
                if (confirm('删除这条浏览记录？')) {
                    deletePhoneDataItem(currentViewingContact, 'browser', index);
                    loadPhoneAppBrowser();
                }
            });
            
            phoneAppDetailContent.appendChild(historyItem);
        });
        return;
    }
    
    // 如果没有AI生成内容
    phoneAppDetailContent.innerHTML = '<div class="app-content-empty">暂无浏览记录<br><br>点击右上角刷新按钮让AI生成内容</div>';
}

// 显示浏览器内容
function showBrowserContent(item) {
    const modal = document.createElement('div');
    modal.className = 'browser-content-modal';
    modal.innerHTML = `
        <div class="browser-content-wrapper">
            <div class="browser-content-header">
                <div class="browser-url-bar">
                    <span class="browser-lock">🔒</span>
                    <span class="browser-url-text">${escapeHtml(item.url)}</span>
                </div>
                <button class="browser-close-btn">✕</button>
            </div>
            <div class="browser-content-body">
                <div class="browser-page-title">${escapeHtml(item.title)}</div>
                <div class="browser-page-content">
                    ${item.content ? escapeHtml(item.content) : '<p class="browser-placeholder">该页面的具体内容需要联网查看...</p><p class="browser-placeholder">访问时间：' + item.time + '</p>'}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 动画显示
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });
    
    // 关闭事件
    modal.querySelector('.browser-close-btn').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

function loadPhoneAppDiary() {
    phoneAppDetailContent.innerHTML = '';
    
    // 获取AI生成的日记
    const generatedDiary = getGeneratedPhoneData(currentViewingContact, 'diary');
    
    if (generatedDiary && generatedDiary.length > 0) {
        // 显示AI生成的日记
        generatedDiary.forEach((entry, index) => {
            const card = document.createElement('div');
            card.className = 'app-content-card';
            card.style.animationDelay = `${index * 0.05}s`;
            
            card.innerHTML = `
                <div class="app-content-title">${entry.time}</div>
                <div class="app-content-text">${escapeHtml(entry.content)}</div>
            `;
            
            // 长按删除
            addLongPressDelete(card, () => {
                if (confirm('删除这条日记？')) {
                    deletePhoneDataItem(currentViewingContact, 'diary', index);
                    loadPhoneAppDiary();
                }
            });
            
            phoneAppDetailContent.appendChild(card);
        });
        return;
    }
    
    // 如果没有生成内容，显示默认内容
    // 获取聊天记录
    const history = getChatHistory(currentViewingContact);
    
    // 获取空间动态
    const posts = getPosts();
    const contactPosts = posts.filter(p => p.author === currentViewingContact);
    
    if (history.length === 0 && contactPosts.length === 0) {
        phoneAppDetailContent.innerHTML = '<div class="app-content-empty">暂无日记记录<br><br>点击右上角刷新按钮让AI生成内容</div>';
        return;
    }
    
    // 生成日记内容
    const diaryEntries = [];
    
    // 从空间动态生成日记
    contactPosts.forEach(post => {
        diaryEntries.push({
            time: post.time,
            content: post.content,
            type: 'post'
        });
    });
    
    // 从聊天记录生成日记（只取联系人发送的）
    const receivedMessages = history.filter(msg => msg.type === 'received' && msg.text);
    receivedMessages.slice(-10).forEach((msg, index) => {
        diaryEntries.push({
            time: msg.time || `对话记录 ${index + 1}`,
            content: `今天和朋友聊天，我说："${msg.text}"`,
            type: 'chat'
        });
    });
    
    if (diaryEntries.length === 0) {
        phoneAppDetailContent.innerHTML = '<div class="app-content-empty">暂无日记记录<br><br>点击右上角刷新按钮让AI生成内容</div>';
        return;
    }
    
    // 显示日记
    diaryEntries.forEach((entry, index) => {
        const card = document.createElement('div');
        card.className = 'app-content-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="app-content-title">${entry.time}</div>
            <div class="app-content-text">${escapeHtml(entry.content)}</div>
        `;
        
        phoneAppDetailContent.appendChild(card);
    });
}

// 窥视APP - AI生成联系人内心独白
async function loadPhoneAppPeek() {
    phoneAppDetailContent.innerHTML = '';
    
    const saved = getContactData(currentViewingContact);
    const displayName = saved?.nickname || currentViewingContact;
    
    // 检查是否有已生成的内容
    const existingContent = getGeneratedPhoneData(currentViewingContact, 'peek');
    if (existingContent) {
        renderPeekContent(existingContent, displayName);
        return;
    }
    
    // 显示加载状态
    phoneAppDetailContent.innerHTML = `
        <div class="app-content-empty">
            <div class="loading-spinner"></div>
            <div style="margin-top: 12px;">正在窥视${displayName}的内心...</div>
        </div>
    `;
    
    // 获取联系人人设
    const contacts = getCustomContacts();
    const contact = contacts.find(c => c.name === currentViewingContact);
    const persona = contact?.persona || '';
    
    if (!persona) {
        phoneAppDetailContent.innerHTML = `<div class="app-content-empty">该联系人没有设置人设<br><br>请先在联系人管理中设置人设</div>`;
        return;
    }
    
    // 获取用户信息
    const userData = getUserData();
    const userDisplayName = userData.name || '用户';
    
    // 构建AI请求
    try {
        const content = await generatePeekContent(displayName, persona, userDisplayName, userData.persona);
        if (content) {
            saveGeneratedPhoneData(currentViewingContact, 'peek', content);
            renderPeekContent(content, displayName);
        }
    } catch (e) {
        phoneAppDetailContent.innerHTML = `<div class="app-content-empty">生成失败: ${e.message}<br><br>点击右上角刷新重试</div>`;
    }
}

// 生成窥视内容
async function generatePeekContent(contactName, contactPersona, userName, userPersona) {
    const config = JSON.parse(localStorage.getItem('apiConfig')) || {};
    
    if (!config.url || !config.model) {
        throw new Error('请先配置API');
    }
    
    const prompt = `【任务】
你需要以"${contactName}"的身份，写一篇600字左右的内心独白日记。

【${contactName}的人设】
${contactPersona}

【对象信息】
${contactName}对"${userName}"有着复杂的情感。
${userPersona ? `${userName}的信息：${userPersona}` : ''}

【写作要求】
1. 以第一人称"我"来写，这是${contactName}藏在心底最深处、从不会让任何人知道的秘密日记
2. 必须体现以下负面心理特征（全部包含）：
   - 阴暗扭曲的想法
   - 强烈的占有欲和控制欲
   - 无法言说的情欲和渴望
   - 嫉妒、偏执、甚至病态的执念
3. 内容要符合人设性格，但要展现人设背后隐藏的黑暗面
4. 要有具体的心理描写和内心挣扎
5. 可以包含对${userName}的执念、幻想、甚至不可告人的欲望
6. 语气要真实、私密，像是写给自己看的最隐秘的心事
7. 600字左右，分段书写

【格式】
直接输出内心独白内容，不要有任何前缀或说明。`;

    let apiUrl = config.url.replace(/\/$/, '');
    if (!apiUrl.endsWith('/chat/completions')) {
        apiUrl += '/chat/completions';
    }
    
    const headers = { 'Content-Type': 'application/json' };
    if (config.key) {
        headers['Authorization'] = `Bearer ${config.key}`;
    }
    
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            model: config.model,
            messages: [
                { role: 'system', content: '你是一个擅长深度心理描写的作家，擅长刻画人物内心最阴暗、最隐秘的一面。你的文字细腻、真实、直击人心。' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.9
        })
    });
    
    if (!response.ok) {
        throw new Error(`API错误: ${response.status}`);
    }
    
    const data = await response.json();
    return data.choices?.[0]?.message?.content || '';
}

// 渲染窥视内容
function renderPeekContent(content, contactName) {
    phoneAppDetailContent.innerHTML = '';
    
    const container = document.createElement('div');
    container.className = 'peek-content-container';
    
    container.innerHTML = `
        <div class="peek-header">
            <div class="peek-title">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
                ${contactName}的内心深处
            </div>
            <div class="peek-warning">⚠ 隐秘独白</div>
        </div>
        <div class="peek-text">${escapeHtml(content).replace(/\n/g, '<br>')}</div>
    `;
    
    // 长按删除
    addLongPressDelete(container, () => {
        if (confirm('删除这篇内心独白？')) {
            deletePhoneDataItem(currentViewingContact, 'peek', 0);
            loadPhoneAppPeek();
        }
    });
    
    phoneAppDetailContent.appendChild(container);
}

// 获取/保存生成的手机内容
function getGeneratedPhoneData(contactName, type) {
    try {
        const data = JSON.parse(localStorage.getItem('generatedPhoneData')) || {};
        return data[contactName]?.[type] || null;
    } catch {
        return null;
    }
}

function saveGeneratedPhoneData(contactName, type, content) {
    try {
        const data = JSON.parse(localStorage.getItem('generatedPhoneData')) || {};
        if (!data[contactName]) {
            data[contactName] = {};
        }
        data[contactName][type] = content;
        localStorage.setItem('generatedPhoneData', JSON.stringify(data));
    } catch (e) {
        console.error('保存生成内容失败', e);
    }
}

// 删除手机数据的某一项（index=-1表示删除该类型的全部数据）
function deletePhoneDataItem(contactName, type, index) {
    try {
        const data = JSON.parse(localStorage.getItem('generatedPhoneData')) || {};
        if (data[contactName] && data[contactName][type]) {
            if (index === -1) {
                // 删除该类型的全部数据
                delete data[contactName][type];
            } else if (Array.isArray(data[contactName][type])) {
                data[contactName][type].splice(index, 1);
            } else {
                // 非数组类型（如peek的字符串），直接删除
                delete data[contactName][type];
            }
            localStorage.setItem('generatedPhoneData', JSON.stringify(data));
        }
    } catch (e) {
        console.error('删除数据失败', e);
    }
}

// AI生成手机内容
async function generatePhoneContent() {
    if (!currentViewingContact) return;
    
    const saved = getContactData(currentViewingContact);
    const displayName = saved?.nickname || currentViewingContact;
    
    // 人设存储在customContacts中
    const customContacts = getCustomContacts();
    const contactInfo = customContacts.find(c => c.name === currentViewingContact);
    const persona = contactInfo?.persona || '一个普通人';
    
    // 获取用户人设
    const userSettings = getUserSettings();
    const userName = userSettings.name || '用户';
    const userPersona = userSettings.persona || '一个普通人';
    
    // 获取线上聊天记录作为剧情参考
    const chatHistory = getChatHistory(currentViewingContact);
    let onlineChats = '';
    if (chatHistory.length > 0) {
        const recent = chatHistory.slice(-10);
        onlineChats = recent.map(msg => {
            const sender = msg.type === 'sent' ? userName : displayName;
            const text = msg.isEmoji ? '[表情]' : (msg.text || '');
            return `${sender}: ${text}`;
        }).join('\n');
    }
    
    // 获取线下剧情作为参考
    const offlineHistory = getOfflineHistory();
    let offlineChats = '';
    if (offlineHistory.length > 0) {
        const recent = offlineHistory.slice(-10);
        offlineChats = recent.map(msg => {
            if (msg.type === 'narration') {
                return `[旁白] ${msg.text}`;
            } else if (msg.type === 'user') {
                return `[用户行动] ${msg.text}`;
            } else if (msg.type === 'ai') {
                return `[${msg.roleName || 'AI'}] ${msg.text}`;
            }
            return msg.text;
        }).join('\n');
    }
    
    // 合并剧情
    let allPlots = '';
    if (onlineChats) {
        allPlots += `【线上聊天记录】\n${onlineChats}\n\n`;
    }
    if (offlineChats) {
        allPlots += `【线下剧情】\n${offlineChats}\n`;
    }
    
    // 禁用按钮，显示加载状态
    phoneRefreshBtn.disabled = true;
    phoneRefreshBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;">
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>
    `;
    
    // 获取现有的生成内容
    const existingDiary = getGeneratedPhoneData(currentViewingContact, 'diary') || [];
    const existingConversations = getGeneratedPhoneData(currentViewingContact, 'conversations') || [];
    const existingNotes = getGeneratedPhoneData(currentViewingContact, 'notes') || [];
    const existingCallHistory = getGeneratedPhoneData(currentViewingContact, 'callHistory') || [];
    const existingBrowser = getGeneratedPhoneData(currentViewingContact, 'browser') || [];
    const existingUserNickname = getGeneratedPhoneData(currentViewingContact, 'userNickname') || '';
    
    // 构建现有内容摘要
    let existingSummary = '';
    if (existingDiary.length > 0) {
        existingSummary += `已有日记${existingDiary.length}篇；`;
    }
    if (existingNotes.length > 0) {
        existingSummary += `已有便签${existingNotes.length}条；`;
    }
    if (existingCallHistory.length > 0) {
        existingSummary += `已有通话记录${existingCallHistory.length}条；`;
    }
    if (existingBrowser.length > 0) {
        existingSummary += `已有浏览记录${existingBrowser.length}条；`;
    }
    
    // 构建已有短信对话的详细信息
    let existingConversationsDetail = '';
    if (existingConversations.length > 0) {
        existingConversationsDetail = existingConversations.map(conv => {
            const recentMsgs = conv.messages.slice(-5).map(m => `${m.sender}: ${m.text}`).join('\n');
            return `【与${conv.friend}的对话】\n${recentMsgs}`;
        }).join('\n\n');
    }
    
    try {
        // 构建prompt - 生成新增内容
        const prompt = `你现在完全扮演"${displayName}"这个人。

【${displayName}的人设】
${persona}

【用户信息】
用户名：${userName}
用户人设：${userPersona}
（注意：${displayName}和${userName}之间已有真实微信记录，此处不需要生成和${userName}的对话）

${allPlots ? `【当前剧情参考】
${allPlots}` : ''}
${existingSummary ? `【已有内容】
${existingSummary}
请生成新的内容，不要重复已有的。` : ''}

${existingConversationsDetail ? `【已有微信对话历史】
${existingConversationsDetail}
（你可以选择继续其中1-2个对话，也可以新增一个新朋友的对话）` : ''}

请根据${displayName}的人设和身份，生成TA手机里的**新增**内容（以JSON格式返回）：

1. userNickname: ${displayName}给${userName}起的备注/昵称（${existingUserNickname ? `当前是"${existingUserNickname}"，可以根据剧情更新` : '根据剧情发展和关系设定'}）
2. diary: 1-2条**新的**个人日记，每条包含time（时间如"2024年1月15日 晴"）和content（内容）
3. conversations: ${existingConversations.length > 0 ? `可以继续与已有朋友（${existingConversations.map(c => c.friend).join('、')}）中1-2个人的对话，也可以新增一个朋友的对话` : '1-2段**新的**和不同朋友的微信对话（朋友名字由你根据人设自由创造，不要是' + userName + '）'}，每段包含friend（朋友名字）和messages（消息数组），可以返回多个对话
4. notes: 1条**新的**便签内容
5. callHistory: 1-2条**新的**通话记录（注意：通话对象不能是${userName}，只能是其他朋友），每条包含name、type（incoming/outgoing/missed）、time、duration、transcript（通话内容，数组格式，有来有回的完整对话）
6. browser: 1-2条**新的**浏览器历史记录，每条包含title、url、time、content（网页的主要内容摘要，50-100字）

【重要要求】
- 所有内容必须完全符合${displayName}的人设和身份
- 这是增量生成，只生成新内容，会追加到已有内容中
- userNickname可以根据剧情发展更新
- 内容要与当前剧情相关
- conversations可以包含多个对话对象，每个对话的messages只返回新增的消息
- 对于已有的朋友，新消息会追加到已有对话末尾；新朋友会创建新对话
- 通话记录(callHistory)中的name不能是${userName}，只能是其他朋友的名字

请严格按照以下JSON格式返回（不要添加任何markdown标记）：
{
  "userNickname": "${existingUserNickname || userName}",
  "diary": [
    {"time": "2024年1月16日 晴", "content": "新日记内容..."}
  ],
  "conversations": [
    {
      "friend": "${existingConversations.length > 0 ? existingConversations[0].friend : '朋友A'}",
      "messages": [
        {"sender": "我", "text": "消息内容..."},
        {"sender": "${existingConversations.length > 0 ? existingConversations[0].friend : '朋友A'}", "text": "回复内容..."}
      ]
    },
    {
      "friend": "${existingConversations.length > 1 ? existingConversations[1].friend : '朋友B'}",
      "messages": [
        {"sender": "${existingConversations.length > 1 ? existingConversations[1].friend : '朋友B'}", "text": "消息内容..."},
        {"sender": "我", "text": "回复内容..."}
      ]
    }
  ],
  "notes": ["新便签内容"],
  "callHistory": [
    {
      "name": "联系人名",
      "type": "incoming",
      "time": "刚刚",
      "duration": "3分钟",
      "transcript": [
        {"speaker": "对方", "text": "喂，在吗？"},
        {"speaker": "我", "text": "在的，怎么了？"},
        {"speaker": "对方", "text": "想问你个事..."},
        {"speaker": "我", "text": "你说"}
      ]
    }
  ],
  "browser": [
    {"title": "新网页标题", "url": "https://example.com", "time": "刚刚", "content": "这是网页的主要内容摘要，描述页面上的关键信息..."}
  ]
}`;

        const response = await callAI(prompt, '');
        
        // 尝试解析JSON
        let generatedData;
        try {
            // 提取JSON（可能被markdown包裹）
            let jsonStr = response;
            
            // 移除markdown代码块标记
            jsonStr = jsonStr.replace(/```json\s*/gi, '').replace(/```\s*/g, '');
            
            // 找到第一个 { 和最后一个匹配的 }
            const firstBrace = jsonStr.indexOf('{');
            if (firstBrace === -1) {
                throw new Error('无法找到JSON起始');
            }
            
            // 从第一个 { 开始，找到匹配的 }（跳过字符串内的大括号）
            let braceCount = 0;
            let lastBrace = -1;
            let inString = false;
            let escapeNext = false;
            for (let i = firstBrace; i < jsonStr.length; i++) {
                const char = jsonStr[i];
                
                if (escapeNext) {
                    escapeNext = false;
                    continue;
                }
                
                if (char === '\\') {
                    escapeNext = true;
                    continue;
                }
                
                if (char === '"') {
                    inString = !inString;
                    continue;
                }
                
                if (inString) continue;
                
                if (char === '{') braceCount++;
                else if (char === '}') {
                    braceCount--;
                    if (braceCount === 0) {
                        lastBrace = i;
                        break;
                    }
                }
            }
            
            if (lastBrace === -1) {
                throw new Error('JSON大括号不匹配');
            }
            
            jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
            generatedData = JSON.parse(jsonStr);
        } catch (parseError) {
            console.error('JSON解析失败', parseError, '\n原始响应:', response);
            alert('AI生成的内容格式有误，请重试');
            return;
        }
        
        // 保存生成的内容（追加到现有内容）
        // userNickname直接更新（不追加）
        if (generatedData.userNickname) {
            saveGeneratedPhoneData(currentViewingContact, 'userNickname', generatedData.userNickname);
        }
        
        // 日记追加到开头（新的在前面）
        if (generatedData.diary && generatedData.diary.length > 0) {
            const newDiary = [...generatedData.diary, ...existingDiary];
            saveGeneratedPhoneData(currentViewingContact, 'diary', newDiary);
        }
        
        // 对话处理 - 同一个朋友的消息追加到已有对话末尾
        if (generatedData.conversations && generatedData.conversations.length > 0) {
            let updatedConversations = [...existingConversations];
            
            generatedData.conversations.forEach(newConv => {
                // 查找是否已有和这个朋友的对话
                const existingIndex = updatedConversations.findIndex(c => c.friend === newConv.friend);
                
                if (existingIndex !== -1) {
                    // 已有对话，追加新消息到末尾
                    updatedConversations[existingIndex].messages = [
                        ...updatedConversations[existingIndex].messages,
                        ...newConv.messages
                    ];
                } else {
                    // 新朋友，添加到对话列表开头
                    updatedConversations.unshift(newConv);
                }
            });
            
            saveGeneratedPhoneData(currentViewingContact, 'conversations', updatedConversations);
        }
        
        // 便签追加到开头
        if (generatedData.notes && generatedData.notes.length > 0) {
            const newNotes = [...generatedData.notes, ...existingNotes];
            saveGeneratedPhoneData(currentViewingContact, 'notes', newNotes);
        }
        
        // 通话记录追加到开头（新的在前面）
        if (generatedData.callHistory && generatedData.callHistory.length > 0) {
            const newCallHistory = [...generatedData.callHistory, ...existingCallHistory];
            saveGeneratedPhoneData(currentViewingContact, 'callHistory', newCallHistory);
        }
        
        // 浏览器历史追加到开头（新的在前面）
        if (generatedData.browser && generatedData.browser.length > 0) {
            const newBrowser = [...generatedData.browser, ...existingBrowser];
            saveGeneratedPhoneData(currentViewingContact, 'browser', newBrowser);
        }
        
        alert('新内容已添加！进入各个APP查看');
        
    } catch (error) {
        console.error('生成内容失败', error);
        alert('生成失败：' + error.message);
    } finally {
        // 恢复按钮
        phoneRefreshBtn.disabled = false;
        phoneRefreshBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
        `;
    }
}

// ESC键关闭抽屉或各界面
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (contactAddView.classList.contains('active')) {
            closeContactAdd();
        } else if (contactEditView.classList.contains('active')) {
            closeContactEdit();
        } else if (chatDetailView.classList.contains('active')) {
            closeChatDetail();
        } else if (regexEditView.classList.contains('active')) {
            closeRegexEdit();
        } else if (regexView.classList.contains('active')) {
            closeRegexView();
        } else if (worldBookEditView.classList.contains('active')) {
            closeWorldBookEdit();
        } else if (worldBookView.classList.contains('active')) {
            closeWorldBookView();
        } else if (presetEditView.classList.contains('active')) {
            closePresetEdit();
        } else if (presetView.classList.contains('active')) {
            closePresetView();
        } else if (postEditView.classList.contains('active')) {
            closePostEdit();
        } else if (phoneAppDetailView.classList.contains('active')) {
            closePhoneAppDetail();
        } else if (contactPhoneView.classList.contains('active')) {
            closeContactPhoneView();
        } else if (spaceView.classList.contains('active')) {
            closeSpaceView();
        } else if (phoneView.classList.contains('active')) {
            closePhoneView();
        } else if (userView.classList.contains('active')) {
            closeUserView();
        } else if (bookView.classList.contains('active')) {
            closeBookView();
        } else if (gameView.classList.contains('active')) {
            closeGameView();
        } else if (smsView.classList.contains('active')) {
            closeSmsView();
        } else if (settingsView.classList.contains('active')) {
            closeSettingsView();
        } else if (drawer.classList.contains('active')) {
            closeDrawer();
        }
    }
});

// ========== 线下场景（自由模式） ==========

function getOfflineHistory() {
    try {
        return JSON.parse(localStorage.getItem('offlineHistory')) || [];
    } catch {
        return [];
    }
}

function saveOfflineHistory(messages) {
    try {
        localStorage.setItem('offlineHistory', JSON.stringify(messages));
    } catch (e) {
        console.warn('保存线下记录失败', e);
    }
}

function loadOfflineMessages() {
    messagesContainer.innerHTML = '';
    
    const history = getOfflineHistory();
    if (history.length === 0) {
        return;
    }
    
    history.forEach((msg, index) => {
        if (msg.type === 'user') {
            addUserMessage(msg.text, false, index);
        } else if (msg.type === 'narration') {
            addNarrationMessage(msg.text, false, index);
        } else {
            addAIMessage(msg.text, msg.roleName || '???', false, index);
        }
    });
    
    // 加载完成后直接定位到底部（不使用滚动动画）
    requestAnimationFrame(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });
}

function clearOfflineHistory() {
    if (!confirm('确定要清除所有线下历史记录吗？')) {
        return;
    }
    
    localStorage.removeItem('offlineHistory');
    localStorage.removeItem('offlineSummary');
    loadOfflineMessages();
}

// 一键清除所有数据（保留设置和书本）
function clearAllData() {
    if (!confirm('⚠️ 警告！\n\n这将删除：\n• 所有聊天记录\n• 所有联系人\n• 所有动态\n• 线下历史记录\n• 手机生成内容\n• 表情包\n\n保留：\n• 用户设置（名称、人设、头像）\n• API设置\n• 字体设置\n• 世界书和预设\n\n确定要继续吗？')) {
        return;
    }
    
    // 再次确认
    if (!confirm('这是最后确认！\n\n删除后无法恢复，确定要清除所有数据吗？')) {
        return;
    }
    
    // 保留的localStorage键
    const keysToKeep = [
        'userData',          // 用户设置
        'apiConfig',         // API配置
        'fontConfig',        // 字体配置
        'worldBook',         // 世界书
        'worldBookFiles',    // 世界书文件
        'presetPrompts',     // 预设
        'presetFiles',       // 预设文件
        'currentPreset',     // 当前预设
        'regexScripts',      // 正则脚本
        'regexList'          // 正则列表
    ];
    
    // 获取所有键
    const allKeys = Object.keys(localStorage);
    
    // 删除非保留的键
    allKeys.forEach(key => {
        if (!keysToKeep.includes(key)) {
            localStorage.removeItem(key);
        }
    });
    
    // 刷新页面
    alert('数据已清除！页面将刷新。');
    location.reload();
}

// ========== AI 生成角色 ==========
function openGenerateModal() {
    generateRequirement.value = '';
    generateModal.classList.add('active');
}

function closeGenerateModal() {
    generateModal.classList.remove('active');
}

// ========== 总结弹窗功能 ==========
let isEditingMode = false;

function openSummaryModal(type) {
    currentSummaryType = type;
    isEditingMode = false;
    
    let summary = '';
    if (type === 'offline') {
        summaryModalTitle.textContent = '场景总结';
        summary = getOfflineSummary().summary || '';
    } else {
        summaryModalTitle.textContent = `与 ${currentChatName} 的对话总结`;
        summary = getSmsSummary(originalChatName).summary || '';
    }
    
    summaryContent.value = summary;
    renderSummaryCards(summary);
    showSummaryView();
    summaryModal.classList.add('active');
}

function renderSummaryCards(text) {
    summaryCards.innerHTML = '';
    
    // 解析 [总结]...[/总结] 标签
    const pattern = /\[总结\]([\s\S]*?)\[\/总结\]/g;
    let match;
    let hasCards = false;
    const matches = [];
    
    while ((match = pattern.exec(text)) !== null) {
        const content = match[1].trim();
        if (content) {
            matches.push({ content, fullMatch: match[0] });
        }
    }
    
    matches.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'summary-card';
        card.textContent = item.content;
        
        // 长按删除
        addLongPressDelete(card, () => {
            if (confirm('删除这条总结？')) {
                // 从文本中移除这条总结
                let newText = summaryContent.value.replace(item.fullMatch, '').trim();
                summaryContent.value = newText;
                renderSummaryCards(newText);
            }
        });
        
        summaryCards.appendChild(card);
        hasCards = true;
    });
    
    // 如果没有标签格式，把整段文字作为一个卡片显示
    if (!hasCards && text.trim()) {
        const card = document.createElement('div');
        card.className = 'summary-card';
        card.textContent = text.trim();
        
        // 长按删除
        addLongPressDelete(card, () => {
            if (confirm('删除这条总结？')) {
                summaryContent.value = '';
                renderSummaryCards('');
            }
        });
        
        summaryCards.appendChild(card);
    }
}

// 通用长按删除函数
function addLongPressDelete(element, onDelete) {
    let pressTimer = null;
    
    const startPress = (e) => {
        pressTimer = setTimeout(() => {
            onDelete();
        }, 500);
    };
    
    const endPress = () => {
        if (pressTimer) {
            clearTimeout(pressTimer);
            pressTimer = null;
        }
    };
    
    element.addEventListener('touchstart', startPress);
    element.addEventListener('touchend', endPress);
    element.addEventListener('touchmove', endPress);
    element.addEventListener('mousedown', startPress);
    element.addEventListener('mouseup', endPress);
    element.addEventListener('mouseleave', endPress);
}

function showSummaryView() {
    summaryCards.style.display = 'flex';
    summaryContent.style.display = 'none';
    summaryEdit.textContent = '编辑';
    isEditingMode = false;
}

function showSummaryEdit() {
    summaryCards.style.display = 'none';
    summaryContent.style.display = 'block';
    summaryEdit.textContent = '预览';
    isEditingMode = true;
}

function toggleSummaryEdit() {
    if (isEditingMode) {
        renderSummaryCards(summaryContent.value);
        showSummaryView();
    } else {
        showSummaryEdit();
    }
}

function closeSummaryModal() {
    summaryModal.classList.remove('active');
    showSummaryView();
}

function saveSummaryContent() {
    const newSummary = summaryContent.value.trim();
    
    if (currentSummaryType === 'offline') {
        const { lastIndex } = getOfflineSummary();
        saveOfflineSummary(newSummary, lastIndex);
    } else {
        const { lastIndex } = getSmsSummary(originalChatName);
        saveSmsSummary(originalChatName, newSummary, lastIndex);
    }
    
    closeSummaryModal();
}

// AI 生成总结
async function generateAISummary() {
    const config = JSON.parse(localStorage.getItem('apiConfig')) || {};
    if (!config.url || !config.model) {
        alert('请先在设置中配置 API');
        return;
    }
    
    // 获取聊天记录
    let messages = '';
    let historyLength = 0;
    
    if (currentSummaryType === 'offline') {
        const history = getOfflineHistory();
        historyLength = history.length;
        if (history.length === 0) {
            alert('暂无聊天记录可总结');
            return;
        }
        messages = history.map(m => {
            if (m.type === 'user') return `用户: ${m.text}`;
            if (m.type === 'ai') return `${m.roleName || '角色'}: ${m.text}`;
            if (m.type === 'narration') return `[旁白] ${m.text}`;
            return m.text;
        }).join('\n');
    } else {
        const history = getChatHistory(originalChatName);
        historyLength = history.length;
        if (history.length === 0) {
            alert('暂无聊天记录可总结');
            return;
        }
        messages = history.map(m => {
            return m.type === 'sent' ? `用户: ${m.text}` : `对方: ${m.text}`;
        }).join('\n');
    }
    
    // 显示加载状态
    summaryAIGenerate.disabled = true;
    summaryAIGenerate.textContent = '生成中...';
    
    try {
        const existingSummary = summaryContent.value.trim();
        const newSummary = await generateSummary(messages, existingSummary);
        summaryContent.value = newSummary;
        renderSummaryCards(newSummary);
        showSummaryView();
        
        // 更新 lastIndex
        if (currentSummaryType === 'offline') {
            saveOfflineSummary(newSummary, historyLength);
        } else {
            saveSmsSummary(originalChatName, newSummary, historyLength);
        }
    } catch (e) {
        alert('生成总结失败: ' + e.message);
    } finally {
        summaryAIGenerate.disabled = false;
        summaryAIGenerate.textContent = 'AI总结';
    }
}

async function confirmGenerateCharacter() {
    const requirement = generateRequirement.value.trim();
    if (!requirement) {
        alert('请输入角色描述');
        return;
    }
    
    const config = JSON.parse(localStorage.getItem('apiConfig')) || {};
    if (!config.url || !config.model) {
        alert('请先在设置中配置 API');
        return;
    }
    
    // 关闭弹窗
    closeGenerateModal();
    
    // 显示加载提示
    showTypingIndicator('正在生成角色');
    
    try {
        const character = await generateCharacterByAI(requirement);
        hideTypingIndicator();
        
        if (character) {
            // 添加到联系人
            addGeneratedCharacter(character);
            addNarrationMessage(`新角色「${character.name}」已加入你的联系人！`, false);
        }
    } catch (e) {
        hideTypingIndicator();
        alert('生成角色失败: ' + e.message);
    }
}

async function generateCharacterByAI(requirement) {
    const config = JSON.parse(localStorage.getItem('apiConfig')) || {};
    const userData = getUserData();
    
    let apiUrl = config.url.replace(/\/$/, '');
    if (!apiUrl.endsWith('/chat/completions')) {
        apiUrl += '/chat/completions';
    }
    
    const headers = { 'Content-Type': 'application/json' };
    if (config.key) {
        headers['Authorization'] = `Bearer ${config.key}`;
    }
    
    // 构建消息列表（包含预设和世界书）
    const messages = [];
    
    // 添加预设
    const presets = getEnabledPresets();
    presets.forEach(p => {
        messages.push({ role: p.role, content: p.content });
    });
    
    // 添加用户人设
    if (userData.persona) {
        messages.push({ role: 'system', content: '[用户人设]\n' + userData.persona });
    }
    
    // 匹配并添加世界书
    const worldBookContent = matchWorldBook(requirement);
    if (worldBookContent) {
        messages.push({ role: 'system', content: '[世界书信息]\n' + worldBookContent });
    }
    
    // 添加生成角色的提示
    const prompt = `根据以下要求生成一个角色，请以 JSON 格式返回（不要包含 markdown 代码块）：

用户要求：${requirement}

请根据上述设定和世界观，生成一个符合要求的角色。
返回如下格式的 JSON：
{
  "name": "角色名字",
  "persona": "详细的角色人设描述，包括性格、背景、说话方式等（100-200字）"
}

只返回 JSON，不要其他内容。`;

    messages.push({ role: 'user', content: prompt });

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            model: config.model,
            messages,
            temperature: 0.8
        })
    });
    
    if (!response.ok) {
        throw new Error(`API 错误: ${response.status}`);
    }
    
    const data = await response.json();
    let content = data.choices?.[0]?.message?.content || '';
    
    // 尝试提取 JSON
    content = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    try {
        return JSON.parse(content);
    } catch {
        // 尝试提取 JSON 部分
        const match = content.match(/\{[\s\S]*\}/);
        if (match) {
            return JSON.parse(match[0]);
        }
        throw new Error('无法解析角色信息');
    }
}

function addGeneratedCharacter(character) {
    // 随机颜色
    const colors = ['#ffb6c1', '#4fd1c5', '#ff0080', '#8b5a2b', '#6366f1', '#f59e0b'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // 添加到联系人列表
    const contacts = getCustomContacts();
    
    // 检查是否已存在同名联系人
    if (contacts.some(c => c.name === character.name)) {
        character.name = character.name + '_' + Date.now().toString().slice(-4);
    }
    
    contacts.push({
        name: character.name,
        color: randomColor,
        persona: character.persona
    });
    
    localStorage.setItem('customContacts', JSON.stringify(contacts));
    
    // 刷新联系人列表
    loadContacts();
}

// 添加旁白/叙述消息
function addNarrationMessage(text, save = true, historyIndex = null) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message narration-msg';
    messageDiv.innerHTML = `<div class="message-content narration">${formatMessageText(text)}</div>`;
    
    // 存储索引
    const history = getOfflineHistory();
    messageDiv.dataset.index = historyIndex !== null ? historyIndex : history.length;
    
    messagesContainer.appendChild(messageDiv);
    
    if (save) {
        history.push({ type: 'narration', text });
        saveOfflineHistory(history);
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    
    // 添加长按菜单
    addOfflineMessageMenu(messageDiv, text, 'narration');
}

// 格式化文本（处理 *加粗* 等格式）
function formatMessageText(text) {
    let formatted = escapeHtml(text);
    // *文字* 转为粗体
    formatted = formatted.replace(/\*([^*]+)\*/g, '<strong>$1</strong>');
    // _文字_ 转为斜体
    formatted = formatted.replace(/_([^_]+)_/g, '<em>$1</em>');
    return formatted;
}

// 解析 AI 响应，分发到线上/线下（按原文顺序）
function parseAndDispatchAIResponse(response) {
    // 先解析 scene 标签更新场景
    const sceneMatch = response.match(/<scene\s+location="([^"]+)"\s+date="([^"]+)"\s+time="([^"]+)"\s+weather="([^"]+)"[^>]*><\/scene>/i);
    if (sceneMatch) {
        updateSceneFromAI({
            location: sceneMatch[1],
            date: sceneMatch[2],
            time: sceneMatch[3],
            weather: sceneMatch[4]
        });
        // 移除 scene 标签
        response = response.replace(sceneMatch[0], '').trim();
    }
    
    const segments = [];
    const tagPattern = /<(sms|offline|narration)(?:\s+contact="([^"]+)")?>([\s\S]*?)<\/\1>/gi;
    let lastIndex = 0;
    let match;
    
    while ((match = tagPattern.exec(response)) !== null) {
        if (match.index > lastIndex) {
            const text = response.slice(lastIndex, match.index).trim();
            if (text) segments.push({ type: 'narration', content: text });
        }
        const tagType = match[1].toLowerCase();
        const content = match[3].trim();
        if (content) segments.push({ type: tagType, contact: match[2] || '', content });
        lastIndex = match.index + match[0].length;
    }
    
    if (lastIndex < response.length) {
        const text = response.slice(lastIndex).trim();
        if (text) segments.push({ type: 'narration', content: text });
    }
    
    for (const seg of segments) {
        if (seg.type === 'sms') sendSmsFromAI(seg.contact, seg.content);
        else if (seg.type === 'offline') addAIMessage(seg.content, seg.contact);
        else if (seg.type === 'narration') addNarrationMessage(seg.content);
    }
}

// 从 AI 响应更新场景
function updateSceneFromAI(sceneData) {
    const scene = {
        name: sceneData.location,
        date: sceneData.date,
        time: sceneData.time,
        weather: sceneData.weather
    };
    saveCurrentScene(scene);
}

// AI 发送短信给联系人
function sendSmsFromAI(contactName, content) {
    // 查找联系人（支持模糊匹配）
    const contacts = getCustomContacts();
    const contact = contacts.find(c => {
        const saved = getContactData(c.name);
        const displayName = saved?.nickname || c.name;
        // 精确匹配或包含匹配
        return c.name === contactName || 
               displayName === contactName ||
               c.name.includes(contactName) ||
               displayName.includes(contactName) ||
               contactName.includes(c.name) ||
               contactName.includes(displayName);
    });
    
    if (!contact) {
        console.warn('找不到联系人:', contactName, '可用联系人:', contacts.map(c => c.name));
        return;
    }
    
    console.log('【短信】发送短信:', contact.name, content);
    
    const saved = getContactData(contact.name);
    const displayName = saved?.nickname || contact.name;
    
    // 按句子分割消息
    const sentences = content.split(/(?<=[。！？\n])/g)
        .map(s => s.trim())
        .filter(s => s.length > 0);
    
    const messagesToSend = sentences.length > 0 ? sentences : [content];
    
    // 检查用户是否正在和该联系人聊天
    const isInChat = chatDetailView && chatDetailView.classList.contains('active') && originalChatName === contact.name;
    console.log('【短信】isInChat:', isInChat, 'will show notification:', !isInChat);
    
    // 添加到聊天记录（每句话一条消息，解析表情）
    const history = getChatHistory(contact.name);
    const now = Date.now();
    messagesToSend.forEach(msg => {
        // 解析消息中的表情
        const parts = parseEmojiInMessage(msg);
        parts.forEach(part => {
            if (part.type === 'emoji') {
                history.push({ text: `[表情:${part.name}]`, type: 'received', isEmoji: true, emojiUrl: part.url, timestamp: now });
            } else if (part.content.trim()) {
                history.push({ text: part.content.trim(), type: 'received', timestamp: now });
            }
        });
        // 如果用户不在该聊天界面，增加未读计数
        if (!isInChat) {
            addUnreadCount(contact.name);
        }
    });
    saveChatHistory(contact.name, history);
    
    // 如果用户正在该聊天界面，直接添加消息气泡
    if (isInChat) {
        messagesToSend.forEach(msg => {
            // 解析并显示表情
            const parts = parseEmojiInMessage(msg);
            parts.forEach(part => {
                if (part.type === 'emoji') {
                    addEmojiBubble(part.url, 'received', false, part.name);
                } else if (part.content.trim()) {
                    addChatBubble(part.content.trim(), 'received', false);
                }
            });
        });
    } else {
        // 不在聊天界面，显示通知
        // 合并所有消息作为通知内容
        const notificationText = messagesToSend.join(' ');
        showWechatNotification(contact.name, notificationText, saved?.color, saved?.avatar);
    }
    
    // 刷新短信列表和徽章
    loadSmsMessages();
    updateSmsBadge();
}

// 未读消息管理
function getUnreadCounts() {
    try {
        return JSON.parse(localStorage.getItem('unreadCounts')) || {};
    } catch {
        return {};
    }
}

function addUnreadCount(contactName) {
    const counts = getUnreadCounts();
    counts[contactName] = (counts[contactName] || 0) + 1;
    localStorage.setItem('unreadCounts', JSON.stringify(counts));
    console.log('【未读】增加未读计数:', contactName, '当前计数:', counts);
    updateSmsBadge();
}

function clearUnreadCount(contactName) {
    const counts = getUnreadCounts();
    delete counts[contactName];
    localStorage.setItem('unreadCounts', JSON.stringify(counts));
    console.log('【未读】清除未读计数:', contactName, '剩余计数:', counts);
    updateSmsBadge();
    // 刷新消息列表以更新未读徽章显示
    loadSmsMessages();
}

function getTotalUnreadCount() {
    const counts = getUnreadCounts();
    return Object.values(counts).reduce((sum, n) => sum + n, 0);
}

function updateSmsBadge() {
    const total = getTotalUnreadCount();
    console.log('【徽章】更新徽章, 未读总数:', total, 'smsBadge元素:', smsBadge);
    if (!smsBadge) {
        console.error('【徽章】smsBadge元素不存在！');
        return;
    }
    if (total > 0) {
        smsBadge.textContent = total > 99 ? '99+' : total;
        smsBadge.classList.add('active');
        smsBadge.style.display = 'flex'; // 强制显示
        console.log('【徽章】显示徽章:', total);
    } else {
        smsBadge.classList.remove('active');
        smsBadge.style.display = 'none';
        console.log('【徽章】隐藏徽章');
    }
}

// ========== 微信消息通知 ==========
function showWechatNotification(contactName, message, avatarColor, avatarUrl) {
    console.log('【通知】尝试显示通知:', contactName, message);
    
    // 检查是否在聊天详情界面且正在和该联系人聊天
    const isInThisChat = chatDetailView && 
                         chatDetailView.classList.contains('active') && 
                         originalChatName === contactName;
    
    console.log('【通知】isInThisChat:', isInThisChat, 'chatDetailView.active:', chatDetailView?.classList.contains('active'), 'originalChatName:', originalChatName);
    
    // 如果在当前聊天界面，不显示通知
    if (isInThisChat) {
        console.log('【通知】用户在聊天界面，跳过通知');
        return;
    }
    
    const saved = getContactData(contactName);
    const displayName = saved?.nickname || contactName;
    const color = avatarUrl ? 'transparent' : (avatarColor || saved?.color || 'var(--accent)');
    const avatar = avatarUrl || saved?.avatar || '';
    
    // 处理消息文本（截取前50个字符，处理特殊内容）
    let displayMessage = message;
    if (message.includes('[表情:')) {
        displayMessage = '[表情]';
    } else if (message.match(/\[(图片|照片)/)) {
        displayMessage = '[图片]';
    } else if (displayMessage.length > 50) {
        displayMessage = displayMessage.substring(0, 50) + '...';
    }
    
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'wechat-notification';
    notification.innerHTML = `
        <div class="wechat-notification-avatar" style="background: ${color}">
            ${avatar ? `<img src="${avatar}" onerror="this.style.display='none';this.parentElement.textContent='${displayName.charAt(0)}'">` : displayName.charAt(0)}
        </div>
        <div class="wechat-notification-content">
            <div class="wechat-notification-header">
                <span class="wechat-notification-app">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    微信
                </span>
                <span class="wechat-notification-time">现在</span>
            </div>
            <div class="wechat-notification-name">${displayName}</div>
            <div class="wechat-notification-text">${displayMessage}</div>
        </div>
    `;
    
    // 点击通知跳转到聊天界面
    notification.addEventListener('click', () => {
        // 先关闭通知
        hideNotification(notification);
        
        // 打开微信界面
        if (!smsView.classList.contains('active')) {
            openSmsView();
        }
        
        // 打开聊天详情
        setTimeout(() => {
            openChatDetail(contactName, displayMessage, color);
        }, 100);
    });
    
    // 添加到容器
    console.log('【通知】通知容器:', wechatNotificationContainer);
    if (!wechatNotificationContainer) {
        console.error('【通知】通知容器不存在！');
        return;
    }
    wechatNotificationContainer.appendChild(notification);
    console.log('【通知】通知已添加到DOM');
    
    // 3秒后自动消失
    setTimeout(() => {
        hideNotification(notification);
    }, 3000);
}

function hideNotification(notification) {
    if (!notification || !notification.parentElement) return;
    
    notification.classList.add('hiding');
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 300);
}

// 获取所有联系人信息用于 AI
function getAllContactsInfo() {
    const contacts = getCustomContacts();
    if (contacts.length === 0) return '';
    
    let info = '【可用联系人及人设】\n';
    contacts.forEach(c => {
        const saved = getContactData(c.name);
        const displayName = saved?.nickname || c.name;
        info += `\n【${displayName}】\n`;
        if (c.persona) {
            info += c.persona + '\n';
        } else {
            info += '（暂无详细人设）\n';
        }
    });
    return info;
}

// 获取所有联系人的人设摘要（用于短信模式了解其他联系人）
function getOtherContactsInfo(excludeName) {
    const contacts = getCustomContacts();
    const others = contacts.filter(c => c.name !== excludeName);
    if (others.length === 0) return '';
    
    let info = '【其他联系人】\n';
    others.forEach(c => {
        const saved = getContactData(c.name);
        const displayName = saved?.nickname || c.name;
        info += `- ${displayName}`;
        if (c.persona) {
            // 只取人设的前50个字符作为摘要
            const brief = c.persona.length > 50 ? c.persona.substring(0, 50) + '...' : c.persona;
            info += `：${brief}`;
        }
        info += '\n';
    });
    return info;
}

// 获取当前时间
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
}

// 添加用户消息
function addUserMessage(text, save = true, historyIndex = null) {
    const userData = getUserData();
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-msg';
    messageDiv.innerHTML = `
        <div class="message-header">
            <span class="message-role user">${escapeHtml(userData.name || '用户')}</span>
            <span class="message-time">${getCurrentTime()}</span>
        </div>
        <div class="message-content">${escapeHtml(text)}</div>
    `;
    
    // 存储索引
    const history = getOfflineHistory();
    messageDiv.dataset.index = historyIndex !== null ? historyIndex : history.length;
    
    messagesContainer.appendChild(messageDiv);
    
    // 保存到线下记录
    if (save) {
        history.push({ type: 'user', text });
        saveOfflineHistory(history);
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    
    // 添加长按菜单（编辑和删除，不需要重新生成）
    addUserMessageMenu(messageDiv, text);
}

// 添加AI消息
function addAIMessage(text, roleName = '角色', save = true, historyIndex = null) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ai-msg';
    
    // 检查是否包含图片标签（多种格式，支持多行描述）
    // 格式1: [图片:描述] 或 [图片]（描述可以有多行）
    // 格式2: [一张照片被发送过来] 后跟 [描述内容]
    let imageMatch = text.match(/\[(图片|照片|发图|发送图片|发了一张图|发了张图|发了一张照片|发了张照片|拍了一张照片|拍了张照片|分享图片|分享照片)[：:]\s*([\s\S]+?)\]/);
    
    // 如果没匹配到，尝试匹配 [一张照片...] 格式
    if (!imageMatch) {
        imageMatch = text.match(/\[(一张照片|一张图片|一张图|照片|图片)[\s\S]*?\]/);
    }
    
    let contentHtml;
    
    if (imageMatch) {
        // 尝试从后续的 [...] 中提取描述
        let imageDesc = imageMatch[2] ? imageMatch[2].trim() : '';
        let textWithoutImage = text.replace(imageMatch[0], '').trim();
        
        // 如果没有描述，尝试从剩余文本中的 [...] 提取
        if (!imageDesc) {
            const descMatch = textWithoutImage.match(/\[([^\]]{10,})\]/);
            if (descMatch) {
                imageDesc = descMatch[1].trim();
                textWithoutImage = textWithoutImage.replace(descMatch[0], '').trim();
            }
        }
        
        // 如果还是没有，使用默认值
        if (!imageDesc) imageDesc = '点击查看图片';
        const imageId = 'img_' + Date.now();
        
        contentHtml = `
            <div class="ai-image-container" id="${imageId}" onclick="toggleImageText('${imageId}')">
                <img src="https://static.eeo.cn/upload/images/20251129/ca6e37f411c8b7241993.png" class="ai-image">
                <div class="ai-image-overlay">
                    <span>点击查看描述</span>
                </div>
            </div>
            <div class="ai-image-text" id="${imageId}_text" style="display:none;">
                <div class="image-desc-label">【图片描述】</div>
                ${formatMessageText(imageDesc)}
                ${textWithoutImage ? '<div class="image-extra-text">' + formatMessageText(textWithoutImage) + '</div>' : ''}
            </div>
        `;
    } else {
        contentHtml = formatMessageText(text);
    }
    
    messageDiv.innerHTML = `
        <div class="message-header">
            <span class="message-role ai">${escapeHtml(roleName)}</span>
            <span class="message-time">${getCurrentTime()}</span>
        </div>
        <div class="message-content">${contentHtml}</div>
    `;
    
    // 存储索引
    const history = getOfflineHistory();
    messageDiv.dataset.index = historyIndex !== null ? historyIndex : history.length;
    
    messagesContainer.appendChild(messageDiv);
    
    // 保存到线下记录
    if (save) {
        history.push({ type: 'ai', text, roleName });
        saveOfflineHistory(history);
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    
    // 添加长按菜单
    addOfflineMessageMenu(messageDiv, text, 'ai', roleName);
}

// 切换图片文字显示
function toggleImageText(imageId) {
    const textDiv = document.getElementById(imageId + '_text');
    const container = document.getElementById(imageId);
    if (textDiv.style.display === 'none') {
        textDiv.style.display = 'block';
        container.querySelector('.ai-image-overlay span').textContent = '点击隐藏描述';
    } else {
        textDiv.style.display = 'none';
        container.querySelector('.ai-image-overlay span').textContent = '点击查看描述';
    }
}

// 转义HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 用户消息长按菜单
function addUserMessageMenu(messageDiv, text) {
    let pressTimer = null;
    
    const startPress = (e) => {
        pressTimer = setTimeout(() => {
            e.preventDefault();
            showUserMessageMenu(messageDiv, text);
        }, 500);
    };
    
    const endPress = () => {
        if (pressTimer) {
            clearTimeout(pressTimer);
            pressTimer = null;
        }
    };
    
    messageDiv.addEventListener('touchstart', startPress);
    messageDiv.addEventListener('touchend', endPress);
    messageDiv.addEventListener('touchmove', endPress);
    messageDiv.addEventListener('mousedown', startPress);
    messageDiv.addEventListener('mouseup', endPress);
    messageDiv.addEventListener('mouseleave', endPress);
}

function showUserMessageMenu(messageDiv, text) {
    document.querySelectorAll('.offline-msg-menu').forEach(m => m.remove());
    
    const menu = document.createElement('div');
    menu.className = 'offline-msg-menu';
    menu.innerHTML = `
        <button data-action="edit">编辑</button>
        <button data-action="delete">删除</button>
    `;
    
    const rect = messageDiv.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.top = `${rect.top - 10}px`;
    menu.style.left = `${rect.left + rect.width / 2}px`;
    menu.style.transform = 'translate(-50%, -100%)';
    menu.style.zIndex = '5000';
    
    menu.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        menu.remove();
        
        if (action === 'edit') {
            editOfflineMessage(messageDiv, text, 'user');
        } else if (action === 'delete') {
            deleteOfflineMessage(messageDiv);
        }
    });
    
    document.body.appendChild(menu);
    
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 10);
}

// 线下消息长按菜单
function addOfflineMessageMenu(messageDiv, text, type, roleName = '') {
    let pressTimer = null;
    
    const startPress = (e) => {
        pressTimer = setTimeout(() => {
            e.preventDefault();
            showOfflineMessageMenu(messageDiv, text, type, roleName);
        }, 500);
    };
    
    const endPress = () => {
        if (pressTimer) {
            clearTimeout(pressTimer);
            pressTimer = null;
        }
    };
    
    messageDiv.addEventListener('touchstart', startPress);
    messageDiv.addEventListener('touchend', endPress);
    messageDiv.addEventListener('touchmove', endPress);
    messageDiv.addEventListener('mousedown', startPress);
    messageDiv.addEventListener('mouseup', endPress);
    messageDiv.addEventListener('mouseleave', endPress);
}

function showOfflineMessageMenu(messageDiv, text, type, roleName) {
    // 移除已有菜单
    document.querySelectorAll('.offline-msg-menu').forEach(m => m.remove());
    
    const menu = document.createElement('div');
    menu.className = 'offline-msg-menu';
    menu.innerHTML = `
        <button data-action="edit">编辑</button>
        <button data-action="regenerate">重新生成</button>
        <button data-action="delete">删除</button>
    `;
    
    const rect = messageDiv.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.top = `${rect.top - 10}px`;
    menu.style.left = `${rect.left + rect.width / 2}px`;
    menu.style.transform = 'translate(-50%, -100%)';
    menu.style.zIndex = '5000';
    
    menu.addEventListener('click', async (e) => {
        const action = e.target.dataset.action;
        menu.remove();
        
        if (action === 'edit') {
            editOfflineMessage(messageDiv, text, type, roleName);
        } else if (action === 'delete') {
            deleteOfflineMessage(messageDiv);
        } else if (action === 'regenerate') {
            await regenerateOfflineMessage(messageDiv);
        }
    });
    
    document.body.appendChild(menu);
    
    // 点击其他地方关闭菜单
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 10);
}

function editOfflineMessage(messageDiv, text, type, roleName) {
    const newText = prompt('编辑消息:', text);
    if (newText !== null && newText.trim() !== '') {
        // 更新显示
        const contentDiv = messageDiv.querySelector('.message-content');
        if (contentDiv) {
            contentDiv.textContent = newText;
        }
        
        // 更新存储 - 使用存储的索引
        const history = getOfflineHistory();
        const index = parseInt(messageDiv.dataset.index);
        if (!isNaN(index) && index >= 0 && index < history.length) {
            history[index].text = newText;
            saveOfflineHistory(history);
        }
    }
}

function deleteOfflineMessage(messageDiv) {
    if (!confirm('删除这条消息？')) return;
    
    const history = getOfflineHistory();
    // 使用存储的索引
    const index = parseInt(messageDiv.dataset.index);
    if (!isNaN(index) && index >= 0 && index < history.length) {
        history.splice(index, 1);
        saveOfflineHistory(history);
        // 重新加载以更新所有索引
        loadOfflineMessages();
    } else {
        messageDiv.remove();
    }
}

async function regenerateOfflineMessage(messageDiv) {
    // 获取消息索引
    const history = getOfflineHistory();
    const index = Array.from(messagesContainer.children).indexOf(messageDiv);
    
    if (index < 0) return;
    
    // 找到这条消息之前的最后一条用户消息
    let lastUserMessage = '';
    for (let i = index - 1; i >= 0; i--) {
        if (history[i].type === 'user') {
            lastUserMessage = history[i].text;
            break;
        }
    }
    
    if (!lastUserMessage) {
        alert('找不到对应的用户消息');
        return;
    }
    
    // 删除从这条消息开始到最后的所有消息
    const newHistory = history.slice(0, index);
    saveOfflineHistory(newHistory);
    
    // 删除 DOM 中的消息
    const children = Array.from(messagesContainer.children);
    for (let i = index; i < children.length; i++) {
        children[i].remove();
    }
    
    // 显示加载动画
    showTypingIndicator('场景');
    
    // 重新生成
    try {
        const aiResponse = await callAIOffline(lastUserMessage);
        hideTypingIndicator();
        if (aiResponse) {
            parseAndDispatchAIResponse(aiResponse);
            
            // 生成心声（后台异步）
            const offlinePattern = /<offline\s+contact="([^"]+)">/gi;
            let charMatch;
            const characters = new Set();
            while ((charMatch = offlinePattern.exec(aiResponse)) !== null) {
                characters.add(charMatch[1]);
            }
            characters.forEach(charName => {
                const contextText = `用户行动：${lastUserMessage}\n场景中发生的事：${aiResponse.substring(0, 500)}`;
                generateInnerVoice(charName, 'offline', contextText);
            });
        }
    } catch (e) {
        hideTypingIndicator();
        addNarrationMessage('重新生成失败: ' + e.message, false);
    }
}

// 显示主页面输入动画
function showTypingIndicator(roleName = '对方') {
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = `
        <span>${roleName} 正在输入</span>
        <div class="typing-dots">
            <span></span><span></span><span></span>
        </div>
    `;
    messagesContainer.appendChild(indicator);
    indicator.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

// ========== 自动总结功能 ==========
const OFFLINE_SUMMARY_THRESHOLD = 10;  // 线下模式每10条总结
const SMS_SUMMARY_THRESHOLD = 30;      // 短信模式每30条总结

function getOfflineSummary() {
    try {
        return JSON.parse(localStorage.getItem('offlineSummary')) || { summary: '', lastIndex: 0 };
    } catch {
        return { summary: '', lastIndex: 0 };
    }
}

function saveOfflineSummary(summary, lastIndex) {
    localStorage.setItem('offlineSummary', JSON.stringify({ summary, lastIndex }));
}

function getSmsSummary(contactName) {
    try {
        const summaries = JSON.parse(localStorage.getItem('smsSummaries')) || {};
        return summaries[contactName] || { summary: '', lastIndex: 0 };
    } catch {
        return { summary: '', lastIndex: 0 };
    }
}

function saveSmsSummary(contactName, summary, lastIndex) {
    try {
        const summaries = JSON.parse(localStorage.getItem('smsSummaries')) || {};
        summaries[contactName] = { summary, lastIndex };
        localStorage.setItem('smsSummaries', JSON.stringify(summaries));
    } catch (e) {
        console.warn('保存短信总结失败', e);
    }
}

async function generateSummary(messages, existingSummary = '') {
    const config = JSON.parse(localStorage.getItem('apiConfig')) || {};
    if (!config.url || !config.model) return existingSummary;
    
    let apiUrl = config.url.replace(/\/$/, '');
    if (!apiUrl.endsWith('/chat/completions')) {
        apiUrl += '/chat/completions';
    }
    
    const headers = { 'Content-Type': 'application/json' };
    if (config.key) {
        headers['Authorization'] = `Bearer ${config.key}`;
    }
    
    const summaryFormat = `【总结格式要求】
每段总结用 [总结] 和 [/总结] 包裹，例如：
[总结]第一段总结内容[/总结]
[总结]第二段总结内容[/总结]

内容要求：客观记录人物、地点、事件、结果，不分析不评价，每段不超过150字。`;

    const prompt = existingSummary 
        ? `${summaryFormat}\n\n以下是之前的总结（必须完整保留，不要修改）：\n${existingSummary}\n\n以下是新的对话内容，请在末尾追加一个新的[总结]标签：\n${messages}`
        : `${summaryFormat}\n\n请总结以下对话（用[总结][/总结]包裹）：\n${messages}`;
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                model: config.model,
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.3
            })
        });
        
        if (!response.ok) return existingSummary;
        
        const data = await response.json();
        return data.choices?.[0]?.message?.content || existingSummary;
    } catch {
        return existingSummary;
    }
}

async function checkAndSummarizeOffline() {
    const history = getOfflineHistory();
    const { summary, lastIndex } = getOfflineSummary();
    
    // 检查是否需要总结（从上次总结到现在超过阈值）
    if (history.length - lastIndex >= OFFLINE_SUMMARY_THRESHOLD) {
        // 获取需要总结的消息
        const newMessages = history.slice(lastIndex).map(m => {
            if (m.type === 'user') return `用户: ${m.text}`;
            if (m.type === 'narration') return `[旁白] ${m.text}`;
            return `${m.roleName || '角色'}: ${m.text}`;
        }).join('\n');
        
        // 生成新总结
        const newSummary = await generateSummary(newMessages, summary);
        saveOfflineSummary(newSummary, history.length);
        console.log('线下模式已自动总结');
    }
}

async function checkAndSummarizeSms(contactName) {
    const history = getChatHistory(contactName);
    const { summary, lastIndex } = getSmsSummary(contactName);
    
    if (history.length - lastIndex >= SMS_SUMMARY_THRESHOLD) {
        const newMessages = history.slice(lastIndex).map(m => {
            return m.type === 'sent' ? `我: ${m.text}` : `对方: ${m.text}`;
        }).join('\n');
        
        const newSummary = await generateSummary(newMessages, summary);
        saveSmsSummary(contactName, newSummary, history.length);
        console.log('短信已自动总结:', contactName);
    }
}

// 获取所有联系人的短信上下文（用于线下模式，包含30条消息和总结）
function getAllSmsContext() {
    const contacts = getCustomContacts();
    const contextParts = [];
    const pendingEvents = [];
    
    // 识别约定/意图的关键词
    const meetingKeywords = ['来找你', '去找你', '过来', '过去', '见面', '等你', '到了', '出发', '马上到', '在路上', '约好', '一起'];
    
    contacts.forEach(contact => {
        const saved = getContactData(contact.name);
        const displayName = saved?.nickname || contact.name;
        
        const { summary } = getSmsSummary(contact.name);
        const history = getChatHistory(contact.name);
        
        // 总是添加总结（如果有）
        if (summary) {
            contextParts.push(`【与${displayName}的微信总结】\n${summary}`);
        }
        
        // 添加最近30条短信记录
        if (history.length > 0) {
            const recent = history.slice(-30);
            const recentText = recent.map(m => {
                const text = m.isEmoji ? '[表情]' : m.text;
                return m.type === 'sent' ? `用户: ${text}` : `${displayName}: ${text}`;
            }).join('\n');
            
            contextParts.push(`【与${displayName}的最近微信（${recent.length}条）】\n${recentText}`);
            
            // 检查最近消息中是否有约定见面的意图
            const recentMessages = recent.slice(-5);
            for (const msg of recentMessages) {
                const text = msg.text;
                for (const keyword of meetingKeywords) {
                    if (text.includes(keyword)) {
                        pendingEvents.push(`${displayName}在微信中提到"${text.slice(0, 30)}${text.length > 30 ? '...' : ''}"，可能即将出现`);
                        break;
                    }
                }
            }
        }
    });
    
    let result = contextParts.join('\n\n');
    
    // 添加待触发事件提示
    if (pendingEvents.length > 0) {
        result += '\n\n【线上线下联动提示 - 重要】\n';
        result += '根据微信内容，以下联系人可能会在线下场景中出现：\n';
        result += pendingEvents.map(e => `• ${e}`).join('\n');
        result += '\n请根据场景合理安排这些联系人的出现，让线上微信的约定在线下得到呼应。';
    }
    
    return result;
}

// 只发送用户消息（线下模式，不触发AI）
function sendMessageOnly() {
    const message = messageInput.value.trim();
    
    if (message) {
        // 移除欢迎消息
        const welcome = messagesContainer.querySelector('.welcome-message');
        if (welcome) welcome.remove();
        
        // 添加用户消息
        addUserMessage(message);
        
        // 清空输入框并重置高度
        messageInput.value = '';
        messageInput.style.height = 'auto';
        
        // 输入框重新获得焦点
        messageInput.focus();
    }
}

// 发送消息函数（线下自由模式，触发AI）
async function sendMessage() {
    const message = messageInput.value.trim();
    
    // 先发送用户消息（如果有）
    if (message) {
        // 移除欢迎消息
        const welcome = messagesContainer.querySelector('.welcome-message');
        if (welcome) welcome.remove();
        
        // 添加用户消息
        addUserMessage(message);
        
        // 清空输入框并重置高度
        messageInput.value = '';
        messageInput.style.height = 'auto';
    }
    
    // 输入框重新获得焦点
    messageInput.focus();
    
    // 显示输入动画
    showTypingIndicator('场景');
    
    // 调用 AI（即使没有用户消息也触发）
    try {
        const aiResponse = await callAIOffline(message || '（继续）');
        hideTypingIndicator();
        if (aiResponse) {
            parseAndDispatchAIResponse(aiResponse);
            
            // 生成心声（后台异步，不阻塞）
            // 提取AI响应中出现的角色
            const offlinePattern = /<offline\s+contact="([^"]+)">/gi;
            let charMatch;
            const characters = new Set();
            while ((charMatch = offlinePattern.exec(aiResponse)) !== null) {
                characters.add(charMatch[1]);
            }
            
            // 为每个出现的角色生成心声
            characters.forEach(charName => {
                const contextText = `用户行动：${message || '（继续）'}\n场景中发生的事：${aiResponse.substring(0, 500)}`;
                generateInnerVoice(charName, 'offline', contextText);
            });
        }
        // 检查是否需要总结
        checkAndSummarizeOffline();
    } catch (e) {
        hideTypingIndicator();
        addNarrationMessage('发生了一些问题: ' + e.message, false);
    }
}

// 短信App点击事件
smsApp.addEventListener('click', () => {
    openSmsView();
});

// 返回按钮点击事件
smsBack.addEventListener('click', () => {
    closeSmsView();
});

// 打开短信界面函数
function openSmsView() {
    // 先关闭抽屉
    closeDrawer();
    // 打开短信界面
    smsView.classList.add('active');
    document.body.style.overflow = 'hidden';
    // 加载消息列表
    loadSmsMessages();
    saveViewState('sms');
}

// 关闭短信界面函数
function closeSmsView() {
    smsView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('home');
}

// 打开设置界面
function openSettingsView() {
    closeDrawer();
    settingsView.classList.add('active');
    document.body.style.overflow = 'hidden';
    highlightActiveTheme();
    saveViewState('settings');
}

// 关闭设置界面
function closeSettingsView() {
    settingsView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('home');
}

// 联系人数据存储
function getContactData(name) {
    try {
        const contacts = JSON.parse(localStorage.getItem('contactsData')) || {};
        return contacts[name] || null;
    } catch {
        return null;
    }
}

function saveContactData(originalName, data) {
    try {
        const contacts = JSON.parse(localStorage.getItem('contactsData')) || {};
        contacts[originalName] = data;
        localStorage.setItem('contactsData', JSON.stringify(contacts));
    } catch (e) {
        console.warn('保存联系人失败', e);
    }
}

// 加载短信消息列表
function loadSmsMessages() {
    // 清空现有消息
    smsMessages.innerHTML = '';
    
    // 获取所有聊天记录
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};
    const customContacts = getCustomContacts();
    
    // 构建消息列表
    const messages = [];
    
    // 遍历有聊天记录的联系人
    Object.keys(chatHistory).forEach(name => {
        const history = chatHistory[name];
        if (history && history.length > 0) {
            const lastMsg = history[history.length - 1];
            const contact = customContacts.find(c => c.name === name);
            messages.push({
                name,
                text: lastMsg.text,
                time: '刚刚',
                color: contact?.color || ''
            });
        }
    });
    
    // 如果没有消息，显示提示
    if (messages.length === 0) {
        smsMessages.innerHTML = '<div class="book-empty">暂无消息，去联系人列表开始聊天吧</div>';
        return;
    }
    
    // 创建消息项
    messages.forEach((msg, index) => {
        const saved = getContactData(msg.name);
        const displayName = saved?.nickname || msg.name;
        const avatarColor = saved?.color || msg.color || '';
        const avatarImg = saved?.avatar || '';
        
        const messageItem = document.createElement('div');
        messageItem.className = 'sms-message-item';
        messageItem.style.animationDelay = `${index * 0.05}s`;
        messageItem.style.cursor = 'pointer';
        
        let avatarHtml;
        if (avatarImg) {
            avatarHtml = `<div class="sms-message-avatar"><img src="${avatarImg}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></div>`;
        } else {
            avatarHtml = `<div class="sms-message-avatar" ${avatarColor ? `style="background: ${avatarColor};"` : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>`;
        }
        
        // 获取未读消息数量
        const unreadCounts = getUnreadCounts();
        const unreadCount = unreadCounts[msg.name] || 0;
        const unreadBadge = unreadCount > 0 
            ? `<span class="sms-unread-badge">${unreadCount > 99 ? '99+' : unreadCount}</span>` 
            : '';
        
        // 截取消息预览文本（最多30个字符）
        let previewText = msg.text;
        if (previewText.length > 30) {
            previewText = previewText.substring(0, 30) + '...';
        }
        
        messageItem.innerHTML = `
            ${avatarHtml}
            <div class="sms-message-content">
                <div class="sms-message-header">
                    <span class="sms-message-name">${displayName}</span>
                    <span class="sms-message-time">${msg.time}</span>
                </div>
                <div class="sms-message-text">${previewText}</div>
            </div>
            ${unreadBadge}
        `;
        
        // 点击打开聊天
        messageItem.addEventListener('click', () => {
            openChatDetail(msg.name, msg.text, avatarColor);
        });
        
        // 长按删除消息
        let pressTimer = null;
        const startPress = (e) => {
            pressTimer = setTimeout(() => {
                e.preventDefault();
                if (confirm(`删除与 ${displayName} 的所有聊天记录？`)) {
                    deleteSmsConversation(msg.name);
                }
            }, 500);
        };
        const endPress = () => {
            if (pressTimer) {
                clearTimeout(pressTimer);
                pressTimer = null;
            }
        };
        messageItem.addEventListener('touchstart', startPress);
        messageItem.addEventListener('touchend', endPress);
        messageItem.addEventListener('touchmove', endPress);
        messageItem.addEventListener('mousedown', startPress);
        messageItem.addEventListener('mouseup', endPress);
        messageItem.addEventListener('mouseleave', endPress);
        
        smsMessages.appendChild(messageItem);
    });
}

// 删除短信会话
function deleteSmsConversation(contactName) {
    // 删除聊天记录
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};
    delete chatHistory[contactName];
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    
    // 清除未读计数
    clearUnreadCount(contactName);
    
    // 刷新列表
    loadSmsMessages();
}

// 切换短信标签页
function switchSmsTab(tab) {
    // 清除所有active
    tabMessages.classList.remove('active');
    tabContacts.classList.remove('active');
    tabMoments.classList.remove('active');
    
    // 隐藏所有内容
    smsMessages.style.display = 'none';
    smsContacts.style.display = 'none';
    smsMoments.style.display = 'none';
    addContactBtn.style.display = 'none';
    
    if (tab === 'messages') {
        smsMessages.style.display = 'block';
        tabMessages.classList.add('active');
        smsTitle.textContent = '信息';
        saveViewState('sms', { tab: 'messages' });
    } else if (tab === 'contacts') {
        smsContacts.style.display = 'block';
        tabContacts.classList.add('active');
        smsTitle.textContent = '联系人';
        addContactBtn.style.display = 'flex';
        loadContacts();
        saveViewState('sms', { tab: 'contacts' });
    } else if (tab === 'moments') {
        smsMoments.style.display = 'block';
        tabMoments.classList.add('active');
        smsTitle.textContent = '朋友圈';
        loadUserMoments();
        saveViewState('sms', { tab: 'moments' });
    }
}

// 加载用户微信的朋友圈
function loadUserMoments() {
    const userData = getUserData();
    const coverBg = getMomentsCoverBg();
    const bgStyle = coverBg ? `background-image: url('${coverBg}');` : '';
    
    // 头部区域
    const headerHtml = `
        <div class="moments-header">
            <div class="moments-header-bg" style="${bgStyle}" title="点击更换背景"></div>
            <button class="moments-publish-btn" title="发布动态">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                </svg>
            </button>
            <div class="moments-header-content">
                <div class="moments-user-avatar">
                    ${userData.avatar 
                        ? `<img src="${userData.avatar}">` 
                        : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>`}
                </div>
                <div class="moments-user-info">
                    <div class="moments-user-name">${userData.name || '我'}</div>
                    <div class="moments-user-desc">分享生活点滴</div>
                </div>
            </div>
            <input type="file" id="momentsBgInput" accept="image/*" style="display:none;">
        </div>
    `;
    
    smsMoments.innerHTML = headerHtml + '<div class="moments-list"></div>';
    
    const momentsList = smsMoments.querySelector('.moments-list');
    const bgInput = smsMoments.querySelector('#momentsBgInput');
    
    // 发布按钮
    smsMoments.querySelector('.moments-publish-btn').onclick = () => showMomentPublishModal();
    
    // 点击背景换图
    smsMoments.querySelector('.moments-header-bg').onclick = () => bgInput.click();
    
    bgInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                saveMomentsCoverBg(ev.target.result);
                smsMoments.querySelector('.moments-header-bg').style.backgroundImage = `url('${ev.target.result}')`;
            };
            reader.readAsDataURL(file);
        }
    };
    
    // 加载动态
    const posts = getPosts();
    
    if (posts.length === 0) {
        momentsList.innerHTML = '<div class="moments-empty">还没有动态，发布第一条吧~</div>';
        return;
    }
    
    posts.forEach((post, index) => {
        const card = document.createElement('div');
        card.className = 'moment-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        let authorName, avatarHtml;
        
        if (post.author === 'user') {
            authorName = userData.name || '我';
            avatarHtml = userData.avatar 
                ? `<img src="${userData.avatar}">` 
                : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>`;
        } else {
            const saved = getContactData(post.author);
            authorName = saved?.nickname || post.author;
            const bgColor = saved?.color || 'var(--accent)';
            avatarHtml = saved?.avatar 
                ? `<img src="${saved.avatar}">` 
                : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>`;
            if (!saved?.avatar) {
                card.querySelector?.('.moment-avatar')?.style?.setProperty('background', bgColor);
            }
        }
        
        // 图片HTML
        const imageHtml = post.image ? `
            <div class="moment-image-wrap">
                <img class="moment-image" src="${CONTACT_POST_IMAGE}" alt="${escapeHtml(post.imageDesc || '图片')}">
                <div class="moment-image-caption">${escapeHtml(post.imageDesc || post.image)}</div>
            </div>
        ` : '';
        
        // 点赞列表
        const likes = post.likes || [];
        const userLiked = likes.includes('user');
        const likesHtml = likes.length > 0 ? `<div class="moment-likes">❤️ ${likes.map(l => l === 'user' ? (userData.name || '我') : l).join('、')}</div>` : '';
        
        // 评论列表
        const comments = post.comments || [];
        const commentsHtml = comments.map(c => {
            const commenterName = c.author === 'user' ? (userData.name || '我') : c.author;
            if (c.replyTo) {
                return `<div class="moment-comment"><span class="moment-comment-author">${commenterName}</span> 回复 <span class="moment-comment-author">${c.replyTo}</span>：${escapeHtml(c.text)}</div>`;
            }
            return `<div class="moment-comment"><span class="moment-comment-author">${commenterName}</span>：${escapeHtml(c.text)}</div>`;
        }).join('');
        
        card.innerHTML = `
            <div class="moment-card-header">
                <div class="moment-avatar">${avatarHtml}</div>
                <div class="moment-meta">
                    <div class="moment-author">${escapeHtml(authorName)}</div>
                    <div class="moment-time">${post.time}</div>
                </div>
                <button class="moment-delete-btn" title="删除">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
            ${post.content ? `<div class="moment-content">${escapeHtml(post.content)}</div>` : ''}
            ${imageHtml}
            <div class="moment-actions">
                <button class="moment-action-btn moment-like-btn ${userLiked ? 'liked' : ''}" data-post-id="${post.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${userLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <button class="moment-action-btn moment-comment-btn" data-post-id="${post.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                </button>
            </div>
            ${(likes.length > 0 || comments.length > 0) ? `
            <div class="moment-interactions">
                ${likesHtml}
                ${commentsHtml ? `<div class="moment-comments-list">${commentsHtml}</div>` : ''}
            </div>` : ''}
        `;
        
        // 设置非用户的头像背景色
        if (post.author !== 'user') {
            const saved = getContactData(post.author);
            if (!saved?.avatar) {
                card.querySelector('.moment-avatar').style.background = saved?.color || 'var(--accent)';
            }
        }
        
        // 删除按钮
        card.querySelector('.moment-delete-btn').onclick = () => {
            if (confirm('删除这条动态？')) {
                deletePost(post.id);
                loadUserMoments();
            }
        };
        
        // 点赞按钮
        card.querySelector('.moment-like-btn').onclick = () => {
            togglePostLike(post.id);
            loadUserMoments();
        };
        
        // 评论按钮
        card.querySelector('.moment-comment-btn').onclick = () => {
            showCommentInput(post.id, post.author, loadUserMoments);
        };
        
        // 点击图片显示/隐藏描述
        const imgWrap = card.querySelector('.moment-image-wrap');
        if (imgWrap) {
            imgWrap.onclick = () => imgWrap.classList.toggle('show-caption');
        }
        
        momentsList.appendChild(card);
    });
}

// 发布朋友圈动态弹窗
function showMomentPublishModal() {
    const modal = document.createElement('div');
    modal.className = 'moment-publish-modal';
    modal.innerHTML = `
        <div class="moment-publish-box">
            <div class="moment-publish-header">
                <h3>发布动态</h3>
                <button class="moment-publish-close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="moment-publish-body">
                <textarea class="moment-publish-textarea" placeholder="分享你此刻的想法..."></textarea>
                <div class="moment-image-input">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    <input type="text" class="moment-image-desc" placeholder="图片描述（可选，供AI识别）">
                </div>
            </div>
            <div class="moment-publish-footer">
                <button class="primary-button moment-publish-submit">发布</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const textarea = modal.querySelector('.moment-publish-textarea');
    const imageDesc = modal.querySelector('.moment-image-desc');
    setTimeout(() => textarea.focus(), 100);
    
    // 关闭
    const closeModal = () => modal.remove();
    modal.querySelector('.moment-publish-close').onclick = closeModal;
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };
    
    // 发布
    modal.querySelector('.moment-publish-submit').onclick = () => {
        const content = textarea.value.trim();
        const imgDesc = imageDesc.value.trim();
        
        if (!content && !imgDesc) {
            textarea.focus();
            return;
        }
        
        const now = new Date();
        const timeStr = now.toLocaleString('zh-CN', { 
            month: 'numeric', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const posts = getPosts();
        posts.unshift({
            id: Date.now(),
            author: 'user',
            content: content,
            image: imgDesc,
            time: timeStr
        });
        savePosts(posts);
        
        closeModal();
        loadUserMoments();
    };
}

// 保留旧函数名兼容
function showPostMomentModal() {
    showMomentPublishModal();
}

// 加载联系人列表
function loadContacts() {
    smsContacts.innerHTML = '';
    
    // 加载自定义联系人
    const customContacts = getCustomContacts();
    
    customContacts.forEach((contact, index) => {
        const saved = getContactData(contact.name);
        const displayName = saved?.nickname || contact.name;
        const avatarColor = saved?.color || contact.color || '';
        const avatarImg = saved?.avatar || '';
        
        const item = document.createElement('div');
        item.className = 'contact-item';
        item.style.animationDelay = `${index * 0.05}s`;
        
        let avatarHtml;
        if (avatarImg) {
            avatarHtml = `<div class="contact-avatar"><img src="${avatarImg}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></div>`;
        } else {
            avatarHtml = `<div class="contact-avatar" ${avatarColor ? `style="background: ${avatarColor};"` : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>`;
        }
        
        item.innerHTML = `
            ${avatarHtml}
            <div class="contact-info">
                <div class="contact-name">${displayName}</div>
                <div class="contact-phone">${contact.phone || '138****8888'}</div>
            </div>
        `;
        
        item.addEventListener('click', () => {
            openChatDetail(contact.name, '点击开始聊天', avatarColor);
        });
        
        smsContacts.appendChild(item);
    });
    
    // 如果没有联系人，显示提示
    if (customContacts.length === 0) {
        smsContacts.innerHTML = '<div class="book-empty">点击右上角 + 添加联系人</div>';
    }
}

// 聊天详情
let currentChatName = '';
let originalChatName = '';

function getChatHistory(name) {
    try {
        const history = JSON.parse(localStorage.getItem('chatHistory')) || {};
        return history[name] || [];
    } catch {
        return [];
    }
}

function saveChatHistory(name, messages) {
    try {
        const history = JSON.parse(localStorage.getItem('chatHistory')) || {};
        history[name] = messages;
        localStorage.setItem('chatHistory', JSON.stringify(history));
    } catch (e) {
        console.warn('保存聊天记录失败', e);
    }
}

const MESSAGE_DISPLAY_LIMIT = 40; // 默认显示的消息数量

function openChatDetail(name, lastMessage, avatarColor) {
    originalChatName = name;
    const saved = getContactData(name);
    currentChatName = saved?.nickname || name;
    chatDetailName.textContent = currentChatName;
    chatDetailView.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 清除该联系人的未读消息
    clearUnreadCount(name);
    
    // 加载聊天记录
    chatDetailMessages.innerHTML = '';
    
    const history = getChatHistory(name);
    if (history.length > 0) {
        // 如果消息超过40条，显示展开按钮
        const hasMoreHistory = history.length > MESSAGE_DISPLAY_LIMIT;
        const displayHistory = hasMoreHistory ? history.slice(-MESSAGE_DISPLAY_LIMIT) : history;
        const hiddenCount = history.length - displayHistory.length;
        
        // 添加展开历史记录按钮
        if (hasMoreHistory) {
            const expandBtn = document.createElement('div');
            expandBtn.className = 'expand-history-btn';
            expandBtn.innerHTML = `<span>展开历史记录 (${hiddenCount}条)</span>`;
            expandBtn.addEventListener('click', () => {
                loadFullChatHistory(name);
            });
            chatDetailMessages.appendChild(expandBtn);
        }
        
        let lastTimestamp = null;
        // 显示已保存的聊天记录
        displayHistory.forEach((msg, index) => {
            try {
                // 检查是否需要显示时间分隔条（超过10分钟）
                if (msg.timestamp && lastTimestamp) {
                    const timeDiff = msg.timestamp - lastTimestamp;
                    if (timeDiff > 10 * 60 * 1000) { // 10分钟 = 600000毫秒
                        addTimeSeperator(msg.timestamp);
                    }
                }
                lastTimestamp = msg.timestamp || lastTimestamp;
                
                const actualIndex = hasMoreHistory ? hiddenCount + index : index;
                if (msg.isEmoji && msg.emojiUrl) {
                    // 表情消息
                    addEmojiBubble(msg.emojiUrl, msg.type, false, actualIndex);
                } else if (msg.text) {
                    addChatBubble(msg.text, msg.type || 'received', false, actualIndex);
                }
            } catch (e) {
                console.warn('加载消息失败:', index, e);
            }
        });
        
        // 加载完成后立即滚动到底部（不使用动画）
        chatDetailMessages.scrollTop = chatDetailMessages.scrollHeight;
    }
    
    saveViewState('chatDetail', { contactId: name, contactName: currentChatName, avatarColor });
}

// 加载完整聊天历史
function loadFullChatHistory(name) {
    chatDetailMessages.innerHTML = '';
    
    const history = getChatHistory(name);
    let lastTimestamp = null;
    
    history.forEach((msg, index) => {
        try {
            if (msg.timestamp && lastTimestamp) {
                const timeDiff = msg.timestamp - lastTimestamp;
                if (timeDiff > 10 * 60 * 1000) {
                    addTimeSeperator(msg.timestamp);
                }
            }
            lastTimestamp = msg.timestamp || lastTimestamp;
            
            if (msg.isEmoji && msg.emojiUrl) {
                addEmojiBubble(msg.emojiUrl, msg.type, false, index);
            } else if (msg.text) {
                addChatBubble(msg.text, msg.type || 'received', false, index);
            }
        } catch (e) {
            console.warn('加载消息失败:', index, e);
        }
    });
    
    // 滚动到顶部显示最早的消息
    chatDetailMessages.scrollTop = 0;
}

function closeChatDetail() {
    // 关闭前再次确保清除该联系人的未读计数
    if (originalChatName) {
        clearUnreadCount(originalChatName);
    }
    chatDetailView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('sms');
}

// 切换微信图片描述显示
function toggleChatImageDesc(id) {
    console.log('【调试】点击图片，ID:', id);
    const desc = document.getElementById(id);
    console.log('【调试】找到描述元素:', desc);
    if (desc) {
        console.log('【调试】描述内容:', desc.textContent);
        desc.style.display = desc.style.display === 'none' ? 'block' : 'none';
    }
}

function addChatBubble(text, type, save = true, historyIndex = null) {
    if (!text) return;
    
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${type}`;
    
    // 检查是否是图片消息
    const imageMatch = type === 'received' ? text.match(/\[(图片|照片|发图|发送图片|发了一张图|发了张图|发了一张照片|发了张照片|拍了一张照片|拍了张照片|分享图片|分享照片|一张照片|一张图片|一张图)[：:]\s*([\s\S]+)\]/) : null;
    
    if (imageMatch) {
        // 图片消息 - 完全独立的结构
        const imageDesc = imageMatch[2] ? imageMatch[2].trim() : '点击查看图片';
        
        // 创建图片容器（正方形，描述覆盖在图片上）
        const container = document.createElement('div');
        container.style.width = '180px';
        container.style.height = '180px';
        container.style.borderRadius = '12px';
        container.style.overflow = 'hidden';
        container.style.cursor = 'pointer';
        container.style.position = 'relative';
        
        // 创建图片（正方形）
        const img = document.createElement('img');
        img.src = 'https://static.eeo.cn/upload/images/20251129/ca6e37f411c8b7241993.png';
        img.style.width = '180px';
        img.style.height = '180px';
        img.style.objectFit = 'cover';
        img.style.display = 'block';
        img.style.backgroundColor = '#ddd';
        
        // 创建描述区域（覆盖在图片上，默认隐藏）
        const descDiv = document.createElement('div');
        descDiv.textContent = imageDesc;
        descDiv.style.position = 'absolute';
        descDiv.style.top = '0';
        descDiv.style.left = '0';
        descDiv.style.right = '0';
        descDiv.style.bottom = '0';
        descDiv.style.padding = '12px';
        descDiv.style.background = 'rgba(0,0,0,0.8)';
        descDiv.style.color = 'white';
        descDiv.style.fontSize = '13px';
        descDiv.style.lineHeight = '1.5';
        descDiv.style.overflowY = 'auto';
        descDiv.style.display = 'none'; // 默认隐藏
        
        container.appendChild(img);
        container.appendChild(descDiv);
        
        // 点击显示/隐藏描述
        container.onclick = function(e) {
            e.stopPropagation();
            descDiv.style.display = descDiv.style.display === 'none' ? 'flex' : 'none';
        };
        
        bubble.style.padding = '0';
        bubble.style.background = 'transparent';
        bubble.appendChild(container);
    } else {
        bubble.textContent = text;
    }
    
    // 获取当前索引（使用传入的historyIndex或计算新的）
    const history = getChatHistory(originalChatName);
    const bubbleIndex = historyIndex !== null ? historyIndex : history.length;
    bubble.dataset.index = bubbleIndex;
    bubble.dataset.type = type;
    
    // 长按事件（仅对非图片消息）
    if (!imageMatch) {
        let pressTimer = null;
        
        const startPress = () => {
            pressTimer = setTimeout(() => {
                showBubbleMenu(bubble, type, bubbleIndex);
            }, 500);
        };
        
        const endPress = () => {
            if (pressTimer) {
                clearTimeout(pressTimer);
                pressTimer = null;
            }
        };
        
        bubble.addEventListener('touchstart', startPress);
        bubble.addEventListener('touchend', endPress);
        bubble.addEventListener('touchmove', endPress);
        bubble.addEventListener('mousedown', startPress);
        bubble.addEventListener('mouseup', endPress);
        bubble.addEventListener('mouseleave', endPress);
    }
    
    chatDetailMessages.appendChild(bubble);
    bubble.scrollIntoView({ behavior: 'smooth', block: 'end' });
    
    // 保存到本地
    if (save) {
        history.push({ text, type, timestamp: Date.now() });
        saveChatHistory(originalChatName, history);
        // 刷新消息列表，确保预览更新
        loadSmsMessages();
    }
}

// 添加时间分隔条
function addTimeSeperator(timestamp) {
    const separator = document.createElement('div');
    separator.className = 'chat-time-separator';
    
    const date = new Date(timestamp);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();
    
    let timeStr;
    if (isToday) {
        timeStr = date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    } else if (isYesterday) {
        timeStr = '昨天 ' + date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    } else {
        timeStr = date.toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' }) + ' ' + 
                  date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    }
    
    separator.textContent = timeStr;
    chatDetailMessages.appendChild(separator);
}

function showBubbleMenu(bubble, type, index) {
    // 移除已有菜单
    const existingMenu = document.querySelector('.bubble-menu');
    if (existingMenu) existingMenu.remove();
    
    const menu = document.createElement('div');
    menu.className = 'bubble-menu';
    
    if (type === 'sent') {
        menu.innerHTML = `
            <button class="bubble-menu-item" data-action="withdraw">撤回</button>
            <button class="bubble-menu-item" data-action="delete">删除</button>
        `;
    } else {
        menu.innerHTML = `
            <button class="bubble-menu-item" data-action="delete">删除</button>
        `;
    }
    
    // 定位菜单
    const rect = bubble.getBoundingClientRect();
    menu.style.top = `${rect.top - 40}px`;
    menu.style.left = `${rect.left + rect.width / 2}px`;
    
    menu.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        if (action === 'delete') {
            deleteBubble(bubble);
        } else if (action === 'withdraw') {
            withdrawBubble(bubble);
        }
        menu.remove();
    });
    
    document.body.appendChild(menu);
    
    // 点击其他地方关闭菜单
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 10);
}

function deleteBubble(bubble) {
    const history = getChatHistory(originalChatName);
    // 使用存储的索引而不是DOM索引（因为DOM中有时间分隔符）
    const index = parseInt(bubble.dataset.index);
    if (!isNaN(index) && index >= 0 && index < history.length) {
        history.splice(index, 1);
        saveChatHistory(originalChatName, history);
        
        // 更新后续气泡的索引（不刷新页面）
        const allBubbles = chatDetailMessages.querySelectorAll('.chat-bubble');
        allBubbles.forEach(b => {
            const bIndex = parseInt(b.dataset.index);
            if (!isNaN(bIndex) && bIndex > index) {
                b.dataset.index = bIndex - 1;
            }
        });
    }
    bubble.remove();
    loadSmsMessages();
}

function withdrawBubble(bubble) {
    const history = getChatHistory(originalChatName);
    // 使用存储的索引
    const index = parseInt(bubble.dataset.index);
    if (!isNaN(index) && index >= 0 && index < history.length) {
        history[index] = { text: '消息已撤回', type: 'withdrawn' };
        saveChatHistory(originalChatName, history);
    }
    bubble.textContent = '消息已撤回';
    bubble.classList.add('withdrawn');
    loadSmsMessages();
}

// 显示聊天气泡输入动画
function showChatTyping() {
    // 显示头部状态
    chatTypingStatus.classList.add('active');
    
    // 显示气泡动画
    const typing = document.createElement('div');
    typing.className = 'chat-typing';
    typing.id = 'chatTyping';
    typing.innerHTML = '<span></span><span></span><span></span>';
    chatDetailMessages.appendChild(typing);
    typing.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function hideChatTyping() {
    // 隐藏头部状态
    chatTypingStatus.classList.remove('active');
    
    // 移除气泡动画
    const typing = document.getElementById('chatTyping');
    if (typing) typing.remove();
}

// 只发送用户消息（不触发AI）
function sendChatMessageOnly() {
    const text = chatDetailInput.value.trim();
    if (text) {
        addChatBubble(text, 'sent', true);
        chatDetailInput.value = '';
        chatDetailInput.style.height = 'auto';
        chatDetailInput.focus();
        // 刷新消息列表，确保对话显示
        loadSmsMessages();
    }
}

// 发送消息并触发AI回复
async function sendChatMessage() {
    const text = chatDetailInput.value.trim();
    
    // 先发送用户消息（如果有）
    if (text) {
        addChatBubble(text, 'sent', true);
        chatDetailInput.value = '';
        chatDetailInput.style.height = 'auto';
        // 刷新消息列表，确保对话显示
        loadSmsMessages();
    }
    chatDetailInput.focus();
    
    // 获取联系人人设
    const contacts = getCustomContacts();
    const contact = contacts.find(c => c.name === originalChatName);
    const persona = contact?.persona || '';
    
    // 显示输入动画
    showChatTyping();
    
    // 调用 AI（即使没有用户消息也触发）
    try {
        const aiResponse = await callAISms(text || '（继续）', persona);
        hideChatTyping();
        if (aiResponse) {
            // 按句子分割发送（一句话一个气泡）
            await sendMessagesBySentence(aiResponse);
            
            // 生成心声（后台异步，不阻塞）
            const contextText = `用户说：${text || '（继续对话）'}\n${originalChatName}回复：${aiResponse}`;
            generateInnerVoice(originalChatName, 'online', contextText);
        }
        // 检查是否需要总结
        checkAndSummarizeSms(originalChatName);
    } catch (e) {
        hideChatTyping();
        addChatBubble('消息发送失败', 'received', true);
    }
}

// 发起通话
async function startChatCall() {
    const saved = getContactData(originalChatName);
    const displayName = saved?.nickname || originalChatName;
    
    // 获取联系人人设
    const contacts = getCustomContacts();
    const contact = contacts.find(c => c.name === originalChatName);
    const persona = contact?.persona || '';
    
    // 显示通话中状态
    const callModal = document.createElement('div');
    callModal.className = 'call-modal';
    callModal.innerHTML = `
        <div class="call-modal-content">
            <div class="call-avatar" style="background: ${saved?.color || 'var(--accent)'}">
                ${saved?.avatar ? `<img src="${saved.avatar}">` : displayName.charAt(0)}
            </div>
            <div class="call-name">${displayName}</div>
            <div class="call-status">正在通话中...</div>
            <div class="call-transcript" id="callTranscriptContent"></div>
            <button class="call-end-btn" id="endCallBtn">挂断</button>
        </div>
    `;
    document.body.appendChild(callModal);
    
    const transcriptDiv = document.getElementById('callTranscriptContent');
    const endBtn = document.getElementById('endCallBtn');
    
    let callEnded = false;
    endBtn.addEventListener('click', () => {
        callEnded = true;
        callModal.remove();
    });
    
    // 调用AI生成通话内容
    try {
        const userData = getUserData();
        const callPrompt = `你现在正在和用户进行电话通话。请生成一段自然的电话对话。

【你的人设】
${persona || '普通朋友'}

【用户信息】
用户名：${userData.name || '用户'}

【要求】
- 生成5-8轮对话
- 格式：每行一句，用"我："或"${userData.name || '用户'}："开头
- 对话要自然，符合电话交流的特点
- 内容可以是日常闲聊、关心问候等

直接输出对话内容，不要其他解释：`;

        const response = await callAI(callPrompt, '');
        
        if (callEnded) return;
        
        // 解析并逐条显示对话
        const lines = response.split('\n').filter(l => l.trim());
        for (let i = 0; i < lines.length; i++) {
            if (callEnded) break;
            
            const line = lines[i].trim();
            const isMine = line.startsWith('我：') || line.startsWith('我:');
            const text = line.replace(/^(我|[^：:]+)[：:]/, '').trim();
            
            const msgDiv = document.createElement('div');
            msgDiv.className = `call-message ${isMine ? 'mine' : 'theirs'}`;
            msgDiv.textContent = text;
            transcriptDiv.appendChild(msgDiv);
            transcriptDiv.scrollTop = transcriptDiv.scrollHeight;
            
            await new Promise(r => setTimeout(r, 800 + Math.random() * 600));
        }
        
        if (!callEnded) {
            document.querySelector('.call-status').textContent = '通话结束';
        }
    } catch (e) {
        if (!callEnded) {
            document.querySelector('.call-status').textContent = '通话失败';
        }
    }
}

// 按句子分割发送消息（支持表情）
async function sendMessagesBySentence(text) {
    console.log('【调试】原始AI回复:', text);
    
    // 先提取图片标签（保护多行图片描述不被分割）
    // 冒号可选，支持多种格式
    const imageRegex = /\[(图片|照片|发图|发送图片|发了一张图|发了张图|发了一张照片|发了张照片|拍了一张照片|拍了张照片|分享图片|分享照片|一张照片|一张图片|一张图)[：:]?[\s\S]*?\]/g;
    const images = text.match(imageRegex) || [];
    console.log('【调试】提取到的图片标签:', images);
    
    // 用占位符替换图片标签
    let processedText = text;
    const imagePlaceholders = [];
    images.forEach((img, idx) => {
        const placeholder = `__IMAGE_${idx}__`;
        imagePlaceholders.push({ placeholder, content: img });
        processedText = processedText.replace(img, placeholder);
    });
    console.log('【调试】替换后的文本:', processedText);
    
    // 按句号、问号、感叹号、换行分割
    const sentences = processedText.split(/(?<=[。！？\n])/g)
        .map(s => s.trim())
        .filter(s => s.length > 0);
    
    if (sentences.length === 0) {
        await sendSingleMessage(text);
        return;
    }
    
    console.log('【调试】分割后的句子:', sentences);
    
    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i];
        
        // 还原图片标签
        imagePlaceholders.forEach(({ placeholder, content }) => {
            sentence = sentence.replace(placeholder, content);
        });
        
        console.log('【调试】发送第', i+1, '条消息:', sentence);
        
        // 显示输入动画（除了第一条）
        if (i > 0) {
            showChatTyping();
            await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500));
            hideChatTyping();
        }
        
        await sendSingleMessage(sentence);
        
        // 检查用户是否仍在聊天界面，如果不在则增加未读计数
        const isStillInChat = chatDetailView && chatDetailView.classList.contains('active');
        if (!isStillInChat && originalChatName) {
            addUnreadCount(originalChatName);
        }
        
        // 每条消息之间稍微延迟
        if (i < sentences.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    }
    
    // 所有消息发送完成后，如果用户不在聊天界面则显示通知
    const isStillInChat = chatDetailView && chatDetailView.classList.contains('active');
    if (!isStillInChat && originalChatName) {
        const saved = getContactData(originalChatName);
        showWechatNotification(originalChatName, text, saved?.color, saved?.avatar);
        console.log('【通知】用户已离开聊天界面，显示通知');
    }
}

// 发送单条消息（解析表情）
async function sendSingleMessage(text) {
    const parts = parseEmojiInMessage(text);
    
    for (const part of parts) {
        if (part.type === 'emoji') {
            // 发送表情（带长按菜单和保存）
            addEmojiBubble(part.url, 'received', true, part.name);
        } else if (part.content.trim()) {
            // 发送文本
            addChatBubble(part.content.trim(), 'received', true);
        }
        
        // 每个部分之间稍微延迟
        if (parts.length > 1) {
            await new Promise(resolve => setTimeout(resolve, 150));
        }
    }
}

// 联系人编辑
let currentContactColor = '';
let tempAvatarUrl = '';

// 头像弹窗函数
function openAvatarModal() {
    const saved = getContactData(originalChatName);
    tempAvatarUrl = saved?.avatar || '';
    avatarUrlInput.value = tempAvatarUrl;
    if (tempAvatarUrl) {
        updateAvatarPreview(tempAvatarUrl);
    } else {
        resetAvatarPreview();
    }
    avatarModal.classList.add('active');
}

function closeAvatarModal() {
    avatarModal.classList.remove('active');
    avatarFileInput.value = '';
}

function updateAvatarPreview(url) {
    avatarPreview.innerHTML = `<img src="${url}" onerror="this.parentElement.innerHTML='<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><path d=\\'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\'></path><circle cx=\\'12\\' cy=\\'7\\' r=\\'4\\'></circle></svg>'">`;
}

function resetAvatarPreview() {
    avatarPreview.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
}

function saveAvatarChange() {
    tempAvatarUrl = avatarUrlInput.value.trim();
    
    // 更新编辑界面的头像显示
    if (tempAvatarUrl) {
        contactEditAvatar.innerHTML = `<img src="${tempAvatarUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
    } else {
        contactEditAvatar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><div class="avatar-edit-hint">点击更换头像</div>`;
    }
    
    closeAvatarModal();
}

function openContactEdit() {
    contactEditView.classList.add('active');
    document.body.style.overflow = 'hidden';
    contactNickname.value = currentChatName;
    
    // 加载已保存的数据
    const saved = getContactData(originalChatName);
    colorOptions.forEach(o => o.classList.remove('active'));
    
    // 加载人设和真实姓名
    const contacts = getCustomContacts();
    const contact = contacts.find(c => c.name === originalChatName);
    contactPersonaEdit.value = contact?.persona || '';
    contactRealName.value = contact?.realName || '';
    
    // 加载头像
    tempAvatarUrl = saved?.avatar || '';
    if (tempAvatarUrl) {
        contactEditAvatar.innerHTML = `<img src="${tempAvatarUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
        contactEditAvatar.style.background = 'transparent';
    } else if (saved?.color) {
        currentContactColor = saved.color;
        contactEditAvatar.style.background = saved.color;
        contactEditAvatar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><div class="avatar-edit-hint">点击更换头像</div>`;
        colorOptions.forEach(o => {
            if (o.dataset.color === saved.color) {
                o.classList.add('active');
            }
        });
    } else {
        currentContactColor = '';
        contactEditAvatar.style.background = '';
        contactEditAvatar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><div class="avatar-edit-hint">点击更换头像</div>`;
    }
    
    saveViewState('contactEdit', { contactId: originalChatName, contactName: currentChatName, avatarColor: saved?.color });
}

function closeContactEdit() {
    contactEditView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('chatDetail', { contactId: originalChatName, contactName: currentChatName });
}

function saveContactChanges() {
    const newName = contactNickname.value.trim() || originalChatName;
    const activeColor = document.querySelector('#contactEditView .color-option.active');
    const color = activeColor ? activeColor.dataset.color : currentContactColor;
    const newPersona = contactPersonaEdit.value.trim();
    const newRealName = contactRealName.value.trim();
    
    // 保存到本地（包括头像）
    saveContactData(originalChatName, {
        nickname: newName,
        color: color,
        avatar: tempAvatarUrl
    });
    
    // 保存人设和真实姓名到联系人数据
    const contacts = getCustomContacts();
    const contactIndex = contacts.findIndex(c => c.name === originalChatName);
    if (contactIndex >= 0) {
        contacts[contactIndex].persona = newPersona;
        contacts[contactIndex].realName = newRealName;
        localStorage.setItem('customContacts', JSON.stringify(contacts));
    }
    
    currentChatName = newName;
    chatDetailName.textContent = newName;
    
    // 刷新消息列表和联系人列表
    loadSmsMessages();
    loadContacts();
    
    closeContactEdit();
}

function deleteContact() {
    if (!confirm(`确定要删除联系人 "${currentChatName}" 吗？\n聊天记录也会被删除。`)) {
        return;
    }
    
    // 删除联系人数据
    let contacts = getCustomContacts();
    contacts = contacts.filter(c => c.name !== originalChatName);
    localStorage.setItem('customContacts', JSON.stringify(contacts));
    
    // 删除联系人设置
    const contactsData = JSON.parse(localStorage.getItem('contactsData')) || {};
    delete contactsData[originalChatName];
    localStorage.setItem('contactsData', JSON.stringify(contactsData));
    
    // 删除聊天记录
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};
    delete chatHistory[originalChatName];
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    
    // 清除未读计数
    clearUnreadCount(originalChatName);
    
    // 删除短信总结
    const smsSummaries = JSON.parse(localStorage.getItem('smsSummaries')) || {};
    delete smsSummaries[originalChatName];
    localStorage.setItem('smsSummaries', JSON.stringify(smsSummaries));
    
    // 关闭编辑界面和聊天界面
    closeContactEdit();
    closeChatDetail();
    
    // 刷新列表
    loadSmsMessages();
    loadContacts();
}

// 添加联系人界面
let newContactColor = '';

function openContactAdd() {
    contactAddView.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 重置表单
    contactAddName.value = '';
    contactAddPersona.value = '';
    contactAddAvatar.style.background = '';
    newContactColor = '';
    contactAddColors.forEach(o => o.classList.remove('active'));
    
    saveViewState('contactAdd');
}

function closeContactAdd() {
    contactAddView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('sms', { tab: 'contacts' });
}

function getCustomContacts() {
    try {
        return JSON.parse(localStorage.getItem('customContacts')) || [];
    } catch {
        return [];
    }
}

function saveCustomContacts(contacts) {
    localStorage.setItem('customContacts', JSON.stringify(contacts));
}

function createNewContact() {
    const name = contactAddName.value.trim();
    if (!name) {
        alert('请输入真实姓名');
        return;
    }
    
    const persona = contactAddPersona.value.trim();
    const activeColor = document.querySelector('#contactAddColors .color-option.active');
    const color = activeColor ? activeColor.dataset.color : '#4fd1c5';
    
    const contacts = getCustomContacts();
    
    // 检查是否已存在
    if (contacts.some(c => c.name === name)) {
        alert('该联系人已存在');
        return;
    }
    
    // 生成随机电话号码
    const phone = '1' + ['3','5','7','8','9'][Math.floor(Math.random()*5)] + Math.random().toString().slice(2,10) + '**';
    
    contacts.push({
        name,
        persona,
        color,
        phone,
        createdAt: Date.now()
    });
    
    saveCustomContacts(contacts);
    loadContacts();
    closeContactAdd();
}

// 应用主题
function applyTheme(theme) {
    document.body.dataset.theme = theme;
    highlightActiveTheme();
    applyThemeText(theme);
}

function highlightActiveTheme() {
    const activeTheme = document.body.dataset.theme;
    themeCards.forEach((card) => {
        card.classList.toggle('active', card.dataset.theme === activeTheme);
    });
}

// 根据主题应用不同的文字风格
function applyThemeText(theme) {
    const isAncient = theme === 'ancient';
    
    // 古风文字映射
    const ancientTexts = {
        '短信': '飞鸽传书',
        '设置': '典籍阁',
        '联系人': '故交名录',
        '添加联系人': '添新友',
        '输入消息...': '落笔于此...',
        '发送': '传书',
        '保存': '存录',
        '取消': '罢了',
        '确定': '依允',
        '删除': '删去',
        '编辑': '修改',
        '清除历史': '焚毁旧卷',
        '查看总结': '览要',
        'AI总结': '妙笔生花',
        'AI生成角色': '凭空造人',
        '温馨聊天界面': '墨韵雅集'
    };
    
    // 默认文字映射
    const defaultTexts = {
        '飞鸽传书': '短信',
        '典籍阁': '设置',
        '故交名录': '联系人',
        '添新友': '添加联系人',
        '落笔于此...': '输入消息...',
        '传书': '发送',
        '存录': '保存',
        '罢了': '取消',
        '依允': '确定',
        '删去': '删除',
        '修改': '编辑',
        '焚毁旧卷': '清除历史',
        '览要': '查看总结',
        '妙笔生花': 'AI总结',
        '凭空造人': 'AI生成角色',
        '墨韵雅集': '温馨聊天界面'
    };
    
    const textMap = isAncient ? ancientTexts : defaultTexts;
    
    // 更新输入框占位符
    const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach(input => {
        const placeholder = input.placeholder;
        if (textMap[placeholder]) {
            input.placeholder = textMap[placeholder];
        }
    });
    
    // 更新按钮和标题文字
    const elements = document.querySelectorAll('button, h3, .app-name, .theme-name, title');
    elements.forEach(el => {
        const text = el.textContent.trim();
        if (textMap[text]) {
            el.textContent = textMap[text];
        }
    });
    
    // 更新页面标题
    const title = document.querySelector('title');
    if (title && textMap[title.textContent]) {
        title.textContent = textMap[title.textContent];
    }
}

function updateTemperatureValue(value) {
    temperatureValue.textContent = Number(value).toFixed(1);
}

async function fetchModels() {
    if (!apiUrlInput.value) {
        setApiStatus('error', '请先填写接口 URL');
        return;
    }
    setApiStatus('info', '正在拉取模型列表...');
    pullModelsBtn.disabled = true;
    
    try {
        const baseUrl = apiUrlInput.value.replace(/\/chat\/completions\/?$/, '').replace(/\/$/, '');
        const modelsUrl = baseUrl + '/models';
        
        const headers = { 'Content-Type': 'application/json' };
        if (apiKeyInput.value) {
            headers['Authorization'] = `Bearer ${apiKeyInput.value}`;
        }
        
        const response = await fetch(modelsUrl, { method: 'GET', headers });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        const models = (data.data || []).map(m => m.id);
        
        if (models.length === 0) {
            setApiStatus('error', '未获取到模型列表');
        } else {
            populateModelOptions(models);
            setApiStatus('success', `已获取 ${models.length} 个模型`);
        }
    } catch (error) {
        setApiStatus('error', '拉取失败: ' + error.message);
    } finally {
        pullModelsBtn.disabled = false;
    }
}

function populateModelOptions(models) {
    const current = apiModelSelect.value;
    apiModelSelect.innerHTML = '<option value="">请选择模型</option>';
    models.forEach((model) => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        apiModelSelect.appendChild(option);
    });
    if (current && models.includes(current)) {
        apiModelSelect.value = current;
    }
}

async function testApiConnection() {
    if (!apiUrlInput.value) {
        setApiStatus('error', '请先填写接口 URL');
        return;
    }
    setApiStatus('info', '正在检测链接...');
    testConnectionBtn.disabled = true;
    
    try {
        const headers = { 'Content-Type': 'application/json' };
        if (apiKeyInput.value) {
            headers['Authorization'] = `Bearer ${apiKeyInput.value}`;
        }
        
        const baseUrl = apiUrlInput.value.replace(/\/chat\/completions\/?$/, '').replace(/\/$/, '');
        const response = await fetch(baseUrl + '/models', { method: 'GET', headers });
        
        if (response.ok) {
            setApiStatus('success', '连接正常');
        } else {
            setApiStatus('error', `连接失败: HTTP ${response.status}`);
        }
    } catch (error) {
        setApiStatus('error', '连接失败: ' + error.message);
    } finally {
        testConnectionBtn.disabled = false;
    }
}

function saveApiConfig() {
    if (!apiUrlInput.value) {
        setApiStatus('error', '请填写接口 URL');
        return;
    }
    const config = {
        url: apiUrlInput.value,
        key: apiKeyInput.value,
        model: apiModelSelect.value,
        temperature: Number(temperatureRange.value),
    };
    localStorage.setItem('apiConfig', JSON.stringify(config));
    setApiStatus('success', '配置已保存');
}

// ========== AI 消息处理 ==========

// 获取启用的预设
function getEnabledPresets() {
    const files = getPresetFiles();
    const presets = [];
    Object.keys(files).forEach(fileName => {
        const fileData = files[fileName];
        if (fileData.enabled) {
            fileData.prompts.forEach(prompt => {
                if (prompt.userEnabled) {
                    presets.push({
                        role: prompt.role || 'system',
                        content: prompt.content || ''
                    });
                }
            });
        }
    });
    return presets;
}

// 获取启用的世界书条目
function getEnabledWorldBook() {
    const files = getWorldBookFiles();
    const entries = [];
    Object.keys(files).forEach(fileName => {
        const fileData = files[fileName];
        if (fileData.enabled) {
            fileData.entries.forEach(entry => {
                if (entry.userEnabled) {
                    entries.push({
                        keys: entry.key || [],
                        content: entry.content || '',
                        comment: entry.comment || ''
                    });
                }
            });
        }
    });
    return entries;
}

// 根据消息内容匹配世界书
function matchWorldBook(messageText) {
    const entries = getEnabledWorldBook();
    const matched = [];
    entries.forEach(entry => {
        const keys = Array.isArray(entry.keys) ? entry.keys : [];
        for (const key of keys) {
            if (key && messageText.includes(key)) {
                matched.push(entry.content);
                break;
            }
        }
    });
    return matched.join('\n\n');
}

// 获取启用的正则
function getEnabledRegex() {
    const list = getRegexList();
    return list.filter(item => item.userEnabled);
}

// 应用正则到输出 (placement: 2 = 输出)
function applyRegexToOutput(text) {
    const regexList = getEnabledRegex();
    let result = text;
    
    // 只应用 placement 包含 2 的正则（输出处理）
    regexList.forEach(item => {
        try {
            // 检查 placement 是否包含 2（输出）
            const placement = item.placement || [];
            if (!placement.includes(2)) return;
            
            if (item.findRegex) {
                let pattern = item.findRegex;
                let flags = 'g';
                
                // 处理 /pattern/flags 格式
                const regexMatch = pattern.match(/^\/(.+)\/([gimsuy]*)$/);
                if (regexMatch) {
                    pattern = regexMatch[1];
                    flags = regexMatch[2] || 'g';
                    if (!flags.includes('g')) flags += 'g';
                }
                
                const regex = new RegExp(pattern, flags);
                result = result.replace(regex, item.replaceString || '');
            }
        } catch (e) {
            console.warn('正则应用失败:', item.scriptName, e);
        }
    });
    
    return result.trim();
}

// 应用正则到输入 (placement: 1 = 输入)
function applyRegexToInput(text) {
    const regexList = getEnabledRegex();
    let result = text;
    
    // 只应用 placement 包含 1 的正则（输入处理）
    regexList.forEach(item => {
        try {
            const placement = item.placement || [];
            if (!placement.includes(1)) return;
            
            if (item.findRegex) {
                let pattern = item.findRegex;
                let flags = 'g';
                
                const regexMatch = pattern.match(/^\/(.+)\/([gimsuy]*)$/);
                if (regexMatch) {
                    pattern = regexMatch[1];
                    flags = regexMatch[2] || 'g';
                    if (!flags.includes('g')) flags += 'g';
                }
                
                const regex = new RegExp(pattern, flags);
                result = result.replace(regex, item.replaceString || '');
            }
        } catch (e) {
            console.warn('正则应用失败:', item.scriptName, e);
        }
    });
    
    return result;
}

// 构建 AI 请求消息
function buildAIMessages(userMessage, contactPersona = '') {
    const messages = [];
    const userData = getUserData();
    
    // 1. 添加预设
    const presets = getEnabledPresets();
    presets.forEach(p => {
        messages.push({ role: p.role, content: p.content });
    });
    
    // 2. 添加用户人设（如果有）
    if (userData.persona) {
        messages.push({ role: 'system', content: '[用户人设]\n' + userData.persona });
    }
    
    // 3. 添加联系人人设（如果有）
    if (contactPersona) {
        messages.push({ role: 'system', content: '[角色人设]\n' + contactPersona });
    }
    
    // 4. 匹配并添加世界书
    const worldBookContent = matchWorldBook(userMessage);
    if (worldBookContent) {
        messages.push({ role: 'system', content: '[世界书信息]\n' + worldBookContent });
    }
    
    // 5. 应用输入正则到用户消息
    const processedMessage = applyRegexToInput(userMessage);
    messages.push({ role: 'user', content: processedMessage });
    
    return messages;
}

// 调用 AI API
async function callAI(userMessage, contactPersona = '') {
    const config = JSON.parse(localStorage.getItem('apiConfig')) || {};
    
    if (!config.url || !config.model) {
        throw new Error('请先在设置中配置 API');
    }
    
    const messages = buildAIMessages(userMessage, contactPersona);
    
    // 自动添加 /chat/completions 后缀
    let apiUrl = config.url.replace(/\/$/, '');
    if (!apiUrl.endsWith('/chat/completions')) {
        apiUrl += '/chat/completions';
    }
    
    const headers = { 'Content-Type': 'application/json' };
    if (config.key) {
        headers['Authorization'] = `Bearer ${config.key}`;
    }
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                model: config.model,
                messages,
                temperature: config.temperature || 0.7
            })
        });
        
        if (!response.ok) {
            throw new Error(`API 错误: ${response.status}`);
        }
        
        const data = await response.json();
        let aiResponse = data.choices?.[0]?.message?.content || '';
        
        // 应用正则处理输出
        aiResponse = applyRegexToOutput(aiResponse);
        
        return aiResponse;
    } catch (error) {
        if (error.message.includes('Failed to fetch') || error.name === 'TypeError') {
            throw new Error('网络错误，可能是CORS问题。请使用本地服务器运行或使用支持CORS的API');
        }
        throw error;
    }
}

// 短信模式专用 AI 调用
async function callAISms(userMessage, contactPersona = '') {
    const config = JSON.parse(localStorage.getItem('apiConfig')) || {};
    
    if (!config.url || !config.model) {
        throw new Error('请先在设置中配置 API');
    }
    
    const messages = buildAIMessagesSms(userMessage, contactPersona);
    
    let apiUrl = config.url.replace(/\/$/, '');
    if (!apiUrl.endsWith('/chat/completions')) {
        apiUrl += '/chat/completions';
    }
    
    const headers = { 'Content-Type': 'application/json' };
    if (config.key) {
        headers['Authorization'] = `Bearer ${config.key}`;
    }
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                model: config.model,
                messages,
                temperature: config.temperature || 0.7
            })
        });
        
        if (!response.ok) {
            throw new Error(`API 错误: ${response.status}`);
        }
        
        const data = await response.json();
        let aiResponse = data.choices?.[0]?.message?.content || '';
        
        aiResponse = applyRegexToOutput(aiResponse);
        
        return aiResponse;
    } catch (error) {
        if (error.message.includes('Failed to fetch') || error.name === 'TypeError') {
            throw new Error('网络错误，可能是CORS问题');
        }
        throw error;
    }
}

// 构建短信模式 AI 消息
function buildAIMessagesSms(userMessage, contactPersona = '') {
    const messages = [];
    const userData = getUserData();
    
    // 1. 添加预设
    const presets = getEnabledPresets();
    presets.forEach(p => {
        messages.push({ role: p.role, content: p.content });
    });
    
    // 2. 添加短信模式提示（强制预设）
    const emojiInfo = getEmojiListInfo();
    const smsPrompt = `【微信聊天模式 - 强制规则】
这是微信聊天。你必须严格遵守以下规则：

【消息分段规则】
- 每一段为一个独立的消息气泡
- 段落之间用换行分隔
- 没有字数限制，可以发长消息
- 系统会按换行自动分割成多条消息

【微信风格要求】
- 语气自然，像真实发微信一样
- 可以用表情符号
- 禁止写动作描述（如*微笑*），只写纯对话内容
- 禁止使用引号包裹对话

【发送图片/照片格式】
- 当需要发送图片或照片时，必须使用格式：[图片:具体描述]
- 描述必须详细说明图片内容，例如：[图片:一张自拍，穿着白色T恤，在阳光下微笑]
- 禁止只写[图片]，必须有冒号和具体描述
- 其他格式也支持：[照片:描述]、[发图:描述]等

${emojiInfo ? '【表情包功能】\n' + emojiInfo + '\n可以在合适的时候发送表情，表情会单独作为一条消息。' : ''}`;
    
    messages.push({ role: 'system', content: smsPrompt });
    
    // 3. 添加用户人设
    if (userData.persona) {
        messages.push({ role: 'system', content: '[用户人设]\n' + userData.persona });
    }
    
    // 4. 添加联系人人设
    if (contactPersona) {
        messages.push({ role: 'system', content: '[角色人设]\n' + contactPersona });
    }
    
    // 5. 匹配并添加世界书
    const worldBookContent = matchWorldBook(userMessage);
    if (worldBookContent) {
        messages.push({ role: 'system', content: '[世界书信息]\n' + worldBookContent });
    }
    
    // 5.5 添加对话总结（如果有）
    const { summary } = getSmsSummary(originalChatName);
    if (summary) {
        messages.push({ role: 'system', content: '[之前的对话总结]\n' + summary });
    }
    
    // 5.6 添加线下场景总结和历史（线上线下互通）
    const { summary: offlineSummary } = getOfflineSummary();
    if (offlineSummary) {
        messages.push({ role: 'system', content: '[线下场景总结（你和用户在现实中的互动）]\n' + offlineSummary });
    }
    
    // 添加线下历史记录（最近15条）
    const offlineHistory = getOfflineHistory();
    if (offlineHistory.length > 0) {
        const recentOffline = offlineHistory.slice(-15);
        const offlineText = recentOffline.map(msg => {
            if (msg.type === 'user') return `[用户行动] ${msg.text}`;
            if (msg.type === 'narration') return `[旁白] ${msg.text}`;
            return `[${msg.roleName || '角色'}] ${msg.text}`;
        }).join('\n');
        messages.push({ role: 'system', content: `[线下场景最近记录（${recentOffline.length}条）]\n${offlineText}` });
    }
    
    // 5.7 添加其他联系人信息（了解用户的社交圈）
    const otherContacts = getOtherContactsInfo(originalChatName);
    if (otherContacts) {
        messages.push({ role: 'system', content: otherContacts });
    }
    
    // 5.8 添加朋友圈动态（了解社交动态）
    const momentsContext = getMomentsContext();
    if (momentsContext) {
        messages.push({ role: 'system', content: momentsContext });
    }
    
    // 6. 添加聊天历史（最近20条，排除最后一条避免与当前消息重复）
    const history = getChatHistory(originalChatName);
    console.log('【短信AI】获取历史记录，联系人:', originalChatName, '历史条数:', history.length);
    
    // 排除最后一条（如果它是用户刚发送的消息，避免重复）
    let historyToUse = [];
    if (history.length > 0) {
        const lastMsg = history[history.length - 1];
        // 如果最后一条是用户发送的且与当前消息相同，则排除
        if (lastMsg.type === 'sent' && lastMsg.text === userMessage) {
            historyToUse = history.slice(-21, -1);
        } else {
            historyToUse = history.slice(-20);
        }
    }
    
    console.log('【短信AI】使用历史条数:', historyToUse.length);
    
    historyToUse.forEach(msg => {
        let content = msg.text;
        // 如果是表情，转换为更友好的格式
        if (msg.isEmoji) {
            const emojiName = msg.text.match(/\[表情[：:]?\s*([^\]]+)\]/)?.[1] || '表情';
            content = `（发送了表情：${emojiName}）`;
        }
        
        if (msg.type === 'sent') {
            messages.push({ role: 'user', content: content });
        } else if (msg.type === 'received') {
            messages.push({ role: 'assistant', content: content });
        }
    });
    
    // 7. 应用输入正则到当前用户消息（只有在消息不在历史中时才添加）
    const processedMessage = applyRegexToInput(userMessage);
    // 检查是否需要添加当前消息（避免重复）
    const lastAddedMsg = messages[messages.length - 1];
    if (!lastAddedMsg || lastAddedMsg.role !== 'user' || lastAddedMsg.content !== processedMessage) {
        messages.push({ role: 'user', content: processedMessage });
    }
    
    return messages;
}

// 线下模式专用 AI 调用
async function callAIOffline(userMessage) {
    const config = JSON.parse(localStorage.getItem('apiConfig')) || {};
    
    if (!config.url || !config.model) {
        throw new Error('请先在设置中配置 API');
    }
    
    const messages = buildAIMessagesOffline(userMessage);
    
    let apiUrl = config.url.replace(/\/$/, '');
    if (!apiUrl.endsWith('/chat/completions')) {
        apiUrl += '/chat/completions';
    }
    
    const headers = { 'Content-Type': 'application/json' };
    if (config.key) {
        headers['Authorization'] = `Bearer ${config.key}`;
    }
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                model: config.model,
                messages,
                temperature: config.temperature || 0.7
            })
        });
        
        if (!response.ok) {
            throw new Error(`API 错误: ${response.status}`);
        }
        
        const data = await response.json();
        let aiResponse = data.choices?.[0]?.message?.content || '';
        
        // 线下模式只清理元数据标签，保留 narration/offline/sms 标签
        aiResponse = applyRegexToOutputOffline(aiResponse);
        
        return aiResponse;
    } catch (error) {
        if (error.message.includes('Failed to fetch') || error.name === 'TypeError') {
            throw new Error('网络错误，可能是CORS问题');
        }
        throw error;
    }
}

// 线下模式专用的输出清理（应用正则但保留场景标签）
function applyRegexToOutputOffline(text) {
    // 应用输出正则
    let result = applyRegexToOutput(text);
    return result.trim();
}

// 构建线下模式 AI 消息
function buildAIMessagesOffline(userMessage) {
    const messages = [];
    const userData = getUserData();
    
    // 1. 添加预设
    const presets = getEnabledPresets();
    presets.forEach(p => {
        messages.push({ role: p.role, content: p.content });
    });
    
    // 2. 添加线下模式系统提示（强制预设）
    const sceneInfo = getSceneInfo();
    const offlinePrompt = `【线下模式 - 强制规则】
这是一个现实世界的自由探索场景。用户在现实中行动，联系人可能随时出现。

${sceneInfo ? sceneInfo + '\n\n' : ''}${getAllContactsInfo()}

【旁白规则 - narration标签】
旁白使用第三人称（他/她）描写：
✓ 环境描写：天气、场景、建筑、街道、时间等
✓ 用第三人称描写联系人：如"她微微一笑"、"他转过身来"
✓ 氛围描写：气氛、声音、气味等

旁白禁止描写用户：
✗ 禁止"你走向..."、"你感到..."等以"你"为主语的描写

【联系人对话规则 - offline标签】
直接写联系人的动作和对话，不需要加人称：
✓ 动作用*星号*包裹
✓ 说话内容用"双引号"包裹
✓ 示例：*挥了挥手* "你好啊！"

【线上线下联动 - 重要】
微信（线上）和现实（线下）是同一个世界，需要保持联动：
- 如果联系人在微信中说"来找你"、"马上到"等，应该在合适时机让该联系人出现在线下场景
- 如果用户在微信中和某人约好了某事，线下场景应该呼应这个约定
- 联系人可以在线下见面时提到之前微信聊的内容
- 也可以用<sms>标签让联系人发微信，然后在后续场景中安排见面

【场景更新规则 - scene标签】
当场景发生变化时（地点、时间、天气改变），必须使用scene标签更新：
<scene location="地点" date="日期" time="时间" weather="天气"></scene>
- location: 当前所在地点（如：街道、咖啡厅、家中）
- date: 当前日期（如：11月28日）
- time: 当前时间（如：下午3点、傍晚、深夜）
- weather: 当前天气（如：晴、阴、小雨、雪）

每次回复开头如果场景有变化，先输出scene标签，再输出其他内容。

【输出格式】
- <scene location="地点" date="日期" time="时间" weather="天气"></scene>（场景变化时必须输出）
- <narration>第三人称旁白（环境+联系人描写）</narration>
- <offline contact="联系人名">*动作* "对话"</offline>
- <sms contact="联系人名">微信内容</sms>

示例：
<scene location="咖啡厅" date="11月28日" time="下午3点" weather="晴"></scene>
<narration>阳光透过咖啡厅的落地窗洒进来，空气中弥漫着咖啡的香气。</narration>

错误示例：
<narration>你走在街上</narration> ← 禁止描写用户`;
    
    messages.push({ role: 'system', content: offlinePrompt });
    
    // 3. 添加用户人设
    if (userData.persona) {
        messages.push({ role: 'system', content: '[用户人设]\n' + userData.persona });
    }
    
    // 4. 匹配并添加世界书
    const worldBookContent = matchWorldBook(userMessage);
    if (worldBookContent) {
        messages.push({ role: 'system', content: '[世界书信息]\n' + worldBookContent });
    }
    
    // 4.5 添加对话总结（如果有）
    const { summary } = getOfflineSummary();
    if (summary) {
        messages.push({ role: 'system', content: '[之前的场景总结]\n' + summary });
    }
    
    // 4.6 添加各联系人的短信记录摘要（线上线下互通）
    const smsContext = getAllSmsContext();
    if (smsContext) {
        messages.push({ role: 'system', content: '[微信聊天记录]\n' + smsContext });
    }
    
    // 4.7 添加朋友圈动态（了解社交动态）
    const momentsContext = getMomentsContext();
    if (momentsContext) {
        messages.push({ role: 'system', content: momentsContext });
    }
    
    // 5. 添加历史消息（最近10条）
    const history = getOfflineHistory();
    const recentHistory = history.slice(-10);
    recentHistory.forEach(msg => {
        if (msg.type === 'user') {
            messages.push({ role: 'user', content: msg.text });
        } else {
            const content = msg.type === 'narration' 
                ? `<narration>${msg.text}</narration>`
                : `<offline contact="${msg.roleName}">${msg.text}</offline>`;
            messages.push({ role: 'assistant', content });
        }
    });
    
    // 6. 应用输入正则到当前用户消息
    const processedMessage = applyRegexToInput(userMessage);
    messages.push({ role: 'user', content: processedMessage });
    
    return messages;
}

function loadApiConfig() {
    try {
        const stored = JSON.parse(localStorage.getItem('apiConfig'));
        if (!stored) return;
        if (stored.url) apiUrlInput.value = stored.url;
        if (stored.key) apiKeyInput.value = stored.key;
        if (stored.temperature !== undefined) {
            temperatureRange.value = stored.temperature;
            updateTemperatureValue(stored.temperature);
        }
        if (stored.model) {
            ensureModelOption(stored.model);
            apiModelSelect.value = stored.model;
        }
    } catch (error) {
        console.warn('读取配置失败', error);
    }
}

function ensureModelOption(modelName) {
    const exists = Array.from(apiModelSelect.options).some((opt) => opt.value === modelName);
    if (!exists) {
        const option = document.createElement('option');
        option.value = modelName;
        option.textContent = modelName;
        apiModelSelect.appendChild(option);
    }
}

function setApiStatus(type, message) {
    apiStatus.textContent = message;
    apiStatus.className = `api-status ${type}`;
}

function setFontStatus(type, message) {
    fontStatus.textContent = message;
    fontStatus.className = `api-status font-status ${type}`;
}

async function applyFontFromUrl(url) {
    const font = new FontFace('CustomChatFont', `url(${url})`);
    const loadedFont = await font.load();
    document.fonts.add(loadedFont);
    document.documentElement.style.setProperty(
        '--app-font',
        `'CustomChatFont', ${defaultFontStack}`
    );
}

function loadCustomFont(shouldSave) {
    const url = fontUrlInput.value.trim();
    if (!url) {
        setFontStatus('error', '请输入字体 URL');
        return;
    }

    setFontStatus('info', '正在加载字体...');
    previewFontBtn.disabled = true;
    applyFontBtn.disabled = true;

    applyFontFromUrl(url)
        .then(() => {
            if (shouldSave) {
                localStorage.setItem('fontConfig', JSON.stringify({ url }));
                setFontStatus('success', '字体已应用并保存');
            } else {
                setFontStatus('success', '字体加载成功，若满意可点击“应用字体”保存');
            }
        })
        .catch((error) => {
            console.error('Font load error:', error);
            setFontStatus('error', '字体加载失败，请检查 URL 是否可访问');
        })
        .finally(() => {
            previewFontBtn.disabled = false;
            applyFontBtn.disabled = false;
        });
}

function loadFontConfig() {
    try {
        const stored = JSON.parse(localStorage.getItem('fontConfig'));
        if (stored?.url) {
            fontUrlInput.value = stored.url;
            applyFontFromUrl(stored.url).catch(() => {
                setFontStatus('error', '已保存字体加载失败，请重新设置');
            });
        }
    } catch (error) {
        console.warn('读取字体配置失败', error);
    }
}

function resetCustomFont() {
    localStorage.removeItem('fontConfig');
    document.documentElement.style.setProperty('--app-font', defaultFontStack);
    setFontStatus('success', '已恢复默认字体');
}

// ========== 自定义CSS功能 ==========
function saveCustomCss(type, css) {
    const config = JSON.parse(localStorage.getItem('customCssConfig')) || {};
    config[type] = css;
    localStorage.setItem('customCssConfig', JSON.stringify(config));
    applyCustomCss(type, css);
    
    // 清除预览样式
    if (type === 'global') {
        removeCustomCss('global-preview');
    }
    
    alert(css ? '样式已保存并应用！' : '样式已重置！');
}

function applyCustomCss(type, css) {
    // 移除旧的样式
    removeCustomCss(type);
    
    if (!css || !css.trim()) return;
    
    // 创建新的style标签
    const style = document.createElement('style');
    style.id = `custom-css-${type}`;
    style.textContent = css;
    document.head.appendChild(style);
}

function removeCustomCss(type) {
    const existing = document.getElementById(`custom-css-${type}`);
    if (existing) {
        existing.remove();
    }
}

function loadCustomCss() {
    try {
        const config = JSON.parse(localStorage.getItem('customCssConfig')) || {};
        
        // 加载全局样式
        if (config.global) {
            applyCustomCss('global', config.global);
            if (globalCssInput) globalCssInput.value = config.global;
        }
        
        // 加载气泡样式
        if (config.bubble) {
            applyCustomCss('bubble', config.bubble);
            if (bubbleCssInput) bubbleCssInput.value = config.bubble;
        }
    } catch (e) {
        console.warn('加载自定义CSS失败:', e);
    }
}

function updateBubblePreview(css) {
    // 更新预览区域的样式
    const previewStyle = document.getElementById('bubble-preview-style');
    if (previewStyle) {
        previewStyle.remove();
    }
    
    if (!css || !css.trim()) return;
    
    // 将.chat-bubble替换为.preview-bubble用于预览
    let previewCss = css
        .replace(/\.chat-bubble\.sent/g, '.preview-bubble.sent')
        .replace(/\.chat-bubble\.received/g, '.preview-bubble.received')
        .replace(/\.chat-bubble/g, '.preview-bubble');
    
    const style = document.createElement('style');
    style.id = 'bubble-preview-style';
    style.textContent = previewCss;
    document.head.appendChild(style);
}

function restoreBodyScrollIfIdle() {
    if (
        !drawer.classList.contains('active') &&
        !smsView.classList.contains('active') &&
        !settingsView.classList.contains('active') &&
        !gameView.classList.contains('active') &&
        !chatDetailView.classList.contains('active') &&
        !contactEditView.classList.contains('active') &&
        !contactAddView.classList.contains('active') &&
        !userView.classList.contains('active') &&
        !bookView.classList.contains('active') &&
        !worldBookView.classList.contains('active') &&
        !worldBookEditView.classList.contains('active') &&
        !regexView.classList.contains('active') &&
        !regexEditView.classList.contains('active') &&
        !presetView.classList.contains('active') &&
        !presetEditView.classList.contains('active')
    ) {
        document.body.style.overflow = '';
    }
}

// 用户设置界面函数
function openUserView() {
    closeDrawer();
    userView.classList.add('active');
    document.body.style.overflow = 'hidden';
    loadUserData();
    saveViewState('user');
}

function closeUserView() {
    userView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('home');
}

function getUserData() {
    try {
        return JSON.parse(localStorage.getItem('userData')) || { name: '用户', persona: '' };
    } catch {
        return { name: '用户', persona: '' };
    }
}

// 获取用户设置（别名函数）
function getUserSettings() {
    return getUserData();
}

// 朋友圈封面背景
function getMomentsCoverBg() {
    return localStorage.getItem('momentsCoverBg') || '';
}

function saveMomentsCoverBg(imgData) {
    localStorage.setItem('momentsCoverBg', imgData);
}

function saveUserData() {
    const currentData = getUserData();
    const data = {
        name: userName.value.trim() || '用户',
        persona: userPersona.value.trim(),
        avatar: currentData.avatar || '' // 保留现有头像
    };
    localStorage.setItem('userData', JSON.stringify(data));
    alert('用户设置已保存');
}

function loadUserData() {
    const data = getUserData();
    userName.value = data.name || '用户';
    userPersona.value = data.persona || '';
    
    // 加载用户头像
    if (data.avatar) {
        userAvatarEdit.innerHTML = `<img src="${data.avatar}">`;
    }
}

// 用户头像函数
function openUserAvatarModal() {
    const data = getUserData();
    tempUserAvatarUrl = data.avatar || '';
    userAvatarUrlInput.value = tempUserAvatarUrl;
    
    if (tempUserAvatarUrl) {
        updateUserAvatarPreview(tempUserAvatarUrl);
    } else {
        resetUserAvatarPreview();
    }
    
    userAvatarModal.classList.add('active');
}

function closeUserAvatarModal() {
    userAvatarModal.classList.remove('active');
    userAvatarFileInput.value = '';
}

function updateUserAvatarPreview(url) {
    tempUserAvatarUrl = url;
    userAvatarPreview.innerHTML = `<img src="${url}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
}

function resetUserAvatarPreview() {
    tempUserAvatarUrl = '';
    userAvatarPreview.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    `;
}

function saveUserAvatarChange() {
    const data = getUserData();
    data.avatar = tempUserAvatarUrl;
    localStorage.setItem('userData', JSON.stringify(data));
    
    // 更新设置界面的头像显示
    if (tempUserAvatarUrl) {
        userAvatarEdit.innerHTML = `<img src="${tempUserAvatarUrl}">`;
    } else {
        userAvatarEdit.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        `;
    }
    
    closeUserAvatarModal();
    alert('头像已保存');
}

// 书本界面函数
function openBookView() {
    closeDrawer();
    bookView.classList.add('active');
    document.body.style.overflow = 'hidden';
    saveViewState('book');
}

function closeBookView() {
    bookView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('home');
}

// 世界书界面函数
function openWorldBookView() {
    worldBookView.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderWorldBookList();
    saveViewState('worldBook');
}

function closeWorldBookView() {
    worldBookView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('book');
}

// 正则界面函数
function openRegexView() {
    regexView.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderRegexList();
    saveViewState('regex');
}

function closeRegexView() {
    regexView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('book');
}

function getRegexList() {
    try {
        return JSON.parse(localStorage.getItem('regexList')) || [];
    } catch {
        return [];
    }
}

function saveRegexList(list) {
    localStorage.setItem('regexList', JSON.stringify(list));
}

function importRegexFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            const list = getRegexList();
            
            // 支持数组格式和单个对象格式
            if (Array.isArray(data)) {
                data.forEach(item => {
                    list.push({
                        ...item,
                        userEnabled: !item.disabled
                    });
                });
            } else if (data && typeof data === 'object' && data.scriptName) {
                // 单个对象格式
                list.push({
                    ...data,
                    userEnabled: !data.disabled
                });
            } else {
                alert('无效的正则文件格式');
                return;
            }
            
            saveRegexList(list);
            renderRegexList();
        } catch (err) {
            alert('解析文件失败: ' + err.message);
        }
    };
    reader.readAsText(file);
}

function toggleRegexEnabled(index) {
    const list = getRegexList();
    if (list[index]) {
        list[index].userEnabled = !list[index].userEnabled;
        saveRegexList(list);
        renderRegexList();
    }
}

function deleteRegex(index) {
    const list = getRegexList();
    list.splice(index, 1);
    saveRegexList(list);
    renderRegexList();
}

// 正则编辑
let currentRegexEditIndex = -1;

function openRegexEdit(index) {
    const list = getRegexList();
    const item = list[index];
    if (!item) return;
    
    currentRegexEditIndex = index;
    
    regexEditTitle.textContent = item.scriptName || '编辑正则';
    regexEditName.value = item.scriptName || '';
    regexEditFind.value = item.findRegex || '';
    regexEditReplace.value = item.replaceString || '';
    
    regexEditView.classList.add('active');
    document.body.style.overflow = 'hidden';
    saveViewState('regexEdit', { index });
}

function closeRegexEdit() {
    regexEditView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('regex');
}

function saveRegexEditChanges() {
    const list = getRegexList();
    if (list[currentRegexEditIndex]) {
        list[currentRegexEditIndex].scriptName = regexEditName.value;
        list[currentRegexEditIndex].findRegex = regexEditFind.value;
        list[currentRegexEditIndex].replaceString = regexEditReplace.value;
        saveRegexList(list);
        renderRegexList();
    }
    closeRegexEdit();
}

function renderRegexList() {
    const list = getRegexList();
    regexContent.innerHTML = '';
    
    if (list.length === 0) {
        regexContent.innerHTML = '<div class="book-empty">点击右上角导入正则文件</div>';
        return;
    }
    
    list.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `preset-item${item.userEnabled ? '' : ' disabled'}`;
        div.innerHTML = `
            <div class="preset-item-header">
                <div class="preset-item-toggle" data-index="${index}">
                    <div class="toggle-switch small ${item.userEnabled ? 'active' : ''}"></div>
                </div>
                <div class="preset-item-name">${item.scriptName || '未命名'}</div>
                <div class="preset-item-delete" data-index="${index}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </div>
            </div>
            <div class="preset-item-content">${item.findRegex || '(无正则)'}</div>
        `;
        
        div.querySelector('.preset-item-toggle').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleRegexEnabled(index);
        });
        
        div.querySelector('.preset-item-delete').addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm(`确定删除 "${item.scriptName || '未命名'}" 吗？`)) {
                deleteRegex(index);
            }
        });
        
        // 点击条目打开编辑
        div.addEventListener('click', () => {
            openRegexEdit(index);
        });
        
        regexContent.appendChild(div);
    });
}

function getWorldBookFiles() {
    try {
        return JSON.parse(localStorage.getItem('worldBookFiles')) || {};
    } catch {
        return {};
    }
}

function saveWorldBookFiles(files) {
    localStorage.setItem('worldBookFiles', JSON.stringify(files));
}

function importWorldBookFile(file) {
    const fileName = file.name.replace('.json', '');
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.entries && typeof data.entries === 'object') {
                const files = getWorldBookFiles();
                // 转换 entries 对象为数组
                const entries = Object.values(data.entries).map(entry => ({
                    ...entry,
                    userEnabled: !entry.disable
                }));
                files[fileName] = {
                    enabled: true,
                    collapsed: false,
                    entries: entries
                };
                saveWorldBookFiles(files);
                renderWorldBookList();
            } else {
                alert('无效的世界书文件格式');
            }
        } catch (err) {
            alert('解析文件失败: ' + err.message);
        }
    };
    reader.readAsText(file);
}

function toggleWorldBookFileEnabled(fileName) {
    const files = getWorldBookFiles();
    if (files[fileName]) {
        files[fileName].enabled = !files[fileName].enabled;
        saveWorldBookFiles(files);
        renderWorldBookList();
    }
}

function toggleWorldBookFileCollapsed(fileName) {
    const files = getWorldBookFiles();
    if (files[fileName]) {
        files[fileName].collapsed = !files[fileName].collapsed;
        saveWorldBookFiles(files);
        renderWorldBookList();
    }
}

function toggleWorldBookEntryEnabled(fileName, entryIndex) {
    const files = getWorldBookFiles();
    if (files[fileName] && files[fileName].entries[entryIndex]) {
        files[fileName].entries[entryIndex].userEnabled = !files[fileName].entries[entryIndex].userEnabled;
        saveWorldBookFiles(files);
        renderWorldBookList();
    }
}

function deleteWorldBookFile(fileName) {
    const files = getWorldBookFiles();
    delete files[fileName];
    saveWorldBookFiles(files);
    renderWorldBookList();
}

// 世界书编辑
let currentWBEditFile = '';
let currentWBEditIndex = -1;
let isNewWorldBookEntry = false;

function addNewWorldBookEntry() {
    isNewWorldBookEntry = true;
    currentWBEditFile = '自定义条目';
    currentWBEditIndex = -1;
    
    worldBookEditTitle.textContent = '新建条目';
    worldBookEditComment.value = '';
    worldBookEditKeys.value = '';
    worldBookEditContent.value = '';
    
    worldBookEditView.classList.add('active');
    document.body.style.overflow = 'hidden';
    saveViewState('worldBookEdit', { isNew: true });
}

function openWorldBookEdit(fileName, index) {
    const files = getWorldBookFiles();
    const entry = files[fileName]?.entries[index];
    if (!entry) return;
    
    isNewWorldBookEntry = false;
    currentWBEditFile = fileName;
    currentWBEditIndex = index;
    
    worldBookEditTitle.textContent = entry.comment || '编辑条目';
    worldBookEditComment.value = entry.comment || '';
    worldBookEditKeys.value = Array.isArray(entry.key) ? entry.key.join(', ') : (entry.key || '');
    worldBookEditContent.value = entry.content || '';
    
    worldBookEditView.classList.add('active');
    document.body.style.overflow = 'hidden';
    saveViewState('worldBookEdit', { fileName, entryIndex: index });
}

function closeWorldBookEdit() {
    worldBookEditView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('worldBook');
}

function saveWorldBookEditChanges() {
    const files = getWorldBookFiles();
    const comment = worldBookEditComment.value.trim();
    const keys = worldBookEditKeys.value.split(',').map(k => k.trim()).filter(k => k);
    const content = worldBookEditContent.value.trim();
    
    if (!comment && !keys.length && !content) {
        alert('请至少填写一项内容');
        return;
    }
    
    if (isNewWorldBookEntry) {
        // 新建条目
        if (!files[currentWBEditFile]) {
            files[currentWBEditFile] = { entries: [] };
        }
        files[currentWBEditFile].entries.push({
            comment: comment || '新条目',
            key: keys,
            content: content,
            enabled: true
        });
    } else {
        // 编辑已有条目
        if (files[currentWBEditFile]?.entries[currentWBEditIndex]) {
            files[currentWBEditFile].entries[currentWBEditIndex].comment = comment;
            files[currentWBEditFile].entries[currentWBEditIndex].key = keys;
            files[currentWBEditFile].entries[currentWBEditIndex].content = content;
        }
    }
    
    saveWorldBookFiles(files);
    renderWorldBookList();
    closeWorldBookEdit();
}

function renderWorldBookList() {
    const files = getWorldBookFiles();
    worldBookContent.innerHTML = '';
    
    const fileNames = Object.keys(files);
    if (fileNames.length === 0) {
        worldBookContent.innerHTML = '<div class="book-empty">点击右上角 + 新建条目或导入世界书文件</div>';
        return;
    }
    
    fileNames.forEach(fileName => {
        const fileData = files[fileName];
        const isCollapsed = fileData.collapsed;
        
        // 文件分组头
        const fileHeader = document.createElement('div');
        fileHeader.className = `preset-file-header${fileData.enabled ? '' : ' disabled'}`;
        fileHeader.innerHTML = `
            <div class="preset-file-collapse${isCollapsed ? ' collapsed' : ''}" data-file="${fileName}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
            <div class="preset-file-toggle" data-file="${fileName}">
                <div class="toggle-switch ${fileData.enabled ? 'active' : ''}"></div>
            </div>
            <div class="preset-file-name">${fileName}</div>
            <div class="preset-file-delete" data-file="${fileName}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </div>
        `;
        
        fileHeader.querySelector('.preset-file-collapse').addEventListener('click', () => {
            toggleWorldBookFileCollapsed(fileName);
        });
        
        fileHeader.querySelector('.preset-file-toggle').addEventListener('click', () => {
            toggleWorldBookFileEnabled(fileName);
        });
        
        fileHeader.querySelector('.preset-file-delete').addEventListener('click', () => {
            if (confirm(`确定删除 "${fileName}" 吗？`)) {
                deleteWorldBookFile(fileName);
            }
        });
        
        worldBookContent.appendChild(fileHeader);
        
        // 该文件下的条目（启用且未收缩时显示）
        if (fileData.enabled && !isCollapsed) {
            fileData.entries.forEach((entry, index) => {
                const item = document.createElement('div');
                item.className = `preset-item${entry.userEnabled ? '' : ' disabled'}`;
                const keys = Array.isArray(entry.key) ? entry.key.join(', ') : (entry.key || '');
                item.innerHTML = `
                    <div class="preset-item-header">
                        <div class="preset-item-toggle" data-file="${fileName}" data-index="${index}">
                            <div class="toggle-switch small ${entry.userEnabled ? 'active' : ''}"></div>
                        </div>
                        <div class="preset-item-name">${entry.comment || '未命名'}</div>
                    </div>
                    <div class="preset-item-content">${keys || '(无关键词)'}</div>
                `;
                
                item.querySelector('.preset-item-toggle').addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleWorldBookEntryEnabled(fileName, index);
                });
                
                // 点击条目打开编辑
                item.addEventListener('click', () => {
                    openWorldBookEdit(fileName, index);
                });
                
                worldBookContent.appendChild(item);
            });
        }
    });
}

// 预设界面函数
function openPresetView() {
    presetView.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderPresetList();
    saveViewState('preset');
}

function closePresetView() {
    presetView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('book');
}

function getPresetFiles() {
    try {
        return JSON.parse(localStorage.getItem('presetFiles')) || {};
    } catch {
        return {};
    }
}

function savePresetFiles(files) {
    localStorage.setItem('presetFiles', JSON.stringify(files));
}

function importPresetFile(file) {
    const fileName = file.name.replace('.json', '');
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.prompts && Array.isArray(data.prompts)) {
                const files = getPresetFiles();
                // 为每个 prompt 添加启用状态
                const prompts = data.prompts.map(p => ({
                    ...p,
                    userEnabled: p.enabled !== false
                }));
                files[fileName] = {
                    enabled: true,
                    prompts: prompts
                };
                savePresetFiles(files);
                renderPresetList();
            } else {
                alert('无效的预设文件格式');
            }
        } catch (err) {
            alert('解析文件失败: ' + err.message);
        }
    };
    reader.readAsText(file);
}

function toggleFileEnabled(fileName) {
    const files = getPresetFiles();
    if (files[fileName]) {
        files[fileName].enabled = !files[fileName].enabled;
        savePresetFiles(files);
        renderPresetList();
    }
}

function togglePromptEnabled(fileName, promptIndex) {
    const files = getPresetFiles();
    if (files[fileName] && files[fileName].prompts[promptIndex]) {
        files[fileName].prompts[promptIndex].userEnabled = !files[fileName].prompts[promptIndex].userEnabled;
        savePresetFiles(files);
        renderPresetList();
    }
}

function deletePresetFile(fileName) {
    const files = getPresetFiles();
    delete files[fileName];
    savePresetFiles(files);
    renderPresetList();
}

function toggleFileCollapsed(fileName) {
    const files = getPresetFiles();
    if (files[fileName]) {
        files[fileName].collapsed = !files[fileName].collapsed;
        savePresetFiles(files);
        renderPresetList();
    }
}

// 预设编辑
let currentEditFile = '';
let currentEditIndex = -1;
let isNewPresetEntry = false;

function addNewPresetEntry() {
    isNewPresetEntry = true;
    currentEditFile = '自定义预设';
    currentEditIndex = -1;
    
    presetEditTitle.textContent = '新建预设';
    presetEditName.value = '';
    presetEditRole.value = 'system';
    presetEditContentText.value = '';
    
    presetEditView.classList.add('active');
    document.body.style.overflow = 'hidden';
    saveViewState('presetEdit', { isNew: true });
}

function openPresetEdit(fileName, index) {
    const files = getPresetFiles();
    const preset = files[fileName]?.prompts[index];
    if (!preset) return;
    
    isNewPresetEntry = false;
    currentEditFile = fileName;
    currentEditIndex = index;
    
    presetEditTitle.textContent = preset.name || '编辑预设';
    presetEditName.value = preset.name || '';
    presetEditRole.value = preset.role || 'system';
    presetEditContentText.value = preset.content || '';
    
    presetEditView.classList.add('active');
    document.body.style.overflow = 'hidden';
    saveViewState('presetEdit', { fileName, promptIndex: index });
}

function closePresetEdit() {
    presetEditView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('preset');
}

function savePresetEditChanges() {
    const files = getPresetFiles();
    const name = presetEditName.value.trim();
    const role = presetEditRole.value;
    const content = presetEditContentText.value.trim();
    
    if (!name && !content) {
        alert('请至少填写名称或内容');
        return;
    }
    
    if (isNewPresetEntry) {
        // 新建预设
        if (!files[currentEditFile]) {
            files[currentEditFile] = { prompts: [], enabled: true };
        }
        files[currentEditFile].prompts.push({
            name: name || '新预设',
            role: role,
            content: content,
            enabled: true
        });
    } else {
        // 编辑已有预设
        if (files[currentEditFile]?.prompts[currentEditIndex]) {
            files[currentEditFile].prompts[currentEditIndex].name = name;
            files[currentEditFile].prompts[currentEditIndex].role = role;
            files[currentEditFile].prompts[currentEditIndex].content = content;
        }
    }
    
    savePresetFiles(files);
    renderPresetList();
    closePresetEdit();
}

function renderPresetList() {
    const files = getPresetFiles();
    presetContent.innerHTML = '';
    
    const fileNames = Object.keys(files);
    if (fileNames.length === 0) {
        presetContent.innerHTML = '<div class="book-empty">点击右上角 + 新建预设或导入预设文件</div>';
        return;
    }
    
    fileNames.forEach(fileName => {
        const fileData = files[fileName];
        const isCollapsed = fileData.collapsed;
        
        // 文件分组头
        const fileHeader = document.createElement('div');
        fileHeader.className = `preset-file-header${fileData.enabled ? '' : ' disabled'}`;
        fileHeader.innerHTML = `
            <div class="preset-file-collapse${isCollapsed ? ' collapsed' : ''}" data-file="${fileName}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
            <div class="preset-file-toggle" data-file="${fileName}">
                <div class="toggle-switch ${fileData.enabled ? 'active' : ''}"></div>
            </div>
            <div class="preset-file-name">${fileName}</div>
            <div class="preset-file-delete" data-file="${fileName}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </div>
        `;
        
        fileHeader.querySelector('.preset-file-collapse').addEventListener('click', () => {
            toggleFileCollapsed(fileName);
        });
        
        fileHeader.querySelector('.preset-file-toggle').addEventListener('click', () => {
            toggleFileEnabled(fileName);
        });
        
        fileHeader.querySelector('.preset-file-delete').addEventListener('click', () => {
            if (confirm(`确定删除 "${fileName}" 吗？`)) {
                deletePresetFile(fileName);
            }
        });
        
        presetContent.appendChild(fileHeader);
        
        // 该文件下的条目（启用且未收缩时显示）
        if (fileData.enabled && !isCollapsed) {
            fileData.prompts.forEach((preset, index) => {
                const item = document.createElement('div');
                item.className = `preset-item${preset.userEnabled ? '' : ' disabled'}`;
                item.innerHTML = `
                    <div class="preset-item-header">
                        <div class="preset-item-toggle" data-file="${fileName}" data-index="${index}">
                            <div class="toggle-switch small ${preset.userEnabled ? 'active' : ''}"></div>
                        </div>
                        <div class="preset-item-name">${preset.name || '未命名'}</div>
                        <div class="preset-item-role">${preset.role || 'system'}</div>
                    </div>
                    <div class="preset-item-content">${preset.content || '(空内容)'}</div>
                `;
                
                item.querySelector('.preset-item-toggle').addEventListener('click', (e) => {
                    e.stopPropagation();
                    togglePromptEnabled(fileName, index);
                });
                
                // 点击条目打开编辑
                item.addEventListener('click', () => {
                    openPresetEdit(fileName, index);
                });
                
                presetContent.appendChild(item);
            });
        }
    });
}

// 游戏界面函数
function openGameView() {
    closeDrawer();
    gameView.classList.add('active');
    document.body.style.overflow = 'hidden';
    saveViewState('game');
}

function closeGameView() {
    gameView.classList.remove('active');
    restoreBodyScrollIfIdle();
    saveViewState('home');
}

// 保存当前视图状态
function saveViewState(viewName, extra = {}) {
    const state = { view: viewName, ...extra };
    sessionStorage.setItem('currentView', JSON.stringify(state));
}

// 恢复视图状态
function restoreViewState() {
    try {
        const stateStr = sessionStorage.getItem('currentView');
        if (!stateStr) return;
        
        const state = JSON.parse(stateStr);
        
        switch (state.view) {
            case 'sms':
                openSmsView();
                if (state.tab === 'contacts') {
                    tabContacts.click();
                }
                break;
            case 'chatDetail':
                openSmsView();
                if (state.contactId) {
                    openChatDetail(state.contactId, state.contactName, state.avatarColor);
                }
                break;
            case 'contactEdit':
                openSmsView();
                if (state.contactId) {
                    openChatDetail(state.contactId, state.contactName, state.avatarColor);
                    openContactEdit();
                }
                break;
            case 'contactAdd':
                openSmsView();
                tabContacts.click();
                openContactAdd();
                break;
            case 'settings':
                openSettingsView();
                break;
            case 'game':
                openGameView();
                break;
            case 'user':
                openUserView();
                break;
            case 'guessGame':
                openGameView();
                openGuessGame();
                break;
            case 'book':
                openBookView();
                break;
            case 'regex':
                openBookView();
                openRegexView();
                break;
            case 'regexEdit':
                openBookView();
                openRegexView();
                if (state.index !== undefined) {
                    openRegexEdit(state.index);
                }
                break;
            case 'worldBook':
                openBookView();
                openWorldBookView();
                break;
            case 'worldBookEdit':
                openBookView();
                openWorldBookView();
                if (state.fileName && state.entryIndex !== undefined) {
                    openWorldBookEdit(state.fileName, state.entryIndex);
                }
                break;
            case 'preset':
                openBookView();
                openPresetView();
                break;
            case 'presetEdit':
                openBookView();
                openPresetView();
                if (state.fileName && state.promptIndex !== undefined) {
                    openPresetEdit(state.fileName, state.promptIndex);
                }
                break;
            case 'space':
                openSpaceView();
                break;
            case 'phone':
                openPhoneView();
                break;
            case 'contactPhone':
                openPhoneView();
                if (state.contactName) {
                    setTimeout(() => {
                        openContactPhoneView(state.contactName);
                    }, 100);
                }
                break;
            case 'phoneAppDetail':
                openPhoneView();
                if (state.contactName && state.appType) {
                    setTimeout(() => {
                        openContactPhoneView(state.contactName);
                        setTimeout(() => {
                            openPhoneApp(state.appType);
                        }, 150);
                    }, 100);
                }
                break;
        }
    } catch (e) {
        console.error('恢复视图状态失败:', e);
    }
}

// 页面加载完成后，输入框自动获得焦点
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('chatTheme') || 'warm';
    applyTheme(savedTheme);
    loadApiConfig();
    loadFontConfig();
    loadCustomCss();
    updateTemperatureValue(temperatureRange.value);
    updateSmsBadge();
    loadOfflineMessages();
    restoreViewState();
    messageInput.focus();
});

// ========== 表情库功能 ==========

// 获取表情列表
function getEmojiList() {
    try {
        return JSON.parse(localStorage.getItem('customEmojis')) || [];
    } catch {
        return [];
    }
}

// 保存表情列表
function saveEmojiList(list) {
    localStorage.setItem('customEmojis', JSON.stringify(list));
}

// 打开表情库管理
emojiApp.addEventListener('click', () => {
    openEmojiManager();
});

function openEmojiManager() {
    renderEmojiManager();
    emojiManagerView.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEmojiManager() {
    emojiManagerView.classList.remove('active');
    restoreBodyScrollIfIdle();
}

emojiManagerBack.addEventListener('click', () => {
    closeEmojiManager();
});

// 渲染表情库管理
function renderEmojiManager() {
    const emojis = getEmojiList();
    emojiManagerContent.innerHTML = '';
    
    if (emojis.length === 0) {
        emojiManagerContent.innerHTML = '<div class="book-empty" style="grid-column:1/-1;">点击右上角 + 添加表情包</div>';
        return;
    }
    
    emojis.forEach((emoji, index) => {
        const item = document.createElement('div');
        item.className = 'emoji-manager-item';
        item.innerHTML = `
            <img src="${emoji.url}" alt="${emoji.name}">
            <div class="emoji-name">${emoji.name}</div>
            <button class="emoji-delete" data-index="${index}">×</button>
        `;
        
        item.querySelector('.emoji-delete').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteEmoji(index);
        });
        
        emojiManagerContent.appendChild(item);
    });
}

// 删除表情
function deleteEmoji(index) {
    const emojis = getEmojiList();
    emojis.splice(index, 1);
    saveEmojiList(emojis);
    renderEmojiManager();
}

// 添加表情弹窗
addEmojiBtn.addEventListener('click', () => {
    openEmojiAddModal();
});

function openEmojiAddModal() {
    emojiNameInput.value = '';
    emojiUrlInput.value = '';
    emojiPreview.innerHTML = '';
    emojiAddModal.classList.add('active');
}

function closeEmojiAddModal() {
    emojiAddModal.classList.remove('active');
}

emojiAddModalClose.addEventListener('click', closeEmojiAddModal);
emojiAddCancel.addEventListener('click', closeEmojiAddModal);

emojiAddModal.addEventListener('click', (e) => {
    if (e.target === emojiAddModal) {
        closeEmojiAddModal();
    }
});

// 预览表情
emojiUrlInput.addEventListener('input', () => {
    const url = emojiUrlInput.value.trim();
    if (url) {
        emojiPreview.innerHTML = `<img src="${url}" onerror="this.style.display='none'">`;
    } else {
        emojiPreview.innerHTML = '';
    }
});

// 确认添加表情
emojiAddConfirm.addEventListener('click', () => {
    const name = emojiNameInput.value.trim();
    const url = emojiUrlInput.value.trim();
    
    if (!name) {
        alert('请输入表情名称');
        return;
    }
    if (!url) {
        alert('请输入图片URL');
        return;
    }
    
    const emojis = getEmojiList();
    emojis.push({ name, url });
    saveEmojiList(emojis);
    
    closeEmojiAddModal();
    renderEmojiManager();
});

// 聊天界面表情面板
chatEmojiBtn.addEventListener('click', () => {
    toggleEmojiPanel();
});

function toggleEmojiPanel() {
    if (emojiPanel.classList.contains('active')) {
        closeEmojiPanel();
    } else {
        openEmojiPanel();
    }
}

function openEmojiPanel() {
    renderEmojiPanel();
    emojiPanel.classList.add('active');
}

function closeEmojiPanel() {
    emojiPanel.classList.remove('active');
}

emojiPanelClose.addEventListener('click', closeEmojiPanel);

// 渲染表情选择面板
function renderEmojiPanel() {
    const emojis = getEmojiList();
    emojiGrid.innerHTML = '';
    
    if (emojis.length === 0) {
        emojiGrid.innerHTML = '<div class="emoji-empty">暂无表情，请在表情库APP中添加</div>';
        return;
    }
    
    emojis.forEach(emoji => {
        const item = document.createElement('div');
        item.className = 'emoji-item';
        item.innerHTML = `<img src="${emoji.url}" alt="${emoji.name}" title="${emoji.name}">`;
        item.addEventListener('click', () => {
            sendEmojiMessage(emoji);
            closeEmojiPanel();
        });
        emojiGrid.appendChild(item);
    });
}

// 发送表情消息
function sendEmojiMessage(emoji) {
    addEmojiBubble(emoji.url, 'sent', true, emoji.name);
}

// 添加表情气泡（带长按菜单）
function addEmojiBubble(url, type, save = false, emojiNameOrIndex = '') {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${type}`;
    bubble.innerHTML = `<img class="emoji-image" src="${url}">`;
    
    // 获取当前索引
    const history = getChatHistory(originalChatName);
    // 如果传入的是数字则作为索引使用，否则是表情名称
    const historyIndex = typeof emojiNameOrIndex === 'number' ? emojiNameOrIndex : null;
    const emojiName = typeof emojiNameOrIndex === 'string' ? emojiNameOrIndex : '';
    const bubbleIndex = historyIndex !== null ? historyIndex : history.length;
    bubble.dataset.index = bubbleIndex;
    bubble.dataset.type = type;
    bubble.dataset.isEmoji = 'true';
    
    // 长按事件
    let pressTimer = null;
    
    const startPress = (e) => {
        e.preventDefault();
        pressTimer = setTimeout(() => {
            showBubbleMenu(bubble, type, bubbleIndex);
        }, 500);
    };
    
    const endPress = () => {
        if (pressTimer) {
            clearTimeout(pressTimer);
            pressTimer = null;
        }
    };
    
    bubble.addEventListener('touchstart', startPress);
    bubble.addEventListener('touchend', endPress);
    bubble.addEventListener('touchmove', endPress);
    bubble.addEventListener('mousedown', startPress);
    bubble.addEventListener('mouseup', endPress);
    bubble.addEventListener('mouseleave', endPress);
    
    chatDetailMessages.appendChild(bubble);
    bubble.scrollIntoView({ behavior: 'smooth', block: 'end' });
    
    // 保存到本地
    if (save && emojiName) {
        history.push({ text: `[表情:${emojiName}]`, type, isEmoji: true, emojiUrl: url, timestamp: Date.now() });
        saveChatHistory(originalChatName, history);
    }
}

// 导入表情文件
importEmojiBtn.addEventListener('click', () => {
    emojiFileInput.click();
});

emojiFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        importEmojiFile(file);
    }
    emojiFileInput.value = '';
});

function importEmojiFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target.result;
        let imported = 0;
        
        try {
            // 尝试解析 JSON
            const data = JSON.parse(content);
            if (Array.isArray(data)) {
                const emojis = getEmojiList();
                data.forEach(item => {
                    if (item.name && item.url) {
                        emojis.push({ name: item.name, url: item.url });
                        imported++;
                    }
                });
                saveEmojiList(emojis);
            }
        } catch {
            // 不是 JSON，按文本解析
            // 格式：每行 "名称 URL" 或 "名称|URL" 或 "名称,URL"
            const lines = content.split('\n');
            const emojis = getEmojiList();
            
            lines.forEach(line => {
                line = line.trim();
                if (!line) return;
                
                // 尝试多种分隔符
                let parts = null;
                
                // 优先匹配 "名称：URL" 或 "名称: URL" 格式（中英文冒号）
                const colonMatch = line.match(/^(.+?)[：:]\s*(https?:\/\/.+)$/i);
                if (colonMatch) {
                    parts = [colonMatch[1], colonMatch[2]];
                } else if (line.includes('|')) {
                    parts = line.split('|');
                } else if (line.includes(',')) {
                    parts = line.split(',');
                } else if (line.includes('\t')) {
                    parts = line.split('\t');
                } else {
                    // 用空格分隔，URL 通常是最后一部分
                    const match = line.match(/^(.+?)\s+(https?:\/\/.+)$/i);
                    if (match) {
                        parts = [match[1], match[2]];
                    }
                }
                
                if (parts && parts.length >= 2) {
                    const name = parts[0].trim();
                    const url = parts[parts.length - 1].trim();
                    if (name && url && url.match(/^https?:\/\//i)) {
                        emojis.push({ name, url });
                        imported++;
                    }
                }
            });
            
            saveEmojiList(emojis);
        }
        
        renderEmojiManager();
        alert(`成功导入 ${imported} 个表情`);
    };
    reader.readAsText(file);
}

// 获取表情列表信息（用于 AI）
function getEmojiListInfo() {
    const emojis = getEmojiList();
    if (emojis.length === 0) return '';
    
    let info = '【可用表情包】\n';
    info += '你可以使用 [表情:名称] 格式发送表情，例如 [表情:开心]\n';
    info += '可用表情：' + emojis.map(e => e.name).join('、');
    return info;
}

// 根据名称查找表情
function findEmojiByName(name) {
    const emojis = getEmojiList();
    return emojis.find(e => e.name === name || e.name.includes(name) || name.includes(e.name));
}

// 解析 AI 消息中的表情标签
function parseEmojiInMessage(text) {
    const emojiPattern = /\[表情[：:]\s*([^\]]+)\]/g;
    let match;
    const results = [];
    let lastIndex = 0;
    
    while ((match = emojiPattern.exec(text)) !== null) {
        // 添加表情前的文本
        if (match.index > lastIndex) {
            results.push({ type: 'text', content: text.slice(lastIndex, match.index) });
        }
        
        // 查找表情
        const emojiName = match[1].trim();
        const emoji = findEmojiByName(emojiName);
        if (emoji) {
            results.push({ type: 'emoji', url: emoji.url, name: emojiName });
        } else {
            // 找不到表情，保留原文
            results.push({ type: 'text', content: match[0] });
        }
        
        lastIndex = match.index + match[0].length;
    }
    
    // 添加剩余文本
    if (lastIndex < text.length) {
        results.push({ type: 'text', content: text.slice(lastIndex) });
    }
    
    return results;
}

// ========== 场景功能 ==========

// 获取当前场景
function getCurrentScene() {
    try {
        return JSON.parse(localStorage.getItem('currentScene')) || null;
    } catch {
        return null;
    }
}

// 保存当前场景
function saveCurrentScene(scene) {
    if (scene) {
        localStorage.setItem('currentScene', JSON.stringify(scene));
    } else {
        localStorage.removeItem('currentScene');
    }
    updateSceneDisplay();
}

// 更新场景显示
function updateSceneDisplay() {
    const scene = getCurrentScene();
    if (scene && scene.name) {
        currentSceneName.textContent = scene.name;
        
        // 显示日期时间
        if (scene.date || scene.time) {
            const dateTimeStr = [scene.date, scene.time].filter(Boolean).join(' ');
            sceneDateTime.textContent = dateTimeStr;
            sceneDateTime.style.display = 'inline-flex';
        } else {
            sceneDateTime.style.display = 'none';
        }
        
        // 显示天气
        if (scene.weather) {
            sceneWeather.textContent = scene.weather;
            sceneWeather.style.display = 'inline-flex';
        } else {
            sceneWeather.style.display = 'none';
        }
    } else {
        currentSceneName.textContent = '未知地点';
        sceneDateTime.style.display = 'none';
        sceneWeather.style.display = 'none';
    }
}

// 打开场景设置弹窗
offlineSceneInfo.addEventListener('click', () => {
    openSceneModal();
});

function openSceneModal() {
    const scene = getCurrentScene();
    
    // 重置预设按钮状态
    document.querySelectorAll('.scene-preset-btn').forEach(btn => {
        btn.classList.remove('active');
        if (scene && btn.dataset.scene === scene.name) {
            btn.classList.add('active');
        }
    });
    
    // 填充自定义场景
    customSceneInput.value = scene?.customName || '';
    sceneDescription.value = scene?.description || '';
    
    sceneModal.classList.add('active');
}

function closeSceneModal() {
    sceneModal.classList.remove('active');
}

sceneModalClose.addEventListener('click', closeSceneModal);

sceneModal.addEventListener('click', (e) => {
    if (e.target === sceneModal) {
        closeSceneModal();
    }
});

// 预设场景按钮点击
document.querySelectorAll('.scene-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.scene-preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        customSceneInput.value = '';
    });
});

// 自定义场景输入时取消预设选中
customSceneInput.addEventListener('input', () => {
    document.querySelectorAll('.scene-preset-btn').forEach(b => b.classList.remove('active'));
});

// 保存场景
sceneSave.addEventListener('click', () => {
    const activePreset = document.querySelector('.scene-preset-btn.active');
    const customName = customSceneInput.value.trim();
    const description = sceneDescription.value.trim();
    
    let sceneName = '';
    if (customName) {
        sceneName = customName;
    } else if (activePreset) {
        sceneName = activePreset.dataset.scene;
    }
    
    if (sceneName) {
        saveCurrentScene({
            name: sceneName,
            customName: customName,
            description: description
        });
    }
    
    closeSceneModal();
});

// 清除场景
sceneClear.addEventListener('click', () => {
    saveCurrentScene(null);
    closeSceneModal();
});

// 获取场景信息（用于 AI）
function getSceneInfo() {
    const scene = getCurrentScene();
    if (!scene || !scene.name) {
        return '【当前场景】未设定，请在回复开头使用<scene>标签设定场景。';
    }
    
    let info = `【当前场景】\n`;
    info += `地点：${scene.name}\n`;
    if (scene.date) info += `日期：${scene.date}\n`;
    if (scene.time) info += `时间：${scene.time}\n`;
    if (scene.weather) info += `天气：${scene.weather}\n`;
    
    // 添加场景规则
    const privateScenes = ['家中', '卧室', '浴室', '私人空间'];
    const semiPrivateScenes = ['公司', '学校', '朋友家'];
    
    if (privateScenes.some(s => scene.name.includes(s))) {
        info += '这是私密空间，只有被邀请或住在一起的人才能出现。\n';
    } else if (semiPrivateScenes.some(s => scene.name.includes(s))) {
        info += '这是半私密场所，只有在这里有关系的人（如同事、同学）才可能出现。\n';
    } else {
        info += '这是公共场所，认识的人可能偶遇。\n';
    }
    
    if (scene.description) {
        info += `场景说明：${scene.description}\n`;
    }
    
    info += '当场景变化时（地点、时间、天气改变），请用<scene>标签更新。';
    
    return info;
}

// 初始化场景显示
updateSceneDisplay();

// 初始化主题文字
applyThemeText(document.body.dataset.theme || 'warm');

// ========== 心声功能 ==========

// 获取心声数据
function getInnerVoice(contactName, mode = 'offline') {
    const key = `innerVoice_${mode}_${contactName}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// 保存心声数据
function saveInnerVoice(contactName, mode, content) {
    const key = `innerVoice_${mode}_${contactName}`;
    const data = {
        content: content,
        time: new Date().toLocaleString('zh-CN'),
        contactName: contactName
    };
    localStorage.setItem(key, JSON.stringify(data));
}

// 显示心声弹窗
function showInnerVoiceModal(contactName, mode = 'offline') {
    const contacts = getCustomContacts();
    const contact = contacts.find(c => c.name === contactName);
    const saved = getContactData(contactName);
    const displayName = saved?.nickname || contactName;
    
    // 设置头像
    if (saved?.avatar) {
        innerVoiceAvatar.innerHTML = `<img src="${saved.avatar}">`;
    } else {
        innerVoiceAvatar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
    }
    if (saved?.color) {
        innerVoiceAvatar.style.background = saved.color;
    }
    
    innerVoiceName.textContent = `${displayName}的心声`;
    
    // 获取现有心声
    const existingVoice = getInnerVoice(contactName, mode);
    
    if (existingVoice && existingVoice.content) {
        innerVoiceTime.textContent = existingVoice.time;
        innerVoiceBody.innerHTML = `<div class="inner-voice-text">${escapeHtml(existingVoice.content)}</div>`;
    } else {
        innerVoiceTime.textContent = '';
        innerVoiceBody.innerHTML = `
            <div class="inner-voice-empty">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <div>暂无心声</div>
                <div style="font-size: 12px; margin-top: 8px;">继续对话后会自动生成</div>
            </div>
        `;
    }
    
    innerVoiceModal.classList.add('active');
}

// 关闭心声弹窗
function closeInnerVoiceModal() {
    innerVoiceModal.classList.remove('active');
}

// 生成心声内容
async function generateInnerVoice(contactName, mode, contextText) {
    const contacts = getCustomContacts();
    const contact = contacts.find(c => c.name === contactName);
    const persona = contact?.persona || '';
    
    if (!persona) return; // 没有人设就不生成
    
    const saved = getContactData(contactName);
    const displayName = saved?.nickname || contactName;
    
    const userSettings = getUserSettings();
    const userName = userSettings.name || '用户';
    
    const modeText = mode === 'offline' ? '线下面对面互动' : '线上微信聊天';
    
    const prompt = `【任务】根据刚才的${modeText}，写出"${displayName}"此刻的内心独白。

【${displayName}的人设】
${persona}

【用户信息】
用户名：${userName}

【刚才发生的事】
${contextText}

【要求】
1. 完全以${displayName}第一人称视角
2. 写出此刻内心真实的想法和情感，50-150字
3. 要符合人设，体现性格特点
4. 可以包含对${userName}的看法、感受
5. 语气要自然，像真实的内心活动

直接输出内心独白，不要任何标题或格式：`;

    try {
        const config = JSON.parse(localStorage.getItem('apiConfig')) || {};
        if (!config.url || !config.model) return;
        
        const response = await callAI(prompt, '');
        if (response) {
            saveInnerVoice(contactName, mode, response.trim());
        }
    } catch (e) {
        console.error('生成心声失败:', e);
    }
}

// 线下模式心声按钮点击
viewOfflineInnerVoiceBtn.addEventListener('click', () => {
    // 获取当前场景中的角色
    const history = getOfflineHistory();
    if (history.length === 0) {
        alert('暂无线下对话');
        return;
    }
    
    // 从历史记录中找出出现的角色
    const characters = new Set();
    history.forEach(msg => {
        if (msg.type === 'ai' && msg.roleName) {
            characters.add(msg.roleName);
        }
    });
    
    if (characters.size === 0) {
        alert('暂无角色出现');
        return;
    }
    
    // 如果只有一个角色，直接显示
    if (characters.size === 1) {
        const charName = [...characters][0];
        showInnerVoiceModal(charName, 'offline');
        return;
    }
    
    // 多个角色，让用户选择
    const charList = [...characters];
    const choice = prompt(`请选择要查看心声的角色（输入序号）：\n${charList.map((c, i) => `${i + 1}. ${c}`).join('\n')}`);
    const index = parseInt(choice) - 1;
    if (index >= 0 && index < charList.length) {
        showInnerVoiceModal(charList[index], 'offline');
    }
});

// 线上聊天心声按钮点击
viewChatInnerVoiceBtn.addEventListener('click', () => {
    if (!originalChatName) return;
    showInnerVoiceModal(originalChatName, 'online');
});

// 关闭心声弹窗
innerVoiceClose.addEventListener('click', closeInnerVoiceModal);
innerVoiceModal.addEventListener('click', (e) => {
    if (e.target === innerVoiceModal) {
        closeInnerVoiceModal();
    }
});
