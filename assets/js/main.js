class fokNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="side-navbar">
            <header class="nav-item top-bar">
            <ion-icon name="menu" class="collapse-button"></ion-icon>
                <div class="logo-img hover-anim">
                    <a href="/" title="fokifox"><img src="/assets/main/logo.png" alt="fokifox"></a>
                </div>
            </header>
            
            <div class="sidebar-content">
                <nav>
                    <ul class="nav-item">
                        <li>
                        <a href="/" class="btns-border hover-anim" title="Главная">Главная</a>
                        </li>
                        <li>
                        <a href="/wip/" class="btns-border hover-anim" title="Мои игры">Мои игры</a>
                        </li>
                        <li>
                        <a href="/games/rus/yume-nikki" class="btns-border hover-anim" title="Русификаторы">Русификаторы</a>
                        </li>
                        <li>
                        <a href="/wip/" class="btns-border hover-anim" title="Дискография">Дискография</a>
                        </li>
                        <li>
                        <a href="/wip/" class="btns-border hover-anim" title="Контакты">Контакты</a>
                        </li>
                </ul>
        
            <div class="social-links" style="margin-top: 12px; margin-bottom: 12px;">
                <a href="https://www.youtube.com/@FOKIFOX" title="YouTube" class="hover-anim-2" target="_blank" rel="noopener">
                    <ion-icon name="logo-youtube"></ion-icon>
                </a>
                <a href="https://discord.gg/3zS932Qapp" title="Discord" class="hover-anim-2" target="_blank" rel="noopener">
                    <ion-icon name="logo-discord"></ion-icon>
                </a>
                <a href="https://github.com/xoffoki/fokifox.ru" title="GitHub" class="hover-anim-2" target="_blank" rel="noopener">
                    <ion-icon name="logo-github"></ion-icon>
                </a>

            </div>
            </nav>

            <div class="support-links-bar nav-item">
                <p style="margin-bottom: 6px;">Поддержать:</p>
                <ul>
                    <li>
                        <a href="https://yoomoney.ru/to/4100117645314490" class="btns-border-simplified" target="_blank" rel="noopener" title="ЮMoney">ЮMoney</a>
                    </li>
                    <li>
                        <a href="https://boosty.to/fokifox" class="btns-border-simplified" target="_blank" title="Boosty">Boosty</a>
                    </li>
                </ul>
            </div>
            </div>
    </section>
        
        `
    }
}

customElements.define('fokifox-nav', fokNav);



class fokFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-content-1">
            <div class="main-footer">
                <div class="footer-col-1">
                <section class="friends">
                    <p>Мои друзья:</p>
                    <div class="friend-list">
                    <a href="https://gamejolt.com/@hideomakeo" title="hideomaKeo.lol" target="_blank" rel="noopener"><img src="/assets/main/friend_bnrs/hideomakeo.png" loading="lazy" alt=""></a>
                    </div>
                </section>
                <section class="friends">
                    <p>Мой баннер:</p>
                    <div class="friend-list">
                    <a href="/assets/main/friend_bnrs/fokifox.png" title="Баннер fokifox.ru" target="_blank"><img src="/assets/main/friend_bnrs/fokifox.png" loading="lazy" alt=""></a>
                    </div>
                    
                </section>
                </div>
        
                <div class="footer-col-comb-1">
                <div class="footer-col-2">
        
                    <section class="games">
                    <p>Мои игры:</p>
                    <ul>
                        <li><a href="https://gamejolt.com/games/postivi/631297">Postivi</a></li>
                    </ul>
                    </section>
        
                    <section class="games-rus">
                    <p>Мои русификаторы:</p>
                    <ul>
                        <li><a href="/games/rus/yume-nikki/">Дневник Сновидений<br> (Yume Nikki)</br></a></li>
                    </ul>
                    </section>
        
                    <section class="games-collab">
                    <p>Участие в проектах:</p>
                    <ul>
                        <li><a href="https://scripting.indie.af/xd1/">xd1</a></li>
                    </ul>
                    </section>
        
                </div>
        
                    <div class="footer-col-3">

                    <section class="additional">
                        <p>Дополнительно:</p>
                        <ul>
                           <li><a href="https://github.com/xoffoki/fokifox.ru" target="_blank" rel="noopener">Сайт на GitHub</a></li>
                        </ul>
                    </section>

        
                    <section class="music">
                        <p>Музыка:</p>
                        <ul>
                        <li><a href="/wip/">Дискография</a></li>
                        </ul>
                    </section>
        
                    <section class="contact">
                        <p>Связаться со мной:</p>
                        <ul>
                        <li><p><ion-icon name="mail"></ion-icon> <a href="mailto:ya@fokifox.ru"> ya@fokifox.ru</a></p></li>
                        </ul>
                    </section>
                    </div>
                </div>
                </div>  
            </div>
        
            <div class="secondary-footer">
                <p>Сайт <a href="/">fokifox.ru</a></p>
                <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" title='Контент доступен по лицензии "Creative Commons Attribution-NonCommercial-ShareAlike", если не указана иная лицензия.'><img alt="Creative Commons License" style="border-width:0;vertical-align: middle;" src="/assets/main/licenses/by-nc-sa/4.0.png" loading="lazy"></a>
            </div>
      </footer>
        
        `
    }
}

customElements.define('fokifox-footer', fokFooter);

class fokShare extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="share">
                <div class="section-content">
                    <div class="share-buttons">
                        <a class="button-share share-vk hover-anim" title="Поделиться во ВКонтакте" target="_blank" rel="noopener">
                            <ion-icon name="logo-vk"></ion-icon>
                            <div class="share-label">
                                ...
                            </div>
                        </a>
                        <a class="button-share share-tg hover-anim" title="Поделиться в Telegram" target="_blank" rel="noopener">
                            <img src="/assets/main/svg/telegram.svg" alt="">
                            <div class="share-label">
                                ...
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        `
    }
}

customElements.define('fokifox-share', fokShare);

// responsive navbar

const sideBarContent = document.querySelector(".sidebar-content");
const collapseBtn = document.querySelector(".collapse-button");

collapseBtn.addEventListener('click', (event) => {
    if (sideBarContent.classList.contains("sidebar-responsive")) {
        sideBarContent.classList.remove("sidebar-responsive");
    } else {
        sideBarContent.classList.add("sidebar-responsive");
    }
});

// share

const vkBtn = document.querySelector(".share-vk");
const telegramBtn = document.querySelector(".share-tg");
const btnLabel = document.querySelectorAll(".share-label");

// onload

function onloadEvents(){

    // share

    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI(document.title);

    vkBtn.setAttribute("href", `http://vk.com/share.php?url=${postUrl}&title=${postTitle}`) 
    telegramBtn.setAttribute("href", `https://t.me/share/url?url=${postUrl}&text=${postTitle}`)

    btnLabel.forEach(btnLabel => {btnLabel.textContent = "Поделиться"});


    // automatic anchor titles n rels

    document.querySelectorAll("footer a, .breadcrumb a").forEach(a =>{
        
        if (a.hasAttribute("title")) {

        } else {
            a.setAttribute("title", a.textContent)
        };
    });

    document.querySelectorAll("a").forEach(a => {
        if (a.hasAttribute("target")){
            a.setAttribute("rel", "noopener")
        }
    });
}
window.onload = onloadEvents;

// images


document.querySelectorAll('.screenshot-section img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup').style.display = "block";
        document.querySelector('.popup img').src = image.getAttribute('src');
    }
});

document.querySelectorAll('.carousel img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.screenshot-section img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup span').onclick = () =>{
    document.querySelector('.popup').style.display = "none";
}
