declare const _default: ":root {\n  --border-width: 1px;\n  --border-radius: 0.5rem;\n  --color-error: #c94b4b;\n  --color-info: #157efb;\n  --color-info-hover: #0f6ddb;\n  --color-info-text: #fff;\n}\n\n.__next-auth-theme-auto,\n.__next-auth-theme-light {\n  --color-background: #ececec;\n  --color-background-hover: rgba(236, 236, 236, 0.8);\n  --color-background-card: #fff;\n  --color-text: #000;\n  --color-primary: #444;\n  --color-control-border: #bbb;\n  --color-button-active-background: #f9f9f9;\n  --color-button-active-border: #aaa;\n  --color-separator: #ccc;\n}\n\n.__next-auth-theme-dark {\n  --color-background: #161b22;\n  --color-background-hover: rgba(22, 27, 34, 0.8);\n  --color-background-card: #0d1117;\n  --color-text: #fff;\n  --color-primary: #ccc;\n  --color-control-border: #555;\n  --color-button-active-background: #060606;\n  --color-button-active-border: #666;\n  --color-separator: #444;\n}\n\n@media (prefers-color-scheme: dark) {\n  .__next-auth-theme-auto {\n    --color-background: #161b22;\n    --color-background-hover: rgba(22, 27, 34, 0.8);\n    --color-background-card: #0d1117;\n    --color-text: #fff;\n    --color-primary: #ccc;\n    --color-control-border: #555;\n    --color-button-active-background: #060606;\n    --color-button-active-border: #666;\n    --color-separator: #444;\n  }\n\n  button,\n  a.button {\n    color: var(--provider-dark-color, var(--color-primary)) !important;\n    background-color: var(\n      --provider-dark-bg,\n      var(--color-background)\n    ) !important;\n  }\n\n    :is(button,a.button):hover {\n      background-color: var(\n        --provider-dark-bg-hover,\n        var(--color-background-hover)\n      ) !important;\n    }\n\n    :is(button,a.button) span {\n      color: var(--provider-dark-bg) !important;\n    }\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--color-background);\n  margin: 0;\n  padding: 0;\n  font-family:\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    Roboto,\n    \"Helvetica Neue\",\n    Arial,\n    \"Noto Sans\",\n    sans-serif,\n    \"Apple Color Emoji\",\n    \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\",\n    \"Noto Color Emoji\";\n}\n\nh1 {\n  margin-bottom: 1.5rem;\n  padding: 0 1rem;\n  font-weight: 400;\n  color: var(--color-text);\n}\n\np {\n  margin-bottom: 1.5rem;\n  padding: 0 1rem;\n  color: var(--color-text);\n}\n\nform {\n  margin: 0;\n  padding: 0;\n}\n\nlabel {\n  font-weight: 500;\n  text-align: left;\n  margin-bottom: 0.25rem;\n  display: block;\n  color: var(--color-text);\n}\n\ninput[type] {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  padding: 0.5rem 1rem;\n  border: var(--border-width) solid var(--color-control-border);\n  background: var(--color-background-card);\n  font-size: 1rem;\n  border-radius: var(--border-radius);\n  color: var(--color-text);\n}\n\np {\n  font-size: 1.1rem;\n  line-height: 2rem;\n}\n\na.button {\n  text-decoration: none;\n  line-height: 1rem;\n}\n\na.button:link,\n  a.button:visited {\n    background-color: var(--color-background);\n    color: var(--color-primary);\n  }\n\nbutton span {\n  flex-grow: 1;\n}\n\nbutton,\na.button {\n  padding: 0.75rem 1rem;\n  color: var(--provider-color, var(--color-primary));\n  background-color: var(--provider-bg, var(--color-background));\n  border: 1px solid #00000031;\n  font-size: 0.9rem;\n  height: 50px;\n  border-radius: var(--border-radius);\n  transition: background-color 250ms ease-in-out;\n  font-weight: 300;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n:is(button,a.button):hover {\n    background-color: var(--provider-bg-hover, var(--color-background-hover));\n    cursor: pointer;\n  }\n\n:is(button,a.button):active {\n    cursor: pointer;\n  }\n\n:is(button,a.button) span {\n    color: #fff;\n  }\n\n:is(button,a.button) #provider-logo {\n    width: 25px;\n    display: block;\n  }\n\n#submitButton {\n  color: var(--button-text-color, var(--color-info-text));\n  background-color: var(--brand-color, var(--color-info));\n  width: 100%;\n}\n\n#submitButton:hover {\n    background-color: var(\n      --button-hover-bg,\n      var(--color-info-hover)\n    ) !important;\n  }\n\na.site {\n  color: var(--color-primary);\n  text-decoration: none;\n  font-size: 1rem;\n  line-height: 2rem;\n}\n\na.site:hover {\n    text-decoration: underline;\n  }\n\n.page {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  place-items: center;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.page > div {\n    text-align: center;\n  }\n\n.error a.button {\n    padding-left: 2rem;\n    padding-right: 2rem;\n    margin-top: 0.5rem;\n  }\n\n.error .message {\n    margin-bottom: 1.5rem;\n  }\n\n.signin input[type=\"text\"] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n\n.signin hr {\n    display: block;\n    border: 0;\n    border-top: 1px solid var(--color-separator);\n    margin: 2rem auto 1rem auto;\n    overflow: visible;\n  }\n\n.signin hr::before {\n      content: \"or\";\n      background: var(--color-background-card);\n      color: #888;\n      padding: 0 0.4rem;\n      position: relative;\n      top: -0.7rem;\n    }\n\n.signin .error {\n    background: #f5f5f5;\n    font-weight: 500;\n    border-radius: 0.3rem;\n    background: var(--color-error);\n  }\n\n.signin .error p {\n      text-align: left;\n      padding: 0.5rem 1rem;\n      font-size: 0.9rem;\n      line-height: 1.2rem;\n      color: var(--color-info-text);\n    }\n\n.signin > div,\n  .signin form {\n    display: block;\n  }\n\n.signin > div input[type], .signin form input[type] {\n      margin-bottom: 0.5rem;\n    }\n\n.signin > div button, .signin form button {\n      width: 100%;\n    }\n\n.signin .provider + .provider {\n    margin-top: 1rem;\n  }\n\n.logo {\n  display: inline-block;\n  max-width: 150px;\n  margin: 1.25rem 0;\n  max-height: 70px;\n}\n\n.card {\n  background-color: var(--color-background-card);\n  border-radius: 1rem;\n  padding: 1.25rem 2rem;\n}\n\n.card .header {\n    color: var(--color-primary);\n  }\n\n.card input[type]::-moz-placeholder {\n    color: color-mix(\n      in srgb,\n      var(--color-text) 20%,\n      var(--color-button-active-background)\n    );\n  }\n\n.card input[type]::placeholder {\n    color: color-mix(\n      in srgb,\n      var(--color-text) 20%,\n      var(--color-button-active-background)\n    );\n  }\n\n.card input[type] {\n    background: color-mix(in srgb, var(--color-background-card) 95%, black);\n  }\n\n.section-header {\n  color: var(--color-text);\n}\n\n@media screen and (min-width: 450px) {\n  .card {\n    margin: 2rem 0;\n    width: 368px;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  .card {\n    margin: 1rem 0;\n    width: 343px;\n  }\n}\n";
export default _default;
//# sourceMappingURL=styles.d.ts.map