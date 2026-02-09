import "./footer.css"
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    // تابع کمکی برای باز کردن لینک‌های خارجی
    const openLink = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <footer>
            <div className="continer">
                <div className="Address-section">
                    <div className="Logo-channel">
                        <div className="channels">
                            <div className="Telegram" onClick={() => openLink("https://t.me/hard_days_champion")}>
                                <TelegramIcon />
                            </div>
                            <div className="Instagram" onClick={() => openLink("https://instagram.com/zaedreamer")}>
                                <InstagramIcon />
                            </div>
                            <div className="LinkedIn" onClick={() => openLink("https://github.com/hamednourzaei")}>
                                <GitHubIcon />
                            </div>
                        </div>
                        <div className="boxLogo">
                            <img src="/logo/logo.png" alt="Logo" />
                        </div>
                    </div>

                    <div className="Address">
                        <div className="boxAddres" onClick={() => openLink("mailto:tsarpremiumstream@gmail.com")}>
                            <div className="MtnAddress">tsarpremiumstream@gmail.com</div>
                            <div className="iconeAddress"><EmailIcon /></div>
                        </div>
                        <div className="boxAddres">
                            <div className="MtnAddress">09025++++419</div>
                            <div className="iconeAddress"><LocalPhoneIcon /></div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="Links-section" dir="rtl">
                    <div className="Description">
                        <p className="Description-title">درباره سایت</p>
                        <p className="Description-mten">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                        <p className="Description-Rights">کلیه حقوق مادی و معنوی سایت محفوظ است</p>
                    </div>

                    <div className="Links">
                        <div className="div-Links">
                            <p className="div-Links-title">خدمات مشتریان</p>
                            <ul>
                                <li>پاسخ به پرسش های متداول</li>
                                <li>رویه های بازگرداندن کالا</li>
                                <li>حریم خصوصی</li>
                                <li>گزارش باگ</li>
                            </ul>
                        </div>
                        <div className="div-Links">
                            <p className="div-Links-title">دسترسی سریع</p>
                            <ul>
                                <li>قوانین و مقررات</li>
                                <li>نحوه ثبت فروش</li>
                                <li>شیوه پرداخت</li>
                            </ul>
                        </div>
                    </div>

                    <div className="namad-sendEmail">
                        <div className="namad">
                            <button>محل نماد</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;