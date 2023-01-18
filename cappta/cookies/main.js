(function () {
  var s = document.createElement("script");
  s.src = "https://cdn-prod.securiti.ai/consent/cookie-consent-sdk.js";
  s.setAttribute("data-tenant-uuid", "72a4c2b6-dd5f-42b7-b876-9ff36f37c77e");
  s.setAttribute("data-domain-uuid", "a2793c06-ab5a-4041-9103-77a3c1ad4539");
  s.setAttribute("data-backend-url", "https://app.securiti.ai");
  s.defer = true;
  var parent_node = document.head || document.body;
  parent_node.appendChild(s);
  s.addEventListener("load", function () {
    window.initCmp();
  });
})();
