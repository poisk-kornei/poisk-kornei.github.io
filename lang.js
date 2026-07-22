const translations = {
    ru: {
        title: "Архивный поиск предков",
        btn: "Консультация",
        right1: "Поиск документов для Карты поляка и подтверждения происхождения.",
        right2: "✦ Работа по доверенности во всех госархивах Беларуси.",
        secHead: "Поиск происхождения",
        card1T: "Польские корни",
        card2T: "Еврейские корни",
        card3T: "Немецкие корни",
        card4T: "Сложные кейсы",
        formH2: "Форма запроса",
        formP: "Оставьте свои контакты. Наш эксперт-генеалог проведет бесплатный анализ и свяжется с вами.",
        formH4: "Анкета поиска",
        pName: "Ваше имя",
        pContact: "Телефон / Telegram / WhatsApp",
        pEmail: "Email для связи",
        opt0: "Какую национальность предков ищете?",
        opt1: "Польские корни (Карта поляка)",
        opt2: "Еврейские корни",
        opt3: "Немецкие корни",
        opt4: "Сложный кейс (Восстановление родства)",
        label: "Готов предоставить нотариальную доверенность для ЗАГС и архивов",
        pMsg: "Известные ФИО, годы и места рождения предков в Беларуси",
        btnSub: "Отправить запрос"
    },
    en: {
        title: "Archival Ancestry Search",
        btn: "Consultation",
        right1: "Search for documents for Karta Polaka and confirmation of origin.",
        right2: "✦ Proxy work in all state archives of Belarus.",
        secHead: "Search of Origin",
        card1T: "Polish Roots",
        card2T: "Jewish Roots",
        card3T: "German Roots",
        card4T: "Complex Cases",
        formH2: "Inquiry Form",
        formP: "Leave your contact details. Our expert genealogist will conduct a free analysis and contact you.",
        formH4: "Search Questionnaire",
        pName: "Your name",
        pContact: "Phone / Telegram / WhatsApp",
        pEmail: "Contact Email",
        opt0: "Which ancestry nationality are you looking for?",
        opt1: "Polish Roots (Karta Polaka)",
        opt2: "Jewish Roots",
        opt3: "German Roots",
        opt4: "Complex Case (Kinship Restoration)",
        label: "Ready to provide a power of attorney for archives and registry offices",
        pMsg: "Known names, years, and places of birth of ancestors in Belarus",
        btnSub: "Send Request"
    }
};

window.changeLang = function(lang) {
    try {
        // Главный экран
        const t = document.querySelector('.hero-left h1');
        const b = document.querySelector('.hero-left .btn-get-started');
        const r1 = document.querySelector('.box-mini-purple');
        const r2 = document.querySelector('.box-mini-lime');
        
        if(t) t.textContent = translations[lang].title;
        if(b) b.textContent = translations[lang].btn;
        if(r1) r1.textContent = translations[lang].right1;
        if(r2) r2.textContent = translations[lang].right2;
        
        // Заголовок секции
        const sh = document.querySelector('.section-header');
        if(sh) sh.textContent = translations[lang].secHead;
        
        // Карточки
        const cards = document.querySelectorAll('.prog-card h3');
        if(cards && cards.length >= 4) {
            cards[0].textContent = translations[lang].card1T;
            cards[1].textContent = translations[lang].card2T;
            cards[2].textContent = translations[lang].card3T;
            cards[3].textContent = translations[lang].card4T;
        }
        
        // Анкета
        const fh2 = document.querySelector('.bottom-grid .bottom-info h2');
        const fp = document.querySelector('.bottom-grid .bottom-info p');
        const fh4 = document.querySelector('.pro-form-wrapper h4');
        
        if(fh2) fh2.textContent = translations[lang].formH2;
        if(fp) fp.textContent = translations[lang].formP;
        if(fh4) fh4.textContent = translations[lang].formH4;
        
        // Поля ввода
        const iName = document.querySelector('input[name="name"]');
        const iContact = document.querySelector('input[name="contact"]');
        const iEmail = document.querySelector('input[name="email"]');
        const iMsg = document.querySelector('textarea[name="message"]');
        
        if(iName) iName.placeholder = translations[lang].pName;
        if(iContact) iContact.placeholder = translations[lang].pContact;
        if(iEmail) iEmail.placeholder = translations[lang].pEmail;
        if(iMsg) iMsg.placeholder = translations[lang].pMsg;
        
        // Чекбокс и кнопка
        const lbl = document.querySelector('label[for="attorney_check"]');
        const sBtn = document.querySelector('.btn-submit-neon');
        
        if(lbl) lbl.textContent = translations[lang].label;
        if(sBtn) sBtn.textContent = translations[lang].btnSub;
        
        // Выпадающий список
        const sel = document.querySelector('select[name="ethnicity"]');
        if(sel && sel.options.length >= 5) {
            sel.options[0].textContent = translations[lang].opt0;
            sel.options[1].textContent = translations[lang].opt1;
            sel.options[2].textContent = translations[lang].opt2;
            sel.options[3].textContent = translations[lang].opt3;
            sel.options[4].textContent = translations[lang].opt4;
        }
    } catch(e) {
        console.log("Translation error:", e);
    }
};
