document.addEventListener("DOMContentLoaded", function () {
  cookieconsent.run({
    notice_banner_type: "simple",
    consent_type: "express",
    palette: "light",
    language: "pt",
    page_load_consent_levels: ["strictly-necessary"],
    notice_banner_reject_button_hide: false,
    preferences_center_close_button_hide: false,
    page_refresh_confirmation_buttons: false,
    website_privacy_policy_url: "https://www.cappta.com.br/aviso-cookies/",
  });
});
